'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: '1',
    category: '구독 및 결제',
    question: '멤버십 플랜을 언제든지 변경할 수 있나요?',
    answer: '네, 언제든지 플랜을 업그레이드하거나 다운그레이드할 수 있습니다. 변경사항은 다음 결제 주기부터 적용되며, 업그레이드 시에는 즉시 새로운 혜택을 이용하실 수 있습니다.'
  },
  {
    id: '2',
    category: '구독 및 결제',
    question: '환불 정책은 어떻게 되나요?',
    answer: '구독 후 7일 이내에는 100% 환불이 가능합니다. 그 이후에는 사용하지 않은 기간에 대해 비례 환불해드립니다. 환불 요청은 고객지원팀을 통해 처리됩니다.'
  },
  {
    id: '3',
    category: '구독 및 결제',
    question: '결제 방법은 어떤 것들이 있나요?',
    answer: '현재 신용카드(국내외), 체크카드, 간편결제(토스페이, 카카오페이 등)를 지원합니다. 모든 결제는 안전한 토스페이먼츠 시스템을 통해 처리됩니다.'
  },
  {
    id: '4',
    category: '강의 및 학습',
    question: '강의는 얼마나 자주 업데이트되나요?',
    answer: '매월 2-3개의 새로운 강의가 추가되며, 기존 강의도 최신 기술 동향에 맞춰 정기적으로 업데이트됩니다. 업데이트 소식은 이메일과 커뮤니티를 통해 안내드립니다.'
  },
  {
    id: '5',
    category: '강의 및 학습',
    question: '강의를 다운로드해서 오프라인으로 볼 수 있나요?',
    answer: '보안상의 이유로 강의 다운로드는 지원하지 않습니다. 하지만 모바일 앱에서 일시적인 오프라인 시청을 위한 캐싱 기능을 제공할 예정입니다.'
  },
  {
    id: '6',
    category: '강의 및 학습',
    question: '수료증은 어떻게 받을 수 있나요?',
    answer: '각 강의를 100% 완주하시면 자동으로 수료증이 발급됩니다. 마이페이지에서 PDF 형태로 다운로드하실 수 있으며, LinkedIn에 직접 추가할 수 있는 링크도 제공됩니다.'
  },
  {
    id: '7',
    category: '기술 지원',
    question: '로그인이 안 되거나 기술적 문제가 있을 때는 어떻게 하나요?',
    answer: '브라우저 캐시 삭제, 다른 브라우저 사용, 인터넷 연결 확인을 먼저 시도해보세요. 문제가 지속되면 고객지원팀(support@aiacademy.co.kr)으로 연락주시면 신속히 도움드리겠습니다.'
  },
  {
    id: '8',
    category: '기술 지원',
    question: '모바일에서도 강의를 볼 수 있나요?',
    answer: '네, 웹사이트는 모바일에 최적화되어 있어 스마트폰과 태블릿에서도 원활하게 강의를 시청할 수 있습니다. 전용 모바일 앱도 개발 중입니다.'
  },
  {
    id: '9',
    category: '계정 및 프로필',
    question: '계정 정보를 변경하려면 어떻게 해야 하나요?',
    answer: '마이페이지의 프로필 설정에서 이름, 비밀번호 등을 변경할 수 있습니다. 이메일 주소 변경은 보안상 고객지원팀을 통해서만 가능합니다.'
  },
  {
    id: '10',
    category: '계정 및 프로필',
    question: '계정을 삭제하고 싶어요.',
    answer: '계정 삭제를 원하시면 고객지원팀으로 요청해주세요. 삭제 시 모든 학습 기록과 수료증이 영구적으로 삭제되며, 복구가 불가능합니다.'
  }
];

const categories = ['전체', '구독 및 결제', '강의 및 학습', '기술 지원', '계정 및 프로필'];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const filteredFAQs = selectedCategory === '전체' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              자주 묻는 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">질문</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI Academy 이용 중 궁금한 점들을 빠르게 해결해보세요
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 mb-16"
          >
            {filteredFAQs.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <span className="text-xs text-blue-600 font-medium mb-1 block">
                      {item.category}
                    </span>
                    <h3 className="font-semibold text-gray-900">{item.question}</h3>
                  </div>
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-4">
                    <div className="border-t pt-4">
                      <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              원하는 답변을 찾지 못하셨나요?
            </h2>
            <p className="text-blue-100 mb-8">
              고객지원팀이 언제든지 도움을 드릴 준비가 되어 있습니다
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-6">
                <MessageCircle className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">라이브 채팅</h3>
                <p className="text-sm text-blue-100 mb-4">실시간으로 문의하세요</p>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                  채팅 시작
                </button>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6">
                <Mail className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">이메일 문의</h3>
                <p className="text-sm text-blue-100 mb-4">support@aiacademy.co.kr</p>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                  이메일 보내기
                </button>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6">
                <Phone className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">전화 문의</h3>
                <p className="text-sm text-blue-100 mb-4">1588-1234 (평일 9-18시)</p>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                  전화 걸기
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
