'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { XCircle, RefreshCw, ArrowLeft, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PaymentFailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [failureInfo, setFailureInfo] = useState<any>(null);

  useEffect(() => {
    const code = searchParams.get('code');
    const message = searchParams.get('message');
    const orderId = searchParams.get('orderId');

    setFailureInfo({
      code,
      message,
      orderId,
    });
  }, [searchParams]);

  const getFailureReason = (code: string | null) => {
    switch (code) {
      case 'PAY_PROCESS_CANCELED':
        return '사용자가 결제를 취소했습니다.';
      case 'PAY_PROCESS_ABORTED':
        return '결제 진행 중 오류가 발생했습니다.';
      case 'REJECT_CARD_COMPANY':
        return '카드사에서 결제를 거절했습니다.';
      case 'INVALID_CARD_COMPANY':
        return '유효하지 않은 카드입니다.';
      case 'NOT_ENOUGH_BALANCE':
        return '잔액이 부족합니다.';
      case 'EXCEED_MAX_DAILY_PAYMENT_COUNT':
        return '일일 결제 한도를 초과했습니다.';
      case 'EXCEED_MAX_PAYMENT_AMOUNT':
        return '결제 금액 한도를 초과했습니다.';
      default:
        return failureInfo?.message || '알 수 없는 오류가 발생했습니다.';
    }
  };

  const getSolution = (code: string | null) => {
    switch (code) {
      case 'PAY_PROCESS_CANCELED':
        return '다시 결제를 진행해주세요.';
      case 'REJECT_CARD_COMPANY':
      case 'INVALID_CARD_COMPANY':
        return '다른 카드로 시도하거나 카드사에 문의해주세요.';
      case 'NOT_ENOUGH_BALANCE':
        return '카드 잔액을 확인하고 다시 시도해주세요.';
      case 'EXCEED_MAX_DAILY_PAYMENT_COUNT':
      case 'EXCEED_MAX_PAYMENT_AMOUNT':
        return '내일 다시 시도하거나 다른 카드를 사용해주세요.';
      default:
        return '잠시 후 다시 시도하거나 고객지원팀에 문의해주세요.';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Failure Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-12 h-12 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              결제에 실패했습니다
            </h1>
            <p className="text-xl text-gray-600">
              결제 처리 중 문제가 발생했습니다
            </p>
          </div>

          {/* Failure Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">실패 정보</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <div className="flex items-start">
                <XCircle className="w-6 h-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">실패 원인</h3>
                  <p className="text-red-700 mb-4">
                    {getFailureReason(failureInfo?.code)}
                  </p>
                  <h4 className="font-semibold text-red-800 mb-2">해결 방법</h4>
                  <p className="text-red-700">
                    {getSolution(failureInfo?.code)}
                  </p>
                </div>
              </div>
            </div>

            {failureInfo?.orderId && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">주문번호</div>
                  <div className="font-mono text-gray-900">{failureInfo.orderId}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">실패 시간</div>
                  <div className="text-gray-900">
                    2024년 1월 10일 오후 2:30
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Retry Payment */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                다시 시도하기
              </h3>
              <p className="text-gray-600 mb-6">
                결제를 다시 진행하거나 다른 결제 방법을 선택할 수 있습니다.
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => router.back()}
                  className="w-full flex items-center justify-center bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  결제 다시 시도
                </button>
                <Link
                  href="/pricing"
                  className="w-full flex items-center justify-center bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  플랜 선택으로 돌아가기
                </Link>
              </div>
            </div>

            {/* Help & Support */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                도움이 필요하신가요?
              </h3>
              <p className="text-gray-600 mb-6">
                결제 문제가 지속되면 고객지원팀에 문의해주세요. 빠르게 도움을 드리겠습니다.
              </p>
              <div className="space-y-4">
                <Link
                  href="/support"
                  className="w-full flex items-center justify-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <HelpCircle className="w-5 h-5 mr-2" />
                  고객지원 문의
                </Link>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">또는 직접 연락하세요</p>
                  <div className="space-y-1 text-sm">
                    <div className="text-gray-900">📞 1588-1234</div>
                    <div className="text-gray-900">✉️ support@aiacademy.co.kr</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              자주 묻는 질문
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Q. 결제가 실패했는데 돈이 빠져나갔어요
                </h4>
                <p className="text-gray-600 text-sm">
                  A. 결제 실패 시 승인된 금액은 자동으로 취소됩니다. 
                  보통 1-3일 내에 카드사를 통해 환불되며, 
                  더 오래 걸릴 경우 카드사에 직접 문의해주세요.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Q. 다른 결제 방법을 사용할 수 있나요?
                </h4>
                <p className="text-gray-600 text-sm">
                  A. 현재는 신용카드 결제만 지원합니다. 
                  다른 결제 방법이 필요하시면 고객지원팀에 문의해주세요.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Q. 해외 카드로 결제할 수 있나요?
                </h4>
                <p className="text-gray-600 text-sm">
                  A. 해외 발급 카드의 경우 카드사 정책에 따라 결제가 제한될 수 있습니다. 
                  카드사에 해외 결제 승인을 요청하거나 다른 카드를 사용해주세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
