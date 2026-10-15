import type { Phase } from "./types";

/**
 * The six phases of the 60-day Lingora curriculum.
 * Each phase is a ten-day unit with a clear teaching goal.
 */
export const phases: Phase[] = [
  {
    number: 1,
    title: "Foundations",
    titleBn: "ভিত্তি নির্মাণ",
    description:
      "Build the skeleton of English: sentence structure, pronouns, the verb 'to be', and the present simple — everything a beginner needs to say basic sentences.",
    descriptionBn:
      "ইংরেজি বাক্যের গঠন, pronoun, am/is/are এবং Present Simple শিখুন — একজন শুরুকারীর জন্য প্রয়োজনীয় সব ভিত্তি।",
    startDay: 1,
    endDay: 10,
  },
  {
    number: 2,
    title: "Essential Grammar",
    titleBn: "প্রয়োজনীয় ব্যাকরণ",
    description:
      "Present Continuous, prepositions, countable nouns, and the past tenses — the grammar that makes everyday conversation possible.",
    descriptionBn:
      "Present Continuous, preposition, countable noun এবং past tense শিখুন — দৈনন্দিন কথোপকথনের জন্য জরুরি ব্যাকরণ।",
    startDay: 11,
    endDay: 20,
  },
  {
    number: 3,
    title: "Building Confidence",
    titleBn: "আত্মবিশ্বাস গঠন",
    description:
      "Future forms, modal verbs, comparisons, and the Present Perfect — plus a review of the mistakes Bengali speakers commonly make.",
    descriptionBn:
      "Future tense, modal verb, তুলনা ও Present Perfect শিখুন — সাথে বাংলাভাষীদের সাধারণ ভুলগুলো সংশোধন করুন।",
    startDay: 21,
    endDay: 30,
  },
  {
    number: 4,
    title: "Everyday Communication",
    titleBn: "দৈনন্দিন যোগাযোগ",
    description:
      "Real situations: greetings, family, shopping, restaurants, directions, phone calls, and appointments — the language of daily life.",
    descriptionBn:
      "বাস্তব পরিস্থিতি: অভিবাদন, পরিবার, কেনাকাটা, রেস্টুরেন্ট, পথ নির্দেশনা, ফোন এবং অ্যাপয়েন্টমেন্ট — দৈনন্দিন জীবনের ভাষা।",
    startDay: 31,
    endDay: 40,
  },
  {
    number: 5,
    title: "Practical Fluency",
    titleBn: "ব্যবহারিক সাবলীলতা",
    description:
      "Travel, hobbies, opinions, instructions, storytelling, and longer conversations — speak English with growing ease and confidence.",
    descriptionBn:
      "ভ্রমণ, শখ, মতামত, নির্দেশনা, গল্প বলা এবং দীর্ঘ কথোপকথন — আত্মবিশ্বাসের সাথে ইংরেজি বলুন।",
    startDay: 41,
    endDay: 50,
  },
  {
    number: 6,
    title: "Real-World English",
    titleBn: "বাস্তব জগতের ইংরেজি",
    description:
      "Job interviews, workplace communication, emails, formal and informal English — and the final assessment of your 60-day journey.",
    descriptionBn:
      "চাকরির ইন্টারভিউ, কর্মক্ষেত্র, ইমেইল, আনুষ্ঠানিক ও অনানুষ্ঠানিক ইংরেজি — এবং আপনার ৬০ দিনের যাত্রার চূড়ান্ত মূল্যায়ন।",
    startDay: 51,
    endDay: 60,
  },
];

export function getPhaseByNumber(number: number): Phase {
  const phase = phases.find((p) => p.number === number);
  if (!phase) throw new Error(`Unknown phase number: ${number}`);
  return phase;
}

export function getPhaseForDay(day: number): Phase {
  const phase = phases.find((p) => day >= p.startDay && day <= p.endDay);
  if (!phase) throw new Error(`Day ${day} does not belong to any phase`);
  return phase;
}