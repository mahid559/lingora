"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Volume2,
  PenTool,
  Headphones,
  Calculator,
  Search,
  CheckCircle2,
  Circle,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Bookmark,
  Check,
  ChevronDown,
  Compass,
  Calendar,
  Clock,
  X,
  ChevronRight,
  Filter,
} from "lucide-react";
import { TrackNav } from "@/components/roadmap/track-nav";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Reveal } from "@/components/motion/reveal";
import {
  ieltsOverview,
  ieltsSpeakingTopics,
  ieltsWritingTopics,
  ieltsReadingTopics,
  ieltsListeningTopics,
  ieltsVocabBank,
  ieltsQuizItems,
  ieltsStudyPlans,
} from "@/data/ielts";
import {
  ielts60Phases,
  ielts60Lessons,
  ielts90Phases,
  ielts90Lessons,
  type IeltsLessonDay,
  type IeltsCoursePhase,
} from "@/data/ielts-courses";
import { toBanglaDigits } from "@/lib/dates";
import { cn } from "@/lib/utils";

type IeltsTab =
  | "ielts-60"
  | "ielts-90"
  | "overview"
  | "speaking"
  | "writing"
  | "reading"
  | "listening"
  | "calculator"
  | "vocab"
  | "quiz";

export function IeltsView() {
  const searchParams = useSearchParams();
  const trackParam = searchParams.get("track");

  const [activeTab, setActiveTab] = React.useState<IeltsTab>(() => {
    if (trackParam === "60") return "ielts-60";
    if (trackParam === "90") return "ielts-90";
    return "ielts-60";
  });

  // Keep in sync with url param changes
  React.useEffect(() => {
    if (trackParam === "60") setActiveTab("ielts-60");
    else if (trackParam === "90") setActiveTab("ielts-90");
  }, [trackParam]);

  // Persisted completion trackers for IELTS 60 & 90
  const [completedIelts60, setCompletedIelts60] = React.useState<number[]>([]);
  const [completedIelts90, setCompletedIelts90] = React.useState<number[]>([]);
  const [activeIeltsModalLesson, setActiveIeltsModalLesson] = React.useState<IeltsLessonDay | null>(null);

  // Filters for roadmap views
  const [selectedModuleFilter, setSelectedModuleFilter] = React.useState<string>("all");
  const [ieltsSearchQuery, setIeltsSearchQuery] = React.useState("");

  React.useEffect(() => {
    try {
      const s60 = localStorage.getItem("lingora_ielts_60_completed");
      if (s60) setCompletedIelts60(JSON.parse(s60));
      const s90 = localStorage.getItem("lingora_ielts_90_completed");
      if (s90) setCompletedIelts90(JSON.parse(s90));
    } catch {
      // ignore
    }
  }, []);

  const toggleIeltsDay = (day: number, track: "60-day" | "90-day") => {
    if (track === "60-day") {
      setCompletedIelts60((prev) => {
        const next = prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day];
        try {
          localStorage.setItem("lingora_ielts_60_completed", JSON.stringify(next));
        } catch {
          // ignore
        }
        return next;
      });
    } else {
      setCompletedIelts90((prev) => {
        const next = prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day];
        try {
          localStorage.setItem("lingora_ielts_90_completed", JSON.stringify(next));
        } catch {
          // ignore
        }
        return next;
      });
    }
  };

  // Calculator State
  const [testType, setTestType] = React.useState<"academic" | "general">("academic");
  const [listeningRaw, setListeningRaw] = React.useState<number>(32); // default 7.5
  const [readingRaw, setReadingRaw] = React.useState<number>(33); // default 7.5
  const [speakingBand, setSpeakingBand] = React.useState<number>(7.5);
  const [writingBand, setWritingBand] = React.useState<number>(7.0);

  // Vocab Bank State
  const [vocabSearch, setVocabSearch] = React.useState("");
  const [selectedVocabCategory, setSelectedVocabCategory] = React.useState<string>("all");

  // Quiz State
  const [quizAnswers, setQuizAnswers] = React.useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = React.useState<Record<string, boolean>>({});

  // Band conversion helper
  const rawToListeningBand = (raw: number): number => {
    if (raw >= 39) return 9.0;
    if (raw >= 37) return 8.5;
    if (raw >= 35) return 8.0;
    if (raw >= 32) return 7.5;
    if (raw >= 30) return 7.0;
    if (raw >= 26) return 6.5;
    if (raw >= 23) return 6.0;
    if (raw >= 18) return 5.5;
    if (raw >= 16) return 5.0;
    if (raw >= 13) return 4.5;
    if (raw >= 10) return 4.0;
    return 3.5;
  };

  const rawToReadingBand = (raw: number, type: "academic" | "general"): number => {
    if (type === "academic") {
      if (raw >= 39) return 9.0;
      if (raw >= 37) return 8.5;
      if (raw >= 35) return 8.0;
      if (raw >= 33) return 7.5;
      if (raw >= 30) return 7.0;
      if (raw >= 27) return 6.5;
      if (raw >= 23) return 6.0;
      if (raw >= 19) return 5.5;
      if (raw >= 15) return 5.0;
      if (raw >= 13) return 4.5;
      if (raw >= 10) return 4.0;
      return 3.5;
    } else {
      if (raw >= 40) return 9.0;
      if (raw >= 39) return 8.5;
      if (raw >= 37) return 8.0;
      if (raw >= 36) return 7.5;
      if (raw >= 34) return 7.0;
      if (raw >= 32) return 6.5;
      if (raw >= 30) return 6.0;
      if (raw >= 27) return 5.5;
      if (raw >= 23) return 5.0;
      if (raw >= 19) return 4.5;
      if (raw >= 15) return 4.0;
      return 3.5;
    }
  };

  const listeningBandCalc = rawToListeningBand(listeningRaw);
  const readingBandCalc = rawToReadingBand(readingRaw, testType);

  const rawAverage = (listeningBandCalc + readingBandCalc + speakingBand + writingBand) / 4;
  const calculateOverallBand = (avg: number): number => {
    const floor = Math.floor(avg);
    const decimal = avg - floor;
    if (decimal < 0.25) return floor;
    if (decimal < 0.75) return floor + 0.5;
    return floor + 1.0;
  };

  const overallBand = calculateOverallBand(rawAverage);

  const filteredVocab = ieltsVocabBank.filter((item) => {
    const matchesCat = selectedVocabCategory === "all" || item.topic === selectedVocabCategory;
    const matchesSearch =
      vocabSearch.trim() === "" ||
      item.word.toLowerCase().includes(vocabSearch.toLowerCase()) ||
      item.meaningBn.toLowerCase().includes(vocabSearch.toLowerCase()) ||
      item.synonyms.some((s) => s.toLowerCase().includes(vocabSearch.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleSelectQuizAnswer = (qId: string, optKey: string) => {
    setQuizAnswers((prev) => ({ ...prev, [qId]: optKey }));
    setQuizSubmitted((prev) => ({ ...prev, [qId]: true }));
  };

  // Helper to filter lessons for roadmaps
  const getFilteredIeltsLessons = (lessons: IeltsLessonDay[]) => {
    return lessons.filter((l) => {
      const matchMod = selectedModuleFilter === "all" || l.module === selectedModuleFilter;
      const matchSearch =
        ieltsSearchQuery.trim() === "" ||
        l.titleEn.toLowerCase().includes(ieltsSearchQuery.toLowerCase()) ||
        l.titleBn.toLowerCase().includes(ieltsSearchQuery.toLowerCase()) ||
        l.objectiveEn.toLowerCase().includes(ieltsSearchQuery.toLowerCase());
      return matchMod && matchSearch;
    });
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Track Navigator */}
      <TrackNav
        activeCourse={activeTab === "ielts-60" ? "ielts-60" : "ielts-90"}
      />

      {/* Hero Header */}
      <div className="rounded-3xl border border-brand-navy-800/10 bg-white p-6 shadow-card sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="amber" className="px-3 py-1 text-xs">
                <GraduationCap className="h-3.5 w-3.5" /> IELTS Preparation Pillar
              </Badge>
              <Badge variant="navy" className="text-xs">
                Academic & General Training
              </Badge>
              <Badge variant="mint" className="text-xs">
                60-Day & 90-Day Tracks Included
              </Badge>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-brand-navy-900 sm:text-4xl">
              IELTS Master Preparation Hub
            </h1>
            <p className="font-bangla text-sm leading-6 text-brand-navy-700 sm:text-base">
              বাংলাভাষী শিক্ষার্থীদের জন্য বিশেষভাবে তৈরি — ৬০ দিনের নিবিড় ও ৯০ দিনের মাস্টার রোডম্যাপ,
              স্পিকিং, রাইটিং, রিডিং ও লিসেনিংয়ের ব্যান্ড ৭.৫–৮.৫ কৌশল, ক্যালকুলেটর ও ভোকেব ব্যাংক।
            </p>
          </div>

          {/* Quick Band Calculator Preview Banner */}
          <div className="w-full shrink-0 rounded-2xl border border-brand-amber-200 bg-brand-amber-100/40 p-5 lg:w-72">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-amber-800">
                Predicted Band Score
              </span>
              <span className="rounded-full bg-brand-amber px-2 py-0.5 text-[0.65rem] font-bold text-white">
                Band Score
              </span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl font-black text-brand-navy-900">{overallBand.toFixed(1)}</span>
              <span className="text-xs font-bold text-brand-amber-800">
                {overallBand >= 8.0 ? "Very Good / Expert" : overallBand >= 7.0 ? "Good User" : "Competent"}
              </span>
            </div>
            <p className="mt-2 text-[0.7rem] font-medium text-brand-navy-600">
              L: {listeningBandCalc} · R: {readingBandCalc} · W: {writingBand} · S: {speakingBand}
            </p>
            <button
              onClick={() => setActiveTab("calculator")}
              className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl bg-brand-navy-800 py-2 text-xs font-bold text-white transition-colors hover:bg-brand-amber-600"
            >
              <Calculator className="h-3.5 w-3.5" /> Launch Band Calculator
            </button>
          </div>
        </div>

        {/* Tab Navigation Ribbon */}
        <div className="mt-8 flex flex-wrap gap-1.5 border-t border-brand-navy-800/10 pt-5">
          {[
            { id: "ielts-60", labelEn: "60-Day IELTS Roadmap", icon: Calendar, badge: "Band 7.0+" },
            { id: "ielts-90", labelEn: "90-Day IELTS Master", icon: Compass, badge: "Band 8.0+" },
            { id: "speaking", labelEn: "Speaking Masterclass", icon: Volume2 },
            { id: "writing", labelEn: "Writing Band 8+", icon: PenTool },
            { id: "reading", labelEn: "Reading Strategies", icon: BookOpen },
            { id: "listening", labelEn: "Listening Tactics", icon: Headphones },
            { id: "calculator", labelEn: "Band Calculator", icon: Calculator },
            { id: "vocab", labelEn: "IELTS Vocab Bank", icon: Bookmark },
            { id: "quiz", labelEn: "Practice Quiz", icon: HelpCircle },
            { id: "overview", labelEn: "Study Plans", icon: Clock },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as IeltsTab)}
                className={cn(
                  "flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-all",
                  isActive
                    ? "bg-brand-navy-800 text-white shadow-sm"
                    : "bg-brand-cream text-brand-navy-700 hover:bg-brand-navy/10 hover:text-brand-navy-900"
                )}
              >
                <Icon className={cn("h-3.5 w-3.5", isActive && "text-brand-mint-100")} />
                <span>{tab.labelEn}</span>
                {tab.badge && (
                  <span
                    className={cn(
                      "ml-1 rounded px-1.5 py-0.2 text-[0.6rem] font-bold uppercase",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-brand-navy/10 text-brand-navy-700"
                    )}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB: 60-DAY IELTS ROADMAP */}
      {activeTab === "ielts-60" && (
        <div className="space-y-6">
          {/* Header & Progress Banner */}
          <div className="flex flex-col gap-4 rounded-3xl border border-brand-amber-200 bg-brand-amber-100/30 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-amber-800">
                Pillar 2 · Course Track A
              </span>
              <h2 className="text-2xl font-black text-brand-navy-900">
                60-Day IELTS Intensive Roadmap (Target Band 7.0 – 7.5)
              </h2>
              <p className="font-bangla mt-1 max-w-2xl text-xs text-brand-navy-700">
                ৬০ দিনের সুনির্দিষ্ট পাঠ্যক্রম — প্রতিটি দিনে লিসেনিং, রিডিং, রাইটিং ও স্পিকিংয়ের
                বাস্তব প্র্যাকটিস ড্রিল, ক্যামব্রিজ রেফারেন্স এবং বাংলা ট্র্যাপস গাইড।
              </p>
            </div>
            <div className="shrink-0 rounded-2xl bg-white p-4 border border-brand-navy-800/10 sm:w-60">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-brand-navy-700">Progress</span>
                <span className="text-brand-amber-600">
                  {Math.round((completedIelts60.length / 60) * 100)}%
                </span>
              </div>
              <Progress value={completedIelts60.length} max={60} className="mt-2 h-2" />
              <p className="mt-1.5 text-[0.7rem] text-brand-navy-600 font-semibold">
                {completedIelts60.length} of 60 days completed
              </p>
            </div>
          </div>

          {/* Module Filter & Search Bar */}
          <div className="flex flex-col gap-3 rounded-2xl border border-brand-navy-800/10 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-navy-600/60" />
              <input
                type="text"
                placeholder="Search day title, question type, or keyword..."
                value={ieltsSearchQuery}
                onChange={(e) => setIeltsSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-brand-navy-800/10 bg-brand-cream/50 py-2 pl-10 pr-4 text-xs font-medium focus:border-brand-mint focus:bg-white focus:outline-none"
              />
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-bold text-brand-navy-600 mr-1">Module:</span>
              {["all", "Listening", "Reading", "Writing", "Speaking", "Full Mock"].map((mod) => (
                <button
                  key={mod}
                  onClick={() => setSelectedModuleFilter(mod)}
                  className={cn(
                    "rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors",
                    selectedModuleFilter === mod
                      ? "bg-brand-navy-800 text-white"
                      : "bg-brand-cream text-brand-navy-700 hover:bg-brand-navy/10"
                  )}
                >
                  {mod}
                </button>
              ))}
            </div>
          </div>

          {/* Render Phases & Days */}
          <div className="space-y-8">
            {ielts60Phases.map((phase) => {
              const phaseLessons = getFilteredIeltsLessons(ielts60Lessons).filter(
                (l) => l.phase === phase.number
              );
              if (phaseLessons.length === 0) return null;

              return (
                <div key={phase.number} className="space-y-4">
                  <div className="rounded-2xl border border-brand-navy-800/10 bg-brand-surface p-5 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-amber-600">
                          Phase {phase.number} · Days {phase.startDay}–{phase.endDay}
                        </span>
                        <h3 className="text-xl font-bold text-brand-navy-900">
                          {phase.titleEn}
                        </h3>
                        <p className="font-bangla mt-0.5 text-xs text-brand-navy-600">
                          {phase.descriptionBn}
                        </p>
                      </div>
                      <Badge variant="amber">Target: Band 7.0+</Badge>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {phaseLessons.map((lesson) => {
                      const isDone = completedIelts60.includes(lesson.day);
                      return (
                        <div
                          key={lesson.day}
                          className={cn(
                            "group flex flex-col justify-between rounded-2xl border p-4 transition-all hover:shadow-cardHover",
                            isDone
                              ? "border-brand-mint-200 bg-brand-mint-100/40"
                              : "border-brand-navy-800/10 bg-white"
                          )}
                        >
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-extrabold text-brand-navy-700">
                                Day {lesson.day}
                              </span>
                              <div className="flex items-center gap-1.5">
                                <span className="rounded bg-brand-navy/5 px-1.5 py-0.5 text-[0.65rem] font-bold text-brand-navy-800">
                                  {lesson.module}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => toggleIeltsDay(lesson.day, "60-day")}
                                  className="text-brand-navy-600 hover:scale-110 transition-transform"
                                >
                                  {isDone ? (
                                    <CheckCircle2 className="h-5 w-5 text-brand-mint" />
                                  ) : (
                                    <Circle className="h-5 w-5 text-brand-navy-600/30 hover:text-brand-mint" />
                                  )}
                                </button>
                              </div>
                            </div>

                            <h4 className="mt-2 text-sm font-bold text-brand-navy-900 group-hover:text-brand-mint-700">
                              {lesson.titleEn}
                            </h4>
                            <p className="font-bangla mt-1 text-xs text-brand-navy-600 line-clamp-2">
                              {lesson.titleBn}
                            </p>
                          </div>

                          <div className="mt-4 flex items-center justify-between border-t border-brand-navy-800/10 pt-3">
                            <span className="text-[0.68rem] font-semibold text-brand-navy-600">
                              {lesson.durationMinutes} mins · {lesson.targetBand}
                            </span>
                            <button
                              type="button"
                              onClick={() => setActiveIeltsModalLesson(lesson)}
                              className="inline-flex items-center gap-1 rounded-lg bg-brand-navy-800 px-2.5 py-1 text-xs font-semibold text-white transition-colors hover:bg-brand-mint"
                            >
                              <span>View Blueprint</span>
                              <ChevronRight className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB: 90-DAY IELTS ROADMAP */}
      {activeTab === "ielts-90" && (
        <div className="space-y-6">
          {/* Header & Progress Banner */}
          <div className="flex flex-col gap-4 rounded-3xl border border-brand-navy-800/10 bg-brand-navy-900 text-white p-6 sm:flex-row sm:items-center sm:justify-between shadow-card">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-mint-100">
                Pillar 2 · Course Track B
              </span>
              <h2 className="text-2xl font-black text-white">
                90-Day IELTS Master Blueprint (Target Band 8.0 – 8.5+)
              </h2>
              <p className="font-bangla mt-1 max-w-2xl text-xs text-brand-mint-100/80">
                ৯০ দিনের চূড়ান্ত মাস্টার সিলেবাস — অ্যাডভান্সড ইনভার্সন, হেজিং, সেকশন ৪ জটিল লেকচার,
                ব্যান্ড ৯ এসে আর্গুমেন্টেশন ও স্পিকিং পার্ট ৩ বিমূর্ত যুক্তিতর্ক।
              </p>
            </div>
            <div className="shrink-0 rounded-2xl bg-white/10 backdrop-blur p-4 border border-white/10 sm:w-60">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-brand-mint-100">Progress</span>
                <span className="text-brand-mint">
                  {Math.round((completedIelts90.length / 90) * 100)}%
                </span>
              </div>
              <Progress value={completedIelts90.length} max={90} className="mt-2 h-2" />
              <p className="mt-1.5 text-[0.7rem] text-brand-mint-100/70 font-semibold">
                {completedIelts90.length} of 90 days completed
              </p>
            </div>
          </div>

          {/* Module Filter & Search Bar */}
          <div className="flex flex-col gap-3 rounded-2xl border border-brand-navy-800/10 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-navy-600/60" />
              <input
                type="text"
                placeholder="Search 90-day topics, cue cards, writing questions..."
                value={ieltsSearchQuery}
                onChange={(e) => setIeltsSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-brand-navy-800/10 bg-brand-cream/50 py-2 pl-10 pr-4 text-xs font-medium focus:border-brand-mint focus:bg-white focus:outline-none"
              />
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-bold text-brand-navy-600 mr-1">Module:</span>
              {["all", "Listening", "Reading", "Writing", "Speaking", "Full Mock"].map((mod) => (
                <button
                  key={mod}
                  onClick={() => setSelectedModuleFilter(mod)}
                  className={cn(
                    "rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors",
                    selectedModuleFilter === mod
                      ? "bg-brand-navy-800 text-white"
                      : "bg-brand-cream text-brand-navy-700 hover:bg-brand-navy/10"
                  )}
                >
                  {mod}
                </button>
              ))}
            </div>
          </div>

          {/* Render 90-Day Phases */}
          <div className="space-y-8">
            {ielts90Phases.map((phase) => {
              const phaseLessons = getFilteredIeltsLessons(ielts90Lessons).filter(
                (l) => l.phase === phase.number
              );
              if (phaseLessons.length === 0) return null;

              return (
                <div key={phase.number} className="space-y-4">
                  <div className="rounded-2xl border border-brand-navy-800/10 bg-brand-surface p-5 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-600">
                          Phase {phase.number} · Days {phase.startDay}–{phase.endDay}
                        </span>
                        <h3 className="text-xl font-bold text-brand-navy-900">
                          {phase.titleEn}
                        </h3>
                        <p className="font-bangla mt-0.5 text-xs text-brand-navy-600">
                          {phase.descriptionBn}
                        </p>
                      </div>
                      <Badge variant="blue">Target: Band 8.0 – 8.5+</Badge>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {phaseLessons.map((lesson) => {
                      const isDone = completedIelts90.includes(lesson.day);
                      return (
                        <div
                          key={lesson.day}
                          className={cn(
                            "group flex flex-col justify-between rounded-2xl border p-4 transition-all hover:shadow-cardHover",
                            isDone
                              ? "border-brand-mint-200 bg-brand-mint-100/40"
                              : "border-brand-navy-800/10 bg-white"
                          )}
                        >
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-extrabold text-brand-navy-700">
                                Day {lesson.day}
                              </span>
                              <div className="flex items-center gap-1.5">
                                <span className="rounded bg-brand-blue-100 px-1.5 py-0.5 text-[0.65rem] font-bold text-brand-blue-600">
                                  {lesson.module}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => toggleIeltsDay(lesson.day, "90-day")}
                                  className="text-brand-navy-600 hover:scale-110 transition-transform"
                                >
                                  {isDone ? (
                                    <CheckCircle2 className="h-5 w-5 text-brand-mint" />
                                  ) : (
                                    <Circle className="h-5 w-5 text-brand-navy-600/30 hover:text-brand-mint" />
                                  )}
                                </button>
                              </div>
                            </div>

                            <h4 className="mt-2 text-sm font-bold text-brand-navy-900 group-hover:text-brand-blue-600">
                              {lesson.titleEn}
                            </h4>
                            <p className="font-bangla mt-1 text-xs text-brand-navy-600 line-clamp-2">
                              {lesson.titleBn}
                            </p>
                          </div>

                          <div className="mt-4 flex items-center justify-between border-t border-brand-navy-800/10 pt-3">
                            <span className="text-[0.68rem] font-semibold text-brand-navy-600">
                              {lesson.durationMinutes} mins · {lesson.targetBand}
                            </span>
                            <button
                              type="button"
                              onClick={() => setActiveIeltsModalLesson(lesson)}
                              className="inline-flex items-center gap-1 rounded-lg bg-brand-navy-800 px-2.5 py-1 text-xs font-semibold text-white transition-colors hover:bg-brand-blue-600"
                            >
                              <span>View Blueprint</span>
                              <ChevronRight className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* MODAL: DAILY IELTS BLUEPRINT DETAILS */}
      {activeIeltsModalLesson && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-navy-900/60 p-4 backdrop-blur-sm"
        >
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-brand-navy-800/10 bg-white p-6 shadow-pop sm:p-8">
            <button
              onClick={() => setActiveIeltsModalLesson(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-cream text-brand-navy-700 hover:bg-brand-navy/10"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="mint">Day {activeIeltsModalLesson.day}</Badge>
              <Badge variant="navy">{activeIeltsModalLesson.module} Module</Badge>
              <Badge variant="amber">Target {activeIeltsModalLesson.targetBand}</Badge>
            </div>

            <h3 className="mt-3 text-2xl font-bold text-brand-navy-900">
              {activeIeltsModalLesson.titleEn}
            </h3>
            <p className="font-bangla mt-0.5 text-sm font-semibold text-brand-mint-700">
              {activeIeltsModalLesson.titleBn}
            </p>

            <div className="mt-6 space-y-5">
              {/* Objective */}
              <div className="rounded-2xl border border-brand-navy-800/10 bg-brand-cream/60 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-navy-700">
                  Target Objective
                </p>
                <p className="mt-1 text-sm font-medium text-brand-navy-900">
                  {activeIeltsModalLesson.objectiveEn}
                </p>
              </div>

              {/* Bangla Explanation */}
              <div className="rounded-2xl border border-brand-mint-200 bg-brand-mint-100/40 p-4">
                <p className="font-bangla text-xs font-bold uppercase tracking-wider text-brand-mint-800">
                  বাংলায় বিস্তারিত গাইড ও মেকানিক্স
                </p>
                <p className="font-bangla mt-1 text-sm leading-6 text-brand-navy-900">
                  {activeIeltsModalLesson.banglaExplanation}
                </p>
              </div>

              {/* Daily Tasks */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-navy-700 mb-2">
                  Daily Step-by-Step Missions
                </p>
                <ul className="space-y-2">
                  {activeIeltsModalLesson.dailyTasks.map((t, idx) => (
                    <li
                      key={idx}
                      className="font-bangla flex items-start gap-2.5 rounded-xl border border-brand-navy-800/10 bg-white p-3 text-xs leading-5 text-brand-navy-800"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-mint" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pro Tip */}
              <div className="rounded-2xl border border-brand-amber-200 bg-brand-amber-100/40 p-4">
                <p className="font-bangla text-xs font-bold uppercase tracking-wider text-brand-amber-800">
                  পরীক্ষার্থীদের জন্য গোল্ডেন টিপ
                </p>
                <p className="font-bangla mt-1 text-sm leading-6 text-brand-navy-800">
                  {activeIeltsModalLesson.proTipBn}
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-brand-navy-800/10 pt-4">
              <button
                type="button"
                onClick={() => {
                  toggleIeltsDay(activeIeltsModalLesson.day, activeIeltsModalLesson.track);
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-mint px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-brand-mint-600"
              >
                <CheckCircle2 className="h-4 w-4" />
                <span>
                  {(activeIeltsModalLesson.track === "60-day"
                    ? completedIelts60.includes(activeIeltsModalLesson.day)
                    : completedIelts90.includes(activeIeltsModalLesson.day))
                    ? "Marked as Completed"
                    : "Mark Day as Done"}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setActiveIeltsModalLesson(null)}
                className="rounded-xl bg-brand-navy-800 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-navy-900"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB: SPEAKING MASTERCLASS */}
      {activeTab === "speaking" && (
        <div className="space-y-6">
          {ieltsSpeakingTopics.map((topic) => (
            <div
              key={topic.id}
              className="rounded-3xl border border-brand-navy-800/10 bg-white p-6 shadow-card sm:p-8"
            >
              <Badge variant="mint" className="text-xs mb-1">
                {topic.badge}
              </Badge>
              <h3 className="text-xl font-bold text-brand-navy-900 sm:text-2xl">
                {topic.titleEn}
              </h3>
              <p className="font-bangla text-xs font-semibold text-brand-mint-700">{topic.titleBn}</p>
              <p className="font-bangla mt-3 text-sm leading-6 text-brand-navy-700">
                {topic.summaryBn}
              </p>

              <div className="mt-6 space-y-5">
                {topic.details.map((d, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-brand-navy-800/10 bg-brand-cream/50 p-5"
                  >
                    <h4 className="font-bangla text-base font-bold text-brand-navy-900">
                      {d.heading}
                    </h4>
                    <p className="font-bangla mt-1 text-xs leading-5 text-brand-navy-700">
                      {d.contentBn}
                    </p>

                    {d.rules && (
                      <ul className="mt-3 space-y-1.5 border-t border-brand-navy-800/10 pt-3">
                        {d.rules.map((rule, rIdx) => (
                          <li
                            key={rIdx}
                            className="font-bangla flex items-start gap-2 text-xs font-medium text-brand-navy-800"
                          >
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-mint text-[0.6rem] text-white">
                              ✓
                            </span>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {d.examples && (
                      <div className="mt-4 space-y-3">
                        {d.examples.map((ex, eIdx) => (
                          <div
                            key={eIdx}
                            className="rounded-xl border border-brand-mint-200 bg-white p-4"
                          >
                            <div className="whitespace-pre-line font-sans text-xs font-bold leading-5 text-brand-navy-900">
                              {ex.en}
                            </div>
                            <div className="font-bangla mt-2 whitespace-pre-line text-xs leading-5 text-brand-navy-700 border-t border-brand-navy-800/10 pt-2">
                              {ex.bn}
                            </div>
                            {ex.note && (
                              <p className="font-bangla mt-2 text-[0.7rem] font-semibold text-brand-mint-700">
                                💡 Note: {ex.note}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB: WRITING BAND 8+ */}
      {activeTab === "writing" && (
        <div className="space-y-6">
          {ieltsWritingTopics.map((topic) => (
            <div
              key={topic.id}
              className="rounded-3xl border border-brand-navy-800/10 bg-white p-6 shadow-card sm:p-8"
            >
              <Badge variant="blue" className="text-xs mb-1">
                {topic.badge}
              </Badge>
              <h3 className="text-xl font-bold text-brand-navy-900 sm:text-2xl">
                {topic.titleEn}
              </h3>
              <p className="font-bangla text-xs font-semibold text-brand-blue-600">{topic.titleBn}</p>
              <p className="font-bangla mt-3 text-sm leading-6 text-brand-navy-700">
                {topic.summaryBn}
              </p>

              <div className="mt-6 space-y-5">
                {topic.details.map((d, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-brand-navy-800/10 bg-brand-cream/50 p-5"
                  >
                    <h4 className="font-bangla text-base font-bold text-brand-navy-900">
                      {d.heading}
                    </h4>
                    <p className="font-bangla mt-1 text-xs leading-5 text-brand-navy-700">
                      {d.contentBn}
                    </p>

                    {d.rules && (
                      <ul className="mt-3 space-y-1.5 border-t border-brand-navy-800/10 pt-3">
                        {d.rules.map((rule, rIdx) => (
                          <li
                            key={rIdx}
                            className="font-bangla flex items-start gap-2 text-xs font-medium text-brand-navy-800"
                          >
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-blue-600 text-[0.6rem] text-white">
                              {rIdx + 1}
                            </span>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {d.examples && (
                      <div className="mt-4 space-y-3">
                        {d.examples.map((ex, eIdx) => (
                          <div
                            key={eIdx}
                            className="rounded-xl border border-brand-blue-200 bg-white p-4"
                          >
                            <div className="whitespace-pre-line font-sans text-xs font-bold leading-5 text-brand-navy-900">
                              {ex.en}
                            </div>
                            <div className="font-bangla mt-2 whitespace-pre-line text-xs leading-5 text-brand-navy-700 border-t border-brand-navy-800/10 pt-2">
                              {ex.bn}
                            </div>
                            {ex.note && (
                              <p className="font-bangla mt-2 text-[0.7rem] font-semibold text-brand-blue-600">
                                💡 {ex.note}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB: READING STRATEGIES */}
      {activeTab === "reading" && (
        <div className="space-y-6">
          {ieltsReadingTopics.map((topic) => (
            <div
              key={topic.id}
              className="rounded-3xl border border-brand-navy-800/10 bg-white p-6 shadow-card sm:p-8"
            >
              <Badge variant="amber" className="text-xs mb-1">
                {topic.badge}
              </Badge>
              <h3 className="text-xl font-bold text-brand-navy-900 sm:text-2xl">
                {topic.titleEn}
              </h3>
              <p className="font-bangla text-xs font-semibold text-brand-amber-600">{topic.titleBn}</p>
              <p className="font-bangla mt-3 text-sm leading-6 text-brand-navy-700">
                {topic.summaryBn}
              </p>

              <div className="mt-6 space-y-5">
                {topic.details.map((d, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-brand-navy-800/10 bg-brand-cream/50 p-5"
                  >
                    <h4 className="font-bangla text-base font-bold text-brand-navy-900">
                      {d.heading}
                    </h4>
                    <p className="font-bangla mt-1 text-xs leading-5 text-brand-navy-700">
                      {d.contentBn}
                    </p>

                    {d.rules && (
                      <ul className="mt-3 space-y-2 border-t border-brand-navy-800/10 pt-3">
                        {d.rules.map((rule, rIdx) => (
                          <li
                            key={rIdx}
                            className="font-bangla flex items-start gap-2 text-xs font-medium text-brand-navy-800"
                          >
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-amber text-[0.6rem] text-white">
                              ✓
                            </span>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB: LISTENING TACTICS */}
      {activeTab === "listening" && (
        <div className="space-y-6">
          {ieltsListeningTopics.map((topic) => (
            <div
              key={topic.id}
              className="rounded-3xl border border-brand-navy-800/10 bg-white p-6 shadow-card sm:p-8"
            >
              <Badge variant="navy" className="text-xs mb-1">
                {topic.badge}
              </Badge>
              <h3 className="text-xl font-bold text-brand-navy-900 sm:text-2xl">
                {topic.titleEn}
              </h3>
              <p className="font-bangla text-xs font-semibold text-brand-navy-600">{topic.titleBn}</p>
              <p className="font-bangla mt-3 text-sm leading-6 text-brand-navy-700">
                {topic.summaryBn}
              </p>

              <div className="mt-6 space-y-5">
                {topic.details.map((d, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-brand-navy-800/10 bg-brand-cream/50 p-5"
                  >
                    <h4 className="font-bangla text-base font-bold text-brand-navy-900">
                      {d.heading}
                    </h4>
                    <p className="font-bangla mt-1 text-xs leading-5 text-brand-navy-700">
                      {d.contentBn}
                    </p>

                    {d.rules && (
                      <ul className="mt-3 space-y-2 border-t border-brand-navy-800/10 pt-3">
                        {d.rules.map((rule, rIdx) => (
                          <li
                            key={rIdx}
                            className="font-bangla flex items-start gap-2 text-xs font-medium text-brand-navy-800"
                          >
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-navy-800 text-[0.6rem] text-white">
                              !
                            </span>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB: BAND SCORE CALCULATOR */}
      {activeTab === "calculator" && (
        <div className="rounded-3xl border border-brand-navy-800/10 bg-white p-6 shadow-card sm:p-8">
          <div className="max-w-2xl">
            <Badge variant="mint" className="text-xs mb-2">
              <Calculator className="h-3.5 w-3.5" /> Official IELTS Conversion Matrix
            </Badge>
            <h3 className="text-2xl font-bold text-brand-navy-900 sm:text-3xl">
              IELTS Band Score Calculator
            </h3>
            <p className="mt-1.5 text-xs text-brand-navy-600 sm:text-sm">
              Input your raw scores for Listening and Reading (0–40) alongside Speaking and Writing bands.
              The calculator computes your overall band score using official IELTS rounding rules.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <span className="text-xs font-bold text-brand-navy-700">Test Stream:</span>
            <div className="flex rounded-xl bg-brand-cream p-1 border border-brand-navy-800/10">
              <button
                type="button"
                onClick={() => setTestType("academic")}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-xs font-bold transition-all",
                  testType === "academic"
                    ? "bg-brand-navy-800 text-white"
                    : "text-brand-navy-700 hover:text-brand-navy-900"
                )}
              >
                Academic
              </button>
              <button
                type="button"
                onClick={() => setTestType("general")}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-xs font-bold transition-all",
                  testType === "general"
                    ? "bg-brand-navy-800 text-white"
                    : "text-brand-navy-700 hover:text-brand-navy-900"
                )}
              >
                General Training
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="space-y-6 rounded-2xl border border-brand-navy-800/10 bg-brand-cream/50 p-6">
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-brand-navy-900">
                    Listening Score (0 – 40)
                  </label>
                  <span className="rounded-lg bg-brand-mint-100 px-2 py-0.5 text-xs font-black text-brand-mint-800">
                    {listeningRaw} / 40 (Band {listeningBandCalc.toFixed(1)})
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={listeningRaw}
                  onChange={(e) => setListeningRaw(Number(e.target.value))}
                  className="mt-2.5 w-full accent-brand-mint cursor-pointer"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-brand-navy-900">
                    Reading Score (0 – 40) [{testType.toUpperCase()}]
                  </label>
                  <span className="rounded-lg bg-brand-blue-100 px-2 py-0.5 text-xs font-black text-brand-blue-600">
                    {readingRaw} / 40 (Band {readingBandCalc.toFixed(1)})
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={readingRaw}
                  onChange={(e) => setReadingRaw(Number(e.target.value))}
                  className="mt-2.5 w-full accent-brand-blue cursor-pointer"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-brand-navy-900">Writing Band (1.0 – 9.0)</label>
                  <span className="rounded-lg bg-brand-navy-800 px-2 py-0.5 text-xs font-black text-white">
                    Band {writingBand.toFixed(1)}
                  </span>
                </div>
                <input
                  type="range"
                  min="4.0"
                  max="9.0"
                  step="0.5"
                  value={writingBand}
                  onChange={(e) => setWritingBand(Number(e.target.value))}
                  className="mt-2.5 w-full accent-brand-navy-800 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-brand-navy-900">Speaking Band (1.0 – 9.0)</label>
                  <span className="rounded-lg bg-brand-amber-100 px-2 py-0.5 text-xs font-black text-brand-amber-600">
                    Band {speakingBand.toFixed(1)}
                  </span>
                </div>
                <input
                  type="range"
                  min="4.0"
                  max="9.0"
                  step="0.5"
                  value={speakingBand}
                  onChange={(e) => setSpeakingBand(Number(e.target.value))}
                  className="mt-2.5 w-full accent-brand-amber cursor-pointer"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-brand-mint bg-brand-mint-100/30 p-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-mint-800">
                  Calculated Overall Result
                </p>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-6xl font-black text-brand-navy-900 tracking-tight">
                    {overallBand.toFixed(1)}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-brand-mint-800">
                      {overallBand >= 8.5
                        ? "Very Good / Expert User"
                        : overallBand >= 7.5
                        ? "Good to Very Good User"
                        : overallBand >= 6.5
                        ? "Competent User"
                        : "Modest User"}
                    </span>
                    <span className="text-xs text-brand-navy-600">
                      Exact raw average: {rawAverage.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white p-3 border border-brand-navy-800/10">
                    <p className="text-xs text-brand-navy-600">Listening</p>
                    <p className="text-xl font-extrabold text-brand-navy-900">Band {listeningBandCalc.toFixed(1)}</p>
                  </div>
                  <div className="rounded-xl bg-white p-3 border border-brand-navy-800/10">
                    <p className="text-xs text-brand-navy-600">Reading</p>
                    <p className="text-xl font-extrabold text-brand-navy-900">Band {readingBandCalc.toFixed(1)}</p>
                  </div>
                  <div className="rounded-xl bg-white p-3 border border-brand-navy-800/10">
                    <p className="text-xs text-brand-navy-600">Writing</p>
                    <p className="text-xl font-extrabold text-brand-navy-900">Band {writingBand.toFixed(1)}</p>
                  </div>
                  <div className="rounded-xl bg-white p-3 border border-brand-navy-800/10">
                    <p className="text-xs text-brand-navy-600">Speaking</p>
                    <p className="text-xl font-extrabold text-brand-navy-900">Band {speakingBand.toFixed(1)}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-white/80 p-4 border border-brand-mint-200 font-bangla text-xs leading-5 text-brand-navy-700">
                📌 <strong>অফিসিয়াল রাউন্ডিং নিয়ম:</strong> চারটির গড় .২৫ বা তদূর্ধ্ব হলে (যেমন ৬.২৫) স্বয়ংক্রিয়ভাবে ৬.৫ হয়ে যায়। যদি .৭৫ বা তদূর্ধ্ব হয় (যেমন ৬.৭৫), তবে পরবর্তী পূর্ণ সংখ্যা ৭.০ হয়ে যায়।
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB: VOCABULARY BANK */}
      {activeTab === "vocab" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-brand-navy-800/10 bg-white p-6 shadow-card sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-mint-700">
                  Band 7.5 – 9.0 Academic Collocations
                </p>
                <h3 className="text-2xl font-bold text-brand-navy-900">
                  High-Frequency IELTS Vocabulary Bank
                </h3>
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-navy-600/60" />
                <input
                  type="text"
                  placeholder="Search words, synonyms, meaning..."
                  value={vocabSearch}
                  onChange={(e) => setVocabSearch(e.target.value)}
                  className="w-full rounded-xl border border-brand-navy-800/10 bg-brand-cream/50 py-2 pl-9 pr-3 text-xs font-medium focus:border-brand-mint focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-brand-navy-800/10 pt-4">
              {["all", "Environment", "Technology", "Education", "Society", "Economy", "Health"].map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedVocabCategory(cat)}
                    className={cn(
                      "rounded-lg px-3 py-1 text-xs font-semibold transition-colors",
                      selectedVocabCategory === cat
                        ? "bg-brand-mint text-white"
                        : "bg-brand-cream text-brand-navy-700 hover:bg-brand-navy/10"
                    )}
                  >
                    {cat === "all" ? "All Categories" : cat}
                  </button>
                )
              )}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredVocab.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-between rounded-2xl border border-brand-navy-800/10 bg-brand-cream/40 p-5 transition-all hover:bg-white hover:shadow-cardHover"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-black text-brand-navy-900">{item.word}</span>
                      <span className="rounded bg-brand-mint-100 px-2 py-0.5 text-[0.65rem] font-bold text-brand-mint-800">
                        {item.type}
                      </span>
                    </div>
                    {item.pronunciation && (
                      <p className="text-xs font-mono text-brand-navy-600 mt-0.5">
                        {item.pronunciation}
                      </p>
                    )}
                    <p className="font-bangla mt-2 text-sm font-bold text-brand-mint-700">
                      {item.meaningBn}
                    </p>

                    <div className="mt-3">
                      <p className="text-[0.68rem] font-bold uppercase text-brand-navy-600">Synonyms:</p>
                      <p className="text-xs text-brand-navy-800 font-medium">
                        {item.synonyms.join(", ")}
                      </p>
                    </div>

                    <div className="mt-2">
                      <p className="text-[0.68rem] font-bold uppercase text-brand-navy-600">Collocations:</p>
                      <p className="text-xs text-brand-navy-800 italic">
                        {item.collocations.join(" · ")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-brand-navy-800/10 pt-3">
                    <p className="text-[0.72rem] leading-snug font-sans font-medium text-brand-navy-900 bg-white rounded-lg p-2.5 border border-brand-navy-800/10">
                      &ldquo;{item.band8Sentence}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB: PRACTICE QUIZ */}
      {activeTab === "quiz" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-brand-navy-800/10 bg-white p-6 shadow-card sm:p-8">
            <Badge variant="mint" className="text-xs mb-2">
              <HelpCircle className="h-3.5 w-3.5" /> Interactive Mini Diagnostic
            </Badge>
            <h3 className="text-2xl font-bold text-brand-navy-900">
              Interactive IELTS Practice Quiz & Rationales
            </h3>
            <p className="mt-1 text-xs text-brand-navy-600 sm:text-sm">
              Select your answers and get immediate Bengali explanations for common IELTS traps.
            </p>

            <div className="mt-8 space-y-6">
              {ieltsQuizItems.map((q, idx) => {
                const userChoice = quizAnswers[q.id];
                const isAnswered = quizSubmitted[q.id];
                const isCorrect = userChoice === q.correctKey;

                return (
                  <div
                    key={q.id}
                    className="rounded-2xl border border-brand-navy-800/10 bg-brand-cream/50 p-5 sm:p-6"
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-navy-800 text-xs font-bold text-white">
                        {idx + 1}
                      </span>
                      <span className="rounded-full bg-brand-navy/10 px-2 py-0.5 text-[0.65rem] font-bold text-brand-navy-800">
                        {q.module} Module
                      </span>
                    </div>

                    <h4 className="font-bangla mt-3 text-base font-bold text-brand-navy-900">
                      {q.questionBn}
                    </h4>

                    {q.contextEn && (
                      <div className="mt-3 rounded-xl border border-brand-navy-800/10 bg-white p-3.5 font-sans text-xs leading-5 text-brand-navy-800 whitespace-pre-line">
                        {q.contextEn}
                      </div>
                    )}

                    <div className="mt-4 space-y-2">
                      {q.options.map((opt) => {
                        const isChosen = userChoice === opt.key;
                        const showCorrect = isAnswered && opt.key === q.correctKey;
                        const showWrong = isAnswered && isChosen && !isCorrect;

                        return (
                          <button
                            key={opt.key}
                            disabled={isAnswered}
                            onClick={() => handleSelectQuizAnswer(q.id, opt.key)}
                            className={cn(
                              "flex w-full items-center gap-3 rounded-xl border p-3 text-left text-xs font-medium transition-all",
                              showCorrect
                                ? "border-brand-mint bg-brand-mint-100 text-brand-mint-800 font-bold"
                                : showWrong
                                ? "border-brand-rose bg-brand-rose-100 text-brand-rose-600 font-bold"
                                : isChosen
                                ? "border-brand-mint bg-brand-mint-100/60 text-brand-navy-900"
                                : "border-brand-navy-800/10 bg-white text-brand-navy-800 hover:border-brand-mint/50"
                            )}
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current text-[0.65rem] font-bold uppercase">
                              {opt.key}
                            </span>
                            <span className="font-sans">{opt.text}</span>
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <div
                        className={cn(
                          "mt-4 rounded-xl p-3.5 font-bangla text-xs leading-5",
                          isCorrect
                            ? "bg-brand-mint-100 text-brand-mint-800 border border-brand-mint-200"
                            : "bg-brand-rose-100 text-brand-rose-600 border border-brand-rose-200"
                        )}
                      >
                        <p className="font-bold">
                          {isCorrect ? "✓ Correct Answer!" : "✕ Incorrect!"}
                        </p>
                        <p className="mt-1">{q.explanationBn}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB: STUDY PLANS */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-brand-navy-800/10 bg-white p-6 shadow-card sm:p-8">
            <h3 className="text-2xl font-bold text-brand-navy-900">
              IELTS Intensive Study Plans
            </h3>
            <p className="mt-1 text-xs text-brand-navy-600 sm:text-sm">
              Tailored preparation schedules for both fast-track test takers and deep mastery seekers.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {ieltsStudyPlans.crash30.map((plan) => (
                <div
                  key={plan.week}
                  className="rounded-2xl border border-brand-navy-800/10 bg-brand-cream/60 p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bangla text-sm font-extrabold text-brand-mint-700">
                      {plan.title}
                    </span>
                    <span className="text-[0.65rem] font-bold uppercase bg-brand-navy-800 text-white rounded px-2 py-0.5">
                      Week {plan.week}
                    </span>
                  </div>
                  <p className="font-bangla mt-2 text-xs leading-5 text-brand-navy-800">
                    <strong>Focus:</strong> {plan.focusBn}
                  </p>
                  <ul className="mt-3 space-y-2 border-t border-brand-navy-800/10 pt-3">
                    {plan.tasks.map((task, i) => (
                      <li key={i} className="font-bangla flex items-start gap-2 text-xs leading-5 text-brand-navy-700">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-mint" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
