import Link from "next/link";
import { ArrowRight, Lock, Check } from "lucide-react";
import { phases } from "@/data/phases";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const PHASE_STYLES = [
  { chip: "bg-brand-mint-100 text-brand-mint-700", bar: "bg-brand-mint" },
  { chip: "bg-brand-blue-100 text-brand-blue-600", bar: "bg-brand-blue" },
  { chip: "bg-brand-amber-100 text-brand-amber-600", bar: "bg-brand-amber" },
  { chip: "bg-brand-mint-100 text-brand-mint-700", bar: "bg-brand-mint" },
  { chip: "bg-brand-blue-100 text-brand-blue-600", bar: "bg-brand-blue" },
  { chip: "bg-brand-navy/10 text-brand-navy-700", bar: "bg-brand-navy" },
];

export function RoadmapPreview() {
  return (
    <section id="roadmap" className="scroll-mt-24 bg-brand-cream/60 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-mint-600">
            Curriculum Structure
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy-900 sm:text-4xl">
            60-Day Foundation Roadmap
          </h2>
          <p className="mt-4 text-base leading-7 text-brand-navy-600">
            From absolute beginner to everyday conversational English. Six progressive 10-day phases with full Bengali grammar explanations.
          </p>
        </Reveal>

        <div className="mt-14 space-y-4">
          {phases.map((phase, pi) => {
            const style = PHASE_STYLES[phase.number - 1] ?? PHASE_STYLES[0];
            const dots = Array.from({ length: phase.endDay - phase.startDay + 1 }, (_, i) => phase.startDay + i);
            return (
              <Reveal key={phase.number} delay={pi * 0.06}>
                <Link
                  href="/roadmap"
                  className="group block rounded-2xl border border-brand-navy-800/10 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-cardHover sm:p-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex min-w-[9rem] items-center gap-3 sm:flex-col sm:items-start sm:gap-1">
                      <span className={cn("rounded-full px-3 py-1 text-xs font-bold", style.chip)}>
                        Phase {phase.number}
                      </span>
                      <div className="sm:mt-1">
                        <p className="text-sm font-bold text-brand-navy-900">{phase.title}</p>
                        <p className="text-xs text-brand-navy-600">
                          Days {phase.startDay}–{phase.endDay}
                        </p>
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="font-bangla text-sm leading-6 text-brand-navy-600">{phase.descriptionBn}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {dots.map((day) => (
                          <span
                            key={day}
                            className={cn(
                              "flex h-6 w-6 items-center justify-center rounded-md text-[0.6rem] font-bold",
                              day <= 10
                                ? "bg-brand-mint-100 text-brand-mint-800"
                                : "bg-brand-navy/5 text-brand-navy-600/40"
                            )}
                          >
                            {day}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="hidden items-center gap-2 text-sm font-semibold text-brand-mint-600 sm:flex">
                      <span>{pi === 0 ? "Start Phase" : "View Days"}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-brand-navy-700">
            <span className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-brand-mint-100 text-brand-mint-700">
                <Check className="h-3 w-3" />
              </span>
              Completed (Reviewable)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-brand-mint text-white text-xs font-bold">8</span>
              Active Day
            </span>
            <span className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-brand-navy/10 text-brand-navy-600/50">
                <Lock className="h-3 w-3" />
              </span>
              Locked
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}