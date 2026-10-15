"use client";

import Link from "next/link";
import {
  Calendar,
  Compass,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Award,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

export function TrackSelectorSection() {
  const tracks = [
    {
      id: "60-day",
      titleEn: "60-Day Foundation Course",
      titleBn: "৬০ দিনের দৈনন্দিন ইংরেজি কোর্স",
      tagline: "Zero to Confident Everyday Speaker",
      levelBadge: "A1 → B1 Fluency",
      badgeTone: "mint",
      duration: "৬০ দিন · দৈনিক ২০ মিনিট",
      descBn:
        "বাংলা থেকে ইংরেজি শেখার সুনির্দিষ্ট প্রতিদিনের পাঠ। ব্যাকরণ, শব্দভান্ডার, কথা বলার অডিও ড্রিল ও কুইজসহ বাস্তব জীবনের স্বাভাবিক ইংরেজি বলতে শিখুন।",
      highlightsBn: [
        "৬০টি সম্পূর্ণ অথর্ড ইন্টারঅ্যাক্টিভ পাঠ",
        "প্রতিটি পাঠে বাংলা ব্যাকরণ ও বাক্য গঠন",
        "দৈনন্দিন কথা বলার উচ্চারণ ও স্পিকিং অনুশীলন",
        "১০+ প্রশ্নের গ্রেডেড কুইজ (৭০% এ পাস)",
      ],
      ctaText: "৬০ দিনের কোর্স দেখুন",
      ctaHref: "/roadmap",
      icon: Calendar,
      accentBorder: "border-brand-mint/40 hover:border-brand-mint",
      accentBg: "bg-brand-mint-100/60 text-brand-mint-800",
      btnVariant: "bg-brand-mint text-white hover:bg-brand-mint-600",
    },
    {
      id: "90-day",
      titleEn: "90-Day Advanced Roadmap",
      titleBn: "৯০ দিনের জিরো টু অ্যাডভান্সড রোডম্যাপ",
      tagline: "Zero (A1) to Advanced (C1) Mastery",
      levelBadge: "A1 → C1 Advanced",
      badgeTone: "blue",
      duration: "৯০ দিন · ৯টি সম্পূর্ণ ধাপ",
      descBn:
        "একেবারে শূন্য থেকে শুরু করে প্রফেশনাল ক্যারিয়ার, জটিল বাক্য বিন্যাস, কর্পোরেট মিটিং, প্রেজেন্টেশন ও নেটিভ লেভেল সাবলীলতা অর্জনের পূর্ণাঙ্গ ৯ ধাপের রোডম্যাপ।",
      highlightsBn: [
        "৯টি পূর্ণাঙ্গ ধাপে ৯০ দিনের সুনির্দিষ্ট মিশন",
        "পেশাগত সিভি, ইন্টারভিউ (STAR মেথড) ও ইমেল",
        "জটিল বাক্য: Inversion, Cleft & Subjunctive",
        "১২০০+ শব্দ, ইডিয়ম ও ফ্রেজাল ভার্বস",
      ],
      ctaText: "৯০ দিনের রোডম্যাপ দেখুন",
      ctaHref: "/roadmap-90",
      icon: Compass,
      accentBorder: "border-brand-blue/40 hover:border-brand-blue",
      accentBg: "bg-brand-blue-100 text-brand-blue-600",
      btnVariant: "bg-brand-navy-800 text-white hover:bg-brand-navy-900",
    },
    {
      id: "ielts",
      titleEn: "IELTS Preparation Masterclass",
      titleBn: "আইইএলটিএস পূর্ণাঙ্গ প্রস্তুতি হাব",
      tagline: "Target Band 7.5 – 8.5 Blueprint",
      levelBadge: "Academic & General",
      badgeTone: "amber",
      duration: "৪টি মডিউল · সেলফ পেসড",
      descBn:
        "বাংলাভাষী শিক্ষার্থীদের জন্য বিশেষভাবে তৈরি চার মডিউলের কৌশল। স্পিকিং কিউ কার্ড (PPF), রাইটিং ব্যান্ড ৮.৫ টেমপ্লেট, রিডিং ট্র্যাপস এবং ইন্টারঅ্যাক্টিভ ক্যালকুলেটর।",
      highlightsBn: [
        "স্পিকিং পার্ট ১, ২ ও ৩ এর মডেল উত্তর ও PEEL মেথড",
        "রাইটিং টাস্ক ১ ও ২ এর ব্যান্ড ৮.৫ এসে টেমপ্লেট",
        "True/False/Not Given গোল্ডেন রুলস ও টাইম সেভিং",
        "ইন্টারঅ্যাক্টিভ ব্যান্ড ক্যালকুলেটর ও ভোকেব ব্যাংক",
      ],
      ctaText: "IELTS প্রস্তুতি শুরু করুন",
      ctaHref: "/ielts",
      icon: GraduationCap,
      accentBorder: "border-brand-amber/40 hover:border-brand-amber",
      accentBg: "bg-brand-amber-100 text-brand-amber-600",
      btnVariant: "bg-brand-mint-700 text-white hover:bg-brand-mint-800",
    },
  ];

  return (
    <section id="tracks" className="scroll-mt-24 bg-brand-cream/60 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge variant="mint" className="mb-3 px-3 py-1 text-xs">
            <Sparkles className="h-3.5 w-3.5" /> 3 Dedicated Learning Paths
          </Badge>
          <h2 className="font-bangla text-3xl font-bold tracking-tight text-brand-navy-900 sm:text-4xl">
            আপনার লক্ষ্য অনুযায়ী পথ বেছে নিন
          </h2>
          <p className="mt-4 font-bangla text-lg leading-8 text-brand-navy-700">
            দৈনন্দিন যোগাযোগ, প্রফেশনাল ক্যারিয়ার নাকি উচ্চশিক্ষার আইইএলটিএস? শূন্য থেকে শুরু করে
            সর্বোচ্চ অ্যাডভান্সড পর্যায় পর্যন্ত তিনটি সম্পূর্ণ আলাদা কোর্স ট্র্যাক।
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tracks.map((track, i) => {
            const Icon = track.icon;
            return (
              <Reveal key={track.id} delay={i * 0.08}>
                <div
                  className={`group relative flex h-full flex-col justify-between rounded-3xl border bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover ${track.accentBorder}`}
                >
                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${track.accentBg}`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-brand-navy/5 px-2.5 py-1 text-xs font-bold text-brand-navy-800">
                        {track.levelBadge}
                      </span>
                    </div>

                    {/* Titles */}
                    <div className="mt-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-mint-700">
                        {track.titleEn}
                      </p>
                      <h3 className="font-bangla mt-1 text-2xl font-bold text-brand-navy-900">
                        {track.titleBn}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-brand-navy-600">
                        {track.duration}
                      </p>
                    </div>

                    <p className="font-bangla mt-3 text-sm leading-6 text-brand-navy-700">
                      {track.descBn}
                    </p>

                    {/* Highlights */}
                    <div className="mt-6 border-t border-brand-navy-800/10 pt-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-navy-700 mb-3">
                        কোর্সের বিশেষত্ব:
                      </p>
                      <ul className="space-y-2.5">
                        {track.highlightsBn.map((hl, hlIdx) => (
                          <li
                            key={hlIdx}
                            className="font-bangla flex items-start gap-2.5 text-xs leading-5 text-brand-navy-800"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-mint" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 pt-4">
                    <Link
                      href={track.ctaHref}
                      className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all shadow-sm ${track.btnVariant}`}
                    >
                      <span className="font-bangla">{track.ctaText}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
