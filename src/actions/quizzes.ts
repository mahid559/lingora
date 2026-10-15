"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { getSessionUser } from "@/lib/auth";
import { getLessonByDaySafe } from "@/data/lessons/index";
import { QUIZ_PASS_THRESHOLD } from "@/lib/achievements";
import { awardAchievements, upsertActivity } from "@/lib/progress";
import { gradeQuiz, type GradedQuestion } from "@/lib/quiz-grading";
import { toLocalDateString } from "@/lib/dates";

export type ActionResult<T = undefined> =
  | { success: true; message?: string; data?: T }
  | { success: false; error: string };

function fail(error: string): ActionResult {
  return { success: false, error };
}

export interface SubmittedAnswer {
  questionId: string;
  value: string;
}

// Re-exported so existing importers keep a stable path even though the grading
// logic (and its types) now live in the shared, client-safe module.
export type { GradedQuestion } from "@/lib/quiz-grading";

export interface QuizAttemptResult {
  attemptId: string | null;
  score: number;
  total: number;
  percent: number;
  passed: boolean;
  results: GradedQuestion[];
}

/**
 * Grades a quiz submission on the server against the canonical lesson
 * content, persists the attempt, and returns per-question feedback.
 * The client can never supply its own score.
 */
export async function submitQuizAttempt(
  day: number,
  answers: SubmittedAnswer[],
  activityDate?: string
): Promise<ActionResult<QuizAttemptResult>> {
  if (!Number.isInteger(day) || day < 1) return fail("পাঠ নম্বরটি সঠিক নয়।");
  if (!isSupabaseConfigured) return fail("Supabase কনফিগার করা হয়নি।");

  const user = await getSessionUser();
  if (!user) return fail("আপনি লগইন করেননি।");

  const lesson = getLessonByDaySafe(day);
  if (!lesson) return fail("পাঠটি খুঁজে পাওয়া যায়নি।");

  const supabase = await createSupabaseServerClient();

  // Grade against canonical content only — unknown question ids are ignored.
  const result = gradeQuiz(lesson.quiz, answers);

  const total = result.total;
  const score = result.score;
  const percent = result.percent;
  const passed = result.passed;
  const results = result.results;

  const { data: attempt, error: insertError } = await supabase
    .from("quiz_attempts")
    .insert({
      user_id: user.id,
      lesson_day: day,
      score,
      total,
      percent,
      passed,
      answers: results,
    })
    .select("id")
    .single();

  if (insertError) return fail("কুইজের ফলাফল সংরক্ষণ করা যায়নি। আবার চেষ্টা করুন।");

  // Track daily activity (10 minutes of practice per quiz).
  await upsertActivity(supabase, {
    userId: user.id,
    activityDate: activityDate ?? toLocalDateString(),
    quizzes: 1,
    minutes: 10,
  });

  if (passed) {
    await awardAchievements(supabase, user.id, ["quiz-pass"]);
  }

  return {
    success: true,
    data: { attemptId: attempt?.id ?? null, score, total, percent, passed, results },
    message: passed
      ? `${percent}% — দারুণ! পাস করেছেন। পরের ধাপে এগিয়ে যান।`
      : `${percent}% — পাস করতে ${QUIZ_PASS_THRESHOLD}% লাগে। আবার চেষ্টা করে দেখুন!`,
  };
}

/** History of attempts for one lesson (used by the lesson view). */
export async function getQuizAttemptsForLesson(day: number) {
  if (!isSupabaseConfigured) return [];
  const user = await getSessionUser();
  if (!user) return [];
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("quiz_attempts")
    .select("id, score, total, percent, passed, created_at")
    .eq("user_id", user.id)
    .eq("lesson_day", day)
    .order("created_at", { ascending: false })
    .limit(10);
  return data ?? [];
}