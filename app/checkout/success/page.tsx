'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '../../components/ui/Logo';
import { useCheckoutState } from '../useCheckoutState';

export default function SuccessPage() {
  const router = useRouter();
  const { checkoutState, clearCheckout } = useCheckoutState();

  useEffect(() => {
    // Clear quiz answers after successful order
    localStorage.removeItem('quizAnswers');
  }, []);

  const orderNumber = `LVL${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Logo */}
      <div className="flex justify-center pt-12 pb-8">
        <Logo href="/" />
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h1
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Order confirmed!
          </h1>

          <p className="text-lg text-gray-600 mb-2">
            Order number: <span className="font-semibold text-gray-900">{orderNumber}</span>
          </p>

          <p className="text-gray-600 mb-8">
            We've sent a confirmation email to <span className="font-medium">{checkoutState.account.email}</span>
          </p>

          {/* What Happens Next */}
          <div className="bg-[#E8DCC8]/20 rounded-xl p-6 text-left mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#D4C5B0] rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Clinician review</h3>
                  <p className="text-sm text-gray-600">
                    Our medical team will review your assessment within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#D4C5B0] rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Prescription approval</h3>
                  <p className="text-sm text-gray-600">
                    Once approved, your prescription will be sent to our pharmacy
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#D4C5B0] rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Delivery</h3>
                  <p className="text-sm text-gray-600">
                    Your medication will be delivered discreetly to your door within 2 working days
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#D4C5B0] rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Ongoing support</h3>
                  <p className="text-sm text-gray-600">
                    Access your account to track progress and message our clinical team
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-left">
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm text-blue-900">
                <p className="font-medium mb-1">Important</p>
                <p>Your subscription will automatically renew monthly. You can adjust your dose, pause, or cancel anytime from your account dashboard.</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => router.push('/')}
              className="flex-1 bg-gradient-to-r from-[#1a3a2e] to-[#0f2419] text-white font-semibold py-4 px-6 rounded-full hover:opacity-90 transition-opacity"
            >
              Return home
            </button>
            <button
              onClick={() => alert('Account dashboard coming soon!')}
              className="flex-1 border-2 border-gray-900 text-gray-900 font-semibold py-4 px-6 rounded-full hover:bg-gray-50 transition-colors"
            >
              View account
            </button>
          </div>

          {/* Support */}
          <p className="text-sm text-gray-600 mt-8">
            Need help?{' '}
            <a href="mailto:support@levels.health" className="text-gray-900 underline hover:no-underline">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
