import { createClient } from '@supabase/supabase-js'

// .env.local에 저장한 값을 안전하게 불러옵니다.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// 실제 통로(Client)를 개설하여 배포 환경에서도 작동하게 합니다.
export const supabase = createClient(supabaseUrl, supabaseAnonKey)