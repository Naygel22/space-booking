import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://uhkdgunfdxlnsvdtpouy.supabase.co'
const supabaseKey = 'uhkdgunfdxlnsvdtpouy'
export const supabaseClient = createClient(supabaseUrl, supabaseKey)