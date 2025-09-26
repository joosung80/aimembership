'use client';

import { useState } from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  popular: boolean;
  icon: React.ReactNode;
  color: string;
  buttonColor: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'AI 입문자를 위한 기본 플랜',
    monthlyPrice: 29000,
    yearlyPrice: 290000,
    features: [
      '기초 AI 강의 10개 수강',
      '커뮤니티 접근',
      '기본 학습 자료 제공',
      '월 1회 Q&A 세션',
      '수료증 발급',
    ],
    popular: false,
    icon: <Star className="w-6 h-6" />,
    color: 'from-blue-400 to-blue-600',
    buttonColor: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    id: 'pro',
    name: 'Pro',
    description: '실무 활용을 위한 프로 플랜',
    monthlyPrice: 59000,
    yearlyPrice: 590000,
    features: [
      '전체 AI 강의 무제한 수강',
      '실전 프로젝트 30개 제공',
      '소스코드 및 템플릿 다운로드',
      '주 1회 라이브 멘토링',
      '1:1 커리어 상담 (월 1회)',
      '프리미엄 커뮤니티 접근',
      '우선 고객지원',
      '수료증 발급',
    ],
    popular: true,
    icon: <Zap className="w-6 h-6" />,
    color: 'from-purple-400 to-purple-600',
    buttonColor: 'bg-purple-600 hover:bg-purple-700'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: '기업 및 팀을 위한 엔터프라이즈 플랜',
    monthlyPrice: 99000,
    yearlyPrice: 990000,
    features: [
      'Pro 플랜의 모든 혜택',
      '기업 맞춤형 AI 교육 과정',
      '팀 대시보드 및 진도 관리',
      '전담 성공 매니저 배정',
      '무제한 1:1 멘토링',
      '기업 전용 워크샵 (분기별)',
      'API 연동 및 커스텀 솔루션',
      '24/7 우선 지원',
      '기업용 수료증 발급',
    ],
    popular: false,
    icon: <Crown className="w-6 h-6" />,
    color: 'from-indigo-400 to-indigo-600',
    buttonColor: 'bg-indigo-600 hover:bg-indigo-700'
  }
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const handleSubscribe = (planId: string) => {
    const params = new URLSearchParams({
      plan: planId,
      yearly: isYearly.toString(),
    });
    // window 객체 사용 시 클라이언트에서만 실행되도록 체크
    if (typeof window !== 'undefined') {
      window.location.href = `/payment?${params.toString()}`;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            당신에게 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">맞는 플랜</span>을 선택하세요
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            개인부터 기업까지, 모든 레벨에 맞는 AI 교육 솔루션을 제공합니다
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              월간 결제
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isYearly ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              연간 결제
            </span>
            {isYearly && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                2개월 무료!
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    가장 인기있는 플랜
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} text-white mb-4`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      {(isYearly ? plan.yearlyPrice / 12 : plan.monthlyPrice).toLocaleString()}
                    </span>
                    <span className="text-gray-600 ml-2">원/월</span>
                  </div>
                  {isYearly && (
                    <div className="mt-2">
                      <span className="text-sm text-gray-500 line-through">
                        {plan.monthlyPrice.toLocaleString()}원/월
                      </span>
                      <span className="text-sm text-green-600 ml-2 font-medium">
                        {Math.round((1 - (plan.yearlyPrice / 12) / plan.monthlyPrice) * 100)}% 할인
                      </span>
                    </div>
                  )}
                  <div className="text-sm text-gray-500 mt-1">
                    {isYearly ? `연간 ${plan.yearlyPrice.toLocaleString()}원` : '월간 구독'}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleSubscribe(plan.id)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all transform hover:scale-105 ${plan.buttonColor}`}
                >
                  {plan.id === 'enterprise' ? '문의하기' : '구독 시작하기'}
                </button>

                {/* Additional Info */}
                <div className="text-center mt-4">
                  <p className="text-xs text-gray-500">
                    언제든지 취소 가능 • 첫 7일 무료 체험
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">자주 묻는 질문</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">플랜을 언제든지 변경할 수 있나요?</h4>
              <p className="text-gray-600 text-sm">네, 언제든지 플랜을 업그레이드하거나 다운그레이드할 수 있습니다. 변경사항은 다음 결제 주기부터 적용됩니다.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">환불 정책은 어떻게 되나요?</h4>
              <p className="text-gray-600 text-sm">구독 후 7일 이내에는 100% 환불이 가능합니다. 그 이후에는 사용하지 않은 기간에 대해 비례 환불해드립니다.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">기업용 플랜의 혜택은 무엇인가요?</h4>
              <p className="text-gray-600 text-sm">팀 관리 기능, 전담 매니저, 맞춤형 교육과정, 우선 지원 등 기업에 특화된 다양한 혜택을 제공합니다.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">수료증은 어떻게 받을 수 있나요?</h4>
              <p className="text-gray-600 text-sm">각 강의를 완주하시면 자동으로 수료증이 발급되며, 마이페이지에서 다운로드하실 수 있습니다.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
