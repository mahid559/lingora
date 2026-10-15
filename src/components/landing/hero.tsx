"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle2, Flame, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function DashboardPreview() {
  const reduce = useReducedMotion();
  const lessons = Array.from({ length: 14 }, (_, i) => i + 1).map((n) => ({
    day: n,
    done: n <= 7,
    current: n === 8,
  }));

  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 24, rotateX: 8 }}
      animate={reduce ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mt-14 w-full max-w-4xl"
    >
      <div className="overflow-hidden rounded-2xl border border-brand-navy-800/10 bg-white shadow-pop">
        {/* Mock browser chrome */}
        <div className="flex items-center gap-2 border-b border-brand-navy-800/10 bg-brand-cream px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-rose/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-amber/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-mint" />
          <span className="ml-3 hidden rounded-md bg-white px-3 py-0.5 text-[0.7rem] font-medium text-brand-navy-600 sm:block">
            app.lingora.com/dashboard
          </span>
        </div>

        <div className="grid gap-4 p-4 sm:grid-cols-[1fr_1.4fr] sm:p-5">
          {/* Sidebar mock */}
          <div className="hidden rounded-xl bg-brand-navy-800 p-3 sm:block">
            <div className="mb-3 flex items-center gap-2 px-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-navy-700">
                <span className="text-xs font-extrabold text-brand-mint-100">L</span>
              </div>
              <span className="text-sm font-bold text-white">LINGORA</span>
            </div>
            {["ড্যাশবোর্ড", "রোডম্যাপ", "লেসন", "ভোকাবুলারি", "প্রগ্রেস"].map((item, i) => (
              <div
                key={item}
                className={`mb-1 rounded-lg px-2.5 py-1.5 text-xs font-semibold ${
                  i === 0 ? "bg-brand-mint text-white" : "text-brand-mint-100/70"
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Main mock */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-brand-navy-900">শুভ সকাল, রাফসান! 👋</div>
                <div className="text-xs text-brand-navy-600">আজ দিন ৮ — Present Simple</div>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-brand-amber-100 px-2.5 py-1 text-xs font-bold text-brand-amber-600">
                <Flame className="h-3.5 w-3.5" /> 7 দিন
              </div>
            </div>

            {/* Mini progress bar */}
            <div className="rounded-xl border border-brand-navy-800/10 p-3">
              <div className="mb-1.5 flex justify-between text-xs font-semibold text-brand-navy-700">
                <span>কোর্সের অগ্রগতি</span>
                <span>১২%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-brand-navy/10">
                <div className="h-full w-[12%] rounded-full bg-brand-mint" />
              </div>
            </div>

            {/* Lesson grid mock */}
            <div className="grid grid-cols-7 gap-1.5">
              {lessons.map((l) => (
                <div
                  key={l.day}
                  className={`flex h-8 items-center justify-center rounded-lg text-[0.65rem] font-bold ${
                    l.current
                      ? "bg-brand-mint text-white ring-2 ring-brand-mint-200"
                      : l.done
                        ? "bg-brand-mint-100 text-brand-mint-800"
                        : "bg-brand-navy/5 text-brand-navy-600/50"
                  }`}
                >
                  {l.day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2 rounded-xl bg-brand-mint-100 p-2.5 text-xs font-semibold text-brand-mint-800">
                <BookOpen className="h-4 w-4" /> ৭টি পাঠ সম্পন্ন
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-brand-blue-100 p-2.5 text-xs font-semibold text-brand-blue-600">
                <CheckCircle2 className="h-4 w-4" /> কুইজ ৮২% গড়
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-brand-navy-600">
        উপরেরটি একটি উদাহরণ ড্যাশবোর্ড — শেখা শুরু করলে আপনার নিজের প্রকৃত অগ্রগতি এখানেই দেখা যাবে।
      </p>
    </motion.div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
      {/* Soft background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-brand-mint-100 blur-3xl" />
        <div className="absolute -left-24 top-40 h-80 w-80 rounded-full bg-brand-blue-100 blur-3xl" />
      </div>

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="mint" className="mb-5 px-3 py-1 text-sm">
              <Sparkles className="h-3.5 w-3.5" />
              বাংলা থেকে ইংরেজি: ৬০ দিন · ৯০ দিন · IELTS প্রস্তুতি
            </Badge>
          </motion.div>

          <motion.h1
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-bangla text-4xl font-bold leading-tight tracking-tight text-brand-navy-900 sm:text-5xl lg:text-6xl"
          >
            ইংরেজি শিখুন —{" "}
            <span className="text-brand-mint-600">জিরো থেকে অ্যাডভান্সড লেভেলে।</span>
          </motion.h1>

          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mx-auto mt-5 max-w-2xl font-bangla text-lg leading-8 text-brand-navy-700"
          >
            লিঙ্গোরায় বাংলা থেকে ইংরেজি — ৬০ দিনের স্পোকেন ফাউন্ডেশন, ৯০ দিনের অ্যাডভান্সড ফ্লুয়েন্সি এবং
            আইইএলটিএস ব্যান্ড ৭.৫+ প্রস্তুতি। ধাপে ধাপে, উদাহরণ, উচ্চারণ, কুইজ আর দৈনন্দিন অনুশীলনে
            অর্জন করুন আন্তর্জাতিক মানের দক্ষতা।
          </motion.p>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <ButtonLink href="/dashboard" size="lg" className="w-full sm:w-auto">
              বিনামূল্যে শুরু করুন
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/roadmap-90" variant="outline" size="lg" className="w-full sm:w-auto">
              ৯০ দিনের রোডম্যাপ
            </ButtonLink>
            <ButtonLink href="/ielts" variant="secondary" size="lg" className="w-full sm:w-auto">
              IELTS প্রস্তুতি হাব
            </ButtonLink>
          </motion.div>

          <motion.p
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="mt-4 text-sm text-brand-navy-600"
          >
            অ্যাকাউন্ট লাগবে না · ক্রেডিট কার্ড লাগবে না · অগ্রগতি আপনার ডিভাইসে সংরক্ষিত
          </motion.p>
        </div>

        <DashboardPreview />
      </div>
    </section>
  );
}