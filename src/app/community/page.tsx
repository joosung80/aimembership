'use client';

import { MessageCircle, Users, Trophy, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              AI Academy <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">커뮤니티</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              전 세계 AI 학습자들과 함께 성장하고, 지식을 공유하며, 네트워킹을 통해 더 큰 성과를 만들어보세요
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">활성 멤버</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">일일 토론</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600">전문가</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">24/7</div>
              <div className="text-gray-600">지원</div>
            </div>
          </motion.div>

          {/* Community Platforms */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Discord 채널</h3>
              <p className="text-gray-600 mb-6">
                실시간 채팅으로 다른 학습자들과 소통하고, 질문하고, 경험을 공유하세요.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                참여하기
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">스터디 그룹</h3>
              <p className="text-gray-600 mb-6">
                같은 관심사를 가진 학습자들과 함께 스터디 그룹을 만들어 더 깊이 학습하세요.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                그룹 찾기
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">프로젝트 쇼케이스</h3>
              <p className="text-gray-600 mb-6">
                완성한 AI 프로젝트를 공유하고 피드백을 받으며 포트폴리오를 구축하세요.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
              >
                프로젝트 보기
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          </div>

          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-16"
          >
            <div className="flex items-center mb-8">
              <Calendar className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">다가오는 이벤트</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">AI 트렌드 라이브 세션</h3>
                    <p className="text-sm text-gray-600">2024년 AI 산업 전망과 새로운 기술 동향</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">라이브</span>
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  📅 2024년 1월 15일 오후 8:00 (KST)
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  참여 신청
                </button>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">AI 프로젝트 해커톤</h3>
                    <p className="text-sm text-gray-600">48시간 동안 팀을 이뤄 AI 솔루션 개발</p>
                  </div>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">대회</span>
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  📅 2024년 1월 20-22일 (온라인)
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  팀 등록
                </button>
              </div>
            </div>
          </motion.div>

          {/* Community Guidelines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
          >
            <h2 className="text-2xl font-bold mb-6">커뮤니티 가이드라인</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">✅ 권장사항</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• 서로를 존중하고 배려하는 마음</li>
                  <li>• 건설적인 피드백과 토론</li>
                  <li>• 지식과 경험의 적극적인 공유</li>
                  <li>• 초보자를 위한 친절한 안내</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">❌ 금지사항</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• 스팸, 광고, 무관한 홍보</li>
                  <li>• 개인정보 무단 공유</li>
                  <li>• 차별적이거나 공격적인 언어</li>
                  <li>• 저작권 침해 콘텐츠</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
