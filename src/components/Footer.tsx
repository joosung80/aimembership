'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Youtube, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = 2024; // 고정값으로 변경하여 hydration 오류 방지

  const footerLinks = {
    company: [
      { name: '회사 소개', href: '/about' },
      { name: '채용', href: '/careers' },
      { name: '공지사항', href: '/news' },
      { name: '블로그', href: '/blog' },
    ],
    education: [
      { name: '강의 목록', href: '/courses' },
      { name: '멤버십 플랜', href: '/pricing' },
      { name: '커뮤니티', href: '/community' },
      { name: '수료증', href: '/certificates' },
    ],
    support: [
      { name: 'FAQ', href: '/faq' },
      { name: '고객지원', href: '/support' },
      { name: '기술 문의', href: '/technical-support' },
      { name: '환불 정책', href: '/refund-policy' },
    ],
    legal: [
      { name: '이용약관', href: '/terms' },
      { name: '개인정보처리방침', href: '/privacy' },
      { name: '쿠키 정책', href: '/cookies' },
      { name: '사업자 정보', href: '/business-info' },
    ],
  };

  const socialLinks = [
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-500' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Academy
              </span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI로 당신의 업무와 커리어를 혁신하세요. 
              실리콘밸리 전문가들이 만든 실전 중심의 AI 교육 플랫폼입니다.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">1588-1234</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">support@aiacademy.co.kr</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 mt-0.5 text-blue-400" />
                <span className="text-sm">
                  서울특별시 강남구 테헤란로 123<br />
                  AI타워 10층
                </span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">회사</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Education Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">교육</h3>
            <ul className="space-y-3">
              {footerLinks.education.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">지원</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">약관</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4">뉴스레터 구독</h3>
            <p className="text-gray-300 text-sm mb-4">
              최신 AI 트렌드와 강의 소식을 가장 먼저 받아보세요
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold">
                구독
              </button>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
            <div className="text-gray-400 text-sm">
              팔로우하고 최신 소식을 받아보세요
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>© {currentYear} AI Academy. All rights reserved.</p>
            </div>
            
            {/* Business Info */}
            <div className="text-center md:text-right">
              <p className="mb-1">
                상호명: (주)AI아카데미 | 대표자: 홍길동 | 사업자등록번호: 123-45-67890
              </p>
              <p className="mb-1">
                통신판매업신고번호: 2024-서울강남-1234 | 개인정보보호책임자: 김개인
              </p>
              <p>
                호스팅 서비스: Amazon Web Services (AWS)
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
