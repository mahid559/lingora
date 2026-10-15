"use client";

/**
 * Client-side learning state provider.
 *
 * Loads the anonymous local state once (hydrated from localStorage after
 * mount) and exposes the same operations the old server actions exposed:
 * complete a lesson, submit a quiz, toggle vocabulary words, update settings.
 * Every snapshot the views consume (dashboard, progress, streak, saved words)
 * is derived reactively from this single source of truth, and every change is
 * persisted back to localStorage automatically.
 */

import * as React from "react";
import type { QuizQuestion } from "@/data/types";
import { getLessonByDaySafe } from "@/data/lessons/index";
import { toLocalDateString } from "@/lib/dates";
import {
  type LocalSettings,
  type LocalState,
  applyCompleteLesson,
  applyDeleteWord,
  applyQuizAttempt,
  applySettingsUpdate,
  applyWordState,
  buildDashboardLocal,
  buildProgressLocal,
  defaultLocalState,
  getCompletedDays,
  getCurrentLessonDay,
  getSavedWordsMap,
  getSettings,
  getStreak,
  isLessonCompleted,
  isLessonUnlocked,
  loadLocalState,
  saveLocalState,
} from "@/lib/local-store";
import { gradeQuiz, type GradedQuestion } from "@/lib/quiz-grading";
import { QUIZ_PASS_THRESHOLD } from "@/lib/achievements";
import type { DashboardData, ProgressData } from "@/lib/view-types";

export interface CompleteLessonData {
  day: number;
  completed: boolean;
  completedCount: number;
  nextDay: number | null;
  streak: { current: number; longest: number };
  newlyAwarded: string[];
}

export interface QuizSubmitData {
  attemptId: string | null;
  score: number;
  total: number;
  percent: number;
  passed: boolean;
  results: GradedQuestion[];
}

export type ActionResult<T = undefined> =
  | { success: true; message?: string; data?: T }
  | { success: false; error: string };

export interface WordToggleResult {
  success: boolean;
  message?: string;
  error?: string;
}

export interface SettingsUpdateResult {
  success: boolean;
  message?: string;
  error?: string;
}

interface LearningContextValue {
  /** False until localStorage has been read on the client. */
  ready: boolean;
  completedDays: number[];
  savedWords: Record<string, { favorite: boolean; learned: boolean }>;
  settings: LocalSettings;
  streak: { current: number; longest: number };
  currentLessonDay: number | null;
  dashboard: DashboardData;
  progress: ProgressData;
  isCompleted: (day: number) => boolean;
  isUnlocked: (day: number) => boolean;
  completeLesson: (day: number) => ActionResult<CompleteLessonData>;
  submitQuiz: (
    day: number,
    answers: { questionId: string; value: string }[],
    questions: QuizQuestion[]
  ) => ActionResult<QuizSubmitData>;
  setWordState: (
    rawKey: string,
    flags: { favorite?: boolean; learned?: boolean }
  ) => WordToggleResult;
  deleteWord: (rawKey: string) => WordToggleResult;
  updateSettings: (input: {
    displayName: string;
    nativeLanguage: string;
    dailyGoalMinutes: number;
  }) => SettingsUpdateResult;
}

const LearningContext = React.createContext<LearningContextValue | null>(null);

export function useLearning(): LearningContextValue {
  const ctx = React.useContext(LearningContext);
  if (!ctx) throw new Error("useLearning must be used inside <LearningProvider>.");
  return ctx;
}

export function LearningProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<LocalState>(() => defaultLocalState());
  const [ready, setReady] = React.useState(false);

  // Keep a ref in sync so synchronous mutations always read the latest state,
  // no matter how React batches re-renders.
  const stateRef = React.useRef(state);
  React.useEffect(() => {
    stateRef.current = state;
  }, [state]);

  // Hydrate from localStorage only after mount (never during SSR).
  React.useEffect(() => {
    const persisted = loadLocalState();
    stateRef.current = persisted;
    setState(persisted);
    setReady(true);
  }, []);

  // Persist every accepted change.
  React.useEffect(() => {
    if (ready) saveLocalState(stateRef.current);
  }, [state, ready]);

  const todayStr = toLocalDateString();
  const dashboard = React.useMemo(() => buildDashboardLocal(state, todayStr), [state, todayStr]);
  const progress = React.useMemo(() => buildProgressLocal(state), [state]);

  const completeLesson = React.useCallback((day: number): ActionResult<CompleteLessonData> => {
    const res = applyCompleteLesson(stateRef.current, day, toLocalDateString());
    if (!res.success) return { success: false, error: res.error };
    stateRef.current = res.state;
    setState(res.state);
    return {
      success: true,
      data: {
        day: res.result.day,
        completed: res.result.completed,
        completedCount: res.result.completedCount,
        nextDay: res.result.nextDay,
        streak: res.result.streak,
        newlyAwarded: res.result.newlyAwarded.map(String),
      },
      message: res.result.completed
        ? `অভিনন্দন! দিন ${res.result.day} সম্পন্ন হয়েছে।`
        : "এই পাঠটি আগেই সম্পন্ন করা ছিল।",
    };
  }, []);

  const submitQuiz = React.useCallback(
    (day: number, answers: { questionId: string; value: string }[], questions: QuizQuestion[]): ActionResult<QuizSubmitData> => {
      if (!Number.isInteger(day) || day < 1) return { success: false, error: "পাঠ নম্বরটি সঠিক নয়।" };
      const lesson = getLessonByDaySafe(day);
      if (!lesson) return { success: false, error: "পাঠটি খুঁজে পাওয়া যায়নি।" };
      if (questions.length === 0) return { success: false, error: "কুইজে কোনো প্রশ্ন নেই।" };

      const result = gradeQuiz(questions, answers);
      stateRef.current = applyQuizAttempt(stateRef.current, {
        lessonDay: day,
        score: result.score,
        total: result.total,
        percent: result.percent,
        passed: result.passed,
      }, toLocalDateString());
      setState(stateRef.current);

      return {
        success: true,
        data: {
          attemptId: stateRef.current.quizAttempts[stateRef.current.quizAttempts.length - 1]?.id ?? null,
          ...result,
        },
        message: result.passed
          ? `${result.percent}% — দারুণ! পাস করেছেন। পরের ধাপে এগিয়ে যান।`
          : `${result.percent}% — পাস করতে ${QUIZ_PASS_THRESHOLD}% লাগে। আবার চেষ্টা করে দেখুন!`,
      };
    },
    []
  );

  const setWordState = React.useCallback(
    (rawKey: string, flags: { favorite?: boolean; learned?: boolean }): WordToggleResult => {
      const res = applyWordState(stateRef.current, rawKey, flags);
      if (!res.success) return { success: false, error: res.error };
      stateRef.current = res.state;
      setState(res.state);
      return {
        success: true,
        message: flags.favorite
          ? "শব্দটি পছন্দের তালিকায় যোগ হয়েছে।"
          : "শব্দটির অবস্থা আপডেট হয়েছে।",
      };
    },
    []
  );

  const deleteWord = React.useCallback((rawKey: string): WordToggleResult => {
    stateRef.current = applyDeleteWord(stateRef.current, rawKey);
    setState(stateRef.current);
    return { success: true, message: "শব্দটি মুছে ফেলা হয়েছে।" };
  }, []);

  const updateSettings = React.useCallback(
    (input: { displayName: string; nativeLanguage: string; dailyGoalMinutes: number }): SettingsUpdateResult => {
      const res = applySettingsUpdate(stateRef.current, input);
      if (!res.success) return { success: false, error: res.error };
      stateRef.current = res.state;
      setState(res.state);
      return { success: true, message: res.message };
    },
    []
  );

  const value = React.useMemo<LearningContextValue>(() => ({
    ready,
    completedDays: getCompletedDays(state),
    savedWords: getSavedWordsMap(state),
    settings: getSettings(state),
    streak: getStreak(state),
    currentLessonDay: getCurrentLessonDay(state),
    dashboard,
    progress,
    isCompleted: (day) => isLessonCompleted(state, day),
    isUnlocked: (day) => isLessonUnlocked(state, day),
    completeLesson,
    submitQuiz,
    setWordState,
    deleteWord,
    updateSettings,
  }), [
    ready,
    state,
    dashboard,
    progress,
    completeLesson,
    submitQuiz,
    setWordState,
    deleteWord,
    updateSettings,
  ]);

  return <LearningContext.Provider value={value}>{children}</LearningContext.Provider>;
}