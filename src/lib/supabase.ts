import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("As variáveis de ambiente do Supabase não foram encontradas. Verifique o arquivo .env.local.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ... resto do arquivo
if (typeof window !== 'undefined') {
  (window as any).supabase = supabase;
}