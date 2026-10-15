"use server";

import { getSessionUser } from "@/lib/auth";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { buildDashboardData, buildProgressData, buildRoadmapData } from "@/lib/queries";
import { toLocalDateString } from "@/lib/dates";
import type { DashboardData, ProgressData, RoadmapData, SettingsData } from "@/lib/view-types";

export type ActionResult<T> = { success: true; data: T } | { success: false; error: string };

/**
 * Client-callable snapshot loader. Takes the user's device-local date so
 * today-sensitive features (checklist, weekly chart) are timezone-correct.
 */
export async function getDashboardSnapshot(todayLocal?: string): Promise<ActionResult<DashboardData>> {
  if (!isSupabaseConfigured) return { success: false, error: "Supabase কনফিগার করা হয়নি।" };
  const user = await getSessionUser();
  if (!user) return { success: false, error: "লগইন করা নেই।" };
  const data = await buildDashboardData(user.id, todayLocal ?? toLocalDateString());
  return { success: true, data };
}

export async function getProgressSnapshot(): Promise<ActionResult<ProgressData>> {
  if (!isSupabaseConfigured) return { success: false, error: "Supabase কনফিগার করা হয়নি।" };
  const user = await getSessionUser();
  if (!user) return { success: false, error: "লগইন করা নেই।" };
  const data = await buildProgressData(user.id);
  return { success: true, data };
}

export async function getRoadmapSnapshot(): Promise<ActionResult<RoadmapData>> {
  if (!isSupabaseConfigured) return { success: false, error: "Supabase কনফিগার করা হয়নি।" };
  const user = await getSessionUser();
  if (!user) return { success: false, error: "লগইন করা নেই।" };
  const data = await buildRoadmapData(user.id);
  return { success: true, data };
}

export async function getSettingsSnapshot(): Promise<ActionResult<SettingsData>> {
  if (!isSupabaseConfigured) return { success: false, error: "Supabase কনফিগার করা হয়নি।" };
  const user = await getSessionUser();
  if (!user) return { success: false, error: "লগইন করা নেই।" };

  const { getUserProfile } = await import("@/lib/auth");
  const profile = (await getUserProfile(user.id)) ?? {
    id: user.id,
    display_name: user.user_metadata?.display_name ?? null,
    native_language: "bn",
    daily_goal_minutes: 20,
    created_at: null,
    updated_at: null,
  };

  return {
    success: true,
    data: {
      profile: {
        id: user.id,
        display_name: profile.display_name ?? user.user_metadata?.display_name ?? null,
        native_language: profile.native_language ?? "bn",
        daily_goal_minutes: profile.daily_goal_minutes ?? 20,
        created_at: profile.created_at ?? null,
        updated_at: profile.updated_at ?? null,
      },
      userEmail: user.email ?? "",
      accountCreatedAt: user.created_at ?? null,
    },
  };
}