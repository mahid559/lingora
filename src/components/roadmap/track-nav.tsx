"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MessageSquare,
  GraduationCap,
  Calendar,
  Compass,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TrackNavProps {
  className?: string;
  activeCourse?: "spoken-60" | "spoken-90" | "ielts-60" | "ielts-90";
}

export function TrackNav({ className, activeCourse }: TrackNavProps) {
  const pathname = usePathname();

  const isSpoken60 =
    activeCourse === "spoken-60" ||
    pathname === "/roadmap" ||
    pathname.startsWith("/lessons/");
  const isSpoken90 = activeCourse === "spoken-90" || pathname === "/roadmap-90";
  const isIelts60 = activeCourse === "ielts-60" || pathname === "/ielts-60";
  const isIelts90 =
    activeCourse === "ielts-90" ||
    pathname === "/ielts" ||
    pathname === "/ielts-90";

  return (
    <div className={cn("w-full space-y-3", className)}>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-mint-700">
          <Sparkles className="h-4 w-4" />
          <span>Curriculum Tracks · Two Learning Pathways</span>
        </div>
        <span className="text-xs text-brand-navy-600">
          Switch between Spoken English and IELTS courses
        </span>
      </div>

      {/* Grid of the 4 dedicated programs under 2 Pillars */}
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Track 1: Spoken English 60-Day */}
        <Link
          href="/roadmap"
          className={cn(
            "group relative flex items-center gap-3 rounded-2xl border p-3.5 transition-all",
            isSpoken60
              ? "border-brand-mint bg-brand-surface shadow-cardHover ring-1 ring-brand-mint/40"
              : "border-brand-navy-800/10 bg-white/80 hover:border-brand-mint/50 hover:bg-white hover:shadow-card"
          )}
        >
          <div
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors",
              isSpoken60
                ? "bg-brand-mint text-white"
                : "bg-brand-mint-100/70 text-brand-mint-800 group-hover:bg-brand-mint group-hover:text-white"
            )}
          >
            <Calendar className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-mint-700">
                Spoken English
              </span>
              <span className="rounded-full bg-brand-mint-100 px-1.5 py-0.2 text-[0.6rem] font-bold text-brand-mint-800">
                A1→B1
              </span>
            </div>
            <p className="text-sm font-extrabold text-brand-navy-900 truncate">
              60-Day Course
            </p>
            <p className="font-bangla text-[0.7rem] text-brand-navy-600 truncate">
              দৈনন্দিন কথ্য ইংরেজি
            </p>
          </div>
          {isSpoken60 && (
            <span
              aria-hidden
              className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-brand-mint"
            />
          )}
        </Link>

        {/* Track 2: Spoken English 90-Day */}
        <Link
          href="/roadmap-90"
          className={cn(
            "group relative flex items-center gap-3 rounded-2xl border p-3.5 transition-all",
            isSpoken90
              ? "border-brand-blue bg-brand-surface shadow-cardHover ring-1 ring-brand-blue/40"
              : "border-brand-navy-800/10 bg-white/80 hover:border-brand-blue/50 hover:bg-white hover:shadow-card"
          )}
        >
          <div
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors",
              isSpoken90
                ? "bg-brand-blue text-white"
                : "bg-brand-blue-100 text-brand-blue-600 group-hover:bg-brand-blue group-hover:text-white"
            )}
          >
            <Compass className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-600">
                Spoken English
              </span>
              <span className="rounded-full bg-brand-blue-100 px-1.5 py-0.2 text-[0.6rem] font-bold text-brand-blue-600">
                A1→C1
              </span>
            </div>
            <p className="text-sm font-extrabold text-brand-navy-900 truncate">
              90-Day Advanced
            </p>
            <p className="font-bangla text-[0.7rem] text-brand-navy-600 truncate">
              জিরো থেকে অ্যাডভান্সড
            </p>
          </div>
          {isSpoken90 && (
            <span
              aria-hidden
              className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-brand-blue"
            />
          )}
        </Link>

        {/* Track 3: IELTS 60-Day Intensive */}
        <Link
          href="/ielts?track=60"
          className={cn(
            "group relative flex items-center gap-3 rounded-2xl border p-3.5 transition-all",
            isIelts60
              ? "border-brand-amber bg-brand-surface shadow-cardHover ring-1 ring-brand-amber/40"
              : "border-brand-navy-800/10 bg-white/80 hover:border-brand-amber/50 hover:bg-white hover:shadow-card"
          )}
        >
          <div
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors",
              isIelts60
                ? "bg-brand-amber text-white"
                : "bg-brand-amber-100 text-brand-amber-600 group-hover:bg-brand-amber group-hover:text-white"
            )}
          >
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-amber-600">
                IELTS Prep
              </span>
              <span className="rounded-full bg-brand-amber-100 px-1.5 py-0.2 text-[0.6rem] font-bold text-brand-amber-600">
                Band 7.0+
              </span>
            </div>
            <p className="text-sm font-extrabold text-brand-navy-900 truncate">
              60-Day Intensive
            </p>
            <p className="font-bangla text-[0.7rem] text-brand-navy-600 truncate">
              আইইএলটিএস নিবিড় কোর্স
            </p>
          </div>
          {isIelts60 && (
            <span
              aria-hidden
              className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-brand-amber"
            />
          )}
        </Link>

        {/* Track 4: IELTS 90-Day Master */}
        <Link
          href="/ielts?track=90"
          className={cn(
            "group relative flex items-center gap-3 rounded-2xl border p-3.5 transition-all",
            isIelts90 && !isIelts60
              ? "border-brand-navy-800 bg-brand-surface shadow-cardHover ring-1 ring-brand-navy-800/40"
              : "border-brand-navy-800/10 bg-white/80 hover:border-brand-navy-800/50 hover:bg-white hover:shadow-card"
          )}
        >
          <div
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors",
              isIelts90 && !isIelts60
                ? "bg-brand-navy-800 text-white"
                : "bg-brand-navy/10 text-brand-navy-800 group-hover:bg-brand-navy-800 group-hover:text-white"
            )}
          >
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-navy-800">
                IELTS Master
              </span>
              <span className="rounded-full bg-brand-navy/10 px-1.5 py-0.2 text-[0.6rem] font-bold text-brand-navy-800">
                Band 8.0+
              </span>
            </div>
            <p className="text-sm font-extrabold text-brand-navy-900 truncate">
              90-Day Blueprint
            </p>
            <p className="font-bangla text-[0.7rem] text-brand-navy-600 truncate">
              মাস্টার আইইএলটিএস ব্লুপ্রিন্ট
            </p>
          </div>
          {isIelts90 && !isIelts60 && (
            <span
              aria-hidden
              className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-brand-navy-800"
            />
          )}
        </Link>
      </div>
    </div>
  );
}
