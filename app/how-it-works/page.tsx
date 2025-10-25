import React from 'react';
import { Button } from '../components/ui';
import TestimonialsCarousel from '../components/sections/TestimonialsCarousel';
import type { Metadata } from 'next';
import ScrollTrigger from './ScrollTrigger';

export const metadata: Metadata = {
  title: 'How It Works | Levels',
  description: 'Discover how Levels works. From initial assessment to ongoing support, we guide you through every step of your weight loss journey.',
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: '01',
      title: 'Take assessment',
      description: 'Complete our comprehensive medical questionnaire. We\'ll ask about your health history, lifestyle, goals, and any medications you\'re currently taking. This helps us understand your unique needs and create a personalised plan.',
      image: '/images/Levels1.png',
    },
    {
      number: '02',
      title: 'Expert review',
      description: 'Our team of specialist doctors and clinicians carefully review your information. They assess your suitability for treatment and create a tailored plan that considers your medical history, lifestyle, and weight loss goals.',
      image: '/images/Levels2.png',
    },
    {
      number: '03',
      title: 'Start your journey',
      description: 'Once approved, your treatment is delivered discreetly to your door. You\'ll have access to our app where you can track progress, message your care team, and access educational resources to support your journey.',
      image: '/images/Levels3.png',
    },
    {
      number: '04',
      title: 'Ongoing support',
      description: 'Your dedicated care team monitors your progress and adjusts your treatment as needed. Regular check-ins, coaching sessions, and 24/7 support ensure you stay on track and achieve sustainable results.',
      image: '/images/levels4.png',
    },
  ];

  const supportFeatures = [
    {
      title: 'Medical expertise',
      description: 'Access to leading specialists who understand weight loss medicine and create personalised treatment plans.',
      image: '/images/1.png',
    },
    {
      title: 'Proven treatments',
      description: 'FDA and MHRA approved medications with clinically proven results for sustainable weight loss.',
      image: '/images/2.png',
    },
    {
      title: 'Personal coaching',
      description: 'One-on-one coaching to help you build healthy habits, overcome challenges, and stay motivated.',
      image: '/images/3.png',
    },
    {
      title: 'Continuous monitoring',
      description: 'Regular health tracking and plan adjustments to ensure safe, effective, and lasting results.',
      image: '/images/4.png',
    },
  ];

  return (
    <div className="flex flex-col">
      <ScrollTrigger />
      {/* Spacer for fixed header */}
      <div className="h-[120px] md:h-[150px] bg-white" />

      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/background.png)' }}
        />

        {/* Content */}
        <div className="page-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display text-white mb-[var(--spacing-6x)]">
              How it works
            </h1>
            <p className="text-body-1 text-white mb-[var(--spacing-8x)]">
              Your journey to sustainable weight loss starts here. We combine medical expertise, proven treatments, and ongoing support to help you achieve lasting results.
            </p>
            <Button variant="inverted" size="large" href="/weight-loss">
              Get started today
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Steps Section */}
      <section className="page-container py-[56px] md:py-[120px]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-heading-2 text-center mb-[var(--spacing-16x)]">
            Your journey with Levels
          </h2>

          <div className="flex flex-col gap-[var(--spacing-20x)]">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-[var(--spacing-8x)] md:gap-[var(--spacing-12x)] items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="rounded-[var(--radius-card)] overflow-hidden aspect-square">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 flex flex-col gap-[var(--spacing-4x)]">
                  <div className="text-[80px] md:text-[120px] font-light text-[var(--color-surface-neutral-medium)] leading-none">
                    {step.number}
                  </div>
                  <h3 className="text-heading-2">{step.title}</h3>
                  <p className="text-body-2 text-[var(--color-text-dark)]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Support You Section */}
      <section className="bg-[var(--color-surface-white-xLight)] py-[56px] md:py-[120px]">
        <div className="page-container">
          <h2 className="text-heading-2 text-center mb-[var(--spacing-14x)]">
            How we support you
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-12x)] max-w-5xl mx-auto">
            {supportFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col gap-[var(--spacing-6x)]">
                <div className="w-full aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[var(--spacing-3x)]">
                  <h3 className="text-heading-3 text-black">{feature.title}</h3>
                  <p className="text-body-3 text-[var(--color-text-dark)]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="page-container py-[56px] md:py-[120px]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-[var(--spacing-14x)]">
            What to expect
          </h2>

          <div className="flex flex-col gap-[var(--spacing-12x)]">
            <div className="flex flex-col gap-[var(--spacing-4x)]">
              <h3 className="text-heading-3">Initial consultation</h3>
              <p className="text-body-2 text-[var(--color-text-dark)]">
                Your journey begins with a thorough assessment. We take the time to understand your medical history, lifestyle, and goals. Our doctors review your information carefully to ensure the treatment is safe and suitable for you.
              </p>
            </div>

            <div className="flex flex-col gap-[var(--spacing-4x)]">
              <h3 className="text-heading-3">Treatment delivery</h3>
              <p className="text-body-2 text-[var(--color-text-dark)]">
                If approved, your medication is delivered discreetly to your door with clear instructions. We include everything you need to get started, along with educational materials about your treatment and how to use it safely.
              </p>
            </div>

            <div className="flex flex-col gap-[var(--spacing-4x)]">
              <h3 className="text-heading-3">Regular monitoring</h3>
              <p className="text-body-2 text-[var(--color-text-dark)]">
                Your care team tracks your progress and adjusts your treatment plan as needed. You'll have regular check-ins to discuss your results, address any concerns, and make sure you're getting the best possible outcomes.
              </p>
            </div>

            <div className="flex flex-col gap-[var(--spacing-4x)]">
              <h3 className="text-heading-3">Lifestyle support</h3>
              <p className="text-body-2 text-[var(--color-text-dark)]">
                Weight loss is about more than medication. Our coaching team helps you build sustainable habits around nutrition, exercise, sleep, and stress management. We provide the tools and support you need for lasting success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#dad8fa] via-[#dfcacf] to-[#f7ad8a] py-[56px] md:py-[120px]">
        <div className="page-container text-center">
          <h2 className="text-heading-2 text-[var(--color-text-xDark)] mb-[var(--spacing-6x)]">
            Ready to start your journey?
          </h2>
          <p className="text-body-2 text-[var(--color-text-dark)] mb-[var(--spacing-8x)] max-w-2xl mx-auto">
            Take the first step towards sustainable weight loss. Complete our assessment and speak to one of our specialists today.
          </p>
          <Button variant="primary" size="large" href="/weight-loss" className="bg-black text-white hover:bg-black/90">
            Get started today
          </Button>
        </div>
      </section>
    </div>
  );
}
