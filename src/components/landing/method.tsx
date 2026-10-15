import { BookOpen, CalendarCheck, GraduationCap, Languages, MessageSquare, Target } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const STEPS = [
  {
    icon: Languages,
    step: "Step 1",
    title: "Daily Guided Lesson",
    titleBn: "প্রতিদিন একটি পাঠ",
    desc: "Targeted daily missions with grammar formulas, real-world dialogues, and essential vocabulary explained clearly in Bengali.",
  },
  {
    icon: BookOpen,
    step: "Step 2",
    title: "Read & Understand",
    titleBn: "পড়া ও বাংলা অনুবাদ",
    desc: "Clear grammar breakdowns with side-by-side Bengali translations, pronunciation tips, and zero confusing academic jargon.",
  },
  {
    icon: MessageSquare,
    step: "Step 3",
    title: "Active Speaking Drills",
    titleBn: "উচ্চারণে কথা বলা",
    desc: "Structured speaking prompts, conversation shadowing, and self-recording guidelines for real-life confidence.",
  },
  {
    icon: Target,
    step: "Step 4",
    title: "Quiz & Immediate Feedback",
    titleBn: "কুইজ দিয়ে যাচাই",
    desc: "Interactive 10-question evaluation at the end of each lesson. Passing with 70%+ ensures true mastery before moving forward.",
  },
];

export function MethodSection() {
  return (
    <section id="method" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-mint-600">
            The Lingora Methodology
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy-900 sm:text-4xl">
            How The Structured System Works
          </h2>
          <p className="mt-4 text-base leading-7 text-brand-navy-600">
            Unlike rote-memorization courses, LINGORA teaches you how to construct sentences in English naturally from Bengali thought patterns — progressive, structured, and exam-proven.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-brand-navy-800/10 bg-brand-cream/40 p-6 transition-all hover:-translate-y-1 hover:shadow-cardHover hover:border-brand-mint/40">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy-800 text-brand-mint-100 transition-colors group-hover:bg-brand-mint group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-mint-600">{s.step}</p>
                <div className="mt-1.5 flex items-center gap-1.5 flex-wrap">
                  <h3 className="text-base font-bold text-brand-navy-900">{s.title}</h3>
                  <span className="font-bangla text-xs text-brand-mint-700 font-semibold">({s.titleBn})</span>
                </div>
                <p className="mt-2 text-xs leading-5 text-brand-navy-600">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-navy-800 p-8 sm:flex-row sm:p-10 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-mint text-white">
                <CalendarCheck className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Only 20 Minutes a Day</h3>
                <p className="mt-1 max-w-xl text-xs sm:text-sm leading-6 text-brand-mint-100/90 font-bangla">
                  ব্যস্ত সময়সূচির জন্য ডিজাইন করা — প্রতিদিনের ছোট পাঠ, হোমওয়ার্ক আর স্ট্রিক আপনাকে টেনে রাখবে। ৬০ ও ৯০ দিনের কোর্সে দৈনন্দিন কাজ, চাকরির ইন্টারভিউ এবং আইইএলটিএস পরীক্ষা পর্যন্ত ইংরেজিতে আত্মবিশ্বাস তৈরি হবে।
                </p>
              </div>
            </div>
            <GraduationCap className="hidden h-16 w-16 text-brand-navy-700 sm:block" aria-hidden />
          </div>
        </Reveal>
      </div>
    </section>
  );
}