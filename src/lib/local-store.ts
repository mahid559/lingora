/**
 * Anonymous local-first data layer.
 *
 * Everything the learning experience needs (completed lessons, quiz attempts,
 * saved vocabulary, daily activity, preferences) is persisted to the browser's
 * localStorage under a single versioned, validated key. The store is plain
 * TypeScript (no `"use server"`, no `"use client"`): server modules may import
 * the pure helpers, while the React provider in `learning-context.tsx` exposes
 * the same operations to client views.
 *
 * The API mirrors the Supabase-backed actions (`src/actions/*`) and snapshot
 * builders (`src/lib/queries.ts`) so the storage backend can be swapped later
 * without touching the views.
 *
 * SSR rule: localStorage only exists in the browser, so nothing here touches
 * `window` at module scope, and `loadLocalState()` guards on `typeof window`.
 */

import { allVocabulary, getLessonByDaySafe, lessons } from "@/data/lessons/index";
import { completionMilestones, type AchievementType } from "@/lib/achievements";
import { lastNDates, toBanglaDigits, toLocalDateString } from "@/lib/dates";
import { computeStreaks } from "@/lib/streak";
import { cleanText, validateDisplayName } from "@/lib/validators";
import type {
  ActivityEvent,
  DashboardChecklistItem,
  DashboardData,
  ProgressData,
  QuizAttemptRow,
  WeekDayActivity,
} from "@/lib/view-types";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface LessonCompletionRecord {
  completedAt: string;
}

export interface QuizAttemptRecord {
  id: string;
  lessonDay: number;
  score: number;
  total: number;
  percent: number;
  passed: boolean;
  createdAt: string;
}

export interface SavedWordRecord {
  favorite: boolean;
  learned: boolean;
  savedAt: string;
}

export interface ActivityDayRecord {
  lessons: number;
  quizzes: number;
  minutes: number;
}

export interface LocalSettings {
  displayName: string;
  nativeLanguage: "bn" | "en";
  dailyGoalMinutes: number;
}

export interface LocalState {
  version: 1;
  completedLessons: Record<string, LessonCompletionRecord>;
  quizAttempts: QuizAttemptRecord[];
  savedWords: Record<string, SavedWordRecord>;
  activityByDate: Record<string, ActivityDayRecord>;
  settings: LocalSettings;
}

const STORAGE_KEY = "lingora.state.v1";

/** Lesson unlock rule (matches the server action): lesson N needs N-1 done. */
export function isLessonCompleted(state: LocalState, day: number): boolean {
  return Boolean(state.completedLessons[String(day)]);
}

export function isLessonUnlocked(state: LocalState, day: number): boolean {
  return day === 1 || isLessonCompleted(state, day - 1) || isLessonCompleted(state, day);
}

export function getCompletedDays(state: LocalState): number[] {
  return Object.keys(state.completedLessons)
    .map(Number)
    .filter((n) => Number.isInteger(n) && n >= 1 && n <= lessons.length)
    .sort((a, b) => a - b);
}

export function getStreak(state: LocalState): { current: number; longest: number } {
  return computeStreaks(Object.keys(state.activityByDate));
}

/** First uncompleted lesson day, or null when the course is finished. */
export function getCurrentLessonDay(state: LocalState): number | null {
  const set = new Set(getCompletedDays(state));
  return lessons.find((l) => !set.has(l.day))?.day ?? null;
}

export function getSavedWordsMap(
  state: LocalState
): Record<string, { favorite: boolean; learned: boolean }> {
  const out: Record<string, { favorite: boolean; learned: boolean }> = {};
  for (const [key, rec] of Object.entries(state.savedWords)) {
    out[key] = { favorite: rec.favorite, learned: rec.learned };
  }
  return out;
}

export function getSettings(state: LocalState): LocalSettings {
  return state.settings;
}

/* ------------------------------------------------------------------ */
/* Default + persistence                                               */
/* ------------------------------------------------------------------ */

export function defaultLocalState(): LocalState {
  return {
    version: 1,
    completedLessons: {},
    quizAttempts: [],
    savedWords: {},
    activityByDate: {},
    settings: { displayName: "শিক্ষার্থী", nativeLanguage: "bn", dailyGoalMinutes: 20 },
  };
}

function isValidWordRecord(value: unknown): value is SavedWordRecord {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as SavedWordRecord).favorite === "boolean" &&
    typeof (value as SavedWordRecord).learned === "boolean" &&
    typeof (value as SavedWordRecord).savedAt === "string"
  );
}

function isValidAttemptRecord(value: unknown): value is QuizAttemptRecord {
  if (typeof value !== "object" || value === null) return false;
  const a = value as QuizAttemptRecord;
  return (
    typeof a.id === "string" &&
    Number.isInteger(a.lessonDay) &&
    typeof a.score === "number" &&
    typeof a.total === "number" &&
    typeof a.percent === "number" &&
    typeof a.passed === "boolean" &&
    typeof a.createdAt === "string"
  );
}

function isValidActivityRecord(value: unknown): value is ActivityDayRecord {
  if (typeof value !== "object" || value === null) return false;
  const a = value as ActivityDayRecord;
  return typeof a.lessons === "number" && typeof a.quizzes === "number" && typeof a.minutes === "number";
}

function sanitizeStringRecord<T>(value: unknown, isRecord: (v: unknown) => v is T): Record<string, T> {
  if (typeof value !== "object" || value === null) return {};
  const out: Record<string, T> = {};
  for (const [key, item] of Object.entries(value)) {
    if (isRecord(item)) out[key] = item;
  }
  return out;
}

/**
 * Read the persisted state, tolerating missing keys, corrupt JSON, unknown
 * versions and shape drift. Never throws.
 */
export function loadLocalState(): LocalState {
  if (typeof window === "undefined") return defaultLocalState();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultLocalState();
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return defaultLocalState();
    const p = parsed as Partial<LocalState>;
    if (p.version !== 1) return defaultLocalState();

    const defaults = defaultLocalState();
    const settings = defaults.settings;
    if (typeof p.settings === "object" && p.settings !== null) {
      const incoming = p.settings as Partial<LocalSettings>;
      if (typeof incoming.displayName === "string" && incoming.displayName.trim()) {
        settings.displayName = cleanText(incoming.displayName, 60) || "শিক্ষার্থী";
      }
      if (incoming.nativeLanguage === "en" || incoming.nativeLanguage === "bn") {
        settings.nativeLanguage = incoming.nativeLanguage;
      }
      const minutes = Number(incoming.dailyGoalMinutes);
      if (Number.isFinite(minutes) && minutes >= 5 && minutes <= 180) {
        settings.dailyGoalMinutes = Math.round(minutes);
      }
    }

    return {
      version: 1,
      completedLessons: sanitizeStringRecord(p.completedLessons, (v): v is LessonCompletionRecord => {
        if (typeof v !== "object" || v === null) return false;
        return typeof (v as LessonCompletionRecord).completedAt === "string";
      }),
      quizAttempts: Array.isArray(p.quizAttempts) ? p.quizAttempts.filter(isValidAttemptRecord) : [],
      savedWords: sanitizeStringRecord(p.savedWords, isValidWordRecord),
      activityByDate: sanitizeStringRecord(p.activityByDate, isValidActivityRecord),
      settings,
    };
  } catch {
    return defaultLocalState();
  }
}

export function saveLocalState(state: LocalState): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage may be full or blocked (private mode); degrade silently.
  }
}

export function clearLocalState(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

/* ------------------------------------------------------------------ */
/* Mutations (pure — return a new state)                               */
/* ------------------------------------------------------------------ */

export interface CompleteLessonResultInfo {
  day: number;
  completed: boolean;
  completedCount: number;
  nextDay: number | null;
  streak: { current: number; longest: number };
  newlyAwarded: AchievementType[];
}

function bumpActivity(
  activity: Record<string, ActivityDayRecord>,
  date: string,
  delta: { lessons: number; quizzes: number; minutes: number }
): Record<string, ActivityDayRecord> {
  const current = activity[date] ?? { lessons: 0, quizzes: 0, minutes: 0 };
  return {
    ...activity,
    [date]: {
      lessons: current.lessons + delta.lessons,
      quizzes: current.quizzes + delta.quizzes,
      minutes: current.minutes + delta.minutes,
    },
  };
}

/**
 * Marks a lesson complete, enforcing the same progression rule the server
 * action uses (lesson N needs N-1). Returns the updated state plus the result
 * payload views rely on.
 */
export function applyCompleteLesson(
  state: LocalState,
  day: number,
  today: string
):
  | { success: true; state: LocalState; result: CompleteLessonResultInfo }
  | { success: false; error: string } {
  if (!Number.isInteger(day) || day < 1 || day > lessons.length) {
    return { success: false, error: "পাঠ নম্বরটি সঠিক নয়।" };
  }
  const lesson = getLessonByDaySafe(day);
  if (!lesson) return { success: false, error: "পাঠটি খুঁজে পাওয়া যায়নি।" };
  if (day > 1 && !isLessonCompleted(state, day - 1)) {
    return { success: false, error: "আগের পাঠটি আগে সম্পন্ন করুন — ধাপে ধাপে এগোলেই শেখা টেকসই হয়।" };
  }

  const key = String(day);
  const already = Boolean(state.completedLessons[key]);
  const before = deriveAchievements(state);

  const next: LocalState = {
    ...state,
    completedLessons: { ...state.completedLessons },
    activityByDate: bumpActivity(state.activityByDate, today, {
      lessons: already ? 0 : 1,
      quizzes: 0,
      minutes: already ? 0 : lesson.durationMinutes,
    }),
  };
  if (!already) next.completedLessons[key] = { completedAt: new Date().toISOString() };

  const after = deriveAchievements(next);
  const newlyAwarded = (Object.keys(after) as AchievementType[]).filter((type) => !before[type]);

  const completedDays = getCompletedDays(next);
  const completedSet = new Set(completedDays);
  const nextDay = lessons.find((l) => !completedSet.has(l.day))?.day ?? null;

  return {
    success: true,
    state: next,
    result: {
      day,
      completed: !already,
      completedCount: completedDays.length,
      nextDay,
      streak: getStreak(next),
      newlyAwarded,
    },
  };
}

export interface QuizAttemptInput {
  lessonDay: number;
  score: number;
  total: number;
  percent: number;
  passed: boolean;
}

function makeAttemptId(): string {
  return `q-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

/** Persist a graded quiz attempt and its 10 minutes of daily activity. */
export function applyQuizAttempt(state: LocalState, input: QuizAttemptInput, today: string): LocalState {
  return {
    ...state,
    quizAttempts: [
      ...state.quizAttempts,
      { id: makeAttemptId(), createdAt: new Date().toISOString(), ...input },
    ],
    activityByDate: bumpActivity(state.activityByDate, today, { lessons: 0, quizzes: 1, minutes: 10 }),
  };
}

const WORD_KEY_RE = /^\d{1,2}:[a-z0-9' -]+$/i;

/** Normalize and validate a vocabulary word key against the curriculum. */
export function resolveWordKey(rawKey: string): string | null {
  const key = rawKey.trim().toLowerCase();
  if (!WORD_KEY_RE.test(key)) return null;
  return allVocabulary.some((v) => v.key === key) ? key : null;
}

/**
 * Set/clear favorite and learned state, mirroring `setWordStateAction`:
 * saving happens on first touch; a word is deleted only when both flags are off.
 */
export function applyWordState(
  state: LocalState,
  rawKey: string,
  flags: { favorite?: boolean; learned?: boolean }
): { success: true; state: LocalState } | { success: false; error: string } {
  const key = resolveWordKey(rawKey);
  if (!key) return { success: false, error: "শব্দটি লেসন-সূচীতে পাওয়া যায়নি।" };

  const current = state.savedWords[key];
  const savedWords = { ...state.savedWords };

  if (current) {
    const favorite = flags.favorite ?? current.favorite;
    const learned = flags.learned ?? current.learned;
    if (!favorite && !learned) {
      delete savedWords[key];
    } else {
      savedWords[key] = { ...current, favorite, learned };
    }
  } else {
    savedWords[key] = {
      favorite: flags.favorite ?? true,
      learned: flags.learned ?? false,
      savedAt: new Date().toISOString(),
    };
  }

  return { success: true, state: { ...state, savedWords } };
}

/** Remove a saved word entirely (mirrors `deleteWordAction`). */
export function applyDeleteWord(state: LocalState, rawKey: string): LocalState {
  const key = resolveWordKey(rawKey);
  if (!key || !state.savedWords[key]) return state;
  const savedWords = { ...state.savedWords };
  delete savedWords[key];
  return { ...state, savedWords };
}

/**
 * Persist learner preferences. Display name rules match the server action;
 * the goal is clamped to a sane 5–180 minute range.
 */
export function applySettingsUpdate(
  state: LocalState,
  input: { displayName: string; nativeLanguage: string; dailyGoalMinutes: number }
): { success: true; state: LocalState; message: string } | { success: false; error: string } {
  const nameError = validateDisplayName(input.displayName);
  if (nameError) return { success: false, error: nameError };

  const rawMinutes = Math.round(Number(input.dailyGoalMinutes));
  const minutes = Number.isFinite(rawMinutes) ? Math.min(Math.max(rawMinutes, 5), 180) : 20;
  const language = input.nativeLanguage === "en" ? "en" : "bn";

  return {
    success: true,
    state: {
      ...state,
      settings: {
        displayName: cleanText(input.displayName, 60) || "শিক্ষার্থী",
        nativeLanguage: language,
        dailyGoalMinutes: minutes,
      },
    },
    message: "প্রোফাইল সফলভাবে আপডেট হয়েছে।",
  };
}

/* ------------------------------------------------------------------ */
/* Derived achievements                                                */
/* ------------------------------------------------------------------ */

/**
 * Recompute which badges are earned from the current state alone. Award dates
 * come from the real underlying events (completion timestamps, first quiz
 * pass, saved-word timestamps) so nothing here is fabricated.
 */
export function deriveAchievements(state: LocalState): Partial<Record<AchievementType, string>> {
  const map: Partial<Record<AchievementType, string>> = {};

  const completedSet = new Set(getCompletedDays(state));
  for (const milestone of completionMilestones()) {
    if (completedSet.has(milestone.day)) {
      map[milestone.type] = state.completedLessons[String(milestone.day)]?.completedAt ?? toLocalDateString();
    }
  }

  const passed = state.quizAttempts.filter((a) => a.passed);
  if (passed.length) {
    map["quiz-pass"] = passed.map((a) => a.createdAt).sort()[0];
  }

  const streak = getStreak(state);
  if (streak.longest >= 7) map["streak-7"] = toLocalDateString();
  if (streak.longest >= 30) map["streak-30"] = toLocalDateString();

  const saved = Object.values(state.savedWords)
    .filter((w) => typeof w.savedAt === "string" && w.savedAt.length > 0)
    .sort((a, b) => (a.savedAt < b.savedAt ? -1 : 1));
  if (saved.length >= 10) map["vocab-10"] = saved[9].savedAt;
  if (saved.length >= 25) map["vocab-25"] = saved[24].savedAt;

  return map;
}

/* ------------------------------------------------------------------ */
/* Snapshot builders (mirror src/lib/queries.ts)                       */
/* ------------------------------------------------------------------ */

function parseLocalDate(dateString: string): Date {
  const [y, m, d] = dateString.split("-").map(Number);
  const date = new Date();
  if (y && m && d) date.setFullYear(y, m - 1, d);
  return date;
}

function buildWeeklyActivity(
  activity: Record<string, ActivityDayRecord>,
  endDate: Date
): WeekDayActivity[] {
  return lastNDates(endDate, 7).map((date) => {
    const row = activity[date];
    return {
      date,
      minutes: row?.minutes ?? 0,
      lessons: row?.lessons ?? 0,
      quizzes: row?.quizzes ?? 0,
    };
  });
}

function buildRecentActivity(state: LocalState, limit = 6): ActivityEvent[] {
  const events: ActivityEvent[] = [
    ...Object.entries(state.completedLessons).map(([dayStr, rec]) => {
      const day = Number(dayStr);
      return {
        id: `l${day}-${rec.completedAt}`,
        type: "lesson" as const,
        day,
        title: getLessonByDaySafe(day)?.title ?? `Day ${day}`,
        at: rec.completedAt,
      };
    }),
    ...state.quizAttempts.map((a) => ({
      id: `q${a.id}`,
      type: "quiz" as const,
      day: a.lessonDay,
      title: getLessonByDaySafe(a.lessonDay)?.title ?? `Day ${a.lessonDay}`,
      at: a.createdAt,
    })),
  ];
  return events.sort((a, b) => (a.at < b.at ? 1 : -1)).slice(0, limit);
}

function toAchievementList(state: LocalState): { type: AchievementType; awardedAt: string }[] {
  return Object.entries(deriveAchievements(state)).map(([type, awardedAt]) => ({
    type: type as AchievementType,
    awardedAt,
  }));
}

function quizSummaryFrom(state: LocalState): DashboardData["quiz"] {
  const attempts = state.quizAttempts;
  const passedAttempts = attempts.filter((a) => a.passed).length;
  const percentList = attempts.map((a) => a.percent);
  return {
    attempts: attempts.length,
    passedAttempts,
    avgPercent: percentList.length
      ? Math.round(percentList.reduce((s, p) => s + p, 0) / percentList.length)
      : 0,
    bestPercent: percentList.length ? Math.max(...percentList) : 0,
  };
}

/** Dashboard snapshot identical in shape to `buildDashboardData`. */
export function buildDashboardLocal(state: LocalState, todayLocal: string): DashboardData {
  const completedDays = getCompletedDays(state);
  const completedSet = new Set(completedDays);
  const completedCount = completedDays.length;
  const currentLesson = lessons.find((l) => !completedSet.has(l.day))?.day ?? null;
  const todayLesson = currentLesson ? getLessonByDaySafe(currentLesson) : null;

  const activityValues = Object.values(state.savedWords);

  const rowToday = state.activityByDate[todayLocal];
  const minutesDone = rowToday?.minutes ?? 0;
  const goalMinutes = state.settings.dailyGoalMinutes;
  const checklist: DashboardChecklistItem[] = [
    { key: "lesson", label: "আজকের পাঠ সম্পন্ন করুন", done: (rowToday?.lessons ?? 0) > 0 },
    { key: "quiz", label: "পাঠের কুইজ দিন", done: (rowToday?.quizzes ?? 0) > 0 },
    {
      key: "minutes",
      label: `${toBanglaDigits(goalMinutes)} মিনিট অনুশীলন করুন`,
      done: minutesDone >= goalMinutes,
    },
  ];

  const milestones = completionMilestones();
  const nextMilestone = milestones.find((m) => m.day > completedCount) ?? null;

  return {
    completedCount,
    completedDays,
    currentLesson,
    todayLesson: todayLesson
      ? {
          day: todayLesson.day,
          title: todayLesson.title,
          titleBn: todayLesson.titleBn,
          durationMinutes: todayLesson.durationMinutes,
        }
      : null,
    streak: getStreak(state),
    quiz: quizSummaryFrom(state),
    weekly: buildWeeklyActivity(state.activityByDate, parseLocalDate(todayLocal)),
    recent: buildRecentActivity(state, 6),
    vocab: { saved: activityValues.length, learned: activityValues.filter((w) => w.learned).length },
    achievements: toAchievementList(state),
    checklist,
    nextMilestone,
  };
}

/** /progress snapshot identical in shape to `buildProgressData`. */
export function buildProgressLocal(state: LocalState): ProgressData {
  const completedDays = state.completedLessons
    ? getCompletedDays(state).map((day) => ({
        day,
        at: state.completedLessons[String(day)]?.completedAt ?? toLocalDateString(),
      }))
    : [];
  const completedSet = new Set(completedDays.map((c) => c.day));

  const quizHistory: QuizAttemptRow[] = state.quizAttempts
    .slice(0, 15)
    .map((a) => ({
      id: a.id,
      day: a.lessonDay,
      title: getLessonByDaySafe(a.lessonDay)?.title ?? `Day ${a.lessonDay}`,
      score: a.score,
      total: a.total,
      percent: a.percent,
      passed: a.passed,
      at: a.createdAt,
    }));

  const phases = [1, 2, 3, 4, 5, 6].map((phaseNumber) => {
    const start = (phaseNumber - 1) * 10 + 1;
    const end = phaseNumber * 10;
    const total = lessons.filter((l) => l.day >= start && l.day <= end).length;
    const completed = lessons.filter((l) => l.day >= start && l.day <= end && completedSet.has(l.day)).length;
    return { phaseNumber, completed, total };
  });

  const attempts = state.quizAttempts;
  const passedAttempts = attempts.filter((a) => a.passed).length;
  const percentList = attempts.map((a) => a.percent);
  const quizSummary = {
    attempts: attempts.length,
    passedAttempts,
    avgPercent: percentList.length
      ? Math.round(percentList.reduce((s, p) => s + p, 0) / percentList.length)
      : 0,
    bestPercent: percentList.length ? Math.max(...percentList) : 0,
  };

  const day60 = completedSet.has(60);
  const finalAssessment = {
    dayCompleted: day60,
    quizPassRate: attempts.length ? Math.round((passedAttempts / attempts.length) * 100) : 0,
    done: day60,
  };

  const savedValues = Object.values(state.savedWords);

  return {
    completedCount: completedDays.length,
    totalDays: lessons.length,
    completedDays,
    streak: getStreak(state),
    quizSummary,
    quizHistory,
    vocab: { saved: savedValues.length, learned: savedValues.filter((w) => w.learned).length },
    achievements: toAchievementList(state),
    phases,
    finalAssessment,
    activityDays: buildWeeklyActivity(state.activityByDate, new Date()),
  };
}