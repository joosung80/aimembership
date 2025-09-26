'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Check, CreditCard, Shield, Clock } from 'lucide-react';
import { tossPaymentsService, subscriptionPlans } from '@/lib/toss-payments';
import { supabase } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  
  const planId = searchParams.get('plan') as 'basic' | 'pro' | 'enterprise';
  const isYearly = searchParams.get('yearly') === 'true';
  
  const selectedPlan = subscriptionPlans.find(plan => plan.id === planId);

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/auth/login?redirect=/payment');
        return;
      }
      setUser(session.user);
    };
    
    getUser();
  }, [router]);

  if (!selectedPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">잘못된 플랜입니다</h1>
          <button
            onClick={() => router.push('/pricing')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            플랜 선택하기
          </button>
        </div>
      </div>
    );
  }

  const price = isYearly ? selectedPlan.yearlyPrice : selectedPlan.monthlyPrice;
  const discountedPrice = tossPaymentsService.calculateDiscountedPrice(price, isYearly);
  const discountAmount = price - discountedPrice;

  const handlePayment = async () => {
    if (!user) {
      alert('로그인이 필요합니다.');
      router.push('/auth/login?redirect=/payment');
      return;
    }
    
    setLoading(true);
    
    try {
      const orderId = tossPaymentsService.generateOrderId();
      const orderName = `${selectedPlan.name} 플랜 ${isYearly ? '연간' : '월간'} 구독`;
      
      console.log('🔧 Payment request:', {
        amount: discountedPrice,
        orderId,
        orderName,
        customerName: user.name || user.email,
        customerEmail: user.email,
      });

      await tossPaymentsService.requestPayment({
        amount: discountedPrice,
        orderId,
        orderName,
        customerName: user.name || user.email,
        customerEmail: user.email,
        successUrl: typeof window !== 'undefined' ? `${window.location.origin}/payment/success` : '/payment/success',
        failUrl: typeof window !== 'undefined' ? `${window.location.origin}/payment/fail` : '/payment/fail',
      });
    } catch (error) {
      console.error('🚨 Payment error:', error);
      alert('결제 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const planFeatures = {
    basic: [
      '기초 AI 강의 10개 수강',
      '커뮤니티 접근',
      '기본 학습 자료 제공',
      '월 1회 Q&A 세션',
      '수료증 발급',
    ],
    pro: [
      '전체 AI 강의 무제한 수강',
      '실전 프로젝트 30개 제공',
      '소스코드 및 템플릿 다운로드',
      '주 1회 라이브 멘토링',
      '1:1 커리어 상담 (월 1회)',
      '프리미엄 커뮤니티 접근',
      '우선 고객지원',
      '수료증 발급',
    ],
    enterprise: [
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
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              결제 정보 확인
            </h1>
            <p className="text-gray-600">
              선택하신 플랜의 결제 정보를 확인하고 구독을 시작하세요
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Plan Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedPlan.name} 플랜
                </h2>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {discountedPrice.toLocaleString()}원
                  <span className="text-lg text-gray-600 ml-2">
                    /{isYearly ? '년' : '월'}
                  </span>
                </div>
                {isYearly && discountAmount > 0 && (
                  <div className="text-sm text-green-600">
                    <span className="line-through text-gray-400 mr-2">
                      {price.toLocaleString()}원
                    </span>
                    {discountAmount.toLocaleString()}원 할인!
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-gray-900">포함된 혜택</h3>
                {planFeatures[planId].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Billing Info */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">결제 정보</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>플랜</span>
                    <span>{selectedPlan.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>결제 주기</span>
                    <span>{isYearly ? '연간' : '월간'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>다음 결제일</span>
                    <span>
                      {isYearly ? '2025년 1월 10일' : '2024년 2월 10일'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                결제 방법
              </h3>

              {/* Payment Method */}
              <div className="mb-6">
                <div className="border-2 border-blue-200 rounded-lg p-4 bg-blue-50">
                  <div className="flex items-center">
                    <CreditCard className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">신용카드</div>
                      <div className="text-sm text-gray-600">
                        안전한 토스페이먼츠 결제 시스템
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Info */}
              <div className="mb-8">
                <div className="flex items-start space-x-3 mb-4">
                  <Shield className="w-5 h-5 text-green-500 mt-0.5" />
                  <div className="text-sm text-gray-600">
                    <div className="font-medium text-gray-900 mb-1">안전한 결제</div>
                    <div>SSL 암호화로 보호되는 안전한 결제 환경</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div className="text-sm text-gray-600">
                    <div className="font-medium text-gray-900 mb-1">언제든 취소 가능</div>
                    <div>구독은 언제든지 취소할 수 있습니다</div>
                  </div>
                </div>
              </div>

              {/* Payment Button */}
              <button
                onClick={handlePayment}
                disabled={loading || !user}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    결제 처리 중...
                  </div>
                ) : (
                  `${discountedPrice.toLocaleString()}원 결제하기`
                )}
              </button>

              {/* Terms */}
              <div className="mt-6 text-xs text-gray-500 text-center">
                결제 진행 시{' '}
                <a href="/terms" className="text-blue-600 hover:underline">
                  이용약관
                </a>
                {' '}및{' '}
                <a href="/privacy" className="text-blue-600 hover:underline">
                  개인정보처리방침
                </a>
                에 동의하는 것으로 간주됩니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
