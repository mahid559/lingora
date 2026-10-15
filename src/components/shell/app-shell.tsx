"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Map,
  Compass,
  GraduationCap,
  BookMarked,
  BarChart3,
  Settings,
  LogOut,
  ChevronDown,
  Play,
} from "lucide-react";
import { LogoMark } from "@/components/brand/logo";
import { Avatar } from "@/components/ui/avatar";
import { Toaster, useToast } from "@/components/ui/toaster";
import { useLearning } from "@/lib/learning-context";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { logoutAction } from "@/actions/auth";
import { toBanglaDigits } from "@/lib/dates";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
  labelEn: string;
  badge?: string;
  icon: typeof LayoutDashboard;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", labelEn: "Dashboard", icon: LayoutDashboard },
  { href: "/roadmap", label: "60-Day Course", labelEn: "60-Day Course", icon: Map },
  { href: "/roadmap-90", label: "90-Day Advanced", labelEn: "90-Day Advanced", badge: "A1-C1", icon: Compass },
  { href: "/ielts", label: "IELTS Prep", labelEn: "IELTS Prep", badge: "Band 7.5+", icon: GraduationCap },
  { href: "/vocabulary", label: "Vocabulary", labelEn: "Vocabulary", icon: BookMarked },
  { href: "/progress", label: "Progress", labelEn: "Progress", icon: BarChart3 },
  { href: "/settings", label: "Settings", labelEn: "Settings", icon: Settings },
];

const MOBILE_NAV_ITEMS: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", labelEn: "Dashboard", icon: LayoutDashboard },
  { href: "/roadmap", label: "60-Day", labelEn: "60-Day", icon: Map },
  { href: "/roadmap-90", label: "90-Day", labelEn: "90-Day", icon: Compass },
  { href: "/ielts", label: "IELTS", labelEn: "IELTS", icon: GraduationCap },
  { href: "/vocabulary", label: "Vocab", labelEn: "Vocab", icon: BookMarked },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <Toaster>
      <AppShellInner>{children}</AppShellInner>
    </Toaster>
  );
}

function AppShellInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { ready, settings, streak, currentLessonDay } = useLearning();
  const displayName = ready ? settings.displayName || "Learner" : "Learner";

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-white/10 bg-brand-navy-800 lg:flex">
        <div className="flex h-16 items-center gap-2.5 px-5">
          <LogoMark />
          <Link href="/dashboard" className="text-lg font-extrabold tracking-tight text-white">
            LINGORA
          </Link>
        </div>

        <nav aria-label="Main Navigation" className="flex-1 space-y-1 px-3 py-4">
          {NAV_ITEMS.map((item) => (
            <SidebarLink key={item.href} item={item} active={isActive(item.href)} />
          ))}
        </nav>

        {currentLessonDay !== null && (
          <div className="px-3 pb-3">
            <Link
              href={`/lessons/${currentLessonDay}`}
              className="flex items-center gap-2 rounded-xl bg-brand-mint px-3.5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-mint-600 shadow-sm"
            >
              <Play className="h-4 w-4" aria-hidden />
              Continue Day {currentLessonDay}
            </Link>
          </div>
        )}

        <div className="border-t border-white/10 p-3">
          <UserMenu displayName={displayName} streakCurrent={streak.current} />
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-brand-navy-800/10 bg-brand-cream/95 px-4 backdrop-blur lg:hidden">
        <Link href="/dashboard" className="flex items-center gap-2">
          <LogoMark className="h-8 w-8" />
          <span className="text-base font-extrabold tracking-tight text-brand-navy-900">LINGORA</span>
        </Link>
        {currentLessonDay !== null && (
          <Link
            href={`/lessons/${currentLessonDay}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-mint px-3 py-1.5 text-xs font-bold text-white"
          >
            <Play className="h-3.5 w-3.5" aria-hidden />
            Day {currentLessonDay}
          </Link>
        )}
      </header>

      {/* Main content */}
      <div className="lg:pl-64">
        <main id="main" className="mx-auto w-full max-w-6xl px-4 pb-24 pt-6 sm:px-6 lg:px-8 lg:pb-14">
          {children}
        </main>
      </div>

      {/* Mobile bottom nav */}
      <nav
        aria-label="Mobile Navigation"
        className="fixed inset-x-0 bottom-0 z-30 border-t border-brand-navy-800/10 bg-brand-surface pb-[env(safe-area-inset-bottom)] lg:hidden"
      >
        <ul className="grid grid-cols-5">
          {MOBILE_NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex min-h-[56px] flex-col items-center justify-center gap-1 py-2 text-[0.68rem] font-bold transition-colors",
                    active ? "text-brand-mint-700" : "text-brand-navy-600"
                  )}
                >
                  <item.icon className={cn("h-5 w-5", active && "text-brand-mint")} aria-hidden />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

function SidebarLink({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors",
        active
          ? "bg-brand-mint text-white shadow-sm"
          : "text-brand-mint-100/80 hover:bg-white/5 hover:text-white"
      )}
    >
      <div className="flex items-center gap-3">
        <item.icon className="h-[18px] w-[18px]" aria-hidden />
        <span>{item.label}</span>
      </div>
      {item.badge && (
        <span
          className={cn(
            "rounded-md px-1.5 py-0.5 text-[0.62rem] font-bold uppercase",
            active ? "bg-white/20 text-white" : "bg-white/10 text-brand-mint-200"
          )}
        >
          {item.badge}
        </span>
      )}
    </Link>
  );
}

function UserMenu({ displayName, streakCurrent }: { displayName: string; streakCurrent: number }) {
  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  async function handleLogout() {
    setLoading(true);
    try {
      const res = await logoutAction();
      if (res.success) {
        toast("লগআউট সম্পন্ন।", "info");
        router.push("/");
        router.refresh();
      } else {
        toast(res.error, "error");
      }
    } finally {
      setLoading(false);
      setOpen(false);
    }
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex w-full items-center gap-2.5 rounded-xl p-1.5 text-left transition-colors hover:bg-white/5"
      >
        <Avatar name={displayName} className="h-9 w-9 bg-brand-mint-100 text-brand-navy-800" />
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-bold text-white">{displayName}</span>
          <span className="block truncate text-xs text-brand-mint-100/70">
            {streakCurrent > 0 ? `🔥 ${streakCurrent} Day Streak` : "Progress saved on this device"}
          </span>
        </span>
        <ChevronDown
          className={cn("h-4 w-4 text-brand-mint-100/70 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute bottom-full left-0 mb-2 w-full overflow-hidden rounded-xl border border-white/10 bg-brand-navy-900 shadow-pop"
        >
          <Link
            href="/settings"
            role="menuitem"
            className="flex items-center gap-2.5 px-3.5 py-2.5 text-sm font-semibold text-brand-mint-100/90 hover:bg-white/5"
          >
            <Settings className="h-4 w-4" aria-hidden />
            Profile & Settings
          </Link>
          {isSupabaseConfigured && (
            <button
              type="button"
              role="menuitem"
              onClick={handleLogout}
              disabled={loading}
              className="flex w-full items-center gap-2.5 px-3.5 py-2.5 text-sm font-semibold text-brand-rose-100 hover:bg-white/5 disabled:opacity-60"
            >
              <LogOut className="h-4 w-4" aria-hidden />
              {loading ? "Logging out…" : "Log Out"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}