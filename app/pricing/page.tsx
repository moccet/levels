'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '../components/ui/Logo';

interface PricingPlan {
  id: 'monthly' | '3-month' | '6-month';
  name: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  badgeColor?: string;
  features?: string[];
  billingNote: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'monthly',
    name: 'Monthly Plan',
    price: 104,
    billingNote: 'Billed monthly',
  },
  {
    id: '3-month',
    name: '3 Month Plan',
    price: 89,
    originalPrice: 144,
    badge: 'Most popular',
    badgeColor: 'bg-green-100 text-green-800',
    features: [
      '£40 first order discount',
      '£15 additional discount applied to every order',
      'Cancel anytime after 3 months',
    ],
    billingNote: 'Billed monthly',
  },
  {
    id: '6-month',
    name: '6 Month Plan',
    price: 84,
    originalPrice: 144,
    badge: 'Best value',
    badgeColor: 'bg-blue-100 text-blue-800',
    billingNote: 'Billed monthly',
  },
];

const dosageSchedule = [
  { month: 1, dose: '0.25mg', monthly: 104, threeMonth: 89 },
  { month: 2, dose: '0.5mg', monthly: 169, threeMonth: 154 },
  { month: 3, dose: '1mg', monthly: 189, threeMonth: 174 },
  { month: 4, dose: '1.7mg', monthly: 219, threeMonth: 204 },
  { month: 5, dose: '2.4mg', monthly: 239, threeMonth: 224 },
];

export default function PricingPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | '3-month' | '6-month'>('3-month');
  const [showSchedule, setShowSchedule] = useState(false);

  const handleCheckout = () => {
    // Store selected plan in localStorage
    localStorage.setItem('selectedPlan', selectedPlan);
    router.push('/checkout/account');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Logo */}
      <div className="flex justify-center pt-12 pb-8">
        <Logo href="/" />
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 pb-16">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-3xl md:text-4xl font-normal text-gray-900 mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Choose your frequency
          </h1>
          <p className="text-gray-600" style={{ fontFamily: 'var(--font-poppins)' }}>
            Change isn't easy, but consistency pays off. Commit now and your future self will thank you.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="space-y-4 mb-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`bg-white rounded-2xl p-6 cursor-pointer transition-all ${
                selectedPlan === plan.id
                  ? 'border-2 border-gray-900 shadow-md'
                  : 'border-2 border-transparent hover:border-gray-300'
              } relative`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-2 left-6">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${plan.badgeColor}`}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Checkmark */}
              {selectedPlan === plan.id && (
                <div className="absolute top-6 right-6">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              )}

              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{plan.billingNote}</p>

                  {/* Features */}
                  {plan.features && (
                    <div className="space-y-2 mt-3">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <svg
                            className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="text-right ml-4">
                  {plan.originalPrice && (
                    <p className="text-sm text-gray-400 line-through">£{plan.originalPrice}</p>
                  )}
                  <p className="text-2xl font-bold text-gray-900">£{plan.price}</p>
                  <p className="text-xs text-gray-600">first month</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How Subscription Works */}
        <div className="bg-white rounded-2xl p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-3">How your subscription works</h3>
          <p className="text-sm text-gray-700 mb-4">
            As your dose increases each month, so does the price. But you're free to adjust this in the app at any time.
          </p>

          <button
            onClick={() => setShowSchedule(!showSchedule)}
            className="text-sm font-medium text-gray-900 flex items-center gap-1 hover:underline"
          >
            Learn more
            <svg
              className={`w-4 h-4 transition-transform ${showSchedule ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dosage Schedule Table */}
          {showSchedule && (
            <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Month</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Dosage</th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">3 Month Plan</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {dosageSchedule.map((schedule) => (
                    <tr key={schedule.month}>
                      <td className="px-4 py-3 text-sm text-gray-900">{schedule.month}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{schedule.dose}</td>
                      <td className="px-4 py-3 text-sm text-right">
                        <span className="line-through text-gray-400 mr-2">£{schedule.monthly}</span>
                        <span className="font-semibold text-gray-900">£{schedule.threeMonth}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Checkout Button */}
        <button
          onClick={handleCheckout}
          className="w-full bg-gradient-to-r from-[#1a3a2e] to-[#0f2419] text-white font-semibold py-4 px-8 rounded-full hover:opacity-90 transition-opacity text-lg shadow-md"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
