// Configuration file for the application
export const config = {
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co',
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'dummy_supabase_anon_key_for_development',
  },
  tossPayments: {
    clientKey: process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY || 'dummy_toss_client_key_for_development',
    secretKey: process.env.TOSS_SECRET_KEY || 'dummy_toss_secret_key_for_development',
  },
};

// 디버깅을 위한 로그 (개발 환경에서만)
if (process.env.NODE_ENV === 'development') {
  console.log('🔧 Config Debug:');
  console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Using production URL' : 'Using dummy URL');
  console.log('Supabase Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Using production key' : 'Using dummy key');
  console.log('Toss Client Key:', process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY ? 'Using production key' : 'Using dummy key');
  console.log('Environment variables loaded:', {
    NEXT_PUBLIC_SUPABASE_URL: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_TOSS_CLIENT_KEY: !!process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY,
    TOSS_SECRET_KEY: !!process.env.TOSS_SECRET_KEY,
  });
}
