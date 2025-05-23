
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://izlikjpvfcstfytphipa.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6bGlranB2ZmNzdGZ5dHBoaXBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5MTYzMDgsImV4cCI6MjA1NTQ5MjMwOH0.8S03l8KBH_Bh6UyU9C1irkg47lMp7RHLXTvtuCYV1ZM";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    storageKey: 'chrysalis-auth-token',
    autoRefreshToken: true,
  },
});
