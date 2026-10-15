"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Do I need prior English knowledge to get started?",
    qBn: "আমার কি আগে থেকে ইংরেজি জানতে হবে?",
    a: "না। স্পোকেন ইংলিশের ৬০ দিনের ফাউন্ডেশন কোর্স শুরু হয় একদম শূন্য থেকে — বর্ণমালা বা মুখস্থ বিদ্যা নয়, বরং সহজ বাংলা চিন্তা কীভাবে সাবলীল ইংরেজি বাক্যে রূপান্তর করতে হয়। প্রতিটি নিয়ম বাংলায় স্পষ্ট করে ব্যাখ্যা করা হয়েছে।",
  },
  {
    q: "What is the difference between 60-Day and 90-Day Spoken English?",
    qBn: "৬০ দিন এবং ৯০ দিনের স্পোকেন ইংলিশ কোর্সের পার্থক্য কী?",
    a: "৬০ দিনের কোর্সটি আপনাকে দৈনন্দিন আলাপচারিতা, কেনাকাটা, কর্মক্ষেত্র ও মৌলিক সাবলীলতায় (A1-B1) দক্ষ করে তোলে। ৯০ দিনের অ্যাডভান্সড কোর্সটি আপনাকে যুক্তি-তর্ক, প্রেজেন্টেশন, জটিল গ্রামার প্যাটার্ন এবং নেটিভ লেভেল ফ্লুয়েন্সিতে (C1) পৌঁছে দেয়।",
  },
  {
    q: "How does the IELTS Preparation track work?",
    qBn: "আইইএলটিএস প্রস্তুতি ট্র্যাক কীভাবে কাজ করে?",
    a: "আইইএলটিএস ট্র্যাকে দুটি সুনির্দিষ্ট কোর্স রয়েছে: ৬০ দিনের ইন্টেনসিভ কোর্স (টার্গেট ব্যান্ড ৭.০-৭.৫) এবং ৯০ দিনের মাস্টার ব্লুপ্রিন্ট (টার্গেট ব্যান্ড ৮.০-৮.৫+)। এতে স্পিকিং কিউ কার্ড, রাইটিং টাস্ক ১ ও ২ এর ফরম্যাট, রিডিং স্কিমিং/স্ক্যানিং এবং লিসেনিং ট্যাকটিক্স পুঙ্খানুপুঙ্খভাবে সাজানো রয়েছে।",
  },
  {
    q: "How much time should I invest each day?",
    qBn: "প্রতিদিন কতটুকু সময় দিতে হবে?",
    a: "প্রতিটি দৈনিক পাঠের জন্য মাত্র ২০ থেকে ২৫ মিনিট সময় যথেষ্ট। ব্যস্ত দিনেও একটি পাঠ পড়ে কুইজ সম্পন্ন করলে আপনার ধারাবাহিকতার স্ট্রিক বজায় থাকবে।",
  },
  {
    q: "Is my learning progress automatically saved?",
    qBn: "আমার অগ্রগতি কি সংরক্ষিত থাকবে?",
    a: "হ্যাঁ — আপনার সম্পন্ন করা পাঠ, কুইজের স্কোর, সংগৃহীত শব্দভাণ্ডার এবং স্ট্রিক স্বয়ংক্রিয়ভাবে ব্রাউজারে ও অ্যাকাউন্টে সংরক্ষিত থাকে, যাতে আপনি যেকোনো সময় পুনরায় সেখান থেকেই শুরু করতে পারেন।",
  },
];

export function FaqSection() {
  const reduce = useReducedMotion();
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="container-page max-w-3xl">
        <Reveal className="text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-amber-600">
            Questions & Answers
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-brand-navy-600">
            Answers to common questions about our bilingual Spoken English and IELTS tracks
          </p>
        </Reveal>

        <div className="mt-10 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={i * 0.05}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-colors",
                    isOpen
                      ? "border-brand-mint-200 bg-brand-mint-100/50"
                      : "border-brand-navy-800/10 bg-white"
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm sm:text-base font-bold text-brand-navy-900">
                        {faq.q}
                      </span>
                      <span className="font-bangla text-xs text-brand-mint-700 font-semibold">
                        {faq.qBn}
                      </span>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-brand-navy-600 transition-transform",
                        isOpen && "rotate-180 text-brand-mint-600"
                      )}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduce ? undefined : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <p className="px-5 pb-5 font-bangla text-sm leading-7 text-brand-navy-700">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}