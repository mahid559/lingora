"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Eye, Headphones, ListChecks, BookMarked, Volume2 } from "lucide-react";
import { getLesson } from "@/data/lessons/index";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";

/** Interactive preview of the actual lesson design, using real Day 1 content. */
export function SampleLessonSection() {
  const reduce = useReducedMotion();
  const lesson = getLesson(1);
  const vocab = lesson.vocab.slice(0, 3);
  const pair = lesson.sentences[0];
  const quiz = lesson.quiz[0];
  const [revealed, setRevealed] = React.useState(false);
  const [selected, setSelected] = React.useState<string | null>(null);

  const correctKey = quiz.options?.find((o) => o.key === quiz.answer)?.key ?? "a";
  const isCorrect = selected === correctKey;

  return (
    <section id="sample-lesson" className="scroll-mt-24 bg-brand-cream/60 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-mint-600">
            Interactive Experience
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy-900 sm:text-4xl">
            Inside a Daily Lesson
          </h2>
          <p className="mt-4 text-base leading-7 text-brand-navy-600">
            Preview the structure of Day 1 below. Every mission combines grammar mechanics, speaking shadowing, and interactive comprehension quizzes.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-brand-navy-800/10 bg-white shadow-cardHover">
          {/* Lesson header */}
          <div className="border-b border-brand-navy-800/10 bg-brand-navy-800 p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="mint">Day 1</Badge>
              <Badge variant="navy">Phase 1 · A1</Badge>
              <Badge variant="blue">
                <Eye className="h-3 w-3" /> 20 mins
              </Badge>
            </div>
            <h3 className="mt-3 font-bangla text-2xl font-bold text-white">{lesson.titleBn}</h3>
            <p className="mt-1 text-sm font-semibold text-brand-mint-300">{lesson.title}</p>
          </div>

          <div className="grid gap-0 sm:grid-cols-2">
            {/* Grammar + sentence practice */}
            <div className="space-y-4 p-5 sm:p-6">
              <div>
                <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-mint-600">
                  <ListChecks className="h-4 w-4" /> Grammar Formula
                </p>
                <div className="rounded-xl bg-brand-mint-100 p-3 text-center text-sm font-bold text-brand-mint-800">
                  Subject + Verb + Object
                </div>
                <p className="font-bangla mt-1.5 text-xs leading-5 text-brand-navy-600">
                  কর্তা + ক্রিয়া + কর্ম — বাংলার মতো &ldquo;কর্তা + কর্ম + ক্রিয়া&rdquo; নয়।
                </p>
              </div>

              <div>
                <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue-600">
                  <BookMarked className="h-4 w-4" /> Bengali → English
                </p>
                <div className="rounded-xl border border-brand-navy-800/10 p-3">
                  <p className="font-bangla text-base font-semibold text-brand-navy-900">{pair.bn}</p>
                  <p className="mt-1 text-base font-bold text-brand-mint-700">{pair.en}</p>
                </div>
              </div>

              <div>
                <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-amber-600">
                  <Headphones className="h-4 w-4" /> Speaking Drill
                </p>
                <div className="flex items-center justify-between rounded-xl bg-brand-amber-100 p-3">
                  <p className="text-sm font-bold text-brand-amber-800">
                    &ldquo;I eat rice. / She reads a book.&rdquo;
                  </p>
                  <Volume2 className="h-4 w-4 text-brand-amber-700" aria-hidden />
                </div>
                <p className="font-bangla mt-1.5 text-xs leading-5 text-brand-navy-600">
                  প্রতিটি বাক্য জোরে জোরে ৩ বার বলুন — আয়নার সামনে অনুশীলন সেরা।
                </p>
              </div>
            </div>

            {/* Quiz preview */}
            <div className="border-t border-brand-navy-800/10 bg-brand-cream/40 p-5 sm:border-l sm:border-t-0 sm:p-6">
              <p className="mb-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-navy-600">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-navy-800 text-[0.6rem] text-white">
                  1
                </span>
                Interactive Quiz · Try It Yourself
              </p>
              <p className="font-bangla text-base font-semibold leading-7 text-brand-navy-900">
                {quiz.promptBn}
              </p>

              <div className="mt-3 space-y-2">
                {quiz.options?.map((opt) => {
                  const chosen = selected === opt.key;
                  const showState = revealed && (opt.key === correctKey || chosen);
                  return (
                    <button
                      key={opt.key}
                      onClick={() => {
                        setSelected(opt.key);
                        setRevealed(true);
                      }}
                      className={`flex w-full items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-left text-sm font-medium transition-all ${
                        showState && opt.key === correctKey
                          ? "border-brand-mint bg-brand-mint-100 text-brand-mint-800"
                          : showState && chosen
                            ? "border-brand-rose bg-brand-rose-100 text-brand-rose-600"
                            : selected === opt.key
                              ? "border-brand-mint bg-brand-mint-100 text-brand-navy-900"
                              : "border-brand-navy-800/15 bg-white text-brand-navy-800 hover:border-brand-mint"
                      }`}
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current text-[0.65rem] font-bold">
                        {showState && opt.key === correctKey ? (
                          <Check className="h-3 w-3" />
                        ) : opt.key.toUpperCase()}
                      </span>
                      <span className="font-bangla">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              <div aria-live="polite" className="mt-3 min-h-[2.5rem]">
                {revealed && (
                  <motion.div
                    initial={reduce ? undefined : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`rounded-xl px-3.5 py-2.5 text-sm leading-6 ${
                      isCorrect
                        ? "bg-brand-mint-100 text-brand-mint-800"
                        : "bg-brand-rose-100 text-brand-rose-600"
                    }`}
                  >
                    <span className="font-bold">{isCorrect ? "Correct! " : "Incorrect — "}</span>
                    <span className="font-bangla">{quiz.explanationBn}</span>
                  </motion.div>
                )}
              </div>

              <p className="mt-2 text-xs leading-5 text-brand-navy-600">
                1 sample question shown — full lessons feature 10+ questions with scores and passing thresholds.
              </p>
            </div>
          </div>

          {/* Vocabulary strip */}
          <div className="border-t border-brand-navy-800/10 p-5 sm:p-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-brand-navy-600">
              Vocabulary Strip (3 of 10 Words)
            </p>
            <div className="grid gap-2 sm:grid-cols-3">
              {vocab.map((v) => (
                <div key={v.word} className="rounded-xl border border-brand-navy-800/10 p-3 bg-brand-surface">
                  <p className="text-sm font-bold text-brand-navy-900">{v.word}</p>
                  <p className="font-bangla text-sm text-brand-navy-600">{v.meaningBn}</p>
                  <p className="mt-1.5 text-xs leading-5 text-brand-mint-700 font-medium">{v.exampleEn}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={0.1} className="mt-10 text-center">
          <ButtonLink href="/dashboard" size="lg">
            Start Day 1 Free Now
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}