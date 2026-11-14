-- ==============================================================================
-- CONCEPTMCQ SUPABASE DATABASE SCHEMA
-- Project: ConceptMCQ (Interactive Learning & Assessment)
-- Author: Asif Mahmud (skalasifmahmudsohag@gmail.com)
-- ==============================================================================

CREATE TABLE IF NOT EXISTS public.questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category TEXT NOT NULL,
    question TEXT NOT NULL,
    options JSONB NOT NULL,
    correct_index INT NOT NULL,
    explanation TEXT,
    difficulty TEXT DEFAULT 'medium',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.quiz_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_email TEXT,
    score INT NOT NULL,
    total_questions INT NOT NULL,
    category TEXT,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Create Mobile Sliders Table
CREATE TABLE IF NOT EXISTS public.mobile_sliders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    image_url TEXT NOT NULL,
    destination_link TEXT DEFAULT '#',
    is_active BOOLEAN DEFAULT true,
    end_date TIMESTAMP WITH TIME ZONE DEFAULT (NOW() + INTERVAL '30 days'),
    sort_order INT DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mobile_sliders ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read access to questions" ON public.questions;
CREATE POLICY "Allow public read access to questions"
ON public.questions FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public insert to quiz_results" ON public.quiz_results;
CREATE POLICY "Allow public insert to quiz_results"
ON public.quiz_results FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public read access to mobile_sliders" ON public.mobile_sliders;
CREATE POLICY "Allow public read access to mobile_sliders"
ON public.mobile_sliders FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public manage mobile_sliders" ON public.mobile_sliders;
CREATE POLICY "Allow public manage mobile_sliders"
ON public.mobile_sliders FOR ALL USING (true);

INSERT INTO public.questions (category, question, options, correct_index, explanation, difficulty)
VALUES
(
    'JavaScript Core',
    'What is the output of `typeof NaN` in JavaScript?',
    '["number", "NaN", "undefined", "object"]'::jsonb,
    0,
    'Even though NaN stands for Not-a-Number, ECMAScript specification classifies it under the primitive Number type.',
    'easy'
),
(
    'Web Architecture',
    'What does the HTTP 403 status code specifically indicate?',
    '["Resource Not Found", "Forbidden / Access Denied", "Internal Server Error", "Unauthorized"]'::jsonb,
    1,
    '403 Forbidden means the server recognizes the client identity but refuses authorization to access the resource.',
    'medium'
),
(
    'Database Concepts',
    'In relational databases, what does the ACID property "I" stand for?',
    '["Integrity", "Iteration", "Isolation", "Indexing"]'::jsonb,
    2,
    'Isolation ensures that concurrent transactions do not interfere with or see uncommitted intermediate states of each other.',
    'medium'
);
