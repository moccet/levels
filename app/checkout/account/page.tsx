'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Logo from '../../components/ui/Logo';
import OrderSummary from '../components/OrderSummary';
import StripePaymentForm from '../components/StripePaymentForm';
import { useCheckoutState, calculateTotal } from '../useCheckoutState';
import { useQuizState } from '../../quiz/useQuizState';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

type CheckoutStep = 'account' | 'shipping' | 'payment';

export default function CheckoutPage() {
  const router = useRouter();
  const { checkoutState, updateAccount, updateShipping, updatePayment } = useCheckoutState();
  const { answers } = useQuizState();

  const [currentStep, setCurrentStep] = useState<CheckoutStep>('account');
  const [completedSteps, setCompletedSteps] = useState<CheckoutStep[]>([]);

  // Account form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);

  // Shipping form state
  const [postcode, setPostcode] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [addresses, setAddresses] = useState<any[]>([]);
  const [showAddressList, setShowAddressList] = useState(false);

  // Payment form state
  const [clientSecret, setClientSecret] = useState<string>('');
  const [isCreatingPaymentIntent, setIsCreatingPaymentIntent] = useState(false);

  // Address lookup state
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);
  const [addressError, setAddressError] = useState('');

  // Pre-fill from quiz answers
  useEffect(() => {
    if (answers[18]) setFirstName(String(answers[18]).split(' ')[0] || '');
    if (answers[18]) setLastName(String(answers[18]).split(' ').slice(1).join(' ') || '');
    if (answers[16]) setEmail(String(answers[16]));
    if (answers[17]) setPhone(String(answers[17]));
    if (answers[19]) setPostcode(String(answers[19]));
  }, [answers]);

  // Load saved checkout state
  useEffect(() => {
    if (checkoutState.account.email) {
      setEmail(checkoutState.account.email);
      setFirstName(checkoutState.account.firstName);
      setLastName(checkoutState.account.lastName);
      setPhone(checkoutState.account.phone);
      setDob(checkoutState.account.dob);
    }
    if (checkoutState.shipping.postcode) {
      setPostcode(checkoutState.shipping.postcode);
      setAddressLine1(checkoutState.shipping.addressLine1);
      setAddressLine2(checkoutState.shipping.addressLine2);
      setCity(checkoutState.shipping.city);
    }
  }, [checkoutState]);

  // Create payment intent when payment step is reached
  useEffect(() => {
    if (currentStep === 'payment' && isStepCompleted('shipping') && !clientSecret && !isCreatingPaymentIntent) {
      createPaymentIntent();
    }
  }, [currentStep, clientSecret, isCreatingPaymentIntent]);

  const createPaymentIntent = async () => {
    setIsCreatingPaymentIntent(true);
    try {
      const totals = calculateTotal(checkoutState.selectedPlan);

      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: totals.total,
          currency: 'gbp',
          metadata: {
            plan: checkoutState.selectedPlan,
            email: checkoutState.account.email,
          },
        }),
      });

      const data = await response.json();

      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
      } else {
        console.error('Failed to create payment intent:', data.error);
      }
    } catch (error) {
      console.error('Error creating payment intent:', error);
    } finally {
      setIsCreatingPaymentIntent(false);
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const formatPostcode = (pc: string) => {
    // Remove spaces and convert to uppercase
    const cleaned = pc.replace(/\s/g, '').toUpperCase();

    // Format UK postcode (e.g., SW59JZ -> SW5 9JZ)
    if (cleaned.length >= 5) {
      return cleaned.slice(0, -3) + ' ' + cleaned.slice(-3);
    }
    return cleaned;
  };

  const handleFindAddress = async () => {
    if (!postcode) {
      setAddressError('Please enter a postcode');
      return;
    }

    setIsLoadingAddress(true);
    setAddressError('');
    setShowAddressList(false);

    try {
      // Format postcode properly
      const formattedPostcode = formatPostcode(postcode);
      setPostcode(formattedPostcode); // Update display

      const apiKey = process.env.NEXT_PUBLIC_GETADDRESS_API_KEY;

      // Step 1: Use Autocomplete API to search by postcode
      const autocompleteUrl = `https://api.getAddress.io/autocomplete/${encodeURIComponent(formattedPostcode)}?api-key=${apiKey}&all=true&top=50`;
      const autocompleteResponse = await fetch(autocompleteUrl);

      if (!autocompleteResponse.ok) {
        if (autocompleteResponse.status === 404) {
          throw new Error(`No addresses found for postcode ${formattedPostcode}. Please check the postcode or enter your address manually.`);
        } else if (autocompleteResponse.status === 401) {
          throw new Error('Address lookup service unavailable. Please enter your address manually.');
        } else if (autocompleteResponse.status === 429) {
          throw new Error('Too many requests. Please try again in a moment.');
        }
        throw new Error('Unable to look up address. Please enter manually.');
      }

      const autocompleteData = await autocompleteResponse.json();

      if (autocompleteData.suggestions && autocompleteData.suggestions.length > 0) {
        // Store suggestions with their IDs for fetching full details
        setAddresses(autocompleteData.suggestions);
        setShowAddressList(true);
        setAddressError('');
      } else {
        throw new Error('No addresses found for this postcode');
      }
    } catch (error: any) {
      console.error('Address lookup error:', error);
      setAddressError(error.message || 'Unable to find addresses. Please enter your address manually.');
      setAddresses([]);
      setShowAddressList(false);
    } finally {
      setIsLoadingAddress(false);
    }
  };

  const handleSelectAddress = async (suggestion: any) => {
    setIsLoadingAddress(true);
    try {
      const apiKey = process.env.NEXT_PUBLIC_GETADDRESS_API_KEY;

      // Step 2: Fetch full address details using the ID
      const getUrl = `https://api.getAddress.io/get/${suggestion.id}?api-key=${apiKey}`;
      const response = await fetch(getUrl);

      if (!response.ok) {
        throw new Error('Unable to retrieve address details');
      }

      const addressData = await response.json();

      // Populate form fields with full address
      setAddressLine1(addressData.line_1 || '');
      setAddressLine2([addressData.line_2, addressData.line_3, addressData.line_4].filter(Boolean).join(', ') || '');
      setCity(addressData.town_or_city || addressData.locality || '');
      setPostcode(addressData.postcode || postcode);
      setShowAddressList(false);
    } catch (error) {
      console.error('Error fetching address details:', error);
      setAddressError('Unable to load address details. Please enter manually.');
    } finally {
      setIsLoadingAddress(false);
    }
  };

  const handleAccountSubmit = () => {
    if (!firstName || !lastName || !email || !password || !phone || !dob) {
      alert('Please fill in all required fields');
      return;
    }
    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (!agreedToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    updateAccount({
      firstName,
      lastName,
      email,
      password,
      phone,
      dob,
      agreedToTerms,
      marketingOptIn,
    });

    setCompletedSteps([...completedSteps, 'account']);
    setCurrentStep('shipping');
  };

  const handleShippingSubmit = () => {
    if (!postcode || !addressLine1 || !city) {
      alert('Please fill in all required fields');
      return;
    }

    updateShipping({
      postcode,
      addressLine1,
      addressLine2,
      city,
      country: 'UK',
    });

    setCompletedSteps([...completedSteps, 'shipping']);
    setCurrentStep('payment');
  };

  const handlePaymentSuccess = () => {
    // Payment was successful, redirect to success page
    router.push('/checkout/success');
  };

  const isStepCompleted = (step: CheckoutStep) => completedSteps.includes(step);
  const isStepActive = (step: CheckoutStep) => currentStep === step;

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Logo */}
      <div className="flex justify-center pt-8 pb-6">
        <Logo href="/" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Forms */}
          <div className="space-y-6">
            {/* 1. Account Section */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div
                className="flex items-center justify-between p-6 cursor-pointer"
                onClick={() => !isStepCompleted('account') && setCurrentStep('account')}
              >
                <div className="flex items-center gap-3">
                  {isStepCompleted('account') && (
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">1. Create your account</h2>
                    {isStepCompleted('account') && (
                      <p className="text-sm text-gray-600">{email}</p>
                    )}
                  </div>
                </div>
                {isStepCompleted('account') && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentStep('account');
                      setCompletedSteps(completedSteps.filter(s => s !== 'account'));
                    }}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Edit
                  </button>
                )}
              </div>

              {isStepActive('account') && !isStepCompleted('account') && (
                <div className="p-6 pt-0 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />

                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>

                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />

                  <input
                    type="text"
                    placeholder="Date of birth (DD/MM/YYYY)"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500">We need this to issue your prescription</p>

                  <div className="space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        className="mt-1"
                      />
                      <span className="text-sm text-gray-700">
                        I agree to the{' '}
                        <a href="#" className="underline">terms and conditions</a>,{' '}
                        <a href="#" className="underline">terms of sale</a> and{' '}
                        <a href="#" className="underline">privacy policy</a>
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={marketingOptIn}
                        onChange={(e) => setMarketingOptIn(e.target.checked)}
                        className="mt-1"
                      />
                      <span className="text-sm text-gray-700">
                        Let me know about new products, offers and more
                      </span>
                    </label>
                  </div>

                  <button
                    onClick={handleAccountSubmit}
                    className="w-full bg-gradient-to-r from-[#1a3a2e] to-[#0f2419] text-white font-semibold py-4 rounded-full hover:opacity-90 transition-opacity"
                  >
                    Create account
                  </button>

                  <p className="text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <a href="#" className="underline hover:no-underline">Log in</a>
                  </p>

                  <p className="text-xs text-gray-500 text-center">
                    This site is protected by reCAPTCHA, the{' '}
                    <a href="#" className="underline">privacy terms</a> and{' '}
                    <a href="#" className="underline">service terms</a> of Google are applied.
                  </p>
                </div>
              )}
            </div>

            {/* 2. Shipping Section */}
            <div className={`bg-white rounded-2xl shadow-sm overflow-hidden ${!isStepCompleted('account') && 'opacity-50'}`}>
              <div
                className="flex items-center justify-between p-6 cursor-pointer"
                onClick={() => isStepCompleted('account') && setCurrentStep('shipping')}
              >
                <div className="flex items-center gap-3">
                  {isStepCompleted('shipping') && (
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">2. Shipping information</h2>
                    {isStepCompleted('shipping') && (
                      <p className="text-sm text-gray-600">
                        {[addressLine1, city, postcode].filter(Boolean).join(', ')}
                      </p>
                    )}
                  </div>
                </div>
                {isStepCompleted('shipping') && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentStep('shipping');
                      setCompletedSteps(completedSteps.filter(s => s !== 'shipping'));
                    }}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Edit
                  </button>
                )}
              </div>

              {isStepActive('shipping') && isStepCompleted('account') && !isStepCompleted('shipping') && (
                <div className="p-6 pt-0 space-y-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g., SW1A 1AA"
                      value={postcode}
                      onChange={(e) => {
                        const value = e.target.value.toUpperCase();
                        setPostcode(value);
                        setAddressError('');
                      }}
                      onBlur={(e) => {
                        // Auto-format on blur
                        if (e.target.value) {
                          setPostcode(formatPostcode(e.target.value));
                        }
                      }}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleFindAddress();
                        }
                      }}
                      maxLength={8}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent uppercase"
                    />
                    <button
                      onClick={handleFindAddress}
                      disabled={isLoadingAddress}
                      className="px-6 py-3 bg-[#E8DCC8] text-gray-900 font-medium rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {isLoadingAddress ? 'Searching...' : 'Find Address'}
                    </button>
                  </div>

                  {addressError && (
                    <p className="text-sm text-red-600">{addressError}</p>
                  )}

                  {/* Address List */}
                  {showAddressList && addresses.length > 0 && (
                    <div className="border border-gray-300 rounded-lg max-h-64 overflow-y-auto">
                      <p className="text-sm font-medium text-gray-700 p-3 bg-gray-50 border-b">
                        Select your address ({addresses.length} found)
                      </p>
                      <div className="divide-y">
                        {addresses.map((suggestion, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => handleSelectAddress(suggestion)}
                            disabled={isLoadingAddress}
                            className="w-full text-left p-3 hover:bg-[#E8DCC8]/20 transition-colors disabled:opacity-50"
                          >
                            <p className="text-sm text-gray-900">{suggestion.address}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      // Allow manual entry by clearing error and hiding address list
                      setAddressError('');
                      setShowAddressList(false);
                    }}
                    className="text-sm text-gray-600 hover:underline"
                  >
                    Enter address manually →
                  </button>

                  <input
                    type="text"
                    placeholder="Address Line 1"
                    value={addressLine1}
                    onChange={(e) => setAddressLine1(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />

                  <input
                    type="text"
                    placeholder="Address Line 2 (optional)"
                    value={addressLine2}
                    onChange={(e) => setAddressLine2(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />

                  <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />

                  <div className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 p-4 rounded-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span>Free two days delivery</span>
                  </div>

                  <button
                    onClick={handleShippingSubmit}
                    className="w-full bg-gradient-to-r from-[#1a3a2e] to-[#0f2419] text-white font-semibold py-4 rounded-full hover:opacity-90 transition-opacity"
                  >
                    Continue to payment
                  </button>
                </div>
              )}
            </div>

            {/* 3. Payment Section */}
            <div className={`bg-white rounded-2xl shadow-sm overflow-hidden ${!isStepCompleted('shipping') && 'opacity-50'}`}>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">3. Payment method</h2>
              </div>

              {isStepActive('payment') && isStepCompleted('shipping') && (
                <div className="p-6 pt-0 space-y-4">
                  {isCreatingPaymentIntent && (
                    <div className="flex items-center justify-center py-8">
                      <div className="animate-spin w-8 h-8 border-4 border-gray-200 border-t-gray-900 rounded-full" />
                      <span className="ml-3 text-gray-600">Setting up secure payment...</span>
                    </div>
                  )}

                  {clientSecret && (
                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                      <StripePaymentForm onSuccess={handlePaymentSuccess} />
                    </Elements>
                  )}
                </div>
              )}
            </div>

            {/* Benefits List */}
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Flexible subscription</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Clinically proven treatments</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span>Delivered in 2 working days</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <span>Ongoing clinician support</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Delivered discretely to your door</span>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <OrderSummary selectedPlan={checkoutState.selectedPlan} />
          </div>
        </div>
      </div>
    </div>
  );
}
