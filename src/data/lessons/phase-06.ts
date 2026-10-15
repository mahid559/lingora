import type { LessonDay } from "../types";

/**
 * PHASE 6 — REAL-WORLD ENGLISH (Days 51–60)
 * The final phase prepares students for work and study in English:
 * job interviews, workplace communication, professional introductions,
 * email writing, formal vs informal register, conversation repair,
 * listening review, full revision, a speaking challenge, and a final
 * course-wide assessment on Day 60. Bengali remains the medium of
 * instruction throughout; the register of English in each lesson
 * matches its teaching goal.
 */

export const phase6: LessonDay[] = [
  /* ------------------------------------------------------------------ */
  /* DAY 51 — JOB INTERVIEW BASICS                                      */
  /* ------------------------------------------------------------------ */
  {
    day: 51,
    title: "Job Interview Basics",
    titleBn: "চাকরির ইন্টারভিউয়ের মূল কথা",
    level: 3,
    durationMinutes: 32,
    objectives: [
      "সাধারণ ইন্টারভিউ প্রশ্নের উত্তর ইংরেজিতে আত্মবিশ্বাসের সঙ্গে দিতে পারবেন।",
      "নিজের অভিজ্ঞতা ও দক্ষতা নিয়ে সঠিক বাক্যে কথা বলতে পারবেন।",
      "শক্তি (strength) ও দুর্বলতা (weakness) প্রকাশের ভাষা আয়ত্ত করবেন।",
      "\"Tell me about yourself\" ধরনের খোলা প্রশ্নের সাজানো উত্তর দিতে পারবেন।",
    ],
    intro: [
      "চাকরির ইন্টারভিউ অনেকের কাছেই সবচেয়ে ভয়ের এক জায়গা। ঘণ্টার পর ঘণ্টা পড়াশোনা করেও ইন্টারভিউয়ের কক্ষে বসে ইংরেজিতে প্রশ্ন শুনে চুপ হয়ে যাওয়া — এ অভিজ্ঞতা আমাদের অনেকেরই পরিচিত। আসলে ইন্টারভিউয়ের সফলতার বড় অংশ নির্ভর করে প্রস্তুতি ও কিছু নির্দিষ্ট বাক্যের সঠিক ব্যবহারের ওপর। আজকের পাঠে আমরা সেই পাঠ্যই শিখব: নিজের পরিচয়, অভিজ্ঞতা, দক্ষতা, শক্তি ও দুর্বলতা — সবই কীভাবে ইংরেজিতে সহজ ও স্বাভাবিকভাবে বলা যায়।",
      "ইন্টারভিউয়ার সাধারণত প্রথমেই বলেন \"Tell me about yourself\"। এর অর্থ এই নয় যে আপনি পুরো জীবনবৃত্তান্ত মুখস্থ শোনাবেন — বরং তিন-চারটি বাক্যে নিজের শিক্ষা, অভিজ্ঞতা ও যোগ্যতা ধরে ধরে বলা, যাতে বোঝা যায় আপনি কথাটি রাখতে পারবেন। অভিজ্ঞতা বলার জন্য সবচেয়ে দরকারি কাঠামো হলো Present Perfect: \"I have worked...\" — কারণ এটি আপনার অতীত অভিজ্ঞতাকে বর্তমানের সঙ্গে যুক্ত করে।",
      "আজকের পাঠে আমরা মক ইন্টারভিউ করব, শক্তি-দুর্বলতা নিয়ে কথা বলব, আর শিখব কোন উত্তর কেমন শোনায়। মনে রাখবেন — ইন্টারভিউয়ে নিখুঁত ইংরেজি নয়, বরং স্পষ্ট ও আত্মবিশ্বাসী উত্তরই জয়ী হয়।",
    ],
    grammar: {
      title: "অভিজ্ঞতা ও দক্ষতা প্রকাশের ভাষা",
      explanationBn:
        "ইন্টারভিউয়ের সেরা সহায়ক হলো তিনটি কাঠামো। (১) অভিজ্ঞতা বলার জন্য Present Perfect: subject + have/has + verb-এর past participle — যেমন I have worked in a bank for five years। এটি দেখায় যে আপনার অভিজ্ঞতা রয়েছে এবং তা এখনও আপনার কাজে লাগে। (২) দক্ষতা বলার জন্য I can + base verb এবং I am good at + verb-ing — যেমন I can type fast, I am good at teamwork। (৩) বর্তমান কাজ বলার জন্য Present Simple, আর ভবিষ্যৎ প্রত্যাশার জন্য I would like to + verb। এই চারটি কাঠামো মুখস্থ না করে, নিজের কথায় ব্যবহার করতে পারলে ইন্টারভিউয়ের অর্ধেক উত্তর আপনি নিজেই বানিয়ে ফেলতে পারবেন।",
      patterns: [
        {
          label: "অভিজ্ঞতা",
          template: "I have + (V3) + ...",
          bn: "I have worked in a bank for five years. — অতীতের অভিজ্ঞতা, বর্তমানের কাজে লাগছে।",
        },
        {
          label: "দক্ষতা",
          template: "I can + verb / I am good at + verb-ing",
          bn: "I can communicate in English. / I am good at solving problems.",
        },
        {
          label: "বর্তমান কাজ",
          template: "I + (Present Simple) + ...",
          bn: "I work as a sales executive at a textile company.",
        },
        {
          label: "ভবিষ্যৎ প্রত্যাশা",
          template: "I would like to + verb + ...",
          bn: "I would like to join your company and grow with it.",
        },
      ],
      examples: [
        { en: "I have completed a degree in accounting.", bn: "আমি অ্যাকাউন্টিংয়ে স্নাতক সম্পন্ন করেছি।" },
        { en: "I have worked in a bank for five years.", bn: "আমি পাঁচ বছর ধরে একটি ব্যাংকে কাজ করছি।" },
        { en: "I can learn new tasks quickly.", bn: "আমি দ্রুত নতুন কাজ শিখতে পারি।" },
        { en: "I am good at teamwork.", bn: "আমি দলগত কাজে পারদর্শী।" },
        { en: "I work as a marketing officer.", bn: "আমি একজন বিপণন কর্মকর্তা হিসেবে কাজ করি।" },
        { en: "I would like to make a career in this company.", bn: "আমি এই কোম্পানিতে কর্মজীবন গড়তে চাই।" },
      ],
    },
    commonMistakes: [
      {
        wrong: "I am working in a bank since 2020.",
        right: "I have worked in a bank since 2020.",
        noteBn:
          "since-এর সঙ্গে সাধারণত Present Simple বা Present Perfect চলে, Present Continuous নয়। অভিজ্ঞতার কথা বলার সময় \"I have worked...\" বেশি স্বাভাবিক।",
      },
      {
        wrong: "My hobby is to reading books.",
        right: "My hobby is reading books.",
        noteBn:
          "is-এর পরে verb-এর base form 'to + verb' নয়, সর্বদা gerund (verb-ing) বসে। same pattern: My hobby is gardening।",
      },
      {
        wrong: "I have three years experience in customer service.",
        right: "I have three years of experience in customer service.",
        noteBn:
          "নির্দিষ্ট সময়কালের অভিজ্ঞতা বলতে \"three years of experience\" বলা হয় — 'of' শব্দটি বাদ দিলে বাক্যটি পেশাদার শোনায় না।",
      },
    ],
    vocab: [
      { word: "interview", meaningBn: "সাক্ষাৎকার / ইন্টারভিউ", exampleEn: "I have a job interview tomorrow morning.", exampleBn: "আমার কাল সকালে একটি চাকরির ইন্টারভিউ আছে।" },
      { word: "applicant", meaningBn: "আবেদনকারী / চাকরি প্রার্থী", exampleEn: "The applicant answered every question well.", exampleBn: "আবেদনকারী প্রতিটি প্রশ্নের ভালো উত্তর দিলেন।" },
      { word: "employer", meaningBn: "নিয়োগদাতা (কোম্পানি বা পক্ষ)", exampleEn: "My employer gives us annual training.", exampleBn: "আমার নিয়োগকর্তা আমাদের বার্ষিক প্রশিক্ষণ দেন।" },
      { word: "experience", meaningBn: "অভিজ্ঞতা", exampleEn: "She has five years of work experience.", exampleBn: "তার পাঁচ বছরের কাজের অভিজ্ঞতা আছে।" },
      { word: "skill", meaningBn: "দক্ষতা", exampleEn: "Communication skill is very important for this job.", exampleBn: "এই চাকরির জন্য যোগাযোগ দক্ষতা খুবই গুরুত্বপূর্ণ।" },
      { word: "qualification", meaningBn: "যোগ্যতা / শিক্ষাগত সনদ", exampleEn: "Please tell me about your qualifications.", exampleBn: "দয়া করে আপনার যোগ্যতা সম্পর্কে বলুন।" },
      { word: "strength", meaningBn: "শক্তি / উল্লেখযোগ্য গুণ", exampleEn: "My main strength is patience.", exampleBn: "আমার প্রধান শক্তি হলো ধৈর্য।" },
      { word: "weakness", meaningBn: "দুর্বলতা", exampleEn: "I am working to improve my weakness.", exampleBn: "আমি আমার দুর্বলতা উন্নত করতে কাজ করছি।" },
      { word: "salary", meaningBn: "বেতন", exampleEn: "What salary do you expect?", exampleBn: "আপনি কত বেতন প্রত্যাশা করেন?" },
      { word: "position", meaningBn: "পদ", exampleEn: "I am applying for the position of senior officer.", exampleBn: "আমি সিনিয়র অফিসার পদে আবেদন করছি।" },
      { word: "confident", meaningBn: "আত্মবিশ্বাসী", exampleEn: "Stay confident during the interview.", exampleBn: "ইন্টারভিউয়ের সময় আত্মবিশ্বাসী থাকুন।" },
      { word: "resume", meaningBn: "জীবনবৃত্তান্ত / সিভি", exampleEn: "Please bring your resume to the interview.", exampleBn: "দয়া করে ইন্টারভিউতে আপনার জীবনবৃত্তান্ত আনুন।" },
    ],
    sentences: [
      { bn: "আমার কাল সকালে একটি চাকরির ইন্টারভিউ আছে।", en: "I have a job interview tomorrow morning." },
      { bn: "আমি অ্যাকাউন্টিংয়ে স্নাতক সম্পন্ন করেছি।", en: "I have completed a degree in accounting." },
      { bn: "আমি পাঁচ বছর ধরে একটি ব্যাংকে কাজ করছি।", en: "I have worked in a bank for five years.", noteBn: "অভিজ্ঞতা বোঝাতে Present Perfect সবচেয়ে মানানসই।" },
      { bn: "আমার প্রধান শক্তি হলো ধৈর্য।", en: "My main strength is patience." },
      { bn: "আমি প্রতিদিন নিজের দক্ষতা উন্নত করার চেষ্টা করি।", en: "I try to improve my skills every day." },
      { bn: "আমি এই কোম্পানিতে কাজ করতে আগ্রহী।", en: "I am interested in working for this company.", noteBn: "interested in-এর পরে gerund বসে: working।" },
      { bn: "আপনার প্রতিষ্ঠান সম্পর্কে আমাকে আরও বলুন।", en: "Tell me more about your organization." },
      { bn: "আমি দ্রুত নতুন কাজ শিখতে পারি।", en: "I can learn new tasks quickly." },
      { bn: "আমার বেতনের প্রত্যাশা যুক্তিসঙ্গত।", en: "My salary expectation is reasonable." },
      { bn: "আমি জুনিয়র অফিসার পদে আবেদন করছি।", en: "I am applying for the position of junior officer." },
      { bn: "দয়া করে ইন্টারভিউয়ের আগে আমার জীবনবৃত্তান্তটি দেখুন।", en: "Please review my resume before the interview." },
      { bn: "একজন চাকরি প্রার্থীর জন্য আত্মবিশ্বাসী হওয়া জরুরি।", en: "It is important for a job applicant to be confident." },
    ],
    exercises: [
      {
        type: "speaking",
        title: "Mock Interview: Ask and Answer",
        titleBn: "মক ইন্টারভিউ: প্রশ্ন আর উত্তর",
        instructionsBn:
          "নিচের সংলাপটি একজন বন্ধু বা আয়নায় নিজের সঙ্গে অভিনয় করুন। প্রথমে ইন্টারভিউয়ার হয়ে প্রশ্নগুলো করুন, তারপর প্রার্থী হয়ে উত্তরগুলো জোরে জোরে বলুন। প্রতিটি জোড়া তিনবার অনুশীলন করুন।",
        dialogue: [
          { bn: "আপনি কি নিজের সম্পর্কে একটু বলবেন?", en: "Could you tell me about yourself?" },
          { bn: "আমি তানভীর আহমেদ। আমি তিন বছর ধরে বিপণন বিভাগে কাজ করছি।", en: "I am Tanvir Ahmed. I have worked in the marketing department for three years." },
          { bn: "আপনার প্রধান শক্তি কী?", en: "What is your main strength?" },
          { bn: "আমি দলগত কাজে পারদর্শী এবং সময়নিষ্ঠ।", en: "I am good at teamwork and I am punctual." },
          { bn: "আপনি কেন এই কোম্পানিতে কাজ করতে চান?", en: "Why do you want to work for this company?" },
          { bn: "কারণ এই কোম্পানির সুনাম আছে এবং এখানে শেখার বড় সুযোগ রয়েছে।", en: "Because this company has a good reputation and there are great chances to learn." },
        ],
        stepsBn: [
          "প্রতিটি প্রশ্ন শুনে নিজের মতো একটা উত্তর আগে বাংলায় ভাবুন।",
          "তারপর সঠিক কাঠামো ধরে ইংরেজি উত্তরটি বলুন: I have + অভিজ্ঞতা, I can + দক্ষতা।",
          "উত্তর দেওয়ার সময় চোখের দিকে তাকিয়ে হাসিমুখে, স্বাভাবিক গতিতে বলুন।",
        ],
        answerKey: "I am Tanvir Ahmed. I have worked in marketing for three years. / My main strength is teamwork and punctuality. / I want to work here because of the company's reputation and the chances to learn.",
        answerKeyBn: "মনে রাখবেন, প্রতিটি উত্তর যেন ২–৩ লাইনের বেশি না হয় এবং ending-এ ভবিষ্যৎ প্রত্যাশার একটি বাক্য থাকলে ভালো লাগে।",
      },
      {
        type: "speaking",
        title: "Tell Me About Yourself (60 Seconds)",
        titleBn: "নিজের সম্পর্কে ৬০ সেকেন্ডে বলুন",
        instructionsBn:
          "নিচের ধাপগুলো মেনে নিজের আসল পরিচয় নিয়ে ৬০ সেকেন্ডের বক্তৃতা তৈরি করুন, তারপর টাইমার ধরে তিনবার জোরে বলুন। শেষবারে নিজের ভয়েস রেকর্ড করে শুনুন।",
        prompts: [
          "I am [name] and I am [age] years old. I live in [city].",
          "I have completed [degree] from [institution].",
          "I have worked as a [job title] for [number] years.",
          "My main strength is [strength], and I am good at [skill].",
          "I would like to work here because [reason].",
        ],
        stepsBn: [
          "দ্বিতীয় ধাপ: নিজের আসল তথ্য দিয়ে প্রতিটি বাক্য শেষ করুন।",
          "তৃতীয় ধাপ: বাক্যগুলো সাজিয়ে পুরো উত্তরটি একটানা ৬০ সেকেন্ডে বলুন।",
          "চতুর্থ ধাপ: রেকর্ড শুনে দুটি জিনিস দেখুন — gতি সঠিক কি না এবং কোন শব্দে আটকে গেছেন।",
        ],
        answerKey: "Model: I am Nusrat Jahan and I am 26 years old. I live in Dhaka. I have completed my BBA from Dhaka University. I have worked as a junior officer for two years. My main strength is patience, and I am good at handling customers. I would like to work here because this job matches my skills.",
        answerKeyBn: "এটি একটি নমুনা; আপনার নিজের তথ্য সত্যি এবং সহজ রাখুন। ৬০ সেকেন্ড মানে প্রায় ৮–১০টি বাক্য।",
      },
      {
        type: "writing",
        title: "My Strengths and Weaknesses",
        titleBn: "আমার শক্তি ও দুর্বলতা",
        instructionsBn:
          "নিজের জন্য তিনটি শক্তি এবং দুটি দুর্বলতা বেছে নিন। প্রতিটি নিয়ে একটি করে সম্পূর্ণ ইংরেজি বাক্য লিখুন। দুর্বলতার ক্ষেত্রে দেখান যে আপনি সেটি ঠিক করার চেষ্টা করছেন।",
        prompts: [
          "My main strength is ... because ...",
          "I am good at ... and I enjoy ...",
          "I am trying to improve ... by ...",
        ],
        answerKey: "Example: My main strength is punctuality because I always finish my work on time. I am good at public speaking and I enjoy training new staff. My weakness is that I sometimes say yes to too many tasks, but I am trying to manage my time better by making a daily plan.",
        answerKeyBn: "দুর্বলতা বলার নিয়ম: সততার সঙ্গে বলুন, সঙ্গে দেখান কীভাবে সারানোর চেষ্টা করছেন। এতে ইন্টারভিউয়ার ধারণা নেন যে আপনি আত্ম-সচেতন।",
      },
    ],
    quiz: [
      {
        id: "d51-q1",
        type: "multiple-choice",
        promptBn: "\"আমি পাঁচ বছর ধরে একটি ব্যাংকে কাজ করছি।\" — সঠিক ইংরেজি কোনটি?",
        options: [
          { key: "a", text: "I am working in a bank since five years." },
          { key: "b", text: "I work in a bank since five years." },
          { key: "c", text: "I have worked in a bank for five years." },
          { key: "d", text: "I worked in a bank for five years." },
        ],
        answer: "c",
        explanationBn: "অভিজ্ঞতা ও বর্তমানের সম্পর্ক দেখাতে Present Perfect: I have worked in a bank for five years.",
      },
      {
        id: "d51-q2",
        type: "multiple-choice",
        promptBn: "কোন বাক্যটি কাজের অভিজ্ঞতা প্রকাশ করে?",
        options: [
          { key: "a", text: "I am a student." },
          { key: "b", text: "I have worked in a bank for five years." },
          { key: "c", text: "I will work hard." },
          { key: "d", text: "I like tea." },
        ],
        answer: "b",
        explanationBn: "have + worked = Present Perfect, যা অতীতের অভিজ্ঞতাকে বর্তমানের সঙ্গে যুক্ত করে।",
      },
      {
        id: "d51-q3",
        type: "fill-blank",
        promptBn: "\"আমি জুনিয়র অফিসার পদে আবেদন করছি।\" → I am applying ___ the position of junior officer.",
        answer: "for",
        explanationBn: "আবেদন করা = apply for — apply-এর পরে preposition 'for' বসে: apply for a position।",
      },
      {
        id: "d51-q4",
        type: "translate-bn-en",
        promptBn: "\"আমার প্রধান শক্তি হলো ধৈর্য।\" — ইংরেজি কী হবে?",
        answer: "my main strength is patience",
        acceptableAnswers: ["my main strength is patience."],
        explanationBn: "প্রধান = main, শক্তি = strength, ধৈর্য = patience। ক্রম: My main strength is patience.",
      },
      {
        id: "d51-q5",
        type: "correct-sentence",
        promptBn: "\"I am agree with your plan.\" — বাক্যটি ঠিক করুন।",
        answer: "i agree with your plan",
        acceptableAnswers: ["i agree with your plan."],
        explanationBn: "agree একটি সাধারণ verb; এর সঙ্গে am আসে না। সঠিক রূপ: I agree with your plan। সতর্কতা: 'I am agree' বাংলাভাষীদের অতি প্রচলিত ভুল — মনে রাখবেন agree-এর সঙ্গে am বসে না।",
      },
      {
        id: "d51-q6",
        type: "multiple-choice",
        promptBn: "চাকরির ইন্টারভিউতে নিচের কোন প্রশ্নটি স্বাভাবিকভাবে করা হয়?",
        options: [
          { key: "a", text: "What did you eat today?" },
          { key: "b", text: "Tell me about your experience." },
          { key: "c", text: "How old is your father?" },
          { key: "d", text: "Why are you late?" },
        ],
        answer: "b",
        explanationBn: "অভিজ্ঞতা, দক্ষতা, ক্যারিয়ার লক্ষ্য — এগুলোই ইন্টারভিউয়ের স্বাভাবিক বিষয়; ব্যক্তিগত বা নেতিবাচক প্রশ্ন নয়।",
      },
      {
        id: "d51-q7",
        type: "fill-blank",
        promptBn: "\"আমার শখ বই পড়া।\" → My hobby is ___ books.",
        answer: "reading",
        acceptableAnswers: ["reading."],
        explanationBn: "is-এর পরে gerund বসে: reading। my hobby is reading books.",
      },
      {
        id: "d51-q8",
        type: "translate-bn-en",
        promptBn: "\"আমি দ্রুত নতুন কাজ শিখতে পারি।\" — ইংরেজি কী হবে?",
        answer: "i can learn new tasks quickly",
        acceptableAnswers: ["i can learn new tasks quickly."],
        explanationBn: "পারি = can, শিখতে = learn, নতুন কাজ = new tasks, দ্রুত = quickly।",
      },
      {
        id: "d51-q9",
        type: "multiple-choice",
        promptBn: "\"Tell me about yourself\" প্রশ্নের কোন উত্তরটি সবচেয়ে মানানসই?",
        options: [
          { key: "a", text: "I don't know what to say." },
          { key: "b", text: "I am a simple person who loves food." },
          { key: "c", text: "I am Rafiq. I have completed my MBA and worked as an officer for three years." },
          { key: "d", text: "My father is a farmer." },
        ],
        answer: "c",
        explanationBn: "সেরা উত্তর শিক্ষা, অভিজ্ঞতা ও কাজের আগ্রহ ধরে রাখে — সংক্ষেপে এবং প্রাসঙ্গিক।",
      },
      {
        id: "d51-q10",
        type: "correct-sentence",
        promptBn: "\"He have five years of experience in sales.\" — বাক্যটি ঠিক করুন।",
        answer: "he has five years of experience in sales",
        acceptableAnswers: ["he has five years of experience in sales."],
        explanationBn: "he-এর সঙ্গে have নয়, has বসে: He has five years of experience in sales.",
      },
    ],
    homework: {
      instructionsBn:
        "১) নিচের ৫টি সাধারণ ইন্টারভিউ প্রশ্নের নিজের উত্তর লিখুন এবং মুখস্থ করে তিনবার জোরে বলুন: আপনার পরিচয়, শক্তি, দুর্বলতা, কেন এই চাকরি চান, আর কত বেতন প্রত্যাশা করেন। ২) নিজেকে রেকর্ড করে শুনুন — যেখানে আটকে গেছেন সেটি চিহ্নিত করে আবার অনুশীলন করুন। ৩) আপনার জীবনবৃত্তান্তের গুরুত্বপূর্ণ তথ্যগুলো (যোগ্যতা, অভিজ্ঞতা) ইংরেজিতে ৫টি বাক্যে লিখুন।",
      tasks: [
        { bn: "৫টি সাধারণ ইন্টারভিউ প্রশ্নের উত্তর ইংরেজিতে লিখুন ও ৩ বার জোরে বলুন।", en: "Write answers to five common interview questions and say them aloud three times." },
        { bn: "নিজের উত্তর রেকর্ড করে শুনুন এবং সবচেয়ে দুর্বল অংশটি আবার অনুশীলন করুন।", en: "Record your answers, listen, and practise the weakest part again." },
        { bn: "জীবনবৃত্তান্তের মূল তথ্য নিয়ে ৫টি ইংরেজি বাক্য লিখুন।", en: "Write five English sentences about the key facts in your resume." },
      ],
      answerKey: "Example answers: 1. I am Rahim and I have completed my BSc in CSE. 2. My main strength is problem solving. 3. I am trying to improve my public speaking. 4. I want this job because it matches my skills. 5. My salary expectation is around thirty to thirty-five thousand taka.",
      answerKeyBn: "উত্তরসমূহ নমুনা — আপনাকে নিজের সত্য তথ্য বসাতে হবে। সবচেয়ে গুরুত্বপূর্ণ হলো প্রতিটি উত্তর ২–৩ বাক্যে থামানো।",
    },
  },

  /* ------------------------------------------------------------------ */
  /* DAY 52 — WORKPLACE COMMUNICATION                                    */
  /* ------------------------------------------------------------------ */
  {
    day: 52,
    title: "Workplace Communication",
    titleBn: "কর্মক্ষেত্রে যোগাযোগ",
    level: 3,
    durationMinutes: 33,
    objectives: [
      "অফিসে নম্রভাবে অনুরোধ ও সাহায্য চাইতে পারবেন।",
      "কাজ সম্পন্ন হওয়া বা চলমান — উভয় অবস্থা ইংরেজিতে রিপোর্ট করতে পারবেন।",
      "মিটিং ও কর্মক্ষেত্রের প্রয়োজনীয় শব্দভান্ডার ব্যবহার করতে পারবেন।",
      "সহকর্মী ও ম্যানেজারের সঙ্গে স্বাভাবিক পেশাদার কথোপকথন চালাতে পারবেন।",
    ],
    intro: [
      "অফিসের প্রতিদিনের জীবন কথা বলতে গেলে প্রথমেই আসে যোগাযোগ — ম্যানেজারকে বলা \"রিপোর্টটা পাঠিয়ে দিয়েছি\", সহকর্মীকে বলার ইমেইল ঠিকানা জিজ্ঞেস করা, মিটিংয়ে মতামত দেওয়া। বাংলা অফিসেও আমরা ইংরেজিতে হাবুডুবু খাই, কারণ অফিসের ভাষা একটা আলাদা রীতি — এখানে কথা বলা হয় নম্র, পরিষ্কার আর পেশাদারভাবে। আজকের পাঠ সেটাই শেখাবে।",
      "কোন ভাষাটি খেয়াল রাখতে হবে? প্রথমত, অনুরোধের সময় 'Could you...?' — এটা 'Can you' বা 'Give me'-এর চেয়ে অনেক বেশি নম্র শোনায়। দ্বিতীয়ত, কাজের রিপোর্ট করতে তিনটি অবস্থা বলা যায়: শেষ হয়েছে (I have finished...), চলছে (I am working on...), আর করা হবে (I will...)। এই তিনটি কাঠামোই আজকের ব্যাকরণে আমরা বিস্তারিত দেখব।",
      "কর্মক্ষেত্রে একটি কথাও মাথায় রাখুন — বন্ধুদের সঙ্গে যেমন খোলামেলা কথা হয়, অফিসে তেমন নয়; সামান্য নম্রতা (politeness) আপনার পেশাদার ভাবমূর্তি গড়ে তোলে। আজ আমরা মিটিং রোল-প্লে, কাজের আপডেট শোনা এবং দৈনিক রিপোর্ট লেখা — সব অনুশীলন করব।",
    ],
    grammar: {
      title: "নম্র অনুরোধ ও কাজের রিপোর্টিং",
      explanationBn:
        "কর্মক্ষেত্রে সবচেয়ে বেশি ব্যবহৃত তিনটি কাঠামো শিখুন। (১) নম্র অনুরোধ: Could you + base verb — যেমন Could you send me the file? এর সঙ্গে উদারতা জোগানোর জন্য 'please' যোগ করা যায়। (২) কাজের অবস্থা রিপোর্ট করতে Present Perfect (I have finished the report) — অর্থাৎ কাজ শেষ; Present Continuous (I am working on the presentation) — কাজ চলছে; আর I will + verb (I will send it by 5 pm) — কাজ করা হবে। (৩) সাহায্য চাওয়ার জন্য Do you have a minute to...? এবং Please let me know if you need anything — এই বাক্যগুলো সহকর্মীদের কাজ সহজ করে এবং সম্পর্ক ভালো রাখে। মনে রাখবেন: modal verb (could, will, can) এর পরে verb-এর base form বসে — Could you told me ভুল; Could you tell me সঠিক।",
      patterns: [
        {
          label: "নম্র অনুরোধ",
          template: "Could you + base verb + ...?",
          bn: "Could you send me the report? — নম্র ও পেশাদার অনুরোধ।",
        },
        {
          label: "কাজ শেষ",
          template: "I have + (V3) + ...",
          bn: "I have finished the monthly report. — কাজ সম্পন্ন হয়েছে।",
        },
        {
          label: "কাজ চলছে",
          template: "I am + verb-ing + ...",
          bn: "I am working on the new project. — এই মুহূর্তে করছি।",
        },
        {
          label: "কাজ হবে",
          template: "I will + base verb + time",
          bn: "I will send the file by tomorrow morning. — ভবিষ্যৎ প্রতিশ্রুতি।",
        },
      ],
      examples: [
        { en: "Could you check this email before I send it?", bn: "পাঠানোর আগে আপনি কি এই ইমেইলটি একবার দেখে নেবেন?" },
        { en: "I have finished the monthly report.", bn: "আমি মাসিক রিপোর্টটি শেষ করেছি।" },
        { en: "I am working on the new project.", bn: "আমি নতুন প্রকল্পের কাজ করছি।" },
        { en: "I will send the file by tomorrow morning.", bn: "আমি কাল সকালের মধ্যে ফাইলটি পাঠাব।" },
        { en: "Do you have a minute to discuss the meeting?", bn: "মিটিং নিয়ে আলোচনা করার জন্য কি আপনার এক মিনিট আছে?" },
        { en: "Please let me know if you need anything.", bn: "কোনো কিছু দরকার হলে দয়া করে আমাকে জানান।" },
      ],
    },
    commonMistakes: [
      {
        wrong: "I have a good news.",
        right: "I have good news.",
        noteBn:
          "news (খবর) ব্রিটিশ/ইংরেজি ব্যাকরণে uncountable — তাই এর আগে 'a' বসে না। সঙ্গে a_countable verb-ও হয় single verb: The news is good।",
      },
      {
        wrong: "We discussed about the budget.",
        right: "We discussed the budget.",
        noteBn:
          "discuss-এর পরে preposition 'about' বসে না। discuss এই কাজটি নিজেই সম্পন্ন — discuss the budget। কিন্তু talk about the budget সঠিক (talk-এর সঙ্গে about লাগে)।",
      },
      {
        wrong: "Could you told me the address?",
        right: "Could you tell me the address?",
        noteBn:
          "modal verb (could, will, can)-এর পরে verb-এর base form বসে; never past form। তাই could you tell, could you send।",
      },
    ],
    vocab: [
      { word: "colleague", meaningBn: "সহকর্মী", exampleEn: "My colleague helped me with the report.", exampleBn: "আমার সহকর্মী রিপোর্টটি করতে আমাকে সাহায্য করেছেন।" },
      { word: "manager", meaningBn: "ম্যানেজার / ব্যবস্থাপক", exampleEn: "The manager approved my leave.", exampleBn: "ম্যানেজার আমার ছুটি অনুমোদন করেছেন।" },
      { word: "deadline", meaningBn: "শেষ সময়সীমা", exampleEn: "My deadline is next Friday.", exampleBn: "আমার ডেডলাইন আগামী শুক্রবার।" },
      { word: "meeting", meaningBn: "সভা / মিটিং", exampleEn: "The meeting starts at 10 am.", exampleBn: "মিটিংটি সকাল ১০টায় শুরু হয়।" },
      { word: "report", meaningBn: "প্রতিবেদন / রিপোর্ট", exampleEn: "I have finished the report.", exampleBn: "আমি রিপোর্টটি শেষ করেছি।" },
      { word: "task", meaningBn: "কাজ / দায়িত্ব", exampleEn: "I finished all my tasks today.", exampleBn: "আজ আমি আমার সব কাজ শেষ করেছি।" },
      { word: "schedule", meaningBn: "সময়সূচি", exampleEn: "Let me check my schedule.", exampleBn: "আমাকে আমার সময়সূচি দেখতে দিন।" },
      { word: "project", meaningBn: "প্রকল্প", exampleEn: "We are working on a new project.", exampleBn: "আমরা একটি নতুন প্রকল্পে কাজ করছি।" },
      { word: "department", meaningBn: "বিভাগ", exampleEn: "She works in the HR department.", exampleBn: "তিনি মানবসম্পদ বিভাগে কাজ করেন।" },
      { word: "attend", meaningBn: "উপস্থিত থাকা / যোগ দেওয়া", exampleEn: "I will attend the meeting tomorrow.", exampleBn: "আমি আগামীকাল মিটিংয়ে যোগ দেব।" },
      { word: "assign", meaningBn: "কাজ বরাদ্দ করা", exampleEn: "The manager assigned me a new task.", exampleBn: "ম্যানেজার আমাকে একটি নতুন কাজ দিয়েছেন।" },
      { word: "notify", meaningBn: "জানিয়ে দেওয়া", exampleEn: "Please notify everyone about the change.", exampleBn: "পরিবর্তনের কথা দয়া করে সবাইকে জানিয়ে দিন।" },
    ],
    sentences: [
      { bn: "আমি আগামীকাল সকালের মধ্যে রিপোর্টটি জমা দেব।", en: "I will submit the report by tomorrow morning." },
      { bn: "আপনি কি আমাকে ফাইলটি পাঠিয়ে দিতে পারবেন?", en: "Could you send me the file?", noteBn: "'Could you' — অফিসের সবচেয়ে দরকারি নম্র অনুরোধ।" },
      { bn: "আমি প্রকল্পের কাজ শেষ করেছি।", en: "I have finished the project work." },
      { bn: "মিটিংটি কয়টায় শুরু হবে?", en: "What time does the meeting start?" },
      { bn: "আমি এখন নতুন কাজটি শিখছি।", en: "I am learning the new task now." },
      { bn: "পরিবর্তনের কথা দয়া করে সবাইকে জানিয়ে দিন।", en: "Please notify everyone about the change." },
      { bn: "ম্যানেজার আজ অফিসে আসবেন না।", en: "The manager will not come to the office today." },
      { bn: "আমার ডেডলাইন আগামী শুক্রবার।", en: "My deadline is next Friday." },
      { bn: "সহকর্মীরা একসঙ্গে দুপুরের খাবার খান।", en: "The colleagues have lunch together." },
      { bn: "আমি বিভাগের সভায় উপস্থিত থাকব।", en: "I will attend the department meeting." },
      { bn: "তিনি একটি জরুরি কাজের জন্য আমাকে ডেকে পাঠালেন।", en: "He called me in for an urgent task." },
      { bn: "কাজটি সঠিকভাবে সম্পন্ন করতে আপনার সাহায্য দরকার?", en: "Do you need any help to finish the task properly?" },
    ],
    exercises: [
      {
        type: "speaking",
        title: "Meeting Role Play",
        titleBn: "মিটিং রোল-প্লে",
        instructionsBn:
          "দুইজনের একটি দল তৈরি করুন — একজন ম্যানেজার, একজন কর্মী। নিচের সংলাপটি পড়ে তারপর নিজের কল্পিত কথা দিয়ে আরও তিনটি বিনিময় যোগ করুন। প্রতিটি বাক্য জোরে ও স্বাভাবিক গতিতে বলুন।",
        dialogue: [
          { bn: "গুড মর্নিং। আজকের রিপোর্টের অবস্থা কী?", en: "Good morning. What is the status of today's report?" },
          { bn: "আমি রিপোর্টটি শেষ করেছি এবং মাত্র পাঠাচ্ছি।", en: "I have finished the report and I am sending it now." },
          { bn: "চমৎকার। নতুন প্রকল্পের কী অবস্থা?", en: "Great. What about the new project?" },
          { bn: "আমি এখনও এতে কাজ করছি; আমি আগামী বুধবারের মধ্যে শেষ করব।", en: "I am still working on it; I will finish it by next Wednesday." },
          { bn: "আপনি কি মিটিংয়ের স্লাইডগুলো তৈরি করতে পারবেন?", en: "Could you prepare the slides for the meeting?" },
          { bn: "অবশ্যই, আমি কাল সকালে সেগুলো পাঠাব।", en: "Sure, I will send them tomorrow morning." },
        ],
        stepsBn: [
          "প্রথমে সংলাপটি ৩ বার জোরে পড়ুন।",
          "তারপর ভূমিকা বদলান — এবার আপনি ম্যানেজার।",
          "শেষে নিজের অফিসের মতো একটি নতুন অনুরোধ যোগ করুন, যেমন: Could you check the invoice?",
        ],
        answerKey: "Useful follow-ups: Could you confirm the meeting time? / I have updated the file. / I am preparing the slides. / I will send them by noon.",
        answerKeyBn: "মূল লক্ষ্য: Could you + base verb, I have + V3, I am + V-ing, I will + verb — এই চারটি কাঠামো মিশিয়ে কথা বলা।",
      },
      {
        type: "listening",
        title: "The Morning Update",
        titleBn: "সকালের কাজের আপডেট শোনা",
        instructionsBn:
          "নিচের বক্তব্যটি একজন ম্যানেজার কর্মীদের বলছেন। প্রথমে পড়ে শুনুন (ধীরে), তারপর চোখ বন্ধ করে জোরে জোরে ২ বার কেউ পড়লে শোনার চেষ্টা করুন। শোনার পর নিচের প্রশ্নগুলোর উত্তর দিন।",
        content:
          "Good morning, everyone. A few updates for today. First, the meeting has been moved from 10 am to 11:30 am. Please attend on time. Second, the monthly report is due on Friday; I have already shared the format with you. Third, we are starting a new project next week, so please finish your current tasks by Thursday. If you have any questions, you know where to find me. Thank you.",
        stepsBn: [
          "প্রথমে প্রশ্নগুলো আগে পড়ুন — কী শুনতে হবে তা জানা থাকলে মনোযোগ ঠিক রাখা সহজ।",
          "বক্তব্যটি ২ বার শুনুন; দ্বিতীয়বারে নোট নিন।",
          "প্রশ্নগুলোর উত্তর দিয়ে নিজের মূল বক্তব্য (main idea) এক লাইনে লিখুন।",
        ],
        answerKey:
          "1. The meeting has been moved to 11:30 am. 2. The monthly report is due on Friday. 3. A new project is starting next week. 4. Finish current tasks by Thursday. Main idea: The manager is giving today's work updates.",
        answerKeyBn: "শোনার সময় তারিখ, সময়, দিন — এ ধরনের বিবরণ (detail) খেয়াল করুন। মূল বক্তব্য এক লাইনে ধরার চেষ্টা করুন।",
      },
      {
        type: "writing",
        title: "My Daily Report",
        titleBn: "আমার দৈনিক রিপোর্ট",
        instructionsBn:
          "নিজের একদিনের অফিস/পড়াশোনার কাজ নিয়ে নিচের সূত্র ব্যবহার করে ৪টি বাক্য লিখুন: (ক) একটি কাজ যা শেষ করেছেন, (খ) একটি কাজ যা এখন করছেন, (গ) একটি কাজ যা করবেন ও সময়, (ঘ) একটি নম্র অনুরোধ।",
        prompts: [
          "I have finished ...",
          "I am working on ...",
          "I will ... by ...",
          "Could you ...?",
        ],
        answerKey: "Example: I have finished the weekly summary. I am working on the customer list. I will send the final file by 5 pm. Could you please check my draft before I send it?",
        answerKeyBn: "চারটি বাক্যেই আলাদা কাঠামো ব্যবহৃত হয়েছে — লক্ষ করুন কীভাবে একই ব্যক্তির কাজের একদিন ইংরেজিতে ফুটে ওঠে।",
      },
    ],
    quiz: [
      {
        id: "d52-q1",
        type: "multiple-choice",
        promptBn: "অফিসে ফাইল চাওয়ার সবচেয়ে নম্র উপায় কোনটি?",
        options: [
          { key: "a", text: "Give me the file now." },
          { key: "b", text: "Where is the file?" },
          { key: "c", text: "Could you send me the file, please?" },
          { key: "d", text: "File send." },
        ],
        answer: "c",
        explanationBn: "Could you + verb + please — এটিই সবচেয়ে নম্র ও পেশাদার অনুরোধের রূপ।",
      },
      {
        id: "d52-q2",
        type: "fill-blank",
        promptBn: "\"আপনি কি আমাকে ফাইলটি পাঠিয়ে দিতে পারবেন?\" → Could you ___ me the file?",
        answer: "send",
        explanationBn: "modal verb (could)-এর পরে base form: could you send।",
      },
      {
        id: "d52-q3",
        type: "translate-bn-en",
        promptBn: "\"আমি প্রকল্পের কাজ শেষ করেছি।\" — ইংরেজি কী হবে?",
        answer: "i have finished the project work",
        acceptableAnswers: ["i have finished the project work."],
        explanationBn: "আমি = I, শেষ করেছি = have finished, প্রকল্পের কাজ = the project work।",
      },
      {
        id: "d52-q4",
        type: "correct-sentence",
        promptBn: "\"We discussed about the budget.\" — বাক্যটি ঠিক করুন।",
        answer: "we discussed the budget",
        acceptableAnswers: ["we discussed the budget."],
        explanationBn: "discuss-এর পরে about বসে না: We discussed the budget. (কিন্তু talk about the budget সঠিক।)",
      },
      {
        id: "d52-q5",
        type: "multiple-choice",
        promptBn: "কোন বাক্যটি একটি সম্পন্ন (finished) কাজের কথা জানায়?",
        options: [
          { key: "a", text: "I am working on the report." },
          { key: "b", text: "I have submitted the report." },
          { key: "c", text: "I will submit the report." },
          { key: "d", text: "I usually submit reports." },
        ],
        answer: "b",
        explanationBn: "have + submitted (Present Perfect) মানে কাজ শেষ হয়ে গেছে — এটি সম্পন্ন কাজের রিপোর্ট।",
      },
      {
        id: "d52-q6",
        type: "translate-bn-en",
        promptBn: "\"আমার ডেডলাইন আগামী শুক্রবার।\" — ইংরেজি কী হবে?",
        answer: "my deadline is next friday",
        acceptableAnswers: ["my deadline is next friday.", "my deadline is next friday", "my deadline is for next friday"],
        explanationBn: "আমার ডেডলাইন = my deadline, আগামী শুক্রবার = next Friday।",
      },
      {
        id: "d52-q7",
        type: "fill-blank",
        promptBn: "\"আমি এখন প্রেজেন্টেশনে কাজ করছি।\" → I am ___ on the presentation.",
        answer: "working",
        explanationBn: "Present Continuous: am + verb-ing = am working।",
      },
      {
        id: "d52-q8",
        type: "multiple-choice",
        promptBn: "কোন বাক্যটি শুদ্ধ?",
        options: [
          { key: "a", text: "I have a good news." },
          { key: "b", text: "I have good news." },
          { key: "c", text: "I have good newses." },
          { key: "d", text: "I have the good newses." },
        ],
        answer: "b",
        explanationBn: "news uncountable noun; এর আগে a বসে না এবং এর plural হয় না।",
      },
      {
        id: "d52-q9",
        type: "correct-sentence",
        promptBn: "\"Could you told me the time?\" — বাক্যটি ঠিক করুন।",
        answer: "could you tell me the time",
        acceptableAnswers: ["could you tell me the time."],
        explanationBn: "could-এর পরে base form: could you tell। 'told' (past) বসালে অনুমোদিত নয়।",
      },
      {
        id: "d52-q10",
        type: "translate-bn-en",
        promptBn: "\"পরিবর্তনের কথা দয়া করে সবাইকে জানিয়ে দিন।\" — ইংরেজি কী হবে?",
        answer: "please notify everyone about the change",
        acceptableAnswers: ["please notify everyone about the change."],
        explanationBn: "জানিয়ে দেওয়া = notify, সবাইকে = everyone, পরিবর্তন = change।",
      },
    ],
    homework: {
      instructionsBn:
        "১) আপনার একটি সাধারণ অফিস/কাজের দিন ইংরেজিতে ৬টি বাক্যে লিখুন: তিনটি কাজ শেষ করেছেন (has/have finished), দুইটি চলছে (am working), একটি করবেন (will)। ২) পরিবারের সদস্যকে 'Could you...' দিয়ে তিনটি নম্র অনুরোধ করে দেখান। ৩) এই ১২টি শব্দের তালিকা বানিয়ে প্রতিটি দিয়ে একটি করে বাক্য লিখুন: colleague, manager, deadline, meeting, report, task, schedule, project, department, attend, assign, notify।",
      tasks: [
        { bn: "একটি কাজের দিন ৬টি বাক্যে রিপোর্ট করুন (3 finished + 2 ongoing + 1 future)।", en: "Report a work day in six sentences (3 finished + 2 ongoing + 1 future)." },
        { bn: "পরিবারের সদস্যকে 'Could you...' দিয়ে ৩টি নম্র অনুরোধ করুন।", en: "Make three polite requests with 'Could you...' to a family member." },
        { bn: "১২টি অফিস শব্দের প্রতিটি দিয়ে একটি করে ইংরেজি বাক্য লিখুন।", en: "Write one English sentence for each of the twelve office words." },
      ],
      answerKey: "Example: I have finished the data entry. I have sent two emails. I have updated the list. I am working on the presentation. I am checking the schedule. I will complete everything by Thursday.",
      answerKeyBn: "লক্ষ করুন: finished/updated/sent — V3, working/checking — V-ing, will complete — ভবিষ্যৎ। তিনটি পর্যায়ই যেন প্রতিটি বাক্যে স্পষ্ট হয়।",
    },
  },

  /* ------------------------------------------------------------------ */
  /* DAY 53 — PROFESSIONAL INTRODUCTIONS                                 */
  /* ------------------------------------------------------------------ */
  {
    day: 53,
    title: "Professional Introductions",
    titleBn: "আনুষ্ঠানিক পরিচয়",
    level: 3,
    durationMinutes: 30,
    objectives: [
      "আনুষ্ঠানিকভাবে নিজের পরিচয় ইংরেজিতে দিতে পারবেন।",
      "অন্যকে (সহকর্মী, অতিথি, অংশীদার) সঠিকভাবে পরিচয় করাতে পারবেন।",
      "বিজনেস কার্ড বিনিময় ও অভ্যর্থনার ভাষা শিখবেন।",
      "আনুষ্ঠানিক (formal) ও বন্ধুত্বপূর্ণ (casual) পরিস্থিতির পার্থক্য বুঝতে পারবেন।",
    ],
    intro: [
      "নতুন মানুষ, নতুন কোম্পানি — প্রতিটি পেশাদার জীবনের শুরু হয় পরিচয় দিয়ে। \"ইনি আমাদের নতুন ম্যানেজার\", \"এটা আমার বিজনেস কার্ড\", \"আপনার সঙ্গে পরিচিত হয়ে আনন্দিত\" — এই বাক্যগুলো যদি ঠিক করে বলা যায়, তবে প্রথম ছাপই ইতিবাচক হয়। আজকের পাঠে আমরা শিখব আনুষ্ঠানিক পরিচয়ের পুরো রীতি — নিজের পরিচয়, অন্যকে পরিচয় করানো এবং বিজনেস কার্ড বিনিময়।",
      "মনে রাখার মূল কথা হলো register, অর্থাৎ পরিস্থিতি অনুযায়ী ভাষার স্তর। পরিচালক পর্ষদে বসে \"Hi, I'm Rahim\" বললে সেটি মানানসই নয়; সেখানে বলা হয় \"Good morning. Allow me to introduce myself. I am Rahim Khan, the accounts officer.\" আবার একই মানুষ যখন বন্ধুদের সঙ্গে চা খান, তখন স্বাভাবিকভাবেই তিনি \"Hey, I'm Rahim\" বলেন। বাংলায়ও তো আমরা জাতীয় অনুষ্ঠানে \"আমি অমুক অমুক\" আর বন্ধুদের মধ্যে \"আমি অমুক\" বলি — ইংরেজিতেও ঠিক সে কথাই।",
      "বিজনেস কার্ড বিনিময়ের একটি নিয়মও আজ শিখব: কার্ড দেওয়ার সময় দুই হাতে দিন, চোখে চোখ রেখে হাসুন, আর বলুন \"Here is my business card. Please feel free to contact me.\" — আজকের সব অনুশীলনেই এই বাক্যগুলোর পুনরাবৃত্তি থাকবে, যেন মুখে গেঁথে যায়।",
    ],
    grammar: {
      title: "অন্যকে পরিচয় করানো (Introducing Someone)",
      explanationBn:
        "নিজের পরিচয় দিতে: Let me introduce myself বা Allow me to introduce myself + I am + নাম + (পদ)। অন্যকে পরিচয় করাতে third person-এ দুই ধরনের কাঠামো ব্যবহৃত হয়: This is + নাম + , our + পদ (This is Mrs. Salma, our new HR manager) অথবা I would like to introduce you to + নাম। আনুষ্ঠানিক অভিবাদনের জন্য: It is a pleasure to meet you / It is nice to meet you। পরিচয়ের পর যোগ করা হয় পেশা বা বিভাগের তথ্য: I work in the marketing department / She has recently joined our team। আরেকটি গুরুত্বপূর্ণ কথা — 'This is Mr. Karim, he is our senior officer' এর মতো বাক্যে কমা দিয়ে দুটি full clause জুড়ে দেওয়া ঠিক নয়; বলা ভালো 'This is Mr. Karim, our senior officer'।",
      patterns: [
        {
          label: "নিজের পরিচয়",
          template: "Let me introduce myself. I am + name + (position).",
          bn: "Let me introduce myself. I am Tanvir Ahmed, the accounts officer.",
        },
        {
          label: "অন্যকে পরিচয়",
          template: "This is + name + , our + position.",
          bn: "This is Mrs. Salma, our new HR manager.",
        },
        {
          label: "আনুষ্ঠানিক অভিবাদন",
          template: "It is a pleasure to meet you.",
          bn: "আপনার সঙ্গে পরিচিত হয়ে আনন্দিত।",
        },
        {
          label: "কার্ড বিনিময়",
          template: "Here is my business card.",
          bn: "এই নিন আমার বিজনেস কার্ড।",
        },
      ],
      examples: [
        { en: "Allow me to introduce myself. I am Rahim Khan.", bn: "আমাকে নিজের পরিচয় দেওয়ার অনুমতি দিন। আমি রহিম খান।" },
        { en: "This is Mrs. Salma, our new marketing manager.", bn: "ইনি মিসেস সালমা, আমাদের নতুন বিপণন ব্যবস্থাপক।" },
        { en: "It is a pleasure to meet you.", bn: "আপনার সঙ্গে দেখা হয়ে আনন্দিত হলাম।" },
        { en: "Here is my business card.", bn: "এই নিন আমার বিজনেস কার্ড।" },
        { en: "I work in the sales department.", bn: "আমি বিক্রয় বিভাগে কাজ করি।" },
        { en: "She has recently joined our team.", bn: "তিনি সম্প্রতি আমাদের দলে যোগ দিয়েছেন।" },
      ],
    },
    commonMistakes: [
      {
        wrong: "I introduce myself.",
        right: "Let me introduce myself.",
        noteBn:
          "নিজের পরিচয় দেওয়ার সময় 'I introduce myself' হয় না — বরং ভদ্রতার কাঠামো 'Let me introduce myself' ব্যবহার হয়। বাংলার \"আমি নিজের পরিচয় দিই\" এর সরাসরি অনুবাদ ভুল।",
      },
      {
        wrong: "This is Mr. Karim, he is our senior officer.",
        right: "This is Mr. Karim, our senior officer.",
        noteBn:
          "কমা দিয়ে দুটি সম্পূর্ণ বাক্য (clause) জুড়ে দিলে তা ভুল। হয় দুই বাক্য আলাদা করুন, নয়তো দ্বিতীয় অংশটিকে উপাধি হিসেবে যুক্ত করুন: This is Mr. Karim, our senior officer.",
      },
      {
        wrong: "I am pleasure to meet you.",
        right: "It is a pleasure to meet you.",
        noteBn:
          "আনন্দিত হওয়া বোঝাতে বলা হয় 'It is a pleasure to meet you' বা 'I am pleased to meet you'। 'I am pleasure' ভুল — pleasure noun, pleased adjective।",
      },
    ],
    vocab: [
      { word: "introduce", meaningBn: "পরিচয় করানো", exampleEn: "Let me introduce you to our team.", exampleBn: "আমি আপনাকে আমাদের দলের সঙ্গে পরিচয় করিয়ে দিই।" },
      { word: "pleasure", meaningBn: "আনন্দ / সৌভাগ্য", exampleEn: "It is a pleasure to meet you.", exampleBn: "আপনার সঙ্গে পরিচিত হয়ে আনন্দিত হলাম।" },
      { word: "business card", meaningBn: "বিজনেস কার্ড", exampleEn: "Here is my business card.", exampleBn: "এই নিন আমার বিজনেস কার্ড।" },
      { word: "senior", meaningBn: "উর্ধ্বতন / সিনিয়র", exampleEn: "He is a senior officer here.", exampleBn: "তিনি এখানে একজন সিনিয়র কর্মকর্তা।" },
      { word: "junior", meaningBn: "কনিষ্ঠ / জুনিয়র", exampleEn: "I am a junior accountant.", exampleBn: "আমি একজন জুনিয়র হিসাবরক্ষক।" },
      { word: "client", meaningBn: "ক্লায়েন্ট / ক্রেতা প্রতিষ্ঠান", exampleEn: "An important client will visit us today.", exampleBn: "আজ একজন গুরুত্বপূর্ণ ক্লায়েন্ট আমাদের সফর করবেন।" },
      { word: "partner", meaningBn: "অংশীদার", exampleEn: "We are working with a foreign partner.", exampleBn: "আমরা একটি বিদেশি অংশীদারের সঙ্গে কাজ করছি।" },
      { word: "position", meaningBn: "পদ", exampleEn: "Her position is senior executive.", exampleBn: "তাঁর পদ সিনিয়র এক্সিকিউটিভ।" },
      { word: "join", meaningBn: "যোগ দেওয়া", exampleEn: "She has recently joined our company.", exampleBn: "তিনি সম্প্রতি আমাদের কোম্পানিতে যোগ দিয়েছেন।" },
      { word: "recently", meaningBn: "সম্প্রতি", exampleEn: "We recently started a new branch.", exampleBn: "আমরা সম্প্রতি একটি নতুন শাখা চালু করেছি।" },
      { word: "company", meaningBn: "কোম্পানি / প্রতিষ্ঠান", exampleEn: "My company is in Motijheel.", exampleBn: "আমার কোম্পানি মতিঝিলে।" },
      { word: "visitor", meaningBn: "দর্শনার্থী / অতিথি", exampleEn: "Please welcome our overseas visitor.", exampleBn: "দয়া করে আমাদের বিদেশি অতিথিকে স্বাগতম জানান।" },
    ],
    sentences: [
      { bn: "আমাকে নিজের পরিচয় দেওয়ার অনুমতি দিন।", en: "Allow me to introduce myself." },
      { bn: "ইনি মিসেস সালমা, আমাদের নতুন এইচআর ম্যানেজার।", en: "This is Mrs. Salma, our new HR manager." },
      { bn: "আপনার সঙ্গে পরিচিত হয়ে আনন্দিত হলাম।", en: "It is a pleasure to meet you." },
      { bn: "এই নিন আমার বিজনেস কার্ড।", en: "Here is my business card." },
      { bn: "আমি বিপণন বিভাগে কাজ করি।", en: "I work in the marketing department." },
      { bn: "তিনি সম্প্রতি আমাদের দলে যোগ দিয়েছেন।", en: "She has recently joined our team." },
      { bn: "আপনি কোন কোম্পানিতে কাজ করেন?", en: "Which company do you work for?", noteBn: "প্রশ্নের শেষের for-টি যাের — কাজ করা হয় 'for' কোনো প্রতিষ্ঠানে।" },
      { bn: "আমি একজন জুনিয়র হিসাবরক্ষক।", en: "I am a junior accountant." },
      { bn: "আজ একজন গুরুত্বপূর্ণ ক্লায়েন্ট আমাদের সফর করবেন।", en: "An important client will visit us today." },
      { bn: "দয়া করে আমাদের নতুন অংশীদারকে স্বাগতম জানান।", en: "Please welcome our new partner." },
      { bn: "আমার পদ হলো সিনিয়র এক্সিকিউটিভ।", en: "My position is senior executive." },
      { bn: "ইনি আমাদের বিক্রয় দলের প্রধান।", en: "This is the head of our sales team." },
    ],
    exercises: [
      {
        type: "speaking",
        title: "Introduce a Colleague",
        titleBn: "একজন সহকর্মীর পরিচয় করান",
        instructionsBn:
          "একটি চেনা পরিস্থিতি কল্পনা করুন: আপনার প্রধান আপনাকে একজন নতুন অতিথির সাথে পরিচয় করিয়ে দিচ্ছেন। নিচের সংলাপ অনুশীলন করুন, তারপর নাম ও পদ বদলে নিজের মতো করে বলুন।",
        dialogue: [
          { bn: "শুভ সকাল। আমি কি আপনাকে আমাদের ব্যয় হিসাব বিভাগের সাথেও পরিচয় করিয়ে দিতে পারি?", en: "Good morning. May I introduce you to our accounts team as well?" },
          { bn: "অবশ্যই, আপনার সঙ্গে পরিচিত হতে পেরে আনন্দিত।", en: "Of course, I am delighted to meet them." },
          { bn: "ইনি মিঃ রাশেদ, আমাদের জুনিয়র অ্যাকাউন্ট্যান্ট। আর ইনি মিঃ ডেভিড, আমাদের অতিথি।", en: "This is Mr. Rashid, our junior accountant. And this is Mr. David, our visitor." },
          { bn: "আপনার সঙ্গে পরিচয় হয়ে ভালো লাগল।", en: "It is very nice to meet you." },
          { bn: "আমিও। আপনি কোন কোম্পানি থেকে এসেছেন?", en: "Nice to meet you too. Which company are you from?" },
          { bn: "আমি ঢাকার একটি রফতানি কোম্পানি থেকে এসেছি।", en: "I am from an export company in Dhaka." },
        ],
        stepsBn: [
          "প্রতিটি ভূমিকার জন্য 'This is + নাম + , our + পদ' কাঠামোটি ব্যবহার করুন।",
          "পরিচয়ের পর সঙ্গে সঙ্গেই একটি সৌজন্যমূলক বাক্য যোগ করুন।",
          "নিজের কল্পিত নাম-পদ দিয়ে একই সংলাপ ২ বার বলুন।",
        ],
        answerKey: "May I introduce you to...? / This is Mr. Rashid, our junior accountant. / It is very nice to meet you. / I am from the export company in Dhaka.",
        answerKeyBn: "লক্ষ করুন: May I introduce — এখানে may আরও বেশি ভদ্র; এই ধরনের বাক্য পরিচালক বা অতিথির সামনে মানানসই।",
      },
      {
        type: "speaking",
        title: "Your Business Card Pitch",
        titleBn: "বিজনেস কার্ড দিয়ে পরিচিতি",
        instructionsBn:
          "নিচের তথ্য নিয়ে একটি পরিচিতিমূলক বক্তব্য তৈরি করুন, তারপর কল্পিত বিজনেস কার্ড বাড়িয়ে বলুন। পুরো অনুশীলনটি ৩০ সেকেন্ডে শেষ করতে হবে।",
        prompts: [
          "Good morning. Allow me to introduce myself.",
          "I am [name], the [position] of [company].",
          "Here is my business card.",
          "Please feel free to contact me if you need anything.",
        ],
        stepsBn: [
          "প্রথমে নিজের সত্যিকারের নাম, পদ ও কোম্পানির তথ্য বসান।",
          "বাক্যগুলো সাজিয়ে পুরো অনুশীলনটি ৩ বার জোরে বলুন।",
          "শেষবারে দাঁড়িয়ে, হাসিমুখে এবং চোখে চোখ রেখে বলুন।",
        ],
        answerKey: "Good morning. Allow me to introduce myself. I am Farhana Akter, the sales manager of Biswas Textiles. Here is my business card. Please feel free to contact me if you need anything.",
        answerKeyBn: "সবচেয়ে গুরুত্বপূর্ণ অংশ হলো শেষ বাক্য — 'Please feel free to contact me' — এতে যোগাযোগের আমন্ত্রণ থাকে।",
      },
      {
        type: "writing",
        title: "Write the Introduction Speech",
        titleBn: "পরিচয়ভিত্তিক বক্তৃতা লেখা",
        instructionsBn:
          "ধরুন, আগামী সোমবার একটি নতুন কর্মকর্তা আপনার কোম্পানিতে যোগ দেবেন। সাপ্তাহিক মিটিংয়ে তাঁকে পরিচয় করিয়ে দেওয়ার জন্য ৫টি বাক্যের একটি বক্তৃতা লিখুন। নিচের তিনটি তথ্য ব্যবহার করুন: নাম, পদ, পূর্বের অভিজ্ঞতা।",
        prompts: [
          "Good morning, everyone.",
          "I would like to introduce our new colleague.",
          "This is [name], our new [position].",
          "He/She has worked at [company] for [years].",
          "Please join me in welcoming [name].",
        ],
        answerKey: "Good morning, everyone. I would like to introduce our new colleague. This is Mr. Ripon Sarker, our new logistics officer. He has worked at a shipping company for four years. Please join me in welcoming Mr. Sarker.",
        answerKeyBn: "এই বক্তৃতার কাঠামোটি মনে রাখুন: শুভেচ্ছা → পরিচয়ের ঘোষণা → নাম ও পদ → অভিজ্ঞতা → স্বাগত জানানো।",
      },
    ],
    quiz: [
      {
        id: "d53-q1",
        type: "multiple-choice",
        promptBn: "নিজের পরিচয় দেওয়ার ভদ্রতম ইংরেজি কোনটি?",
        options: [
          { key: "a", text: "I introduce myself." },
          { key: "b", text: "Let me introduce myself." },
          { key: "c", text: "I am introducing my self." },
          { key: "d", text: "Myself is Rahim." },
        ],
        answer: "b",
        explanationBn: "'Let me introduce myself' — এটিই স্বীকৃত ভদ্র কাঠামো। 'Myself is Rahim' সাধারণ ভুল, আর 'I introduce myself' অনর্থক।",
      },
      {
        id: "d53-q2",
        type: "fill-blank",
        promptBn: "\"ইনি সালমা, আমাদের নতুন ম্যানেজার।\" → ___ is Mrs. Salma, our new HR manager.",
        answer: "this",
        explanationBn: "পরিচয় করানোর সময় third person-এ 'This is... ' বসে।",
      },
      {
        id: "d53-q3",
        type: "translate-bn-en",
        promptBn: "\"আপনার সঙ্গে দেখা হয়ে আনন্দিত হলাম।\" — ইংরেজি কী হবে?",
        answer: "it is a pleasure to meet you",
        acceptableAnswers: ["it is a pleasure to meet you.", "it's a pleasure to meet you."],
        explanationBn: "আনন্দিত = a pleasure, দেখা হওয়া = to meet you। হবে: It is a pleasure to meet you.",
      },
      {
        id: "d53-q4",
        type: "multiple-choice",
        promptBn: "\"এই নিন আমার বিজনেস কার্ড।\" — ইংরেজি কোনটি?",
        options: [
          { key: "a", text: "Take card." },
          { key: "b", text: "Here is my business card." },
          { key: "c", text: "I give card." },
          { key: "d", text: "This card is mine." },
        ],
        answer: "b",
        explanationBn: "বিজনেস কার্ড বিনিময়ে প্রথাগত বাক্য: Here is my business card.",
      },
      {
        id: "d53-q5",
        type: "correct-sentence",
        promptBn: "\"This is Mr. Karim, he is our senior officer.\" — বাক্যটি ঠিক করুন।",
        answer: "this is mr karim our senior officer",
        acceptableAnswers: ["this is mr. karim, our senior officer", "this is mr karim, our senior officer", "this is mr. karim our senior officer."],
        explanationBn: "কমা + নতুন clause না করে, দ্বিতীয় অংশটিকে উপাধি হিসেবে যুক্ত করুন: This is Mr. Karim, our senior officer.",
      },
      {
        id: "d53-q6",
        type: "translate-bn-en",
        promptBn: "\"তিনি সম্প্রতি আমাদের দলে যোগ দিয়েছেন।\" — ইংরেজি কী হবে?",
        answer: "she has recently joined our team",
        acceptableAnswers: ["she has recently joined our team.", "he has recently joined our team"],
        explanationBn: "সম্প্রতি = recently; have/has + joined (Present Perfect) — recently-এর সঙ্গে Present Perfect মানানসই।",
      },
      {
        id: "d53-q7",
        type: "fill-blank",
        promptBn: "\"আপনি কোন কোম্পানিতে কাজ করেন?\" → Which company do you work ___?",
        answer: "for",
        explanationBn: "কাজ করা হয় কোনো প্রতিষ্ঠানের জন্য (for)। প্রশ্নের শেষে for বসে: Which company do you work for?",
      },
      {
        id: "d53-q8",
        type: "multiple-choice",
        promptBn: "পরিচয়ের প্রথম ছাপ ভালো রাখতে কোন বাক্যটি সবচেয়ে পেশাদার?",
        options: [
          { key: "a", text: "Yo, what's up?" },
          { key: "b", text: "Hello, where do you live?" },
          { key: "c", text: "Good morning. It is a pleasure to meet you." },
          { key: "d", text: "Give me your name." },
        ],
        answer: "c",
        explanationBn: "'Good morning + It is a pleasure to meet you' — আনুষ্ঠানিক, ভদ্র ও পেশাদার।",
      },
      {
        id: "d53-q9",
        type: "correct-sentence",
        promptBn: "\"I am pleasure to meet you.\" — বাক্যটি ঠিক করুন।",
        answer: "i am pleased to meet you",
        acceptableAnswers: ["it is a pleasure to meet you", "i am pleased to meet you.", "it is a pleasure to meet you."],
        explanationBn: "pleasure (noun) নয়, pleased (adjective) বসে: I am pleased to meet you। অথবা It is a pleasure to meet you।",
      },
      {
        id: "d53-q10",
        type: "translate-bn-en",
        promptBn: "\"আমি বিপণন বিভাগে কাজ করি।\" — ইংরেজি কী হবে?",
        answer: "i work in the marketing department",
        acceptableAnswers: ["i work in the marketing department."],
        explanationBn: "কাজ করি = I work, বিপণন বিভাগে = in the marketing department (কোনো বিভাগে = in)।",
      },
    ],
    homework: {
      instructionsBn:
        "১) ঘরের সবাইকে জড়ো করে প্রত্যেককে 'This is..., our...' কাঠামো দিয়ে ইংরেজিতে পরিচয় করিয়ে দিন — মা, বাবা, ভাইবোন সবার জন্য আলাদা বাক্য। ২) নিজের জন্য ৫টি বাক্যের পরিচয় লিখে রেকর্ড করুন: Allow me to introduce myself... ৩) কল্পিত বিজনেস কার্ডে নাম, পদ, কোম্পানি লেখার অনুশীলন করুন এবং 'Please feel free to contact me' বাক্যটি ১০ বার জোরে বলুন।",
      tasks: [
        { bn: "পরিবারের সদস্যদের 'This is..., our...' দিয়ে ইংরেজিতে পরিচয় করান।", en: "Introduce your family members in English using 'This is..., our...'." },
        { bn: "নিজের ৫ বাক্যের আনুষ্ঠানিক পরিচয় লিখে রেকর্ড করুন।", en: "Write and record your five-sentence formal introduction." },
        { bn: "'Here is my business card. Please feel free to contact me.' — ১০ বার জোরে বলুন।", en: "Say 'Here is my business card. Please feel free to contact me.' ten times aloud." },
      ],
      answerKey: "Example: Good morning. Allow me to introduce myself. I am Fahim Hasan, the training officer of Dhaka Group. Here is my business card. Please feel free to contact me if you need anything.",
      answerKeyBn: "পরিচয়ের সময় তিনটি জিনিস ঠিক রাখুন: স্পষ্ট উচ্চারণ, স্বাভাবিক হাসি এবং সংক্ষিপ্ততা।",
    },
  },

  /* ------------------------------------------------------------------ */
  /* DAY 54 — WRITING SIMPLE EMAILS                                      */
  /* ------------------------------------------------------------------ */
  {
    day: 54,
    title: "Writing Simple Emails",
    titleBn: "সাধারণ ইমেইল লেখা",
    level: 3,
    durationMinutes: 35,
    objectives: [
      "ইমেইলের পাঁচটি অংশ — বিষয়, সম্বোধন, সূচনা, মূল অংশ, সমাপ্তি — শিখবেন।",
      "একটি পেশাদার ইমেইল লেখার পুরো প্রক্রিয়া আয়ত্ত করবেন।",
      "আনুষ্ঠানিক ও অনানুষ্ঠানিক ইমেইলের পার্থক্য বুঝতে পারবেন।",
      "নির্দেশনা ধরে সম্পূর্ণ ইমেইল নিজে লিখতে পারবেন (guided writing)।",
    ],
    intro: [
      "কর্মজীবনে সবচেয়ে বেশি ব্যবহৃত ইংরেজি হলো ইমেইল। ছুটির আবেদন, মিটিংয়ের সময় পরিবর্তন, ফাইল পাঠানো — প্রতিদিনের অফিস কাজের সিংহভাগই ইমেইলের মাধ্যমে হয়। অথচ বেশিরভাগ মানুষ ইমেইলের শুরুটাই করে ভুলভাবে; হয় \"Dear Sir\" লিখে নাম ভুলে যান, নয়তো বিষয় (subject) ফাঁকা রেখে পাঠান। আজকের পাঠে আমরা ইমেইল লেখার নির্ভরযোগ্য একটি কাঠামো শিখব, যা জীবনের যেকোনো প্রাতিষ্ঠানিক চিঠিতে কাজে লাগবে।",
      "ইমেইলের পাঁচটি অংশ ঠিক করুন: (১) subject — এক লাইনে ইমেইলের বিষয়; (২) greeting — সম্বোধন, যেমন Dear Mr. Hasan; (৩) opening — সূচনা, যেমন I am writing to...; (৪) body — মূল কথা, ছোট ছোট অনুচ্ছেদে; (৫) closing — সমাপ্তি, যেমন Best regards, তারপর আপনার নাম। এই পাঁচটি অংশ সঠিক ক্রমে রাখলেই একটি ইমেইল 'পেশাদার' হতে শুরু করে।",
      "আজকের শেষ অনুশীলনে আপনি একটি সম্পূর্ণ ইমেইল নিজে লিখবেন — নির্দেশনা দেওয়া থাকবে, আপনি সেগুলো ধরে ধরে লিখবেন। এ ধরনের guided writing-ই সবচেয়ে দ্রুত দক্ষতা বাড়ায়।",
    ],
    grammar: {
      title: "ইমেইলের পাঁচটি অংশ",
      explanationBn:
        "একটি সোজা অফিস ইমেইল লিখতে চারটি কার্যকরী কাঠামো জেনে নিন। (১) সূচনা: I am writing to + verb — যেকোনো ইমেইলের নিরাপদ সূচনা: I am writing to request..., I am writing to confirm...। (২) মূল অংশে সরল ও সংক্ষিপ্ত বাক্য — Present Simple বা Present Continuous যথেষ্ট; জটিল বাক্য নয়। (৩) অনুরোধ: Could you please + verb? (৪) সমাপ্তি: I look forward to + verb-ing / your reply — মনে রাখবেন look forward to-এর পরে gerund (−ing) বসে: I look forward to hearing from you। সমাপ্তির আদর্শ লাইন: Sincerely, / Best regards, + আপনার পুরো নাম। আনুষ্ঠানিক ইমেইলে সংকোচন (I'm, don't) না লেখাই ভালো; লিখুন I am, do not।",
      patterns: [
        {
          label: "বিষয়",
          template: "Short and clear: Request for Leave / Meeting on Friday",
          bn: "subject এক লাইনে মূল বিষয় — পাঠক যেন না খুলেই ধারণা পান।",
        },
        {
          label: "সূচনা",
          template: "I am writing to + verb + ...",
          bn: "I am writing to request a day of leave on Monday.",
        },
        {
          label: "সমাপ্তির আগে",
          template: "I look forward to + verb-ing",
          bn: "I look forward to hearing from you. — to-এর পরে gerund।",
        },
        {
          label: "সমাপ্তি",
          template: "Best regards, / Sincerely, + name",
          bn: "Best regards,\nFarhana Akter — নাম দুই লাইন পর।",
        },
      ],
      examples: [
        { en: "Subject: Request for Leave", bn: "বিষয়: ছুটির আবেদন" },
        { en: "I am writing to request a day of leave on Monday.", bn: "আমি সোমবারের ছুটির জন্য আবেদন করতে লিখছি।" },
        { en: "I am writing to confirm our meeting at 10 am.", bn: "সকাল ১০টার মিটিং নিশ্চিত করতে আমি লিখছি।" },
        { en: "Could you please attach the file?", bn: "দয়া করে কি আপনি ফাইলটি সংযুক্ত করতে পারবেন?" },
        { en: "I look forward to hearing from you.", bn: "আমি আপনার উত্তর পেয়ে আনন্দিত হব।" },
        { en: "Best regards, Farhana Akter", bn: "শুভেচ্ছা সহকারে, ফারহানা আক্তার" },
      ],
    },
    commonMistakes: [
      {
        wrong: "I look forward to hear from you.",
        right: "I look forward to hearing from you.",
        noteBn:
          "look forward to-এর 'to' এখানে preposition — তাই এর পরে verb-এর gerund (−ing) রূপ বসে: looking forward to hearing। এটি পরীক্ষা ও অফিস — দুই জায়গাতেই বহুল প্রচলিত ভুল।",
      },
      {
        wrong: "Dear Sir,\nI am sending the attachment please check it",
        right: "Dear Sir,\nPlease check the attachment.",
        noteBn:
          "দুটি বাক্য কমা দিয়ে না জুড়ে আলাদা রাখুন। সংক্ষিপ্ত সরল বাক্যই ইমেইলে স্পষ্ট। আর অফিসিয়াল ইমেইলে 'Dear Sir' শুধু নাম জানা না থাকলে — নাম জানা থাকলে Dear Mr./Ms. + name।",
      },
      {
        wrong: "Subject is empty; body starts with 'I am writing to inform that...'",
        right: "Subject: Meeting Time Change",
        noteBn:
          "subject ফাঁকা রাখা ইমেইলের সবচেয়ে বড় ভুল কারিগরি দিক — পাঠক স্প্যাম ভাবতে পারেন। বিষয় সবসময় এক লাইনে, পরিষ্কারভাবে দিন।",
      },
    ],
    vocab: [
      { word: "email", meaningBn: "ইমেইল", exampleEn: "Please send the details by email.", exampleBn: "দয়া করে তথ্যগুলো ইমেইলে পাঠান।" },
      { word: "subject", meaningBn: "বিষয় (শিরোনাম)", exampleEn: "The subject line should be short.", exampleBn: "বিষয়ের লাইনটি সংক্ষিপ্ত হওয়া উচিত।" },
      { word: "greeting", meaningBn: "সম্বোধন / অভিবাদন", exampleEn: "Start your email with a proper greeting.", exampleBn: "উপযুক্ত সম্বোধন দিয়ে ইমেইল শুরু করুন।" },
      { word: "attachment", meaningBn: "সংযুক্ত ফাইল", exampleEn: "Please send the report as an attachment.", exampleBn: "দয়া করে রিপোর্টটি সংযুক্ত ফাইল হিসেবে পাঠান।" },
      { word: "recipient", meaningBn: "প্রাপক", exampleEn: "Check the recipient's address before sending.", exampleBn: "পাঠানোর আগে প্রাপকের ঠিকানা যাচাই করুন।" },
      { word: "sender", meaningBn: "প্রেরক", exampleEn: "The sender's name is at the bottom.", exampleBn: "প্রেরকের নাম শেষে থাকে।" },
      { word: "reply", meaningBn: "জবাব / উত্তর", exampleEn: "I am waiting for your reply.", exampleBn: "আমি আপনার জবাবের অপেক্ষায় আছি।" },
      { word: "forward", meaningBn: "ফরোয়ার্ড / এগিয়ে পাঠানো", exampleEn: "Please forward this email to the manager.", exampleBn: "দয়া করে এই ইমেইলটি ম্যানেজারের কাছে পাঠান।" },
      { word: "signature", meaningBn: "স্বাক্ষর / সিগনেচার", exampleEn: "Put your phone number in your signature.", exampleBn: "আপনার ফোন নম্বর সিগনেচারে দিন।" },
      { word: "confirm", meaningBn: "নিশ্চিত করা", exampleEn: "I am writing to confirm the meeting.", exampleBn: "মিটিংটি নিশ্চিত করতে আমি লিখছি।" },
      { word: "regarding", meaningBn: "সম্পর্কে / প্রসঙ্গে", exampleEn: "Regarding your question, the report is ready.", exampleBn: "আপনার প্রশ্ন সম্পর্কে বলি, রিপোর্টটি প্রস্তুত।" },
      { word: "request", meaningBn: "অনুরোধ", exampleEn: "This email is a request for information.", exampleBn: "এই ইমেইলটি তথ্যের জন্য একটি অনুরোধ।" },
    ],
    sentences: [
      { bn: "আমি আপনার জবাবের অপেক্ষায় আছি।", en: "I look forward to your reply.", noteBn: "look forward to-এর পরে noun বা gerund বসে।" },
      { bn: "মিটিংয়ের সময় পরিবর্তনের জানাতে আমি লিখছি।", en: "I am writing to change the meeting time." },
      { bn: "দয়া করে সংযুক্ত ফাইলটি দেখুন।", en: "Please see the attachment." },
      { bn: "আপনি কি শুক্রবারের মধ্যে জবাব দিতে পারবেন?", en: "Could you reply by Friday?" },
      { bn: "বিষয়ের লাইনটি সংক্ষিপ্ত হওয়া উচিত।", en: "The subject line should be short." },
      { bn: "আমি সোমবারের ছুটির জন্য আবেদন করছি।", en: "I am writing to request leave on Monday." },
      { bn: "প্রাপকের ঠিকানা ভুল লেখা হয়েছে।", en: "The recipient's address has been written incorrectly.", noteBn: "has been written — এখনো ভুল অবস্থায় আছে, তাই Present Perfect Passive।" },
      { bn: "আপনার ফোন নম্বর সিগনেচারে লিখুন।", en: "Put your phone number in your signature." },
      { bn: "আমি মিটিংটি নিশ্চিত করতে চাই।", en: "I want to confirm the meeting." },
      { bn: "আনুষ্ঠানিক ইমেইলে 'Dear Sir or Madam' লেখা নিরাপদ।", en: "In a formal email, it is safe to write 'Dear Sir or Madam'." },
      { bn: "দয়া করে ইমেইলটি ম্যানেজারের কাছে ফরোয়ার্ড করুন।", en: "Please forward the email to the manager." },
      { bn: "আমি আপনার কাছ থেকে উত্তরের অপেক্ষায় থাকলাম।", en: "I will wait for your reply.", noteBn: "সাধারণত 'I look forward to your reply' বেশি প্রচলিত; 'will wait' সরল রূপ।" },
    ],
    exercises: [
      {
        type: "writing",
        title: "Write a Leave Request Email",
        titleBn: "ছুটির আবেদনের ইমেইল লেখা",
        instructionsBn:
          "পরিস্থিতি: আপনি আগামী বৃহস্পতিবার পারিবারিক কারণে ছুটি চাইছেন, ম্যানেজারের নাম মিঃ রফিক। নিচের ধাপগুলো মেনে ৬–৮ বাক্যের একটি সম্পূর্ণ ইমেইল লিখুন — subject থেকে signature পর্যন্ত। তারপর নিচের নমুনার সঙ্গে মিলিয়ে দেখুন।",
        stepsBn: [
          "subject: এক লাইনে 'Leave Request' লিখুন।",
          "greeting: Dear Mr. Rafiq, লিখুন।",
          "opening: I am writing to request... দিয়ে শুরু করুন।",
          "body: তারিখ, কারণ (সংক্ষেপে) এবং কাজের ক্ষতিপূরণের প্রতিশ্রুতি লিখুন।",
          "closing: I look forward to your reply. / Best regards, + আপনার নাম।",
        ],
        answerKey:
          "Subject: Leave Request\nDear Mr. Rafiq,\nI am writing to request a day of leave on Thursday. I need to attend a family function that day. I have already finished my pending tasks, and I will complete the remaining work on Friday. Could you please approve my leave?\nI look forward to your reply.\nBest regards,\nTanvir Ahmed",
        answerKeyBn: "লক্ষ করুন: সূচনা → কারণ → পরিস্থিতি সামাল দেওয়ার প্রতিশ্রুতি → ভদ্র অনুরোধ → সমাপ্তি। সংক্ষিপ্ত ও স্বচ্ছ — এটি আদর্শ পেশাদার ইমেইল।",
      },
      {
        type: "reading",
        title: "Find the Five Parts",
        titleBn: "পাঁচটি অংশ চিহ্নিত করুন",
        instructionsBn:
          "নিচের ইমেইলটিতে পাঁচটি অংশ আলাদা করুন: subject, greeting, opening, body, closing। প্রতিটি অংশের লাইন নম্বর লিখুন এবং মন্তব্য করুন — কোন অংশটি আনুষ্ঠানিক ভাষায় লেখা হয়েছে।",
        content:
          "1) Subject: Meeting on Friday\n2) Dear Ms. Chowdhury,\n3) I am writing to confirm our meeting on Friday at 2 pm.\n4) We will discuss the new budget in this meeting. Could you please bring the latest report? The meeting will be in the conference room.\n5) I look forward to seeing you.\nBest regards,\nSamiul Karim",
        answerKey:
          "1 = subject; 2 = greeting; 3 = opening (I am writing to confirm); 4 = body; 5 = closing (I look forward to seeing you + Best regards + name). Formal markers: 'Could you please', 'I look forward to', no contractions.",
        answerKeyBn: "পাঁচটি খণ্ডের প্রতিটি এত স্পষ্টভাবে আলাদা থাকে যে পাঠক এক নজরেই পুরো ইমেইলটি বুঝে ফেলে।",
      },
      {
        type: "speaking",
        title: "Leave a Voice Message",
        titleBn: "ভয়েস মেসেজ দেওয়া",
        instructionsBn:
          "ফোনে যখন ধরেন না, তখন ইমেইলের আগেই ভয়েস মেসেজ ছাড়া যায়। নিচের সংলাপটি অনুশীলন করে নিজের মতো একটি ভয়েস মেসেজ বলুন — যেন ম্যানেজারের কণ্ঠস্বর যন্ত্রে ধরা পড়ছে।",
        dialogue: [
          { bn: "হ্যালো মি. রফিক, আমি তানভীর।", en: "Hello Mr. Rafiq, this is Tanvir." },
          { bn: "আমি ছুটির আবেদন জানিয়ে আপনাকে একটি ইমেইল পাঠিয়েছি।", en: "I have sent you an email regarding my leave request." },
          { bn: "দয়া করে সুবিধামতো সময়ে একটু জানাবেন।", en: "Please let me know when you have a moment." },
          { bn: "আপনার উত্তরের অপেক্ষায়, ধন্যবাদ।", en: "I look forward to your reply. Thank you." },
        ],
        stepsBn: [
          "আগে সংলাপটি ৩ বার জোরে পড়ুন।",
          "তারপর নিজের তথ্য বসিয়ে মেসেজটি বলুন — ২০ সেকেন্ডের মধ্যে।",
          "ভয়েস রেকর্ড করে শুনুন: স্পষ্ট উচ্চারণ ও স্বাভাবিক গতি আছে কি না।",
        ],
        answerKey: "Hello Mr. Rafiq, this is Tanvir. I have sent you an email regarding my leave request. Please let me know when you have a moment. I look forward to your reply. Thank you.",
        answerKeyBn: "ভয়েস মেসেজে পরিচয় → বিষয় → অনুরোধ → ধন্যবাদ — এই চারটি ধাপ ঠিক রাখুন।",
      },
    ],
    quiz: [
      {
        id: "d54-q1",
        type: "multiple-choice",
        promptBn: "ইমেইলের কোন অংশে মূল বিষয় এক লাইনে লেখা হয়?",
        options: [
          { key: "a", text: "greeting" },
          { key: "b", text: "subject" },
          { key: "c", text: "attachment" },
          { key: "d", text: "signature" },
        ],
        answer: "b",
        explanationBn: "subject line ইমেইলের শিরোনাম — এখানে সংক্ষেপে মূল বিষয় জানানো হয়।",
      },
      {
        id: "d54-q2",
        type: "fill-blank",
        promptBn: "\"আমি আপনার উত্তর পেয়ে আনন্দিত হব।\" → I look forward to ___ from you.",
        answer: "hearing",
        explanationBn: "look forward to-এর পরে gerund: hearing।",
      },
      {
        id: "d54-q3",
        type: "translate-bn-en",
        promptBn: "\"আমি মিটিংয়ের সময় পরিবর্তনের জন্য লিখছি।\" — ইংরেজি কী হবে?",
        answer: "i am writing to change the meeting time",
        acceptableAnswers: ["i am writing to change the meeting time."],
        explanationBn: "আমি লিখছি = I am writing, সময় পরিবর্তন = to change the time।",
      },
      {
        id: "d54-q4",
        type: "correct-sentence",
        promptBn: "\"I look forward to hear from you.\" — বাক্যটি ঠিক করুন।",
        answer: "i look forward to hearing from you",
        acceptableAnswers: ["i look forward to hearing from you."],
        explanationBn: "to-এর পরে gerund বসে: to hearing। 'to hear' ভুল।",
      },
      {
        id: "d54-q5",
        type: "multiple-choice",
        promptBn: "নাম জানা থাকলে আনুষ্ঠানিক ইমেইলে কোন সম্বোধন (greeting) সঠিক?",
        options: [
          { key: "a", text: "Dear Mr. Rahman," },
          { key: "b", text: "Hey Rahman," },
          { key: "c", text: "Rahman," },
          { key: "d", text: "To Rahman," },
        ],
        answer: "a",
        explanationBn: "Dear + Mr./Ms. + surname — আনুষ্ঠানিক সম্বোধনের আদর্শ রূপ। Hey শুধু বন্ধুদের জন্য।",
      },
      {
        id: "d54-q6",
        type: "fill-blank",
        promptBn: "\"দয়া করে ফাইলটি সংযুক্ত করুন।\" → Could you please ___ the file?",
        answer: "attach",
        explanationBn: "Could you please + base verb: attach।",
      },
      {
        id: "d54-q7",
        type: "translate-bn-en",
        promptBn: "\"আমি সোমবারের ছুটির জন্য আবেদন করছি।\" — ইংরেজি কী হবে?",
        answer: "i am writing to request leave on monday",
        acceptableAnswers: ["i am writing to request leave on monday.", "i am writing to request a leave on monday"],
        explanationBn: "আবেদন করা = request; ছুটি = leave (দিনের নামের আগে on)।",
      },
      {
        id: "d54-q8",
        type: "multiple-choice",
        promptBn: "ইমেইল শেষে 'Best regards,'-এর পর কী লেখা হয়?",
        options: [
          { key: "a", text: "আপনার নাম" },
          { key: "b", text: "মনে থাকা কোন শব্দ" },
          { key: "c", text: "শুধু তারিখ" },
          { key: "d", text: "বিদায়, বন্ধু" },
        ],
        answer: "a",
        explanationBn: "closing-এর পরের লাইনে আপনার পুরো নাম লেখা হয়।",
      },
      {
        id: "d54-q9",
        type: "correct-sentence",
        promptBn: "\"I am writing for confirm the meeting.\" — বাক্যটি ঠিক করুন।",
        answer: "i am writing to confirm the meeting",
        acceptableAnswers: ["i am writing to confirm the meeting."],
        explanationBn: "উদ্দেশ্য বোঝাতে for + verb নয় — to + verb বসে: to confirm।",
      },
      {
        id: "d54-q10",
        type: "multiple-choice",
        promptBn: "ইমেইলে নিচের কোনটিতে আনুষ্ঠানিক রীতি মানা হয়েছে?",
        options: [
          { key: "a", text: "Hey, send the file fast." },
          { key: "b", text: "Please send the file at your earliest convenience." },
          { key: "c", text: "Please to send the file." },
          { key: "d", text: "You gotta send it now." },
        ],
        answer: "b",
        explanationBn: "'at your earliest convenience' — ভদ্র ও আনুষ্ঠানিক; বাকিগুলো অনানুষ্ঠানিক বা মিশ্র ভাষা।",
      },
    ],
    homework: {
      instructionsBn:
        "১) একটি 'Meeting Time Change' ইমেইল লিখুন: মিটিংটি সোমবার থেকে মঙ্গলবার সকাল ১১টায় সরানো হয়েছে — receiver, subject, greeting, body, closing — সব অংশ সহ। ২) আপনার লেখা ইমেইলটি পরিবারের সদস্যকে পড়ে শোনান এবং জিজ্ঞেস করুন — 'Could you please confirm the new time?' ৩) আনুষ্ঠানিক ৫টি সমাপ্তি লাইন লিখুন: Best regards, Sincerely, Yours faithfully, With thanks, Kind regards — প্রতিটির সঙ্গে কখন ব্যবহার হয় তা শিখুন।",
      tasks: [
        { bn: "6–8 বাক্যের একটি Meeting Time Change ইমেইল নিজে লিখুন।", en: "Write a 6–8 sentence 'Meeting Time Change' email yourself." },
        { bn: "লেখা ইমেইলটি পড়ে শোনান এবং সময় নিশ্চিত করার একটি ইংরেজি প্রশ্ন করুন।", en: "Read your email aloud and ask one English question to confirm the time." },
        { bn: "ইমেইলের ৫টি আনুষ্ঠানিক সমাপ্তি লাইন মুখস্থ করুন।", en: "Memorize five formal email closing lines." },
      ],
      answerKey: "Subject: Meeting Time Change\nDear Ms. Chowdhury,\nI am writing to inform you that our meeting has been moved from Monday to Tuesday at 11 am. Please let me know if this new time works for you. I look forward to your confirmation.\nBest regards,\nSamiul Karim",
      answerKeyBn: "সমাপ্তি লাইনগুলোর ব্যবহার: Sincerely/Best regards = প্রায় সব ইমেইল; Yours faithfully = নাম না জানা আনুষ্ঠানিক চিঠি; Kind regards = ভদ্র কিন্তু হালকা।",
    },
  },

  /* ------------------------------------------------------------------ */
  /* DAY 55 — EVERYDAY FORMAL AND INFORMAL ENGLISH                      */
  /* ------------------------------------------------------------------ */
  {
    day: 55,
    title: "Everyday Formal and Informal English",
    titleBn: "দৈনন্দিন আনুষ্ঠানিক ও অনানুষ্ঠানিক ইংরেজি",
    level: 3,
    durationMinutes: 30,
    objectives: [
      "একই ভাবনার আনুষ্ঠানিক ও অনানুষ্ঠানিক দুটি রূপ বলতে পারবেন।",
      "কোন পরিস্থিতিতে কোন স্তর (register) মানানসই তা ঠিক করতে পারবেন।",
      "সংকোচন (I'll), সংক্ষেপ (gonna) ও phrasal verb-এর সঠিক ব্যবহার বুঝবেন।",
      "\"Hi\" থেকে \"Dear Sir\" পর্যন্ত সম্বোধনের মাত্রা জানবেন।",
    ],
    intro: [
      "একই কথা অনেক রকম করে বলা যায়। বন্ধুকে বলবেন \"Hi, how's it going?\", কিন্তু অধ্যাপককে বলবেন \"Good morning, how are you?\" — দুটোই ইংরেজি, কিন্তু স্তর (register) আলাদা। register মানে পরিস্থিতি অনুযায়ী ভাষার রূপ বেছে নেওয়া। যেকোনো ভাষাকেই আমরা এইভাবে সাজাই; ইংরেজিতে এই পার্থক্যটা একটু স্পষ্ট — কারণ আনুষ্ঠানিক ইংরেজি প্রায়ই লম্বা, ভদ্র এবং পরিপূর্ণ বাক্যে চলে।",
      "আজ আমরা একই ভাবনার জোড়া দেখব। \"Can you help me?\" (অনানুষ্ঠানিক) বনাম \"Could you assist me?\" (আনুষ্ঠানিক)। \"Thanks a lot\" বনাম \"Thank you very much indeed\"। \"I'll\" বনাম \"I will\"। আনুষ্ঠানিক ইংরেজিতে সংকোচন (contraction) এড়ানো হয় — I'm না লিখে I am। আর অনানুষ্ঠানিক কথায় phrasal verb (find out, give up, turn down) আর casual শব্দ (gonna, wanna) স্বাভাবিক, কিন্তু চাকরির আবেদন বা রিপোর্টে সেগুলো ঠিক নয়।",
      "ভুল ধারণা এড়িয়ে বলি — অনানুষ্ঠানিক ভাষা 'খারাপ ভাষা' নয়; এটি বন্ধুদের জগতের স্বাভাবিক ভাষা। দক্ষতা হলো দুই জগতেই সঠিকটা বেছে নেওয়া। আজকের অনুশীলনে আমরা একই বাক্য দুবার বলব — একবার বন্ধুর সঙ্গে, একবার বসের সঙ্গে।",
    ],
    grammar: {
      title: "একই কথা, দুই রকম ভাষা",
      explanationBn:
        "register বদলানোর সময় চারটি জিনিস দেখা যায়। (১) সম্বোধন: Hi/Bro → Dear Sir/Madam, Dear Mr. Rahman। (২) সংকোচন: I'm → I am; don't → do not; I'll → I will। (৩) শব্দের মাত্রা: ask → request/enquire; give → provide; get → receive; can → may/could; thanks → thank you. (৪) phrasal verb → সাধারণ আনুষ্ঠানিক ক্রিয়া: find out → discover; give up → surrender/quit; put off → postpone। আনুষ্ঠানিক বাক্য সাধারণত লম্বা হয় না, বরং পরিপূর্ণ হয় — প্রতিটি শব্দ নিজের জায়গায় স্পষ্ট। আজ আমরা অনুশীলনের মাধ্যমে দেখব, একই ব্যক্তি কীভাবে এক দিনে দুই ধরনের পরিস্থিতি সামলান।",
      patterns: [
        {
          label: "অনানুষ্ঠানিক সম্বোধন",
          template: "Hi + name, ...",
          bn: "Hi David, thanks for your help.",
        },
        {
          label: "আনুষ্ঠানিক সম্বোধন",
          template: "Dear Mr./Ms. + name, ...",
          bn: "Dear Mr. Chowdhury, thank you for your kind assistance.",
        },
        {
          label: "অনানুষ্ঠানিক অনুরোধ",
          template: "Can you + verb ...?",
          bn: "Can you send the file?",
        },
        {
          label: "আনুষ্ঠানিক অনুরোধ",
          template: "Could you please + verb ...?",
          bn: "Could you please send the file?",
        },
      ],
      examples: [
        { en: "Hi! / Dear Sir,", bn: "বন্ধুর জন্য Hi; আনুষ্ঠানিক লেখায় Dear Sir।" },
        { en: "Thanks a lot. / Thank you very much.", bn: "ধন্যবাদ জানানোর দুই মাত্রা।" },
        { en: "I'm busy. / I am afraid I am quite busy.", bn: "সংকোচন ছাড়া আনুষ্ঠানিক রূপ।" },
        { en: "Tell me the results. / Could you please inform me of the results?", bn: "সরাসরি নির্দেশ বনাম ভদ্র অনুরোধ।" },
        { en: "Can I help? / May I assist you?", bn: "can বনাম may — আনুষ্ঠানিক আরও ভদ্র।" },
        { en: "We found out the truth. / We discovered the truth.", bn: "phrasal verb বনাম আনুষ্ঠানিক ক্রিয়া।" },
      ],
    },
    commonMistakes: [
      {
        wrong: "Dear Sir,\nHi, thanks for reading my application.",
        right: "Dear Sir,\nI would like to apply for the position of junior officer.",
        noteBn:
          "চাকরির আবেদনের মতো আনুষ্ঠানিক লেখায় 'Hi' এবং 'thanks' মানানসই নয়। সম্বোধন ও সূচনা — দুটোই আনুষ্ঠানিক রাখতে হবে।",
      },
      {
        wrong: "I am looking forward to meeting you and I wanna ask you something.",
        right: "I am looking forward to meeting you, and I would like to ask you something.",
        noteBn:
          "'wanna' (want to-এর সংক্ষেপ) লেখা বা আনুষ্ঠানিক কথায় ব্যবহার করা ঠিক নয়। আনুষ্ঠানিক রীতি: I would like to ask you something.",
      },
      {
        wrong: "Could you please gave me the report?",
        right: "Could you please give me the report?",
        noteBn:
          "Could you please + base verb — 'gave' (past) বসে না। নম্রতার সঙ্গে ব্যাকরণও আনুষ্ঠানিক হতে হয়।",
      },
    ],
    vocab: [
      { word: "formal", meaningBn: "আনুষ্ঠানিক", exampleEn: "This document requires formal language.", exampleBn: "এই দলিলের জন্য আনুষ্ঠানিক ভাষা প্রয়োজন।" },
      { word: "informal", meaningBn: "অনানুষ্ঠানিক", exampleEn: "We use informal English with close friends.", exampleBn: "ঘনিষ্ঠ বন্ধুদের সঙ্গে আমরা অনানুষ্ঠানিক ইংরেজি ব্যবহার করি।" },
      { word: "casual", meaningBn: "খোলামেলা / অপরিকল্পিত", exampleEn: "A casual chat is different from a formal speech.", exampleBn: "খোলামেলা আড্ডা আনুষ্ঠানিক বক্তৃতা থেকে আলাদা।" },
      { word: "polite", meaningBn: "ভদ্র / সৌজন্যমূলক", exampleEn: "Polite words build good relationships.", exampleBn: "ভদ্র শব্দ ভালো সম্পর্ক গড়ে তোলে।" },
      { word: "tone", meaningBn: "সুর / ভাষার ভাব", exampleEn: "The tone of an email should be respectful.", exampleBn: "ইমেইলের সুর সম্মানসূচক হওয়া উচিত।" },
      { word: "greeting", meaningBn: "সম্বোধন / শুভেচ্ছা", exampleEn: "A warm greeting opens a conversation.", exampleBn: "আন্তরিক অভিবাদন কথোপকথনের সূচনা করে।" },
      { word: "contraction", meaningBn: "সংকোচন (I'm, don't)", exampleEn: "Avoid contractions in formal writing.", exampleBn: "আনুষ্ঠানিক লেখায় সংকোচন এড়িয়ে চলুন।" },
      { word: "abbreviation", meaningBn: "সংক্ষিপ্ত রূপ (ASAP, FYI)", exampleEn: "ASAP is an abbreviation for 'as soon as possible'.", exampleBn: "ASAP হলো 'as soon as possible'-এর সংক্ষিপ্ত রূপ।" },
      { word: "slang", meaningBn: "চলিত শব্দ / স্ল্যাং", exampleEn: "Slang is common in movies, not in reports.", exampleBn: "স্ল্যাং সিনেমায় স্বাভাবিক, রিপোর্টে নয়।" },
      { word: "respect", meaningBn: "সম্মান", exampleEn: "Show respect to your elders in your words.", exampleBn: "আপনার কথায় বয়োজ্যেষ্ঠদের সম্মান দেখান।" },
      { word: "audience", meaningBn: "শ্রোতা / পাঠক", exampleEn: "Think about your audience before you speak.", exampleBn: "কথা বলার আগে আপনার শ্রোতা ভেবে দেখুন।" },
      { word: "appropriate", meaningBn: "মানানসই / উপযুক্ত", exampleEn: "Choose the appropriate level for each situation.", exampleBn: "প্রতিটি পরিস্থিতির জন্য মানানসই স্তর বেছে নিন।" },
    ],
    sentences: [
      { bn: "আনুষ্ঠানিক ইমেইলে 'Hi' না লিখে 'Dear Sir' লেখা উচিত।", en: "In a formal email, write 'Dear Sir' instead of 'Hi'." },
      { bn: "কর্মক্ষেত্রে সহকর্মীদের সঙ্গে অনানুষ্ঠানিক ভাষাও চলে।", en: "You can also use casual language with colleagues at work." },
      { bn: "আনুষ্ঠানিক পরিস্থিতিতে অনুরোধের জন্য 'could' বেশি মানানসই।", en: "In formal situations, 'could' is more appropriate for requests." },
      { bn: "চুক্তিপত্রের ভাষা অবশ্যই আনুষ্ঠানিক হতে হবে।", en: "The language of a contract must be formal." },
      { bn: "বন্ধুর সঙ্গে বার্তায় সংক্ষিপ্ত রূপ লেখা যায়।", en: "You can use abbreviations in messages to friends." },
      { bn: "উর্ধ্বতন ব্যক্তির সঙ্গে পুরো 'Thank you' বলা ভালো।", en: "It is better to say the full phrase 'Thank you' to a senior person." },
      { bn: "'Gonna' বলা যায় অনানুষ্ঠানিক কথায়, কিন্তু লেখায় নয়।", en: "'Gonna' is fine in casual speech, but not in writing.", noteBn: "gonna = going to-এর কথা বলা রূপ; আনুষ্ঠানিক লেখায় এড়িয়ে চলুন।" },
      { bn: "আপনার শ্রোতা কে, তা ভেবে ভাষার স্তর ঠিক করুন।", en: "Choose your language level by thinking about your audience." },
      { bn: "আনুষ্ঠানিক লেখায় 'I'll' এর বদলে 'I will' লিখুন।", en: "In formal writing, write 'I will' instead of 'I'll'." },
      { bn: "অনানুষ্ঠানিক বাক্যে 'Can you help me?' বলা যায়।", en: "In informal English, you can say 'Can you help me?'" },
      { bn: "একই অনুরোধের আনুষ্ঠানিক রূপ: 'Could you assist me?'", en: "The formal version of the same request is 'Could you assist me?'" },
      { bn: "পরিচালকের সঙ্গে দেখা হলে ভদ্র আচরণ করুন।", en: "Behave politely when you meet the director." },
    ],
    exercises: [
      {
        type: "speaking",
        title: "Register Switch",
        titleBn: "ভাষার স্তর বদলান",
        instructionsBn:
          "নিচের প্রতিটি জোড়া প্রথমে পড়ুন — বামটি বন্ধুর জন্য, ডানটি আনুষ্ঠানিক। তারপর চোখ বন্ধ করে নিজে বলুন: প্রথমে ডানটা, তারপর বামটা। উচ্চারণ ও সুর দুই স্তরেই যেন ভিন্ন শোনায়।",
        dialogue: [
          { bn: "হাই, কেমন আছো? / শুভ সকাল, কেমন আছেন?", en: "Hi, how's it going? / Good morning, how are you?" },
          { bn: "হেল্পটা করুন / সাহায্যটি করবেন কি?", en: "Help me out. / Could you give me a hand, please?" },
          { bn: "ধন্যবাদ অনেক / আপনার প্রতি আন্তরিক ধন্যবাদ", en: "Thanks a lot. / Thank you very much indeed." },
          { bn: "চা খাওয়া যাবে? / আপনি কি এক কাপ চা পছন্দ করবেন?", en: "Fancy a cup of tea? / Would you care for a cup of tea?" },
        ],
        stepsBn: [
          "প্রথমে দুই স্তরই জোরে জোরে ২ বার করে পড়ুন।",
          "তারপর একটি বাক্য হিসাবে বলার অনুশীলন করুন — বন্ধুর স্বরে হালকা, আনুষ্ঠানিক স্বরে দৃঢ় ও ভদ্র।",
          "শেষে নিজের বাস্তব জীবনের একটি পরিস্থিতি (যেমন অফিসে চা) দুই স্তরে বলুন।",
        ],
        answerKey: "Informal: Hi, how's it going? / Help me out. / Thanks a lot. / Fancy a cup of tea?\nFormal: Good morning, how are you? / Could you give me a hand, please? / Thank you very much indeed. / Would you care for a cup of tea?",
        answerKeyBn: "সুরের পার্থক্যটাই আসল — আনুষ্ঠানিক উচ্চারণে প্রতিটি শব্দ হুবহু, আর অনানুষ্ঠানিক কথায় সংক্ষেপ ও মিশ্রণ স্বাভাবিক।",
      },
      {
        type: "writing",
        title: "Rewrite in Formal English",
        titleBn: "আনুষ্ঠানিক ইংরেজিতে রূপান্তর",
        instructionsBn:
          "নিচের ৫টি অনানুষ্ঠানিক বাক্য আনুষ্ঠানিক করে লিখুন। ইঙ্গিত: সংকোচন ভাঙুন, phrasal verb বদলান, can → could করুন, শব্দ মর্যাদা বাড়ান।",
        content: "1. Hi, send me the report.\n2. I'm really sorry, I can't make it.\n3. Can you fix the problem?\n4. We found out the mistake.\n5. Thanks for the help, bye.",
        answerKey: "1. Dear Sir, could you please send me the report? 2. I apologize; I am unable to attend. 3. Could you please resolve the problem? 4. We discovered the mistake. 5. Thank you for your assistance.",
        answerKeyBn: "লক্ষ করুন প্রতিটি বদলে কিছু নির্দিষ্ট জিনিস হয়েছে: Hi→Dear, can't→am unable, fix→resolve, found out→discovered, thanks→thank you।",
      },
      {
        type: "reading",
        title: "Choose the Right Register",
        titleBn: "সঠিক স্তর বেছে নিন",
        instructionsBn:
          "নিচের পরিস্থিতিগুলো পড়ুন। প্রতিটির জন্য বলুন — আনুষ্ঠানিক (formal) নাকি অনানুষ্ঠানিক (informal) ভাষা মানানসই, এবং কেন। তারপর একটি করে ভদ্র বাক্য তৈরি করুন।",
        content:
          "1. আপনি প্রধান শিক্ষকের কাছে স্কুল ফি মওকুফের আবেদন চিঠি লিখছেন।\n2. ক্লাসের বন্ধুকে সিনেমার টিকিট কাটতে বলছেন।\n3. কোম্পানির বার্ষিক সভায় নতুন প্রকল্প ঘোষণা করছেন।\n4. ছোট ভাইকে বাজার থেকে চিনি আনতে বলছেন।\n5. বিদেশি ক্লায়েন্টকে নম্রভাবে নতুন অফার জানাচ্ছেন।",
        answerKey:
          "1. Formal — application letter to the headmaster. 2. Informal — friend, casual. 3. Formal — official announcement. 4. Informal — family command. 5. Formal — respectful deal with a client.",
        answerKeyBn: "সাধারণ নিয়ম: সরকারি/প্রতিষ্ঠানিক/অপিচিত = formal; পরিবার/বন্ধু/ঘনিষ্ঠ সহকর্মী = informal।",
      },
    ],
    quiz: [
      {
        id: "d55-q1",
        type: "multiple-choice",
        promptBn: "চাকরির আবেদনের ইমেইল শুরু করার সঠিক সম্বোধন কোনটি?",
        options: [
          { key: "a", text: "Hi Sir," },
          { key: "b", text: "Dear Sir," },
          { key: "c", text: "Hey," },
          { key: "d", text: "Yo," },
        ],
        answer: "b",
        explanationBn: "আনুষ্ঠানিক ইমেইলে 'Dear Sir/Madam' অথবা 'Dear + নাম'। Hi/Hey কোনো অবস্থাতেই আদর্শ নয়।",
      },
      {
        id: "d55-q2",
        type: "multiple-choice",
        promptBn: "\"Can you help me?\" — এর আনুষ্ঠানিক রূপ কোনটি?",
        options: [
          { key: "a", text: "You help me, ok?" },
          { key: "b", text: "Could you please help me?" },
          { key: "c", text: "Help me!" },
          { key: "d", text: "Give me help." },
        ],
        answer: "b",
        explanationBn: "Can → Could + please — এটিই নম্র আনুষ্ঠানিক অনুরোধের রূপ।",
      },
      {
        id: "d55-q3",
        type: "fill-blank",
        promptBn: "আনুষ্ঠানিক লেখায় 'I'm' এর বদলে লিখুন: ___",
        answer: "i am",
        acceptableAnswers: ["i am."],
        explanationBn: "আনুষ্ঠানিক লেখায় সংকোচন এড়িয়ে যান: I am, do not, I will।",
      },
      {
        id: "d55-q4",
        type: "correct-sentence",
        promptBn: "\"Could you please gave me the report?\" — বাক্যটি ঠিক করুন।",
        answer: "could you please give me the report",
        acceptableAnswers: ["could you please give me the report."],
        explanationBn: "Could you please + base verb: give। গেয়ে (past) নয়।",
      },
      {
        id: "d55-q5",
        type: "multiple-choice",
        promptBn: "\"We found out the truth.\" — আনুষ্ঠানিক রূপ কোনটি?",
        options: [
          { key: "a", text: "We discovered the truth." },
          { key: "b", text: "We find out the truth." },
          { key: "c", text: "We founded the truth." },
          { key: "d", text: "Truth found." },
        ],
        answer: "a",
        explanationBn: "phrasal verb find out-এর আনুষ্ঠানিক রূপ discover।",
      },
      {
        id: "d55-q6",
        type: "translate-bn-en",
        promptBn: "\"আনুষ্ঠানিক পরিস্থিতিতে অনুরোধের জন্য 'could' বেশি মানানসই।\" — ইংরেজি কী হবে?",
        answer: "in formal situations, 'could' is more appropriate for requests",
        acceptableAnswers: ["in formal situations could is more appropriate for requests", "in formal situations, could is more appropriate for requests"],
        explanationBn: "আনুষ্ঠানিক পরিস্থিতি = formal situations, অনুরোধের জন্য = for requests।",
      },
      {
        id: "d55-q7",
        type: "fill-blank",
        promptBn: "\"ASAP\" — এর সম্পূর্ণ রূপ: as soon as ___।",
        answer: "possible",
        explanationBn: "ASAP = as soon as possible।",
      },
      {
        id: "d55-q8",
        type: "multiple-choice",
        promptBn: "নিচের কোন বাক্যটি একটি আনুষ্ঠানিক নোটিশে মানানসই?",
        options: [
          { key: "a", text: "Guys, come to the meeting." },
          { key: "b", text: "All staff are requested to attend the meeting." },
          { key: "c", text: "U ppl come now." },
          { key: "d", text: "Meeting will happening." },
        ],
        answer: "b",
        explanationBn: "'All staff are requested to...' — এটি আনুষ্ঠানিক ঘোষণার আদর্শ রূপ।",
      },
      {
        id: "d55-q9",
        type: "correct-sentence",
        promptBn: "\"She wanna go home.\" — আনুষ্ঠানিক ও শুদ্ধ বাক্যে পরিণত করুন।",
        answer: "she wants to go home",
        acceptableAnswers: ["she wants to go home.", "she would like to go home"],
        explanationBn: "wanna কথ্য সংক্ষেপ; আনুষ্ঠানিক রূপ: wants to go home।",
      },
      {
        id: "d55-q10",
        type: "translate-bn-en",
        promptBn: "\"চুক্তিপত্রের ভাষা অবশ্যই আনুষ্ঠানিক হতে হবে।\" — ইংরেজি কী হবে?",
        answer: "the language of a contract must be formal",
        acceptableAnswers: ["the language of a contract must be formal."],
        explanationBn: "অবশ্যই = must, আনুষ্ঠানিক = formal। will/মাস্ট সব modal-এর পরে base verb।",
      },
    ],
    homework: {
      instructionsBn:
        "১) একই অনুরোধ (যেমন — সময় জানাতে বলা) ৪টি পরিস্থিতিতে ইংরেজিতে লিখুন: প্রিয় বন্ধু, সহকর্মী, ম্যানেজার এবং সিভিল সার্জন যথাক্রমে অনানুষ্ঠানিক থেকে আনুষ্ঠানিক। ২) আজ সারা দিনে ১০টি কথা বলার আগে ভাবুন — এই পরিস্থিতির জন্য কোন স্তর মানানসই। ৩) আনুষ্ঠানিক ভাষায় ঝালাইয়ের জন্য 'Dear Sir' দিয়ে শুরু একটি অনুচ্ছেদ লিখুন যেখানে 'I will', 'I am', 'could you please' থাকবে।",
      tasks: [
        { bn: "একই অনুরোধ ৪ স্তরে লিখুন: বন্ধু → সহকর্মী → ম্যানেজার → উর্ধ্বতন অফিসার।", en: "Write the same request in four registers: friend → colleague → manager → senior officer." },
        { bn: "সারা দিনে ১০টি বাক্যের জন্য স্তর নির্বাচন করুন এবং লিখে রাখুন।", en: "Choose a register for ten sentences during the day and note them down." },
        { bn: "'Dear Sir' দিয়ে একটি আনুষ্ঠানিক অনুচ্ছেদ লিখুন।", en: "Write a formal paragraph starting with 'Dear Sir'." },
      ],
      answerKey: "Informal friend: Hey, tell me the time, please. / Colleague: Can you tell me the time? / Manager: Could you please tell me the time? / Senior officer: I would be grateful if you could spare a moment to tell me the time.",
      answerKeyBn: "লক্ষ করুন: একই তথ্য, কিন্তু শব্দের মর্যাদা ও নম্রতা বাড়ছে। এটাই register বদলানোর আসল কৌশল।",
    },
  },

  /* ------------------------------------------------------------------ */
  /* DAY 56 — CONVERSATION PROBLEM-SOLVING                               */
  /* ------------------------------------------------------------------ */
  {
    day: 56,
    title: "Conversation Problem-Solving",
    titleBn: "কথোপকথনে সমস্যার সমাধান",
    level: 3,
    durationMinutes: 30,
    objectives: [
      "বুঝতে না পারলে ভদ্রভাবে পুনরাবৃত্তি চাইতে পারবেন।",
      "অস্পষ্ট কথা স্পষ্ট করতে clarifying question করতে পারবেন।",
      "প্যারাফ্রেজ (অন্য শব্দে একই কথা) করে বোঝাপড়া ঠিক করতে পারবেন।",
      "ভুল বোঝাবুঝির চক্র থেকে দ্রুত বেরিয়ে আসতে পারবেন।",
    ],
    intro: [
      "বাস্তব কথোপকথনে সব কথা একবারেই বোঝা যায় না — ফোনে লাইন খারাপ, কেউ দ্রুত কথা বলে, কেউ অচেনা শব্দ ব্যবহার করে। সমস্যা নয়; সমস্যা হলো বোঝা না গেলে আমরা চুপ থেকে মাথা নাড়ি, তারপর ভুল বোঝাবুঝিতে কাজ গিয়ে জট পাকায়। আজকের পাঠে আমরা শিখব সেই মুহূর্তে বলা দরকারি বাক্য — যেগুলো কথোপকথনকে ঠিক করে দেয়, থামিয়ে দেয় না।",
      "তিনটি অস্ত্র থাকবে: (১) পুনরাবৃত্তি চাওয়া — Could you say that again, please? (২) অর্থ স্পষ্ট করা — What do you mean by...? এবং Do you mean...? (৩) প্যারাফ্রেজ — In other words,... / Let me put it another way। এই বাক্যগুলো যত স্বাভাবিকভাবে বলা যায়, তত ভালো — কারণ এগুলো দেখায় যে আপনি মনোযোগ দিয়ে শুনছেন এবং নিশ্চিত হতে চান।",
      "আর একটি মনোভঙ্গি জরুরি: 'আমি বুঝিনি' বলাটা দুর্বলতা নয়, বরং পেশাদারিত্ব। প্রকৃত পেশাদাররা নিশ্চিত হয়ে তবেই কাজ এগিয়ে নেন। আজকের রোল-প্লেতে আমরা দেখব কীভাবে 'আমি বুঝিনি' থেকে 'আমি নিশ্চিত' পর্যন্ত যাওয়া যায়।",
    ],
    grammar: {
      title: "বুঝতে না পারলে কী বলবেন",
      explanationBn:
        "কথোপকথন ঠিক রাখার জন্য কয়েকটি নির্দিষ্ট functional বাক্য জেনে রাখুন। (১) পুনরাবৃত্তি চাওয়া: Could you say that again, please? / Sorry, I didn't catch that। (২) অর্থ স্পষ্ট করা: What do you mean by + শব্দ/বাক্যাংশ? অথবা Does 'flexible hours' mean...? (৩) নিজের বোঝা যাচাই: Do you mean + বাক্য? — যেমন Do you mean the meeting is postponed? (৪) প্যারাফ্রেজ: In other words,... / Let me put it another way। (৫) ধীরে বলার অনুরোধ: Could you speak more slowly, please? মনে রাখবেন: verb-এর পরে mean-এর সঙ্গে কোনো preposition লাগে না — 'What means this word' ভুল; 'What does this word mean' সঠিক।",
      patterns: [
        {
          label: "পুনরাবৃত্তি",
          template: "Could you say that again, please?",
          bn: "দয়া করে আবার বলবেন কি? — সবচেয়ে নিরাপদ বাক্য।",
        },
        {
          label: "অর্থ স্পষ্টকরণ",
          template: "What do you mean by + ...?",
          bn: "What do you mean by 'flexible hours'?",
        },
        {
          label: "বোঝা যাচাই",
          template: "Do you mean + ...?",
          bn: "Do you mean the meeting is postponed?",
        },
        {
          label: "প্যারাফ্রেজ",
          template: "In other words, + পুরো বাক্য",
          bn: "In other words, we should finish by Friday.",
        },
      ],
      examples: [
        { en: "Sorry, I didn't catch that. Could you repeat it?", bn: "দুঃখিত, আমি ধরতে পারিনি। পুনরাবৃত্তি করবেন কি?" },
        { en: "What do you mean by 'flexible hours'?", bn: "'নমনীয় কর্মঘণ্টা' বলতে আপনি কী বোঝাতে চেয়েছেন?" },
        { en: "Do you mean the meeting is postponed?", bn: "আপনি কি বোঝাতে চেয়েছেন মিটিংটি স্থগিত?" },
        { en: "In other words, we should finish by Friday.", bn: "অন্য কথায়, আমাদের শুক্রবারের মধ্যে শেষ করা উচিত।" },
        { en: "Could you speak a little more slowly, please?", bn: "দয়া করে একটু আস্তে বলবেন?" },
        { en: "Let me put it another way.", bn: "আমাকে একটু ভিন্নভাবে বলতে দিন।" },
      ],
    },
    commonMistakes: [
      {
        wrong: "Repeat please.",
        right: "Could you repeat that, please?",
        noteBn:
          "শুধু 'Repeat please' কর্কশ শোনায়। ভদ্র বাক্যে could + please যোগ করুন — ইংরেজিতে নম্রতা এমনিতেই লাগে।",
      },
      {
        wrong: "I am understanding you now.",
        right: "I understand you now.",
        noteBn:
          "understand একটি stative verb (অবস্থাবাচক) — এর সঙ্গে সাধারণত Continuous (−ing) চলে না। Commonly: I understand, not I am understanding।",
      },
      {
        wrong: "What means this word?",
        right: "What does this word mean?",
        noteBn:
          "এই প্রশ্নে সহায়ক ক্রিয়া (does) দরকার: What does + subject + verb? — What does this word mean?",
      },
    ],
    vocab: [
      { word: "misunderstand", meaningBn: "ভুল বোঝা", exampleEn: "I misunderstood the manager's instruction.", exampleBn: "আমি ম্যানেজারের নির্দেশ ভুল বুঝেছিলাম।" },
      { word: "clarify", meaningBn: "স্পষ্ট করা", exampleEn: "Could you clarify this point?", exampleBn: "আপনি কি এই অংশটি স্পষ্ট করবেন?" },
      { word: "repeat", meaningBn: "আবার বলা", exampleEn: "Could you repeat the question?", exampleBn: "আপনি কি প্রশ্নটি আবার বলবেন?" },
      { word: "explain", meaningBn: "ব্যাখ্যা করা", exampleEn: "Please explain the rule to me.", exampleBn: "দয়া করে আমাকে নিয়মটি ব্যাখ্যা করুন।" },
      { word: "paraphrase", meaningBn: "অন্য শব্দে বলা / প্যারাফ্রেজ", exampleEn: "Paraphrase the sentence to check your understanding.", exampleBn: "বোঝা ঠিক আছে কি না যাচাই করতে বাক্যটি অন্য কথায় বলুন।" },
      { word: "confused", meaningBn: "দ্বিধাগ্রস্ত / বিভ্রান্ত", exampleEn: "I am confused about the new schedule.", exampleBn: "নতুন সময়সূচি নিয়ে আমি বিভ্রান্ত।" },
      { word: "meaning", meaningBn: "অর্থ", exampleEn: "What is the meaning of this word?", exampleBn: "এই শব্দটির অর্থ কী?" },
      { word: "exactly", meaningBn: "ঠিকভাবে / সঠিকভাবে", exampleEn: "Could you tell me exactly what happened?", exampleBn: "ঠিক কী ঘটেছে, আপনি কি আমাকে বলবেন?" },
      { word: "slowly", meaningBn: "ধীরে / আস্তে", exampleEn: "Please speak slowly for me.", exampleBn: "দয়া করে আমার জন্য ধীরে বলুন।" },
      { word: "confirm", meaningBn: "নিশ্চিত করা", exampleEn: "Let me confirm what I heard.", exampleBn: "আমি যা শুনলাম তা নিশ্চিত করতে চাই।" },
      { word: "phrase", meaningBn: "বাক্যাংশ", exampleEn: "I don't know this phrase.", exampleBn: "আমি এই বাক্যাংশটি জানি না।" },
      { word: "conversation", meaningBn: "কথোপকথন", exampleEn: "The conversation was about the new project.", exampleBn: "কথোপকথনটি ছিল নতুন প্রকল্প নিয়ে।" },
    ],
    sentences: [
      { bn: "আমি বুঝতে পারিনি — আবার বলবেন কি?", en: "I didn't understand. Could you say that again?" },
      { bn: "'Flexible' বলতে আপনি কী বোঝাতে চেয়েছেন?", en: "What do you mean by 'flexible'?" },
      { bn: "আমি আপনার কথা ধরতে পারিনি।", en: "I didn't catch what you said.", noteBn: "catch = কথা আয়ত্ত করতে পারা; কথ্য ও কাজের ভাষায় প্রচলিত।" },
      { bn: "আপনি কি একটু ধীরে বলতে পারবেন?", en: "Could you speak a little more slowly?" },
      { bn: "অন্য কথায়, আপনি চান আমি কাল রিপোর্টটি জমা দিই?", en: "In other words, you want me to submit the report tomorrow?", noteBn: "In other words = প্যারাফ্রেজের সূচক।" },
      { bn: "আমাকে একটু ভেবে বলার সুযোগ দিন।", en: "Give me a moment to think." },
      { bn: "এই শব্দটির অর্থ কী?", en: "What does this word mean?" },
      { bn: "ভুল বোঝাবুঝি হয় দুই ভাষার রীতির পার্থক্যের কারণে।", en: "Misunderstandings happen because of differences between the two languages." },
      { bn: "আপনি কি একটি উদাহরণ দিতে পারবেন?", en: "Could you give me an example?", noteBn: "example-এর আগে article: an example।" },
      { bn: "আমি নিশ্চিত হতে চাই আমার বোঝা ঠিক আছে।", en: "I want to make sure I have understood correctly." },
      { bn: "দয়া করে আপনার বক্তব্যটি সহজ করে বলুন।", en: "Please explain your point in simple words." },
      { bn: "সংক্ষেপে বললে, কাজটি আগামীকাল শেষ করতে হবে।", en: "In short, the work must be finished tomorrow." },
    ],
    exercises: [
      {
        type: "speaking",
        title: "Repair the Conversation",
        titleBn: "কথোপকথন ঠিক করুন",
        instructionsBn:
          "নিচের সংলাপে সমস্যা আছে — কর্মী দ্বিতীয় নির্দেশটি ঠিক শুনতে পাননি এবং একটি শব্দ বোঝেননি। সংলাপটি ৩ বার অভিনয় করুন; প্রতিবার ক্ল্যারিফিকেশন শব্দগুলো জোরে উচ্চারণ করে ব্যবহার করুন।",
        dialogue: [
          { bn: "আগামীকালের মিটিংটি ৩টায় অথবা বিকাল ৪টায় — আপনি ঠিক করে দিন।", en: "Let's hold tomorrow's meeting at 3 pm or 4 pm — you decide." },
          { bn: "দুঃখিত, আমি ধরতে পারিনি। 'Hold' মানে কী এখানে?", en: "Sorry, I didn't catch that. What do you mean by 'hold' here?" },
          { bn: "'Hold a meeting' মানে মিটিং করা।", en: "'Hold a meeting' means to arrange a meeting." },
          { bn: "বুঝেছি। আপনি কি বোঝাতে চেয়েছেন আমি সময়টা ঠিক করব?", en: "I see. Do you mean I should decide the time?" },
          { bn: "হ্যাঁ, ঠিক তাই। অন্য কথায়, আপনি ম্যানেজার।", en: "Yes, exactly. In other words, you are the manager." },
          { bn: "আমি নিশ্চিত করতে চাই — আমি ৪টায় মিটিং রাখছি, তারপর আপনাকে নিশ্চিত করছি।", en: "Let me confirm — I will book the meeting for 4 pm and confirm with you." },
        ],
        stepsBn: [
          "নির্দিষ্ট বাক্যগুলো খুঁজে নিন: I didn't catch that / What do you mean by / Do you mean / In other words / Let me confirm।",
          "প্রতিটি বাক্য বলার সময় আত্মবিশ্বাসী স্বরে বলুন।",
          "নিজের কল্পিত একটি জটিল পরিস্থিতিতে একই বাক্যগুলো ব্যবহার করে নতুন সংলাপ বানান।",
        ],
        answerKey: "Sorry, I didn't catch that. / What do you mean by 'hold'? / Do you mean I should decide the time? / In other words, you are the manager. / Let me confirm I will book it at 4 pm.",
        answerKeyBn: "লক্ষ করুন — চারটি প্রশ্নের পরে অবশেষে কর্মী confirm করেছেন। এটিই সঠিক কর্মপ্রবাহ: ধরতে চেষ্টা → স্পষ্ট করুন → নিশ্চিত করুন।",
      },
      {
        type: "listening",
        title: "What Did the Manager Say?",
        titleBn: "ম্যানেজার কী বললেন?",
        instructionsBn:
          "ওপরের উত্তর দেওয়ার জন্য একটি দ্রুত কথিত মেসেজ দিন: ধীরে ২ বার শুনুন, তারপর সঠিক বার্তাটি বলুন। মেসেজটি আগে নিজে পড়ে শুনুন; ছোট নোট নিন।",
        content:
          "Hi Rana, it's me, the manager. Quick thing — the client wants the final quote by noon instead of Friday. Also, please bring the printed copies of last month's invoices to the meeting. Call me back if this is not clear. Thanks.",
        stepsBn: [
          "প্রথমে নোট নিন: কী কী বিষয় এসেছে (quote, day change, invoices, meeting)।",
          "তারপর প্রতিটি বিষয় ইংরেজিতে বলুন যেভাবে বুঝেছেন।",
          "অবশেষে ভাবুন — কোন বাক্যটি দিয়ে আপনি ম্যানেজারকে সব ঠিক বোঝা গেছে কিনা নিশ্চিত করবেন।",
        ],
        answerKey: "The manager wants the final quote by noon, not Friday. He also wants the printed invoices at the meeting. To confirm, I would say: 'So, in other words, the quote is needed by noon today, and I should bring the printed invoices to the meeting. Is that right?'",
        answerKeyBn: "নোট নেওয়ার সময় সংখ্যা ও দিনগুলোর দিকে বিশেষ নজর দিন — এগুলোই শোনার পরীক্ষায় সবচেয়ে বেশি ভুল করায়।",
      },
      {
        type: "speaking",
        title: "Paraphrase It",
        titleBn: "অন্য কথায় বলুন",
        instructionsBn:
          "নিচের প্রতিটি বাক্য In other words / That means / So, you mean — এই সূচক দিয়ে নিজের ভাষায় বলুন। প্রতিটি ২ বার করুন — একবার প্রশ্নের সুরে, একবার নিশ্চিত সুরে।",
        prompts: [
          "The deadline is moved forward by two days.",
          "We can only use the conference room in the morning.",
          "The budget has been reduced by ten percent.",
          "Please submit the form before noon on Thursday.",
        ],
        stepsBn: [
          "প্রথমে মূল বাক্যটি বোঝার চেষ্টা করুন।",
          "তারপর In other words দিয়ে সহজ ইংরেজিতে বলুন।",
          "সবশেষে Do you mean I should...? সুরে নিজেকে জিজ্ঞাসা করুন।",
        ],
        answerKey: "In other words, the work must finish two days earlier. / That means the room is free only in the morning. / So, you mean we have ten percent less money. / In other words, the form is due before noon on Thursday.",
        answerKeyBn: "প্যারাফ্রেজ করার সময় সংখ্যা ও সময় বদলাবেন না — শুধু শব্দ আর বাক্যগঠন বদলান।",
      },
    ],
    quiz: [
      {
        id: "d56-q1",
        type: "multiple-choice",
        promptBn: "উত্তর ঠিক শুনতে না পেলে সবচেয়ে ভদ্রভাবে কী বলবেন?",
        options: [
          { key: "a", text: "Repeat." },
          { key: "b", text: "Say again." },
          { key: "c", text: "Could you repeat that, please?" },
          { key: "d", text: "What?" },
        ],
        answer: "c",
        explanationBn: "'Could you repeat that, please?' — ভদ্র ও পেশাদার। বাকিগুলো কর্কশ বা ভজন।",
      },
      {
        id: "d56-q2",
        type: "fill-blank",
        promptBn: "\"'Flexible' বলতে আপনি কী বোঝাতে চেয়েছেন?\" → What do you ___ by 'flexible'?",
        answer: "mean",
        explanationBn: "What do you mean by + শব্দ? — অর্থ স্পষ্ট করার প্রশ্ন।",
      },
      {
        id: "d56-q3",
        type: "translate-bn-en",
        promptBn: "\"আমি আপনার কথা ধরতে পারিনি।\" — ইংরেজি কী হবে?",
        answer: "i didn't catch that",
        acceptableAnswers: ["i did not catch that", "i didn't catch what you said", "i didn't catch that."],
        explanationBn: "আমি ধরতে পারিনি = I didn't catch that — কথার সাধারণ রূপ।",
      },
      {
        id: "d56-q4",
        type: "correct-sentence",
        promptBn: "\"What means this word?\" — বাক্যটি ঠিক করুন।",
        answer: "what does this word mean",
        acceptableAnswers: ["what does this word mean."],
        explanationBn: "প্রশ্নে সহায়ক ক্রিয়া does লাগে: What does this word mean?",
      },
      {
        id: "d56-q5",
        type: "multiple-choice",
        promptBn: "নিচের কোন বাক্যটি বোঝা যাচাই করে?",
        options: [
          { key: "a", text: "Do you mean the meeting is postponed?" },
          { key: "b", text: "I am tired." },
          { key: "c", text: "The meeting is at noon." },
          { key: "d", text: "Let's go." },
        ],
        answer: "a",
        explanationBn: "'Do you mean...?' — আপনি যা শুনলেন তা ঠিক আছে কি না যাচাই করার প্রশ্ন।",
      },
      {
        id: "d56-q6",
        type: "fill-blank",
        promptBn: "\"আপনি কি একটু ধীরে বলতে পারবেন?\" → Could you speak a little more ___?",
        answer: "slowly",
        explanationBn: "ধীরে = slowly (adverb)। Speak + adverb: speak slowly।",
      },
      {
        id: "d56-q7",
        type: "translate-bn-en",
        promptBn: "\"আপনি কি একটি উদাহরণ দিতে পারবেন?\" — ইংরেজি কী হবে?",
        answer: "could you give me an example",
        acceptableAnswers: ["could you give me an example.", "can you give me an example"],
        explanationBn: "উদাহরণ = an example (e-এর আগে an)।",
      },
      {
        id: "d56-q8",
        type: "multiple-choice",
        promptBn: "'ধীরে বলুন' এর অর্থ বোঝাতে — কোন বাক্যটি সবচেয়ে মানানসই?",
        options: [
          { key: "a", text: "Speak slow." },
          { key: "b", text: "You slow." },
          { key: "c", text: "Could you speak more slowly, please?" },
          { key: "d", text: "Slowly!" },
        ],
        answer: "c",
        explanationBn: "could + please দিয়ে ভদ্র অনুরোধ; adverb রূপ slowly। 'Speak slow' ব্যাকরণগতভাবে ভুল।",
      },
      {
        id: "d56-q9",
        type: "correct-sentence",
        promptBn: "\"I am understanding you now.\" — বাক্যটি ঠিক করুন।",
        answer: "i understand you now",
        acceptableAnswers: ["i understand you now.", "i now understand you"],
        explanationBn: "understand একটি stative verb — Continuous রূপ সাধারণত চলে না: I understand you now।",
      },
      {
        id: "d56-q10",
        type: "translate-bn-en",
        promptBn: "\"সংক্ষেপে বললে, কাজটি আগামীকাল শেষ করতে হবে।\" — ইংরেজি কী হবে?",
        answer: "in short, the work must be finished tomorrow",
        acceptableAnswers: ["in short, the work must be finished tomorrow.", "in other words, the work must be finished tomorrow"],
        explanationBn: "সংক্ষেপে বললে = in short; must be finished = অবশ্যই শেষ হতে হবে।",
      },
    ],
    homework: {
      instructionsBn:
        "১) আজ সারা দিনে যে কোনো ৫টি কথোপকথনে — ইংরেজি বা বাংলা — 'বুঝিনি' বলার সুযোগ খুঁজুন এবং সেখানে ইংরেজি ক্ল্যারিফিকেশন বাক্য প্রয়োগ করুন। ২) আগামীকালের জন্য একটি 'clarification শব্দকোষ' বানান: Could you say that again? / What do you mean by? / Do you mean...? / In other words, ... / Could you speak more slowly? — প্রতিটি ৫ বার লিখুন। ৩) একটি জটিল নির্দেশনা (যেমন রান্নার রেসিপি) নিয়ে প্যারাফ্রেজ করে ৩ বার বলুন।",
      tasks: [
        { bn: "সারা দিনে ৫টি কথোপকথনে ক্ল্যারিফিকেশন বাক্য প্রয়োগ করুন।", en: "Use a clarification sentence in five conversations today." },
        { bn: "৫টি ক্ল্যারিফিকেশন বাক্যের শব্দকোষ তৈরি করে ৫ বার করে লিখুন।", en: "Make a wordbank of five clarification sentences and write them five times each." },
        { bn: "একটি জটিল নির্দেশ (যেমন রেসিপি) অন্য কথায় ৩ বার বলুন।", en: "Paraphrase a complex instruction (like a recipe) three times." },
      ],
      answerKey: "Excellent phrases to master: Sorry, could you say that again? / What do you mean by that? / Do you mean I should...? / In other words,... / Could you give me an example?",
      answerKeyBn: "এই ধরনের বাক্য ব্যবহার করতেই পারেনি বেশি — মুখে গেঁথে গেলে কথোপকথনে স্বাভাবিকভাবে চলে আসবে।",
    },
  },

  /* ------------------------------------------------------------------ */
  /* DAY 57 — LISTENING AND COMPREHENSION REVIEW                        */
  /* ------------------------------------------------------------------ */
  {
    day: 57,
    title: "Listening and Comprehension Review",
    titleBn: "শোনা ও বোঝার চূড়ান্ত অনুশীলন",
    level: 3,
    durationMinutes: 35,
    objectives: [
      "মূল বক্তব্য (main idea) ও বিবরণ (detail) আলাদা করে চিনতে পারবেন।",
      "দীর্ঘতর ইংরেজি বক্তব্য শুনে তথ্য ধরে রাখতে পারবেন।",
      "শোনার সময়ের নোট নেওয়ার কৌশল প্রয়োগ করতে পারবেন।",
      "ব্যবহারিক শোনার পরীক্ষা (listening test) ধাঁচের প্রশ্ন সমাধান করতে পারবেন।",
    ],
    intro: [
      "৫৬ দিনের যাত্রায় আমরা ইংরেজি বলি, লিখি, পড়ি — কিন্তু আসল জীবনের সবচেয়ে বেশি চাপ পড়ে শোনার ওপর। বিদেশি ক্লায়েন্ট ফোনে কথা বলে, সেমিনারে বক্তার বক্তৃতা চলে ঝড়ের বেগে — আপনার কাজ হলো মূল কথা ধরা, কোনো লাইন চেপে যেতে না দেওয়া। ভালো শোনার দক্ষতা মানে 'সব শব্দ শোনা' নয়; বরং মূল কথা ও প্রয়োজনীয় বিশদ ধরতে পারা। আজকের পাঠে আমরা সেটাই অনুশীলন করব।",
      "শোনার সময় দুই ধরনের তথ্য থাকে: main idea — বক্তা আসলে কী বলতে চাইছেন; আর detail — সঠিক তারিখ, সময়, সংখ্যা, নাম। উদাহরণস্বরূপ, \"The meeting will be held on Tuesday at 10 am in Room 302\" — মূল কথা: মিটিং হবে; বিবরণ: মঙ্গলবার, সকাল ১০টা, রুম ৩০২। প্রশ্ন করার সময় এই দুই স্তরই যাচাই করা হয়।",
      "আজ আমরা ৩টি পাঠ্য পাব: শোনার জন্য একটি, বিস্তারিত খোঁজার জন্য আর একটি, আর সংক্ষেপে বলার জন্য একটি। প্রতিটির পরে মূল বক্তব্য এক লাইনে লেখার অভ্যাস গড়ে তুলুন — এটি আপনাকে যেকোনো শোনার পরীক্ষায় এগিয়ে রাখবে।",
    ],
    grammar: {
      title: "মূল বক্তব্য (Main Idea) বনাম বিবরণ (Detail)",
      explanationBn:
        "শোনার পরীক্ষার সেরা কৌশল হলো প্রশ্নের ধরন আগে শনাক্ত করা। 'What is the main idea?' — এর উত্তর একটি সামগ্রিক বাক্য: The speaker is explaining how to apply for a job। অন্যদিকে 'According to the speaker, when...?' — এর উত্তর নিখুঁত detail: on Tuesday at 10 am। বিবরণ ধরার জন্য প্রশ্নশব্দগুলোই মূল চাবি: what (কী), who (কে), where (কোথায়), when (কখন), why (কেন), how (কীভাবে) — প্রতিটি একটি করে তথ্যখণ্ড খোঁজে। বাক্যগঠনেও নজর দিন: the speaker says / according to the speaker / the speaker mentions — এগুলো শোনা কথা রিপোর্ট করার নিরাপদ সূচনা। আর remember: listen + to + object (I listened to the news) — listen-এর পরে to অবশ্যই লাগে।",
      patterns: [
        {
          label: "মূল বক্তব্য জিজ্ঞাসা",
          template: "What is the main idea of the talk?",
          bn: "বক্তার সামগ্রিক বার্তা — একটি বাক্যে উত্তর।",
        },
        {
          label: "বিবরণ জিজ্ঞাসা",
          template: "According to the speaker, when/where/how ...?",
          bn: "নির্দিষ্ট তথ্য — সংখ্যা, তারিখ, স্থান।",
        },
        {
          label: "রিপোর্টিং সূচনা",
          template: "The speaker says that + বাক্য",
          bn: "শোনা কথা সঠিকভাবে ফিরিয়ে বলার সূচনা।",
        },
      ],
      examples: [
        { en: "What is the main idea of the talk? The speaker is explaining how to apply for a job.", bn: "বক্তার মূল বার্তা: চাকরিতে আবেদনের পদ্ধতি।" },
        { en: "According to the speaker, submit the form online.", bn: "বক্তার মতে, ফর্মটি অনলাইনে জমা দিন।" },
        { en: "The meeting will be held on Tuesday at 10 am.", bn: "মিটিং হবে মঙ্গলবার সকাল ১০টায়।" },
        { en: "The speaker's main point is that practice makes perfect.", bn: "বক্তার মূল বক্তব্য: অনুশীলনই মানুষকে নিখুঁত করে।" },
        { en: "Where should the guests sit? In the meeting room.", bn: "অতিথিদের কোথায় বসতে হবে? মিটিং রুমে।" },
        { en: "I listened to the announcement carefully.", bn: "আমি ঘোষণাটি মন দিয়ে শুনলাম।" },
      ],
    },
    commonMistakes: [
      {
        wrong: "I listened the radio.",
        right: "I listened to the radio.",
        noteBn:
          "listen-এর পরে preposition 'to' বাধ্যতামূলক: listen to + object। listen the radio ভুল; listen to the radio সঠিক।",
      },
      {
        wrong: "The main idea means every detail in the passage.",
        right: "The main idea is the overall message of the passage.",
        noteBn:
          "main idea হলো সামগ্রিক বার্তা — সব বিবরণ নয়। বিবরণ detail, মূল কথা main idea — দুটি আলাদা ধারণা।",
      },
      {
        wrong: "According the speaker, the deadline is Monday.",
        right: "According to the speaker, the deadline is Monday.",
        noteBn:
          "according-এর পরে to বসে: according to the speaker। it is a common fixed phrase — remember it whole।",
      },
    ],
    vocab: [
      { word: "listen", meaningBn: "শোনা (listen to)", exampleEn: "Listen to the audio twice.", exampleBn: "অডিওটি দুবার শুনুন।" },
      { word: "main idea", meaningBn: "মূল বক্তব্য", exampleEn: "The main idea is in the first sentence.", exampleBn: "মূল বক্তব্যটি প্রথম বাক্যে থাকে।" },
      { word: "detail", meaningBn: "বিবরণ / বিশদ", exampleEn: "Pay attention to details like time and place.", exampleBn: "সময় ও স্থানের মতো বিবরণে মনোযোগ দিন।" },
      { word: "summary", meaningBn: "সংক্ষিপ্তসার", exampleEn: "Write a one-line summary of the talk.", exampleBn: "বক্তব্যের এক লাইনের সারাংশ লিখুন।" },
      { word: "speaker", meaningBn: "বক্তা", exampleEn: "The speaker paused between the main points.", exampleBn: "মূল বক্তব্যগুলোর মধ্যে বক্তা থামতেন।" },
      { word: "message", meaningBn: "বার্তা", exampleEn: "The message of the text is clear.", exampleBn: "পাঠটির বার্তা স্পষ্ট।" },
      { word: "announcement", meaningBn: "ঘোষণা", exampleEn: "We heard the announcement at the station.", exampleBn: "আমরা স্টেশনে ঘোষণাটি শুনলাম।" },
      { word: "attention", meaningBn: "মনোযোগ", exampleEn: "Give full attention to the instructions.", exampleBn: "নির্দেশগুলোতে পূর্ণ মনোযোগ দিন।" },
      { word: "instruction", meaningBn: "নির্দেশনা", exampleEn: "Follow every instruction step by step.", exampleBn: "প্রতিটি নির্দেশনা ধাপে ধাপে অনুসরণ করুন।" },
      { word: "conversation", meaningBn: "কথোপকথন", exampleEn: "The conversation was hard to follow.", exampleBn: "কথোপকথনটি অনুসরণ করা কঠিন ছিল।" },
      { word: "reason", meaningBn: "কারণ", exampleEn: "The speaker gave three reasons.", exampleBn: "বক্তা তিনটি কারণ উল্লেখ করেছেন।" },
      { word: "tone", meaningBn: "সুর / ভাব", exampleEn: "You can understand feelings from the tone.", exampleBn: "সুর থেকে অনুভূতি বোঝা যায়।" },
    ],
    sentences: [
      { bn: "আমি প্রতিদিন সকালে ইংরেজি খবর শুনি।", en: "I listen to English news every morning." },
      { bn: "বক্তার মূল বক্তব্য কী ছিল?", en: "What was the speaker's main point?" },
      { bn: "যেকোনো বক্তব্যের মূল বক্তব্য খুঁজে বের করুন।", en: "Find the main idea of any speech." },
      { bn: "তারিখ ও সময়ের মতো বিবরণগুলো সাবধানে শুনুন।", en: "Listen carefully to details like dates and times." },
      { bn: "সংক্ষেপে বললে, বক্তাটি কাজের অভিজ্ঞতার কথা বলেছেন।", en: "In short, the speaker talked about work experience." },
      { bn: "আমি ঘোষণাটি মন দিয়ে শুনলাম।", en: "I listened to the announcement carefully." },
      { bn: "বক্তা দুটি কারণের কথা উল্লেখ করেছেন।", en: "The speaker mentioned two reasons." },
      { bn: "প্রতিটি নির্দেশনায় মনোযোগ দিন।", en: "Pay attention to every instruction." },
      { bn: "কথোপকথনটির মূল বিষয় কী?", en: "What is the conversation about?" },
      { bn: "উদাহরণগুলো মূল বক্তব্য বুঝতে সাহায্য করে।", en: "Examples help us understand the main idea." },
      { bn: "আমি ফোনের বার্তাটি তিনবার শুনলাম।", en: "I listened to the phone message three times." },
      { bn: "কথার সুর দেখে বক্তার মনোভাব বোঝা যায়।", en: "You can understand the speaker's attitude from their tone." },
    ],
    exercises: [
      {
        type: "listening",
        title: "Listen for the Main Idea",
        titleBn: "মূল বক্তব্য খুঁজে শোনা",
        instructionsBn:
          "নিচের অনুচ্ছেদটি প্রথমে নিজে জোরে পড়ুন (তারা আপনার কাছে 'বক্তা'), তারপর চোখ বন্ধ করে শুনলে হবে। দুইবার পড়ুন। প্রতিবার পরে মূল বক্তব্য এক লাইনে লিখুন এবং ৩টি detail বের করুন।",
        content:
          "Good afternoon. I want to share some news about our training program. Next month, we are starting a two-week English course for all employees of the Dhaka office. The classes will be held every Monday and Wednesday from 5 to 7 in the evening, on the third floor. If you want to join, please register online before the 25th. There is no fee for staff members, but late registration will not be accepted. Thank you.",
        stepsBn: [
          "প্রথম শোনায় শুধু মূল বক্তব্য ধরুন — এই পাঠ্যটি কী নিয়ে?",
          "দ্বিতীয় শোনায় detail নোট নিন: কোর্সের সময়, দিন, তারিখ।",
          "উত্তর লিখে main idea বনাম detail-কে আলাদা করুন।",
        ],
        answerKey:
          "Main idea: The company is starting a two-week English course for employees. Details: Monday and Wednesday; 5 to 7 pm; third floor; register online before the 25th; no fee for staff.",
        answerKeyBn: "লক্ষ করুন: main idea একটি সামগ্রিক বাক্য, আর detail হলো সঠিক সময়-স্থান-তারিখ। বারবার এভাবে আলাদা করলে শোনা আরও সহজ হয়।",
      },
      {
        type: "reading",
        title: "Details Hunt",
        titleBn: "বিবরণের খোঁজে",
        instructionsBn:
          "নিচের গ্রাহক পরিষেবা ঘোষণাটি পড়ুন, তারপর প্রতিটি প্রশ্নের উত্তর দিন। সংখ্যা ও সময় চিহ্নিত করে নোট করুন — ঠিক যেমন শোনার পরীক্ষায় করতেন।",
        content:
          "Customer Service Announcement: Our office will remain closed on Eid holidays from Monday to Wednesday. However, our online help desk will be available daily from 9 am to 6 pm. For urgent issues, please call 16789 or send an email to support@example.com. Normal office hours will start again on Thursday at 8:30 am.",
        stepsBn: [
          "প্রশ্ন: (ক) অফিস কবে বন্ধ? (খ) অনলাইন হেল্প ডেস্ক কখন চলবে? (গ) জরুরি সমস্যায় কী করবেন?",
          "উত্তর দেওয়ার সময় ঠিক উক্তি বা সময় ব্যবহার করুন।",
          "শেষে একটি main idea বাক্য লিখুন।",
        ],
        answerKey:
          "(ক) Monday to Wednesday. (খ) Daily from 9 am to 6 pm. (গ) Call 16789 or email support@example.com. Main idea: The office closes for Eid, but online support continues.",
        answerKeyBn: "বিবরণ জিজ্ঞাসার উত্তর নিখুঁত হতে হবে — 'অফিস বন্ধ' নয়, 'Monday to Wednesday'।",
      },
      {
        type: "speaking",
        title: "Summarize in Three Sentences",
        titleBn: "তিনটি বাক্যে সারাংশ বলুন",
        instructionsBn:
          "নিচের বক্তব্যটি পড়ুন, তারপর এটি বন্ধু বা পরিবারের কাউকে নাম না করে ৩টি ইংরেজি বাক্যে বলুন: (১) কী নিয়ে কথা, (২) একটি গুরুত্বপূর্ণ বিবরণ, (৩) এক লাইনে উপসংহার।",
        content:
          "Our company is growing fast, so the management has decided to move to a bigger office in Banani. The new office has three floors and a large training hall. We will shift at the end of next month, and all employees will get a weekly bus service from the old office. The move will take about five days.",
        stepsBn: [
          "প্রথম ধাপ: পাঠ্যটি ২ বার পড়ুন এবং মূল বক্তব্য খুঁজুন।",
          "দ্বিতীয় ধাপ: ৩টি বাক্যের সারাংশ লিখুন।",
          "তৃতীয় ধাপ: ফোনে কাউকে সারাংশটি শোনান — যেন তাঁর কাছে শুনিয়ে বলা হচ্ছে।",
        ],
        answerKey: "The company is moving to a bigger office in Banani at the end of next month. The new office has three floors and a training hall. A weekly bus service will be provided from the old office.",
        answerKeyBn: "সারাংশে main idea + একটি detail + ফলাফল — এই ভারসাম্য রাখুন। طولই ৩ বাক্যের মধ্যে।",
      },
    ],
    quiz: [
      {
        id: "d57-q1",
        type: "multiple-choice",
        promptBn: "শোনার পরীক্ষায় কোন প্রশ্নটি main idea অর্থাৎ মূল বক্তব্য খোঁজে?",
        options: [
          { key: "a", text: "What time does the train leave?" },
          { key: "b", text: "What is the speaker mainly talking about?" },
          { key: "c", text: "Where is the meeting room?" },
          { key: "d", text: "Who is the speaker's manager?" },
        ],
        answer: "b",
        explanationBn: "'What is the speaker mainly talking about?' — এটি মূল বক্তব্য; বাকিগুলো নির্দিষ্ট detail।",
      },
      {
        id: "d57-q2",
        type: "fill-blank",
        promptBn: "\"আমি প্রতিদিন ইংরেজি খবর শুনি।\" → I ___ to English news every day.",
        answer: "listen",
        explanationBn: "listen + to + object: listen to English news।",
      },
      {
        id: "d57-q3",
        type: "translate-bn-en",
        promptBn: "\"বক্তা দুটি কারণের কথা উল্লেখ করেছেন।\" — ইংরেজি কী হবে?",
        answer: "the speaker mentioned two reasons",
        acceptableAnswers: ["the speaker mentioned two reasons.", "the speaker gives two reasons"],
        explanationBn: "উল্লেখ করা = mention; কারণ = reason।",
      },
      {
        id: "d57-q4",
        type: "correct-sentence",
        promptBn: "\"I listened the announcement carefully.\" — বাক্যটি ঠিক করুন।",
        answer: "i listened to the announcement",
        acceptableAnswers: ["i listened to the announcement carefully", "i listened to the announcement."],
        explanationBn: "listen-এর পরে to বাধ্যতামূলক: listened to the announcement।",
      },
      {
        id: "d57-q5",
        type: "multiple-choice",
        promptBn: "\"According ___ the speaker, the bank opens at 9.\" — কোনটা বসবে?",
        options: [
          { key: "a", text: "of" },
          { key: "b", text: "to" },
          { key: "c", text: "for" },
          { key: "d", text: "on" },
        ],
        answer: "b",
        explanationBn: "according to + ব্যক্তি/সূত্র — একটি স্থায়ী (fixed) phrase।",
      },
      {
        id: "d57-q6",
        type: "fill-blank",
        promptBn: "\"মিটিং হবে মঙ্গলবার সকাল ১০টায়।\" → The meeting will be held on ___, at 10 am.",
        answer: "tuesday",
        acceptableAnswers: ["tuesday."],
        explanationBn: "সপ্তাহের দিনের আগে on বসে: on Tuesday। এখানে detail হলো দিনটির নাম।",
      },
      {
        id: "d57-q7",
        type: "translate-bn-en",
        promptBn: "\"কথোপকথনটির মূল বিষয় কী?\" — ইংরেজি কী হবে?",
        answer: "what is the conversation about",
        acceptableAnswers: ["what is the conversation about."],
        explanationBn: "মূল বিষয় = about what; প্রশ্ন: What is the conversation about?",
      },
      {
        id: "d57-q8",
        type: "multiple-choice",
        promptBn: "প্রতি নির্দেশনায় 'মনোযোগ' দিতে বললে কোন শব্দ ব্যবহার হবে?",
        options: [
          { key: "a", text: "attention" },
          { key: "b", text: "attachment" },
          { key: "c", text: "attendance" },
          { key: "d", text: "attitude" },
        ],
        answer: "a",
        explanationBn: "মনোযোগ = attention: Pay attention to every instruction।",
      },
      {
        id: "d57-q9",
        type: "correct-sentence",
        promptBn: "\"The main idea is all the details in the passage.\" — উত্তরটি ভুল; সঠিক ধারণা দিয়ে বাক্যটি লিখুন।",
        answer: "the main idea is the overall message",
        acceptableAnswers: ["the main idea is the overall message.", "the main idea is the main point", "main idea is the overall message"],
        explanationBn: "main idea = সামগ্রিক বার্তা; detail = বিবরণ। দুটি আলাদা ধারণা।",
      },
      {
        id: "d57-q10",
        type: "translate-bn-en",
        promptBn: "\"উদাহরণগুলো মূল বক্তব্য বুঝতে সাহায্য করে।\" — ইংরেজি কী হবে?",
        answer: "examples help us understand the main idea",
        acceptableAnswers: ["examples help us understand the main idea.", "examples help to understand the main idea"],
        explanationBn: "উদাহরণ = examples; সাহায্য করা = help; মূল বক্তব্য = main idea।",
      },
    ],
    homework: {
      instructionsBn:
        "১) আজ ৫ মিনিটের একটি ইংরেজি ভিডিও/খবর/কথা শুনুন (ইউটিউবে নিউজই ভালো)। শোনার সময় শুধু নোট নিন — পরে এক লাইনে main idea এবং ৩টি detail লিখুন। ২) কেউ আপনাকে ফোনে একটি নির্দেশ দিন (কোন জায়গায় কী আনা লাগবে ইত্যাদি), তখন ৩টি clarifying প্রশ্ন করুন এবং পুনরাবৃত্তি করে ঠিক বুঝলেন তা নিশ্চিত করুন। ৩) কালকের প্রস্তুতিতে গত ৫৬ দিনের যেকোনো ১০টি শোনা/পড়া টেক্সটের main idea মনে করার চেষ্টা করুন।",
      tasks: [
        { bn: "৫ মিনিটের ইংরেজি অডিও শুনে ১টি main idea ও ৩টি detail লিখুন।", en: "Listen to five minutes of English audio and note one main idea and three details." },
        { bn: "ফোনে একটি নির্দেশের জন্য ৩টি clarifying প্রশ্ন করুন এবং নিশ্চিত হন।", en: "Ask three clarifying questions about a phone instruction and confirm it." },
        { bn: "গত পাঠের ১০টি টেক্সটের main idea মনে করার চেষ্টা করুন।", en: "Try to recall the main idea of ten earlier texts." },
      ],
      answerKey: "Example: Main idea — The price of fuel has increased. Details — 1) Petrol price raised by 5 taka per litre. 2) The change starts Monday. 3) Bus fares will also rise by 2 taka.",
      answerKeyBn: "বাস্তব অডিওতে main idea লেখা প্রাথমিক কঠিন — যদি না পারেন, পুনরায় শুনুন এবং প্রথম ও শেষ বাক্যটি ধরুন।",
    },
  },

  /* ------------------------------------------------------------------ */
  /* DAY 58 — GRAMMAR AND VOCABULARY REVISION                            */
  /* ------------------------------------------------------------------ */
  {
    day: 58,
    title: "Grammar and Vocabulary Revision",
    titleBn: "ব্যাকরণ ও শব্দভান্ডার পুনর্বিবেচনা",
    level: 3,
    durationMinutes: 35,
    objectives: [
      "পুরো কোর্সের গুরুত্বপূর্ণ টেনশন এক নজরে পুনর্বিবেচনা করবেন।",
      "বাংলাভাষীদের সাধারণ ভুলগুলোর (traps) সমাধান করবেন।",
      "পরীক্ষার ধরন (exam-style) প্রশ্ন সমাধান করার কৌশল শিখবেন।",
      "শব্দভান্ডারের পুনরাবৃত্তি করে দুর্বল দিক চিহ্নিত করবেন।",
    ],
    intro: [
      "৬০ দিনের পথে আমরা শিখেছি অজস্র নিয়ম — am/is/are থেকে Present Perfect, modal থেকে preposition। আজ সেগুলোরই মানচিত্র না-করা একটি রিভিশন পাঠ। লক্ষ্য একটাই: দুর্বল জায়গাগুলো খুঁজে বের করা, যেন আগামী দুই দিনের চূড়ান্ত পরীক্ষায় সেগুলো আর ধরা না দেয়।",
      "রিভিশনের সেরা নিয়ম হলো প্রশ্ন দিয়ে নিজেকে যাচাই করা। তাই আজ আমরা প্রথমে টেনশনগুলোর দ্রুত সারসংক্ষেপ দেখব, তারপর exam-style উত্তর-দাঁড়ানো প্রশ্নগুলো করব। পরীক্ষায় সাধারণ যেসব জায়গায় ফাঁদ পাতা থাকে — subject-verb agreement, অতীত সময়ের সঙ্গে Present Perfect, preposition — সে সব আলাদা করে হাইলাইট করা থাকবে।",
      "একটি কথাও মনে রাখুন: ভুল করা শিক্ষারই অংশ। যে প্রশ্নে ভুল করবেন, সেটিই আপনার আসল শেখার জায়গা — ভুল দেখে নোট করুন, কারণ লিখুন, পরের দিকে আবার ঝালাই করুন।",
    ],
    grammar: {
      title: "টেনশনগুলো এক নজরে",
      explanationBn:
        "পুরো কোর্সের টেনশনগুলোর দ্রুত সারসংক্ষেপ: Present Simple (অভ্যাস ও সত্য — I go to the office by bus every day), Present Continuous (এই মুহূর্তে চলছে — I am preparing for the exam now), Past Simple (সম্পন্ন অতীত — She visited Dhaka last month), Present Perfect (অভিজ্ঞতা/সম্পন্নতায় বর্তমানের সম্পর্ক — We have already sent the report), Future (will/going to — They will start the training next week)। পরীক্ষায় তিনটি জিনিস প্রায়ই ধরা পড়ে: (১) Past Simple আর Present Perfect-এর গুলিয়ে ফেলা — yesterday/last month থাকলে Past Simple, yet/already/ever থাকলে Present Perfect; (২) subject-verb agreement — he/she/it-এর পরে verb-এ s/es; (৩) preposition — on (দিন), at (সময়), in (মাস/বছর)। এই তিনটিই আজকের অনুশীলনে বারবার আসবে।",
      patterns: [
        {
          label: "অভ্যাস / সত্য",
          template: "I + V1 (s/es) + ...",
          bn: "I go to the office by bus every day.",
        },
        {
          label: "চলমান",
          template: "am/is/are + verb-ing",
          bn: "I am preparing for the exam now.",
        },
        {
          label: "সম্পন্ন অতীত",
          template: "subject + V2",
          bn: "She visited Dhaka last month.",
        },
        {
          label: "অভিজ্ঞতা",
          template: "have/has + V3",
          bn: "We have already sent the report.",
        },
        {
          label: "ভবিষ্যৎ",
          template: "will / going to + V1",
          bn: "They will start the training next week.",
        },
      ],
      examples: [
        { en: "I go to the office by bus every day.", bn: "আমি প্রতিদিন বাসে করে অফিস যাই।" },
        { en: "I am preparing for the exam now.", bn: "আমি এখন পরীক্ষার প্রস্তুতি নিচ্ছি।" },
        { en: "She visited Dhaka last month.", bn: "তিনি গত মাসে ঢাকা গিয়েছিলেন।" },
        { en: "We have already sent the report.", bn: "আমরা ইতিমধ্যে রিপোর্টটি পাঠিয়ে দিয়েছি।" },
        { en: "They will start the training next week.", bn: "আগামী সপ্তাহে তারা প্রশিক্ষণ শুরু করবে।" },
        { en: "He works in a garment factory.", bn: "তিনি একটি গার্মেন্টস কারখানায় কাজ করেন।" },
      ],
    },
    commonMistakes: [
      {
        wrong: "I have seen him yesterday.",
        right: "I saw him yesterday.",
        noteBn:
          "yesterday, last month — নির্দিষ্ট অতীত সময়ের সাথে Present Perfect নয়, Past Simple বসে। I saw him yesterday — সঠিক।",
      },
      {
        wrong: "She don't like coffee.",
        right: "She doesn't like coffee.",
        noteBn:
          "he/she/it-এর negative-এ does not/doesn't বসে — do not/don't নয়। She doesn't like coffee।",
      },
      {
        wrong: "He go to market every day.",
        right: "He goes to market every day.",
        noteBn:
          "Present Simple-এ he/she/it-এর পরে verb-এ s/es বসে: goes। এটিই subject-verb agreement-এর সবচেয়ে প্রচলিত ভুল।",
      },
    ],
    vocab: [
      { word: "revision", meaningBn: "পুনর্বিবেচনা / রিভিশন", exampleEn: "Revision before the exam helps a lot.", exampleBn: "পরীক্ষার আগে রিভিশন অনেক সাহায্য করে।" },
      { word: "correct", meaningBn: "সঠিক / শুদ্ধ করা", exampleEn: "Correct the mistakes in your copy.", exampleBn: "আপনার খাতায় ভুলগুলো শুদ্ধ করুন।" },
      { word: "mistake", meaningBn: "ভুল", exampleEn: "Every mistake teaches us something.", exampleBn: "প্রতিটি ভুল আমাদের কিছু শেখায়।" },
      { word: "tense", meaningBn: "কাল (ব্যাকরণ)", exampleEn: "Which tense should we use here?", exampleBn: "এখানে কোন কাল ব্যবহার করা উচিত?" },
      { word: "choose", meaningBn: "বেছে নেওয়া", exampleEn: "Choose the best answer in the quiz.", exampleBn: "কুইজে শ্রেষ্ঠ উত্তরটি বেছে নিন।" },
      { word: "match", meaningBn: "মিলানো", exampleEn: "Match each word with its meaning.", exampleBn: "প্রতিটি শব্দের সঙ্গে তার অর্থ মিলান।" },
      { word: "complete", meaningBn: "সম্পূর্ণ করা", exampleEn: "Complete the sentences with the right words.", exampleBn: "সঠিক শব্দ দিয়ে বাক্যগুলো সম্পূর্ণ করুন।" },
      { word: "underline", meaningBn: "নিচে দাগ দেওয়া", exampleEn: "Underline the main verb in each sentence.", exampleBn: "প্রতিটি বাক্যে মূল ক্রিয়ার নিচে দাগ দিন।" },
      { word: "improve", meaningBn: "উন্নত করা", exampleEn: "Improve your speed with daily practice.", exampleBn: "দৈনিক অনুশীলনে আপনার গতি উন্নত করুন।" },
      { word: "check", meaningBn: "যাচাই করা", exampleEn: "Check your answers before you submit.", exampleBn: "জমা দেওয়ার আগে উত্তরগুলো যাচাই করুন।" },
      { word: "example", meaningBn: "উদাহরণ", exampleEn: "Give an example of Present Perfect.", exampleBn: "Present Perfect-এর একটি উদাহরণ দিন।" },
      { word: "rule", meaningBn: "নিয়ম", exampleEn: "Learn the rule first, then practise.", exampleBn: "আগে নিয়ম শিখুন, তারপর অনুশীলন করুন।" },
    ],
    sentences: [
      { bn: "আমি প্রতিদিন টেনশনের নিয়মগুলো ঝালাই করি।", en: "I practise the tense rules every day." },
      { bn: "গতকাল আমি পুরো অধ্যায়টি পুনর্বিবেচনা করেছি।", en: "Yesterday I revised the whole chapter." },
      { bn: "সাধারণ ভুলগুলো চিহ্নিত করুন।", en: "Identify the common mistakes." },
      { bn: "প্রতিটি বাক্যে সঠিক টেনশন বেছে নিন।", en: "Choose the correct tense in each sentence." },
      { bn: "তিনি গত সপ্তাহে পরীক্ষায় উত্তীর্ণ হয়েছেন।", en: "She passed the exam last week.", noteBn: "last week — নির্দিষ্ট অতীত, তাই Past Simple: passed।" },
      { bn: "আমি এখনও রিপোর্টটি পাঠাইনি।", en: "I have not sent the report yet.", noteBn: "yet-এর সঙ্গে Present Perfect: have not sent।" },
      { bn: "নিয়মটি ভালোভাবে শিখে উদাহরণ দিয়ে চর্চা করুন।", en: "Learn the rule well and practise it with examples." },
      { bn: "প্রতিটি ভুল থেকে নতুন কিছু শেখা যায়।", en: "You can learn something new from every mistake." },
      { bn: "সঠিক শব্দ দিয়ে শূন্যস্থান পূরণ করুন।", en: "Fill in the blanks with the correct word." },
      { bn: "সময় পেলে আগের পাঠগুলো আবার পড়ুন।", en: "Read the earlier lessons again when you have time." },
      { bn: "মূল ক্রিয়ার নিচে দাগ দিন।", en: "Underline the main verb." },
      { bn: "জমা দেওয়ার আগে উত্তরগুলো ভালোভাবে যাচাই করুন।", en: "Check your answers carefully before you submit." },
    ],
    exercises: [
      {
        type: "speaking",
        title: "Explain a Tense in One Minute",
        titleBn: "এক মিনিটে একটি টেনশন ব্যাখ্যা করুন",
        instructionsBn:
          "দল বানিয়ে বা একা — টেনশনগুলোর মধ্যে একটি পছন্দ করুন (৬টি টেনশনের কার্ড লিখে গুছিয়ে নেওয়া যায়)। এক মিনিটে সেটির নিয়ম, একটি উদাহরণ এবং একটি সাধারণ ভুল ব্যাখ্যা করুন — বাংলায় নিয়ম, ইংরেজিতে উদাহরণ।",
        prompts: [
          "Present Simple: habit + s/es. Example: He goes to office by bus.",
          "Present Continuous: am/is/are + V-ing. Example: I am working now.",
          "Past Simple: V2. Example: She visited Dhaka last week.",
          "Present Perfect: have/has + V3. Example: We have sent the report.",
        ],
        stepsBn: [
          "প্রথমে ৩০ সেকেন্ডে নিয়মটি নিজে বলে দেখুন।",
          "তারপর একটি ইংরেজি উদাহরণ ও একটি ভুল রূপ বলুন।",
          "শেষে এটি কখন ব্যবহার হয়, তা একটি বাস্তব পরিস্থিতিতে দেখান।",
        ],
        answerKey: "Example: Present Perfect is for experiences and recent results, not for finished past times. Formula: have/has + V3. Example: We have already sent the report. Wrong: I have seen him yesterday → I saw him yesterday.",
        answerKeyBn: "নিজের ভাষায় ব্যাখ্যা করতে পারলেই বোঝা যায় নিয়মটি আয়ত্ত হয়েছে কিনা। নিয়মের মূল ভুলটিও বলতে পারলে আরও ভালো।",
      },
      {
        type: "writing",
        title: "Error Correction Challenge",
        titleBn: "ভুল শুদ্ধ করার চ্যালেঞ্জ",
        instructionsBn:
          "নিচের ৬টি বাক্যে বাংলাভাষীদের পরিচিত ভুল আছে। প্রতিটি শুদ্ধ করে লিখুন এবং এক লাইনে বাংলায় কারণ ব্যাখ্যা করুন।",
        content: "1. He go to school by rickshaw.\n2. I have seen him yesterday.\n3. She don't like tea.\n4. We discussed about the plan.\n5. I am agree with you.\n6. Could you told me the time?",
        answerKey:
          "1. He goes to school... (s/es with he). 2. I saw him yesterday. (Past Simple with yesterday). 3. She doesn't like tea. (does + not with she). 4. We discussed the plan. (no 'about' after discuss). 5. I agree with you. (agree is a plain verb, no am). 6. Could you tell me the time? (base verb after could).",
        answerKeyBn: "এই ছয়টি ভুলই চূড়ান্ত পরীক্ষায় ফিরে আসতে পারে — কারণগুলো এক লাইনে লেখার অভ্যাস ভালোভাবে তৈরি করছে।",
      },
      {
        type: "reading",
        title: "Exam-style Quick Test",
        titleBn: "পরীক্ষার ধরনের দ্রুত পরীক্ষা",
        instructionsBn:
          "নিচের ছোট অনুচ্ছেদটি পড়ুন এবং ৪টি প্রশ্নের উত্তর দিন। এই পড়াটি পরীক্ষার মতোই — main idea ও detail দুইই খুঁজে বের করতে হবে।",
        content:
          "Rahim works in a small printing press in Old Dhaka. He starts work at 9 am and finishes at 6 pm. Last month, the press bought a modern machine, so now Rahim can print twice as fast. He is learning to operate the new machine this month. Next year, he hopes to open his own small press.",
        stepsBn: [
          "ক. রহিম কোন সময়ে কাজ শুরু করেন?",
          "খ. 'Last month' কী ঘটেছে?",
          "গ. তিনি এই মাসে কী শিখছেন?",
          "ঘ. আগামী বছর তাঁর পরিকল্পনা কী?",
        ],
        answerKey: "ক. He starts at 9 am. খ. The press bought a modern machine. গ. He is learning to operate the new machine. ঘ. He hopes to open his own small press.",
        answerKeyBn: "প্রতিটি উত্তরে exact detail দিয়ে উত্তর দিতে দেখুন — 'সকালে' নয়, 'at 9 am'।",
      },
    ],
    quiz: [
      {
        id: "d58-q1",
        type: "multiple-choice",
        promptBn: "\"সে (মেয়ে) গত মাসে ঢাকা গিয়েছিলেন।\" — সঠিক ইংরেজি কোনটি?",
        options: [
          { key: "a", text: "She has visited Dhaka last month." },
          { key: "b", text: "She visited Dhaka last month." },
          { key: "c", text: "She is visiting Dhaka last month." },
          { key: "d", text: "She visits Dhaka last month." },
        ],
        answer: "b",
        explanationBn: "last month নির্দিষ্ট অতীত — Past Simple: visited। Present Perfect-এর সাথে yesterday/last month চলে না।",
      },
      {
        id: "d58-q2",
        type: "fill-blank",
        promptBn: "\"তিনি প্রতিদিন বাসে করে অফিস যান।\" → He ___ to the office by bus every day.",
        answer: "goes",
        explanationBn: "he + Present Simple → verb-এ s/es: goes।",
      },
      {
        id: "d58-q3",
        type: "translate-bn-en",
        promptBn: "\"আমি এখনও রিপোর্টটি পাঠাইনি।\" — ইংরেজি কী হবে?",
        answer: "i have not sent the report yet",
        acceptableAnswers: ["i have not sent the report yet.", "i haven't sent the report yet"],
        explanationBn: "yet-এর সাথে Present Perfect: have not sent।",
      },
      {
        id: "d58-q4",
        type: "correct-sentence",
        promptBn: "\"She don't like tea.\" — বাক্যটি ঠিক করুন।",
        answer: "she doesn't like tea",
        acceptableAnswers: ["she does not like tea", "she doesn't like tea."],
        explanationBn: "she-এর negative: does not (doesn't) — don't নয়।",
      },
      {
        id: "d58-q5",
        type: "multiple-choice",
        promptBn: "\"We discussed ___ the plan.\" — কোনটা বসবে?",
        options: [
          { key: "a", text: "about" },
          { key: "b", text: "on" },
          { key: "c", text: "(nothing)" },
          { key: "d", text: "for" },
        ],
        answer: "c",
        explanationBn: "discuss-এর পরে preposition লাগে না: We discussed the plan।",
      },
      {
        id: "d58-q6",
        type: "fill-blank",
        promptBn: "\"প্রশিক্ষণটি মঙ্গলবার শুরু হবে।\" → The training will start ___ Tuesday.",
        answer: "on",
        explanationBn: "সপ্তাহের দিনের আগে on: on Tuesday। (সময়ের জন্য at, মাসের জন্য in।)",
      },
      {
        id: "d58-q7",
        type: "translate-bn-en",
        promptBn: "\"প্রতিটি বাক্যে সঠিক টেনশন বেছে নিন।\" — ইংরেজি কী হবে?",
        answer: "choose the correct tense in each sentence",
        acceptableAnswers: ["choose the correct tense in each sentence."],
        explanationBn: "বেছে নিন = choose; সঠিক = correct; প্রতিটি বাক্যে = in each sentence।",
      },
      {
        id: "d58-q8",
        type: "multiple-choice",
        promptBn: "\"গত সপ্তাহে তিনি পরীক্ষায় উত্তীর্ণ হয়েছেন।\" — কোনটি সঠিক?",
        options: [
          { key: "a", text: "She passed the exam last week." },
          { key: "b", text: "She has passed the exam last week." },
          { key: "c", text: "She passes the exam last week." },
          { key: "d", text: "She pass the exam last week." },
        ],
        answer: "a",
        explanationBn: "last week নির্দিষ্ট অতীত → Past Simple: passed।",
      },
      {
        id: "d58-q9",
        type: "correct-sentence",
        promptBn: "\"Could you told me the time?\" — বাক্যটি ঠিক করুন।",
        answer: "could you tell me the time",
        acceptableAnswers: ["could you tell me the time."],
        explanationBn: "modal could-এর পর base verb: could you tell।",
      },
      {
        id: "d58-q10",
        type: "translate-bn-en",
        promptBn: "\"জমা দেওয়ার আগে উত্তরগুলো যাচাই করুন।\" — ইংরেজি কী হবে?",
        answer: "check your answers before you submit",
        acceptableAnswers: ["check your answers before you submit."],
        explanationBn: "যাচাই করা = check; জমা দেওয়া = submit।",
      },
    ],
    homework: {
      instructionsBn:
        "১) আগের ৫৭টি পাঠের আপনার নিজের ভুলের তালিকা খুঁজে বের করুন — বাড়ির খাতা বা নোটে যে বাক্যগুলোতে আপনি ঠিক হয়েছিলেন। সেগুলো থেকে ১০টি বাছাই করে শুদ্ধ রূপসহ লিখুন। ২) টেনশন চার্ট তৈরি করুন: ৫টি কালের সূত্র, দুইটি উদাহরণ ও একটি করে সাধারণ ভুল। ৩) আগামীকালের চূড়ান্ত পরীক্ষার জন্য ২০টি শব্দ (৫১–৫৭ দিনের vocab থেকেই) পুনর্বিবেচনা করুন।",
      tasks: [
        { bn: "পুরো কোর্স থেকে নিজের ১০টি ভুল শুদ্ধ অবস্থায় লিখুন।", en: "Write ten mistakes from your own notes with corrections." },
        { bn: "৫টি কালের সূত্র/উদাহরণ/ভুল সহ একটি টেনশন চার্ট তৈরি করুন।", en: "Make a tense chart for five tenses with formula, examples and a common mistake." },
        { bn: "৫১–৫৭ দিনের ২০টি শব্দ পুনর্বিবেচনা করুন।", en: "Revise twenty words from days 51 to 57." },
      ],
      answerKey: "Example chart: Present Simple — V1 (s/es), habit; mistake: He go → He goes. Present Continuous — am/is/are + V-ing; mistake: I understanding → I understand.",
      answerKeyBn: "নিজের ভুলের তালিকাই সেরা রিভিশন বই — কারণ তাতে আপনার ব্যক্তিগত দুর্বল দিকই লেখা।",
    },
  },

  /* ------------------------------------------------------------------ */
  /* DAY 59 — COMPREHENSIVE SPEAKING CHALLENGE                          */
  /* ------------------------------------------------------------------ */
  {
    day: 59,
    title: "Comprehensive Speaking Challenge",
    titleBn: "পূর্ণাঙ্গ স্পিকিং চ্যালেঞ্জ",
    level: 3,
    durationMinutes: 40,
    objectives: [
      "দুই মিনিটের আত্মপরিচয় (self-presentation) সাবলীলভাবে দিতে পারবেন।",
      "ছবি বা দৃশ্য বর্ণনা করে ইংরেজিতে কথা বলতে পারবেন।",
      "মক ইন্টারভিউ ও চাকরি বিষয়ক বক্তব্য (job talk) সাজিয়ে বলতে পারবেন।",
      "কথা বলার সম্পূর্ণ কাঠামো — শুরু, মাঝ, শেষ — সঠিকভাবে সাজাতে পারবেন।",
    ],
    intro: [
      "এটি আমাদের স্পিকিংয়ের শেষ ধাপ — আর তা হচ্ছে পূর্ণাঙ্গ চ্যালেঞ্জ। ৫৮ দিনের শেখা একসঙ্গে টেনে আমরা আজ তিনটি বড় কাজ করব: দুই মিনিটে নিজের পরিচয়, একটি ছবি বর্ণনা এবং একটি মক ইন্টারভিউ। এই তিনটি কাজই চাকরির ইন্টারভিউ, ভর্তি পরীক্ষা বা IELTS-এর মতো পরীক্ষায় সরাসরি আসে — তাই এগুলো শুধু অনুশীলন নয়, বাস্তব প্রস্তুতি।",
      "দীর্ঘ কথা বলার আসল কৌশল হলো কাঠামো: শুরুতে সালাম ও পরিচয় (First, let me introduce myself...), মাঝে মূল বক্তব্য (Then I will talk about my experience...), শেষে উপসংহার (Finally, I would like to say...)। এই সাইনপোস্ট শব্দগুলো (first, then, after that, finally) শুনলে শ্রোতা বুঝতে পারেন আপনি কোথায় আছেন — আর আপনি নিজেও ভুলে যাওয়ার ভয় পাবেন না।",
      "নার্ভাস লাগবে — এটাই স্বাভাবিক। তাই আজকের নিয়ম: প্রতিটি কাজ তিনবার করুন। প্রথমবার ধীরে, দ্বিতীয়বার স্বাভাবিক, তৃতীয়বার দাঁড়িয়ে আয়নার সামনে। ভুল হলে থামুন না — চালিয়ে যান। সাবলীলতা মানে নিখুঁত নয়; মানে বাধা না দেওয়া।",
    ],
    grammar: {
      title: "কথা বলার কাঠামো ও সাইনপোস্ট শব্দ",
      explanationBn:
        "দীর্ঘ বক্তব্য সাজাতে গেলে তিনটি ধাপ থাকে — শুরু, মাঝখান, শেষ — এবং প্রতিটির জন্য নির্দিষ্ট সংকেত শব্দ (signpost words)। শুরু: First / To begin with / Let me introduce myself। মাঝখানে ধাপগুলো: Then / After that / Next। শেষে: Finally / In conclusion / To sum up। ছবি বর্ণনার জন্য আদর্শ কাঠামো: In the picture, I can see... + মানুষ/জিনিস কী করছে (Present Continuous) + পটভূমি (there is/there are) + ব্যাখ্যা (I think...)। মক ইন্টারভিউতে তিনটি কাঠামোই কাজে লাগে: Present Perfect অভিজ্ঞতার জন্য, Present Simple বর্তমান কাজের জন্য, আর would like to ভবিষ্যৎ প্রত্যাশার জন্য।",
      patterns: [
        {
          label: "শুরু",
          template: "First / Let me introduce myself + ...",
          bn: "First, let me introduce myself. I am Rana and I work as a graphic designer.",
        },
        {
          label: "ধাপ",
          template: "Then / After that + ...",
          bn: "After that, I joined a design agency and gained two years of experience.",
        },
        {
          label: "শেষ",
          template: "Finally / In conclusion + ...",
          bn: "Finally, I would like to thank you for this opportunity.",
        },
        {
          label: "ছবি বর্ণনা",
          template: "In the picture, I can see + ...",
          bn: "In the picture, I can see a man working at a computer.",
        },
      ],
      examples: [
        { en: "First, let me introduce myself.", bn: "প্রথমে নিজের পরিচয় দিই।" },
        { en: "Then I will tell you about my job.", bn: "তারপর আমি আমার কাজের কথা বলব।" },
        { en: "After that, I started my own business.", bn: "তারপর আমি নিজের ব্যবসা শুরু করলাম।" },
        { en: "Finally, I would like to thank you all.", bn: "সবশেষে আপনাদের সবাইকে ধন্যবাদ জানাতে চাই।" },
        { en: "In the picture, there are two people in an office.", bn: "ছবিতে একটি অফিসে দুজন মানুষ দেখা যাচ্ছে।" },
        { en: "I believe that practice is the key to success.", bn: "আমি বিশ্বাস করি অনুশীলনই সাফল্যের চাবিকাঠি।" },
      ],
    },
    commonMistakes: [
      {
        wrong: "I am born in 1998.",
        right: "I was born in 1998.",
        noteBn:
          "জন্মের কথা বলতে passive past রূপ লাগে: was born (শুধু am born নয়)। জন্ম ১৯৯৮ সালে হয়েছে — তাই I was born in 1998।",
      },
      {
        wrong: "I am agree that practice is important.",
        right: "I agree that practice is important.",
        noteBn:
          "agree একটি সাধারণ verb — এর সাথে am হয় না। I agree — সঠিক; I am agree — মোটেও নয়।",
      },
      {
        wrong: "In the last night I watched a movie.",
        right: "Last night I watched a movie.",
        noteBn:
          "'last night'-এর আগে in/at বসে না — শুধু last night। in the evening / at night — এখানে কিন্তু preposition আসে; এই সূক্ষ্মতা মনে রাখুন।",
      },
    ],
    vocab: [
      { word: "presentation", meaningBn: "উপস্থাপনা / বক্তব্য", exampleEn: "Her presentation was clear and confident.", exampleBn: "তার উপস্থাপনা স্পষ্ট ও আত্মবিশ্বাসী ছিল।" },
      { word: "audience", meaningBn: "শ্রোতা", exampleEn: "Keep eye contact with the audience.", exampleBn: "শ্রোতাদের দিকে তাকিয়ে থাকুন।" },
      { word: "confidence", meaningBn: "আত্মবিশ্বাস", exampleEn: "Confidence grows with practice.", exampleBn: "আত্মবিশ্বাস অনুশীলনে বাড়ে।" },
      { word: "fluently", meaningBn: "সাবলীলভাবে", exampleEn: "She speaks English fluently now.", exampleBn: "এখন তিনি সাবলীলভাবে ইংরেজি বলেন।" },
      { word: "practice", meaningBn: "অনুশীলন", exampleEn: "Daily practice makes you fluent.", exampleBn: "দৈনিক অনুশীলন আপনাকে সাবলীল করে।" },
      { word: "pause", meaningBn: "বিরতি", exampleEn: "A short pause helps the listener think.", exampleBn: "ছোট বিরতি শ্রোতাকে ভাবতে সাহায্য করে।" },
      { word: "stage", meaningBn: "মঞ্চ", exampleEn: "Stand straight on the stage.", exampleBn: "মঞ্চে সিধে হয়ে দাঁড়ান।" },
      { word: "greeting", meaningBn: "শুভেচ্ছা / প্রারম্ভিক সম্বোধন", exampleEn: "Start your talk with a warm greeting.", exampleBn: "আন্তরিক শুভেচ্ছা দিয়ে বক্তব্য শুরু করুন।" },
      { word: "conclusion", meaningBn: "উপসংহার", exampleEn: "End with a short conclusion.", exampleBn: "সংক্ষিপ্ত উপসংহার দিয়ে শেষ করুন।" },
      { word: "topic", meaningBn: "বিষয়", exampleEn: "Choose a topic you know well.", exampleBn: "আপনি ভালো জানেন এমন একটি বিষয় বেছে নিন।" },
      { word: "gesture", meaningBn: "অঙ্গভঙ্গি", exampleEn: "Use natural gestures while speaking.", exampleBn: "কথা বলার সময় স্বাভাবিক অঙ্গভঙ্গি ব্যবহার করুন।" },
      { word: "nervous", meaningBn: "নার্ভাস / ঘাবড়ে যাওয়া", exampleEn: "It is normal to feel nervous at first.", exampleBn: "প্রথমে নার্ভাস লাগা স্বাভাবিক।" },
    ],
    sentences: [
      { bn: "দুই মিনিটের বক্তব্য প্রস্তুত করুন।", en: "Prepare a two-minute talk." },
      { bn: "শুরুতেই নিজের পরিচয় দিন।", en: "Introduce yourself at the beginning.", noteBn: "শুরুতে = at the beginning; শেষে = at the end।" },
      { bn: "ছবিটিতে দেখা যাচ্ছে একজন কর্মী কম্পিউটারে কাজ করছেন।", en: "In the picture, an employee is working on a computer." },
      { bn: "আমি বিশ্বাস করি অনুশীলনই সাফল্যের চাবিকাঠি।", en: "I believe practice is the key to success." },
      { bn: "কথা বলার সময় আত্মবিশ্বাস ধরে রাখুন।", en: "Stay confident while you speak." },
      { bn: "বিরতি নেওয়া শ্রোতাদের ভাবতে সময় দেয়।", en: "Pausing gives the audience time to think." },
      { bn: "কথা বলার আগে ভালোভাবে প্রস্তুতি নিন।", en: "Prepare well before you speak." },
      { bn: "উপস্থাপনার শেষে উপসংহারটি গুরুত্বপূর্ণ।", en: "The conclusion is important at the end of a presentation." },
      { bn: "কথা বলার সময় নার্ভাস লাগা স্বাভাবিক।", en: "It is normal to feel nervous while speaking." },
      { bn: "তিনি এক মিনিট ধরে বিরতিহীন কথা বলেছেন।", en: "He spoke continuously for a minute." },
      { bn: "বক্তব্য শুরুর আগে একটি গভীর শ্বাস নিন।", en: "Take a deep breath before you begin your talk." },
      { bn: "সাবলীলতার জন্য প্রতিদিন আয়নার সামনে অনুশীলন করুন।", en: "Practise in front of a mirror every day for fluency." },
    ],
    exercises: [
      {
        type: "speaking",
        title: "The Two-Minute Self Presentation",
        titleBn: "দুই মিনিটের আত্মপরিচয়",
        instructionsBn:
          "নিচের কাঠামোটি ব্যবহার করে নিজের জন্য একটি প্রস্তাবনা তৈরি করুন — নিজের আসল তথ্য দিয়ে। মোট সময়: ২ মিনিট। তিনবার বলুন: ধীরে, স্বাভাবিক, তারপর দাঁড়িয়ে।",
        prompts: [
          "First, let me introduce myself. I am ... and I am from ... .",
          "I have completed ... from ... .",
          "I have worked as ... for ... years.",
          "Then I will tell you about my skills. I am good at ... .",
          "Finally, I would like to share my goal. I want to ... .",
        ],
        stepsBn: [
          "১০টি বাক্যের একটি পরিকল্পনা লিখে নিন — বেশি নয়।",
          "টাইমার ধরে ৩ বার বলুন; সময় শেষে ১৫–৩০ সেকেন্ড বাকি থাকলে বাদ দিন।",
          "শেষবারে রেকর্ড করে শুনে ২টি উন্নতির জায়গা নোট করুন।",
        ],
        answerKey: "Example: First, let me introduce myself. I am Maruf Hossain and I am from Chattogram. I have completed my BBA from a private university. I have worked as a junior executive for two years. Then I will tell you about my skills. I am good at data analysis and teamwork. Finally, I would like to share my goal. I want to grow as a finance professional in your company.",
        answerKeyBn: "কাঠামোটি নিশ্চিত করুন: শুরুতে পরিচয়, মাঝে যোগ্যতা-অভিজ্ঞতা, শেষে লক্ষ্য। সাইনপোস্ট (First, Then, Finally) ব্যবহার করলে ভুলে যাওয়ার ভয় থাকবে না।",
      },
      {
        type: "speaking",
        title: "Describe the Picture",
        titleBn: "ছবি বর্ণনা করুন",
        instructionsBn:
          "নিচের দৃশ্যটি মনে মনে চোখে একটি ছবির মতো কল্পনা করুন, তারপর নিচের সূত্র ব্যবহার করে এক মিনিটে বর্ণনা করুন: কী দেখা যাচ্ছে, মানুষগুলো কী করছে, পরিবেশ কেমন, আর আপনার মতামত।",
        prompts: [
          "In the picture, I can see ... .",
          "There is / There are ... .",
          "On the left / on the right ... .",
          "I think ... because ... .",
        ],
        stepsBn: [
          "প্রথমে ৩০ সেকেন্ডে শুধু 'কী দেখা যাচ্ছে' বলুন — ক্রিয়া Present Continuous-এ।",
          "তারপর পটভূমি ও অবস্থান বলুন (there is, on the left)।",
          "শেষে আপনার অনুমান/মতামত (I think...) যোগ করুন।",
        ],
        answerKey: "Example: In the picture, I can see a busy office. There are two people sitting at a table with laptops. On the left, a man is talking on the phone. On the right, a woman is writing notes. I think they are preparing for a client meeting because there are documents on the table.",
        answerKeyBn: "ছবি বর্ণনার চাবি: Present Continuous-এ কার্যকলাপ + there is/are দিয়ে বস্তু + অবস্থান কথা (left/right) + নিজের ধারণা।",
      },
      {
        type: "speaking",
        title: "The Mock Interview — Job Talk",
        titleBn: "মক ইন্টারভিউ: চাকরি বিষয়ক বক্তব্য",
        instructionsBn:
          "একটি সত্যিকারের ইন্টারভিউর মতো — আপনি প্রার্থী, সামনে একজন ইন্টারভিউয়ার। নিচের প্রশ্নের উত্তর নিজের তথ্য দিয়ে সম্পূর্ণ বাক্যে দিন, এবং 'Why should we hire you?'-এর জন্য একটি পূর্ণাঙ্গ বক্তব্য প্রস্তুত করুন।",
        dialogue: [
          { bn: "আপনি কেন এই চাকরিতে আবেদন করেছেন?", en: "Why did you apply for this job?" },
          { bn: "কারণ এটি আমার দক্ষতার সাথে মেলে এবং আমি এখানে বেড়ে ওঠার সুযোগ দেখছি।", en: "Because it matches my skills, and I see a chance to grow here." },
          { bn: "তাহলে কেন আমরা আপনাকে নিয়োগ দেব?", en: "Then why should we hire you?" },
          { bn: "আমার দুই বছরের অভিজ্ঞতা, দ্রুত শেখার ক্ষমতা এবং দলগত কাজের অভ্যাস আছে।", en: "I have two years of experience, I learn quickly, and I work well in a team." },
          { bn: "আপনি কোথায় নিজেকে তিন বছর পরে দেখতে চান?", en: "Where do you see yourself in three years?" },
          { bn: "আমি এই প্রতিষ্ঠানের একজন অভিজ্ঞ সদস্য হতে চাই যা নতুনদের প্রশিক্ষণ দেয়।", en: "I hope to be an experienced member of this organization who trains new staff." },
        ],
        stepsBn: [
          "প্রতিটি প্রশ্নের উত্তর ২–৩ বাক্যে কম্প্যাক্টভাবে তৈরি করুন।",
          "উত্তরের শুরুতে প্রশ্নের মূল শব্দটি ধরে বলুন (Because... / I have... / I hope...)।",
          "পুরো সংলাপটি ২ বার অভিনয় করুন — ভূমিকা পাল্টে।",
        ],
        answerKey: "Why did you apply? — I applied because the job matches my skills and offers room to grow. Why hire you? — I have two years of experience, I learn fast, and I work well in a team. Where in three years? — I hope to grow into a trainer who supports new staff.",
        answerKeyBn: "ইন্টারভিউয়ের সাধারণ উত্তরগুলো অনুশীলন করার সময় সর্বদা 'cause → effect' ধারা রাখুন: কারণ বলুন, তারপর ফলাফল।",
      },
      {
        type: "writing",
        title: "Outline Your Talk",
        titleBn: "বক্তব্যের রূপরেখা লেখা",
        instructionsBn:
          "আগামী সপ্তাহে আপনার একটি ক্লাস/অফিস উপস্থাপনা আছে কল্পনা করুন — বিষয়: 'How to learn English in 60 days'। নিচের ফাঁকা বিশ্বকোষে (খ) থেকে (গ) পর্যন্ত ৬টি বুলেট পয়েন্ট ইংরেজিতে লিখুন। এই রূপরেখা থেকেই পরের অনুশীলনে বক্তব্য দেবেন।",
        prompts: [
          "Greeting + topic: Good morning. Today I will talk about how I learned English in sixty days.",
          "Point 1: ...",
          "Point 2: ...",
          "Point 3: ...",
          "Then + detail: ...",
          "Finally + conclusion: ...",
        ],
        answerKey: "Point 1: I practised speaking for ten minutes every day. Point 2: I learned five new words daily and used them in sentences. Point 3: I listened to English news every morning. Then I explained what I learned to my family. Finally, I took the final assessment and saw my progress.",
        answerKeyBn: "রূপরেখা হলেই বক্তব্য সহজ — মূল কথাগুলো সাংকেতিক শব্দের নিচে সাজানো থাকলে কথা বলার সময় আটকাবেন না।",
      },
    ],
    quiz: [
      {
        id: "d59-q1",
        type: "multiple-choice",
        promptBn: "কোন শব্দটি কথা বলার শুরু (starting) নির্দেশ করে?",
        options: [
          { key: "a", text: "Finally" },
          { key: "b", text: "First" },
          { key: "c", text: "In conclusion" },
          { key: "d", text: "After that" },
        ],
        answer: "b",
        explanationBn: "First / To begin with — শুরু নির্দেশ করে; Finally ও In conclusion শেষের জন্য।",
      },
      {
        id: "d59-q2",
        type: "fill-blank",
        promptBn: "ছবি বর্ণনার আদর্শ শুরু: ___ the picture, I can see a busy market.",
        answer: "in",
        explanationBn: "ছবিতে = in the picture — preposition in।",
      },
      {
        id: "d59-q3",
        type: "translate-bn-en",
        promptBn: "\"প্রথমে নিজের পরিচয় দিই।\" — ইংরেজি কী হবে?",
        answer: "first, let me introduce myself",
        acceptableAnswers: ["first, let me introduce myself.", "first let me introduce myself"],
        explanationBn: "প্রথমে = First; নিজের পরিচয় দিই = let me introduce myself।",
      },
      {
        id: "d59-q4",
        type: "correct-sentence",
        promptBn: "\"I am born in 1998.\" — বাক্যটি ঠিক করুন।",
        answer: "i was born in 1998",
        acceptableAnswers: ["i was born in 1998."],
        explanationBn: "জন্মের কথা বলতে was born: I was born in 1998।",
      },
      {
        id: "d59-q5",
        type: "multiple-choice",
        promptBn: "\"In the picture, a woman ___ a report.\" — কোনটা বসবে?",
        options: [
          { key: "a", text: "writes" },
          { key: "b", text: "is writing" },
          { key: "c", text: "wrote" },
          { key: "d", text: "will write" },
        ],
        answer: "b",
        explanationBn: "ছবির দৃশ্যে সংঘটিত কার্যকলাপ Present Continuous-এ বর্ণনা করা হয়: is writing।",
      },
      {
        id: "d59-q6",
        type: "translate-bn-en",
        promptBn: "\"বিরতি নেওয়া শ্রোতাদের ভাবতে সময় দেয়।\" — ইংরেজি কী হবে?",
        answer: "pausing gives the audience time to think",
        acceptableAnswers: ["pausing gives the audience time to think.", "a pause gives the audience time to think"],
        explanationBn: "বিরতি নেওয়া = pausing; শ্রোতা = audience; ভাবতে সময় = time to think।",
      },
      {
        id: "d59-q7",
        type: "fill-blank",
        promptBn: "\"তারপর আমি আমার কাজের কথা বলব।\" → ___ I will tell you about my job.",
        answer: "then",
        explanationBn: "তারপর = Then — ধাপ এগোনোর সাইনপোস্ট শব্দ।",
      },
      {
        id: "d59-q8",
        type: "multiple-choice",
        promptBn: "কথা বলার সময় শ্রোতাদের দিকে তাকানোকে কী বলে?",
        options: [
          { key: "a", text: "eye contact" },
          { key: "b", text: "handshake" },
          { key: "c", text: "background" },
          { key: "d", text: "paraphrase" },
        ],
        answer: "a",
        explanationBn: "শ্রোতাদের দিকে তাকিয়ে কথা বলা = eye contact — আত্মবিশ্বাসের প্রকাশ।",
      },
      {
        id: "d59-q9",
        type: "correct-sentence",
        promptBn: "\"In the last night I watched a movie.\" — বাক্যটি ঠিক করুন।",
        answer: "last night i watched a movie",
        acceptableAnswers: ["last night i watched a movie."],
        explanationBn: "last night-এর আগে in বসে না: Last night I watched a movie।",
      },
      {
        id: "d59-q10",
        type: "translate-bn-en",
        promptBn: "\"সাবলীলতার জন্য প্রতিদিন আয়নার সামনে অনুশীলন করুন।\" — ইংরেজি কী হবে?",
        answer: "practise in front of a mirror every day for fluency",
        acceptableAnswers: ["practise in front of a mirror every day for fluency.", "practice in front of a mirror every day for fluency"],
        explanationBn: "অনুশীলন = practise (verb); আয়নার সামনে = in front of a mirror; সাবলীলতা = fluency।",
      },
    ],
    homework: {
      instructionsBn:
        "১) আজকের দিনে বানানো ২-মিনিটের আত্মপরিচয়টি কাল আবার বলুন — এবার পুরোটা না দেখে শুধু রূপরেখা থেকে। ২) ঘরের যেকোনো ছবি (পরিবারের, দৃশ্যের) বেছে নিয়ে সেটি ইংরেজিতে ১ মিনিট বর্ণনা করুন এবং ৩ বার বলুন। ৩) ইন্টারভিউয়ের ৩টি প্রশ্নের উত্তর (Why this job? Why hire you? Where in three years?) নিজের আসল তথ্য দিয়ে লিখুন — কালকের চূড়ান্ত পরীক্ষার আগে শেষ অনুশীলন।",
      tasks: [
        { bn: "রূপরেখা থেকে ২-মিনিটের আত্মপরিচয় আবার বলুন (লেখা না দেখে)।", en: "Deliver your two-minute self-presentation again from the outline only." },
        { bn: "ঘরের একটি ছবি ইংরেজিতে এক মিনিটে ৩ বার বর্ণনা করুন।", en: "Describe one picture from home in English for a minute, three times." },
        { bn: "৩টি ইন্টারভিউ প্রশ্নের উত্তর নিজের তথ্যে লিখে রেকর্ড করুন।", en: "Write and record answers to three interview questions with your own details." },
      ],
      answerKey: "Recordings should contain: a clear start (greeting + name), a middle (experience + skills with First/Then), and an end (Finally + goal). Check fluency, not perfection.",
      answerKeyBn: "আগামীকাল চূড়ান্ত পরীক্ষা — তাই আজকের হোমওয়ার্কই শেষ প্রস্তুতি। রেকর্ড শুনে সময় ও সাবলীলতা যাচাই করুন।",
    },
  },

  /* ------------------------------------------------------------------ */
  /* DAY 60 — FINAL ASSESSMENT AND COMPLETION SUMMARY                    */
  /* ------------------------------------------------------------------ */
  {
    day: 60,
    title: "Final Assessment and Completion Summary",
    titleBn: "চূড়ান্ত মূল্যায়ন ও সমাপ্তির সারসংক্ষেপ",
    level: 3,
    durationMinutes: 40,
    objectives: [
      "৬০ দিনের পুরো কোর্সের ১৫টি প্রশ্নের চূড়ান্ত মূল্যায়ন সম্পন্ন করবেন।",
      "শোনা, বলা, পড়া, লেখা ও ব্যাকরণ — সব দক্ষতার চিত্র একসঙ্গে পাবেন।",
      "নিজের সবল ও দুর্বল দিক চিহ্নিত করে পরবর্তী শেখার পরিকল্পনা তৈরি করবেন।",
      "কোর্স শেষে ইংরেজি চর্চা অব্যাহত রাখার একটি বাস্তব রূপরেখা লিখবেন।",
    ],
    intro: [
      "অভিনন্দন! আপনি আজ ৬০ তম দিনে পৌঁছে গেছেন — যেখানে ১ নম্বর দিনে আপনি শিখেছিলেন \"I eat rice\" কীভাবে বলতে হয়, সেখানে আজ আপনি নিজের অভিজ্ঞতা, পেশাগত লক্ষ্য আর ভবিষ্যৎ পরিকল্পনা ইংরেজিতে বলতে পারছেন। এই যাত্রাটাই ছিল আসল অর্জন; আজকের পরীক্ষাটি কেবল সেই যাত্রার মানচিত্র ধরে হাঁটার একটা ফাইনাল চেকপয়েন্ট।",
      "চূড়ান্ত মূল্যায়নে ১৫টি প্রশ্ন থাকবে — পুরো কোর্স জুড়ে বিস্তৃত: am/is/are, Present Simple ও Continuous, Past Simple, Present Perfect, modal, preposition, article, formal language, ক্ল্যারিফিকেশন ইত্যাদি। প্রশ্নগুলো মিশ্র ধরনের — multiple-choice, fill-blank, বাংলা→ইংরেজি অনুবাদ ও বাক্য শুদ্ধ করা। প্রতিটি প্রশ্নের ব্যখ্যা (explanation) পড়ে নিন — সঠিক উত্তর আর ভুলের কারণ দুটোই বুঝুন।",
      "পরীক্ষার পর আপনি নিজের ফলাফল দেখে দুটি তালিকা করবেন: (১) যে বিষয়ে ভালো করলেন — এগুলো আপনাকে আত্মবিশ্বাস দেবে; (২) যে বিষয়ে ভুল করলেন — এগুলোই আপনার ভবিষ্যৎ শেখার রোডম্যাপ। মনে রাখবেন, ৬০ দিন শেষ মানে শেখা শেষ নয় — ইংরেজি এমন একটি ভাষা, যা ব্যবহার করতেই থাকে; ব্যবহার না করলে আবার মরিচা পড়ে যায়। তাই আজকের শেষ কাজ হবে 'পরবর্তী ৬০ দিনের' নিজস্ব পরিকল্পনা লেখা।",
    ],
    grammar: {
      title: "চূড়ান্ত পরীক্ষার কৌশল",
      explanationBn:
        "একটি ভালো মূল্যায়ন দেওয়ার কৌশল সহজ: (১) প্রশ্ন পুরো পড়ুন — বিশেষ করে নেতিবাচক শব্দ (not, never) খেয়াল করুন; (২) MCQ-য় প্রতিটি option দেখুন — নিশ্চিত না হলে বাদ-প্রক্রিয়ায় (elimination) যান; (৩) fill-blank-এ বাক্যের কর্তা দেখে verb-এর রূপ ঠিক করুন — he/she/it → s/es, plural → base; (৪) অনুবাদের সময় বাংলা বাক্যটির সময় (কখন ঘটেছে) বোঝার চেষ্টা করুন — অতীত হলে V2, অভিজ্ঞতা হলে have/has + V3; (৫) বাক্য শুদ্ধ করার সময় ভুলগুলো খুঁজে নিন: subject-verb agreement, preposition, modal-এর পর base verb, article। সময় নিয়ে ধীরে-সুস্থে করুন — প্রতিটি প্রশ্নের জন্য নিজেকে মানসিক প্রশান্তি রাখুন।",
      patterns: [
        {
          label: "MCQ কৌশল",
          template: "বাক্যটি পড়ুন → প্রতিটি option যাচাই করুন → বাদ দিন → উত্তর দিন",
          bn: "নিশ্চিত ভুল option আগে বাদ দিন; বাকিগুলোর মাঝে বিচার করুন।",
        },
        {
          label: "অনুবাদ কৌশল",
          template: "সময় নির্ণয় করুন → সঠিক tense → শব্দের ক্রম ঠিক করুন",
          bn: "Yesterday/last → V2; yet/already → have/has + V3; every day → V1।",
        },
        {
          label: "শুদ্ধ কৌশল",
          template: "verb, preposition, modal base, article — এই চারটি যাচাই করুন",
          bn: "বাক্যটির ভুল সাধারণত এই চারটি জায়গার একটিতে থাকে।",
        },
      ],
      examples: [
        { en: "She has already submitted the report.", bn: "তিনি ইতিমধ্যে রিপোর্টটি জমা দিয়েছেন।" },
        { en: "I was born in Dhaka.", bn: "আমার জন্ম ঢাকায়।" },
        { en: "Could you repeat that, please?", bn: "দয়া করে আবার বলবেন কি?" },
        { en: "The meeting is at 10 am on Monday.", bn: "মিটিংটি সোমবার সকাল ১০টায়।" },
        { en: "We discussed the new budget.", bn: "আমরা নতুন বাজেট নিয়ে আলোচনা করেছি।" },
        { en: "He is an honest man.", bn: "তিনি একজন সৎ মানুষ।" },
      ],
    },
    commonMistakes: [
      {
        wrong: "Please explain me the rule.",
        right: "Please explain the rule to me.",
        noteBn:
          "explain-এর পর direct object (the rule) তারপর to me বসে। 'explain me' ভুল — explain + to + ব্যক্তি ব্যবহার করুন।",
      },
      {
        wrong: "I am knowing him for ten years.",
        right: "I have known him for ten years.",
        noteBn:
          "know একটি stative verb - Continuous(−ing) চলে না; 'for ten years' থাকলে Present Perfect: have known।",
      },
      {
        wrong: "He asked me where is the bank.",
        right: "He asked me where the bank is.",
        noteBn:
          "Indirect question-এ উল্টো ক্রম (inversion) চলে না: where the bank is — not where is the bank।",
      },
    ],
    vocab: [
      { word: "assessment", meaningBn: "মূল্যায়ন / পরীক্ষা", exampleEn: "The final assessment has fifteen questions.", exampleBn: "চূড়ান্ত মূল্যায়নে ১৫টি প্রশ্ন আছে।" },
      { word: "score", meaningBn: "স্কোর / নম্বর", exampleEn: "Write your score after the assessment.", exampleBn: "মূল্যায়নের পর আপনার স্কোর লিখে নিন।" },
      { word: "result", meaningBn: "ফলাফল", exampleEn: "The result shows your strengths.", exampleBn: "ফলাফল আপনার শক্তিগুলো দেখায়।" },
      { word: "improve", meaningBn: "উন্নত করা", exampleEn: "Improve your weak areas step by step.", exampleBn: "দুর্বল দিকগুলো ধাপে ধাপে উন্নত করুন।" },
      { word: "review", meaningBn: "পর্যালোচনা", exampleEn: "Review your notes at the end of the week.", exampleBn: "সপ্তাহের শেষে আপনার নোট পর্যালোচনা করুন।" },
      { word: "certificate", meaningBn: "সনদ", exampleEn: "You can print the course certificate after the assessment.", exampleBn: "মূল্যায়নের পর কোর্সের সনদ প্রিন্ট করতে পারেন।" },
      { word: "continue", meaningBn: "চালিয়ে যাওয়া", exampleEn: "Continue practicing English every single day.", exampleBn: "প্রতিদিন একটু করে ইংরেজি চর্চা চালিয়ে যান।" },
      { word: "goal", meaningBn: "লক্ষ্য", exampleEn: "My next goal is to improve my writing.", exampleBn: "আমার পরের লক্ষ্য হলো লেখার দক্ষতা উন্নত করা।" },
      { word: "plan", meaningBn: "পরিকল্পনা", exampleEn: "Make a plan for the next sixty days.", exampleBn: "পরের ৬০ দিনের জন্য একটি পরিকল্পনা করুন।" },
      { word: "achievement", meaningBn: "অর্জন", exampleEn: "Finishing this course is a real achievement.", exampleBn: "এই কোর্স শেষ করা একটি সত্যিকারের অর্জন।" },
      { word: "journey", meaningBn: "যাত্রা", exampleEn: "It has been an amazing language journey.", exampleBn: "এটি একটি অসাধারণ ভাষা-যাত্রা ছিল।" },
      { word: "celebrate", meaningBn: "উদযাপন করা", exampleEn: "Celebrate your progress, however small.", exampleBn: "আপনার অগ্রগতি উদযাপন করুন — যত ছোটই হোক।" },
    ],
    sentences: [
      { bn: "৬০ দিনের কোর্স শেষ করা একটি বড় অর্জন।", en: "Completing the 60-day course is a big achievement." },
      { bn: "আমি এখন সহজে ইংরেজি বলতে পারি।", en: "Now I can speak English more easily." },
      { bn: "আমার স্কোর দেখে আমি খুশি।", en: "I am happy with my score." },
      { bn: "দুর্বল দিকগুলো আমি আবার অনুশীলন করব।", en: "I will practise my weak areas again." },
      { bn: "শেখা কখনো থেমে থাকে না।", en: "Learning never stops." },
      { bn: "আগামী মাসে আমি সাবটাইটেল ছাড়া ইংরেজি সিনেমা দেখার চেষ্টা করব।", en: "Next month I will try to watch English movies without subtitles." },
      { bn: "প্রতিদিন ১৫ মিনিট ইংরেজি বলা আমার লক্ষ্য।", en: "My goal is to speak English for fifteen minutes every day." },
      { bn: "আমি এই যাত্রায় অনেক কিছু শিখেছি।", en: "I have learned a lot during this journey." },
      { bn: "পরীক্ষার আগে প্রশ্নগুলো ভালোভাবে পড়ুন।", en: "Read the questions carefully before the assessment." },
      { bn: "এই সাফল্য উদযাপনের যোগ্য।", en: "This success deserves to be celebrated." },
      { bn: "পরের ধাপে আমি ইংরেজি লেখার দক্ষতা বাড়াব।", en: "In the next step, I will improve my English writing." },
      { bn: "আমার পরিকল্পনা হলো একজন ইংরেজি-ভাষী বন্ধু খুঁজে নিয়মিত কথা বলা।", en: "My plan is to find an English-speaking friend and talk regularly." },
    ],
    exercises: [
      {
        type: "speaking",
        title: "The Final Self-Presentation Record",
        titleBn: "চূড়ান্ত আত্মপরিচয় রেকর্ডিং",
        instructionsBn:
          "আজকের চূড়ান্ত স্পিকিং মূল্যায়ন: গতকালের ২ মিনিটের বক্তব্যটি আবার বলুন, এবার নিজের ভয়েস রেকর্ড করুন। মূল্যায়ন করবেন নিজেই — নিচের চেকলিস্ট ধরে: শুরু, মাঝ, শেষ, সাইনপোস্ট শব্দ, গতি। মনে রাখবেন এটি মোটেও টেনশনের বিষয় নয় — এটি আপনার নিজের অগ্রগতির চিত্র।",
        prompts: [
          "Greeting + introduction (who you are)",
          "Education + experience (Past / Present Perfect)",
          "Skills + why you are suitable (I am good at...)",
          "Future goal (I would like to...)",
          "Closing (Finally, I would like to...)",
        ],
        stepsBn: [
          "প্রথমে গতকালের রূপরেখা থেকে বক্তব্যটি ১ বার বলুন।",
          "তারপর টাইমার ধরে রেকর্ড করুন — ২ মিনিটের মধ্যে।",
          "রেকর্ড শুনে চেকলিস্টের প্রতিটি পয়েন্টে নিজেকে স্কোর দিন (1–5)।",
        ],
        answerKey: "Checklist: 1) Clear greeting and name 2) Past/experience in correct tense 3) Skills with 'I am good at' 4) Goal with 'I would like to' 5) Closing with 'Finally'. A confident 2-minute talk covers all five.",
        answerKeyBn: "স্কোর যতই হোক — মূল হলো চেকলিস্টের প্রতিটি পয়েন্টে আপনার একটি করে বাক্য আছে। ৫৫ দিন আগে এটা আপনার পক্ষে অসম্ভব ছিল, আজ সম্ভব।",
      },
      {
        type: "writing",
        title: "My 60-Day Reflection",
        titleBn: "আমার ৬০ দিনের প্রতিফলন",
        instructionsBn:
          "একটি ইংরেজি অনুচ্ছেদে (৮–১০ বাক্য) আপনার ৬০ দিনের অভিজ্ঞতা লিখুন: শুরুতে কেমন ছিলেন, কী শিখেছেন, কোন পাঠটি সবচেয়ে ভালো লেগেছে, কোন জায়গায় এখনও দুর্বল, আর পরিকল্পনা কী। এটিই হবে আপনার কোর্সের নথি — ভবিষ্যতে ফিরে দেখার জন্য।",
        prompts: [
          "In the beginning, I could not speak English at all.",
          "Over the days, I learned ... .",
          "My favourite lesson was ... because ... .",
          "I still want to improve ... .",
          "From now on, I will ... .",
        ],
        stepsBn: [
          "প্রথমে প্রতিটি সূত্র দিয়ে একটি করে বাক্য লিখুন — অন্তত ৫টি।",
          "তারপর সেগুলো জোড়া দিয়ে একটি মসৃণ অনুচ্ছেদে সাজান।",
          "শেষে জোরে জোরে পড়ুন এবং যেকোনো ৩টি ভুল শুদ্ধ করুন (subject-verb, preposition, tense)।",
        ],
        answerKey: "Example: In the beginning, I could not speak English at all. Over the days, I learned tenses, new words and how to introduce myself. My favourite lesson was the job interview because it matched my real need. I still want to improve my listening speed. From now on, I will watch one English video every day and speak for ten minutes before bed.",
        answerKeyBn: "আপনার নিজের অভিজ্ঞতা লিখুন — নিখুঁত বাক্য নয়, সৎ অভিজ্ঞতাই গুরুত্বপূর্ণ। শেষে নিজের ৩টি ভুল খুঁজে শুধরে নিন।",
      },
      {
        type: "reading",
        title: "Read and Reflect",
        titleBn: "পড়ুন ও প্রতিফলন করুন",
        instructionsBn:
          "নিচের ছোট নিবন্ধটি পড়ুন। এরপর ৩টি প্রশ্নের উত্তর দিন, তারপর একটি ইংরেজি বাক্যে নিবন্ধটির main idea লিখুন — ঠিক যেমনটি ৫৭ নম্বর দিনে অনুশীলন করেছিলেন।",
        content:
          "Learning a language is like building a house. You start with the foundations — simple words and basic sentences. Then you add the walls: grammar, tenses and new vocabulary. Finally, you decorate the house — confident speaking, emails and interviews. But a house needs regular care. If you stop using your English, the walls become weak again. So keep the habit small and steady: ten minutes a day is better than three hours once a month.",
        stepsBn: [
          "ক. এই নিবন্ধটির মূল উপমা (comparison) কী?",
          "খ. নিবন্ধ অনুযায়ী ভাষা ভুলে যাওয়া এড়াতে কী করতে হবে?",
          "গ. আপনি আপনার নিজের 'বাড়ি'-তে কোন ঘরটি সবচেয়ে ভালো তৈরি করেছেন?",
          "ঘ. এক লাইনে main idea।",
        ],
        answerKey: "ক. Learning a language is like building a house. খ. Keep practising daily, even ten minutes a day, because the walls become weak if you stop. গ. নিজস্ব উত্তর (example: my speaking room is the strongest). ঘ. Main idea: keep practising daily to keep your English strong.",
        answerKeyBn: "এই নিবন্ধটি পড়ার পর একটা কথা মনে রাখুন — 'consistency beats intensity'। প্রতিদিনের ছোট চর্চা দীর্ঘ বিরতির বড় পাঠকে হারিয়ে দেয়।",
      },
    ],
    quiz: [
      {
        id: "d60-q1",
        type: "multiple-choice",
        promptBn: "সমগ্র কোর্স: \"She ___ a doctor.\" — কোনটা বসবে?",
        options: [
          { key: "a", text: "am" },
          { key: "b", text: "is" },
          { key: "c", text: "are" },
          { key: "d", text: "be" },
        ],
        answer: "b",
        explanationBn: "he/she/it-এর সঙ্গে is: She is a doctor।",
      },
      {
        id: "d60-q2",
        type: "fill-blank",
        promptBn: "Present Simple: \"তিনি প্রতিদিন বাসে করে অফিস যান।\" → He ___ to the office by bus every day.",
        answer: "goes",
        explanationBn: "he + every day → Present Simple, verb-এ s/es: goes।",
      },
      {
        id: "d60-q3",
        type: "translate-bn-en",
        promptBn: "\"আমি গতকাল একটি নতুন বই কিনেছি।\" — ইংরেজি কী হবে?",
        answer: "i bought a new book yesterday",
        acceptableAnswers: ["i bought a new book yesterday."],
        explanationBn: "গতকাল = yesterday → Past Simple: bought।",
      },
      {
        id: "d60-q4",
        type: "multiple-choice",
        promptBn: "Past Simple: \"We ___ the match last night.\" — কোনটা বসবে?",
        options: [
          { key: "a", text: "watch" },
          { key: "b", text: "watches" },
          { key: "c", text: "watched" },
          { key: "d", text: "have watched" },
        ],
        answer: "c",
        explanationBn: "last night নির্দিষ্ট অতীত → watched (V2)।",
      },
      {
        id: "d60-q5",
        type: "correct-sentence",
        promptBn: "\"I have seen him yesterday.\" — বাক্যটি ঠিক করুন।",
        answer: "i saw him yesterday",
        acceptableAnswers: ["i saw him yesterday."],
        explanationBn: "yesterday-এর সঙ্গে Present Perfect নয়, Past Simple: I saw him yesterday।",
      },
      {
        id: "d60-q6",
        type: "multiple-choice",
        promptBn: "Modal: \"___ I help you?\" — ভদ্রতম রূপ কোনটি?",
        options: [
          { key: "a", text: "Do" },
          { key: "b", text: "Can" },
          { key: "c", text: "May" },
          { key: "d", text: "Will" },
        ],
        answer: "c",
        explanationBn: "May I help you? — সবচেয়ে ভদ্র ও আনুষ্ঠানিক; Canও চলে কিন্তু May বেশি নম্র।",
      },
      {
        id: "d60-q7",
        type: "fill-blank",
        promptBn: "Preposition: \"The meeting is ___ Monday at 10 am.\"",
        answer: "on",
        explanationBn: "সপ্তাহের দিনের আগে on: on Monday।",
      },
      {
        id: "d60-q8",
        type: "translate-bn-en",
        promptBn: "\"আমি পাঁচ বছর ধরে একটি ব্যাংকে কাজ করছি।\" — ইংরেজি কী হবে?",
        answer: "i have worked in a bank for five years",
        acceptableAnswers: ["i have worked in a bank for five years.", "i have been working in a bank for five years"],
        explanationBn: "অভিজ্ঞতা + for five years → Present Perfect: I have worked in a bank for five years।",
      },
      {
        id: "d60-q9",
        type: "multiple-choice",
        promptBn: "Article: \"He is ___ honest man.\" — কোনটা বসবে?",
        options: [
          { key: "a", text: "a" },
          { key: "b", text: "an" },
          { key: "c", text: "the" },
          { key: "d", text: "(nothing)" },
        ],
        answer: "b",
        explanationBn: "honest-এর প্রথম ধ্বনি vowel (অ) — তাই an: an honest man।",
      },
      {
        id: "d60-q10",
        type: "correct-sentence",
        promptBn: "\"She don't like tea.\" — বাক্যটি ঠিক করুন।",
        answer: "she doesn't like tea",
        acceptableAnswers: ["she does not like tea", "she doesn't like tea."],
        explanationBn: "she-এর negative: does not/doesn't — don't নয়।",
      },
      {
        id: "d60-q11",
        type: "multiple-choice",
        promptBn: "Register: কোনটি আনুষ্ঠানিক অভিবাদন?",
        options: [
          { key: "a", text: "Hi!" },
          { key: "b", text: "Hey!" },
          { key: "c", text: "Dear Sir," },
          { key: "d", text: "Yo!" },
        ],
        answer: "c",
        explanationBn: "Dear Sir / Dear Mr. Rahman — আনুষ্ঠানিক সম্বোধন; Hi, Hey বন্ধুত্বপূর্ণ।",
      },
      {
        id: "d60-q12",
        type: "fill-blank",
        promptBn: "Clarification: \"আপনি কি আবার বলবেন?\" → Could you ___ that again, please?",
        answer: "repeat",
        explanationBn: "Could you + base verb: repeat।",
      },
      {
        id: "d60-q13",
        type: "translate-bn-en",
        promptBn: "\"আমি প্রতিদিন ইংরেজি খবর শুনি।\" — ইংরেজি কী হবে?",
        answer: "i listen to english news every day",
        acceptableAnswers: ["i listen to english news every day."],
        explanationBn: "listen + to: I listen to English news every day।",
      },
      {
        id: "d60-q14",
        type: "multiple-choice",
        promptBn: "Common mistake: \"We discussed ___ the budget.\" — কোনটা সঠিক?",
        options: [
          { key: "a", text: "We discussed about the budget." },
          { key: "b", text: "We discussed on the budget." },
          { key: "c", text: "We discussed the budget." },
          { key: "d", text: "We discussed for the budget." },
        ],
        answer: "c",
        explanationBn: "discuss-এর পরে preposition লাগে না: We discussed the budget।",
      },
      {
        id: "d60-q15",
        type: "fill-blank",
        promptBn: "Email writing: \"I look forward to ___ from you.\"",
        answer: "hearing",
        explanationBn: "look forward to + gerund: hearing from you।",
      },
    ],
    homework: {
      instructionsBn:
        "৬০ দিন শেষ! এখন থেকে আপনার কাজ ক্রমাগত চর্চা। (১) 'আমার পরবর্তী ৬০ দিন' শিরোনামে একটি পরিকল্পনা লিখুন — প্রতিদিন ১৫ মিনিট কথা বলা, ৫টি নতুন শব্দ, ১টি ইংরেজি খবর/ভিডিও শোনা, সপ্তাহে ১টি ইমেইল বা অনুচ্ছেদ লেখা। (২) পরের ৭ দিনে আপনার দুর্বলতম ৩টি বিষয় (পরীক্ষার ফলাফল থেকে) অনুশীলন করুন — প্রতিটি ১০ মিনিট করে। (৩) কোর্সের সেরা ১০টি বাক্য/সংলাপ নিজের নোটবুকে হুবহু লিখে রাখুন। (৪) আগামী মাসে নিজেকে আবার ছোট একটি মক ইন্টারভিউ দিন — এবার বন্ধুকে ইন্টারভিউয়ার বানিয়ে।",
      tasks: [
        { bn: "'আমার পরবর্তী ৬০ দিন' — দৈনিক ইংরেজি চর্চার পরিকল্পনা লিখুন।", en: "Write a 'My Next 60 Days' daily English practice plan." },
        { bn: "পরীক্ষার ফলাফল থেকে দুর্বল ৩টি বিষয় ৭ দিনে ১০ মিনিট করে অনুশীলন করুন।", en: "Practise your three weakest areas from the assessment for ten minutes a day for seven days." },
        { bn: "কোর্সের সেরা ১০টি বাক্য নোটবুকে হুবহু লিখুন।", en: "Copy the ten best sentences of the course into your notebook." },
        { bn: "আগামী মাসে বন্ধুকে ইন্টারভিউয়ার বানিয়ে একটি মক ইন্টারভিউ দিন।", en: "Next month, do a mock interview with a friend as the interviewer." },
      ],
      answerKey: "Next-60-days sample: Daily — 10 minutes speaking aloud, 5 new words in sentences, one English news video; Weekly — one email or paragraph, one conversation recorded; Monthly — one full mock interview and one self-assessment quiz.",
      answerKeyBn: "পরিকল্পনা ছোট রাখুন যেন থেমে না যায়। সবচেয়ে বড় কথা — ৬০ দিন আপনি প্রমাণ করেছেন আপনি পারেন। এখন শুধু চালিয়ে যান।",
    },
  },
];