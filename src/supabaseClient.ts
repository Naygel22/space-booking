import { createClient } from '@supabase/supabase-js'

if (!import.meta.env.VITE_REACT_APP_SUPABASE_URL || !import.meta.env.VITE_REACT_APP_ANON_KEY) {
  throw new Error("Provide env variables")
}
const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_REACT_APP_ANON_KEY
export const supabaseClient = createClient(supabaseUrl, supabaseKey)