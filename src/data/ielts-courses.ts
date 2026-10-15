export interface IeltsLessonDay {
  day: number;
  track: "60-day" | "90-day";
  phase: number;
  phaseTitleEn: string;
  phaseTitleBn: string;
  module: "Speaking" | "Writing" | "Reading" | "Listening" | "Full Mock";
  titleEn: string;
  titleBn: string;
  targetBand: "6.5+" | "7.0+" | "7.5+" | "8.0+" | "8.5+";
  durationMinutes: number;
  objectiveEn: string;
  banglaExplanation: string;
  dailyTasks: string[];
  keyVocabulary: { word: string; meaningBn: string; collocation: string }[];
  proTipBn: string;
}

export interface IeltsCoursePhase {
  number: number;
  titleEn: string;
  titleBn: string;
  startDay: number;
  endDay: number;
  focusEn: string;
  descriptionBn: string;
}

/* ========================================================================== */
/* 60-DAY IELTS INTENSIVE TRACK (Target Band 7.0 - 7.5)                       */
/* ========================================================================== */

export const ielts60Phases: IeltsCoursePhase[] = [
  {
    number: 1,
    titleEn: "Diagnostic & Core Formats",
    titleBn: "ডায়াগনস্টিক টেস্ট ও ফরম্যাট পরিচিতি",
    startDay: 1,
    endDay: 10,
    focusEn: "Band descriptors, test format analysis, and base scoring",
    descriptionBn: "চারটি মডিউলের অফিসিয়াল ফরম্যাট, স্কোরিং ক্রাইটেরিয়া ও প্রাথমিক বেসলাইন মক টেস্ট।",
  },
  {
    number: 2,
    titleEn: "Listening Mastery & Trap Decoding",
    titleBn: "লিসেনিং মাস্টারি ও ফাঁদ চিহ্নিতকরণ",
    startDay: 11,
    endDay: 20,
    focusEn: "Sections 1–4, native distractors, accents, spelling accuracy",
    descriptionBn: "সেকশন ১ থেকে ৪ এর কৌশল, সেলফ-কারেকশন ফাঁদ এবং ব্রিটিশ-অস্ট্রেলিয়ান অ্যাকসেন্ট বোঝাপড়া।",
  },
  {
    number: 3,
    titleEn: "Reading Strategies & Speed Scanning",
    titleBn: "রিডিং স্কিল, স্কিমিং ও টাইম ম্যানেজমেন্ট",
    startDay: 21,
    endDay: 30,
    focusEn: "Skimming, Scanning, True/False/Not Given, Matching Headings",
    descriptionBn: "২০ মিনিটে প্যাসেজ সমাধান, T/F/NG এর গোল্ডেন রুলস এবং হেডিং ম্যাচিং শর্টকাট।",
  },
  {
    number: 4,
    titleEn: "Writing Task 1 & 2 Blueprints",
    titleBn: "রাইটিং টাস্ক ১ ও ২ ব্যান্ড ৭.৫+ টেমপ্লেট",
    startDay: 31,
    endDay: 40,
    focusEn: "Academic charts, letters, 4-paragraph essay formula, cohesive devices",
    descriptionBn: "গ্রাফ ও পাই চার্টের ওভারভিউ, ৪-প্যারাগ্রাফ এসে রাইটিং ও ব্যান্ড ৮ কোহেসিভ ডিভাইসেস।",
  },
  {
    number: 5,
    titleEn: "Speaking Fluency, Cue Cards & Pronunciation",
    titleBn: "স্পিকিং ফ্লুয়েন্সি, কিউ কার্ড ও উচ্চারণ ড্রিল",
    startDay: 41,
    endDay: 50,
    focusEn: "Part 1 topics, Cue Card PPF technique, Part 3 abstract reasoning (PEEL)",
    descriptionBn: "পার্ট ১ এর উত্তর বড় করার নিয়ম, কিউ কার্ডে পিপিএফ টেকনিক ও বাংলাভাষীদের উচ্চারণ ত্রুটি দূরীকরণ।",
  },
  {
    number: 6,
    titleEn: "Timed Full Mocks & Exam Execution",
    titleBn: "ফুল মক টেস্ট ও পরীক্ষার দিনের পূর্ণাঙ্গ স্ট্র্যাটেজি",
    startDay: 51,
    endDay: 60,
    focusEn: "Cambridge mock marathons, error logs, and exam day psychological readiness",
    descriptionBn: "ঘড়ি ধরে পূর্ণাঙ্গ মক টেস্ট, ভুল পর্যালোচনা ও কাঙ্ক্ষিত ব্যান্ড ৭.৫ অর্জনের ফাইনাল প্রস্তুতি।",
  },
];

export const ielts60Lessons: IeltsLessonDay[] = Array.from({ length: 60 }, (_, i) => {
  const day = i + 1;
  const phaseNum = Math.floor((day - 1) / 10) + 1;
  const phase = ielts60Phases[phaseNum - 1];

  const modules: IeltsLessonDay["module"][] = [
    "Listening",
    "Reading",
    "Writing",
    "Speaking",
    "Listening",
    "Reading",
    "Writing",
    "Speaking",
    "Full Mock",
    "Full Mock",
  ];
  const mod = modules[(day - 1) % 10];

  const lessonTitles: { en: string; bn: string; obj: string; tip: string } = {
    en: `Day ${day}: ${mod} Targeted Strategy Drill`,
    bn: `দিন ${day}: ${mod} মডিউল নিবিড় প্রস্তুতি ও প্র্যাকটিস`,
    obj: `Master key exam mechanics for ${mod} and achieve high band accuracy.`,
    tip: `প্রতিটি প্রশ্নের সময় অপশনের পরিবর্তে প্রশ্নের মূল কি-ওয়ার্ডে মনোযোগ রাখুন।`,
  };

  // Specific tailored highlights
  if (day === 1) {
    lessonTitles.en = "Diagnostic Test & IELTS Band System Demystified";
    lessonTitles.bn = "আইইএলটিএস ডায়াগনস্টিক টেস্ট ও ব্যান্ড সিস্টেম বিশ্লেষণ";
    lessonTitles.obj = "Take a full Cambridge baseline mock to understand current standing.";
    lessonTitles.tip = "প্রথম মকে স্কোর কম আসলে ঘাবড়াবেন না; এটি কেবল আপনার দুর্বলতার ম্যাপ তৈরি করতে।";
  } else if (day === 15) {
    lessonTitles.en = "Listening Section 3 & 4: Decoding Academic Lectures";
    lessonTitles.bn = "লিসেনিং সেকশন ৩ ও ৪: অ্যাকাডেমিক লেকচারের কি-ওয়ার্ড ট্র্যাকিং";
    lessonTitles.obj = "Tackle fast un-paused lectures and multiple speaker educational debates.";
    lessonTitles.tip = "বক্তা যখন 'however' বা 'actually' বলবে তখন ৯০% ক্ষেত্রে উত্তর পরিবর্তন হয়।";
  } else if (day === 25) {
    lessonTitles.en = "Reading: Mastering True, False & Not Given Traps";
    lessonTitles.bn = "রিডিং: True / False / Not Given ট্র্যাপ থেকে মুক্তির ফর্মুলা";
    lessonTitles.obj = "Learn the 100% elimination method to separate False from Not Given.";
    lessonTitles.tip = "যদি প্যাসেজে পর্যাপ্ত প্রমাণ না থাকে তবে অনুমান না করে সরাসরি Not Given দাগান।";
  } else if (day === 35) {
    lessonTitles.en = "Writing Task 2: The 4-Paragraph Master Formula";
    lessonTitles.bn = "রাইটিং টাস্ক ২: ৪-প্যারাগ্রাফ মাস্টার এসে স্ট্রাকচার";
    lessonTitles.obj = "Write a coherent 250+ word essay with Thesis and Topic Sentences.";
    lessonTitles.tip = "কখনোই ৩টির বেশি মূল যুক্তি আনবেন না; ২টি যুক্তি গভীর উদাহরণসহ ব্যাখ্যা করলেই ব্যান্ড ৮।";
  } else if (day === 45) {
    lessonTitles.en = "Speaking Part 2: 2-Minute Cue Card with PPF Method";
    lessonTitles.bn = "স্পিকিং পার্ট ২: পিপিএফ মেথডে একটানা ২ মিনিট কথা বলার ম্যাজিক";
    lessonTitles.obj = "Structure speech into Past, Present, and Future blocks using 1-minute notes.";
    lessonTitles.tip = "১ মিনিটের নোটস নেওয়ার সময় পুরো বাক্য না লিখে শুধু ৩টি বুলেটে ৩টি শব্দ লিখুন।";
  } else if (day === 60) {
    lessonTitles.en = "Grand 60-Day Assessment & Exam Readiness Checklist";
    lessonTitles.bn = "৬০ দিনের গ্র্যান্ড অ্যাসেসমেন্ট ও পরীক্ষার দিনের চূড়ান্ত চেকলিস্ট";
    lessonTitles.obj = "Simulate complete test under strict examination conditions.";
    lessonTitles.tip = "পরীক্ষার আগের রাতে গভীর ঘুম দিন এবং আত্মবিশ্বাসের সাথে পরীক্ষা হলে ঢুকুন।";
  }

  return {
    day,
    track: "60-day",
    phase: phaseNum,
    phaseTitleEn: phase.titleEn,
    phaseTitleBn: phase.titleBn,
    module: mod,
    titleEn: lessonTitles.en,
    titleBn: lessonTitles.bn,
    targetBand: day < 20 ? "6.5+" : day < 40 ? "7.0+" : day < 50 ? "7.5+" : "8.0+",
    durationMinutes: 30,
    objectiveEn: lessonTitles.obj,
    banglaExplanation: `আজকের ${mod} পাঠে আইইএলটিএস ব্যান্ড ৭.৫ লক্ষ্য অর্জনের জন্য সুনির্দিষ্ট টেকনিক বাংলায় সহজভাবে বোঝানো হয়েছে।`,
    dailyTasks: [
      `অফিসিয়াল ক্যামব্রিজ টেস্ট বুক থেকে ${mod} সেকশন সলভ করুন`,
      "আজকের ৩টি নতুন অ্যাকাডেমিক ভোকাবুলারি নিজের বাক্যে প্রয়োগ করুন",
      "ভুল হওয়া প্রশ্নের কারণ ডায়রিতে নোট করুন",
    ],
    keyVocabulary: [
      { word: "Substantiate", meaningBn: "প্রমাণ দিয়ে সত্যতা প্রমাণ করা", collocation: "substantiate claims" },
      { word: "Comprehensive", meaningBn: "সর্বাঙ্গীন বা পুঙ্খানুপুঙ্খ", collocation: "comprehensive analysis" },
      { word: "Perceive", meaningBn: "উপলব্ধি করা বা দেখা", collocation: "widely perceived" },
    ],
    proTipBn: lessonTitles.tip,
  };
});

/* ========================================================================== */
/* 90-DAY IELTS MASTER BLUEPRINT (Target Band 8.0 - 8.5)                      */
/* ========================================================================== */

export const ielts90Phases: IeltsCoursePhase[] = [
  {
    number: 1,
    titleEn: "Grammar Range & Academic Foundations",
    titleBn: "অ্যাকাডেমিক ব্যাকরণ ও বাক্য বৈচিত্র্য",
    startDay: 1,
    endDay: 10,
    focusEn: "Complex sentence synthesis, subordinate clauses, passive forms",
    descriptionBn: "আইইএলটিএস ব্যান্ড ৮ স্তরের ব্যাকরণ কাঠামো: প্যাসিভ ভয়েস, কম্পাউন্ড ও কমপ্লেক্স সেন্টেন্স।",
  },
  {
    number: 2,
    titleEn: "Lexical Resource & Collocations Mastery",
    titleBn: "উচ্চমানের অ্যাকাডেমিক ভোকাবুলারি ও কোলোকেশন",
    startDay: 11,
    endDay: 20,
    focusEn: "Topic-specific vocabulary: Environment, Technology, Economy, Society",
    descriptionBn: "আইইএলটিএসের ঘন ঘন আসা টপিকভিত্তিক ব্যান্ড ৮.৫ ভোকাবুলারি ব্যাংক ও ন্যাচারাল কোলোকেশন।",
  },
  {
    number: 3,
    titleEn: "Listening Accents & Section 4 Lectures",
    titleBn: "লিসেনিং নেটিভ অ্যাকসেন্ট ও সেকশন ৪ স্পেশালাইজেশন",
    startDay: 21,
    endDay: 30,
    focusEn: "Decoding Australian, British, Scottish accents, fast note-taking",
    descriptionBn: "দ্রুতগতির নেটিভ অ্যাকসেন্ট বোঝা এবং সেকশন ৪ এর একটানা লেকচার থেকে সঠিক শব্দ ধরা।",
  },
  {
    number: 4,
    titleEn: "Academic Reading Speed & Dense Traps",
    titleBn: "অ্যাকাডেমিক রিডিং গতি ও জটিল প্যাসেজ সমাধান",
    startDay: 31,
    endDay: 40,
    focusEn: "Passage 3 complexity, Matching Headings, Summary completion with words from box",
    descriptionBn: "প্যাসেজ ৩ এর উচ্চস্তরের জার্নাল ও বৈজ্ঞানিক আর্টিকেল বিশ্লেষণ ও দ্রুত রিডিং ট্রিকস।",
  },
  {
    number: 5,
    titleEn: "Writing Task 1 Academic & General Perfection",
    titleBn: "রাইটিং টাস্ক ১ এর নিখুঁত প্রেজেন্টেশন",
    startDay: 41,
    endDay: 50,
    focusEn: "Process diagrams, Maps, Complex trend lines, Formal letters",
    descriptionBn: "ম্যাপের তুলনা ও প্রসেস ডায়াগ্রামের নির্ভুল সিকোয়েন্সিং এবং ট্রেন্ডের বৈচিত্র্যময় ভাষা।",
  },
  {
    number: 6,
    titleEn: "Writing Task 2 Band 8.5 Argumentation",
    titleBn: "রাইটিং টাস্ক ২ গভীর আর্গুমেন্টেশন ও থিসিস ডিফেন্স",
    startDay: 51,
    endDay: 60,
    focusEn: "Counterarguments, Hedging, Nuanced thesis, Cohesion & Coherence 9.0",
    descriptionBn: "হেজিং (Hedging) টেকনিক, পাল্টা যুক্তি খন্ডন ও আন্তর্জাতিক স্তরের প্রাতিষ্ঠানিক রচনা শৈলী।",
  },
  {
    number: 7,
    titleEn: "Speaking Part 1–3 Complete Fluency & Idioms",
    titleBn: "স্পিকিং পার্ট ১, ২ ও ৩ ন্যাচারাল ফ্লুয়েন্সি ও ইডিয়ম",
    startDay: 61,
    endDay: 70,
    focusEn: "Less common idiomatic language, discourse markers, spontaneous PEEL speech",
    descriptionBn: "ন্যাচারাল ফিলার্স, ইডিয়ম্যাটিক কোলোকেশন এবং পরীক্ষকের সাথে প্রাণবন্ত বুদ্ধিবৃত্তিক আলোচনা।",
  },
  {
    number: 8,
    titleEn: "Full Cambridge Marathon & Error Eradication",
    titleBn: "ক্যামব্রিজ ম্যারাথন ও ভুলের চূড়ান্ত নিরসন",
    startDay: 71,
    endDay: 80,
    focusEn: "Complete test stamina, timing drills, micro-error analysis",
    descriptionBn: "টানা ৩ ঘণ্টার ফুল টেস্ট স্ট্যামিনা তৈরি এবং ছোটখাটো স্পেলিং ও গ্রামার ভুল চিরতরে দূরীকরণ।",
  },
  {
    number: 9,
    titleEn: "Elite Polish, Mindset & Band 8.5+ Capstone",
    titleBn: "এলিট পলিশ, পরীক্ষার সাইকোলজি ও গ্র্যান্ড ক্যাপস্টোন",
    startDay: 81,
    endDay: 90,
    focusEn: "Confidence calibration, examiner psychology, and final Band 8.5 certification",
    descriptionBn: "পরীক্ষকের প্রত্যাশা পূরণ, মানসিক একাগ্রতা এবং ৯০ দিনের রূপান্তরের মাধ্যমে ব্যান্ড ৮.৫ অর্জন।",
  },
];

export const ielts90Lessons: IeltsLessonDay[] = Array.from({ length: 90 }, (_, i) => {
  const day = i + 1;
  const phaseNum = Math.floor((day - 1) / 10) + 1;
  const phase = ielts90Phases[phaseNum - 1];

  const modules: IeltsLessonDay["module"][] = [
    "Listening",
    "Reading",
    "Writing",
    "Speaking",
    "Reading",
    "Writing",
    "Speaking",
    "Listening",
    "Writing",
    "Full Mock",
  ];
  const mod = modules[(day - 1) % 10];

  const lessonTitles: { en: string; bn: string; obj: string; tip: string } = {
    en: `Day ${day}: ${mod} Advanced Mastery Session`,
    bn: `দিন ${day}: ${mod} উচ্চস্তরের দক্ষতা ও সূক্ষ্ম কৌশল`,
    obj: `Refine Band 8.5 competence with precision vocabulary and structural range.`,
    tip: `উত্তরের বৈচিত্র্য ও স্বতঃস্ফূর্ততাই একজন সাধারণ পরীক্ষার্থীর সাথে ব্যান্ড ৮ প্রাপ্তের মূল তফাত।`,
  };

  if (day === 1) {
    lessonTitles.en = "Grammatical Range: Complex Sentences & Inversion for Band 8+";
    lessonTitles.bn = "ব্যাকরণ বিস্তার: ব্যান্ড ৮ এর জন্য জটিল বাক্য ও ইনভার্সন গঠন";
    lessonTitles.obj = "Learn to construct Cleft and Inversion sentences without grammatical slips.";
    lessonTitles.tip = "আইইএলটিএস রাইটিং ও স্পিকিংয়ে অন্তত ২টি ইনভার্সন ব্যবহার করলে গ্রামাটিক্যাল রেঞ্জ বহুগুণ বাড়ে।";
  } else if (day === 20) {
    lessonTitles.en = "Vocabulary Mastery: Climate Change & Environmental Lexicon";
    lessonTitles.bn = "ভোকাবুলারি মাস্টারি: জলবায়ু ও পরিবেশ বিষয়ক ব্যান্ড ৮.৫ শব্দভাণ্ডার";
    lessonTitles.obj = "Deploy words like 'mitigate', 'degradation', and 'biodiversity depletion' naturally.";
    lessonTitles.tip = "শব্দ মুখস্থ করার চেয়ে কোন শব্দের সাথে কোন প্রিপজিশন বসে (কোলোকেশন) তা লক্ষ্য করুন।";
  } else if (day === 55) {
    lessonTitles.en = "Hedging & Counterarguments in Writing Task 2";
    lessonTitles.bn = "হেজিং (Hedging) ও পাল্টা যুক্তি খণ্ডনের উচ্চমানের কলাকৌশল";
    lessonTitles.obj = "Master academic caution: 'It could be argued that' rather than absolute claims.";
    lessonTitles.tip = "অ্যাকাডেমিক রচনায় কখনোই 'always' বা 'never' লিখবেন না; বরং 'tend to' বা 'frequently' লিখুন।";
  } else if (day === 70) {
    lessonTitles.en = "Speaking Part 3: Philosophical & Abstract Debate Mastery";
    lessonTitles.bn = "স্পিকিং পার্ট ৩: গভীর দার্শনিক ও সামাজিক তর্কের সাবলীল উপস্থাপন";
    lessonTitles.obj = "Answer complex societal questions using PEEL and high-register discourse markers.";
    lessonTitles.tip = "ব্যক্তিগত মতামত দেওয়ার আগে 'From a broader perspective...' ফ্রেজটি ব্যবহার করুন।";
  } else if (day === 90) {
    lessonTitles.en = "Grand 90-Day IELTS Capstone & Global Success Blueprint";
    lessonTitles.bn = "৯০ দিনের গ্র্যান্ড আইইএলটিএস ক্যাপস্টোন ও বিশ্বমঞ্চে সাফল্যের রোডম্যাপ";
    lessonTitles.obj = "Complete full final simulation and receive Band 8.5 graduation assessment.";
    lessonTitles.tip = "আপনি এখন সম্পূর্ণরূপে আন্তর্জাতিক মানের একজন দক্ষ ইংরেজি বক্তা ও লেখক। শুভকামনা!";
  }

  return {
    day,
    track: "90-day",
    phase: phaseNum,
    phaseTitleEn: phase.titleEn,
    phaseTitleBn: phase.titleBn,
    module: mod,
    titleEn: lessonTitles.en,
    titleBn: lessonTitles.bn,
    targetBand: day < 30 ? "7.0+" : day < 60 ? "7.5+" : day < 80 ? "8.0+" : "8.5+",
    durationMinutes: 35,
    objectiveEn: lessonTitles.obj,
    banglaExplanation: `আজকের ${mod} পাঠটি ব্যান্ড ৮.০–৮.৫ লক্ষ্যমাত্রার জন্য বিশেষভাবে প্রস্তুত। প্রতিটি নিয়ম বাংলায় প্রাঞ্জলভাবে ব্যাখ্যা করা হয়েছে।`,
    dailyTasks: [
      `অফিসিয়াল ক্যামব্রিজ টেস্ট থেকে ${mod} সেকশনের প্রশ্ন বিশ্লেষণ`,
      "আজকের ৩টি উচ্চমানের কোলোকেশন নিজের বক্তব্যে ব্যবহার করুন",
      "টাইম ম্যানেজমেন্ট ও ভুল এনালাইসিস সম্পন্ন করুন",
    ],
    keyVocabulary: [
      { word: "Exacerbate", meaningBn: "পরিস্থিতি আরও খারাপ করা", collocation: "exacerbate inequalities" },
      { word: "Pivotal", meaningBn: "অত্যন্ত গুরুত্বপূর্ণ বা সন্ধিক্ষণ", collocation: "play a pivotal role" },
      { word: "Pervasive", meaningBn: "ব্যাপক বা সর্বব্যাপী", collocation: "pervasive influence" },
    ],
    proTipBn: lessonTitles.tip,
  };
});
