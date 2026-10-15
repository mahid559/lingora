import "server-only";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { AchievementType } from "@/lib/achievements";
import { toLocalDateString } from "@/lib/dates";

/** Idempotently insert achievement rows that are not already present. */
export async function awardAchievements(
  supabase: SupabaseClient,
  userId: string,
  types: AchievementType[]
): Promise<void> {
  if (types.length === 0) return;
  const { data: existing } = await supabase
    .from("achievements")
    .select("type")
    .eq("user_id", userId);

  const have = new Set((existing ?? []).map((a: { type: string }) => a.type));
  const toInsert = Array.from(new Set(types)).filter((t) => !have.has(t));
  if (toInsert.length === 0) return;

  await supabase.from("achievements").insert(
    toInsert.map((type) => ({ user_id: userId, type }))
  );
}

/**
 * Increment the user's daily activity counters for a device-local date.
 * Uses the SQL function upsert_daily_activity (see migrations) so counters
 * increment instead of being overwritten.
 */
export async function upsertActivity(
  supabase: SupabaseClient,
  args: {
    userId: string;
    activityDate?: string;
    lessons?: number;
    quizzes?: number;
    minutes?: number;
  }
): Promise<void> {
  await supabase.rpc("upsert_daily_activity", {
    p_user_id: args.userId,
    p_activity_date: args.activityDate ?? toLocalDateString(),
    p_lessons: args.lessons ?? 0,
    p_quizzes: args.quizzes ?? 0,
    p_minutes: args.minutes ?? 0,
  });
}