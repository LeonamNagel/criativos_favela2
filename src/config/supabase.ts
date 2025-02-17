import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config()

// Tenta pegar as variáveis do Vite primeiro, se não existirem, usa as do process.env
const supabaseUrl = import.meta?.env?.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL
const supabaseKey = import.meta?.env?.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase URL or Key')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

export const STORAGE_BUCKET = 'professionals' 