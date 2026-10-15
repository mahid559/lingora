import type { Metadata } from "next";
import { NotConfiguredNotice } from "@/components/auth/not-configured";
import { AuthShell } from "@/components/auth/auth-shell";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export const metadata: Metadata = { title: "পাসওয়ার্ড ভুলে গেছেন" };

export default function ForgotPasswordPage() {
  return (
    <AuthShell mode="forgot-password">
      {!isSupabaseConfigured && (
        <NotConfiguredNotice feature="পাসওয়ার্ড রিসেট" className="mb-6" />
      )}
    </AuthShell>
  );
}