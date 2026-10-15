"use client";

import * as React from "react";
import Link from "next/link";
import { CheckCircle2, Lock, Play, Circle } from "lucide-react";
import { lessons } from "@/data/lessons/index";
import { phases } from "@/data/phases";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Reveal } from "@/components/motion/reveal";
import { CardSkeleton } from "@/components/ui/skeleton";
import { useLearning } from "@/lib/learning-context";
import { toBanglaDigits } from "@/lib/dates";
import { cn } from "@/lib/utils";

import { TrackNav } from "./track-nav";

const LEVEL_LABEL = { 1: "Level 1 (Foundation)", 2: "Level 2 (Intermediate)", 3: "Level 3 (Advanced)" } as const;

export function RoadmapView() {
  const { ready, completedDays } = useLearning();

  const completed = new Set(completedDays);
  const currentDay = lessons.find((l) => !completed.has(l.day))?.day ?? null;

  return (
    <div className="space-y-8 pb-12">
      {/* Track Navigator */}
      <TrackNav activeCourse="spoken-60" />

      <div className="rounded-3xl border border-brand-navy-800/10 bg-white p-6 shadow-card sm:p-8">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Badge variant="mint" className="text-xs">
            Spoken English · 60-Day Foundation
          </Badge>
          <Badge variant="navy" className="text-xs">
            A1 to B1 Conversational Fluency
          </Badge>
        </div>
        <h1 className="text-2xl font-black tracking-tight text-brand-navy-900 sm:text-3xl">
          60-Day Spoken English Roadmap
        </h1>
        <p className="mt-1.5 max-w-2xl text-xs sm:text-sm leading-6 text-brand-navy-600 font-sans">
          A structured 6-phase journey from zero to confident everyday English. Each daily lesson unlocks as you pass the previous quiz — featuring natural Bengali explanations, grammar formulas, pronunciation drills, and vocabulary notebooks.
        </p>
      </div>

      {!ready && <CardSkeleton className="h-40" />}

      {ready &&
        phases.map((phase) => {
          const phaseLessons = lessons.filter((l) => l.day >= phase.startDay && l.day <= phase.endDay);
          const done = phaseLessons.filter((l) => completed.has(l.day)).length;
          return (
            <Reveal key={phase.number} as="section" className="scroll-mt-20">
              <div className="rounded-2xl border border-brand-navy-800/10 bg-brand-surface p-5 shadow-card sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-navy-800 text-base font-extrabold text-brand-mint-100">
                      {phase.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-mint-700">
                          Phase {phase.number}
                        </span>
                        <span className="text-xs text-brand-navy-600 font-medium font-bangla">
                          ({phase.titleBn})
                        </span>
                      </div>
                      <h2 className="text-lg font-bold text-brand-navy-900 sm:text-xl">
                        {phase.title}
                      </h2>
                      <p className="font-bangla mt-0.5 max-w-xl text-xs sm:text-sm leading-6 text-brand-navy-600">
                        {phase.descriptionBn}
                      </p>
                    </div>
                  </div>
                  <Badge variant={done === phaseLessons.length ? "mint" : "neutral"}>
                    {done} / {phaseLessons.length} Completed
                  </Badge>
                </div>

                <Progress value={done} max={phaseLessons.length} className="mt-4" label={`Phase ${phase.number}`} />

                <ul className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {phaseLessons.map((lesson) => {
                    const isDone = completed.has(lesson.day);
                    const isCurrent = lesson.day === currentDay;
                    const isUnlocked = lesson.day === 1 || completed.has(lesson.day - 1) || isDone;
                    const locked = !isUnlocked && !isDone;

                    const card = (
                      <div
                        className={cn(
                          "flex h-full flex-col rounded-xl border p-3.5 transition-all",
                          isDone && "border-brand-mint-200 bg-brand-mint-100/60",
                          isCurrent && !isDone && "border-brand-mint bg-white shadow-cardHover",
                          !isDone && !isCurrent && !locked && "border-brand-navy-800/10 bg-white hover:border-brand-mint",
                          locked && "border-dashed border-brand-navy-800/15 bg-brand-cream/60"
                        )}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={cn(
                              "text-xs font-extrabold",
                              isDone ? "text-brand-mint-700" : "text-brand-navy-600"
                            )}
                          >
                            Day {lesson.day}
                          </span>
                          {isDone ? (
                            <CheckCircle2 className="h-4 w-4 text-brand-mint-700" aria-hidden />
                          ) : locked ? (
                            <Lock className="h-4 w-4 text-brand-navy-600/60" aria-hidden />
                          ) : isCurrent ? (
                            <Badge variant="mint" className="text-[0.6rem]">
                              Current
                            </Badge>
                          ) : (
                            <Circle className="h-4 w-4 text-brand-navy-600/40" aria-hidden />
                          )}
                        </div>
                        <p
                          className={cn(
                            "mt-2 text-sm font-bold leading-6",
                            locked ? "text-brand-navy-600/70" : "text-brand-navy-900"
                          )}
                        >
                          {lesson.title}
                        </p>
                        <p className="font-bangla mt-0.5 text-xs font-medium text-brand-navy-600">
                          {lesson.titleBn}
                        </p>
                        <div className="mt-auto flex items-center gap-2 pt-3 text-[0.65rem] font-semibold uppercase tracking-wider text-brand-navy-600">
                          <span>{LEVEL_LABEL[lesson.level]}</span>
                          <span aria-hidden>·</span>
                          <span>{lesson.durationMinutes} mins</span>
                        </div>
                      </div>
                    );

                    return (
                      <li key={lesson.day}>
                        {locked ? (
                          <div
                            aria-disabled
                            title="Complete previous lesson to unlock"
                            className="block h-full cursor-not-allowed"
                          >
                            {card}
                          </div>
                        ) : (
                          <Link href={`/lessons/${lesson.day}`} className="block h-full focus-visible:rounded-xl">
                            {card}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>

                {done < phaseLessons.length && (
                  <p className="mt-4 flex items-center gap-1.5 text-xs text-brand-navy-600 font-medium">
                    <Play className="h-3.5 w-3.5 text-brand-mint-700" aria-hidden />
                    Next lesson is in Phase {phase.number}.
                  </p>
                )}
              </div>
            </Reveal>
          );
        })}
    </div>
  );
}