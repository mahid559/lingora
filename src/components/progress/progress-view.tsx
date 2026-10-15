"use client";

import { CheckCircle2, Flame, Target, BookMarked, Trophy, CalendarCheck2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { StatCard } from "@/components/app/stat-card";
import { WeeklyBars } from "@/components/app/weekly-bars";
import { AchievementGrid } from "@/components/app/achievement-grid";
import { Reveal } from "@/components/motion/reveal";
import { CardSkeleton } from "@/components/ui/skeleton";
import { phases } from "@/data/phases";
import { useLearning } from "@/lib/learning-context";
import { formatDateEn, relativeDayEn, toLocalDateString } from "@/lib/dates";
import { TrackNav } from "@/components/roadmap/track-nav";
import { cn } from "@/lib/utils";

export function ProgressView() {
  const { ready, progress } = useLearning();

  if (!ready) {
    return (
      <div className="space-y-6">
        <CardSkeleton className="h-44" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <CardSkeleton key={i} className="h-28" />
          ))}
        </div>
      </div>
    );
  }

  const data = progress;
  const percent = Math.round((data.completedCount / Math.max(1, data.totalDays)) * 100);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-brand-navy-900 sm:text-3xl">
            Learning Progress & Analytics
          </h1>
          <p className="mt-1 text-sm text-brand-navy-600">
            Real-time verified metrics calculated from your daily lessons, quizzes, and streak records.
          </p>
        </div>
      </div>

      {/* Curriculum Switcher */}
      <Reveal delay={0.02}>
        <TrackNav />
      </Reveal>

      {/* Headline Progress Card */}
      <Reveal delay={0.05}>
        <Card className="overflow-hidden border-brand-navy-800/15 shadow-sm">
          <div className="grid gap-0 md:grid-cols-[1fr_1.2fr]">
            <div className="border-b border-brand-navy-800/10 p-5 sm:p-7 md:border-b-0 md:border-r bg-brand-surface">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-navy-600">Overall Progress</p>
              <p className="mt-2 text-5xl font-extrabold tracking-tight text-brand-navy-900">
                {percent}%
              </p>
              <Progress value={data.completedCount} max={data.totalDays} className="mt-4" label="Course Progress" />
              <p className="mt-2 text-xs font-semibold text-brand-navy-600">
                {data.completedCount} of {data.totalDays} Lessons Completed
              </p>
            </div>
            <div className="p-5 sm:p-7 bg-brand-cream/30">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-brand-navy-600">Phase Completion</p>
              <ul className="space-y-3.5">
                {data.phases.map((p) => {
                  const phase = phases[p.phaseNumber - 1];
                  return (
                    <li key={p.phaseNumber}>
                      <div className="mb-1 flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-brand-navy-800">
                          Phase {p.phaseNumber} — {phase?.title}
                          {phase?.titleBn && (
                            <span className="font-bangla ml-1.5 text-xs text-brand-mint-700">({phase.titleBn})</span>
                          )}
                        </span>
                        <span className="text-xs font-bold text-brand-navy-600">
                          {p.completed} / {p.total}
                        </span>
                      </div>
                      <Progress
                        value={p.completed}
                        max={p.total}
                        barClassName={p.completed === p.total ? "bg-brand-mint" : "bg-brand-blue"}
                        label={`Phase ${p.phaseNumber}`}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Card>
      </Reveal>

      {/* Core Metrics Grid */}
      <Reveal delay={0.08} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={Flame}
          tone="amber"
          label="Current Streak"
          value={`${data.streak.current} Days`}
          hint={`Best: ${data.streak.longest} Days`}
        />
        <StatCard
          icon={CheckCircle2}
          tone="mint"
          label="Completed Lessons"
          value={`${data.completedCount}`}
          hint={`Out of ${data.totalDays} Total Days`}
        />
        <StatCard
          icon={Target}
          tone="blue"
          label="Quiz Average"
          value={`${data.quizSummary.avgPercent}%`}
          hint={`${data.quizSummary.attempts} Attempts · Best: ${data.quizSummary.bestPercent}%`}
        />
        <StatCard
          icon={BookMarked}
          tone="navy"
          label="Vocabulary Bank"
          value={`${data.vocab.saved}`}
          hint={`${data.vocab.learned} Words Mastered`}
        />
      </Reveal>

      {/* Final Assessment Banner */}
      <Reveal delay={0.1}>
        <Card
          className={cn(
            "border shadow-sm",
            data.finalAssessment.done ? "border-brand-mint-200 bg-brand-mint-50/70" : "border-brand-navy-800/10"
          )}
        >
          <CardContent className="flex flex-wrap items-center gap-4 sm:p-6">
            <span
              className={cn(
                "flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm",
                data.finalAssessment.done ? "bg-brand-mint text-white" : "bg-brand-navy/10 text-brand-navy-800"
              )}
            >
              <Trophy className="h-7 w-7" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-lg font-bold text-brand-navy-900">
                {data.finalAssessment.done
                  ? "60-Day Foundation Assessment Completed!"
                  : "Final Course Assessment Pending"}
              </p>
              <p className="mt-0.5 text-xs sm:text-sm text-brand-navy-700">
                {data.finalAssessment.done
                  ? `Your average quiz pass rate is ${data.finalAssessment.quizPassRate}%. Outstanding dedication!`
                  : `Complete all 60 days with a 70%+ quiz score to unlock your graduation certificate. Current pass rate: ${data.finalAssessment.quizPassRate}%.`}
              </p>
            </div>
            {data.finalAssessment.done && (
              <Badge variant="mint" className="px-3 py-1 text-sm font-bold">
                <CalendarCheck2 className="h-4 w-4" /> Completed
              </Badge>
            )}
          </CardContent>
        </Card>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-2">
        {/* Weekly activity */}
        <Reveal delay={0.15}>
          <Card>
            <CardHeader>
              <CardTitle>Weekly Study Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <WeeklyBars days={data.activityDays} metric="minutes" lang="en" />
              <p className="mt-3 text-xs text-brand-navy-600">
                Study minutes recorded each day in local time.
              </p>
            </CardContent>
          </Card>
        </Reveal>

        {/* Quiz history */}
        <Reveal delay={0.2}>
          <Card>
            <CardHeader>
              <CardTitle>Quiz Performance History</CardTitle>
            </CardHeader>
            <CardContent>
              {data.quizHistory.length === 0 ? (
                <p className="text-sm text-brand-navy-600">
                  No quizzes taken yet — complete your first daily lesson to log a score!
                </p>
              ) : (
                <ul className="divide-y divide-brand-navy-800/10">
                  {data.quizHistory.map((attempt) => (
                    <li key={attempt.id} className="flex items-center gap-3 py-3">
                      <span
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                          attempt.passed
                            ? "bg-brand-mint-100 text-brand-mint-700"
                            : "bg-brand-rose-100 text-brand-rose-600"
                        )}
                      >
                        {attempt.percent}%
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-brand-navy-900">
                          Day {attempt.day} — {attempt.title}
                        </p>
                        <p className="text-xs text-brand-navy-600">
                          Score: {attempt.score} / {attempt.total} ·{" "}
                          {formatDateEn(toLocalDateString(new Date(attempt.at)))}
                        </p>
                      </div>
                      <Badge variant={attempt.passed ? "mint" : "rose"} className="shrink-0 text-xs">
                        {attempt.passed ? "PASSED" : "RETRY"}
                      </Badge>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </Reveal>
      </div>

      {/* Achievements */}
      <Reveal delay={0.25}>
        <Card>
          <CardHeader>
            <CardTitle>All Badges & Milestones</CardTitle>
          </CardHeader>
          <CardContent>
            <AchievementGrid earned={data.achievements} />
          </CardContent>
        </Card>
      </Reveal>
    </div>
  );
}