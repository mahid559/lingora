import type { Metadata } from "next";
import { NotConfiguredNotice } from "@/components/auth/not-configured";
import { AuthShell } from "@/components/auth/auth-shell";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export const metadata: Metadata = { title: "লগইন" };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {
  const params = await searchParams;
  return (
    <AuthShell mode="login" next={params.next ?? "/dashboard"} authError={params.error}>
      {!isSupabaseConfigured && (
        <NotConfiguredNotice feature="লগইন" className="mb-6" />
      )}
    </AuthShell>
  );
}