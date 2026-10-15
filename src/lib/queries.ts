import "server-only";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { getLessonByDaySafe, getLesson, lessons } from "@/data/lessons/index";
import { computeStreaks } from "@/lib/streak";
import { completionMilestones, type AchievementType } from "@/lib/achievements";
import { lastNDates, toLocalDateString } from "@/lib/dates";
import type {
  ActivityEvent,
  DashboardChecklistItem,
  DashboardData,
  ProgressData,
  QuizAttemptRow,
  RoadmapData,
  WeekDayActivity,
} from "@/lib/view-types";

/* ------------------------------------------------------------------ */
/* Raw record readers (server components only).                        */
/* Each ignores RLS-safe absence and returns [] to keep views simple.  */
/* ------------------------------------------------------------------ */

export async function readLessonCompletions(userId: string): Promise<{ lesson_day: number; completed_at: string }[]> {
  if (!isSupabaseConfigured) return [];
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("lesson_completions")
    .select("lesson_day, completed_at")
    .eq("user_id", userId)
    .order("lesson_day", { ascending: true });
  return data ?? [];
}

export async function readQuizAttempts(userId: string): Promise<
  { id: string; lesson_day: number; score: number; total: number; percent: number; passed: boolean; created_at: string }[]
> {
  if (!isSupabaseConfigured) return [];
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("quiz_attempts")
    .select("id, lesson_day, score, total, percent, passed, created_at")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });
  return data ?? [];
}

export async function readSavedWords(userId: string): Promise<
  { word_key: string; is_favorite: boolean; is_learned: boolean }[]
> {
  if (!isSupabaseConfigured) return [];
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("saved_words")
    .select("word_key, is_favorite, is_learned")
    .eq("user_id", userId);
  return data ?? [];
}

export async function readDailyActivity(userId: string): Promise<
  { activity_date: string; lessons_completed: number; quizzes_taken: number; minutes_spent: number }[]
> {
  if (!isSupabaseConfigured) return [];
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("daily_activity")
    .select("activity_date, lessons_completed, quizzes_taken, minutes_spent")
    .eq("user_id", userId)
    .order("activity_date", { ascending: true });
  return data ?? [];
}

export async function readAchievements(userId: string): Promise<{ type: string; awarded_at: string }[]> {
  if (!isSupabaseConfigured) return [];
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("achievements")
    .select("type, awarded_at")
    .eq("user_id", userId);
  return data ?? [];
}

/* ------------------------------------------------------------------ */
/* Aggregates                                                          */
/* ------------------------------------------------------------------ */

/** Current + longest streak derived from real activity rows. */
export async function getUserStreaks(userId: string) {
  const rows = await readDailyActivity(userId);
  return computeStreaks(rows.map((r) => r.activity_date));
}

/** Weekly activity bars ending at a supplied (device-local) date. */
export function buildWeeklyActivity(
  rows: { activity_date: string; lessons_completed: number; quizzes_taken: number; minutes_spent: number }[],
  endDate = new Date()
): WeekDayActivity[] {
  const byDate = new Map(rows.map((r) => [r.activity_date, r]));
  return lastNDates(endDate, 7).map((date) => {
    const row = byDate.get(date);
    return {
      date,
      minutes: row?.minutes_spent ?? 0,
      lessons: row?.lessons_completed ?? 0,
      quizzes: row?.quizzes_taken ?? 0,
    };
  });
}

/** Merged recent lesson completions + quiz attempts, newest first. */
export function buildRecentActivity(
  completions: { lesson_day: number; completed_at: string }[],
  attempts: { id: string; lesson_day: number; created_at: string }[],
  limit = 6
): ActivityEvent[] {
  const events: ActivityEvent[] = [
    ...completions.map((c) => ({
      id: `l${c.lesson_day}-${c.completed_at}`,
      type: "lesson" as const,
      day: c.lesson_day,
      title: getLessonByDaySafe(c.lesson_day)?.title ?? `Day ${c.lesson_day}`,
      at: c.completed_at,
    })),
    ...attempts.map((a) => ({
      id: `q${a.id}`,
      type: "quiz" as const,
      day: a.lesson_day,
      title: getLessonByDaySafe(a.lesson_day)?.title ?? `Day ${a.lesson_day}`,
      at: a.created_at,
    })),
  ];
  return events
    .sort((a, b) => (a.at < b.at ? 1 : -1))
    .slice(0, limit);
}

/* ------------------------------------------------------------------ */
/* Page-level data                                                     */
/* ------------------------------------------------------------------ */

/**
 * Full dashboard snapshot. `todayLocal` is the client's device-local date,
 * keeping today-sensitive features timezone-correct.
 */
export async function buildDashboardData(userId: string, todayLocal: string): Promise<DashboardData> {
  const completions = await readLessonCompletions(userId);
  const attempts = await readQuizAttempts(userId);
  const savedWords = await readSavedWords(userId);
  const activity = await readDailyActivity(userId);
  const achievementRows = await readAchievements(userId);

  const completedDays = completions.map((c) => c.lesson_day);
  const completedSet = new Set(completedDays);
  const completedCount = completedDays.length;
  const currentLesson = lessons.find((l) => !completedSet.has(l.day))?.day ?? null;
  const todayLesson = currentLesson ? getLessonByDaySafe(currentLesson) : null;

  const streak = computeStreaks(activity.map((r) => r.activity_date));

  const passedAttempts = attempts.filter((a) => a.passed).length;
  const percentList = attempts.map((a) => a.percent);
  const quiz = {
    attempts: attempts.length,
    passedAttempts,
    avgPercent: percentList.length ? Math.round(percentList.reduce((s, p) => s + p, 0) / percentList.length) : 0,
    bestPercent: percentList.length ? Math.max(...percentList) : 0,
  };

  const weekly = buildWeeklyActivity(activity, parseLocalDate(todayLocal));

  const recent = buildRecentActivity(completions, attempts, 6);

  const learnedCount = savedWords.filter((w) => w.is_learned).length;

  // Today's checklist from the user's own daily activity on their local date.
  const rowToday = activity.find((r) => r.activity_date === todayLocal);
  const minutesDone = rowToday?.minutes_spent ?? 0;
  const checklist: DashboardChecklistItem[] = [
    { key: "lesson", label: "আজকের পাঠ সম্পন্ন করুন", done: (rowToday?.lessons_completed ?? 0) > 0 },
    { key: "quiz", label: "পাঠের কুইজ দিন", done: (rowToday?.quizzes_taken ?? 0) > 0 },
    { key: "minutes", label: "২০ মিনিট অনুশীলন করুন", done: minutesDone >= 20 },
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
    streak,
    quiz,
    weekly,
    recent,
    vocab: { saved: savedWords.length, learned: learnedCount },
    achievements: achievementRows.map((a) => ({ type: a.type as AchievementType, awardedAt: a.awarded_at })),
    checklist,
    nextMilestone,
  };
}

/** Build the /progress page snapshot. */
export async function buildProgressData(userId: string): Promise<ProgressData> {
  const completions = await readLessonCompletions(userId);
  const attempts = await readQuizAttempts(userId);
  const savedWords = await readSavedWords(userId);
  const activity = await readDailyActivity(userId);
  const achievementRows = await readAchievements(userId);

  const completedDays = completions.map((c) => ({ day: c.lesson_day, at: c.completed_at }));
  const completedSet = new Set(completions.map((c) => c.lesson_day));
  const streak = computeStreaks(activity.map((r) => r.activity_date));

  const passedAttempts = attempts.filter((a) => a.passed).length;
  const percentList = attempts.map((a) => a.percent);
  const quizSummary = {
    attempts: attempts.length,
    passedAttempts,
    avgPercent: percentList.length ? Math.round(percentList.reduce((s, p) => s + p, 0) / percentList.length) : 0,
    bestPercent: percentList.length ? Math.max(...percentList) : 0,
  };

  const quizHistory: QuizAttemptRow[] = attempts
    .slice(0, 15)
    .map((a) => ({
      id: a.id,
      day: a.lesson_day,
      title: getLessonByDaySafe(a.lesson_day)?.title ?? `Day ${a.lesson_day}`,
      score: a.score,
      total: a.total,
      percent: a.percent,
      passed: a.passed,
      at: a.created_at,
    }));

  const phases = [1, 2, 3, 4, 5, 6].map((phaseNumber) => {
    const phaseLessons = lessons.filter((l) => {
      const start = (phaseNumber - 1) * 10 + 1;
      const end = phaseNumber * 10;
      return l.day >= start && l.day <= end;
    });
    const completed = phaseLessons.filter((l) => completedSet.has(l.day)).length;
    return { phaseNumber, completed, total: phaseLessons.length };
  });

  const day60 = completedSet.has(60);
  const finalAssessment = {
    dayCompleted: day60,
    quizPassRate: attempts.length ? Math.round((passedAttempts / attempts.length) * 100) : 0,
    done: day60,
  };

  return {
    completedCount: completedDays.length,
    totalDays: lessons.length,
    completedDays,
    streak,
    quizSummary,
    quizHistory,
    vocab: { saved: savedWords.length, learned: savedWords.filter((w) => w.is_learned).length },
    achievements: achievementRows.map((a) => ({ type: a.type as AchievementType, awardedAt: a.awarded_at })),
    phases,
    finalAssessment,
    activityDays: buildWeeklyActivity(activity),
  };
}

/** Roadmap needs only the completed set. */
export async function buildRoadmapData(userId: string): Promise<RoadmapData> {
  const completions = await readLessonCompletions(userId);
  return { completedDays: completions.map((c) => c.lesson_day) };
}

/** Parse YYYY-MM-DD to a Date at local midnight for date arithmetic. */
function parseLocalDate(dateString: string): Date {
  const [y, m, d] = dateString.split("-").map(Number);
  const date = new Date();
  if (y && m && d) date.setFullYear(y, m - 1, d);
  return date;
}

export { toLocalDateString };

/** The first uncompleted lesson day, used for "Continue Learning". */
export async function getCurrentLessonDay(userId: string): Promise<number | null> {
  const completions = await readLessonCompletions(userId);
  const set = new Set(completions.map((c) => c.lesson_day));
  return lessons.find((l) => !set.has(l.day))?.day ?? null;
}

export { getLesson }; // re-export convenience