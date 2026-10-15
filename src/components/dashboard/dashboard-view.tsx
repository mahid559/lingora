"use client";

import Link from "next/link";
import {
  Flame,
  Trophy,
  Target,
  BookMarked,
  CheckCircle2,
  Circle,
  ArrowRight,
  Play,
  GraduationCap,
  Sparkles,
  BookOpen,
  Volume2,
  PenTool,
  Headphones,
  Calculator,
  Compass,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/app/stat-card";
import { WeeklyBars } from "@/components/app/weekly-bars";
import { AchievementGrid } from "@/components/app/achievement-grid";
import { Reveal } from "@/components/motion/reveal";
import { CardSkeleton } from "@/components/ui/skeleton";
import { useLearning } from "@/lib/learning-context";
import { getAchievementMeta } from "@/lib/achievements";
import { formatDateEn, relativeDayEn, toLocalDateString } from "@/lib/dates";
import { TrackNav } from "@/components/roadmap/track-nav";
import { cn } from "@/lib/utils";

export function DashboardView() {
  const { ready, dashboard: data, settings } = useLearning();
  const displayName = settings.displayName || "Learner";
  const todayStr = toLocalDateString();

  if (!ready) {
    return (
      <div className="space-y-6">
        <CardSkeleton className="h-20" />
        <CardSkeleton className="h-52" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <CardSkeleton key={i} className="h-28" />
          ))}
        </div>
      </div>
    );
  }

  const totalDays = 60;
  const percent = Math.round((data.completedCount / totalDays) * 100);

  return (
    <div className="space-y-8">
      {/* Top Greeting */}
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-mint-700">
              {formatDateEn(todayStr)}
            </p>
            <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-brand-navy-900 sm:text-3xl">
              Welcome back, {displayName}!
            </h1>
            <p className="mt-1 text-sm text-brand-navy-600">
              Master spoken English fluency and IELTS exam skills through step-by-step bilingual lessons.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="mint" className="px-3 py-1.5 text-sm font-bold shadow-sm">
              <Flame className="h-4 w-4 text-brand-amber" /> {data.streak.current} Day Streak
            </Badge>
          </div>
        </div>
      </Reveal>

      {/* Curriculum Track Switcher & Quick Navigation */}
      <Reveal delay={0.03}>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wider text-brand-navy-600">
              Course Switcher
            </h2>
            <span className="text-xs text-brand-navy-600/80">
              4 Full Curriculums Available
            </span>
          </div>
          <TrackNav />
        </div>
      </Reveal>

      {/* Primary Focus Card: Active Lesson */}
      <Reveal delay={0.05}>
        <Card className="overflow-hidden border-brand-navy-800/15 shadow-sm">
          <div className="grid gap-0 md:grid-cols-[1.6fr_1fr]">
            <div className="p-5 sm:p-7">
              {data.completedCount >= totalDays ? (
                <>
                  <Badge variant="amber" className="mb-2">
                    <Trophy className="h-3.5 w-3.5" /> 60-Day Course Complete
                  </Badge>
                  <h2 className="text-xl font-bold text-brand-navy-900 sm:text-2xl">
                    Congratulations! 60-Day Foundation Finished.
                  </h2>
                  <p className="font-bangla mt-2 text-sm leading-6 text-brand-navy-600">
                    অভিনন্দন! ৬০ দিনের মৌলিক সাবলীলতা সম্পন্ন করেছেন। এখন ৯১ দিনের অ্যাডভান্সড কোর্স বা আইইএলটিএস প্রস্তুতি শুরু করতে পারেন।
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <ButtonLink href="/roadmap-90" variant="primary">
                      Start 90-Day Advanced Track <ArrowRight className="h-4 w-4" />
                    </ButtonLink>
                    <ButtonLink href="/ielts" variant="outline">
                      Explore IELTS Track
                    </ButtonLink>
                  </div>
                </>
              ) : data.todayLesson ? (
                <>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="mint">
                      Day {data.todayLesson.day}
                    </Badge>
                    <span className="text-xs font-semibold text-brand-navy-600">
                      Today&apos;s Active Lesson · ~{data.todayLesson.durationMinutes} mins
                    </span>
                  </div>
                  <h2 className="font-bangla mt-3 text-xl font-bold text-brand-navy-900 sm:text-2xl">
                    {data.todayLesson.titleBn}
                  </h2>
                  <p className="mt-0.5 text-sm font-semibold text-brand-mint-700">
                    {data.todayLesson.title}
                  </p>
                  <p className="mt-2 text-xs text-brand-navy-600">
                    Learn core sentence patterns, interactive speaking drills, and vocabulary with clear Bengali explanations.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    <ButtonLink href={`/lessons/${data.todayLesson.day}`} size="lg">
                      <Play className="h-4 w-4 fill-current" /> Start Day {data.todayLesson.day} Lesson
                    </ButtonLink>
                    <ButtonLink href="/roadmap" variant="outline" size="lg">
                      60-Day Roadmap
                    </ButtonLink>
                    <ButtonLink href="/roadmap-90" variant="secondary" size="lg">
                      90-Day Advanced
                    </ButtonLink>
                  </div>
                </>
              ) : null}
            </div>

            <div className="border-t border-brand-navy-800/10 bg-brand-cream/60 p-5 sm:p-7 md:border-l md:border-t-0 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-navy-600">
                  Course Progress
                </p>
                <div className="mt-2 flex items-baseline gap-2">
                  <p className="text-4xl font-extrabold tracking-tight text-brand-navy-900">
                    {percent}%
                  </p>
                  <span className="text-xs font-medium text-brand-navy-600">Completed</span>
                </div>
                <Progress value={data.completedCount} max={totalDays} className="mt-3.5" label="Course Progress" />
                <p className="mt-2 text-xs font-medium text-brand-navy-600">
                  {data.completedCount} of {totalDays} lessons completed
                </p>
              </div>

              {data.nextMilestone && (
                <div className="mt-5 rounded-xl border border-brand-mint-200/80 bg-brand-surface p-3 text-xs">
                  <p className="flex items-center gap-1.5 font-bold text-brand-mint-700">
                    <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden /> Next Milestone
                  </p>
                  <p className="mt-1 text-brand-navy-800">
                    {getAchievementMeta(data.nextMilestone.type).title}
                    <span className="font-bangla ml-1 text-brand-navy-600">
                      ({getAchievementMeta(data.nextMilestone.type).titleBn})
                    </span>
                  </p>
                  <p className="mt-0.5 text-[0.7rem] text-brand-navy-600">
                    Unlocks at Day {data.nextMilestone.day}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Card>
      </Reveal>

      {/* Two Learning Pillars Overview Cards */}
      <Reveal delay={0.08}>
        <div>
          <h2 className="text-base font-bold text-brand-navy-900">
            Two Core Pillars of LINGORA
          </h2>
          <p className="text-xs text-brand-navy-600 mt-0.5">
            Choose your learning track — Spoken Fluency or IELTS Band 7.0–8.5+
          </p>

          <div className="mt-3 grid gap-4 md:grid-cols-2">
            {/* Pillar 1: Spoken English */}
            <Card className="border-brand-navy-800/10 hover:border-brand-mint transition-colors">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-mint/15 text-brand-mint-700">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-brand-navy-900">Spoken English</h3>
                      <p className="font-bangla text-xs text-brand-navy-600">স্পোকেন ইংলিশ (A1 থেকে C1)</p>
                    </div>
                  </div>
                  <Badge variant="mint" className="text-xs">2 Courses</Badge>
                </div>

                <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  <Link
                    href="/roadmap"
                    className="flex flex-col justify-between rounded-xl border border-brand-navy-800/10 bg-brand-surface p-3.5 hover:bg-brand-mint/5 hover:border-brand-mint transition-all"
                  >
                    <div>
                      <span className="text-[0.7rem] font-bold uppercase tracking-wider text-brand-mint-700">Track 1</span>
                      <h4 className="text-sm font-bold text-brand-navy-900">60-Day Foundation</h4>
                      <p className="font-bangla text-xs text-brand-navy-600 mt-1">
                        দৈনন্দিন কথোপকথন ও ভিত্তি
                      </p>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs font-semibold text-brand-mint-700">
                      <span>View Roadmap</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </Link>

                  <Link
                    href="/roadmap-90"
                    className="flex flex-col justify-between rounded-xl border border-brand-navy-800/10 bg-brand-surface p-3.5 hover:bg-brand-navy/5 hover:border-brand-blue transition-all"
                  >
                    <div>
                      <span className="text-[0.7rem] font-bold uppercase tracking-wider text-brand-blue">Track 2</span>
                      <h4 className="text-sm font-bold text-brand-navy-900">90-Day Advanced</h4>
                      <p className="font-bangla text-xs text-brand-navy-600 mt-1">
                        সি১ লেভেল ও প্রেজেন্টেশন
                      </p>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs font-semibold text-brand-blue">
                      <span>View Roadmap</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Pillar 2: IELTS Preparation */}
            <Card className="border-brand-navy-800/10 hover:border-brand-blue transition-colors">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blue">
                      <Compass className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-brand-navy-900">IELTS Preparation</h3>
                      <p className="font-bangla text-xs text-brand-navy-600">আইইএলটিএস প্রস্তুতি (ব্যান্ড ৭.০ - ৮.৫+)</p>
                    </div>
                  </div>
                  <Badge variant="blue" className="text-xs">2 Courses</Badge>
                </div>

                <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  <Link
                    href="/ielts-60"
                    className="flex flex-col justify-between rounded-xl border border-brand-navy-800/10 bg-brand-surface p-3.5 hover:bg-brand-blue/5 hover:border-brand-blue transition-all"
                  >
                    <div>
                      <span className="text-[0.7rem] font-bold uppercase tracking-wider text-brand-blue">Track 1</span>
                      <h4 className="text-sm font-bold text-brand-navy-900">60-Day Intensive</h4>
                      <p className="font-bangla text-xs text-brand-navy-600 mt-1">
                        ব্যান্ড ৭.০+ ফাস্ট-ট্র্যাক
                      </p>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs font-semibold text-brand-blue">
                      <span>View Roadmap</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </Link>

                  <Link
                    href="/ielts-90"
                    className="flex flex-col justify-between rounded-xl border border-brand-navy-800/10 bg-brand-surface p-3.5 hover:bg-brand-navy/5 hover:border-brand-navy transition-all"
                  >
                    <div>
                      <span className="text-[0.7rem] font-bold uppercase tracking-wider text-brand-navy-800">Track 2</span>
                      <h4 className="text-sm font-bold text-brand-navy-900">90-Day Master</h4>
                      <p className="font-bangla text-xs text-brand-navy-600 mt-1">
                        ব্যান্ড ৮.০ - ৮.৫+ ব্লুপ্রিন্ট
                      </p>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs font-semibold text-brand-navy-800">
                      <span>View Roadmap</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Reveal>

      {/* Quick Metrics Stats Grid */}
      <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={Flame}
          tone="amber"
          label="Learning Streak"
          value={`${data.streak.current} Days`}
          hint={`Personal Best: ${data.streak.longest} Days`}
        />
        <StatCard
          icon={CheckCircle2}
          tone="mint"
          label="Completed Lessons"
          value={`${data.completedCount}`}
          hint={`Out of ${totalDays} Course Days`}
        />
        <StatCard
          icon={Target}
          tone="blue"
          label="Quiz Average"
          value={`${data.quiz.avgPercent}%`}
          hint={`${data.quiz.passedAttempts} Passed · Best: ${data.quiz.bestPercent}%`}
        />
        <StatCard
          icon={BookMarked}
          tone="navy"
          label="Words Collected"
          value={`${data.vocab.saved}`}
          hint={`${data.vocab.learned} Words Mastered`}
        />
      </Reveal>

      {/* Weekly Activity & Checklist */}
      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        {/* Weekly activity */}
        <Reveal delay={0.15}>
          <Card>
            <CardHeader>
              <CardTitle>Weekly Study Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <WeeklyBars days={data.weekly} metric="minutes" lang="en" />
              <p className="mt-3 text-xs text-brand-navy-600">
                Height indicates study minutes spent per day on lessons and quizzes.
              </p>
            </CardContent>
          </Card>
        </Reveal>

        {/* Today's checklist */}
        <Reveal delay={0.2}>
          <Card>
            <CardHeader>
              <CardTitle>Today&apos;s Daily Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2.5">
                {data.checklist.map((item) => {
                  let englishLabel = item.label;
                  let banglaSub = "";
                  if (item.key === "lesson") {
                    englishLabel = "Complete Today's Lesson";
                    banglaSub = "আজকের নির্ধারিত পাঠ সম্পন্ন করুন";
                  } else if (item.key === "quiz") {
                    englishLabel = "Take Lesson Practice Quiz";
                    banglaSub = "পাঠের কুইজ দিয়ে জ্ঞান ঝালিয়ে নিন";
                  } else if (item.key === "minutes") {
                    englishLabel = `Reach Daily Goal (${settings.dailyGoalMinutes} mins)`;
                    banglaSub = `${settings.dailyGoalMinutes} মিনিট অনুশীলন সম্পন্ন করুন`;
                  }

                  return (
                    <li
                      key={item.key}
                      className={cn(
                        "flex items-center gap-3 rounded-xl border p-3 transition-colors",
                        item.done
                          ? "border-brand-mint-200 bg-brand-mint-50/70"
                          : "border-brand-navy-800/10 bg-brand-surface"
                      )}
                    >
                      {item.done ? (
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-mint-700" aria-hidden />
                      ) : (
                        <Circle className="h-5 w-5 shrink-0 text-brand-navy-600/40" aria-hidden />
                      )}
                      <div className="min-w-0">
                        <p
                          className={cn(
                            "text-sm font-semibold",
                            item.done ? "text-brand-mint-800 line-through" : "text-brand-navy-800"
                          )}
                        >
                          {englishLabel}
                        </p>
                        {banglaSub && (
                          <p className="font-bangla text-[0.7rem] text-brand-navy-600">
                            {banglaSub}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        </Reveal>
      </div>

      {/* IELTS Toolkit Hub Card */}
      <Reveal delay={0.22}>
        <Card className="border-brand-navy-800/10 bg-gradient-to-br from-brand-surface via-brand-surface to-brand-blue-50/40">
          <CardHeader className="flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Compass className="h-5 w-5 text-brand-blue" />
                IELTS 4-Module Quick Tools
              </CardTitle>
              <p className="text-xs text-brand-navy-600 mt-0.5">
                Practice specific skill modules or calculate your target band score
              </p>
            </div>
            <Link
              href="/ielts"
              className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:underline"
            >
              Open Full Hub <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/ielts?tab=speaking"
                className="group flex items-center gap-3 rounded-xl border border-brand-navy-800/10 bg-brand-surface p-3 hover:border-brand-mint hover:bg-brand-mint/5 transition-all"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-mint/15 text-brand-mint-700">
                  <Volume2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-navy-900 group-hover:text-brand-mint-700">Speaking</p>
                  <p className="font-bangla text-[0.7rem] text-brand-navy-600">পার্ট ১, ২ ও ৩ টিপস</p>
                </div>
              </Link>

              <Link
                href="/ielts?tab=writing"
                className="group flex items-center gap-3 rounded-xl border border-brand-navy-800/10 bg-brand-surface p-3 hover:border-brand-blue hover:bg-brand-blue/5 transition-all"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blue">
                  <PenTool className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-navy-900 group-hover:text-brand-blue">Writing</p>
                  <p className="font-bangla text-[0.7rem] text-brand-navy-600">টাস্ক ১ ও ২ কাঠামো</p>
                </div>
              </Link>

              <Link
                href="/ielts?tab=reading"
                className="group flex items-center gap-3 rounded-xl border border-brand-navy-800/10 bg-brand-surface p-3 hover:border-brand-amber hover:bg-brand-amber/5 transition-all"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-amber/15 text-brand-amber">
                  <BookOpen className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-navy-900 group-hover:text-brand-amber">Reading</p>
                  <p className="font-bangla text-[0.7rem] text-brand-navy-600">স্কিমিং ও স্ক্যানিং</p>
                </div>
              </Link>

              <Link
                href="/ielts?tab=calculator"
                className="group flex items-center gap-3 rounded-xl border border-brand-navy-800/10 bg-brand-surface p-3 hover:border-brand-navy hover:bg-brand-navy/5 transition-all"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-navy-800/15 text-brand-navy-800">
                  <Calculator className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-navy-900 group-hover:text-brand-navy-800">Band Calculator</p>
                  <p className="font-bangla text-[0.7rem] text-brand-navy-600">ব্যান্ড স্কোর নির্ণয়</p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </Reveal>

      {/* Recent activity */}
      <Reveal delay={0.25}>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            {data.recent.length === 0 ? (
              <p className="text-sm text-brand-navy-600">
                No recent activity yet. Start Day 1 today to build your streak!
              </p>
            ) : (
              <ul className="divide-y divide-brand-navy-800/10">
                {data.recent.map((event) => (
                  <li key={event.id} className="flex items-center gap-3 py-3">
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
                        event.type === "lesson"
                          ? "bg-brand-mint-100 text-brand-mint-700"
                          : "bg-brand-blue-100 text-brand-blue-600"
                      )}
                    >
                      {event.type === "lesson" ? (
                        <GraduationCap className="h-4 w-4" aria-hidden />
                      ) : (
                        <Target className="h-4 w-4" aria-hidden />
                      )}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-brand-navy-900">
                        {event.type === "lesson" ? "Lesson Completed" : "Quiz Completed"} — Day {event.day}
                      </p>
                      <p className="truncate text-xs text-brand-navy-600">{event.title}</p>
                    </div>
                    <span className="shrink-0 text-xs font-medium text-brand-navy-600">
                      {relativeDayEn(toLocalDateString(new Date(event.at)))}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </Reveal>

      {/* Achievements Gallery */}
      <Reveal delay={0.3}>
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <div>
              <CardTitle>Achievements & Badges</CardTitle>
              <p className="text-xs text-brand-navy-600 mt-0.5">
                Milestones unlocked through continuous daily practice
              </p>
            </div>
            <Link
              href="/progress"
              className="inline-flex items-center gap-1 text-sm font-bold text-brand-mint-700 hover:underline"
            >
              View Full Progress <ArrowRight className="h-4 w-4" />
            </Link>
          </CardHeader>
          <CardContent>
            <AchievementGrid earned={data.achievements} />
          </CardContent>
        </Card>
      </Reveal>
    </div>
  );
}