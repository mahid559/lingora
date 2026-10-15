import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export interface Profile {
  id: string;
  display_name: string | null;
  native_language: string | null;
  daily_goal_minutes: number | null;
  created_at: string | null;
  updated_at: string | null;
}

export const DEFAULT_PROFILE: Profile = {
  id: "",
  display_name: null,
  native_language: "bn",
  daily_goal_minutes: 20,
  created_at: null,
  updated_at: null,
};

/** Returns the authenticated user or null (also null when Supabase unconfigured). */
export async function getSessionUser() {
  if (!isSupabaseConfigured) return null;
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();
  return data.user ?? null;
}

/** Returns the profile row for a user, or null. */
export async function getUserProfile(userId: string): Promise<Profile | null> {
  if (!isSupabaseConfigured) return null;
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("profiles")
    .select("id, display_name, native_language, daily_goal_minutes, created_at, updated_at")
    .eq("id", userId)
    .maybeSingle();
  if (!data) return null;
  return data as Profile;
}

/** Profile with a sensible default so UI never renders an undefined name. */
export async function getProfileOrFallback(userId: string): Promise<Profile> {
  const profile = await getUserProfile(userId);
  return { ...DEFAULT_PROFILE, id: userId, ...(profile ?? {}) };
}