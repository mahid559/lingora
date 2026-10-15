"use client";

import { createBrowserClient } from "@supabase/ssr";
import { supabaseAnonKey, supabaseUrl } from "./config";

/**
 * Browser-side Supabase client used by auth pages and other client flows.
 * Throws a clear error when Supabase is not configured so callers can
 * render the setup notice instead of crashing.
 */
export function createSupabaseBrowserClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase is not configured in this environment.");
  }
  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}