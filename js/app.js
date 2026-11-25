// ==============================================================================
// CONCEPTMCQ APPLICATION ENGINE
// 10 Minute School Inspired Architecture • 100% Coolicons • KaTeX Math Support
// ==============================================================================

// Target Configurations (Class 9-10, HSC, Admission, Medical, BCS)
const TARGET_CONFIGS = {
  ssc: {
    id: "ssc",
    label: "এসএসসি (৯-১০)",
    codeBadge: "SSC",
    desc: "বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা সিলেবাস",
    bannerTitle: "এসএসসি স্পেশাল সাধারণ গণিত ও বিজ্ঞান মডেল টেস্ট",
    streams: [
      { id: "science", label: "বিজ্ঞান বিভাগ" },
      { id: "commerce", label: "ব্যবসায় শিক্ষা" },
      { id: "humanities", label: "মানবিক বিভাগ" },
      { id: "common", label: "কমন বিষয়সমূহ" }
    ],
    subjects: {
      science: [
        { id: "general_math", name: "সাধারণ গণিত", symbol: "±×", pastel: "pastel-pink", questionsCount: "১,৪৫০+ প্রশ্ন", topic: "বীজগণিতীয় সূত্রাবলী" },
        { id: "physics", name: "পদার্থবিজ্ঞান", symbol: "PHY", pastel: "pastel-violet", questionsCount: "১,১৫০+ প্রশ্ন", topic: "বল ও গতি" },
        { id: "chemistry", name: "রসায়ন", symbol: "CHM", pastel: "pastel-blue", questionsCount: "১,০২০+ প্রশ্ন", topic: "পর্যায় সারণি ও মোলার দ্রবণ" },
        { id: "higher_math", name: "উচ্চতর গণিত", symbol: "∫dx", pastel: "pastel-amber", questionsCount: "৯৮০+ প্রশ্ন", topic: "স্থানাঙ্ক জ্যামিতি ও ক্যালকুলাস" },
        { id: "biology", name: "জীববিজ্ঞান", symbol: "BIO", pastel: "pastel-green", questionsCount: "১,১০০+ প্রশ্ন", topic: "কোষ বিভাজন ও টিস্যু" },
        { id: "ict", name: "তথ্য ও যোগাযোগ প্রযুক্তি", symbol: "ICT", pastel: "pastel-peach", questionsCount: "৭৫০+ প্রশ্ন", topic: "সংখ্যা পদ্ধতি ও লজিক গেট" }
      ],
      commerce: [
        { id: "accounting", name: "হিসাববিজ্ঞান", symbol: "ACC", pastel: "pastel-blue", questionsCount: "১,০৫০+ প্রশ্ন", topic: "জাবেদা ও খতিয়ান" },
        { id: "business_org", name: "ব্যবসায় উদ্যোগ", symbol: "BUS", pastel: "pastel-amber", questionsCount: "৯২০+ প্রশ্ন", topic: "উদ্যোক্তা উন্নয়ন" },
        { id: "finance", name: "ফিন্যান্স ও ব্যাংকিং", symbol: "FIN", pastel: "pastel-green", questionsCount: "৮৯০+ প্রশ্ন", topic: "অর্থের সময়মূল্য" },
        { id: "general_math", name: "সাধারণ গণিত", symbol: "±×", pastel: "pastel-pink", questionsCount: "১,৪০০+ প্রশ্ন", topic: "সেট ও ফাংশন" }
      ],
      humanities: [
        { id: "history", name: "ইতিহাস ও সভ্যতা", symbol: "HIS", pastel: "pastel-peach", questionsCount: "৯০০+ প্রশ্ন", topic: "প্রাচীন বাংলা" },
        { id: "civics", name: "পৌরনীতি ও নাগরিকতা", symbol: "CIV", pastel: "pastel-violet", questionsCount: "৮৫০+ প্রশ্ন", topic: "রাষ্ট্র ও সরকার" },
        { id: "geography", name: "ভূগোল ও পরিবেশ", symbol: "GEO", pastel: "pastel-green", questionsCount: "৮২০+ প্রশ্ন", topic: "সৌরজগৎ ও ভূমিরূপ" },
        { id: "economics", name: "অর্থনীতি", symbol: "ECO", pastel: "pastel-blue", questionsCount: "৭৮০+ প্রশ্ন", topic: "উৎপাদন ও বাজার" }
      ],
      common: [
        { id: "bangla_1", name: "বাংলা ১ম পত্র", symbol: "অ", pastel: "pastel-pink", questionsCount: "১,২৫০+ প্রশ্ন", topic: "গদ্য ও পদ্য" },
        { id: "bangla_2", name: "বাংলা ২য় পত্র", symbol: "স্ব", pastel: "pastel-peach", questionsCount: "১,৩০০+ প্রশ্ন", topic: "ব্যাকরণ ও সমাস" },
        { id: "english_1", name: "English 1st", symbol: "En", pastel: "pastel-blue", questionsCount: "১,২০০+ প্রশ্ন", topic: "Reading & Grammar" },
        { id: "english_2", name: "English 2nd", symbol: "Aa", pastel: "pastel-violet", questionsCount: "১,১৫০+ প্রশ্ন", topic: "Right Form of Verbs" },
        { id: "bd_world", name: "বাংলাদেশ ও বিশ্বপরিচয়", symbol: "BD", pastel: "pastel-green", questionsCount: "১,৩৫০+ প্রশ্ন", topic: "মুক্তিযুদ্ধ ও সংবিধান" }
      ]
    }
  },
  hsc: {
    id: "hsc",
    label: "এইচএসসি (১১-১২)",
    codeBadge: "HSC",
    desc: "একাদশ-দ্বাদশ ও বোর্ড পরীক্ষার বিষয়সমূহ",
    bannerTitle: "এইচএসসি বোর্ড প্রস্তুতি ও স্পেশাল কনসেপ্ট টেস্ট",
    streams: [
      { id: "science", label: "বিজ্ঞান" },
      { id: "commerce", label: "ব্যবসায় শিক্ষা" },
      { id: "humanities", label: "মানবিক" }
    ],
    subjects: {
      science: [
        { id: "physics", name: "পদার্থবিজ্ঞান ১ম ও ২য়", symbol: "PHY", pastel: "pastel-pink", questionsCount: "১,৪০০+ প্রশ্ন", topic: "ভেক্টর ও গতিবিদ্যা" },
        { id: "chemistry", name: "রসায়ন ১ম ও ২য়", symbol: "CHM", pastel: "pastel-violet", questionsCount: "১,৩৫০+ প্রশ্ন", topic: "মৌলের পর্যাবৃত্ত ধর্ম ও জৈব রসায়ন" },
        { id: "higher_math", name: "উচ্চতর গণিত ১ম ও ২য়", symbol: "∫dx", pastel: "pastel-blue", questionsCount: "১,৩০০+ প্রশ্ন", topic: "ম্যাট্রিক্স ও ক্যালকুলাস" },
        { id: "biology", name: "জীববিজ্ঞান ১ম ও ২য়", symbol: "BIO", pastel: "pastel-green", questionsCount: "১,৪৫০+ প্রশ্ন", topic: "কোষ বিভাজন ও শারীরতত্ত্ব" }
      ],
      commerce: [
        { id: "accounting", name: "হিসাববিজ্ঞান ১ম ও ২য়", symbol: "ACC", pastel: "pastel-blue", questionsCount: "১,৩০০+ প্রশ্ন", topic: "আর্থিক বিবরণী ও ব্যাংক সমন্বয়" },
        { id: "business_org", name: "ব্যবসায় সংগঠন ১ম ও ২য়", symbol: "BUS", pastel: "pastel-amber", questionsCount: "১,২০০+ প্রশ্ন", topic: "ব্যবসায় পরিকল্পনা ও সংগঠন" },
        { id: "finance", name: "ফিন্যান্স ও ব্যাংকিং ১ম ও ২য়", symbol: "FIN", pastel: "pastel-green", questionsCount: "১,১৫০+ প্রশ্ন", topic: "মূলধনি ব্যয় ও ঝুঁকি" },
        { id: "economics", name: "অর্থনীতি ১ম ও ২য়", symbol: "ECO", pastel: "pastel-pink", questionsCount: "১,১০০+ প্রশ্ন", topic: "বাজার ও জাতীয় আয়" }
      ],
      humanities: [
        { id: "civics", name: "পৌরনীতি ও সুশাসন ১ম ও ২য়", symbol: "CIV", pastel: "pastel-violet", questionsCount: "১,২৫০+ প্রশ্ন", topic: "রাষ্ট্র ও রাজনৈতিক দল" },
        { id: "history", name: "ইতিহাস ও সংস্কৃতি ১ম ও ২য়", symbol: "HIS", pastel: "pastel-peach", questionsCount: "১,২০০+ প্রশ্ন", topic: "স্বাধীন বাংলাদেশের অভ্যুদয়" },
        { id: "economics", name: "অর্থনীতি ১ম ও ২য়", symbol: "ECO", pastel: "pastel-blue", questionsCount: "১,১৫০+ প্রশ্ন", topic: "ব্যাষ্টিক ও সামষ্টিক অর্থনীতি" },
        { id: "geography", name: "ভূগোল ১ম ও ২য়", symbol: "GEO", pastel: "pastel-green", questionsCount: "১,০৫০+ প্রশ্ন", topic: "প্রাকৃতিক ও মানব ভূগোল" }
      ]
    }
  },
  admission: {
    id: "admission",
    label: "বিশ্ববিদ্যালয় ভর্তি",
    codeBadge: "UNI",
    desc: "ঢাকা বিশ্ববিদ্যালয়, গুচ্ছ (GST) ও বিশ্ববিদ্যালয় ভর্তি",
    bannerTitle: "ঢাকা বিশ্ববিদ্যালয় ও গুচ্ছ (GST) স্পেশাল মডেল টেস্ট",
    streams: [
      { id: "a_unit", label: "ক-ইউনিট (বিজ্ঞান)" },
      { id: "b_unit", label: "খ-ইউনিট (মানবিক)" },
      { id: "c_unit", label: "গ-ইউনিট (বাণিজ্য)" }
    ],
    subjects: {
      a_unit: [
        { id: "physics", name: "পদার্থবিজ্ঞান", symbol: "PHY", pastel: "pastel-pink", questionsCount: "১,৮০০+ প্রশ্ন", topic: "নিউটনিয়ান বলবিদ্যা" },
        { id: "chemistry", name: "রসায়ন", symbol: "CHM", pastel: "pastel-violet", questionsCount: "১,৭৫০+ প্রশ্ন", topic: "গুণগত ও জৈব রসায়ন" },
        { id: "higher_math", name: "গণিত", symbol: "∫dx", pastel: "pastel-blue", questionsCount: "১,৬০০+ প্রশ্ন", topic: "ক্যালকুলাস ও ভেক্টর" },
        { id: "biology", name: "জীববিজ্ঞান", symbol: "BIO", pastel: "pastel-green", questionsCount: "১,৮৫০+ প্রশ্ন", topic: "জিনতত্ত্ব ও শারীরতত্ত্ব" }
      ],
      b_unit: [
        { id: "bangla_1", name: "বাংলা ভাষা ও সাহিত্য", symbol: "অ", pastel: "pastel-pink", questionsCount: "২,১০০+ প্রশ্ন", topic: "আধুনিক যুগ ও ব্যাকরণ" },
        { id: "english_1", name: "English Language", symbol: "En", pastel: "pastel-blue", questionsCount: "২,৩০০+ প্রশ্ন", topic: "Vocabulary & Prepositions" },
        { id: "bd_world", name: "বাংলাদেশ বিষয়াবলী", symbol: "BD", pastel: "pastel-green", questionsCount: "২,৫০০+ প্রশ্ন", topic: "সংবিধান ও ইতিহাস" },
        { id: "vocabulary", name: "Vocabulary", symbol: "Vocab", pastel: "pastel-amber", questionsCount: "লেসন ভিত্তিক", topic: "Unit 1, Unit 2... Lesson Units" }
      ],
      c_unit: [
        { id: "accounting", name: "হিসাববিজ্ঞান", symbol: "ACC", pastel: "pastel-blue", questionsCount: "১,৪৫০+ প্রশ্ন", topic: "আর্থিক বিবরণী" },
        { id: "business_org", name: "ব্যবসায় সংগঠন", symbol: "BUS", pastel: "pastel-amber", questionsCount: "১,৩০০+ প্রশ্ন", topic: "ব্যবস্থাপনার নীতি" },
        { id: "english_2", name: "English for Business", symbol: "En", pastel: "pastel-violet", questionsCount: "১,৬০০+ প্রশ্ন", topic: "Commercial English" }
      ]
    }
  },
  medical: {
    id: "medical",
    label: "মেডিকেল ভর্তি",
    codeBadge: "MED",
    desc: "জীববিজ্ঞান, রসায়ন, পদার্থ, ইংরেজি ও সাধারণ জ্ঞান",
    bannerTitle: "মেডিকেল ও ডেন্টাল অ্যাডমিশন ফুল সিলেবাস টেস্ট",
    streams: [
      { id: "med_core", label: "মেডিকেল মূল বিষয়সমূহ" }
    ],
    subjects: {
      med_core: [
        { id: "biology", name: "জীববিজ্ঞান (উদ্ভিদ ও প্রাণি)", symbol: "BIO", pastel: "pastel-green", questionsCount: "৩,৫০০+ প্রশ্ন", topic: "মানব শারীরতত্ত্ব ও কোষবিদ্যা" },
        { id: "chemistry", name: "রসায়ন", symbol: "CHM", pastel: "pastel-violet", questionsCount: "১,৯০০+ প্রশ্ন", topic: "জৈব যৌগ ও পরিবেশ রসায়ন" },
        { id: "physics", name: "পদার্থবিজ্ঞান", symbol: "PHY", pastel: "pastel-blue", questionsCount: "১,৫০০+ প্রশ্ন", topic: "আলো ও আধুনিক পদার্থবিজ্ঞান" },
        { id: "english_1", name: "ইংরেজি ও সাধারণ জ্ঞান", symbol: "GK", pastel: "pastel-amber", questionsCount: "১,৬০০+ প্রশ্ন", topic: "মুক্তিযুদ্ধ ও সিনোনিম" }
      ]
    }
  },
  bcs: {
    id: "bcs",
    label: "বিসিএস ও সরকারি চাকরি",
    codeBadge: "BCS",
    desc: "বিসিএস প্রিলিমিনারি ও ব্যাংক জবস স্পেশাল",
    bannerTitle: "৪৬তম বিসিএস প্রিলিমিনারি পূর্ণাঙ্গ ২০০ মার্কস মডেল টেস্ট",
    streams: [
      { id: "bcs_core", label: "প্রিলিমিনারি বিষয়সমূহ" }
    ],
    subjects: {
      bcs_core: [
        { id: "bangla_2", name: "বাংলা ভাষা ও সাহিত্য", symbol: "অ", pastel: "pastel-pink", questionsCount: "৩,৫০০+ প্রশ্ন", topic: "প্রাচীন ও মধ্যযুগ" },
        { id: "english_2", name: "English Language", symbol: "En", pastel: "pastel-blue", questionsCount: "৩,২০০+ প্রশ্ন", topic: "Idioms & Clauses" },
        { id: "bd_world", name: "বাংলাদেশ বিষয়াবলী", symbol: "BD", pastel: "pastel-green", questionsCount: "৪,০০০+ প্রশ্ন", topic: "জাতীয় অর্জন ও সংবিধান" },
        { id: "general_math", name: "গাণিতিক যুক্তি ও মানসিক দক্ষতা", symbol: "±×", pastel: "pastel-violet", questionsCount: "২,৪০০+ প্রশ্ন", topic: "অনুপাত ও ধারা" }
      ]
    }
  }
};

// ==============================================================================
// VOCABULARY CONTENT MODEL (ADMISSION -> UNIT "KHA" -> VOCABULARY)
// ==============================================================================
let VOCAB_ITEMS = [
  {
    id: "kha_eng_u1_001",
    subject: "English Language",
    section: "vocabulary",
    admission_unit: "kha",
    lesson_unit: "Unit 1",
    sort_order: 1,
    word: "Amicable",
    part_of_speech: "adjective",
    meaning_bn: "সৌহার্দ্যপূর্ণ, বন্ধুত্বপূর্ণ ও শান্তিপূর্ণ",
    meaning_en: "Characterized by friendliness and goodwill without disagreement",
    synonyms: ["Friendly", "Cordial", "Harmonious", "Amiable"],
    antonyms: ["Hostile", "Antagonistic", "Belligerent", "Unfriendly"],
    example: "Despite their differences, the committee members reached an amicable agreement.",
    source: "Dhaka University 'Kha' Unit Question Bank (2022-23)",
    tags: ["high-frequency", "du-kha", "adjective", "unit-1"],
    created_at: "2026-11-25T00:00:00Z",
    updated_at: "2026-11-25T00:00:00Z",
    content_version: 1
  },
  {
    id: "kha_eng_u1_002",
    subject: "English Language",
    section: "vocabulary",
    admission_unit: "kha",
    lesson_unit: "Unit 1",
    sort_order: 2,
    word: "Pragmatic",
    part_of_speech: "adjective",
    meaning_bn: "বাস্তবধর্মী, বাস্তবসম্মত ও প্রায়োগিক",
    meaning_en: "Dealing with things sensibly and realistically based on practical considerations",
    synonyms: ["Practical", "Realistic", "Sensible", "Hard-headed"],
    antonyms: ["Idealistic", "Impractical", "Theoretical", "Unrealistic"],
    example: "A pragmatic approach is essential when solving socioeconomic challenges.",
    source: "DU 'Kha' Unit & GST Cluster Entrance Exam",
    tags: ["high-frequency", "du-kha", "adjective", "unit-1"],
    created_at: "2026-11-25T00:00:00Z",
    updated_at: "2026-11-25T00:00:00Z",
    content_version: 1
  },
  {
    id: "kha_eng_u1_003",
    subject: "English Language",
    section: "vocabulary",
    admission_unit: "kha",
    lesson_unit: "Unit 1",
    sort_order: 3,
    word: "Benevolent",
    part_of_speech: "adjective",
    meaning_bn: "হিতৈষী, পরোপকারী ও দয়ালু",
    meaning_en: "Well-meaning, kindly, and serving a charitable rather than a profit-making purpose",
    synonyms: ["Kind-hearted", "Altruistic", "Generous", "Magnanimous"],
    antonyms: ["Malevolent", "Spiteful", "Selfish", "Cruel"],
    example: "The university founder was recognized for his benevolent contributions to higher education.",
    source: "Dhaka University 'Kha' Unit Question Bank (2021-22)",
    tags: ["high-frequency", "du-kha", "adjective", "unit-1"],
    created_at: "2026-11-25T00:00:00Z",
    updated_at: "2026-11-25T00:00:00Z",
    content_version: 1
  },
  {
    id: "kha_eng_u2_001",
    subject: "English Language",
    section: "vocabulary",
    admission_unit: "kha",
    lesson_unit: "Unit 2",
    sort_order: 1,
    word: "Eloquent",
    part_of_speech: "adjective",
    meaning_bn: "বাগ্মী, প্রাঞ্জল ও সুবক্তা",
    meaning_en: "Fluent or persuasive in speaking or writing",
    synonyms: ["Articulate", "Fluent", "Persuasive", "Expressive"],
    antonyms: ["Inarticulate", "Hesitant", "Tongue-tied"],
    example: "Her eloquent speech inspired thousands of admission candidates.",
    source: "DU 'Kha' Unit Admission Test",
    tags: ["high-frequency", "du-kha", "adjective", "unit-2"],
    created_at: "2026-11-25T00:00:00Z",
    updated_at: "2026-11-25T00:00:00Z",
    content_version: 1
  },
  {
    id: "kha_eng_u2_002",
    subject: "English Language",
    section: "vocabulary",
    admission_unit: "kha",
    lesson_unit: "Unit 2",
    sort_order: 2,
    word: "Resilient",
    part_of_speech: "adjective",
    meaning_bn: "স্থিতিস্থাপক, কষ্টসহিষ্ণু ও দ্রুত ঘুরে দাঁড়াতে সক্ষম",
    meaning_en: "Able to withstand or recover quickly from difficult conditions",
    synonyms: ["Tough", "Tenacious", "Durable", "Adaptable"],
    antonyms: ["Fragile", "Vulnerable", "Weak"],
    example: "Admission fighters need to be resilient in the face of setbacks.",
    source: "DU 'Kha' Unit & University Admission Bank",
    tags: ["high-frequency", "du-kha", "adjective", "unit-2"],
    created_at: "2026-11-25T00:00:00Z",
    updated_at: "2026-11-25T00:00:00Z",
    content_version: 1
  },
  {
    id: "kha_eng_u3_001",
    subject: "English Language",
    section: "vocabulary",
    admission_unit: "kha",
    lesson_unit: "Unit 3",
    sort_order: 1,
    word: "Tenacious",
    part_of_speech: "adjective",
    meaning_bn: "নাছোড়বান্দা, দৃঢ়সংকল্প ও একনিষ্ঠ",
    meaning_en: "Tending to keep a firm hold of something; clinging or adhering closely",
    synonyms: ["Persistent", "Determined", "Persevering", "Stubborn"],
    antonyms: ["Yielding", "Surrendering", "Weak"],
    example: "His tenacious efforts earned him a top place in the merit list.",
    source: "DU 'Kha' Unit Question Bank",
    tags: ["high-frequency", "du-kha", "adjective", "unit-3"],
    created_at: "2026-11-25T00:00:00Z",
    updated_at: "2026-11-25T00:00:00Z",
    content_version: 1
  }
];

// Helper to extract lesson units ordered by sort_order and then lesson_unit
function getVocabLessonUnits() {
  const items = VOCAB_ITEMS.filter(item => 
    (!item.admission_unit || item.admission_unit === "kha") &&
    (!item.section || item.section === "vocabulary")
  );

  const groupMap = new Map();
  items.forEach(item => {
    const key = item.lesson_unit || "Unit 1";
    if (!groupMap.has(key)) {
      const match = key.match(/\d+/);
      const unitOrder = match ? parseInt(match[0], 10) : (item.sort_order ?? 1);
      groupMap.set(key, {
        lesson_unit: key,
        sort_order: unitOrder,
        words: []
      });
    }
    const group = groupMap.get(key);
    group.words.push(item);
  });

  // Strict ordering by sort_order, then lesson_unit
  const sorted = Array.from(groupMap.values()).sort((a, b) => {
    if (a.sort_order !== b.sort_order) {
      return a.sort_order - b.sort_order;
    }
    return a.lesson_unit.localeCompare(b.lesson_unit, undefined, { numeric: true });
  });

  // Sort words inside each unit by sort_order then word
  sorted.forEach(u => {
    u.words.sort((a, b) => {
      if ((a.sort_order ?? 0) !== (b.sort_order ?? 0)) {
        return (a.sort_order ?? 0) - (b.sort_order ?? 0);
      }
      return (a.word || "").localeCompare(b.word || "");
    });
  });

  return sorted;
}

// ==============================================================================
// SUBJECT, CHAPTER & CONCEPT HIERARCHY MAP
// ==============================================================================
const SUBJECT_CHAPTERS_MAP = {
  general_math: {
    name: "সাধারণ গণিত",
    chapters: [
      {
        id: "math_ch1",
        title: "বীজগণিতীয় সূত্রাবলী ও রাশি",
        concepts: [
          { id: "all", title: "অধ্যায়ের সকল কনসেপ্ট" },
          { id: "formula_4ab", title: "4ab ও 2(a²+b²) এর অনুসিদ্ধান্ত" },
          { id: "factorization", title: "উৎপাদকে বিশ্লেষণ ও দ্বিঘাত রাশি" }
        ]
      },
      {
        id: "math_ch2",
        title: "সেট ও ফাংশন",
        concepts: [
          { id: "all", title: "অধ্যায়ের সকল কনসেপ্ট" },
          { id: "set_operations", title: "সংযোগ ও ছেদ সেট (Union & Intersection)" },
          { id: "domain_range", title: "ফাংশনের ডোমেন ও রেঞ্জ" }
        ]
      },
      {
        id: "math_ch3",
        title: "ত্রিকোণমিতিক অনুপাত ও অভেদ",
        concepts: [
          { id: "all", title: "অধ্যায়ের সকল কনসেপ্ট" },
          { id: "trig_identity", title: "ত্রিকোণমিতিক অভেদাবলী ও মান" }
        ]
      }
    ]
  },
  physics: {
    name: "পদার্থবিজ্ঞান",
    chapters: [
      {
        id: "phys_ch1",
        title: "বল ও গতি (Force & Motion)",
        concepts: [
          { id: "all", title: "অধ্যায়ের সকল কনসেপ্ট" },
          { id: "newton_second_law", title: "নিউটনের দ্বিতীয় সূত্র ও ত্বরণ (F = ma)" },
          { id: "momentum", title: "ভরবেগ সংরক্ষণ সূত্র" }
        ]
      },
      {
        id: "phys_ch2",
        title: "কাজ, শক্তি ও ক্ষমতা",
        concepts: [
          { id: "all", title: "অধ্যায়ের সকল কনসেপ্ট" },
          { id: "work_energy", title: "কাজ ও গতিশক্তি উপপাদ্য" },
          { id: "efficiency", title: "কর্মদক্ষতা (Efficiency) ও ক্ষমতা" }
        ]
      },
      {
        id: "phys_ch3",
        title: "আলোর প্রতিফলন ও প্রতিসরণ",
        concepts: [
          { id: "all", title: "অধ্যায়ের সকল কনসেপ্ট" },
          { id: "refraction_index", title: "প্রতিসরাঙ্ক ও স্নেলের সূত্র" }
        ]
      }
    ]
  },
  chemistry: {
    name: "রসায়ন",
    chapters: [
      {
        id: "chem_ch1",
        title: "দ্রবণ ও মোলারিটি (Solutions)",
        concepts: [
          { id: "all", title: "অধ্যায়ের সকল কনসেপ্ট" },
          { id: "molarity_formula", title: "মোলারিটির আদর্শ হিসাব (S = 1000w / MV)" },
          { id: "ppm_concentration", title: "পিপিএম (ppm) ও শতাংশ ঘনমাত্রা" }
        ]
      },
      {
        id: "chem_ch2",
        title: "পর্যায় সারণি ও মৌলের ধর্ম",
        concepts: [
          { id: "all", title: "অধ্যায়ের সকল কনসেপ্ট" },
          { id: "ionization_energy", title: "আয়নীকরণ শক্তি ও ইলেকট্রন আসক্তি" }
        ]
      }
    ]
  },
  higher_math: {
    name: "উচ্চতর গণিত",
    chapters: [
      {
        id: "hmath_ch1",
        title: "ক্যালকুলাস ও যোগজীকরণ",
        concepts: [
          { id: "all", title: "অধ্যায়ের সকল কনসেপ্ট" },
          { id: "indefinite_integral", title: "অনির্দিষ্ট যোগজ (Power Rule)" },
          { id: "definite_integral", title: "নির্দিষ্ট যোগজ ও ক্ষেত্রফল" }
        ]
      },
      {
        id: "hmath_ch2",
        title: "স্থানাঙ্ক জ্যামিতি ও সরলরেখা",
        concepts: [
          { id: "all", title: "অধ্যায়ের সকল কনসেপ্ট" },
          { id: "slope_line", title: "ঢাল ও সরলরেখার সমীকরণ" }
        ]
      }
    ]
  },
  biology: {
    name: "জীববিজ্ঞান",
    chapters: [
      {
        id: "bio_ch1",
        title: "কোষ বিভাজন (Cell Division)",
        concepts: [
          { id: "all", title: "অধ্যায়ের সকল কনসেপ্ট" },
          { id: "mitosis_anaphase", title: "মাইটোসিস গতিপর্যায় (অ্যানাফেজ)" },
          { id: "meiosis_crossing", title: "মিয়োসিস ক্রসিং ওভার ও প্রকরণ" }
        ]
      },
      {
        id: "bio_ch2",
        title: "জীবপ্রযুক্তি ও জিনতত্ত্ব",
        concepts: [
          { id: "all", title: "অধ্যায়ের সকল কনসেপ্ট" },
          { id: "dna_replication", title: "ডিএনএ অনুলিপন ও জিনোটাইপ" }
        ]
      }
    ]
  },
  ict: {
    name: "তথ্য ও যোগাযোগ প্রযুক্তি",
    chapters: [
      {
        id: "ict_ch1",
        title: "সংখ্যা পদ্ধতি ও ডিজিটাল লজিক",
        concepts: [
          { id: "all", title: "অধ্যায়ের সকল কনসেপ্ট" },
          { id: "binary_hex_conversion", title: "বাইনারি থেকে হেক্সাডেসিমেল রূপান্তর" },
          { id: "logic_gates", title: "লজিক গেট ও বুলিয়ান সমীকরণ" }
        ]
      }
    ]
  },
  accounting: {
    name: "হিসাববিজ্ঞান",
    chapters: [
      {
        id: "acc_ch1",
        title: "আর্থিক বিবরণী ও সমন্বয়",
        concepts: [
          { id: "all", title: "অধ্যায়ের সকল কনসেপ্ট" },
          { id: "acc_profit_loss", title: "আয়-ব্যয় ও নিট লাভ নির্ণয়" },
          { id: "acc_balance_sheet", title: "সম্পদ ও দায়ের সমীকরণ" }
        ]
      }
    ]
  },
  business_org: {
    name: "ব্যবসায় সংগঠন",
    chapters: [
      {
        id: "bus_ch1",
        title: "ব্যবস্থাপনার মূলনীতি ও সংগঠন",
        concepts: [
          { id: "all", title: "অধ্যায়ের সকল কনসেপ্ট" },
          { id: "bus_principles", title: "হেনরি ফেয়লের ১৪টি নীতিমালা" }
        ]
      }
    ]
  },
  bangla_2: {
    name: "বাংলা ২য় পত্র",
    chapters: [
      {
        id: "ban_ch1",
        title: "ব্যাকরণ ও সমাস",
        concepts: [
          { id: "all", title: "অধ্যায়ের সকল কনসেপ্ট" },
          { id: "ban_samash", title: "প্রাদি ও তৎপুরুষ সমাস নির্ণয়" },
          { id: "ban_sandhi", title: "সন্ধি বিচ্ছেদ ও প্রত্যয়" }
        ]
      }
    ]
  },
  english_2: {
    name: "English 2nd",
    chapters: [
      {
        id: "eng_ch1",
        title: "Grammar & Syntax",
        concepts: [
          { id: "all", title: "All Concepts" },
          { id: "eng_subject_verb", title: "Subject-Verb Agreement" },
          { id: "eng_preposition", title: "Appropriate Prepositions" }
        ]
      }
    ]
  },
  bd_world: {
    name: "বাংলাদেশ বিষয়াবলী",
    chapters: [
      {
        id: "bd_ch1",
        title: "মুক্তিযুদ্ধ ও সংবিধান",
        concepts: [
          { id: "all", title: "অধ্যায়ের সকল কনসেপ্ট" },
          { id: "bd_constitution", title: "সংবিধানের মূলনীতি ও মৌলিক অধিকার" }
        ]
      }
    ]
  },
  vocabulary: {
    name: "Vocabulary",
    get chapters() {
      return getVocabLessonUnits().map(lu => ({
        id: lu.lesson_unit.toLowerCase().replace(/\s+/g, "_"),
        title: `${lu.lesson_unit} (${lu.words.length} Words)`,
        lesson_unit: lu.lesson_unit,
        sort_order: lu.sort_order,
        concepts: [
          { id: "all", title: `${lu.lesson_unit} - সকল শব্দ (All Words)` },
          ...lu.words.map(w => ({
            id: w.id,
            title: `${w.word} (${w.part_of_speech || 'word'}) - ${w.meaning_bn}`
          }))
        ]
      }));
    }
  }
};

// Rich conceptual questions with KaTeX Math Equations & Twisted variants
const ALL_SAMPLE_QUESTIONS = [
  {
    id: "q_math_1",
    subjectId: "general_math",
    chapterId: "math_ch1",
    conceptId: "formula_4ab",
    category: "সাধারণ গণিত (বীজগণিতীয় সূত্রাবলী)",
    question: "যদি \\(a + b = \\sqrt{7}\\) এবং \\(a - b = \\sqrt{3}\\) হয়, তবে \\(4ab\\) এর মান কত হবে?",
    options: ["2", "4", "5", "7"],
    correctIndex: 1, // '4'
    explanation: `
      <strong>মূল কনসেপ্ট:</strong> বীজগাণিতিক অনুসিদ্ধান্ত অনুসারে:<br>
      \\[ 4ab = (a + b)^2 - (a - b)^2 \\]
      মান বসিয়ে পাই:<br>
      \\[ 4ab = (\\sqrt{7})^2 - (\\sqrt{3})^2 = 7 - 3 = 4 \\]<br>
      <strong>কেন বাকি অপশনগুলো ভুল?</strong><br>
      • <strong>২:</strong> এটি \\(2ab\\) এর মান (\\(\\frac{4}{2} = 2\\))।<br>
      • <strong>৫:</strong> সূত্রের প্রয়োগ ভুল হলে এমন ভ্রান্তি হতে পারে।<br>
      • <strong>৭:</strong> এটি শুধুমাত্র \\((a + b)^2\\) এর মান।
    `,
    twisted: {
      question: "যদি \\(a + b = \\sqrt{7}\\) এবং \\(a - b = \\sqrt{3}\\) হয়, তবে \\(2(a^2 + b^2)\\) এর মান কত?",
      options: ["4", "10", "12", "14"],
      correctIndex: 1, // '10'
      explanation: `
        <strong>টুইস্টেড প্রশ্নের সমাধান:</strong><br>
        অনুরূপ অনুসিদ্ধান্ত অনুসারে:<br>
        \\[ 2(a^2 + b^2) = (a + b)^2 + (a - b)^2 = (\\sqrt{7})^2 + (\\sqrt{3})^2 = 7 + 3 = 10 \\]
        মনে রাখবেন: মাইনাস হলে \\(4ab = 4\\), প্লাস হলে \\(2(a^2 + b^2) = 10\\)।
      `
    }
  },
  {
    id: "q_phys_1",
    subjectId: "physics",
    chapterId: "phys_ch1",
    conceptId: "newton_second_law",
    category: "পদার্থবিজ্ঞান (বল ও গতি)",
    question: "কোনো বস্তুর ওপর প্রযুক্ত মোট বল ধ্রুবক থাকলে এবং বস্তুর ভর দ্বিগুণ করা হলে, ত্বরণ \\(a\\) এর কী পরিবর্তন ঘটবে?",
    options: ["ত্বরণ দ্বিগুণ হবে", "ত্বরণ অর্ধেক হবে", "ত্বরণ চারগুণ বৃদ্ধি পাবে", "ত্বরণ অপরিবর্তিত থাকবে"],
    correctIndex: 1, // অর্ধেক
    explanation: `
      <strong>মূল কনসেপ্ট:</strong> নিউটনের গতির দ্বিতীয় সূত্রানুসারে:<br>
      \\[ F = ma \\implies a = \\frac{F}{m} \\]<br>
      যেহেতু প্রযুক্ত বল \\(F\\) অপরিবর্তিত, তাই ত্বরণ ভরের ব্যস্তানুপাতিক (\\(a \\propto \\frac{1}{m}\\))।<br>
      অতএব, ভর দ্বিগুণ (\\(2m\\)) করা হলে ত্বরণ অর্ধেক (\\(\\frac{1}{2}\\)) হয়ে যাবে।<br><br>
      <strong>কেন বাকি অপশনগুলো ভুল?</strong><br>
      • <strong>ত্বরণ দ্বিগুণ:</strong> ভর অর্ধেক করলে ত্বরণ দ্বিগুণ হতো।<br>
      • <strong>চারগুণ:</strong> বলের পরিবর্তন ছাড়াই চারগুণ হওয়া পদার্থবিজ্ঞানের নিয়মের পরিপন্থী।
    `,
    twisted: {
      question: "যদি একটি চলমান বস্তুর ত্বরণ দ্বিগুণ করতে হয় কিন্তু ভর অপরিবর্তিত থাকে, তবে প্রযুক্ত বল কত করতে হবে?",
      options: ["অর্ধেক", "দ্বিগুণ", "চারগুণ", "শূন্য"],
      correctIndex: 1, // দ্বিগুণ
      explanation: "\\[ F = ma \\] অনুসারে ভর অপরিবর্তিত থাকলে ত্বরণ দ্বিগুণ করতে প্রযুক্ত বল \\(F\\) দ্বিগুণ করতে হবে।"
    }
  },
  {
    id: "q_hmath_1",
    subjectId: "higher_math",
    chapterId: "hmath_ch1",
    conceptId: "indefinite_integral",
    category: "উচ্চতর গণিত (ক্যালকুলাস ও যোগজীকরণ)",
    question: "যোগজ \\(\\int (3x^2 + 2x - 5) \\, dx\\) এর মান কোনটি?",
    options: [
      "\\(x^3 + x^2 - 5x + c\\)",
      "\\(6x + 2 + c\\)",
      "\\(3x^3 + 2x^2 - 5x + c\\)",
      "\\(\\frac{x^3}{3} + \\frac{x^2}{2} - 5x + c\\)"
    ],
    correctIndex: 0,
    explanation: `
      <strong>মূল কনসেপ্ট:</strong> যোগজীকরণের ঘাতের নিয়ম অনুসারে:<br>
      \\[ \\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + c \\]<br>
      প্রদত্ত সমীকরণে:<br>
      \\[ \\int 3x^2 dx + \\int 2x dx - \\int 5 dx = 3\\left(\\frac{x^3}{3}\\right) + 2\\left(\\frac{x^2}{2}\\right) - 5x + c = x^3 + x^2 - 5x + c \\]<br>
      <strong>ভুল অপশনের কারণ:</strong><br>
      • <strong>\\(6x + 2\\):</strong> এটি যোগজীকরণ নয়, এটি হলো অন্তরীকরণ (Derivative)।
    `,
    twisted: {
      question: "নির্দিষ্ট যোগজ \\(\\int_{0}^{2} 3x^2 \\, dx\\) এর মান কত?",
      options: ["6", "8", "12", "24"],
      correctIndex: 1, // 8
      explanation: "\\[ \\int_{0}^{2} 3x^2 dx = [x^3]_{0}^{2} = 2^3 - 0 = 8 \\]"
    }
  },
  {
    id: "q_chem_1",
    subjectId: "chemistry",
    chapterId: "chem_ch1",
    conceptId: "molarity_formula",
    category: "রসায়ন (দ্রবণ ও মোলারিটি)",
    question: "\\(250 \\text{ mL}\\) দ্রবণে \\(10.6 \\text{ g } \\text{Na}_2\\text{CO}_3\\) দ্রবীভূত থাকলে দ্রবণের মোলারিটি \\(S\\) কত?",
    options: ["\\(0.2 \\text{ M}\\)", "\\(0.4 \\text{ M}\\)", "\\(0.5 \\text{ M}\\)", "\\(1.0 \\text{ M}\\)"],
    correctIndex: 1, // 0.4 M
    explanation: `
      <strong>মূল কনসেপ্ট:</strong> মোলারিটির আদর্শ সূত্র:<br>
      \\[ S = \\frac{1000 \\times w}{M \\times V} \\]<br>
      এখানে, ভর \\(w = 10.6 \\text{ g}\\), আয়তন \\(V = 250 \\text{ mL}\\), এবং \\(\\text{Na}_2\\text{CO}_3\\) এর আণবিক ভর \\(M = (23 \\times 2) + 12 + (16 \\times 3) = 106\\)।<br>
      মান বসিয়ে পাই:<br>
      \\[ S = \\frac{1000 \\times 10.6}{106 \\times 250} = \\frac{10600}{26500} = 0.4 \\text{ M} \\]
    `,
    twisted: {
      question: "\\(1 \\text{ L}\\) ডেসিমোলার (\\(0.1 \\text{ M}\\)) \\(\\text{Na}_2\\text{CO}_3\\) দ্রবণ প্রস্তুত করতে কত গ্রাম দ্রবের প্রয়োজন?",
      options: ["\\(5.3 \\text{ g}\\)", "\\(10.6 \\text{ g}\\)", "\\(21.2 \\text{ g}\\)", "\\(53.0 \\text{ g}\\)"],
      correctIndex: 1, // 10.6 g
      explanation: "\\[ w = \\frac{SMV}{1000} = \\frac{0.1 \\times 106 \\times 1000}{1000} = 10.6 \\text{ g} \\]"
    }
  },
  {
    id: "q_bio_1",
    subjectId: "biology",
    chapterId: "bio_ch1",
    conceptId: "mitosis_anaphase",
    category: "জীববিজ্ঞান (কোষ বিভাজন)",
    question: "মাইটোসিস কোষ বিভাজনের কোন পর্যায়ে ক্রোমোজোমের সেন্ট্রোমিয়ার দুটি ভাগে বিভক্ত হয়ে অপত্য ক্রোমোজোম গঠিত হয়?",
    options: ["প্রোফেজ", "মেটাফেজ", "অ্যানাফেজ", "টেলোফেজ"],
    correctIndex: 2, // অ্যানাফেজ
    explanation: `
      <strong>মূল কনসেপ্ট:</strong> অ্যানাফেজ (গতিপর্যায়)-এর শুরুতে প্রতিটি সেন্ট্রোমিয়ার লম্বালম্বিভাবে বিভক্ত হয়। ফলে প্রতিটি ক্রোমাটিড একটি পূর্ণাঙ্গ অপত্য ক্রোমোজোমে পরিণত হয় এবং মেরু অঞ্চলের দিকে চলতে থাকে (V, L, J, I আকৃতি ধারণ করে)।<br><br>
      <strong>কেন বাকি অপশনগুলো ভুল?</strong><br>
      • <strong>মেটাফেজ:</strong> এই ধাপে ক্রোমোজোমগুলো বিষুবীয় অঞ্চলে বিন্যস্ত থাকে এবং সর্বাধিক খাটো ও মোটা হয়।<br>
      • <strong>টেলোফেজ:</strong> এই ধাপে অপত্য ক্রোমোজোম মেরুতে পৌঁছে নিউক্লিয়ার মেমব্রেন পুনর্গঠিত হয়।
    `,
    twisted: {
      question: "মাইটোসিসের মেটাফেজ ধাপে ক্রোমোজোমের সেন্ট্রোমিয়ারের সাথে স্পিন্ডল তন্তুর সংযোগস্থলকে কী বলে?",
      options: ["ক্রোমোমিয়ার", "কাইনেটোকোর", "স্যাটেলাইট", "টেলোমিয়ার"],
      correctIndex: 1, // কাইনেটোকোর
      explanation: "সেন্ট্রোমিয়ারে অবস্থিত প্রোটিন নির্মিত চাকতি সদৃশ কাইনেটোকোরের সাথেই ক্রোমোজোমাল তন্তুগুলো যুক্ত থাকে।"
    }
  },
  {
    id: "q_bangla_1",
    subjectId: "bangla_2",
    chapterId: "ban_ch1",
    conceptId: "ban_samash",
    category: "বাংলা ২য় পত্র (ব্যাকরণ ও সমাস)",
    question: "‘অনুতাপ’ কোন সমাসের যথার্থ উদাহরণ?",
    options: ["প্রাদি সমাস", "উপপদ তৎপুরুষ", "নঞ তৎপুরুষ", "রূপক কর্মধারয়"],
    correctIndex: 0, // প্রাদি সমাস
    explanation: `
      <strong>মূল কনসেপ্ট:</strong> প্র, পরা, অপ, অনু ইত্যাদি প্রাদি উপসর্গের সাথে কৃৎ-প্রত্যয়সাধিত পদের সমাস হলে তাকে <strong>প্রাদি সমাস</strong> বলে (যেমন: অনুতে যে তাপ = অনুতাপ; প্র যে বচন = প্রবচন)।<br><br>
      <strong>কেন বাকি অপশনগুলো ভুল?</strong><br>
      • <strong>উপপদ তৎপুরুষ:</strong> কৃদন্ত পদের পূর্বে উপপদ বসতে হয় (যেমন: পঙ্কে জন্মে যা = পঙ্কজ)।<br>
      • <strong>নঞ তৎপুরুষ:</strong> না-বাচক উপসর্গ বা অব্যয় যুক্ত হয় (যেমন: নয় চেনা = অচেনা)।
    `,
    twisted: {
      question: "‘প্রভাত’ (প্রকৃষ্টরূপে ভাত/আলোকিত) কোন সমাসের উদাহরণ?",
      options: ["প্রাদি সমাস", "অব্যয়ীভাব", "কর্মধারয়", "দ্বিগু"],
      correctIndex: 0,
      explanation: "‘প্র’ উপসর্গযোগে গঠিত হওয়ায় এটিও প্রাদি সমাসের উদাহরণ।"
    }
  },
  {
    id: "q_eng_1",
    subjectId: "english_2",
    chapterId: "eng_ch1",
    conceptId: "eng_subject_verb",
    category: "English 2nd (Subject-Verb Agreement)",
    question: "Choose the correct sentence following formal grammar rules:",
    options: [
      "Neither the principal nor the teachers was present in the meeting.",
      "Neither the principal nor the teachers were present in the meeting.",
      "Neither the principal or the teachers was present in the meeting.",
      "Neither the principal nor the teachers has been present in the meeting."
    ],
    correctIndex: 1,
    explanation: `
      <strong>Core Rule:</strong> When two subjects are connected by <em>neither... nor</em> or <em>either... or</em>, the verb agrees in number and person with the <strong>closer subject</strong> (the proximity rule).<br>
      Here, 'teachers' is plural and closest to the verb, so the plural verb <strong>were</strong> must be used.<br><br>
      <strong>Why others are wrong?</strong><br>
      • Option 1 & 4 use singular verbs ('was', 'has been') which violate agreement with 'teachers'.<br>
      • Option 3 pairs 'neither' with 'or', which is a correlative conjunction error.
    `,
    twisted: {
      question: "Choose the correct form: 'Either the students or the headmaster _____ coming today.'",
      options: ["is", "are", "were", "have"],
      correctIndex: 0, // is
      explanation: "The closest subject is 'the headmaster' (singular), so the verb must be singular 'is'."
    }
  },
  {
    id: "q_ict_1",
    subjectId: "ict",
    chapterId: "ict_ch1",
    conceptId: "binary_hex_conversion",
    category: "তথ্য ও যোগাযোগ প্রযুক্তি (সংখ্যা পদ্ধতি)",
    question: "বাইনারি সংখ্যা \\((11011)_2\\) এর সমতুল্য হেক্সাডেসিমেল মান কোনটি?",
    options: ["\\((1B)_{16}\\)", "\\((27)_{16}\\)", "\\((1D)_{16}\\)", "\\((33)_{16}\\)"],
    correctIndex: 0, // 1B
    explanation: `
      <strong>মূল কনসেপ্ট:</strong> বাইনারি থেকে হেক্সাডেসিমেলে রূপান্তর করতে ডানদিক থেকে ৪-বিট করে গ্রুপ করতে হয়:<br>
      \\(11011_2 \\implies 0001 \\quad 1011\\)<br>
      • \\(0001_2 = 1_{10} = 1_{16}\\)<br>
      • \\(1011_2 = 8 + 2 + 1 = 11_{10} = B_{16}\\)<br>
      সুতরাং সমতুল্য হেক্সাডেসিমেল মান হলো \\((1B)_{16}\\)।
    `,
    twisted: {
      question: "হেক্সাডেসিমেল সংখ্যা \\((A)_{16}\\) এর বাইনারি রূপ কোনটি?",
      options: ["\\(1001_2\\)", "\\(1010_2\\)", "\\(1011_2\\)", "\\(1100_2\\)"],
      correctIndex: 1, // 1010
      explanation: "\\(A_{16} = 10_{10} = (1010)_2\\)।"
    }
  },
  {
    id: "q_acc_1",
    subjectId: "accounting",
    chapterId: "acc_ch1",
    conceptId: "acc_profit_loss",
    category: "হিসাববিজ্ঞান (আর্থিক বিবরণী)",
    question: "মোট লাভ \\(৫০,০০০\\) টাকা, পরিচালন ব্যয় \\(১৫,০০০\\) টাকা এবং ব্যাংক সুদ আয় \\(২,০০০\\) টাকা হলে নিট পরিচালন মুনাফা কত?",
    options: ["\\(৩৫,০০০\\) টাকা", "\\(৩৭,০০০\\) টাকা", "\\(৩২,০০০\\) টাকা", "\\(৬৫,০০০\\) টাকা"],
    correctIndex: 0, // ৩৫,০০০ টাকা
    explanation: `
      <strong>মূল কনসেপ্ট:</strong><br>
      \\[ \\text{নিট পরিচালন মুনাফা} = \\text{মোট লাভ} - \\text{পরিচালন ব্যয়} \\]<br>
      এখানে, \\(৫০,০০০ - ১৫,০০০ = ৩৫,০০০\\) টাকা। মনে রাখবেন, ব্যাংক সুদ আয় হলো অপরিচালন আয়, তাই পরিচালন মুনাফা বের করতে এটি যুক্ত হবে না।
    `,
    twisted: {
      question: "যদি নিট মুনাফা বের করতে বলা হয়, তবে পূর্বোক্ত অংকে নিট মুনাফা কত হবে?",
      options: ["\\(৩৫,০০০\\) টাকা", "\\(৩৭,০০০\\) টাকা", "\\(৩২,০০০\\) টাকা", "\\(৫০,০০০\\) টাকা"],
      correctIndex: 1, // ৩৭,০০০ টাকা
      explanation: "নিট মুনাফা = পরিচালন মুনাফা (৩৫,০০০) + অপরিচালন আয় (২,০০০) = ৩৭,০০০ টাকা।"
    }
  },
  {
    id: "q_bd_1",
    subjectId: "bd_world",
    chapterId: "bd_ch1",
    conceptId: "bd_constitution",
    category: "বাংলাদেশ বিষয়াবলী (সংবিধান)",
    question: "গণপ্রজাতন্ত্রী বাংলাদেশের সংবিধানের কোন অনুচ্ছেদে ‘আইনের দৃষ্টিতে সমতা’ ও সকল নাগরিকের সমঅধিকার নিশ্চিত করা হয়েছে?",
    options: ["অনুচ্ছেদ ২৭", "অনুচ্ছেদ ২৮", "অনুচ্ছেদ ৩১", "অনুচ্ছেদ ৩২"],
    correctIndex: 0, // ২৭
    explanation: `
      <strong>মূল কনসেপ্ট:</strong> সংবিধানের ৩য় ভাগের (মৌলিক অধিকার) <strong>অনুচ্ছেদ ২৭</strong> এ বলা হয়েছে: 'সকল নাগরিক আইনের দৃষ্টিতে সমান এবং আইনের সমান আশ্রয় লাভের অধিকারী'।<br><br>
      • অনুচ্ছেদ ২৮: ধর্ম প্রভৃতি কারণে বৈষম্য বিলোপ।<br>
      • অনুচ্ছেদ ৩১: আইনের আশ্রয় লাভের অধিকার।
    `,
    twisted: {
      question: "সংবিধানের ২৮(২) অনুচ্ছেদ অনুযায়ী রাষ্ট্র ও গণজীবনের সর্বস্তরে কাদের সমান অধিকার নিশ্চিত করা হয়েছে?",
      options: ["শ্রমিক ও মালিকের", "নারী ও পুরুষের", "কৃষক ও মেহনতি মানুষের", "সংখ্যালঘু সম্প্রদায়ের"],
      correctIndex: 1, // নারী ও পুরুষের
      explanation: "২৮(২) অনুচ্ছেদে স্পষ্টভাবে নারী ও পুরুষের সমঅধিকারের কথা বলা হয়েছে।"
    }
  },
  {
    id: "q_vocab_1",
    subjectId: "vocabulary",
    chapterId: "unit_1",
    conceptId: "kha_eng_u1_001",
    category: "Vocabulary (Unit 1 - Synonyms)",
    question: "What is the most appropriate SYNONYM for the word 'Amicable'?",
    options: ["Hostile and Aggressive", "Friendly and Cordial", "Arrogant and Proud", "Timid and Fearful"],
    correctIndex: 1,
    explanation: `
      <strong>শব্দার্থ ও কনসেপ্ট:</strong><br>
      • <strong>Amicable (adj):</strong> সৌহার্দ্যপূর্ণ, বন্ধুত্বপূর্ণ ও শান্তিপূর্ণ (characterized by friendliness).<br>
      • <strong>Synonyms:</strong> Friendly, Cordial, Harmonious, Amiable.<br>
      • <strong>Antonyms:</strong> Hostile, Antagonistic, Belligerent.
    `,
    twisted: {
      question: "Which of the following is an ANTONYM of 'Amicable'?",
      options: ["Cordial", "Harmonious", "Hostile", "Affable"],
      correctIndex: 2,
      explanation: "'Hostile' (শত্রুভাবাপন্ন) is the direct antonym of 'Amicable'."
    }
  },
  {
    id: "q_vocab_2",
    subjectId: "vocabulary",
    chapterId: "unit_1",
    conceptId: "kha_eng_u1_002",
    category: "Vocabulary (Unit 1 - Context & Meaning)",
    question: "A person who approaches problems realistically and practically is called:",
    options: ["Pragmatic", "Idealistic", "Dogmatic", "Skeptical"],
    correctIndex: 0,
    explanation: `
      <strong>শব্দার্থ ও কনসেপ্ট:</strong><br>
      • <strong>Pragmatic (adj):</strong> বাস্তবধর্মী বা বাস্তবসম্মত (dealing with things sensibly and realistically).<br>
      • <strong>Example:</strong> 'A pragmatic solution to public transport challenges.'
    `,
    twisted: {
      question: "What is the antonym of 'Pragmatic'?",
      options: ["Practical", "Idealistic / Impractical", "Sensible", "Rational"],
      correctIndex: 1,
      explanation: "'Idealistic' or 'Impractical' is the antonym of 'Pragmatic'."
    }
  },
  {
    id: "q_vocab_3",
    subjectId: "vocabulary",
    chapterId: "unit_2",
    conceptId: "kha_eng_u2_001",
    category: "Vocabulary (Unit 2 - Eloquent)",
    question: "Which word means 'fluent or persuasive in speaking or writing'?",
    options: ["Hesitant", "Eloquent", "Taciturn", "Inarticulate"],
    correctIndex: 1,
    explanation: `
      <strong>শব্দার্থ ও কনসেপ্ট:</strong><br>
      • <strong>Eloquent (adj):</strong> বাগ্মী, প্রাঞ্জল ও সুবক্তা (fluent/expressive speaker).<br>
      • <strong>Synonyms:</strong> Articulate, Fluent, Persuasive.
    `
  }
];

// App State
let currentTargetId = localStorage.getItem("conceptmcq_target") || "ssc";
let currentStreamId = localStorage.getItem("conceptmcq_stream") || (TARGET_CONFIGS[currentTargetId]?.streams[0]?.id || "science");
let currentQuestions = [...ALL_SAMPLE_QUESTIONS];
let currentQIndex = 0;
let userAnswers = {};
let isBlurModeActive = false;
let isEliminationModeActive = false;
let examTimer = null;
let secondsRemaining = 15 * 60; // 15 mins
let currentExamMode = "standard"; // standard | rapid | mistake_bank | bookmarks

// Modal Selection Working State
let modalSelectedTarget = currentTargetId;
let modalSelectedStream = currentStreamId;

// DOM References
const currentTargetBadge = document.getElementById("current-target-badge");
const currentTargetLabel = document.getElementById("current-target-label");
const targetSwitcherBtn = document.getElementById("target-switcher-btn");
const targetModal = document.getElementById("target-modal-backdrop");
const closeTargetModal = document.getElementById("close-target-modal");
const confirmTargetBtn = document.getElementById("confirm-target-btn");
const targetsList = document.getElementById("targets-list");
const activeStreamBadge = document.getElementById("active-stream-badge");
const streamSubtitle = document.getElementById("stream-subtitle");
const subjectsGridContainer = document.getElementById("subjects-grid-container");
const bannerTitle = document.getElementById("banner-title");

// Custom Quiz Builder Elements
const customQuizModal = document.getElementById("custom-quiz-modal-backdrop");
const closeCustomQuizModal = document.getElementById("close-custom-quiz-modal");
const customSubjectSelect = document.getElementById("custom-subject-select");
const customChapterSelect = document.getElementById("custom-chapter-select");
const customConceptSelect = document.getElementById("custom-concept-select");
const startCustomQuizBtn = document.getElementById("start-custom-quiz-btn");
const randomRapidBtn = document.getElementById("random-rapid-btn");
const quizLengthOptions = document.getElementById("quiz-length-options");
let selectedQuizCount = 5;
let selectedQuizDurationMins = 5;

// Views
const dashboardView = document.getElementById("dashboard-view");
const examView = document.getElementById("exam-view");
const resultView = document.getElementById("result-view");

// Exam Elements
const startLiveExamBtn = document.getElementById("start-live-exam-btn");
const exitExamBtn = document.getElementById("exit-exam-btn");
const questionPromptText = document.getElementById("question-prompt-text");
const optionsContainer = document.getElementById("options-container");
const questionNumberPill = document.getElementById("question-number-pill");
const questionTopicPill = document.getElementById("question-topic-pill");
const examTimerDisplay = document.getElementById("exam-timer-display");
const timerText = document.getElementById("timer-text");
const examProgressBar = document.getElementById("exam-progress-bar");
const questionProgressLabel = document.getElementById("question-progress-label");
const explanationCard = document.getElementById("explanation-card");
const explanationBodyText = document.getElementById("explanation-body-text");
const twistedQuestionBtn = document.getElementById("twisted-question-btn");
const toggleBlurBtn = document.getElementById("toggle-blur-mode");
const toggleStrikeBtn = document.getElementById("toggle-strikethrough-mode");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const finishExamBtn = document.getElementById("finish-exam-btn");
const markReviewBtn = document.getElementById("mark-review-btn");
const retakeExamBtn = document.getElementById("retake-exam-btn");
const backHomeBtn = document.getElementById("back-home-btn");

// Feature Tiles
const tileMistakeBank = document.getElementById("tile-mistake-bank");
const tileBookmarks = document.getElementById("tile-bookmarks");
const tileRapidQuiz = document.getElementById("tile-rapid-quiz");

// Toast Notification Helper (Sleek Slim Bar / 10MS Standard)
function showToast(message, type = "info") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  // Clear existing toasts to prevent stacking bloat
  container.innerHTML = "";

  const icons = {
    info: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="flex-shrink:0"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
    success: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="flex-shrink:0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
    warning: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="flex-shrink:0"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
  };

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `${icons[type] || icons.info}<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "toastOut 0.25s forwards";
    setTimeout(() => toast.remove(), 250);
  }, 3200);
}

// Trigger KaTeX Math Rendering
function renderMath() {
  if (window.renderMathInElement) {
    try {
      window.renderMathInElement(document.body, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "\\[", right: "\\]", display: true },
          { left: "\\(", right: "\\)", display: false },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    } catch (e) {
      console.warn("KaTeX render error:", e);
    }
  }
}

// ==============================================================================
// INITIALIZATION
// ==============================================================================
function init() {
  renderTargetUI();
  setupEventListeners();
  renderTargetModal();
  fetchVocabItemsFromSupabase();
  
  if (!localStorage.getItem("conceptmcq_visited")) {
    openTargetModal();
    localStorage.setItem("conceptmcq_visited", "true");
  }

  // Initial Math pass
  setTimeout(renderMath, 400);
}

async function fetchVocabItemsFromSupabase() {
  if (typeof supabaseClient !== "undefined" && supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('vocab_items')
        .select('*')
        .eq('admission_unit', 'kha')
        .order('sort_order', { ascending: true })
        .order('lesson_unit', { ascending: true });
      if (!error && data && data.length > 0) {
        VOCAB_ITEMS = data;
        const container = document.getElementById("vocab-lesson-units-list");
        if (container && !container.closest(".modal-backdrop.hidden")) {
          renderVocabularyLessonUnits();
        }
      }
    } catch (e) {
      console.warn("Using offline VOCAB_ITEMS", e);
    }
  }
}

// Render Target Header, Streams, and Subject Cards
function renderTargetUI() {
  const target = TARGET_CONFIGS[currentTargetId] || TARGET_CONFIGS.ssc;
  currentTargetBadge.textContent = target.codeBadge;

  if (!target.streams.some(s => s.id === currentStreamId)) {
    currentStreamId = target.streams[0].id;
    localStorage.setItem("conceptmcq_stream", currentStreamId);
  }

  const streamObj = target.streams.find(s => s.id === currentStreamId) || target.streams[0];

  // Header Title
  if (currentTargetLabel) {
    if (target.streams.length > 1 && streamObj) {
      currentTargetLabel.textContent = `${target.label} • ${streamObj.label}`;
    } else {
      currentTargetLabel.textContent = target.label;
    }
  }

  // Dynamic Banner Title reflecting Target & Stream
  if (currentTargetId === "admission" && streamObj) {
    bannerTitle.textContent = `ঢাকা বিশ্ববিদ্যালয় ও গুচ্ছ ${streamObj.label} স্পেশাল মডেল টেস্ট`;
  } else if (currentTargetId === "ssc" && streamObj) {
    bannerTitle.textContent = `এসএসসি স্পেশাল ${streamObj.label} মডেল টেস্ট`;
  } else if (currentTargetId === "hsc" && streamObj) {
    bannerTitle.textContent = `এইচএসসি স্পেশাল ${streamObj.label} মডেল টেস্ট`;
  } else {
    bannerTitle.textContent = target.bannerTitle;
  }

  // Active Stream Badge & Subtitle above Subjects
  if (activeStreamBadge) {
    if (target.streams.length > 1 && streamObj) {
      activeStreamBadge.textContent = streamObj.label;
      activeStreamBadge.style.display = "inline-flex";
    } else {
      activeStreamBadge.style.display = "none";
    }
  }

  if (streamSubtitle) {
    if (target.streams.length > 1 && streamObj) {
      streamSubtitle.textContent = `${streamObj.label} • সিলেবাস অনুযায়ী অধ্যায়ভিত্তিক প্রস্তুতি ও মডেল টেস্ট`;
    } else {
      streamSubtitle.textContent = `পূর্ণাঙ্গ সিলেবাস অনুযায়ী বিষয়ভিত্তিক প্রস্তুতি ও মডেল টেস্ট`;
    }
  }

  // Update folder tabs in Main Card
  const streamFolderTabs = document.getElementById("stream-folder-tabs");
  if (streamFolderTabs && target.streams && target.streams.length > 0) {
    streamFolderTabs.innerHTML = target.streams.map(stream => `
      <button class="folder-tab ${stream.id === currentStreamId ? 'active' : ''}" data-stream="${stream.id}">${stream.label}</button>
    `).join("");
    streamFolderTabs.querySelectorAll(".folder-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        streamFolderTabs.querySelectorAll(".folder-tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        const sId = tab.dataset.stream;
        if (sId) {
          currentStreamId = sId;
          localStorage.setItem("conceptmcq_stream", currentStreamId);
          renderTargetUI();
        }
      });
    });
  } else {
    document.querySelectorAll(".folder-tab").forEach(tab => {
      tab.classList.toggle("active", tab.dataset.stream === currentStreamId);
    });
  }

  // Subject Cards (10MS Pastel Circular Icons)
  const subjects = target.subjects[currentStreamId] || target.subjects[target.streams[0]?.id] || [];
  subjectsGridContainer.innerHTML = subjects.map(sub => `
    <div class="subject-card ${sub.id === 'vocabulary' ? 'vocab-subject-card' : ''}" data-subject="${sub.id}" data-name="${sub.name}">
      <div class="subject-icon-box ${sub.pastel}">
        <span>${sub.symbol}</span>
      </div>
      <h3 class="subject-name">${sub.name}</h3>
      <span class="subject-questions-meta">${sub.questionsCount}</span>
      <span class="subject-action-badge">${sub.id === 'vocabulary' ? 'লেসন দেখুন →' : 'অনুশীলন করুন →'}</span>
    </div>
  `).join("");

  subjectsGridContainer.querySelectorAll(".subject-card").forEach(card => {
    card.addEventListener("click", () => {
      const subId = card.dataset.subject;
      if (subId === "vocabulary") {
        navigateTo("/vocabulary");
      } else {
        openCustomQuizModal(subId);
      }
    });
  });
}

// ==============================================================================
// EXAM ENGINE LOGIC
// ==============================================================================
function startSubjectExam(subjectId, subjectName) {
  const filtered = ALL_SAMPLE_QUESTIONS.filter(q => q.subjectId === subjectId);
  currentQuestions = filtered.length > 0 ? filtered : [...ALL_SAMPLE_QUESTIONS];
  document.getElementById("exam-category-badge").textContent = subjectName || "কনসেপ্ট অনুশীলন";
  currentExamMode = "subject";
  startExamSession(15 * 60);
}

function startExamSession(durationSeconds = 15 * 60) {
  dashboardView.classList.add("hidden");
  resultView.classList.add("hidden");
  examView.classList.remove("hidden");

  currentQIndex = 0;
  userAnswers = {};
  isBlurModeActive = false;
  isEliminationModeActive = false;
  toggleBlurBtn.classList.remove("active");
  toggleStrikeBtn.classList.remove("active");

  startTimer(durationSeconds);
  loadQuestion(currentQIndex);
}

function startTimer(duration = 15 * 60) {
  clearInterval(examTimer);
  secondsRemaining = duration;
  updateTimerDisplay();

  examTimer = setInterval(() => {
    secondsRemaining--;
    updateTimerDisplay();
    if (secondsRemaining <= 0) {
      clearInterval(examTimer);
      showToast("সময় শেষ! পরীক্ষার ফলাফল তৈরি হচ্ছে...", "warning");
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  timerText.textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

  if (secondsRemaining < 120) {
    examTimerDisplay.classList.add("warning-pacing");
  } else {
    examTimerDisplay.classList.remove("warning-pacing");
  }
}

function loadQuestion(index) {
  const q = currentQuestions[index];
  if (!q) return;

  questionNumberPill.textContent = `প্রশ্ন ${index + 1}`;
  questionTopicPill.textContent = q.category || "কনসেপ্ট প্র্যাকটিস";
  questionPromptText.innerHTML = q.question;

  const progressPercent = ((index + 1) / currentQuestions.length) * 100;
  examProgressBar.style.width = `${progressPercent}%`;
  questionProgressLabel.textContent = `প্রশ্ন ${index + 1} / ${currentQuestions.length}`;

  explanationCard.classList.add("hidden");

  // Check Bookmark state
  const bookmarks = getBookmarks();
  const isBookmarked = bookmarks.some(b => b.id === q.id);
  markReviewBtn.classList.toggle("btn-bookmarked", isBookmarked);
  markReviewBtn.textContent = isBookmarked ? "বুকমার্কড ✓" : "বুকমার্ক রাখুন";

  const savedAns = userAnswers[index] || {};
  const optionLetters = ["ক", "খ", "গ", "ঘ"];
  
  optionsContainer.className = `options-container ${isBlurModeActive ? 'blurred' : ''}`;
  optionsContainer.innerHTML = q.options.map((optText, optIdx) => {
    const isSelected = savedAns.selectedIndex === optIdx;
    const isStriked = savedAns.strikedOptions?.includes(optIdx);

    return `
      <div class="option-item ${isSelected ? 'selected' : ''} ${isStriked ? 'strikethrough' : ''}" data-idx="${optIdx}">
        <div class="option-left">
          <div class="option-marker">${optionLetters[optIdx]}</div>
          <span class="option-text">${optText}</span>
        </div>
        <button class="strike-btn" data-strike-idx="${optIdx}" title="এই অপশনটি নিশ্চিত ভুল হিসেবে কেটে দিন">
          ✕
        </button>
      </div>
    `;
  }).join("");

  optionsContainer.querySelectorAll(".option-item").forEach(item => {
    item.addEventListener("click", (e) => {
      if (e.target.closest(".strike-btn")) return;
      const selectedIdx = parseInt(item.dataset.idx);
      selectOption(selectedIdx);
    });
  });

  optionsContainer.querySelectorAll(".strike-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const strikeIdx = parseInt(btn.dataset.strikeIdx);
      toggleOptionStrike(strikeIdx);
    });
  });

  document.querySelectorAll(".btn-confidence").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.confidence === savedAns.confidence);
  });

  prevBtn.disabled = index === 0;
  if (index === currentQuestions.length - 1) {
    nextBtn.classList.add("hidden");
    finishExamBtn.classList.remove("hidden");
  } else {
    nextBtn.classList.remove("hidden");
    finishExamBtn.classList.add("hidden");
  }

  if (savedAns.selectedIndex !== undefined) {
    showExplanation(q, savedAns.selectedIndex);
  }

  // Update Desktop Question Palette
  renderQuestionPalette();

  // Trigger KaTeX render on question change
  renderMath();
}

function renderQuestionPalette() {
  const container = document.getElementById("question-palette-container");
  if (!container) return;
  const bookmarks = getBookmarks();
  
  container.innerHTML = currentQuestions.map((q, idx) => {
    const isCurrent = idx === currentQIndex;
    const isAnswered = userAnswers[idx]?.selectedIndex !== undefined;
    const isBookmarked = bookmarks.some(b => b.id === q.id);

    let statusClass = "unanswered";
    if (isCurrent) statusClass = "current";
    else if (isAnswered) statusClass = "answered";
    else if (isBookmarked) statusClass = "bookmarked";

    return `
      <button class="palette-chip ${statusClass}" data-q-idx="${idx}" title="প্রশ্ন ${idx + 1} এ যান">
        ${idx + 1}
      </button>
    `;
  }).join("");

  container.querySelectorAll(".palette-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const qIdx = parseInt(chip.dataset.qIdx);
      currentQIndex = qIdx;
      loadQuestion(currentQIndex);
    });
  });
}

function selectOption(optIndex) {
  if (!userAnswers[currentQIndex]) userAnswers[currentQIndex] = {};
  userAnswers[currentQIndex].selectedIndex = optIndex;
  if (!userAnswers[currentQIndex].confidence) userAnswers[currentQIndex].confidence = "certain";

  const q = currentQuestions[currentQIndex];
  showExplanation(q, optIndex);

  optionsContainer.querySelectorAll(".option-item").forEach((item, idx) => {
    item.classList.remove("selected", "correct", "wrong");
    if (idx === optIndex) {
      item.classList.add(idx === q.correctIndex ? "correct" : "wrong");
    } else if (idx === q.correctIndex) {
      item.classList.add("correct");
    }
  });

  if (isBlurModeActive) {
    optionsContainer.classList.remove("blurred");
  }

  renderQuestionPalette();
}

function toggleOptionStrike(optIdx) {
  if (!userAnswers[currentQIndex]) userAnswers[currentQIndex] = {};
  if (!userAnswers[currentQIndex].strikedOptions) userAnswers[currentQIndex].strikedOptions = [];

  const arr = userAnswers[currentQIndex].strikedOptions;
  const exists = arr.indexOf(optIdx);
  if (exists > -1) {
    arr.splice(exists, 1);
  } else {
    arr.push(optIdx);
  }

  loadQuestion(currentQIndex);
}

function showExplanation(q, userSelected) {
  explanationCard.classList.remove("hidden");
  explanationBodyText.innerHTML = q.explanation;

  if (q.twisted) {
    twistedQuestionBtn.parentElement.style.display = "block";
    twistedQuestionBtn.onclick = () => {
      questionPromptText.innerHTML = `<span style="color:var(--primary-magenta); font-weight:800;">[টুইস্টেড প্রশ্ন] </span>` + q.twisted.question;
      const optionLetters = ["ক", "খ", "গ", "ঘ"];
      optionsContainer.innerHTML = q.twisted.options.map((optText, optIdx) => `
        <div class="option-item ${optIdx === q.twisted.correctIndex ? 'correct' : ''}" data-idx="${optIdx}">
          <div class="option-left">
            <div class="option-marker">${optionLetters[optIdx]}</div>
            <span class="option-text">${optText}</span>
          </div>
        </div>
      `).join("");
      explanationBodyText.innerHTML = q.twisted.explanation;
      twistedQuestionBtn.parentElement.style.display = "none";
      renderMath();
    };
  } else {
    twistedQuestionBtn.parentElement.style.display = "none";
  }

  renderMath();
}

// ==============================================================================
// 3-DAY SPACED REPETITION & BOOKMARKS STORAGE
// ==============================================================================
function getRevisionBank() {
  try {
    return JSON.parse(localStorage.getItem("conceptmcq_revision_bank") || "[]");
  } catch (e) {
    return [];
  }
}

function saveToRevisionBank(wrongQuestions) {
  const currentBank = getRevisionBank();
  const now = Date.now();
  const threeDaysLater = now + (3 * 24 * 60 * 60 * 1000);

  wrongQuestions.forEach(q => {
    const existingIdx = currentBank.findIndex(item => item.id === q.id);
    if (existingIdx > -1) {
      currentBank[existingIdx].reviewDate = threeDaysLater;
      currentBank[existingIdx].attemptCount = (currentBank[existingIdx].attemptCount || 1) + 1;
    } else {
      currentBank.push({
        ...q,
        addedDate: now,
        reviewDate: threeDaysLater,
        attemptCount: 1
      });
    }
  });

  localStorage.setItem("conceptmcq_revision_bank", JSON.stringify(currentBank));
}

function getBookmarks() {
  try {
    return JSON.parse(localStorage.getItem("conceptmcq_bookmarks") || "[]");
  } catch (e) {
    return [];
  }
}

function toggleBookmark(question) {
  const bookmarks = getBookmarks();
  const idx = bookmarks.findIndex(b => b.id === question.id);
  let isAdded = false;

  if (idx > -1) {
    bookmarks.splice(idx, 1);
    isAdded = false;
    showToast("প্রশ্নটি বুকমার্ক থেকে সরানো হয়েছে", "info");
  } else {
    bookmarks.push(question);
    isAdded = true;
    showToast("প্রশ্নটি বুকমার্কে সংরক্ষিত হয়েছে ✓", "success");
  }

  localStorage.setItem("conceptmcq_bookmarks", JSON.stringify(bookmarks));
  markReviewBtn.classList.toggle("btn-bookmarked", isAdded);
  markReviewBtn.textContent = isAdded ? "বুকমার্কড ✓" : "বুকমার্ক রাখুন";

  renderQuestionPalette();
}

// ==============================================================================
// SUBMISSION & DIAGNOSTIC REPORT
// ==============================================================================
function submitExam() {
  clearInterval(examTimer);
  examView.classList.add("hidden");
  resultView.classList.remove("hidden");

  let correctCount = 0;
  let wrongCount = 0;
  let certainWrong = 0;
  let guessWrong = 0;
  let failedQuestions = [];

  currentQuestions.forEach((q, idx) => {
    const ans = userAnswers[idx];
    if (ans && ans.selectedIndex !== undefined) {
      if (ans.selectedIndex === q.correctIndex) {
        correctCount++;
      } else {
        wrongCount++;
        failedQuestions.push(q);
        if (ans.confidence === "certain") certainWrong++;
        else guessWrong++;
      }
    }
  });

  // Save to 3-day revision bank if any wrong
  if (failedQuestions.length > 0) {
    saveToRevisionBank(failedQuestions);
  }

  const penalty = wrongCount * 0.25;
  const netScore = Math.max(0, correctCount - penalty);

  document.getElementById("res-score").textContent = `${correctCount} / ${currentQuestions.length}`;
  document.getElementById("res-correct").textContent = `${correctCount}টি`;
  document.getElementById("res-wrong").textContent = `${wrongCount}টি`;
  document.getElementById("res-net").textContent = netScore.toFixed(2);

  const feedbackEl = document.getElementById("res-confidence-feedback");
  if (wrongCount === 0) {
    feedbackEl.innerHTML = `<strong>অসাধারণ পারফরম্যান্স!</strong> আপনার প্রতিটি কনসেপ্ট শতভাগ নির্ভুল ও স্পষ্ট। কোনো নেগেটিভ মার্কিং নেই।`;
  } else {
    feedbackEl.innerHTML = `
      আপনি নিশ্চিত থাকা প্রশ্নের একিউরেসি ছিল সন্তোষজনক। তবে 
      ${guessWrong > 0 ? `<strong>${guessWrong}টি আন্দাজে দাগানো</strong>` : `ভুল`} প্রশ্নের কারণে 
      <strong>-${penalty.toFixed(2)} নম্বর</strong> নেগেটিভ মার্কিং হয়েছে। 
      পরীক্ষার হলে দ্বিধাদ্বন্দ্ব থাকা প্রশ্ন বাদ দিয়ে নিশ্চিত প্রশ্নে ফোকাস করাই মেধা তালিকার শীর্ষে থাকার মূল রহস্য।
    `;
  }
}

// ==============================================================================
// MODAL & GLOBAL LISTENERS
// ==============================================================================
function renderTargetModal() {
  const targets = Object.values(TARGET_CONFIGS);
  targetsList.innerHTML = targets.map(t => {
    const isTargetActive = t.id === modalSelectedTarget;
    const hasMultipleStreams = t.streams.length > 1;

    let accordionHtml = "";
    if (hasMultipleStreams) {
      accordionHtml = `
        <div class="target-streams-accordion">
          <div class="modal-stream-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
            বিভাগ বা ইউনিট নির্বাচন করুন:
          </div>
          <div class="modal-stream-pills-row">
            ${t.streams.map(stream => {
              const isStreamActive = isTargetActive && (stream.id === modalSelectedStream);
              return `
                <button type="button" class="modal-stream-pill ${isStreamActive ? 'active' : ''}" data-target-id="${t.id}" data-stream-id="${stream.id}">
                  ${isStreamActive ? '<span class="pill-check">✓</span> ' : ''}${stream.label}
                </button>
              `;
            }).join("")}
          </div>
        </div>
      `;
    } else {
      accordionHtml = `
        <div class="target-streams-accordion">
          <div class="single-stream-badge">
            <span>✓ সকল পরীক্ষার্থীদের জন্য উন্মুক্ত পূর্ণাঙ্গ প্রস্তুতি ও মডেল টেস্ট</span>
          </div>
        </div>
      `;
    }

    return `
      <div class="target-option-card ${isTargetActive ? 'active' : ''}" data-target="${t.id}">
        <div class="target-card-top-row">
          <div class="target-card-badge">${t.codeBadge}</div>
          <div class="target-card-info">
            <h4>${t.label}</h4>
            <p>${t.desc || 'সিলেবাস ও বিষয়ভিত্তিক মডেল টেস্ট'}</p>
          </div>
          <span class="target-check">✓</span>
        </div>
        ${accordionHtml}
      </div>
    `;
  }).join("");

  // Target card click listeners
  targetsList.querySelectorAll(".target-option-card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".modal-stream-pill")) return;
      
      const targetId = card.dataset.target;
      if (modalSelectedTarget !== targetId) {
        modalSelectedTarget = targetId;
        const cfg = TARGET_CONFIGS[targetId];
        modalSelectedStream = cfg.streams[0].id;
        renderTargetModal();
      }
    });
  });

  // Modal stream pill click listeners
  targetsList.querySelectorAll(".modal-stream-pill").forEach(pill => {
    pill.addEventListener("click", (e) => {
      e.stopPropagation();
      const targetId = pill.dataset.targetId;
      const streamId = pill.dataset.streamId;
      modalSelectedTarget = targetId;
      modalSelectedStream = streamId;
      renderTargetModal();
    });
  });
}

function openTargetModal() {
  modalSelectedTarget = currentTargetId;
  modalSelectedStream = currentStreamId;
  renderTargetModal();
  targetModal.classList.remove("hidden");
}

function closeTargetModalDialog() {
  targetModal.classList.add("hidden");
}

function setupMobileDock() {
  const dockHome = document.getElementById("dock-home-btn");
  const dockStudy = document.getElementById("dock-study-btn");
  const dockRevision = document.getElementById("dock-revision-btn");
  const dockProfile = document.getElementById("dock-profile-btn");

  if (dockHome) {
    dockHome.addEventListener("click", () => {
      clearInterval(examTimer);
      examView.classList.add("hidden");
      resultView.classList.add("hidden");
      dashboardView.classList.remove("hidden");
      setActiveDockItem("dock-home-btn");
    });
  }

  if (dockStudy) {
    dockStudy.addEventListener("click", () => {
      startLiveExamBtn.click();
      setActiveDockItem("dock-study-btn");
    });
  }

  if (dockRevision) {
    dockRevision.addEventListener("click", () => {
      handleMistakeBankTrigger();
      setActiveDockItem("dock-revision-btn");
    });
  }

  if (dockProfile) {
    dockProfile.addEventListener("click", () => {
      openTargetModal();
      setActiveDockItem("dock-profile-btn");
    });
  }
}

function setActiveDockItem(btnId) {
  document.querySelectorAll(".dock-item").forEach(item => {
    item.classList.toggle("active", item.id === btnId);
  });
}

function setupKeyboardShortcuts() {
  window.addEventListener("keydown", (e) => {
    if (examView.classList.contains("hidden")) return;
    if (["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) return;

    const key = e.key.toLowerCase();
    if (["1", "ক"].includes(key)) {
      selectOption(0);
    } else if (["2", "খ"].includes(key)) {
      selectOption(1);
    } else if (["3", "গ"].includes(key)) {
      selectOption(2);
    } else if (["4", "ঘ"].includes(key)) {
      selectOption(3);
    } else if (key === "enter") {
      if (currentQIndex < currentQuestions.length - 1) {
        currentQIndex++;
        loadQuestion(currentQIndex);
      } else {
        submitExam();
      }
    } else if (key === "b") {
      const q = currentQuestions[currentQIndex];
      if (q) toggleBookmark(q);
    } else if (key === "r") {
      toggleBlurBtn.click();
    } else if (key === "s") {
      toggleStrikeBtn.click();
    }
  });
}

function handleMistakeBankTrigger() {
  const bank = getRevisionBank();
  if (bank.length === 0) {
    showToast("আপনার ভুল উত্তর ব্যাংক বর্তমানে খালি! পরীক্ষায় ভুল করা প্রশ্নগুলো এখানে জমা হবে।", "info");
  } else {
    currentQuestions = [...bank];
    document.getElementById("exam-category-badge").textContent = `ভুল উত্তর ব্যাংক (${bank.length}টি প্রশ্ন)`;
    currentExamMode = "mistake_bank";
    startExamSession(10 * 60);
    showToast(`ভুল উত্তর ব্যাংক থেকে ${bank.length}টি প্রশ্ন লোড করা হয়েছে`, "success");
  }
}

function handleBookmarksTrigger() {
  const bookmarks = getBookmarks();
  if (bookmarks.length === 0) {
    showToast("আপনার কোনো বুকমার্ক করা প্রশ্ন নেই! পড়ার সময় বুকমার্ক আইকনে ক্লিক করে সংরক্ষণ করুন।", "info");
  } else {
    currentQuestions = [...bookmarks];
    document.getElementById("exam-category-badge").textContent = `বুকমার্ক প্রশ্নসমূহ (${bookmarks.length}টি)`;
    currentExamMode = "bookmarks";
    startExamSession(10 * 60);
    showToast(`বুকমার্ক থেকে ${bookmarks.length}টি প্রশ্ন লোড করা হয়েছে`, "success");
  }
}

// ==============================================================================
// CUSTOM CONCEPT & CHAPTER QUIZ BUILDER LOGIC
// ==============================================================================
function openCustomQuizModal(preselectedSubjectId = null) {
  const target = TARGET_CONFIGS[currentTargetId] || TARGET_CONFIGS.ssc;
  const currentSubjects = target.subjects[currentStreamId] || target.subjects[target.streams[0]?.id] || [];

  const subjectList = [];
  currentSubjects.forEach(s => {
    if (SUBJECT_CHAPTERS_MAP[s.id] && !subjectList.some(item => item.id === s.id)) {
      subjectList.push({ id: s.id, name: s.name });
    }
  });
  Object.keys(SUBJECT_CHAPTERS_MAP).forEach(id => {
    if (!subjectList.some(item => item.id === id)) {
      subjectList.push({ id, name: SUBJECT_CHAPTERS_MAP[id].name });
    }
  });

  customSubjectSelect.innerHTML = subjectList.map(s => `
    <option value="${s.id}">${s.name}</option>
  `).join("");

  const chosenSubId = (preselectedSubjectId && SUBJECT_CHAPTERS_MAP[preselectedSubjectId])
    ? preselectedSubjectId
    : (subjectList[0]?.id || "general_math");

  customSubjectSelect.value = chosenSubId;
  updateChaptersForSubject(chosenSubId);

  customQuizModal.classList.remove("hidden");
}

function updateChaptersForSubject(subjectId) {
  const subData = SUBJECT_CHAPTERS_MAP[subjectId];
  if (!subData || !subData.chapters || subData.chapters.length === 0) {
    customChapterSelect.innerHTML = `<option value="all">সকল অধ্যায় (কমন)</option>`;
    customConceptSelect.innerHTML = `<option value="all">সকল কনসেপ্ট</option>`;
    return;
  }

  customChapterSelect.innerHTML = subData.chapters.map(ch => `
    <option value="${ch.id}">${ch.title}</option>
  `).join("");

  updateConceptsForChapter(subjectId, subData.chapters[0].id);
}

function updateConceptsForChapter(subjectId, chapterId) {
  const subData = SUBJECT_CHAPTERS_MAP[subjectId];
  if (!subData) return;

  const chapter = subData.chapters.find(c => c.id === chapterId);
  if (!chapter || !chapter.concepts || chapter.concepts.length === 0) {
    customConceptSelect.innerHTML = `<option value="all">অধ্যায়ের সকল কনসেপ্ট</option>`;
    return;
  }

  customConceptSelect.innerHTML = chapter.concepts.map(con => `
    <option value="${con.id}">${con.title}</option>
  `).join("");
}

function closeCustomQuizModalDialog() {
  customQuizModal.classList.add("hidden");
}

function startCustomQuizFromSelection() {
  const subId = customSubjectSelect.value;
  const chId = customChapterSelect.value;
  const conId = customConceptSelect.value;

  const subData = SUBJECT_CHAPTERS_MAP[subId];
  const subName = subData?.name || "কাস্টম প্র্যাকটিস";
  const chData = subData?.chapters?.find(c => c.id === chId);
  const chName = chData?.title || "অধ্যায় কুইজ";
  const conData = chData?.concepts?.find(c => c.id === conId);
  const conName = conData?.title || "";

  // Filtering Hierarchy: Concept -> Chapter -> Subject -> Fallback
  let filtered = [];
  if (conId && conId !== "all") {
    filtered = ALL_SAMPLE_QUESTIONS.filter(q => q.subjectId === subId && q.conceptId === conId);
  }
  if (filtered.length === 0 && chId && chId !== "all") {
    filtered = ALL_SAMPLE_QUESTIONS.filter(q => q.subjectId === subId && q.chapterId === chId);
  }
  if (filtered.length === 0) {
    filtered = ALL_SAMPLE_QUESTIONS.filter(q => q.subjectId === subId);
  }
  if (filtered.length === 0) {
    filtered = [...ALL_SAMPLE_QUESTIONS];
  }

  currentQuestions = [...filtered].sort(() => 0.5 - Math.random()).slice(0, selectedQuizCount);

  // Set Exam category badge & mode
  document.getElementById("exam-category-badge").textContent = `${subName} • ${chName}`;
  currentExamMode = "custom_concept";

  closeCustomQuizModalDialog();
  startExamSession(selectedQuizDurationMins * 60);

  const conceptNote = (conId && conId !== "all") ? ` (${conName})` : "";
  showToast(`${subName} • ${chName}${conceptNote} এর ওপর কুইজ শুরু হয়েছে!`, "success");
}

function runRandomRapidQuiz() {
  const shuffled = [...ALL_SAMPLE_QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, 5);
  currentQuestions = shuffled;
  document.getElementById("exam-category-badge").textContent = "র‍্যাপিড ফায়ার কুইজ (৫ মিনিট)";
  currentExamMode = "rapid";
  startExamSession(5 * 60);
  showToast("র‍্যাপিড ফায়ার শুরু! ৫ মিনিটে ৫টি প্রশ্ন সমাধান করুন", "warning");
}

function handleRapidQuizTrigger() {
  openCustomQuizModal();
}

// ==============================================================================
// VOCABULARY MULTI-PAGE ROUTER & CONTROLLERS
// Routes: /vocabulary, /vocabulary/units, /vocabulary/units/:unitId
// ==============================================================================

let currentVocabUnitId = null;
let currentVocabUnitMode = 'browse'; // browse | flashcards | quiz | mistakes
let currentFlashcardIndex = 0;
let isFlashcardFlipped = false;

// Central SPA View Switcher
function showPage(viewId) {
  const views = [
    "dashboard-view",
    "exam-view",
    "result-view",
    "vocab-home-view",
    "vocab-units-view",
    "vocab-unit-view",
    "vocab-practice-view"
  ];

  views.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (id === viewId) {
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    }
  });

  window.scrollTo({ top: 0, behavior: "instant" });
}

// Router dispatcher
function handleRoute(pathname) {
  const cleanPath = (pathname || window.location.pathname).replace(/\/index\.html$/, "") || "/";

  if (cleanPath === "/" || cleanPath === "") {
    showPage("dashboard-view");
    return;
  }

  if (cleanPath === "/vocabulary") {
    if (currentTargetId !== "admission" || currentStreamId !== "b_unit") {
      currentTargetId = "admission";
      currentStreamId = "b_unit";
      localStorage.setItem("conceptmcq_target", "admission");
      localStorage.setItem("conceptmcq_stream", "b_unit");
      renderTargetUI();
    }
    renderVocabHomePage();
    showPage("vocab-home-view");
    return;
  }

  if (cleanPath === "/vocabulary/units") {
    renderVocabUnitsListPage();
    showPage("vocab-units-view");
    return;
  }

  // Route: /vocabulary/units/:unitId/practice (Practice Page)
  const practiceMatch = cleanPath.match(/^\/vocabulary\/units\/([^/]+)\/practice$/);
  if (practiceMatch) {
    const rawUnitId = decodeURIComponent(practiceMatch[1]);
    renderVocabUnitPracticePage(rawUnitId);
    showPage("vocab-practice-view");
    return;
  }

  const unitMatch = cleanPath.match(/^\/vocabulary\/units\/([^/]+)$/);
  if (unitMatch) {
    const rawUnitId = decodeURIComponent(unitMatch[1]);
    renderVocabUnitDetailPage(rawUnitId);
    showPage("vocab-unit-view");
    return;
  }

  // Fallback to dashboard
  showPage("dashboard-view");
}

function navigateTo(path, push = true) {
  if (push && window.location.pathname !== path) {
    window.history.pushState({ path }, "", path);
  }
  handleRoute(path);
}

// Page 1: Vocabulary Home (/vocabulary)
function renderVocabHomePage() {
  const lessonUnits = getVocabLessonUnits();
  const totalUnits = lessonUnits.length;
  const totalWords = VOCAB_ITEMS.length;

  const mistakes = getVocabMistakes();
  
  const unitsCountEl = document.getElementById("vocab-home-units-count");
  if (unitsCountEl) unitsCountEl.textContent = `${totalUnits}টি ইউনিট`;

  const wordsCountEl = document.getElementById("vocab-home-words-count");
  if (wordsCountEl) wordsCountEl.textContent = `${totalWords}টি শব্দ`;

  const mistakesCountEl = document.getElementById("vocab-home-mistakes-count");
  if (mistakesCountEl) mistakesCountEl.textContent = `${mistakes.length}টি ভুল শব্দ`;

  const statsProgressEl = document.getElementById("vocab-home-stats-progress");
  if (statsProgressEl) {
    const masteredCount = getMasteredVocabCount();
    const pct = totalWords > 0 ? Math.round((masteredCount / totalWords) * 100) : 0;
    statsProgressEl.textContent = `${pct}% সম্পন্ন`;
  }
}

// Page 2: Unit List Page (/vocabulary/units)
// Lists lesson units from vocab_items ordered by sort_order and then lesson_unit
// Shows each unit as a compact card with unit name, word count, progress bar
// DOES NOT LOAD WORDS HERE!
function renderVocabUnitsListPage() {
  const container = document.getElementById("vocab-compact-units-list");
  if (!container) return;

  const lessonUnits = getVocabLessonUnits();

  if (lessonUnits.length === 0) {
    container.innerHTML = `
      <div class="empty-state-card" style="padding: 24px; text-align: center; color: var(--text-muted);">
        <p>বর্তমানে কোনো লেসন ইউনিট পাওয়া যায়নি।</p>
      </div>
    `;
    return;
  }

  container.innerHTML = lessonUnits.map(unit => {
    const unitSlug = unit.lesson_unit.toLowerCase().replace(/\s+/g, "_");
    const mastered = getMasteredCountForUnit(unit.lesson_unit);
    const total = unit.words.length;
    const progressPct = total > 0 ? Math.round((mastered / total) * 100) : 0;

    return `
      <div class="vocab-compact-unit-card" data-unit-slug="${unitSlug}" data-unit-name="${unit.lesson_unit}">
        <div class="vcu-top-row">
          <div class="vcu-title-wrap">
            <span class="vcu-sort-badge">ক্রম #${unit.sort_order}</span>
            <h3 class="vcu-unit-name">${unit.lesson_unit}</h3>
          </div>
          <span class="vcu-count-badge">${total} Words</span>
        </div>

        <div class="vcu-progress-section">
          <div class="vcu-progress-header">
            <span class="vcu-progress-label">অগ্রগতি</span>
            <span class="vcu-progress-pct">${progressPct}% সম্পন্ন</span>
          </div>
          <div class="vcu-progress-bar">
            <div class="vcu-progress-fill" style="width: ${progressPct}%;"></div>
          </div>
        </div>

        <div class="vcu-bottom-row">
          <span class="vcu-features-hint">📖 শব্দ দেখা • 🗂️ ফ্ল্যাশকার্ড • ⚡ কুইজ</span>
          <span class="vcu-action-arrow">প্রবেশ করুন →</span>
        </div>
      </div>
    `;
  }).join("");

  container.querySelectorAll(".vocab-compact-unit-card").forEach(card => {
    card.addEventListener("click", () => {
      const slug = card.dataset.unitSlug;
      navigateTo(`/vocabulary/units/${slug}`);
    });
  });
}

// Page 3: Unit Detail Page (/vocabulary/units/:unitId)
// Words for a unit should be loaded only when a mode is selected, not when the unit list loads.
function renderVocabUnitDetailPage(unitId) {
  const lessonUnits = getVocabLessonUnits();
  
  const unit = lessonUnits.find(u => 
    u.lesson_unit.toLowerCase().replace(/\s+/g, "_") === unitId.toLowerCase() ||
    u.lesson_unit.toLowerCase() === unitId.toLowerCase()
  ) || lessonUnits[0];

  if (!unit) {
    navigateTo("/vocabulary/units");
    return;
  }

  currentVocabUnitId = unit.lesson_unit;
  currentFlashcardIndex = 0;
  isFlashcardFlipped = false;

  const breadcrumbTitle = document.getElementById("vocab-unit-breadcrumb-title");
  if (breadcrumbTitle) breadcrumbTitle.textContent = unit.lesson_unit;

  const headerTitle = document.getElementById("vocab-unit-header-title");
  if (headerTitle) headerTitle.textContent = unit.lesson_unit;

  const headerCount = document.getElementById("vocab-unit-header-count");
  if (headerCount) headerCount.textContent = `${unit.words.length}টি শব্দ`;

  const modeSelector = document.getElementById("vocab-modes-selector");
  if (modeSelector) {
    modeSelector.querySelectorAll(".vocab-mode-card").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.mode === currentVocabUnitMode);
      btn.onclick = () => {
        modeSelector.querySelectorAll(".vocab-mode-card").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentVocabUnitMode = btn.dataset.mode;
        // Words are loaded ONLY when a mode is selected:
        renderVocabUnitModeContent(unit, currentVocabUnitMode);
      };
    });
  }

  // Render the currently selected mode (defaults to 'browse')
  renderVocabUnitModeContent(unit, currentVocabUnitMode);
}

// Mode content renderer (Lazy loads words only when mode is selected)
function renderVocabUnitModeContent(unit, mode) {
  const container = document.getElementById("vocab-unit-mode-content");
  if (!container) return;

  if (mode === "browse") {
    // Mode 1: "শব্দ দেখা" - Renders the exact existing word card design
    container.innerHTML = `
      <div class="vocab-words-grid">
        ${unit.words.map(w => `
          <div class="vocab-word-card" id="card-${w.id}">
            <div class="vocab-card-top">
              <div class="vocab-headword-wrap">
                <span class="vocab-headword">${w.word}</span>
                ${w.part_of_speech ? `<span class="vocab-pos">(${w.part_of_speech})</span>` : ''}
              </div>
              <span class="vocab-order-tag">#${w.sort_order}</span>
            </div>

            <div class="vocab-meaning-bn">${w.meaning_bn}</div>
            ${w.meaning_en ? `<div class="vocab-meaning-en">${w.meaning_en}</div>` : ''}

            ${(w.synonyms && w.synonyms.length) ? `
              <div class="vocab-meta-row">
                <span class="vocab-meta-label">Synonyms:</span>
                <div class="vocab-chips-wrap">
                  ${w.synonyms.map(s => `<span class="vocab-chip syn-chip">${s}</span>`).join("")}
                </div>
              </div>
            ` : ''}

            ${(w.antonyms && w.antonyms.length) ? `
              <div class="vocab-meta-row">
                <span class="vocab-meta-label">Antonyms:</span>
                <div class="vocab-chips-wrap">
                  ${w.antonyms.map(a => `<span class="vocab-chip ant-chip">${a}</span>`).join("")}
                </div>
              </div>
            ` : ''}

            ${w.example ? `
              <div class="vocab-example-box">
                <strong>Example:</strong> "${w.example}"
              </div>
            ` : ''}

            ${w.source ? `
              <div class="vocab-source-meta">
                <span>📌 ${w.source}</span>
              </div>
            ` : ''}
          </div>
        `).join("")}
      </div>
      <div class="vocab-mode-footer-action">
        <button class="vocab-practice-link-btn" id="start-unit-practice-btn" style="width: 100%; padding: 13px; font-size: 14px; font-weight: 700; background: var(--bg-card); border: 1.5px solid var(--primary-border); color: var(--primary-magenta); border-radius: 12px; cursor: pointer; margin-bottom: 10px; font-family: inherit;">
          🎯 ${unit.lesson_unit} প্রশ্ন প্র্যাকটিস পেজ →
        </button>
        <button class="vocab-quiz-btn" id="start-unit-quiz-btn" style="width: 100%; padding: 14px; font-size: 15px;">
          ⚡ ${unit.lesson_unit} কুইজ শুরু করুন
        </button>
      </div>
    `;

    const practiceNavBtn = document.getElementById("start-unit-practice-btn");
    if (practiceNavBtn) {
      practiceNavBtn.addEventListener("click", () => {
        const uId = unit.lesson_unit.toLowerCase().replace(/\s+/g, "_");
        navigateTo(`/vocabulary/units/${uId}/practice`);
      });
    }

    const quizBtn = document.getElementById("start-unit-quiz-btn");
    if (quizBtn) {
      quizBtn.addEventListener("click", () => {
        const uId = unit.lesson_unit.toLowerCase().replace(/\s+/g, "_");
        startVocabularyQuizForUnit(unit.lesson_unit, uId);
      });
    }
  } else if (mode === "flashcards") {
    // Mode 2: "ফ্ল্যাশকার্ড"
    renderFlashcardViewer(unit, container);
  } else if (mode === "quiz") {
    // Mode 3: "কুইজ"
    container.innerHTML = `
      <div class="vocab-quiz-intro-card">
        <div class="vqi-icon">⚡</div>
        <h3 class="vqi-title">${unit.lesson_unit} কুইজ প্র্যাকটিস</h3>
        <p class="vqi-desc">এই ইউনিটের শব্দার্থ, সিনোনিম ও অ্যান্টোনিম ভিত্তিক মডেল টেস্ট দিয়ে আপনার প্রস্তুতি যাচাই করুন।</p>
        <button class="vocab-quiz-btn" id="direct-quiz-start-btn" style="padding: 14px 28px; font-size: 15px; margin-top: 14px;">
          পরীক্ষা শুরু করুন (১০ মিনিট) →
        </button>
      </div>
    `;
    const directQuizBtn = document.getElementById("direct-quiz-start-btn");
    if (directQuizBtn) {
      directQuizBtn.addEventListener("click", () => {
        const uId = unit.lesson_unit.toLowerCase().replace(/\s+/g, "_");
        startVocabularyQuizForUnit(unit.lesson_unit, uId);
      });
    }
  } else if (mode === "mistakes") {
    // Mode 4: "এই Unit-এর ভুল শব্দ"
    const mistakes = getVocabMistakesForUnit(unit.lesson_unit);
    if (mistakes.length === 0) {
      container.innerHTML = `
        <div class="vocab-empty-mistakes">
          <div class="vem-icon">🎉</div>
          <h4>এই ইউনিটে কোনো ভুল শব্দ নেই!</h4>
          <p>আপনি ${unit.lesson_unit}-এর সবগুলো শব্দ চমৎকারভাবে আয়ত্ত করেছেন অথবা এখনও কুইজ দেননি।</p>
          <button class="vocab-quiz-btn" id="mistake-start-quiz-btn" style="margin-top: 12px;">
            ${unit.lesson_unit} কুইজ দিয়ে যাচাই করুন →
          </button>
        </div>
      `;
      const btn = document.getElementById("mistake-start-quiz-btn");
      if (btn) {
        btn.addEventListener("click", () => {
          const uId = unit.lesson_unit.toLowerCase().replace(/\s+/g, "_");
          startVocabularyQuizForUnit(unit.lesson_unit, uId);
        });
      }
    } else {
      container.innerHTML = `
        <div class="vocab-words-grid">
          ${mistakes.map(w => `
            <div class="vocab-word-card vocab-mistake-card" id="card-${w.id}">
              <div class="vocab-card-top">
                <span class="vocab-headword">${w.word}</span>
                <span class="vocab-mistake-badge">ভুল উত্তর হয়েছিল</span>
              </div>
              <div class="vocab-meaning-bn">${w.meaning_bn}</div>
              ${w.meaning_en ? `<div class="vocab-meaning-en">${w.meaning_en}</div>` : ''}
              ${w.example ? `<div class="vocab-example-box">"${w.example}"</div>` : ''}
            </div>
          `).join("")}
        </div>
      `;
    }
  }
}

// Interactive Flashcard Viewer
function renderFlashcardViewer(unit, container) {
  if (!unit.words || unit.words.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: var(--text-muted);">শব্দ পাওয়া যায়নি।</p>`;
    return;
  }

  const currentWord = unit.words[currentFlashcardIndex] || unit.words[0];
  const total = unit.words.length;

  container.innerHTML = `
    <div class="vocab-flashcard-wrapper">
      <div class="flashcard-status-bar">
        <span>শব্দ ${currentFlashcardIndex + 1} / ${total}</span>
        <span class="flashcard-hint">ট্যাপ করে অর্থ দেখুন</span>
      </div>

      <div class="vocab-flashcard ${isFlashcardFlipped ? 'flipped' : ''}" id="current-flashcard">
        <!-- Front side: Word & POS -->
        <div class="flashcard-front">
          <span class="fc-headword">${currentWord.word}</span>
          ${currentWord.part_of_speech ? `<span class="fc-pos">(${currentWord.part_of_speech})</span>` : ''}
          <span class="fc-tap-prompt">অর্থ ও বিস্তারিত দেখতে কার্ডে ট্যাপ করুন 👆</span>
        </div>

        <!-- Back side: Bengali meaning, English meaning, synonyms, example -->
        <div class="flashcard-back">
          <div class="fc-meaning-bn">${currentWord.meaning_bn}</div>
          ${currentWord.meaning_en ? `<div class="fc-meaning-en">${currentWord.meaning_en}</div>` : ''}
          ${(currentWord.synonyms && currentWord.synonyms.length) ? `
            <div class="fc-synonyms">
              <strong>Synonyms:</strong> ${currentWord.synonyms.join(", ")}
            </div>
          ` : ''}
          ${currentWord.example ? `
            <div class="fc-example">
              "${currentWord.example}"
            </div>
          ` : ''}
        </div>
      </div>

      <div class="flashcard-controls">
        <button type="button" class="fc-nav-btn" id="fc-prev-btn" ${currentFlashcardIndex === 0 ? 'disabled' : ''}>
          ← পূর্ববর্তী
        </button>
        <button type="button" class="fc-flip-btn" id="fc-flip-btn">
          ${isFlashcardFlipped ? 'সামনে দেখুন' : 'অর্থ উল্টান 🔄'}
        </button>
        <button type="button" class="fc-nav-btn" id="fc-next-btn" ${currentFlashcardIndex === total - 1 ? 'disabled' : ''}>
          পরবর্তী →
        </button>
      </div>
    </div>
  `;

  const cardEl = document.getElementById("current-flashcard");
  if (cardEl) {
    cardEl.addEventListener("click", () => {
      isFlashcardFlipped = !isFlashcardFlipped;
      cardEl.classList.toggle("flipped", isFlashcardFlipped);
      const flipBtn = document.getElementById("fc-flip-btn");
      if (flipBtn) flipBtn.textContent = isFlashcardFlipped ? 'সামনে দেখুন' : 'অর্থ উল্টান 🔄';
    });
  }

  const flipBtn = document.getElementById("fc-flip-btn");
  if (flipBtn) {
    flipBtn.addEventListener("click", () => {
      isFlashcardFlipped = !isFlashcardFlipped;
      if (cardEl) cardEl.classList.toggle("flipped", isFlashcardFlipped);
      flipBtn.textContent = isFlashcardFlipped ? 'সামনে দেখুন' : 'অর্থ উল্টান 🔄';
    });
  }

  const prevBtn = document.getElementById("fc-prev-btn");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentFlashcardIndex > 0) {
        currentFlashcardIndex--;
        isFlashcardFlipped = false;
        renderFlashcardViewer(unit, container);
      }
    });
  }

  const nextBtn = document.getElementById("fc-next-btn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentFlashcardIndex < total - 1) {
        currentFlashcardIndex++;
        isFlashcardFlipped = false;
        renderFlashcardViewer(unit, container);
      }
    });
  }
}

// Helpers for progress & mistakes
function getVocabMistakes() {
  const bank = getRevisionBank();
  return bank.filter(q => q.subjectId === "vocabulary");
}

function getVocabMistakesForUnit(unitName) {
  const mistakes = getVocabMistakes();
  return mistakes.filter(q => q.category && q.category.includes(unitName));
}

function getMasteredVocabCount() {
  const saved = localStorage.getItem("conceptmcq_vocab_mastered");
  if (!saved) return 0;
  try {
    return JSON.parse(saved).length || 0;
  } catch (e) {
    return 0;
  }
}

function getMasteredCountForUnit(unitName) {
  return 0; // Default until user completes quizzes
}

function startVocabularyQuizForUnit(unitName, unitId) {
  let unitQuestions = ALL_SAMPLE_QUESTIONS.filter(q => q.subjectId === "vocabulary" && (q.chapterId === unitId || q.category.includes(unitName)));
  
  if (unitQuestions.length === 0) {
    unitQuestions = ALL_SAMPLE_QUESTIONS.filter(q => q.subjectId === "vocabulary");
  }

  if (unitQuestions.length === 0) {
    showToast(`${unitName} এর জন্য প্র্যাকটিস কুইজ প্রস্তুত হচ্ছে...`, "info");
    return;
  }

  currentQuestions = [...unitQuestions];
  document.getElementById("exam-category-badge").textContent = `Vocabulary • ${unitName} (${unitQuestions.length}টি প্রশ্ন)`;
  currentExamMode = "standard";
  startExamSession(10 * 60);
  showToast(`Vocabulary ${unitName} কুইজ শুরু হয়েছে!`, "success");
}

// ==============================================================================
// VOCABULARY UNIT PRACTICE PAGE (/vocabulary/units/:unitId/practice)
// ==============================================================================
let vocabPracticeFilter = "all";
let vocabPracticeRevealedQuestions = new Set();

function getVocabAnswersHiddenState() {
  const stored = localStorage.getItem("conceptmcq_vocab_hide_answers");
  return stored !== null ? stored === "true" : true; // Default: hidden ("উত্তর অফ")
}

function setVocabAnswersHiddenState(hidden) {
  localStorage.setItem("conceptmcq_vocab_hide_answers", hidden ? "true" : "false");
}

function getVocabReadQuestions() {
  try {
    return new Set(JSON.parse(localStorage.getItem("conceptmcq_vocab_read_questions") || "[]"));
  } catch (e) {
    return new Set();
  }
}

function markVocabQuestionRead(qId) {
  const set = getVocabReadQuestions();
  set.add(qId);
  localStorage.setItem("conceptmcq_vocab_read_questions", JSON.stringify([...set]));
}

function getVocabFlaggedQuestions() {
  try {
    return new Set(JSON.parse(localStorage.getItem("conceptmcq_vocab_flagged_questions") || "[]"));
  } catch (e) {
    return new Set();
  }
}

function toggleVocabQuestionFlag(qId) {
  const set = getVocabFlaggedQuestions();
  if (set.has(qId)) {
    set.delete(qId);
  } else {
    set.add(qId);
  }
  localStorage.setItem("conceptmcq_vocab_flagged_questions", JSON.stringify([...set]));
}

function renderVocabUnitPracticePage(unitId) {
  const lessonUnits = getVocabLessonUnits();
  const unit = lessonUnits.find(u => 
    u.lesson_unit.toLowerCase().replace(/\s+/g, "_") === unitId.toLowerCase() ||
    u.lesson_unit.toLowerCase() === unitId.toLowerCase()
  ) || lessonUnits[0];

  if (!unit) {
    navigateTo("/vocabulary/units");
    return;
  }

  const unitSlug = unit.lesson_unit.toLowerCase().replace(/\s+/g, "_");

  // Breadcrumb & titles
  const bcUnit = document.getElementById("vocab-practice-breadcrumb-unit");
  if (bcUnit) {
    bcUnit.textContent = unit.lesson_unit;
    bcUnit.style.cursor = "pointer";
    bcUnit.onclick = () => navigateTo(`/vocabulary/units/${unitSlug}`);
  }

  const headTitle = document.getElementById("vocab-practice-header-title");
  if (headTitle) headTitle.textContent = `${unit.lesson_unit} প্র্যাকটিস`;

  // Top bar back button: navigate back to /vocabulary/units/:unitId
  const backBtn = document.getElementById("vocab-practice-back-btn");
  if (backBtn) {
    backBtn.onclick = () => navigateTo(`/vocabulary/units/${unitSlug}`);
  }

  // Get Questions for this unit
  const questions = getUnitPracticeQuestions(unit);

  const qCountBadge = document.getElementById("vocab-practice-questions-count");
  if (qCountBadge) qCountBadge.textContent = `${questions.length}টি প্রশ্ন`;

  // Progress Bar updating
  function updatePracticeProgressBar() {
    const readSet = getVocabReadQuestions();
    const completedCount = questions.filter(q => readSet.has(q.id)).length;
    const total = questions.length;
    const pct = total > 0 ? Math.round((completedCount / total) * 100) : 0;

    const pText = document.getElementById("vocab-practice-progress-text");
    if (pText) pText.textContent = `${completedCount}/${total} সম্পন্ন (${pct}%)`;

    const pFill = document.getElementById("vocab-practice-progress-fill");
    if (pFill) pFill.style.width = `${pct}%`;
  }

  // Toggle Answers Chip logic
  const toggleBtn = document.getElementById("vocab-toggle-answers-btn");
  const toggleLabel = document.getElementById("vocab-toggle-answers-label");
  const indicatorDot = document.getElementById("vocab-toggle-indicator-dot");

  function updateToggleChipUI() {
    const isHidden = getVocabAnswersHiddenState();
    if (toggleLabel) {
      toggleLabel.textContent = isHidden ? "উত্তর অফ" : "উত্তর অন";
    }
    if (toggleBtn) {
      toggleBtn.classList.toggle("answers-off", isHidden);
      toggleBtn.classList.toggle("answers-on", !isHidden);
      toggleBtn.title = isHidden ? "উত্তর ও অপশন বর্তমানে লুকানো (ট্যাপ করে অন করুন)" : "উত্তর ও অপশন দৃশ্যমান (ট্যাপ করে অফ করুন)";
    }
    if (indicatorDot) {
      indicatorDot.className = `toggle-indicator-dot ${isHidden ? 'off' : 'on'}`;
    }
  }

  if (toggleBtn) {
    updateToggleChipUI();
    toggleBtn.onclick = (e) => {
      e.stopPropagation();
      const currentHidden = getVocabAnswersHiddenState();
      const newHidden = !currentHidden;
      setVocabAnswersHiddenState(newHidden);
      if (newHidden) {
        // Switching to "উত্তর অফ" resets temporary reveals so questions start hidden until tapped
        vocabPracticeRevealedQuestions.clear();
      }
      updateToggleChipUI();
      renderQuestionsList();
    };
  }

  // Filter Chips setup
  const filtersContainer = document.getElementById("vocab-practice-filters");
  if (filtersContainer) {
    filtersContainer.querySelectorAll(".vocab-filter-chip[data-filter]").forEach(chip => {
      chip.classList.toggle("active", chip.dataset.filter === vocabPracticeFilter);
      chip.onclick = () => {
        filtersContainer.querySelectorAll(".vocab-filter-chip[data-filter]").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        vocabPracticeFilter = chip.dataset.filter;
        renderQuestionsList();
      };
    });
  }

  // Render Questions list
  function renderQuestionsList() {
    const container = document.getElementById("vocab-practice-questions-list");
    if (!container) return;

    const readSet = getVocabReadQuestions();
    const bookmarks = getBookmarks();
    const mistakeBank = getVocabMistakes();
    const flaggedSet = getVocabFlaggedQuestions();
    const isAnswersHidden = getVocabAnswersHiddenState();

    // Filter questions based on active filter
    let filtered = questions.filter(q => {
      if (vocabPracticeFilter === "unread") return !readSet.has(q.id);
      if (vocabPracticeFilter === "read") return readSet.has(q.id);
      if (vocabPracticeFilter === "bookmarked") return bookmarks.some(b => b.id === q.id);
      if (vocabPracticeFilter === "mistakes") return mistakeBank.some(m => m.id === q.id);
      if (vocabPracticeFilter === "flagged") return flaggedSet.has(q.id);
      return true; // "all"
    });

    updatePracticeProgressBar();

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state-card" style="padding: 32px 16px; text-align: center; color: var(--text-muted); background: var(--bg-card); border: 1.5px solid var(--border-light); border-radius: 16px;">
          <p style="font-size: 15px; margin: 0;">এই ফিল্টারে কোনো প্রশ্ন পাওয়া যায়নি।</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map((q, idx) => {
      const isBookmarked = bookmarks.some(b => b.id === q.id);
      const isFlagged = flaggedSet.has(q.id);
      const isRevealed = vocabPracticeRevealedQuestions.has(q.id);
      const shouldHide = isAnswersHidden && !isRevealed;

      return `
        <div class="vocab-practice-q-card ${shouldHide ? 'is-collapsed-answer' : 'is-revealed-answer'}" id="vpq-${q.id}" data-qid="${q.id}">
          <div class="vpq-top-row">
            <div class="vpq-meta-left">
              <span class="vpq-q-num">প্রশ্ন ${idx + 1}</span>
              <span class="vpq-category-tag">${q.category || unit.lesson_unit}</span>
            </div>
            <div class="vpq-meta-actions">
              <button type="button" class="vpq-action-icon-btn vpq-flag-btn ${isFlagged ? 'active' : ''}" data-qid="${q.id}" title="ফ্ল্যাগ করুন">
                🚩
              </button>
              <button type="button" class="vpq-action-icon-btn vpq-bookmark-btn ${isBookmarked ? 'active' : ''}" data-qid="${q.id}" title="বুকমার্ক করুন">
                🔖
              </button>
            </div>
          </div>

          <div class="vpq-question-text">${q.question}</div>

          <!-- Tap prompt when in "উত্তর অফ" state and not yet revealed -->
          <div class="vpq-hidden-tap-prompt ${shouldHide ? '' : 'hidden'}">
            <span>👆 ট্যাপ করে অপশন, উত্তর ও ব্যাখ্যা দেখুন</span>
          </div>

          <!-- Options & Explanation (Hidden when "উত্তর অফ" until tapped) -->
          <div class="vpq-answer-section ${shouldHide ? 'hidden-answer' : ''}">
            <div class="vpq-options-grid">
              ${q.options.map((opt, oIdx) => `
                <div class="vpq-option ${oIdx === q.correctIndex ? 'correct-option' : ''}">
                  <span class="vpq-opt-letter">${String.fromCharCode(65 + oIdx)}</span>
                  <span class="vpq-opt-text">${opt}</span>
                  ${oIdx === q.correctIndex ? '<span class="vpq-correct-badge">✓ সঠিক উত্তর</span>' : ''}
                </div>
              `).join("")}
            </div>

            <div class="vpq-explanation-card">
              <div class="vpq-exp-header">
                <span class="vpq-exp-icon">💡</span>
                <strong>বিস্তারিত ব্যাখ্যা ও নোটস</strong>
              </div>
              <div class="vpq-exp-body">${q.explanation}</div>
            </div>
          </div>
        </div>
      `;
    }).join("");

    // Attach card tap listeners for revealing in "উত্তর অফ" state
    container.querySelectorAll(".vocab-practice-q-card").forEach(card => {
      const qId = card.dataset.qid;

      card.addEventListener("click", (e) => {
        // If clicking bookmark or flag buttons, do not trigger question reveal
        if (e.target.closest(".vpq-action-icon-btn")) return;

        const currentAnswersHidden = getVocabAnswersHiddenState();
        if (currentAnswersHidden) {
          // If answers are hidden, tapping reveals them for that question only!
          if (!vocabPracticeRevealedQuestions.has(qId)) {
            vocabPracticeRevealedQuestions.add(qId);
            markVocabQuestionRead(qId);
            updatePracticeProgressBar();

            // Reveal answers for this specific card
            card.classList.remove("is-collapsed-answer");
            card.classList.add("is-revealed-answer");
            const answerSec = card.querySelector(".vpq-answer-section");
            if (answerSec) answerSec.classList.remove("hidden-answer");
            const tapPrompt = card.querySelector(".vpq-hidden-tap-prompt");
            if (tapPrompt) tapPrompt.classList.add("hidden");
          }
        }
      });

      // Bookmark action
      const bmBtn = card.querySelector(".vpq-bookmark-btn");
      if (bmBtn) {
        bmBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          const targetQ = questions.find(item => item.id === qId);
          if (targetQ) {
            toggleBookmark(targetQ);
            renderQuestionsList();
          }
        });
      }

      // Flag action
      const flagBtn = card.querySelector(".vpq-flag-btn");
      if (flagBtn) {
        flagBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          toggleVocabQuestionFlag(qId);
          renderQuestionsList();
        });
      }
    });

    renderMath();
  }

  // Initial render
  renderQuestionsList();
}

function getUnitPracticeQuestions(unit) {
  const unitSlug = unit.lesson_unit.toLowerCase().replace(/\s+/g, "_");
  const directQuestions = ALL_SAMPLE_QUESTIONS.filter(q => 
    q.subjectId === "vocabulary" && (
      q.chapterId === unitSlug ||
      q.chapterId === unit.lesson_unit.toLowerCase() ||
      (q.category && q.category.toLowerCase().includes(unit.lesson_unit.toLowerCase()))
    )
  );

  const existingConceptIds = new Set(directQuestions.map(q => q.conceptId || q.id));
  const generatedQuestions = [];

  unit.words.forEach((w) => {
    if (!existingConceptIds.has(w.id)) {
      const otherWords = VOCAB_ITEMS.filter(item => item.id !== w.id);
      const wrongDistractors = otherWords.slice(0, 3).map(o => o.meaning_bn);

      const allOpts = [w.meaning_bn, ...wrongDistractors];
      const correctText = w.meaning_bn;
      allOpts.sort();
      const correctIdx = allOpts.indexOf(correctText);

      generatedQuestions.push({
        id: `q_gen_${w.id}`,
        subjectId: "vocabulary",
        chapterId: unitSlug,
        conceptId: w.id,
        category: `Vocabulary (${unit.lesson_unit})`,
        question: `What is the appropriate meaning or context of the word '${w.word}'?`,
        options: allOpts,
        correctIndex: correctIdx,
        explanation: `
          <strong>শব্দার্থ ও কনসেপ্ট:</strong><br>
          • <strong>${w.word} (${w.part_of_speech || 'noun'}):</strong> ${w.meaning_bn}<br>
          ${w.meaning_en ? `• <em>${w.meaning_en}</em><br>` : ''}
          ${(w.synonyms && w.synonyms.length) ? `• <strong>Synonyms:</strong> ${w.synonyms.join(", ")}<br>` : ''}
          ${(w.antonyms && w.antonyms.length) ? `• <strong>Antonyms:</strong> ${w.antonyms.join(", ")}<br>` : ''}
          ${w.example ? `• <strong>Example:</strong> "${w.example}"<br>` : ''}
          ${w.source ? `• <strong>উৎস:</strong> ${w.source}` : ''}
        `
      });
    }
  });

  return [...directQuestions, ...generatedQuestions];
}

function setupEventListeners() {
  targetSwitcherBtn.addEventListener("click", openTargetModal);
  closeTargetModal.addEventListener("click", closeTargetModalDialog);
  
  targetModal.addEventListener("click", (e) => {
    if (e.target === targetModal) closeTargetModalDialog();
  });

  confirmTargetBtn.addEventListener("click", () => {
    currentTargetId = modalSelectedTarget;
    currentStreamId = modalSelectedStream;
    localStorage.setItem("conceptmcq_target", currentTargetId);
    localStorage.setItem("conceptmcq_stream", currentStreamId);
    renderTargetUI();
    closeTargetModalDialog();
    
    const targetObj = TARGET_CONFIGS[currentTargetId];
    const streamObj = targetObj?.streams.find(s => s.id === currentStreamId) || targetObj?.streams[0];
    const streamText = (targetObj && targetObj.streams.length > 1 && streamObj) ? ` (${streamObj.label})` : "";
    showToast(`আপনার লক্ষ্য ও বিভাগ নিশ্চিত হয়েছে: ${targetObj?.label || ""}${streamText}`, "success");
  });

  document.getElementById("logo-btn").addEventListener("click", () => {
    clearInterval(examTimer);
    examView.classList.add("hidden");
    resultView.classList.add("hidden");
    dashboardView.classList.remove("hidden");
    setActiveDockItem("dock-home-btn");
  });

  startLiveExamBtn.addEventListener("click", () => {
    currentQuestions = [...ALL_SAMPLE_QUESTIONS];
    document.getElementById("exam-category-badge").textContent = "আজকের লাইভ মডেল টেস্ট";
    currentExamMode = "live";
    startExamSession(15 * 60);
  });

  exitExamBtn.addEventListener("click", () => {
    if (confirm("আপনি কি নিশ্চিতভাবে পরীক্ষা থেকে বের হতে চান?")) {
      clearInterval(examTimer);
      examView.classList.add("hidden");
      dashboardView.classList.remove("hidden");
      setActiveDockItem("dock-home-btn");
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentQIndex < currentQuestions.length - 1) {
      currentQIndex++;
      loadQuestion(currentQIndex);
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentQIndex > 0) {
      currentQIndex--;
      loadQuestion(currentQIndex);
    }
  });

  finishExamBtn.addEventListener("click", () => {
    if (confirm("আপনি কি পরীক্ষা জমা দিতে প্রস্তুত?")) {
      submitExam();
    }
  });

  retakeExamBtn.addEventListener("click", () => {
    startExamSession(15 * 60);
  });

  backHomeBtn.addEventListener("click", () => {
    resultView.classList.add("hidden");
    dashboardView.classList.remove("hidden");
    setActiveDockItem("dock-home-btn");
  });

  toggleBlurBtn.addEventListener("click", () => {
    isBlurModeActive = !isBlurModeActive;
    toggleBlurBtn.classList.toggle("active", isBlurModeActive);
    optionsContainer.classList.toggle("blurred", isBlurModeActive);
  });

  toggleStrikeBtn.addEventListener("click", () => {
    isEliminationModeActive = !isEliminationModeActive;
    toggleStrikeBtn.classList.toggle("active", isEliminationModeActive);
  });

  markReviewBtn.addEventListener("click", () => {
    const q = currentQuestions[currentQIndex];
    if (q) toggleBookmark(q);
  });

  document.querySelectorAll(".btn-confidence").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".btn-confidence").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      if (!userAnswers[currentQIndex]) userAnswers[currentQIndex] = {};
      userAnswers[currentQIndex].confidence = btn.dataset.confidence;
    });
  });

  // Feature Tiles Triggers (Desktop + Mobile IDs)
  ["tile-mistake-bank-d", "tile-mistake-bank-m"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", handleMistakeBankTrigger);
  });

  ["tile-bookmarks-d", "tile-bookmarks-m"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", handleBookmarksTrigger);
  });

  ["tile-rapid-quiz-d", "tile-rapid-quiz-m"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", handleRapidQuizTrigger);
  });

  // Custom Concept & Chapter Quiz Modal Listeners
  if (closeCustomQuizModal) {
    closeCustomQuizModal.addEventListener("click", closeCustomQuizModalDialog);
  }
  if (customQuizModal) {
    customQuizModal.addEventListener("click", (e) => {
      if (e.target === customQuizModal) closeCustomQuizModalDialog();
    });
  }
  if (customSubjectSelect) {
    customSubjectSelect.addEventListener("change", (e) => {
      updateChaptersForSubject(e.target.value);
    });
  }
  if (customChapterSelect) {
    customChapterSelect.addEventListener("change", (e) => {
      updateConceptsForChapter(customSubjectSelect.value, e.target.value);
    });
  }
  if (quizLengthOptions) {
    quizLengthOptions.querySelectorAll(".quiz-length-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        quizLengthOptions.querySelectorAll(".quiz-length-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        selectedQuizCount = parseInt(pill.dataset.count, 10) || 5;
        selectedQuizDurationMins = parseInt(pill.dataset.mins, 10) || 5;
      });
    });
  }
  if (startCustomQuizBtn) {
    startCustomQuizBtn.addEventListener("click", startCustomQuizFromSelection);
  }
  if (randomRapidBtn) {
    randomRapidBtn.addEventListener("click", () => {
      closeCustomQuizModalDialog();
      runRandomRapidQuiz();
    });
  }

  const notifBtn = document.getElementById("notif-btn");
  if (notifBtn) {
    notifBtn.addEventListener("click", () => {
      showToast("আপনার ৩-দিনের রিভিশন ব্যাংকে নতুন প্রশ্ন যোগ হয়েছে!", "info");
    });
  }

  // Vocabulary Modal Events
  // Router click delegation for all [data-route] links
  document.addEventListener("click", (e) => {
    const routeEl = e.target.closest("[data-route]");
    if (routeEl) {
      e.preventDefault();
      const route = routeEl.getAttribute("data-route");
      if (route) navigateTo(route);
    }
  });

  // Browser back / forward button listener (popstate)
  window.addEventListener("popstate", (e) => {
    handleRoute(window.location.pathname);
  });

  // Vocabulary Home Card click handlers
  const cardAllWords = document.getElementById("card-vocab-all-words");
  if (cardAllWords) {
    cardAllWords.addEventListener("click", () => {
      navigateTo("/vocabulary/units");
    });
  }

  const cardMistakes = document.getElementById("card-vocab-mistakes");
  if (cardMistakes) {
    cardMistakes.addEventListener("click", () => {
      const mistakes = getVocabMistakes();
      if (mistakes.length === 0) {
        showToast("বর্তমানে আপনার কোনো ভুল শব্দ নেই! কুইজে ভুল হলে তা এখানে জমা হবে।", "info");
      } else {
        navigateTo("/vocabulary/units");
      }
    });
  }

  const cardStats = document.getElementById("card-vocab-stats");
  if (cardStats) {
    cardStats.addEventListener("click", () => {
      const total = VOCAB_ITEMS.length;
      const units = getVocabLessonUnits().length;
      showToast(`ভোকাবুলারি পরিসংখ্যান: মোট ${units}টি ইউনিট এবং ${total}টি উচ্চ-ফ্রিকোয়েন্সি শব্দ রয়েছে।`, "info");
    });
  }

  // Feature item in All Features sheet
  const fItemVocab = document.getElementById("f-item-vocab");
  if (fItemVocab) {
    fItemVocab.addEventListener("click", () => {
      const allFeaturesModal = document.getElementById("all-features-modal-backdrop");
      if (allFeaturesModal) allFeaturesModal.classList.add("hidden");
      
      // Navigate to Admission -> Unit "kha"
      currentTargetId = "admission";
      currentStreamId = "b_unit";
      localStorage.setItem("conceptmcq_target", "admission");
      localStorage.setItem("conceptmcq_stream", "b_unit");
      renderTargetUI();
      navigateTo("/vocabulary");
    });
  }
}

// Start
document.addEventListener("DOMContentLoaded", () => {
  init();
  setupMobileDock();
  setupKeyboardShortcuts();
  initTelcoHomeScreen();

  // Initial Route Dispatch based on current URL
  handleRoute(window.location.pathname);

  // Register PWA Service Worker for Offline / App Wrapping
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err => {
      console.log('SW register non-critical:', err);
    });
  }

  // Initialize Master Mobile Hero Slider
  initMobileHeroSlider();
});

// ==============================================================================
// MASTER DYNAMIC MOBILE HERO SLIDER LOGIC
// Height 33vh • Touch-Swipe • WebP Support • Supabase Sync • Auto-play (3s)
// ==============================================================================
let sliderItems = [];
let currentSlideIndex = 0;
let sliderAutoPlayTimer = null;
let touchStartX = 0;
let touchEndX = 0;

const defaultMobileSliders = [
  {
    id: "slide-1",
    image_url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    destination_link: "#live-exam"
  },
  {
    id: "slide-2",
    image_url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    destination_link: "#model-test"
  },
  {
    id: "slide-3",
    image_url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    destination_link: "#subjects"
  }
];

async function initMobileHeroSlider() {
  const track = document.getElementById("mobile-slider-track");
  const dotsContainer = document.getElementById("slider-pagination-dots");
  if (!track || !dotsContainer) return;

  // Fetch sliders from Supabase or Fallback
  sliderItems = await fetchMobileSliders();
  renderMobileSlider(sliderItems);
  setupSliderTouchControls();
  startSliderAutoPlay();
  setupSliderAdmin();
}

async function fetchMobileSliders() {
  try {
    if (supabaseClient) {
      const now = new Date().toISOString();
      const { data, error } = await supabaseClient
        .from('mobile_sliders')
        .select('*')
        .eq('is_active', true)
        .gt('end_date', now)
        .order('sort_order', { ascending: true });

      if (!error && data && data.length > 0) {
        return data;
      }
    }
  } catch (err) {
    console.warn("Supabase slider fetch fallback to local:", err);
  }
  return defaultMobileSliders;
}

function renderMobileSlider(slides) {
  const track = document.getElementById("mobile-slider-track");
  const dotsContainer = document.getElementById("slider-pagination-dots");
  if (!track || !dotsContainer || !slides.length) return;

  track.innerHTML = "";
  dotsContainer.innerHTML = "";

  slides.forEach((slide, idx) => {
    // 1st image eager load, others lazy load (Prompt requirement)
    const loadingStrategy = idx === 0 ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"';

    const slideEl = document.createElement("div");
    slideEl.className = "mobile-slide-item";
    slideEl.innerHTML = `
      <a href="${slide.destination_link || '#'}" title="Slide Banner ${idx + 1}">
        <img src="${slide.image_url}" alt="Hero Banner ${idx + 1}" ${loadingStrategy}>
      </a>
    `;
    track.appendChild(slideEl);

    // Pagination Dot
    const dot = document.createElement("div");
    dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
    dot.dataset.index = idx;
    dot.addEventListener("click", () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  currentSlideIndex = 0;
  updateSliderTrackPosition();
}

function updateSliderTrackPosition() {
  const track = document.getElementById("mobile-slider-track");
  const dots = document.querySelectorAll(".slider-dot");
  if (!track) return;

  track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

  dots.forEach((dot, idx) => {
    if (idx === currentSlideIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function goToSlide(index) {
  if (!sliderItems.length) return;
  currentSlideIndex = (index + sliderItems.length) % sliderItems.length;
  updateSliderTrackPosition();
  resetSliderAutoPlay();
}

function nextSlide() {
  goToSlide(currentSlideIndex + 1);
}

function prevSlide() {
  goToSlide(currentSlideIndex - 1);
}

function startSliderAutoPlay() {
  clearInterval(sliderAutoPlayTimer);
  // Auto-play every 3 seconds (Prompt Requirement)
  sliderAutoPlayTimer = setInterval(nextSlide, 3000);
}

function resetSliderAutoPlay() {
  clearInterval(sliderAutoPlayTimer);
  startSliderAutoPlay();
}

function setupSliderTouchControls() {
  const container = document.getElementById("mobile-slider-container");
  if (!container) return;

  container.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  container.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSliderSwipe();
  }, { passive: true });
}

function handleSliderSwipe() {
  const diffX = touchEndX - touchStartX;
  // Threshold of 45px for mobile swipe
  if (Math.abs(diffX) > 45) {
    if (diffX < 0) {
      nextSlide(); // Swiped left -> next slide
    } else {
      prevSlide(); // Swiped right -> prev slide
    }
  }
}

// Client-Side Canvas WebP Converter (Max Performance & Image Optimization)
function convertImageToWebP(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        // Convert to WebP format with 0.82 quality
        const webpDataUrl = canvas.toDataURL("image/webp", 0.82);
        resolve(webpDataUrl);
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function setupSliderAdmin() {
  const modal = document.getElementById("slider-admin-modal");
  const closeBtn = document.getElementById("close-slider-admin");
  const form = document.getElementById("slider-admin-form");
  const fileInput = document.getElementById("slider-image-input");
  const previewWrap = document.getElementById("slider-webp-preview");
  const previewImg = document.getElementById("preview-slider-img");
  let convertedWebPUrl = "";

  if (fileInput) {
    fileInput.addEventListener("change", async (e) => {
      const file = e.target.files[0];
      if (file) {
        try {
          convertedWebPUrl = await convertImageToWebP(file);
          if (previewImg && previewWrap) {
            previewImg.src = convertedWebPUrl;
            previewWrap.classList.remove("hidden");
          }
        } catch (err) {
          console.error("WebP conversion error:", err);
        }
      }
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
  }

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const imageUrl = convertedWebPUrl || document.getElementById("slider-url-input")?.value?.trim();
      const destLink = document.getElementById("slider-dest-input")?.value?.trim() || "#";
      const sortOrder = parseInt(document.getElementById("slider-sort-input")?.value, 10) || 1;
      const endDateVal = document.getElementById("slider-date-input")?.value;
      const isActive = document.getElementById("slider-active-input")?.checked ?? true;

      if (!imageUrl) {
        alert("অনুগ্রহ করে একটি ছবি আপলোড করুন অথবা ইমেজ লিঙ্ক দিন!");
        return;
      }

      const newSlide = {
        id: "slide-" + Date.now(),
        image_url: imageUrl,
        destination_link: destLink,
        sort_order: sortOrder,
        is_active: isActive,
        end_date: endDateVal ? new Date(endDateVal).toISOString() : new Date(Date.now() + 30 * 86400000).toISOString()
      };

      // If Supabase is connected, insert directly
      if (supabaseClient) {
        try {
          const { error } = await supabaseClient.from("mobile_sliders").insert([newSlide]);
          if (error) console.warn("Supabase insert warning:", error);
        } catch (err) {
          console.warn("DB error:", err);
        }
      }

      // Add to local state and re-render
      sliderItems.push(newSlide);
      sliderItems.sort((a, b) => (a.sort_order || 1) - (b.sort_order || 1));
      renderMobileSlider(sliderItems);

      if (modal) modal.classList.add("hidden");
      alert("মোবাইল স্লাইডার সফলভাবে যুক্ত করা হয়েছে!");
    });
  }
}

// Global hook to open slider manager
window.openSliderAdminModal = function() {
  const modal = document.getElementById("slider-admin-modal");
  if (modal) modal.classList.remove("hidden");
};

// ==============================================================================
// TELCO-INSPIRED MODERN HOME SCREEN LOGIC
// Tabs, Search Bar, Shortcuts, Promo Strip, What's New & All Features Modal
// ==============================================================================
function initTelcoHomeScreen() {
  // 1. Stream folder tabs on Main Card
  const folderTabs = document.querySelectorAll(".folder-tab");
  folderTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      folderTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const streamId = tab.dataset.stream;
      if (streamId) {
        currentStreamId = streamId;
        localStorage.setItem("conceptmcq_stream", currentStreamId);
        renderTargetUI();
      }
    });
  });

  // 2. Header Search Input Filter
  const headerSearchInput = document.getElementById("header-search-input");
  if (headerSearchInput) {
    headerSearchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      document.querySelectorAll(".subject-shortcut").forEach(item => {
        const name = item.querySelector(".shortcut-name")?.textContent.toLowerCase() || "";
        const tag = item.querySelector(".shortcut-tag")?.textContent.toLowerCase() || "";
        if (!query || name.includes(query) || tag.includes(query)) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
      document.querySelectorAll(".subject-card").forEach(card => {
        const subName = card.dataset.name?.toLowerCase() || "";
        if (!query || subName.includes(query)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  // 3. Promo Strip Action Buttons & Cards
  const promoMistakeBtn = document.getElementById("promo-action-mistake-bank");
  const promoMistakeCard = document.getElementById("promo-tile-mistake-bank");
  if (promoMistakeBtn) {
    promoMistakeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      handleMistakeBankTrigger();
    });
  }
  if (promoMistakeCard) {
    promoMistakeCard.addEventListener("click", handleMistakeBankTrigger);
  }

  const promoBookmarksBtn = document.getElementById("promo-action-bookmarks");
  const promoBookmarksCard = document.getElementById("promo-tile-bookmarks");
  if (promoBookmarksBtn) {
    promoBookmarksBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      handleBookmarksTrigger();
    });
  }
  if (promoBookmarksCard) {
    promoBookmarksCard.addEventListener("click", handleBookmarksTrigger);
  }

  const promoRapidBtn = document.getElementById("promo-action-rapid");
  const promoRapidCard = document.getElementById("promo-tile-rapid");
  if (promoRapidBtn) {
    promoRapidBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      handleRapidQuizTrigger();
    });
  }
  if (promoRapidCard) {
    promoRapidCard.addEventListener("click", handleRapidQuizTrigger);
  }

  // Promo Strip Horizontal Scroll Pagination Indicator
  const promoScroll = document.getElementById("promo-strip-scroll");
  const promoDots = document.querySelectorAll("#promo-dots .p-dot");
  if (promoScroll && promoDots.length > 0) {
    promoScroll.addEventListener("scroll", () => {
      const scrollLeft = promoScroll.scrollLeft;
      const card = promoScroll.querySelector(".promo-card");
      const cardWidth = card ? card.offsetWidth + 12 : 280;
      const activeIndex = Math.min(Math.round(scrollLeft / cardWidth), promoDots.length - 1);
      promoDots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === activeIndex);
      });
    });
  }

  // 4. Shortcuts Grid Items
  const shortcutLiveTest = document.getElementById("shortcut-live-test");
  if (shortcutLiveTest && startLiveExamBtn) {
    shortcutLiveTest.addEventListener("click", () => startLiveExamBtn.click());
  }

  document.querySelectorAll(".subject-shortcut").forEach(item => {
    item.addEventListener("click", () => {
      const subId = item.dataset.subject;
      if (subId) openCustomQuizModal(subId);
    });
  });

  // 5. What's New Cards Action Buttons
  const wnBtn1 = document.getElementById("wn-btn-1");
  if (wnBtn1 && startLiveExamBtn) {
    wnBtn1.addEventListener("click", () => startLiveExamBtn.click());
  }
  const wnBtn2 = document.getElementById("wn-btn-2");
  if (wnBtn2) {
    wnBtn2.addEventListener("click", () => openCustomQuizModal("higher_math"));
  }
  const wnBtn3 = document.getElementById("wn-btn-3");
  if (wnBtn3) {
    wnBtn3.addEventListener("click", () => openCustomQuizModal("physics"));
  }

  // 6. Plus Buttons on Streak & Coins Chips
  const btnStreakPlus = document.getElementById("btn-streak-plus");
  if (btnStreakPlus) {
    btnStreakPlus.addEventListener("click", (e) => {
      e.stopPropagation();
      showToast("🔥 স্ট্রিক তথ্য: প্রতিদিন অন্তত ১টি মডেল টেস্ট দিয়ে স্ট্রিক ধরে রাখুন এবং বোনাস রিওয়ার্ড পান!");
    });
  }
  const btnCoinsPlus = document.getElementById("btn-coins-plus");
  if (btnCoinsPlus) {
    btnCoinsPlus.addEventListener("click", (e) => {
      e.stopPropagation();
      showToast("🪙 কয়েন রিডিম: আপনার অর্জিত ১২৫০ কয়েন দিয়ে শীঘ্রই বিশেষ মডেল টেস্ট ও চিটশিট আনলক করতে পারবেন!");
    });
  }

  // 7. Floating Study Buddy Mascot Helper
  const studyBuddyBtn = document.getElementById("floating-study-buddy-btn");
  if (studyBuddyBtn) {
    studyBuddyBtn.addEventListener("click", () => {
      const mascotTips = [
        "🦉 স্টাডি বাডি: প্রতিদিন অন্তত ১টি মডেল টেস্ট দিলে পরীক্ষার আসল ভীতি দূর হবে!",
        "💡 আজকের টিপস: দ্বিধাদ্বন্দ্ব থাকা প্রশ্ন স্কিপ করলে নেগেটিভ মার্কিং এড়ানো যায়।",
        "🎯 ভুল উত্তর ব্যাংকে জমা হওয়া প্রশ্নগুলো রিভিশন দিয়ে রিটেনশন রেট বাড়ান!",
        "⚡ দ্রুত ৫টি প্রশ্নে নিজেকে যাচাই করতে র‍্যাপিড ফায়ার কুইজ চেষ্টা করুন!"
      ];
      const randomTip = mascotTips[Math.floor(Math.random() * mascotTips.length)];
      showToast(randomTip);
    });
  }

  // 8. All Features Modal / Drawer
  const openAllFeaturesBtn = document.getElementById("open-all-features-btn");
  const allFeaturesModal = document.getElementById("all-features-modal-backdrop");
  const closeAllFeaturesModal = document.getElementById("close-all-features-modal");

  function openFeaturesModal() {
    if (allFeaturesModal) allFeaturesModal.classList.remove("hidden");
  }
  function closeFeaturesModal() {
    if (allFeaturesModal) allFeaturesModal.classList.add("hidden");
  }

  if (openAllFeaturesBtn) openAllFeaturesBtn.addEventListener("click", openFeaturesModal);
  if (closeAllFeaturesModal) closeAllFeaturesModal.addEventListener("click", closeFeaturesModal);
  if (allFeaturesModal) {
    allFeaturesModal.addEventListener("click", (e) => {
      if (e.target === allFeaturesModal) closeFeaturesModal();
    });
  }

  // Quick chips inside All Features Modal
  document.querySelectorAll(".features-quick-chips .f-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      closeFeaturesModal();
      const action = chip.dataset.action;
      if (action === "live-test" && startLiveExamBtn) startLiveExamBtn.click();
      else if (action === "mistake-bank") handleMistakeBankTrigger();
      else if (action === "bookmarks") handleBookmarksTrigger();
      else if (action === "rapid-quiz") handleRapidQuizTrigger();
      else if (action === "target-switch" && targetSwitcherBtn) targetSwitcherBtn.click();
    });
  });

  // Categorized Items inside All Features Modal
  const fLiveExam = document.getElementById("f-item-live-exam");
  if (fLiveExam) {
    fLiveExam.addEventListener("click", () => {
      closeFeaturesModal();
      if (startLiveExamBtn) startLiveExamBtn.click();
    });
  }
  const fCustomExam = document.getElementById("f-item-custom-exam");
  if (fCustomExam) {
    fCustomExam.addEventListener("click", () => {
      closeFeaturesModal();
      openCustomQuizModal();
    });
  }
  const fRapidQuiz = document.getElementById("f-item-rapid-quiz");
  if (fRapidQuiz) {
    fRapidQuiz.addEventListener("click", () => {
      closeFeaturesModal();
      handleRapidQuizTrigger();
    });
  }
  const fMistakeBank = document.getElementById("f-item-mistake-bank");
  if (fMistakeBank) {
    fMistakeBank.addEventListener("click", () => {
      closeFeaturesModal();
      handleMistakeBankTrigger();
    });
  }
  const fBookmarks = document.getElementById("f-item-bookmarks");
  if (fBookmarks) {
    fBookmarks.addEventListener("click", () => {
      closeFeaturesModal();
      handleBookmarksTrigger();
    });
  }
  const fStreak = document.getElementById("f-item-streak");
  if (fStreak) {
    fStreak.addEventListener("click", () => {
      closeFeaturesModal();
      showToast("🔥 ৫ দিনের স্ট্রিক সক্রিয় রয়েছে!");
    });
  }
  const fLeaderboard = document.getElementById("f-item-leaderboard");
  if (fLeaderboard) {
    fLeaderboard.addEventListener("click", () => {
      closeFeaturesModal();
      showToast("🏆 সাপ্তাহিক লিডারবোর্ড: আপনি ৭ম স্থানে রয়েছেন!");
    });
  }
  const fTargetSwitch = document.getElementById("f-item-target-switch");
  if (fTargetSwitch && targetSwitcherBtn) {
    fTargetSwitch.addEventListener("click", () => {
      closeFeaturesModal();
      targetSwitcherBtn.click();
    });
  }
  const fThemeToggle = document.getElementById("f-item-theme-toggle");
  if (fThemeToggle) {
    fThemeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      const label = document.getElementById("theme-toggle-label");
      if (label) label.textContent = isDark ? "লাইট মোড" : "ডার্ক মোড";
      showToast(isDark ? "🌙 ডার্ক মোড সক্রিয় করা হয়েছে" : "☀️ লাইট মোড সক্রিয় করা হয়েছে");
    });
  }

  // Feature Search inside All Features Modal
  const featuresSearchInput = document.getElementById("features-search-input");
  if (featuresSearchInput) {
    featuresSearchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      document.querySelectorAll(".feature-row-item").forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = (!q || text.includes(q)) ? "flex" : "none";
      });
    });
  }
}



