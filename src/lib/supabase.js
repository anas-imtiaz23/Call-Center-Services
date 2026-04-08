import { createClient } from '@supabase/supabase-js';

// Your Supabase project URL and anon key
// You'll get these from your Supabase dashboard
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);