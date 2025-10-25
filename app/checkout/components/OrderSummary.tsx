'use client';

import { calculateTotal } from '../useCheckoutState';

interface OrderSummaryProps {
  selectedPlan: 'monthly' | '3-month' | '6-month';
}

export default function OrderSummary({ selectedPlan }: OrderSummaryProps) {
  const totals = calculateTotal(selectedPlan);

  const planNames = {
    'monthly': 'Monthly Plan',
    '3-month': '3 Month Plan',
    '6-month': '6 Month Plan',
  };

  const planSavings = {
    'monthly': null,
    '3-month': '£15/mo',
    '6-month': '£20/mo',
  };

  return (
    <div className="bg-white rounded-2xl p-6 sticky top-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>

      {/* Product */}
      <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200">
        <div className="w-16 h-16 bg-[#E8DCC8]/30 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">Wegovy</h3>
          <p className="text-sm text-gray-600 mb-2">{planNames[selectedPlan]}</p>
          {planSavings[selectedPlan] && (
            <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
              Save {planSavings[selectedPlan]}
            </span>
          )}
        </div>
      </div>

      {/* Approval Notice */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <div className="flex items-center gap-2 text-xs text-gray-600 uppercase tracking-wide font-semibold">
          <span>SUBJECT TO CLINICIAN'S APPROVAL</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-gray-900">£{totals.subtotal.toFixed(2)}</span>
        </div>

        {totals.planDiscount > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Longer plan discount</span>
            <span className="text-green-600">-£{totals.planDiscount.toFixed(2)}</span>
          </div>
        )}

        {totals.firstOrderDiscount > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">First Order Discount</span>
            <span className="text-green-600">-£{totals.firstOrderDiscount.toFixed(2)}</span>
          </div>
        )}

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="text-green-600">Free</span>
        </div>

        <div className="pt-3 border-t border-gray-200 flex justify-between items-baseline">
          <span className="text-base font-semibold text-gray-900">Today's total</span>
          <span className="text-2xl font-bold text-gray-900">£{totals.total.toFixed(2)}</span>
        </div>
      </div>

      {/* Payment Schedule */}
      <div className="text-xs text-gray-600 space-y-1">
        <div className="flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Pay monthly, £{totals.total + 65} next month</span>
        </div>
        <p className="leading-relaxed">
          Ongoing price varies by dose, adjust in app<br />
          Renew or cancel after 3 months
        </p>
      </div>
    </div>
  );
}
