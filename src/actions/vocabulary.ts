"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { getSessionUser } from "@/lib/auth";
import { allVocabulary } from "@/data/lessons/index";
import { awardAchievements } from "@/lib/progress";
import type { AchievementType } from "@/lib/achievements";

export type ActionResult<T = undefined> =
  | { success: true; message?: string; data?: T }
  | { success: false; error: string };

function fail(error: string): ActionResult {
  return { success: false, error };
}

const WORD_KEY_RE = /^\d{1,2}:[a-z0-9' -]+$/i;

export interface WordState {
  wordKey: string;
  isFavorite: boolean;
  isLearned: boolean;
}

/** Normalize and validate a vocabulary word key against the curriculum. */
function resolveWordKey(rawKey: string): string | null {
  const key = rawKey.trim().toLowerCase();
  if (!WORD_KEY_RE.test(key)) return null;
  return allVocabulary.some((v) => v.key === key) ? key : null;
}

/**
 * Set favorite/learned state for a saved vocabulary word.
 * Saving happens on first touch (favorite defaults true); un-saving either
 * favorite removes a word only when both flags are false.
 */
export async function setWordStateAction(
  rawKey: string,
  flags: { favorite?: boolean; learned?: boolean }
): Promise<ActionResult<WordState>> {
  const key = resolveWordKey(rawKey);
  if (!key) return fail("শব্দটি লেসন-সূচীতে পাওয়া যায়নি।");

  if (!isSupabaseConfigured) return fail("Supabase কনফিগার করা হয়নি।");
  const user = await getSessionUser();
  if (!user) return fail("আপনি লগইন করেননি।");

  const supabase = await createSupabaseServerClient();

  const { data: existing } = await supabase
    .from("saved_words")
    .select("id, is_favorite, is_learned")
    .eq("user_id", user.id)
    .eq("word_key", key)
    .maybeSingle();

  let state: WordState;
  if (existing) {
    const favorite = flags.favorite ?? existing.is_favorite;
    const learned = flags.learned ?? existing.is_learned;
    await supabase
      .from("saved_words")
      .update({ is_favorite: favorite, is_learned: learned, updated_at: new Date().toISOString() })
      .eq("id", existing.id);
    state = { wordKey: key, isFavorite: favorite, isLearned: learned };

    // Deleting: removing both flags deletes the saved word entirely.
    if (!favorite && !learned) {
      await supabase.from("saved_words").delete().eq("id", existing.id);
    }
  } else {
    const favorite = flags.favorite ?? true;
    const learned = flags.learned ?? false;
    await supabase
      .from("saved_words")
      .upsert({ user_id: user.id, word_key: key, is_favorite: favorite, is_learned: learned });
    state = { wordKey: key, isFavorite: favorite, isLearned: learned };
  }

  // Vocabulary collection achievements.
  const { count } = await supabase
    .from("saved_words")
    .select("id", { count: "exact", head: true })
    .eq("user_id", user.id);
  const countValue = count ?? 0;
  const due: AchievementType[] = [];
  if (countValue >= 10) due.push("vocab-10");
  if (countValue >= 25) due.push("vocab-25");
  if (due.length) await awardAchievements(supabase, user.id, due);

  return {
    success: true,
    data: state,
    message: flags.favorite
      ? "শব্দটি পছন্দের তালিকায় যোগ হয়েছে।"
      : "শব্দটি পছন্দের তালিকা থেকে সরানো হয়েছে।",
  };
}

/** Remove a saved word from the notebook entirely. */
export async function deleteWordAction(rawKey: string): Promise<ActionResult<WordState>> {
  const key = resolveWordKey(rawKey);
  if (!key) return fail("শব্দটি পাওয়া যায়নি।");
  if (!isSupabaseConfigured) return fail("Supabase কনফিগার করা হয়নি।");

  const user = await getSessionUser();
  if (!user) return fail("আপনি লগইন করেননি।");

  const supabase = await createSupabaseServerClient();
  await supabase.from("saved_words").delete().eq("user_id", user.id).eq("word_key", key);

  return { success: true, data: { wordKey: key, isFavorite: false, isLearned: false } };
}

/** All saved words for the signed-in user. */
export async function getSavedWordsForUser(): Promise<WordState[]> {
  if (!isSupabaseConfigured) return [];
  const user = await getSessionUser();
  if (!user) return [];
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("saved_words")
    .select("word_key, is_favorite, is_learned")
    .eq("user_id", user.id);
  return (data ?? []).map((row) => ({
    wordKey: row.word_key,
    isFavorite: row.is_favorite,
    isLearned: row.is_learned,
  }));
}