
-- Create a table for contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) to the contact submissions table
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to insert contact submissions (public form)
CREATE POLICY "Anyone can submit contact forms" 
  ON public.contact_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that only allows authenticated users to view submissions (admin access)
CREATE POLICY "Only authenticated users can view submissions" 
  ON public.contact_submissions 
  FOR SELECT 
  USING (auth.role() = 'authenticated');
