-- ==============================================================================
-- MIGRATION: Create vocab_items table for Admission Unit "খ" Vocabulary
-- Date: 2026-11-25
-- Description: Adds vocabulary content model without modifying existing collections
-- ==============================================================================

CREATE TABLE IF NOT EXISTS public.vocab_items (
    id TEXT PRIMARY KEY,                                      -- Stable unique string identifier (e.g. 'kha_vocab_u1_001')
    subject TEXT NOT NULL,                                    -- Subject name (e.g. 'English Language & Literature')
    section TEXT NOT NULL DEFAULT 'vocabulary',               -- Section value (e.g. 'vocabulary')
    admission_unit TEXT NOT NULL DEFAULT 'kha',               -- Target admission unit (value 'kha')
    lesson_unit TEXT NOT NULL,                                -- Lesson or chapter unit (e.g. 'Unit 1')
    sort_order INT NOT NULL DEFAULT 0,                        -- Ordering sequence for student progression
    word TEXT NOT NULL,                                       -- Vocabulary headword
    part_of_speech TEXT,                                      -- Noun, verb, adjective, adverb, etc.
    meaning_bn TEXT NOT NULL,                                 -- Meaning in Bengali
    meaning_en TEXT,                                          -- Meaning in English
    synonyms TEXT[] NOT NULL DEFAULT '{}'::text[],            -- Array of synonyms
    antonyms TEXT[] NOT NULL DEFAULT '{}'::text[],            -- Array of antonyms
    example TEXT,                                             -- Contextual usage sentence
    source TEXT,                                              -- Question bank / textbook source reference
    tags TEXT[] NOT NULL DEFAULT '{}'::text[],                -- Categorization tags (e.g. ['high-frequency', 'du-kha'])
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    content_version INT NOT NULL DEFAULT 1                    -- Content revision tracking version number
);

-- Compound Index on admission_unit, lesson_unit, and sort_order for ultra-fast query performance
CREATE INDEX IF NOT EXISTS idx_vocab_items_unit_lesson_sort 
ON public.vocab_items (admission_unit, lesson_unit, sort_order);

-- Enable Row Level Security (RLS)
ALTER TABLE public.vocab_items ENABLE ROW LEVEL SECURITY;

-- Allow public read access to all vocabulary items
DROP POLICY IF EXISTS "Allow public read access to vocab_items" ON public.vocab_items;
CREATE POLICY "Allow public read access to vocab_items"
ON public.vocab_items FOR SELECT USING (true);

-- Allow authorized/public insert/update if needed
DROP POLICY IF EXISTS "Allow public insert to vocab_items" ON public.vocab_items;
CREATE POLICY "Allow public insert to vocab_items"
ON public.vocab_items FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public update to vocab_items" ON public.vocab_items;
CREATE POLICY "Allow public update to vocab_items"
ON public.vocab_items FOR UPDATE USING (true);

-- Sample Seed Data for Admission Unit "খ"
INSERT INTO public.vocab_items (
    id, subject, section, admission_unit, lesson_unit, sort_order, 
    word, part_of_speech, meaning_bn, meaning_en, 
    synonyms, antonyms, example, source, tags, content_version
) VALUES
(
    'kha_eng_u1_001',
    'English Language',
    'vocabulary',
    'kha',
    'Unit 1',
    1,
    'Amicable',
    'adjective',
    'সৌহার্দ্যপূর্ণ, বন্ধুত্বপূর্ণ ও শান্তিপূর্ণ',
    'Characterized by friendliness and goodwill without disagreement',
    ARRAY['Friendly', 'Cordial', 'Harmonious', 'Amiable'],
    ARRAY['Hostile', 'Antagonistic', 'Belligerent', 'Unfriendly'],
    'Despite their differences, the committee members reached an amicable agreement.',
    'Dhaka University "Kha" Unit Question Bank (2022-23)',
    ARRAY['high-frequency', 'du-kha', 'adjective', 'unit-1'],
    1
),
(
    'kha_eng_u1_002',
    'English Language',
    'vocabulary',
    'kha',
    'Unit 1',
    2,
    'Pragmatic',
    'adjective',
    'বাস্তবধর্মী, বাস্তবসম্মত ও প্রায়োগিক',
    'Dealing with things sensibly and realistically based on practical considerations',
    ARRAY['Practical', 'Realistic', 'Sensible', 'Hard-headed'],
    ARRAY['Idealistic', 'Impractical', 'Theoretical', 'Unrealistic'],
    'A pragmatic approach is essential when solving socioeconomic challenges.',
    'DU "Kha" Unit & GST Cluster Entrance Exam',
    ARRAY['high-frequency', 'du-kha', 'adjective', 'unit-1'],
    1
),
(
    'kha_eng_u1_003',
    'English Language',
    'vocabulary',
    'kha',
    'Unit 1',
    3,
    'Benevolent',
    'adjective',
    'হিতৈষী, পরোপকারী ও দয়ালু',
    'Well-meaning, kindly, and serving a charitable rather than a profit-making purpose',
    ARRAY['Kind-hearted', 'Altruistic', 'Generous', 'Magnanimous'],
    ARRAY['Malevolent', 'Spiteful', 'Selfish', 'Cruel'],
    'The university founder was recognized for his benevolent contributions to higher education.',
    'Dhaka University "Kha" Unit Question Bank (2021-22)',
    ARRAY['high-frequency', 'du-kha', 'adjective', 'unit-1'],
    1
)
ON CONFLICT (id) DO NOTHING;
