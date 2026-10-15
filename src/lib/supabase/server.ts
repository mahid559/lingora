import { createServerClient } from "@supabase/ssr";
import type { CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { requireSupabaseConfigured, supabaseAnonKey, supabaseUrl } from "./config";

/**
 * Server-side Supabase client bound to the request's cookie store.
 * Server Components must NOT call setAll (throws) — middleware refreshes
 * sessions; we swallow the error per the @supabase/ssr guidance.
 */
export async function createSupabaseServerClient() {
  requireSupabaseConfigured();
  const cookieStore = await cookies();

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // Called from a Server Component. Safe to ignore when middleware
          // is responsible for refreshing the session.
        }
      },
    },
  });
}