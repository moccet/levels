'use client';

import { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

interface StripePaymentFormProps {
  onSuccess: () => void;
}

export default function StripePaymentForm({ onSuccess }: StripePaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage('');

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/checkout/success`,
        },
        redirect: 'if_required',
      });

      if (error) {
        setErrorMessage(error.message || 'An error occurred during payment');
        setIsProcessing(false);
      } else {
        // Payment successful
        onSuccess();
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected error occurred');
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement
        options={{
          layout: 'tabs',
          wallets: {
            applePay: 'auto',
            googlePay: 'auto',
          },
        }}
      />

      {errorMessage && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-gradient-to-r from-[#1a3a2e] to-[#0f2419] text-white font-semibold py-4 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isProcessing ? 'Processing...' : 'Place order'}
      </button>

      <p className="text-xs text-gray-600">
        <strong>Automatic refills</strong><br />
        Expected next delivery November 22, 2025. Manage your subscription from the account page.
      </p>
    </form>
  );
}
