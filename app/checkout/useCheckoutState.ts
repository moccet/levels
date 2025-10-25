'use client';

import { useState, useEffect } from 'react';

export interface CheckoutState {
  // Selected plan
  selectedPlan: 'monthly' | '3-month' | '6-month';

  // Account information
  account: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    dob: string;
    agreedToTerms: boolean;
    marketingOptIn: boolean;
  };

  // Shipping information
  shipping: {
    postcode: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    country: string;
  };

  // Payment information
  payment: {
    method: 'card' | 'paypal';
    cardNumber?: string;
    cardExpiry?: string;
    cardCvv?: string;
    cardholderName?: string;
    billingAddressSame?: boolean;
  };
}

const initialState: CheckoutState = {
  selectedPlan: '3-month',
  account: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    dob: '',
    agreedToTerms: false,
    marketingOptIn: false,
  },
  shipping: {
    postcode: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    country: 'UK',
  },
  payment: {
    method: 'card',
    billingAddressSame: true,
  },
};

export function useCheckoutState() {
  const [checkoutState, setCheckoutState] = useState<CheckoutState>(initialState);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('checkoutState');
    const storedPlan = localStorage.getItem('selectedPlan');

    if (stored) {
      try {
        const parsedState = JSON.parse(stored);
        setCheckoutState(parsedState);
      } catch (e) {
        console.error('Failed to parse stored checkout state:', e);
      }
    }

    // Also check for selected plan from pricing page
    if (storedPlan && (storedPlan === 'monthly' || storedPlan === '3-month' || storedPlan === '6-month')) {
      setCheckoutState(prev => ({
        ...prev,
        selectedPlan: storedPlan as '3-month' | 'monthly' | '6-month',
      }));
    }

    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('checkoutState', JSON.stringify(checkoutState));
    }
  }, [checkoutState, isLoaded]);

  const updateAccount = (updates: Partial<CheckoutState['account']>) => {
    setCheckoutState(prev => ({
      ...prev,
      account: { ...prev.account, ...updates },
    }));
  };

  const updateShipping = (updates: Partial<CheckoutState['shipping']>) => {
    setCheckoutState(prev => ({
      ...prev,
      shipping: { ...prev.shipping, ...updates },
    }));
  };

  const updatePayment = (updates: Partial<CheckoutState['payment']>) => {
    setCheckoutState(prev => ({
      ...prev,
      payment: { ...prev.payment, ...updates },
    }));
  };

  const clearCheckout = () => {
    setCheckoutState(initialState);
    localStorage.removeItem('checkoutState');
    localStorage.removeItem('selectedPlan');
  };

  return {
    checkoutState,
    updateAccount,
    updateShipping,
    updatePayment,
    clearCheckout,
    isLoaded,
  };
}

// Pricing information
export const pricingInfo = {
  monthly: { price: 104, discount: 0, firstOrderDiscount: 0 },
  '3-month': { price: 89, discount: 15, firstOrderDiscount: 40 },
  '6-month': { price: 84, discount: 20, firstOrderDiscount: 0 },
};

export function calculateTotal(plan: 'monthly' | '3-month' | '6-month') {
  const pricing = pricingInfo[plan];
  const subtotal = 144; // Base price
  const total = pricing.price;

  return {
    subtotal,
    planDiscount: pricing.discount,
    firstOrderDiscount: pricing.firstOrderDiscount,
    shipping: 0, // Free shipping
    total,
  };
}
