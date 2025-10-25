import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-09-30.clover',
});

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = 'gbp', metadata } = await request.json();

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to pence/cents
      currency,
      automatic_payment_methods: {
        enabled: true, // This enables Apple Pay, Google Pay, Link, etc.
      },
      metadata: metadata || {},
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err: any) {
    console.error('Payment Intent Error:', err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
