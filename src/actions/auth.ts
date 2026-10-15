"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isSupabaseConfigured, siteUrl } from "@/lib/supabase/config";
import { getSessionUser } from "@/lib/auth";
import {
  cleanText,
  humanizeAuthError,
  validateDisplayName,
  validateEmail,
  validatePassword,
} from "@/lib/validators";

export type ActionResult<T = undefined> =
  | { success: true; message?: string; data?: T }
  | { success: false; error: string };

function fail(error: string): ActionResult {
  return { success: false, error };
}

/* ------------------------------------------------------------------ */
/* Register                                                            */
/* ------------------------------------------------------------------ */
export async function registerAction(
  email: string,
  password: string,
  displayName: string
): Promise<ActionResult<{ needsEmailConfirmation: boolean }>> {
  const emailError = validateEmail(email);
  const passwordError = validatePassword(password);
  const nameError = validateDisplayName(displayName);
  if (emailError) return fail(emailError);
  if (passwordError) return fail(passwordError);
  if (nameError) return fail(nameError);
  if (!isSupabaseConfigured) return fail("Supabase কনফিগার করা হয়নি — setup নির্দেশনা দেখুন।");

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signUp({
    email: email.trim().toLowerCase(),
    password,
    options: {
      data: { display_name: cleanText(displayName, 60) },
      emailRedirectTo: `${siteUrl}/auth/callback`,
    },
  });

  if (error) return fail(humanizeAuthError(error.code, error.message));

  const needsEmailConfirmation = !data.session;
  return {
    success: true,
    data: { needsEmailConfirmation },
    message: needsEmailConfirmation
      ? "রেজিস্ট্রেশন সফল! আপনার ইমেইলে নিশ্চিতকরণ লিংক পাঠানো হয়েছে — খুলে লগইন করুন।"
      : "রেজিস্ট্রেশন সফল! স্বাগতম।",
  };
}

/* ------------------------------------------------------------------ */
/* Login                                                               */
/* ------------------------------------------------------------------ */
export async function loginAction(
  email: string,
  password: string
): Promise<ActionResult<{ redirectTo: string }>> {
  const emailError = validateEmail(email);
  if (emailError) return fail(emailError);
  if (!password) return fail("পাসওয়ার্ড লিখুন।");
  if (!isSupabaseConfigured) return fail("Supabase কনফিগার করা হয়নি — setup নির্দেশনা দেখুন।");

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: email.trim().toLowerCase(),
    password,
  });

  if (error) return fail(humanizeAuthError(error.code, error.message));

  return { success: true, data: { redirectTo: "/dashboard" } };
}

/* ------------------------------------------------------------------ */
/* Logout                                                              */
/* ------------------------------------------------------------------ */
export async function logoutAction(): Promise<ActionResult> {
  if (!isSupabaseConfigured) return fail("Supabase কনফিগার করা হয়নি।");
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  return { success: true, message: "লগআউট সম্পন্ন।" };
}

/* ------------------------------------------------------------------ */
/* Forgot password                                                     */
/* ------------------------------------------------------------------ */
export async function forgotPasswordAction(email: string): Promise<ActionResult> {
  const emailError = validateEmail(email);
  if (emailError) return fail(emailError);
  if (!isSupabaseConfigured) return fail("Supabase কনফিগার করা হয়নি — setup নির্দেশনা দেখুন।");

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.resetPasswordForEmail(email.trim().toLowerCase(), {
    redirectTo: `${siteUrl}/reset-password`,
  });

  if (error) return fail(humanizeAuthError(error.code, error.message));

  // Do not reveal whether the email exists — always show the same message.
  return {
    success: true,
    message:
      "পাসওয়ার্ড রিসেটের লিংক পাঠানো হয়েছে। ইমেইল ইনবক্স (এবং স্প্যাম ফোল্ডার) দেখুন।",
  };
}

/* ------------------------------------------------------------------ */
/* Reset password (after clicking the magic link)                      */
/* ------------------------------------------------------------------ */
export async function resetPasswordAction(newPassword: string): Promise<ActionResult> {
  const passwordError = validatePassword(newPassword);
  if (passwordError) return fail(passwordError);
  if (!isSupabaseConfigured) return fail("Supabase কনফিগার করা হয়নি।");

  const user = await getSessionUser();
  if (!user) return fail("রিসেট সেশন নেই — পাসওয়ার্ড রিসেট লিংক থেকে আবার চেষ্টা করুন।");

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.updateUser({ password: newPassword });
  if (error) return fail(humanizeAuthError(error.code, error.message));

  return { success: true, message: "পাসওয়ার্ড পরিবর্তন হয়েছে! নতুন পাসওয়ার্ড দিয়ে লগইন করুন।" };
}

/* ------------------------------------------------------------------ */
/* Change password from settings                                       */
/* ------------------------------------------------------------------ */
export async function changePasswordAction(
  currentPassword: string,
  newPassword: string
): Promise<ActionResult> {
  const passwordError = validatePassword(newPassword);
  if (passwordError) return fail(passwordError);
  if (!currentPassword) return fail("বর্তমান পাসওয়ার্ড লিখুন।");
  if (!isSupabaseConfigured) return fail("Supabase কনফিগার করা হয়নি।");

  const user = await getSessionUser();
  if (!user?.email) return fail("লগইন করা নেই।");

  const supabase = await createSupabaseServerClient();

  // Verify the current password before allowing the change.
  const { error: verifyError } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: currentPassword,
  });
  if (verifyError) return fail("বর্তমান পাসওয়ার্ড সঠিক নয়।");

  const { error } = await supabase.auth.updateUser({ password: newPassword });
  if (error) return fail(humanizeAuthError(error.code, error.message));

  return { success: true, message: "পাসওয়ার্ড সফলভাবে পরিবর্তন হয়েছে।" };
}

/* ------------------------------------------------------------------ */
/* Update profile                                                      */
/* ------------------------------------------------------------------ */
export interface ProfileUpdateInput {
  displayName: string;
  nativeLanguage: string;
  dailyGoalMinutes: number;
}

export async function updateProfileAction(
  input: ProfileUpdateInput
): Promise<ActionResult<{ displayName: string; nativeLanguage: string; dailyGoalMinutes: number }>> {
  const nameError = validateDisplayName(input.displayName);
  if (nameError) return fail(nameError);

  const minutes = Math.min(Math.max(Math.round(input.dailyGoalMinutes) || 20, 5), 180);
  const language = ["bn", "en"].includes(input.nativeLanguage) ? input.nativeLanguage : "bn";

  const user = await getSessionUser();
  if (!user) return fail("আপনি লগইন করেননি।");
  if (!isSupabaseConfigured) return fail("Supabase কনফিগার করা হয়নি।");

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("profiles").upsert(
    {
      id: user.id,
      display_name: cleanText(input.displayName, 60),
      native_language: language,
      daily_goal_minutes: minutes,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "id" }
  );

  if (error) return fail("প্রোফাইল আপডেট করা যায়নি। আবার চেষ্টা করুন।");

  return {
    success: true,
    message: "প্রোফাইল সফলভাবে আপডেট হয়েছে।",
    data: {
      displayName: cleanText(input.displayName, 60),
      nativeLanguage: language,
      dailyGoalMinutes: minutes,
    },
  };
}