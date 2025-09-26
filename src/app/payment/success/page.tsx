'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CheckCircle, ArrowRight, Download, Users } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [paymentInfo, setPaymentInfo] = useState<any>(null);

  useEffect(() => {
    const paymentKey = searchParams.get('paymentKey');
    const orderId = searchParams.get('orderId');
    const amount = searchParams.get('amount');

    console.log('🔧 Payment success params:', { paymentKey, orderId, amount });

    if (!paymentKey || !orderId || !amount) {
      console.warn('⚠️ Missing payment parameters, redirecting to home');
      router.push('/');
      return;
    }

    // TODO: Verify payment with backend and update user subscription
    setPaymentInfo({
      paymentKey,
      orderId,
      amount: parseInt(amount),
    });
    setLoading(false);
  }, [searchParams, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">결제 정보를 확인하고 있습니다...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              결제가 완료되었습니다!
            </h1>
            <p className="text-xl text-gray-600">
              AI Academy 멤버십에 오신 것을 환영합니다
            </p>
          </div>

          {/* Payment Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">결제 정보</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-gray-600 mb-1">주문번호</div>
                <div className="font-mono text-gray-900">{paymentInfo?.orderId}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">결제금액</div>
                <div className="text-2xl font-bold text-blue-600">
                  {paymentInfo?.amount.toLocaleString()}원
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">결제일시</div>
                <div className="text-gray-900">
                  2024년 1월 10일 오후 2:30
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">결제방법</div>
                <div className="text-gray-900">신용카드</div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                지금 바로 시작하세요
              </h3>
              <div className="space-y-4">
                <Link
                  href="/dashboard"
                  className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">대시보드 이동</div>
                      <div className="text-sm text-gray-600">학습 진도 확인하기</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </Link>

                <Link
                  href="/courses"
                  className="flex items-center justify-between p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <Download className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">강의 시작하기</div>
                      <div className="text-sm text-gray-600">첫 번째 강의 수강하기</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                </Link>

                <Link
                  href="/community"
                  className="flex items-center justify-between p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">커뮤니티 참여</div>
                      <div className="text-sm text-gray-600">다른 수강생들과 소통하기</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                </Link>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                환영합니다! 🎉
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                이제 AI Academy의 모든 강의와 리소스에 접근할 수 있습니다. 
                실리콘밸리 전문가들이 만든 커리큘럼으로 AI 전문가가 되어보세요!
              </p>
              
              <div className="bg-white/10 rounded-lg p-4 mb-6">
                <h4 className="font-semibold mb-2">첫 주 학습 가이드</h4>
                <ul className="text-sm text-blue-100 space-y-1">
                  <li>• AI 기초 개념 강의 수강</li>
                  <li>• 첫 번째 실습 프로젝트 완료</li>
                  <li>• 커뮤니티에서 자기소개하기</li>
                  <li>• 학습 목표 설정하기</li>
                </ul>
              </div>

              <div className="text-center">
                <p className="text-sm text-blue-200">
                  궁금한 점이 있으시면 언제든지 고객지원팀에 문의해주세요
                </p>
              </div>
            </div>
          </div>

          {/* Receipt Download */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              영수증 및 세금계산서
            </h3>
            <p className="text-gray-600 mb-6">
              결제 영수증은 이메일로 발송되며, 세금계산서가 필요하신 경우 고객지원팀에 문의해주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                영수증 다운로드
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                세금계산서 요청
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
