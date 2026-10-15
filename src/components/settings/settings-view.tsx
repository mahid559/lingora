"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Lock,
  LogOut,
  CheckCircle2,
  Languages,
  Target,
  Smartphone,
  Info,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Field, Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/toaster";
import { useLearning } from "@/lib/learning-context";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { changePasswordAction, logoutAction } from "@/actions/auth";
import { validateDisplayName, validatePassword } from "@/lib/validators";
import { cn } from "@/lib/utils";

const GOAL_OPTIONS = [10, 15, 20, 30, 45, 60];

export function SettingsView() {
  const router = useRouter();
  const { toast } = useToast();
  const { ready, settings, updateSettings } = useLearning();

  const [displayName, setDisplayName] = React.useState(settings.displayName);
  const [language, setLanguage] = React.useState(settings.nativeLanguage);
  const [goal, setGoal] = React.useState(settings.dailyGoalMinutes);
  const [profileErrors, setProfileErrors] = React.useState<Record<string, string>>({});
  const [savingProfile, setSavingProfile] = React.useState(false);

  const [currentPassword, setCurrentPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [passwordErrors, setPasswordErrors] = React.useState<Record<string, string>>({});
  const [savingPassword, setSavingPassword] = React.useState(false);
  const [loggingOut, setLoggingOut] = React.useState(false);

  // Sync the form once persisted settings have been hydrated.
  React.useEffect(() => {
    if (!ready) return;
    setDisplayName(settings.displayName);
    setLanguage(settings.nativeLanguage);
    setGoal(settings.dailyGoalMinutes);
  }, [ready]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleProfile(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    const nameError = validateDisplayName(displayName);
    if (nameError) nextErrors.name = nameError;
    setProfileErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSavingProfile(true);
    try {
      const res = updateSettings({ displayName, nativeLanguage: language, dailyGoalMinutes: goal });
      if (res.success) {
        toast(res.message ?? "Profile updated successfully.");
      } else {
        toast(res.error ?? "Failed to save profile.", "error");
      }
    } finally {
      setSavingProfile(false);
    }
  }

  async function handlePassword(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!currentPassword) nextErrors.current = "Please enter your current password.";
    const p = validatePassword(newPassword);
    if (p) nextErrors.new = p;
    if (confirmPassword !== newPassword) nextErrors.confirm = "Passwords do not match.";
    setPasswordErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSavingPassword(true);
    try {
      const res = await changePasswordAction(currentPassword, newPassword);
      if (res.success) {
        toast(res.message ?? "Password updated successfully.");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        toast(res.error, "error");
      }
    } finally {
      setSavingPassword(false);
    }
  }

  async function handleLogout() {
    setLoggingOut(true);
    try {
      const res = await logoutAction();
      if (res.success) {
        router.push("/");
        router.refresh();
      } else {
        toast(res.error, "error");
      }
    } finally {
      setLoggingOut(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-brand-navy-900 sm:text-3xl">
          Settings & Preferences
        </h1>
        <p className="mt-1 text-sm text-brand-navy-600">
          Manage your learner profile, daily study time goal, and account security.
        </p>
      </div>

      {/* Learner summary */}
      <Card>
        <CardContent className="flex flex-wrap items-center gap-4">
          <Avatar name={displayName || "Learner"} size="lg" />
          <div className="min-w-0 flex-1">
            <p className="text-lg font-bold text-brand-navy-900">
              {displayName || "Learner"}
            </p>
            <p className="mt-0.5 flex items-center gap-1.5 text-xs text-brand-navy-600">
              <Smartphone className="h-3.5 w-3.5" aria-hidden />
              Your learning streak and progress are saved in this browser.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Profile */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5 text-brand-mint-700" aria-hidden /> Learner Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleProfile} className="space-y-4" noValidate>
            <Field label="Display Name" htmlFor="display-name" error={profileErrors.name}>
              <Input
                id="display-name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="e.g. Rafsan Ahmed"
              />
            </Field>

            <Field label="Native Explanation Language" htmlFor="native-language">
              <select
                id="native-language"
                value={language}
                onChange={(e) => setLanguage(e.target.value as "bn" | "en")}
                className="h-11 w-full rounded-xl border border-brand-navy-800/15 bg-white px-3.5 text-[0.95rem] text-brand-navy-900 focus:border-brand-mint focus:outline-none focus:ring-2 focus:ring-brand-mint/30"
              >
                <option value="bn">বাংলা (Bengali)</option>
                <option value="en">English</option>
              </select>
            </Field>

            <div>
              <p className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-brand-navy-800">
                <Target className="h-4 w-4 text-brand-mint-700" aria-hidden /> Daily Practice Goal (Minutes)
              </p>
              <div className="flex flex-wrap gap-2">
                {GOAL_OPTIONS.map((minutes) => (
                  <button
                    key={minutes}
                    type="button"
                    aria-pressed={goal === minutes}
                    onClick={() => setGoal(minutes)}
                    className={cn(
                      "h-10 min-w-[3.5rem] rounded-xl border px-3 text-sm font-bold transition-colors",
                      goal === minutes
                        ? "border-brand-mint bg-brand-mint text-white"
                        : "border-brand-navy-800/15 bg-white text-brand-navy-700 hover:border-brand-mint"
                    )}
                  >
                    {minutes}m
                  </button>
                ))}
              </div>
            </div>

            <Button type="submit" loading={savingProfile} disabled={!ready}>
              <CheckCircle2 className="h-4 w-4" /> Save Profile Changes
            </Button>
          </form>
        </CardContent>
      </Card>

      {isSupabaseConfigured ? (
        <>
          {/* Password */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-brand-mint-700" aria-hidden /> Change Password
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePassword} className="space-y-4" noValidate>
                <Field label="Current Password" htmlFor="current-password" error={passwordErrors.current}>
                  <Input
                    id="current-password"
                    type="password"
                    autoComplete="current-password"
                    value={currentPassword}
                    invalid={Boolean(passwordErrors.current)}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </Field>
                <Field
                  label="New Password"
                  htmlFor="new-password"
                  error={passwordErrors.new}
                  hint="Minimum 8 characters with at least one letter and one number."
                >
                  <Input
                    id="new-password"
                    type="password"
                    autoComplete="new-password"
                    value={newPassword}
                    invalid={Boolean(passwordErrors.new)}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </Field>
                <Field label="Confirm New Password" htmlFor="confirm-password" error={passwordErrors.confirm}>
                  <Input
                    id="confirm-password"
                    type="password"
                    autoComplete="new-password"
                    value={confirmPassword}
                    invalid={Boolean(passwordErrors.confirm)}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Field>
                <Button type="submit" loading={savingPassword}>
                  Update Password
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Session */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Languages className="h-5 w-5 text-brand-mint-700" aria-hidden /> Session Management
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-brand-navy-600">
                Log out securely from this device.
              </p>
              <Button variant="outline" onClick={handleLogout} loading={loggingOut}>
                <LogOut className="h-4 w-4" /> Log Out
              </Button>
            </CardContent>
          </Card>
        </>
      ) : (
        <Card className="border-brand-amber-100 bg-brand-amber-100/40">
          <CardContent className="flex items-start gap-3 sm:p-6">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-amber-600" aria-hidden />
            <div className="text-sm leading-6">
              <p className="font-bold text-brand-navy-900">Local Browser Storage Active</p>
              <p className="mt-0.5 text-brand-navy-700 font-bangla">
                আপনার সমস্ত অগ্রগতি, স্ট্রিক, কুইজের ফলাফল ও সংরক্ষিত শব্দ স্বয়ংক্রিয়ভাবে এই ব্রাউজারে সংরক্ষিত থাকে। ক্লাউড অ্যাকাউন্ট লিঙ্ক করলে সব ডিভাইসে সিঙ্ক হয়ে যাবে।
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}