-- schema.sql
-- Run this in your Supabase SQL Editor

-- 1. Create trial_requests table
CREATE TABLE public.trial_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_name TEXT NOT NULL,
    student_name TEXT NOT NULL,
    student_age TEXT NOT NULL,
    country TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    email TEXT,
    selected_course TEXT NOT NULL,
    selected_plan TEXT NOT NULL,
    preferred_days TEXT NOT NULL,
    preferred_time TEXT NOT NULL,
    quran_level TEXT NOT NULL,
    teacher_preference TEXT NOT NULL,
    message TEXT,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'scheduled', 'completed', 'cancelled')),
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Secure trial_requests table (Row Level Security)
ALTER TABLE public.trial_requests ENABLE ROW LEVEL SECURITY;

-- Allow insert from anon role (frontend form submission)
CREATE POLICY "Allow public insert to trial_requests" ON public.trial_requests
    FOR INSERT WITH CHECK (true);

-- Allow select/update only for authenticated admins (service role or specific user)
CREATE POLICY "Allow authenticated read trial_requests" ON public.trial_requests
    FOR SELECT USING (auth.role() = 'authenticated');
    

-- 2. Create contact_messages table
CREATE TABLE public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT,
    whatsapp TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Secure contact_messages table (Row Level Security)
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow insert from anon role (frontend form submission)
CREATE POLICY "Allow public insert to contact_messages" ON public.contact_messages
    FOR INSERT WITH CHECK (true);

-- Allow select/update only for authenticated admins
CREATE POLICY "Allow authenticated read contact_messages" ON public.contact_messages
    FOR SELECT USING (auth.role() = 'authenticated');
