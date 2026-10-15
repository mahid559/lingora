import type { Metadata } from "next";
import { NotConfiguredNotice } from "@/components/auth/not-configured";
import { AuthShell } from "@/components/auth/auth-shell";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export const metadata: Metadata = { title: "নতুন পাসওয়ার্ড" };

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ code?: string }>;
}) {
  const params = await searchParams;
  return (
    <AuthShell mode="reset-password" recoveryCode={params.code ?? undefined}>
      {!isSupabaseConfigured && (
        <NotConfiguredNotice feature="পাসওয়ার্ড রিসেট" className="mb-6" />
      )}
    </AuthShell>
  );
}