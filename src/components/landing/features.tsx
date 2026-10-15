import { BookOpenCheck, BrainCircuit, CheckCircle2, Headphones, MessageSquareText, NotebookPen } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const FEATURES = [
  {
    icon: BookOpenCheck,
    title: "60 & 90-Day Spoken English",
    titleBn: "৬০ ও ৯০ দিনের স্পোকেন ইংলিশ",
    desc: "From basic A1 greetings to C1 native conversation, business presentations, and debates with step-by-step Bengali guides.",
  },
  {
    icon: BrainCircuit,
    title: "Dedicated IELTS Roadmaps",
    titleBn: "আইইএলটিএস প্রস্তুতি (ব্যান্ড ৭.০ - ৮.৫+)",
    desc: "Complete 60-Day Intensive & 90-Day Master curriculums covering Speaking cue cards, Writing Task 1/2, Reading & Listening.",
  },
  {
    icon: MessageSquareText,
    title: "Active Speaking Drills",
    titleBn: "কথা বলার বাস্তব অনুশীলন",
    desc: "Daily real-life dialogues, pronunciation audio guides, and shadowing exercises to overcome hesitation and build fluency.",
  },
  {
    icon: NotebookPen,
    title: "Academic & Everyday Vocab",
    titleBn: "শব্দভান্ডার ও ফ্ল্যাশ কার্ড",
    desc: "Over 1,200 curated words with Bengali meanings, example sentences, parts of speech, and bookmarking to master usage.",
  },
  {
    icon: CheckCircle2,
    title: "Live Dashboard & Streak",
    titleBn: "ড্যাশবোর্ড ও অগ্রগতি ট্র্যাকিং",
    desc: "Track daily study streaks, completion rates, weekly time investment, and milestone achievement badges in real time.",
  },
  {
    icon: Headphones,
    title: "Daily Quizzes & Band Calculator",
    titleBn: "কুইজ ও ব্যান্ড ক্যালকুলেটর",
    desc: "Interactive quizzes after every lesson with instant feedback, plus an IELTS Academic & General band score calculator.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-blue-600">
            Platform Capabilities
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy-900 sm:text-4xl">
            Everything You Need in One Place
          </h2>
          <p className="mt-4 text-base leading-7 text-brand-navy-600">
            A comprehensive bilingual ecosystem designed specifically for Bengali speakers to achieve confident Spoken English and top-tier IELTS band scores.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-brand-navy-800/10 bg-brand-cream/40 p-6 transition-all hover:-translate-y-1 hover:shadow-cardHover hover:border-brand-mint/40">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-mint-100 text-brand-mint-700">
                  <f.icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h3 className="text-base font-bold text-brand-navy-900">{f.title}</h3>
                  <span className="font-bangla text-xs text-brand-mint-700 font-semibold">({f.titleBn})</span>
                </div>
                <p className="mt-2 text-xs leading-5 text-brand-navy-600">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}