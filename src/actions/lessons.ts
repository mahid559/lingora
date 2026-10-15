"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { getSessionUser } from "@/lib/auth";
import { getLessonByDaySafe, lessons } from "@/data/lessons/index";
import { completionMilestones, type AchievementType } from "@/lib/achievements";
import { awardAchievements, upsertActivity } from "@/lib/progress";
import { toLocalDateString } from "@/lib/dates";
import { computeStreaks } from "@/lib/streak";

export type ActionResult<T = undefined> =
  | { success: true; message?: string; data?: T }
  | { success: false; error: string };

function fail(error: string): ActionResult {
  return { success: false, error };
}

export interface CompleteLessonResult {
  day: number;
  completed: boolean;
  completedCount: number;
  nextDay: number | null;
  streak: { current: number; longest: number };
  newlyAwarded: string[];
}

/**
 * Marks a lesson as completed. Enforces progression: lesson N requires
 * lesson N-1 to be completed first. Prevented from duplicate rows by DB
 * constraint; the activity counter increments only once per day.
 */
export async function completeLesson(
  day: number,
  activityDate?: string
): Promise<ActionResult<CompleteLessonResult>> {
  if (!Number.isInteger(day) || day < 1 || day > lessons.length)
    return fail("পাঠ নম্বরটি সঠিক নয়।");
  if (!isSupabaseConfigured) return fail("Supabase কনফিগার করা হয়নি।");

  const user = await getSessionUser();
  if (!user) return fail("আপনি লগইন করেননি।");

  const lesson = getLessonByDaySafe(day);
  if (!lesson) return fail("পাঠটি খুঁজে পাওয়া যায়নি।");

  const supabase = await createSupabaseServerClient();

  // Progression rule: day 1 is always open; otherwise the previous day must
  // be completed. Users can re-complete a lesson without penalty.
  if (day > 1) {
    const { data: previous } = await supabase
      .from("lesson_completions")
      .select("id")
      .eq("user_id", user.id)
      .eq("lesson_day", day - 1)
      .maybeSingle();
    if (!previous) return fail("আগের পাঠটি আগে সম্পন্ন করুন — ধরেই এগোন।");
  }

  const { data: existing } = await supabase
    .from("lesson_completions")
    .select("id")
    .eq("user_id", user.id)
    .eq("lesson_day", day)
    .maybeSingle();

  const newlyCompleted = !existing;

  if (newlyCompleted) {
    const { error: insertError } = await supabase
      .from("lesson_completions")
      .insert({ user_id: user.id, lesson_day: day });
    if (insertError) return fail("সম্পূর্ণতা সংরক্ষণ করা যায়নি। আবার চেষ্টা করুন।");
  }

  // Increment daily activity for this device-local day.
  await upsertActivity(supabase, {
    userId: user.id,
    activityDate: activityDate ?? toLocalDateString(),
    lessons: newlyCompleted ? 1 : 0,
    minutes: newlyCompleted ? lesson.durationMinutes : 0,
  });

  // Recompute streak from real activity records.
  const { data: activityRows } = await supabase
    .from("daily_activity")
    .select("activity_date");
  const streak = computeStreaks((activityRows ?? []).map((r) => r.activity_date));

  // Count completed lessons.
  const { count: completedCount } = await supabase
    .from("lesson_completions")
    .select("id", { count: "exact", head: true })
    .eq("user_id", user.id);

  // Award milestone + streak achievements.
  const milestones = completionMilestones();
  const dueTypes: AchievementType[] = [];
  for (const m of milestones) {
    if (day === m.day) dueTypes.push(m.type);
  }
  if (streak.current >= 7) dueTypes.push("streak-7");
  if (streak.current >= 30) dueTypes.push("streak-30");

  const before = new Set(
    (
      await supabase.from("achievements").select("type").eq("user_id", user.id)
    ).data?.map((a) => a.type) ?? []
  );
  await awardAchievements(supabase, user.id, dueTypes);
  const after = new Set(
    (
      await supabase.from("achievements").select("type").eq("user_id", user.id)
    ).data?.map((a) => a.type) ?? []
  );
  const newlyAwarded = [...after].filter((t) => !before.has(t));

  // Next recommended day: the first day not yet completed.
  const { data: completedRows } = await supabase
    .from("lesson_completions")
    .select("lesson_day")
    .eq("user_id", user.id);
  const completedSet = new Set((completedRows ?? []).map((r) => r.lesson_day));
  const nextDay =
    lessons.find((l) => !completedSet.has(l.day))?.day ?? null;

  return {
    success: true,
    data: {
      day,
      completed: newlyCompleted,
      completedCount: completedCount ?? 0,
      nextDay,
      streak,
      newlyAwarded,
    },
    message: newlyCompleted
      ? `অভিনন্দন! দিন ${day} সম্পন্ন হয়েছে।`
      : "এই পাঠটি আগেই সম্পন্ন করা ছিল।",
  };
}