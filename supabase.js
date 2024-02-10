"use client";
import { createClient } from '@supabase/supabase-js';   
// const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_API_KEY);

export {supabase}
