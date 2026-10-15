import type { Metadata } from "next";
import { NotConfiguredNotice } from "@/components/auth/not-configured";
import { AuthShell } from "@/components/auth/auth-shell";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export const metadata: Metadata = { title: "রেজিস্ট্রেশন" };

export default function RegisterPage() {
  return (
    <AuthShell mode="register">
      {!isSupabaseConfigured && (
        <NotConfiguredNotice feature="অ্যাকাউন্ট তৈরি" className="mb-6" />
      )}
    </AuthShell>
  );
}