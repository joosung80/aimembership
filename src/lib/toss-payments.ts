import { loadTossPayments } from '@tosspayments/payment-sdk';
import { config } from './config';

export interface PaymentRequest {
  amount: number;
  orderId: string;
  orderName: string;
  customerName?: string;
  customerEmail?: string;
  successUrl: string;
  failUrl: string;
}

export interface SubscriptionPlan {
  id: 'basic' | 'pro' | 'enterprise';
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    monthlyPrice: 29000,
    yearlyPrice: 290000,
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 59000,
    yearlyPrice: 590000,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: 99000,
    yearlyPrice: 990000,
  },
];

export class TossPaymentsService {
  private tossPayments: any = null;

  async initialize() {
    if (!this.tossPayments) {
      this.tossPayments = await loadTossPayments(config.tossPayments.clientKey);
    }
    return this.tossPayments;
  }

  async requestPayment(paymentRequest: PaymentRequest) {
    const tossPayments = await this.initialize();
    
    console.log('🔧 TossPayments request:', paymentRequest);
    
    try {
      return await tossPayments.requestPayment('카드', {
        amount: paymentRequest.amount,
        orderId: paymentRequest.orderId,
        orderName: paymentRequest.orderName,
        customerName: paymentRequest.customerName,
        customerEmail: paymentRequest.customerEmail,
        successUrl: paymentRequest.successUrl,
        failUrl: paymentRequest.failUrl,
      });
    } catch (error) {
      console.error('🚨 TossPayments error:', error);
      throw error;
    }
  }

  async requestBillingAuth(customerKey: string, successUrl: string, failUrl: string) {
    const tossPayments = await this.initialize();
    
    return tossPayments.requestBillingAuth('카드', {
      customerKey,
      successUrl,
      failUrl,
    });
  }

  generateOrderId(): string {
    return `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  generateCustomerKey(userId: string): string {
    return `customer_${userId}`;
  }

  calculateDiscountedPrice(originalPrice: number, isYearly: boolean): number {
    if (isYearly) {
      // 연간 결제 시 2개월 무료 (약 17% 할인)
      return Math.floor(originalPrice * 10 / 12);
    }
    return originalPrice;
  }
}

export const tossPaymentsService = new TossPaymentsService();
