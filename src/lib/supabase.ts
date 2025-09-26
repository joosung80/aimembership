import { createClient } from '@supabase/supabase-js';
import { config } from './config';

// Supabase 클라이언트 생성 시 에러 처리
let supabase: any;

try {
  if (!config.supabase.url || !config.supabase.anonKey) {
    throw new Error('Supabase URL 또는 API Key가 설정되지 않았습니다.');
  }

  if (config.supabase.url === 'https://your-project.supabase.co' || config.supabase.anonKey === 'dummy_supabase_anon_key_for_development') {
    console.warn('⚠️ 더미 Supabase 설정이 사용되고 있습니다. .env.local 파일에 실제 프로젝트 정보를 설정해주세요.');
  }

  supabase = createClient(
    config.supabase.url,
    config.supabase.anonKey,
    {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
      }
    }
  );

  console.log('✅ Supabase 클라이언트가 성공적으로 초기화되었습니다.');
} catch (error) {
  console.error('🚨 Supabase 클라이언트 초기화 실패:', error);
  
  // 더미 클라이언트 생성 (에러 방지용)
  supabase = {
    auth: {
      signUp: () => Promise.resolve({ data: null, error: { message: 'Supabase가 설정되지 않았습니다.' } }),
      signInWithPassword: () => Promise.resolve({ data: null, error: { message: 'Supabase가 설정되지 않았습니다.' } }),
      signInWithOAuth: () => Promise.resolve({ error: { message: 'Supabase가 설정되지 않았습니다.' } }),
      signOut: () => Promise.resolve({ error: null }),
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
    },
    from: () => ({
      select: () => ({
        eq: () => ({
          single: () => Promise.resolve({ data: null, error: { message: 'Supabase가 설정되지 않았습니다.' } })
        })
      })
    })
  };
}

export { supabase };

// Database types
export interface User {
  id: string;
  email: string;
  name: string;
  subscription_plan: 'basic' | 'pro' | 'enterprise' | null;
  subscription_status: 'active' | 'inactive' | 'cancelled' | null;
  created_at: string;
  updated_at: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  instructor: string;
  thumbnail_url: string;
  duration: number; // in minutes
  created_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  plan: 'basic' | 'pro' | 'enterprise';
  status: 'active' | 'inactive' | 'cancelled';
  start_date: string;
  end_date: string;
  payment_id: string;
  created_at: string;
}
