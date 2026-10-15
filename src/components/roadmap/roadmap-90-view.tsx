"use client";

import * as React from "react";
import {
  CheckCircle2,
  Circle,
  Clock,
  Sparkles,
  BookOpen,
  Volume2,
  X,
  Search,
  Filter,
  GraduationCap,
  ChevronRight,
  HelpCircle,
  Compass,
} from "lucide-react";
import { phases90, lessons90, type Day90Lesson, type Phase90 } from "@/data/roadmap-90";
import { TrackNav } from "./track-nav";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Reveal } from "@/components/motion/reveal";
import { toBanglaDigits } from "@/lib/dates";
import { cn } from "@/lib/utils";

const LEVEL_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  A1: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  A2: { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" },
  B1: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  B2: { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200" },
  C1: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
};

export function Roadmap90View() {
  const [completedDays, setCompletedDays] = React.useState<number[]>([]);
  const [selectedPhase, setSelectedPhase] = React.useState<number | "all">("all");
  const [selectedLevel, setSelectedLevel] = React.useState<string | "all">("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeModalLesson, setActiveModalLesson] = React.useState<Day90Lesson | null>(null);

  // Load persistence from localStorage
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem("lingora_90_completed");
      if (saved) {
        setCompletedDays(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleDayCompletion = (day: number) => {
    setCompletedDays((prev) => {
      const updated = prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day];
      try {
        localStorage.setItem("lingora_90_completed", JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const filteredLessons = lessons90.filter((lesson) => {
    const matchesPhase = selectedPhase === "all" || lesson.phase === selectedPhase;
    const matchesLevel = selectedLevel === "all" || lesson.level === selectedLevel;
    const matchesSearch =
      searchQuery.trim() === "" ||
      lesson.titleBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.grammarFocus.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPhase && matchesLevel && matchesSearch;
  });

  const completedCount = completedDays.length;
  const progressPercent = Math.round((completedCount / 90) * 100);

  return (
    <div className="space-y-8 pb-12">
      {/* Track Navigator */}
      <TrackNav activeCourse="spoken-90" />

      {/* Hero Section */}
      <div className="rounded-3xl border border-brand-navy-800/10 bg-white p-6 shadow-card sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="blue" className="px-3 py-1 text-xs">
                <Compass className="h-3.5 w-3.5" /> Spoken English · 90-Day Advanced
              </Badge>
              <Badge variant="navy" className="text-xs">
                Zero (A1) to Advanced (C1) Mastery
              </Badge>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-brand-navy-900 sm:text-4xl">
              90-Day Advanced Spoken English Roadmap
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm leading-6 text-brand-navy-700">
              A complete structured curriculum taking Bengali learners from absolute zero (A1) to professional fluency, complex syntax, boardroom negotiation, and native C1 mastery.
            </p>
          </div>

          {/* Progress Card */}
          <div className="w-full shrink-0 rounded-2xl border border-brand-navy-800/10 bg-brand-cream/80 p-5 lg:w-80">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-brand-navy-700">
                Course Progress
              </span>
              <span className="rounded-full bg-brand-blue px-2.5 py-0.5 text-xs font-bold text-white">
                {progressPercent}%
              </span>
            </div>
            <p className="mt-2 text-2xl font-black text-brand-navy-900">
              {completedCount} <span className="text-sm font-semibold text-brand-navy-600">/ 90 Days Done</span>
            </p>
            <Progress value={completedCount} max={90} className="mt-3 h-2.5" />
            <p className="mt-2 text-[0.7rem] text-brand-navy-600">
              Click the checkmark icon on any day card to track progress. Automatically saved.
            </p>
          </div>
        </div>

        {/* Course Pillars Metric Grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 border-t border-brand-navy-800/10 pt-6 sm:grid-cols-4">
          <div className="rounded-xl bg-brand-cream p-3 text-center">
            <p className="text-xl font-black text-brand-navy-900">90 Days</p>
            <p className="text-xs text-brand-navy-600 font-medium">25-30 mins/day</p>
          </div>
          <div className="rounded-xl bg-brand-cream p-3 text-center">
            <p className="text-xl font-black text-brand-navy-900">9 Phases</p>
            <p className="text-xs text-brand-navy-600 font-medium">Foundations to Native</p>
          </div>
          <div className="rounded-xl bg-brand-cream p-3 text-center">
            <p className="text-xl font-black text-brand-navy-900">A1 → C1</p>
            <p className="text-xs text-brand-navy-600 font-medium">International CEFR</p>
          </div>
          <div className="rounded-xl bg-brand-cream p-3 text-center">
            <p className="text-xl font-black text-brand-navy-900">1,200+</p>
            <p className="text-xs text-brand-navy-600 font-medium">Vocab, Idioms & Collocations</p>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col gap-4 rounded-2xl border border-brand-navy-800/10 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-navy-600/60" />
          <input
            type="text"
            placeholder="Search day title, grammar topic or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-brand-navy-800/10 bg-brand-cream/50 py-2.5 pl-10 pr-4 text-xs font-medium text-brand-navy-900 placeholder:text-brand-navy-600/50 focus:border-brand-mint focus:bg-white focus:outline-none"
          />
        </div>

        {/* Phase Filter */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="flex items-center gap-1 text-xs font-bold text-brand-navy-600 mr-1">
            <Filter className="h-3.5 w-3.5" /> Phase:
          </span>
          <button
            onClick={() => setSelectedPhase("all")}
            className={cn(
              "rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors",
              selectedPhase === "all"
                ? "bg-brand-navy-800 text-white"
                : "bg-brand-cream text-brand-navy-700 hover:bg-brand-navy/10"
            )}
          >
            All
          </button>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((pNum) => (
            <button
              key={pNum}
              onClick={() => setSelectedPhase(pNum)}
              className={cn(
                "rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors",
                selectedPhase === pNum
                  ? "bg-brand-blue text-white"
                  : "bg-brand-cream text-brand-navy-700 hover:bg-brand-navy/10"
              )}
            >
              Phase {pNum}
            </button>
          ))}
        </div>

        {/* Level Filter */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-bold text-brand-navy-600 mr-1">Level:</span>
          {["all", "A1", "A2", "B1", "B2", "C1"].map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={cn(
                "rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors",
                selectedLevel === lvl
                  ? "bg-brand-navy-800 text-white"
                  : "bg-brand-cream text-brand-navy-700 hover:bg-brand-navy/10"
              )}
            >
              {lvl.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Curriculum Grid grouped by Phases */}
      <div className="space-y-8">
        {phases90
          .filter((phase) => selectedPhase === "all" || phase.number === selectedPhase)
          .map((phase) => {
            const phaseLessons = filteredLessons.filter((l) => l.phase === phase.number);
            if (phaseLessons.length === 0) return null;

            const phaseDoneCount = phaseLessons.filter((l) => completedDays.includes(l.day)).length;

            return (
              <Reveal key={phase.number} as="section" className="space-y-4">
                {/* Phase Header Card */}
                <div className="rounded-2xl border border-brand-navy-800/10 bg-brand-surface p-5 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-navy-800 text-base font-extrabold text-brand-mint-100">
                        {toBanglaDigits(phase.number)}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-brand-mint-700">
                            {phase.titleEn}
                          </span>
                          <span
                            className={cn(
                              "rounded-full px-2 py-0.5 text-[0.65rem] font-bold border",
                              LEVEL_COLORS[phase.level]?.bg,
                              LEVEL_COLORS[phase.level]?.text,
                              LEVEL_COLORS[phase.level]?.border
                            )}
                          >
                            {phase.level} Level
                          </span>
                        </div>
                        <h2 className="font-bangla mt-0.5 text-lg font-bold text-brand-navy-900 sm:text-xl">
                          ধাপ {toBanglaDigits(phase.number)}: {phase.titleBn}
                        </h2>
                        <p className="font-bangla mt-1 max-w-2xl text-xs leading-5 text-brand-navy-600">
                          {phase.descriptionBn}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-bangla text-xs font-bold text-brand-navy-700">
                        {toBanglaDigits(phaseDoneCount)} / {toBanglaDigits(phaseLessons.length)} সম্পন্ন
                      </span>
                      <Badge variant={phaseDoneCount === phaseLessons.length ? "mint" : "neutral"}>
                        দিন {toBanglaDigits(phase.startDay)}–{toBanglaDigits(phase.endDay)}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Day Cards Grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {phaseLessons.map((lesson) => {
                    const isDone = completedDays.includes(lesson.day);
                    const lvlStyle = LEVEL_COLORS[lesson.level] ?? LEVEL_COLORS.A1;

                    return (
                      <div
                        key={lesson.day}
                        className={cn(
                          "group relative flex flex-col justify-between rounded-2xl border p-4 transition-all hover:shadow-cardHover",
                          isDone
                            ? "border-brand-mint-200 bg-brand-mint-100/40"
                            : "border-brand-navy-800/10 bg-white"
                        )}
                      >
                        <div>
                          {/* Card Top Row */}
                          <div className="flex items-center justify-between gap-2">
                            <span
                              className={cn(
                                "font-bangla text-xs font-extrabold",
                                isDone ? "text-brand-mint-700" : "text-brand-navy-700"
                              )}
                            >
                              দিন {toBanglaDigits(lesson.day)}
                            </span>

                            <div className="flex items-center gap-1.5">
                              <span
                                className={cn(
                                  "rounded px-1.5 py-0.5 text-[0.65rem] font-bold border",
                                  lvlStyle.bg,
                                  lvlStyle.text,
                                  lvlStyle.border
                                )}
                              >
                                {lesson.level}
                              </span>

                              <button
                                type="button"
                                onClick={() => toggleDayCompletion(lesson.day)}
                                title={isDone ? "Mark as uncompleted" : "Mark as completed"}
                                className="text-brand-navy-600 transition-transform hover:scale-110"
                              >
                                {isDone ? (
                                  <CheckCircle2 className="h-5 w-5 text-brand-mint" />
                                ) : (
                                  <Circle className="h-5 w-5 text-brand-navy-600/30 hover:text-brand-mint" />
                                )}
                              </button>
                            </div>
                          </div>

                          {/* Titles */}
                          <h3 className="font-bangla mt-2 text-sm font-bold leading-snug text-brand-navy-900 group-hover:text-brand-mint-700">
                            {lesson.titleBn}
                          </h3>
                          <p className="mt-0.5 text-xs font-medium text-brand-navy-600 truncate">
                            {lesson.titleEn}
                          </p>

                          {/* Focus chip */}
                          <div className="mt-3 rounded-lg bg-brand-cream/80 p-2 text-[0.72rem] leading-snug text-brand-navy-800">
                            <span className="font-bold text-brand-mint-700">ফোকাস: </span>
                            {lesson.grammarFocus}
                          </div>

                          {/* Real-world tag */}
                          <p className="font-bangla mt-2 flex items-center gap-1 text-[0.7rem] text-brand-navy-600">
                            <GraduationCap className="h-3 w-3 shrink-0 text-brand-mint-600" />
                            {lesson.realWorldUse}
                          </p>
                        </div>

                        {/* Card Footer Button */}
                        <div className="mt-4 flex items-center justify-between border-t border-brand-navy-800/10 pt-3">
                          <span className="flex items-center gap-1 text-[0.68rem] font-semibold text-brand-navy-600">
                            <Clock className="h-3 w-3" />
                            {toBanglaDigits(lesson.durationMinutes)} মিনিট
                          </span>

                          <button
                            type="button"
                            onClick={() => setActiveModalLesson(lesson)}
                            className="inline-flex items-center gap-1 rounded-lg bg-brand-navy-800 px-2.5 py-1 text-xs font-semibold text-white transition-colors hover:bg-brand-mint"
                          >
                            <span>মিশন ও বিবরণ</span>
                            <ChevronRight className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            );
          })}
      </div>

      {/* Lesson Details Modal */}
      {activeModalLesson && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-navy-900/60 p-4 backdrop-blur-sm"
        >
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-brand-navy-800/10 bg-white p-6 shadow-pop sm:p-8">
            <button
              onClick={() => setActiveModalLesson(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-cream text-brand-navy-700 hover:bg-brand-navy/10"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="mint">দিন {toBanglaDigits(activeModalLesson.day)}</Badge>
              <Badge variant="navy">{activeModalLesson.levelNameBn}</Badge>
              <Badge variant="amber">
                <Clock className="h-3 w-3" /> {toBanglaDigits(activeModalLesson.durationMinutes)} মিনিট
              </Badge>
            </div>

            <h2 className="font-bangla mt-3 text-2xl font-bold text-brand-navy-900">
              {activeModalLesson.titleBn}
            </h2>
            <p className="mt-0.5 text-sm font-semibold text-brand-mint-700">
              {activeModalLesson.titleEn}
            </p>

            <div className="mt-6 space-y-5">
              {/* Grammar Formula */}
              <div className="rounded-2xl border border-brand-mint-200 bg-brand-mint-100/50 p-4">
                <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-mint-800">
                  <BookOpen className="h-4 w-4" /> ব্যাকরণগত সূত্র ও কাঠামো
                </p>
                <p className="mt-1.5 font-sans text-sm font-bold text-brand-navy-900">
                  {activeModalLesson.grammarFocus}
                </p>
              </div>

              {/* Bangla Pro-Tip */}
              <div className="rounded-2xl border border-brand-amber-200 bg-brand-amber-100/40 p-4">
                <p className="font-bangla flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-amber-800">
                  <Sparkles className="h-4 w-4" /> বাংলাভাষীদের জন্য বিশেষ টিপ
                </p>
                <p className="font-bangla mt-1.5 text-sm leading-6 text-brand-navy-800">
                  {activeModalLesson.banglaTip}
                </p>
              </div>

              {/* Speaking Mission */}
              <div className="rounded-2xl border border-brand-blue-200 bg-brand-blue-100/40 p-4">
                <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue-800">
                  <Volume2 className="h-4 w-4" /> আজকের স্পোকেন মিশন (জোরে বলুন)
                </p>
                <p className="font-bangla mt-1.5 text-sm leading-6 text-brand-navy-900">
                  {activeModalLesson.speakingMission}
                </p>
              </div>

              {/* Vocab Keywords */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-navy-700 mb-2">
                  গুরুত্বপূর্ণ শব্দভান্ডার (Key Vocabulary)
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {activeModalLesson.vocabKeywords.map((v) => (
                    <div
                      key={v.word}
                      className="rounded-xl border border-brand-navy-800/10 bg-brand-cream/60 p-3"
                    >
                      <span className="font-bold text-brand-navy-900 text-sm">{v.word}</span>
                      <p className="font-bangla text-xs text-brand-navy-600 mt-0.5">
                        {v.meaningBn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real World Use */}
              <div className="rounded-xl bg-brand-cream p-3 text-xs text-brand-navy-700 font-bangla">
                <strong>ব্যবহারিক ক্ষেত্র: </strong> {activeModalLesson.realWorldUse}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 flex items-center justify-between border-t border-brand-navy-800/10 pt-4">
              <button
                type="button"
                onClick={() => {
                  toggleDayCompletion(activeModalLesson.day);
                }}
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all",
                  completedDays.includes(activeModalLesson.day)
                    ? "bg-brand-mint text-white"
                    : "border border-brand-mint text-brand-mint-700 hover:bg-brand-mint-100"
                )}
              >
                <CheckCircle2 className="h-4 w-4" />
                {completedDays.includes(activeModalLesson.day)
                  ? "সম্পন্ন হিসেবে চিহ্নিত"
                  : "সম্পন্ন হিসেবে টিক দিন"}
              </button>

              <button
                type="button"
                onClick={() => setActiveModalLesson(null)}
                className="rounded-xl bg-brand-navy-800 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-navy-900"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
