export interface IeltsTopic {
  id: string;
  module: "speaking" | "writing" | "reading" | "listening";
  titleEn: string;
  titleBn: string;
  summaryBn: string;
  badge: string;
  details: {
    heading: string;
    contentBn: string;
    examples?: { en: string; bn: string; note?: string }[];
    rules?: string[];
  }[];
}

export interface IeltsVocabItem {
  id: string;
  word: string;
  pronunciation?: string;
  type: string;
  meaningBn: string;
  synonyms: string[];
  collocations: string[];
  band8Sentence: string;
  topic: "Environment" | "Technology" | "Education" | "Society" | "Economy" | "Health";
}

export interface IeltsQuizItem {
  id: string;
  module: "Reading" | "Writing" | "Speaking" | "Listening";
  questionBn: string;
  contextEn?: string;
  options: { key: string; text: string }[];
  correctKey: string;
  explanationBn: string;
}

export interface IeltsStudyPlanDay {
  week: number;
  title: string;
  focusBn: string;
  tasks: string[];
}

export const ieltsOverview = {
  titleEn: "IELTS Preparation Masterclass",
  titleBn: "আইইএলটিএস পূর্ণাঙ্গ প্রস্তুতি হাব (ব্যান্ড ৭.৫+)",
  descriptionBn:
    "বাংলাভাষী শিক্ষার্থীদের জন্য বিশেষভাবে তৈরি — স্পিকিং, রাইটিং, রিডিং ও লিসেনিংয়ের প্রতিটি মডিউলে ব্যান্ড ৭.৫ থেকে ৮.৫ অর্জনের কৌশল, মডেল উত্তর, ক্যালকুলেটর ও ভোকেবুলারি ব্যাংক।",
  bands: [
    { band: "Band 9.0", title: "Expert User", descBn: "নেটিভ স্পিকারের মতো পূর্ণাঙ্গ ও সাবলীল পারদর্শিতা।" },
    { band: "Band 8.0 - 8.5", title: "Very Good User", descBn: "জটিল ও বিশদ যুক্তিতর্কে চমৎকার দখল; মাঝে মাঝে সামান্য অসংগতি।" },
    { band: "Band 7.0 - 7.5", title: "Good User", descBn: "বেশিরভাগ জটিল পরিস্থিতিতে চমৎকার নিয়ন্ত্রণ ও কার্যকর যোগাযোগ।" },
    { band: "Band 6.0 - 6.5", title: "Competent User", descBn: "কিছু ভুলভ্রান্তি থাকলেও পরিচিত পরিস্থিতিতে কার্যকর বোঝাপড়া।" },
  ],
};

export const ieltsSpeakingTopics: IeltsTopic[] = [
  {
    id: "sp-p1",
    module: "speaking",
    titleEn: "Part 1: Everyday Topics & Introduction",
    titleBn: "পার্ট ১: পরিচিত পরিবেশ ও দৈনন্দিন প্রশ্ন (৪-৫ মিনিট)",
    summaryBn: "নিজের শহর, পড়াশোনা, চাকরি, শখ ও প্রযুক্তির মতো সহজ প্রশ্নে কীভাবে ফ্লুয়েন্টলি ২-৩ বাক্যে উত্তর দিতে হয়।",
    badge: "Part 1 · Fluency",
    details: [
      {
        heading: "পার্ট ১ এর গোল্ডেন রুল (Area + Reason + Example)",
        contentBn: "কখনোই শুধু এক শব্দে 'Yes' বা 'No' বলবেন না। সবসময় উত্তর বাড়িয়ে ২-৩টি পূর্ণ বাক্যে উত্তর দিন।",
        rules: [
          "সরাসরি উত্তর দিন (Answer directly)",
          "কারণ বা কারণের সাথে একটি উদাহরণ যোগ করুন (Add Reason or Example)",
          "স্বাভাবিক গতির সাথে আই কন্ট্যাক্ট রাখুন (Keep natural pace & eye contact)",
        ],
        examples: [
          {
            en: "Q: Do you work or are you a student?\nA: Currently, I am working as a software developer at a tech firm in Dhaka. I have been in this profession for nearly two years now, and I genuinely enjoy solving complex coding challenges.",
            bn: "প্রশ্ন: আপনি কি কাজ করেন নাকি শিক্ষার্থী?\nউত্তর: বর্তমানে আমি ঢাকার একটি টেক ফার্মে সফটওয়্যার ডেভেলপার হিসেবে কর্মরত। আমি প্রায় দুই বছর ধরে এই পেশায় আছি এবং জটিল কোডিং চ্যালেঞ্জ সমাধান করতে দারুণ উপভোগ করি।",
            note: "এখানে শুধু 'I am working' না বলে বিস্তারিত ২ বাক্য যোগ করে উত্তর বড় করা হয়েছে।",
          },
          {
            en: "Q: What do you like most about your hometown?\nA: Well, what I cherish most about my hometown is its vibrant community spirit. Even though it is quite densely populated, people are exceptionally hospitable and always ready to lend a helping hand.",
            bn: "প্রশ্ন: আপনার নিজের শহরের কোন দিকটি আপনি সবচেয়ে বেশি পছন্দ করেন?\nউত্তর: আমার শহরের যে বিষয়টি আমি সবচেয়ে ভালোবাসি তা হলো এর প্রাণবন্ত সামাজিক মেলবন্ধন। যদিও এটি বেশ ঘনবসতিপূর্ণ, এখানকার মানুষ অত্যন্ত অতিথিপরায়ণ এবং সবসময় সাহায্যের হাত বাড়িয়ে দিতে প্রস্তুত।",
          },
        ],
      },
      {
        heading: "বাংলাভাষীদের জন্য স্পিকিং উচ্চারণ টিপস",
        contentBn: "বাংলাভাষীরা সাধারণত P এবং F, V এবং B এর মধ্যে গুলিয়ে ফেলে। যেমন 'people' কে 'fipol' বা 'very' কে 'beri' বলা যাবে না।",
        rules: [
          "P উচ্চারণে দুই ঠোঁট চেপে বাতাস ছাড়ুন (Plosive P)",
          "F উচ্চারণে উপরের দাঁত নিচের ঠোঁটে হালকা স্পর্শ করবে (Friction F)",
          "V উচ্চারণে দাঁত ও নিচের ঠোঁটের মাঝে মৃদু কম্পন তৈরি করুন (Vibration V)",
        ],
      },
    ],
  },
  {
    id: "sp-p2",
    module: "speaking",
    titleEn: "Part 2: The Cue Card Master Formula (PPF)",
    titleBn: "পার্ট ২: কিউ কার্ড মাস্টারি — পিপিএফ ফর্মুলা (৩-৪ মিনিট)",
    summaryBn: "১ মিনিট প্রস্তুতি নিয়ে একটানা ২ মিনিট কথা বলার জন্য Past-Present-Future (PPF) টেকনিক।",
    badge: "Part 2 · Cue Card",
    details: [
      {
        heading: "PPF (Past - Present - Future) টেকনিক কী?",
        contentBn: "কিউ কার্ডে অনেক সময় শিক্ষার্থীরা ৩০ সেকেন্ড পরেই কথা হারিয়ে ফেলে। PPF মেথড ব্যবহার করলে আপনি সহজে ২ মিনিট অনর্গল কথা বলতে পারবেন:",
        rules: [
          "Past (অতীত): ঘটনাটি কীভাবে শুরু হয়েছিল বা অতীতে আপনি কেমন অনুভব করেছিলেন (৪০ সেকেন্ড)",
          "Present (বর্তমান): বর্তমানে সেই ঘটনার প্রভাব বা এখন আপনি কী ভাবছেন (৫০ সেকেন্ড)",
          "Future (ভবিষ্যৎ): ভবিষ্যতে আপনি এমন কিছু আবার করবেন কি না বা আপনার প্রত্যাশা (৩০ সেকেন্ড)",
        ],
        examples: [
          {
            en: "Topic: Describe an ambitious project you worked on.\nSample Band 8.5 Snippet:\n'To be honest, the project that instantly springs to mind is an educational mobile application I spearheaded back in 2024. At the outset, it seemed like an uphill battle because our engineering resources were constrained...\nMoving forward to the present day, that application has already impacted over ten thousand underserved students across Bangladesh...\nLooking ahead, our team is aspiring to integrate artificial intelligence into the platform to deliver personalized mentoring.'",
            bn: "টপিক: আপনার কাজ করা একটি উচ্চাভিলাষী প্রজেক্টের বর্ণনা দিন।\nনমুনা ব্যান্ড ৮.৫ অংশ:\n'সত্যি বলতে, যে প্রজেক্টটির কথা আমার স্মৃতিতে সঙ্গে সঙ্গে ভেসে উঠছে তা হলো একটি শিক্ষামূলক মোবাইল অ্যাপ যা আমি ২০২৪ সালে নেতৃত্ব দিয়েছিলাম। শুরুর দিকে এটি অসম্ভব এক কঠিন লড়াই মনে হয়েছিল...\nবর্তমানে সেই অ্যাপটি ইতিমধ্যে বাংলাদেশের দশ হাজারেরও বেশি সুবিধাবঞ্চিত শিক্ষার্থীর উপকারে এসেছে...\nভবিষ্যতের কথা ভাবলে, আমাদের টিম এতে কৃত্রিম বুদ্ধিমত্তা যুক্ত করার স্বপ্ন দেখছে যাতে প্রতিটি শিক্ষার্থীর জন্য ব্যক্তিগত মেন্টরিং দেওয়া যায়।'",
          },
        ],
      },
    ],
  },
  {
    id: "sp-p3",
    module: "speaking",
    titleEn: "Part 3: Two-Way Abstract Discussion",
    titleBn: "পার্ট ৩: বিশ্লেষণাত্মক আলোচনা ও PEEL মেথড (৪-৫ মিনিট)",
    summaryBn: "গভীর সামাজিক, প্রযুক্তিগত ও দার্শনিক প্রশ্নের মুখে ব্যান্ড ৮ মানের উত্তর তৈরির PEEL কাঠামো।",
    badge: "Part 3 · PEEL Method",
    details: [
      {
        heading: "PEEL ফর্মুলা (Point, Explain, Example, Link)",
        contentBn: "পার্ট ৩ তে পরীক্ষক আপনার ব্যক্তিগত জীবন নয়, বরং সমাজ ও পৃথিবীর ওপর সাধারণ দৃষ্টিভঙ্গি জানতে চান।",
        rules: [
          "Point: সরাসরি আপনার মূল যুক্তি এক বাক্যে বলুন",
          "Explain: কেন এমনটি মনে করেন তা গভীর যুক্তি দিয়ে ব্যাখ্যা করুন",
          "Example: একটি বাস্তবিক বা গবেষণামূলক উদাহরণ দিন",
          "Link: মূল বিষয়ের সাথে শেষ বাক্যটি সংযুক্ত করুন",
        ],
        examples: [
          {
            en: "Q: Do you think technological automation will eliminate traditional jobs?\nA: Without a doubt, automation is poised to disrupt numerous labor-intensive sectors. To elaborate further, routine tasks such as data entry and manual assembly line work are being efficiently handled by algorithms and robotics, resulting in fewer human roles. For instance, in modern retail, automated self-checkout kiosks have substantially reduced the necessity for cashier staff. Consequently, while new specialized roles will emerge, individuals who fail to upskill may face acute unemployment challenges.",
            bn: "প্রশ্ন: আপনি কি মনে করেন প্রযুক্তির অটোমেশন সনাতন চাকরিগুলো শেষ করে দেবে?\nউত্তর: কোনো সন্দেহ নেই, অটোমেশন শ্রমঘন খাতগুলোতে গভীর পরিবর্তন আনতে যাচ্ছে। বিস্তারিত বললে, ডেটা এন্ট্রি ও ম্যানুয়াল অ্যাসেম্বলির মতো কাজগুলো অ্যালগরিদম ও রোবোটিক্স সহজেই সম্পন্ন করছে। উদাহরণস্বরূপ আধুনিক সুপারশপে সেলফ-চেকআউট কিয়স্ক ক্যাশিয়ারের পদ সংখ্যা নাটকীয়ভাবে কমিয়েছে। ফলস্বরূপ, যদিও নতুন বিশেষজ্ঞ পদের সৃষ্টি হবে, যারা নিজেকে দক্ষ করে তুলতে পারবে না তারা তীব্র বেকারত্বের মুখোমুখি হতে পারে।",
          },
        ],
      },
    ],
  },
];

export const ieltsWritingTopics: IeltsTopic[] = [
  {
    id: "wr-t1",
    module: "writing",
    titleEn: "Task 1 (Academic): Charts, Graphs & Diagrams",
    titleBn: "টাস্ক ১ একাডেমিক: গ্রাফ, চার্ট ও প্রসেস ডায়াগ্রাম (২০ মিনিট, ১৫০+ শব্দ)",
    summaryBn: "লাইন গ্রাফ, বার চার্ট, পাই চার্ট ও ম্যাপ বর্ণনার ৪-প্যারাগ্রাফ ব্যান্ড ৯ ফর্মুলা এবং ওভারভিউ লেখার জাদু।",
    badge: "Writing Task 1 · Academic",
    details: [
      {
        heading: "টাস্ক ১ এর ৪-প্যারাগ্রাফ স্ট্রাকচার",
        contentBn: "ব্যান্ড ৮ বা ৯ পেতে এই কাঠামোটি হুবহু অনুসরণ করুন:",
        rules: [
          "Paragraph 1 (Introduction): প্রশ্নের বাক্যটি নিজের ভাষায় ১ বাক্যে Paraphrase করুন।",
          "Paragraph 2 (Overview): সবচেয়ে গুরুত্বপূর্ণ ২-৩টি সামগ্রিক প্রবণতা (General Trends) লিখুন। কোনো সংখ্যার উল্লেখ ছাড়া!",
          "Paragraph 3 (Body 1): প্রথম ক্যাটাগরির বিস্তারিত তথ্য ও সংখ্যাগত তুলনা দিন।",
          "Paragraph 4 (Body 2): বাকি ক্যাটাগরির তথ্য ও পরিবর্তনের তুলনা দিন।",
        ],
        examples: [
          {
            en: "Paraphrase Formula:\nQuestion: The graph below shows the percentage of households with internet access in three European countries between 2010 and 2020.\nParaphrased Intro: The line chart illustrates the proportion of homes with an internet connection across three distinct European nations over a ten-year period from 2010 to 2020.",
            bn: "প্যারাফ্রেজ ফর্মুলা:\nমূল প্রশ্ন থেকে হুবহু শব্দ চুরি না করে 'shows' এর জায়গায় 'illustrates', 'percentage' এর জায়গায় 'proportion', 'households' এর জায়গায় 'homes' ব্যবহার করুন।",
          },
        ],
      },
      {
        heading: "ট্রেন্ড ও পরিবর্তনের ভোকাবুলারি ব্যাংক",
        contentBn: "একই শব্দ বারবার না লিখে বৈচিত্র্যময় শব্দ ব্যবহার করুন:",
        rules: [
          "উর্ধ্বমুখী প্রবণতা (Upward): skyrocketed, climbed steadily, witnessed an upward trajectory",
          "নিম্নমুখী প্রবণতা (Downward): plummeted, dipped marginally, experienced a steep downturn",
          "স্থির অবস্থা (Stable): plateaued, remained virtually constant, leveled off",
          "ওঠানামা (Fluctuation): fluctuated wildy, experienced volatility",
        ],
      },
    ],
  },
  {
    id: "wr-t2",
    module: "writing",
    titleEn: "Task 2: Essay Writing Masterclass",
    titleBn: "টাস্ক ২: ৪-প্যারাগ্রাফ রচনা লেখার মাস্টারক্লাস (৪০ মিনিট, ২৫০+ শব্দ)",
    summaryBn: "Opinion, Discussion, Problem-Solution ও Advantages-Disadvantages রচনার জন্য ব্যান্ড ৮.৫ টেমপ্লেট ও যুক্তির জাল।",
    badge: "Writing Task 2 · Band 8.5",
    details: [
      {
        heading: "টাস্ক ২ এর ৪-প্যারাগ্রাফ মাস্টার টেমপ্লেট",
        contentBn: "২৫০ শব্দের বেশি লেখার জন্য ৪টি নিখুঁত প্যারাগ্রাফের কাঠামো:",
        rules: [
          "Paragraph 1 (Intro): Paraphrase the question + Clear Thesis statement (আপনার অবস্থান পরিষ্কার করুন)",
          "Paragraph 2 (Body 1): Topic sentence + Explanation + Real-world Example + Concluding link",
          "Paragraph 3 (Body 2): Second topic sentence + Deep Explanation + Concrete Example + Concluding link",
          "Paragraph 4 (Conclusion): Restate thesis in fresh words + Final takeaway or prediction",
        ],
        examples: [
          {
            en: "Topic: Some people argue that university education should be free for all students. To what extent do you agree or disagree?\nSample Thesis:\n'While subsidizing higher education entails substantial fiscal burdens for governments, I firmly believe that making universities universally accessible accelerates socioeconomic mobility and national innovation.'",
            bn: "টপিক: কেউ কেউ বলেন বিশ্ববিদ্যালয়ের শিক্ষা সবার জন্য উন্মুক্ত ও বিনামূল্যে হওয়া উচিত। আপনি কতটা একমত বা দ্বিমত?\nনমুনা থিসিস অংশ:\n'যদিও উচ্চশিক্ষায় ভর্তুকি দেওয়া সরকারের বাজেটের ওপর যথেষ্ট আর্থিক চাপ সৃষ্টি করে, আমি দৃঢ়ভাবে বিশ্বাস করি যে বিশ্ববিদ্যালয় সবার জন্য উন্মুক্ত করলে সামাজিক-অর্থনৈতিক গতিশীলতা ও জাতীয় উদ্ভাবন বহুগুণ ত্বরান্বিত হয়।'",
            note: "এই একটি থিসিস স্টেটমেন্টেই ব্যান্ড ৮ নিশ্চিত করার মতো ভোকাবুলারি (subsidizing, fiscal burdens, socioeconomic mobility) রয়েছে।",
          },
        ],
      },
      {
        heading: "ব্যান্ড ৮ লিঙ্কিং ও কানেক্টিভ ফ্রেজেস",
        contentBn: "প্যারাগ্রাফের ভেতরে বাক্যগুলোকে জুড়তে এই শব্দগুলো ব্যবহার করুন:",
        rules: [
          "প্রথম যুক্তির সূচনা: First and foremost, At the vanguard of this perspective is...",
          "অতিরিক্ত যুক্তি যোগ: Furthermore, Moreover, By the same token...",
          "বিপরীত যুক্তি উপস্থাপন: On the contrary, In stark contrast, Conversely...",
          "ফলাফল টানা: Consequently, As an inevitable consequence, Hence...",
        ],
      },
    ],
  },
];

export const ieltsReadingTopics: IeltsTopic[] = [
  {
    id: "rd-strat",
    module: "reading",
    titleEn: "Reading Strategies: Skimming, Scanning & Time Management",
    titleBn: "রিডিং টেকনিক: স্কিমিং, স্ক্যানিং ও ২০ মিনিট টাইম ম্যানেজমেন্ট",
    summaryBn: "৩টি দীর্ঘ প্যাসেজে ৬০ মিনিটে ৪০টি প্রশ্নের উত্তর দিতে স্কিমিং ও কি-ওয়ার্ড ট্র্যাকিংয়ের বৈজ্ঞানিক পদ্ধতি।",
    badge: "Reading · Strategies",
    details: [
      {
        heading: "Skimming vs Scanning এর পার্থক্য",
        contentBn: "পুরো প্যাসেজ লাইন ধরে পড়ার চেষ্টা করলে পরীক্ষায় সময় শেষ হয়ে যাবে। সঠিক নিয়ম:",
        rules: [
          "Skimming (দ্রুত ভাসা-ভাসা চোখ বোলানো): প্রতিটি প্যারাগ্রাফের প্রথম ২ লাইন এবং শেষ লাইন পড়ে মূল ভাবটি ২ মিনিটে বুঝে নিন।",
          "Scanning (নির্দিষ্ট শব্দ খোঁজা): প্রশ্ন থেকে সংখ্যা, মানুষের নাম, সাল বা দুর্লভ শব্দ চিহ্নিত করে প্যাসেজে আঙুল দিয়ে দ্রুত তা খুঁজে বের করুন।",
          "প্যাসেজ ১ এ ১৫ মিনিট, প্যাসেজ ২ এ ২০ মিনিট এবং সবচেয়ে কঠিন প্যাসেজ ৩ এ ২৫ মিনিট বরাদ্দ রাখুন।",
        ],
      },
      {
        heading: "True / False / Not Given (T/F/NG) এর গোল্ডেন রুল",
        contentBn: "বাংলাভাষী শিক্ষার্থীরা সবচেয়ে বেশি ভুল করে Not Given এ। এই ৩টি চিরন্তন নিয়ম মনে রাখুন:",
        rules: [
          "TRUE: প্যাসেজের তথ্যের সাথে প্রশ্নের তথ্যের অর্থ ১০০% মিল থাকলে।",
          "FALSE: প্যাসেজে স্পষ্ট বলা আছে, কিন্তু প্রশ্নের কথা তার বিপরীত বা সরাসরি সাংঘর্ষিক হলে।",
          "NOT GIVEN: প্যাসেজে এই বিষয়ে কোনো কথা বলা হয়নি, অথবা পর্যাপ্ত তথ্য নেই যা দিয়ে নিশ্চিত হওয়া যায়। নিজের সাধারণ জ্ঞান দিয়ে উত্তর দেবেন না!",
        ],
      },
      {
        heading: "Matching Headings টেকনিক",
        contentBn: "প্যারাগ্রাফের ভেতরের উদাহরণ বা ছোট তথ্যে বিভ্রান্ত হবেন না। প্যারাগ্রাফের টপিক সেন্টেন্সে চোখ রাখুন এবং এলিমিনেশন পদ্ধতিতে ভুল হেডিংগুলো কেটে বাদ দিন।",
      },
    ],
  },
];

export const ieltsListeningTopics: IeltsTopic[] = [
  {
    id: "ls-traps",
    module: "listening",
    titleEn: "Listening Mastery: The 7 Native Distractors & Accents",
    titleBn: "লিসেনিং কৌশল: ৭টি নেটিভ ট্র্যাপ ও স্পেলিং ডাবলিং",
    summaryBn: "সেলফ-কারেকশন ট্র্যাপ, ব্রিটিশ-আমেরিকান স্পেলিং, বহুবচন 's' এবং অ্যাকসেন্ট বোঝার সহজ উপায়।",
    badge: "Listening · Traps",
    details: [
      {
        heading: "লিসেনিংয়ের ৩টি কমন ট্র্যাপ যা সবাই ভুল করে",
        contentBn: "পরীক্ষায় সচেতনভাবে ভুল অপশন দেওয়ার ফাঁদ পাতা থাকে:",
        rules: [
          "The Self-Correction Trap: বক্তা প্রথমে একটি তথ্য বলবে, কিন্তু পরমুহূর্তেই তা পরিবর্তন করবে। যেমন: 'I will meet you on Tuesday... oh wait, actually Wednesday.' উত্তর হবে Wednesday!",
          "Singular vs Plural Trap: প্রশ্নে চেয়েছে বহুবচন অথচ আপনি লিখেছেন একবচন (students এর জায়গায় student)—এতে পুরো ১ মার্ক কাটা যাবে।",
          "Letter Doubling in Names: যেমন 'Smith' vs 'Smyth' বা 'Miller' vs 'Miler'—বক্তা যখন স্পেলিং বলে তখন ডাবল লেটারস খুব মনোযোগ দিয়ে শুনুন।",
        ],
      },
      {
        heading: "সেকশন ১ থেকে ৪ এর কাঠামো",
        contentBn: "সেকশন ১: দুজনের মধ্যে সামাজিক আলাপ (ফর্ম ফিলিং)\nসেকশন ২: একজনের সামাজিক মনোলগ (যেমন মিউজিয়াম ট্যুর গাইড বা ম্যাপ)\nসেকশন ৩: বিশ্ববিদ্যালয় অ্যাসাইনমেন্ট নিয়ে ২-৩ জন শিক্ষার্থীর আলোচনা\nসেকশন ৪: প্রফেসরের একটানা জটিল লেকচার (কোনো পজ ছাড়া!)",
      },
    ],
  },
];

export const ieltsVocabBank: IeltsVocabItem[] = [
  {
    id: "v-env-1",
    word: "Mitigate",
    pronunciation: "/ˈmɪt.ɪ.ɡeɪt/",
    type: "Verb",
    meaningBn: "কোনো সমস্যার তীব্রতা বা ক্ষয়ক্ষতি প্রশমিত করা / কমানো",
    synonyms: ["Alleviate", "Attenuate", "Diminish", "Lessen"],
    collocations: ["mitigate risks", "mitigate climate impact", "urgent measures to mitigate"],
    band8Sentence: "Governments must formulate proactive policies to mitigate the adverse repercussions of global warming.",
    topic: "Environment",
  },
  {
    id: "v-env-2",
    word: "Unprecedented",
    pronunciation: "/ʌnˈpres.ɪ.den.tɪd/",
    type: "Adjective",
    meaningBn: "অতীতের ইতিহাসে নজিরবিহীন বা আগে কখনো দেখা যায়নি এমন",
    synonyms: ["Incomparable", "Unrivaled", "Unmatched", "Groundbreaking"],
    collocations: ["unprecedented scale", "unprecedented growth", "face unprecedented challenges"],
    band8Sentence: "The contemporary era has witnessed unprecedented deforestation rates across tropical rainforests.",
    topic: "Environment",
  },
  {
    id: "v-tech-1",
    word: "Ubiquitous",
    pronunciation: "/juːˈbɪk.wɪ.təs/",
    type: "Adjective",
    meaningBn: "সর্বব্যাপী বা সর্বত্র বিদ্যমান",
    synonyms: ["Omnipresent", "Pervasive", "Universal"],
    collocations: ["ubiquitous presence", "ubiquitous smartphones", "become ubiquitous"],
    band8Sentence: "Artificial intelligence has evolved into a ubiquitous feature of everyday digital applications.",
    topic: "Technology",
  },
  {
    id: "v-tech-2",
    word: "Indispensable",
    pronunciation: "/ˌɪn.dɪˈspen.sə.bəl/",
    type: "Adjective",
    meaningBn: "যার কোনো বিকল্প নেই বা অপরিহার্য",
    synonyms: ["Essential", "Vital", "Imperative", "Crucial"],
    collocations: ["indispensable role", "indispensable tool", "prove indispensable"],
    band8Sentence: "Digital literacy is widely deemed indispensable for thriving in modern corporate environments.",
    topic: "Technology",
  },
  {
    id: "v-edu-1",
    word: "Pedagogical",
    pronunciation: "/ˌped.əˈɡɒdʒ.ɪ.kəl/",
    type: "Adjective",
    meaningBn: "শিক্ষাদান পদ্ধতি বা শিক্ষণতত্ত্ব বিষয়ক",
    synonyms: ["Instructional", "Educational", "Academic"],
    collocations: ["pedagogical approach", "pedagogical reform", "sound pedagogical practice"],
    band8Sentence: "Modern institutions must overhaul outdated pedagogical approaches to foster genuine critical inquiry.",
    topic: "Education",
  },
  {
    id: "v-edu-2",
    word: "Foster",
    pronunciation: "/ˈfɒs.tər/",
    type: "Verb",
    meaningBn: "লালন-পালন করা বা ইতিবাচকভাবে উৎসাহিত ও বিকশিত করা",
    synonyms: ["Nurture", "Cultivate", "Stimulate", "Promote"],
    collocations: ["foster creativity", "foster innovation", "foster an inclusive environment"],
    band8Sentence: "Interactive classroom dialogues are instrumental in fostering independent problem-solving skills.",
    topic: "Education",
  },
  {
    id: "v-soc-1",
    word: "Disparity",
    pronunciation: "/dɪˈspær.ə.ti/",
    type: "Noun",
    meaningBn: "বৈষম্য বা লক্ষণীয় অমিল ও ব্যবধান",
    synonyms: ["Inequality", "Imbalance", "Discrepancy", "Divergence"],
    collocations: ["economic disparity", "growing disparities", "bridge the disparity"],
    band8Sentence: "Widening wealth disparities frequently exacerbate social friction in developing metropolises.",
    topic: "Society",
  },
  {
    id: "v-soc-2",
    word: "Marginalized",
    pronunciation: "/ˈmɑː.dʒɪ.nəl.aɪzd/",
    type: "Adjective",
    meaningBn: "প্রান্তিক বা সমাজের অধিকারবঞ্চিত",
    synonyms: ["Disadvantaged", "Disenfranchised", "Excluded"],
    collocations: ["marginalized communities", "marginalized youth", "empower the marginalized"],
    band8Sentence: "Affirmative policies should prioritize allocating fiscal resources to uplift marginalized communities.",
    topic: "Society",
  },
  {
    id: "v-eco-1",
    word: "Lucrative",
    pronunciation: "/ˈluː.krə.tɪv/",
    type: "Adjective",
    meaningBn: "অত্যধিক লাভজনক বা লোভনীয় আয়জনক",
    synonyms: ["Profitable", "Remunerative", "Rewarding"],
    collocations: ["lucrative career", "lucrative investment", "lucrative market"],
    band8Sentence: "Many graduates are enticed by lucrative compensation packages in global financial corporations.",
    topic: "Economy",
  },
  {
    id: "v-eco-2",
    word: "Volatile",
    pronunciation: "/ˈvɒl.ə.taɪl/",
    type: "Adjective",
    meaningBn: "অস্থির, চঞ্চল বা ঘন ঘন পরিবর্তনশীল",
    synonyms: ["Unpredictable", "Fluctuating", "Unstable"],
    collocations: ["volatile market", "highly volatile", "volatile geopolitical climate"],
    band8Sentence: "Navigating volatile commodity prices requires businesses to maintain adaptable fiscal reserves.",
    topic: "Economy",
  },
  {
    id: "v-hlt-1",
    word: "Sedentary",
    pronunciation: "/ˈsed.ən.tər.i/",
    type: "Adjective",
    meaningBn: "শারীরিক পরিশ্রমহীন বা বসে বসে কাটানো জীবনধারা",
    synonyms: ["Inactive", "Stationary", "Desk-bound"],
    collocations: ["sedentary lifestyle", "sedentary desk job", "combat sedentary habits"],
    band8Sentence: "The pervasive prevalence of sedentary lifestyles directly contributes to widespread chronic illnesses.",
    topic: "Health",
  },
  {
    id: "v-hlt-2",
    word: "Holistic",
    pronunciation: "/həʊˈlɪs.tɪk/",
    type: "Adjective",
    meaningBn: "সামগ্রিক বা কোনো কিছুর সমস্ত অংশ বিবেচনা করে এমন",
    synonyms: ["Comprehensive", "Integrated", "All-encompassing"],
    collocations: ["holistic approach", "holistic healthcare", "holistic wellbeing"],
    band8Sentence: "Public health initiatives must adopt a holistic strategy that integrates both physical and mental wellness.",
    topic: "Health",
  },
];

export const ieltsQuizItems: IeltsQuizItem[] = [
  {
    id: "q-rd-1",
    module: "Reading",
    questionBn: "নিচের প্যাসেজের ভিত্তিতে প্রশ্নটির উত্তর কী হবে? (True / False / Not Given)",
    contextEn: "Passage excerpt: 'While electric vehicles generate zero direct exhaust emissions, the overall environmental lifecycle benefit depends heavily on whether the local electric grid is powered by coal or renewables.'\n\nStatement: 'Electric vehicles are completely harmless to the environment under all circumstances.'",
    options: [
      { key: "a", text: "TRUE" },
      { key: "b", text: "FALSE" },
      { key: "c", text: "NOT GIVEN" },
    ],
    correctKey: "b",
    explanationBn: "প্যাসেজে স্পষ্ট বলা হয়েছে পরিবেশের সুবিধা নির্ভর করে গ্রিডের বিদ্যুৎ কয়লা থেকে না রিনিউয়েবল থেকে আসে তার ওপর। সুতরাং 'under all circumstances' সম্পূর্ণ পরিবেশের ক্ষতি করে না—এই দাবিটি সরাসরি বিপরীত (FALSE)।",
  },
  {
    id: "q-wr-1",
    module: "Writing",
    questionBn: "টাস্ক ২ রচনায় দুটি বিপরীত বক্তব্যের মধ্যে ভারসাম্য আনতে নিচের কোন ট্রানজিশন ফ্রেজটি সবচেয়ে উপযুক্ত ও প্রাতিষ্ঠানিক?",
    options: [
      { key: "a", text: "On the other hand" },
      { key: "b", text: "Conversely, it is equally arguable that..." },
      { key: "c", text: "But anyway" },
      { key: "d", text: "Also another thing is" },
    ],
    correctKey: "b",
    explanationBn: "'Conversely, it is equally arguable that...' ফ্রেজটি ব্যান্ড ৮+ লেভেলের গভীর ডিসকোর্স মার্কার, যা অ্যাকাডেমিক রচনায় যুক্তিকে শক্তিশালী ও ওজনদার করে তোলে।",
  },
  {
    id: "q-sp-1",
    module: "Speaking",
    questionBn: "স্পিকিং পার্ট ১ এ পরীক্ষক জিজ্ঞেস করলেন: 'Do you enjoy reading books?'—ব্যান্ড ৭.৫+ পাওয়ার জন্য কোন উত্তরটি সেরা?",
    options: [
      { key: "a", text: "Yes, I like reading books very much in my house." },
      { key: "b", text: "Yes, of course, because reading gives me knowledge and information." },
      { key: "c", text: "Undoubtedly! I am an avid reader, especially when it comes to historical fiction. Whenever I have a spare moment, I immerse myself in a captivating novel." },
      { key: "d", text: "No, I don't read because I am busy with my mobile." },
    ],
    correctKey: "c",
    explanationBn: "অপশন (C)-তে 'avid reader', 'immerse myself in a captivating novel' এর মতো উচ্চমানের প্রাকৃতিক কোলোকেশন ও বৈচিত্র্যময় বাক্য রয়েছে যা পরীক্ষককে তাৎক্ষণিক মুগ্ধ করে।",
  },
  {
    id: "q-ls-1",
    module: "Listening",
    questionBn: "লিসেনিং অডিওতে বক্তা বললেন: 'We originally scheduled the seminar for room 204, but due to water leakage we had to relocate everyone to room 305 upstairs.'—সেমিনারের সঠিক রুম নম্বর কোনটি?",
    options: [
      { key: "a", text: "Room 204" },
      { key: "b", text: "Room 305" },
      { key: "c", text: "Room 105" },
      { key: "d", text: "None of the above" },
    ],
    correctKey: "b",
    explanationBn: "এটি আইইএলটিএস লিসেনিংয়ের বহুল প্রচলিত 'Self-Correction / Relocation Distractor'। প্রথমে ২০৪ বলা হলেও শেষ মুহূর্তে পরিবর্তন হয়ে ৩০৫ হয়েছে, তাই উত্তর হবে ৩০৫।",
  },
];

export const ieltsStudyPlans = {
  crash30: [
    {
      week: 1,
      title: "সপ্তাহ ১: ফাউন্ডেশন ও ডায়াগনস্টিক",
      focusBn: "সব মডিউলের ফরম্যাট পরিচিতি, ব্যান্ড ডেস্ক্রিপ্টর বোঝা এবং বেসলাইন মক টেস্ট।",
      tasks: [
        "অফিসিয়াল ক্যামব্রিজ টেস্ট থেকে ১টি ফুল মক টেস্ট দিয়ে নিজের বর্তমান স্কোর নির্ধারণ",
        "স্পিকিং পার্ট ১ এর শীর্ষ ২০টি কমন টপিক প্র্যাকটিস ও নিজের ভয়েস রেকর্ড",
        "রাইটিং টাস্ক ১ এর লাইন ও বার চার্টের ওভারভিউ লেখার ফর্মুলা আত্মস্থ করা",
        "প্রতিদিন ১০টি করে আইইএলটিএস একাডেমিক ভোকাবুলারি শেখা",
      ],
    },
    {
      week: 2,
      title: "সপ্তাহ ২: রিডিং স্কিল ও রাইটিং টাস্ক ১",
      focusBn: "Skimming ও Scanning প্র্যাকটিস এবং টাস্ক ১ এর পাই চার্ট, টেবিল ও ম্যাপ ডেসক্রিপশন।",
      tasks: [
        "True/False/Not Given প্রশ্নের এলিমিনেশন টেকনিক দিয়ে ৫টি প্যাসেজ সমাধান",
        "টাস্ক ১ এর ম্যাপ ও প্রসেস ডায়াগ্রামের জন্য প্যাসিভ ভয়েস ও সিকোয়েন্সিং বাক্য গঠন",
        "লিসেনিং সেকশন ১ ও ২ এর ফরম ফিলিং এবং স্পেলিং ড্রিল",
        "স্পিকিং পার্ট ২ এর কিউ কার্ডে ১ মিনিটে পয়েন্ট নোট করার দ্রুত কৌশল",
      ],
    },
    {
      week: 3,
      title: "সপ্তাহ ৩: রাইটিং টাস্ক ২ ও লিসেনিং ট্র্যাপস",
      focusBn: "৪-প্যারাগ্রাফ এসে রাইটিং, মতামত ও উভয় দৃষ্টিভঙ্গি বিশ্লেষণ, সেকশন ৩-৪ লিসেনিং।",
      tasks: [
        "টাস্ক ২ এর ৪টি বিভিন্ন ধরনের রচনার (Opinion, Discussion) সম্পূর্ণ ড্রাফট তৈরি",
        "লিসেনিং সেকশন ৩ ও ৪ এর লেকচার ট্র্যাক করার জন্য কি-ওয়ার্ড হাইলাইটিং",
        "রিডিং Matching Headings প্রশ্নের শর্টকাট প্র্যাকটিস",
        "স্পিকিং পার্ট ৩ এর PEEL মেথড দিয়ে বিমূর্ত যুক্তিতর্কের অনুশীলন",
      ],
    },
    {
      week: 4,
      title: "সপ্তাহ ৪: ফুল মক টেস্ট ও পরীক্ষার দিনের স্ট্র্যাটেজি",
      focusBn: "টাইমড মক টেস্ট, ভুল পর্যালোচনা এবং স্ট্রেস ম্যানেজমেন্ট।",
      tasks: [
        "ঘড়ি ধরে ৩টি পূর্ণাঙ্গ আইইএলটিএস মক টেস্ট (লিসেনিং + রিডিং + রাইটিং)",
        "স্পিকিং মক টেস্ট পার্টনার বা আয়নার সামনে একটানা ১৫ মিনিট দেওয়া",
        "সবচেয়ে ভুল হওয়া প্রশ্নগুলোর কারণ ডায়রিতে নোট করে রিভিশন",
        "পরীক্ষার দিনের পাসপোর্ট, কলম ও মানসিক প্রস্তুতির চেকলিস্ট পূরণ",
      ],
    },
  ],
};
