import type { Metadata } from "next";
import { LearningProvider } from "@/lib/learning-context";
import { AppShell } from "@/components/shell/app-shell";

export const metadata: Metadata = {
  title: {
    default: "LINGORA — শিখুন",
    template: "%s · LINGORA",
  },
};

// The app is intentionally server-rendered per request so metadata and static
// curriculum content stay fresh, but authentication is never required here.
export const dynamic = "force-dynamic";

/**
 * App shell for every learning route.
 *
 * There is no login gate: the whole learning experience works anonymously,
 * with progress persisted to the device's localStorage. When Supabase auth
 * ships later, this layout stays as-is and only the persistence layer
 * (`src/lib/local-store.ts`) needs a backend adapter.
 */
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <LearningProvider>
      <AppShell>{children}</AppShell>
    </LearningProvider>
  );
}