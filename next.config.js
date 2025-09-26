/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hydration 오류 해결을 위한 설정
  serverExternalPackages: ['@supabase/supabase-js'],
  // 개발 환경에서 hydration 오류를 경고로만 표시
  reactStrictMode: true,
};

module.exports = nextConfig;
