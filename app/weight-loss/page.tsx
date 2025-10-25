import React from 'react';
import { Button, Badge } from '../components/ui';
import TestimonialsCarousel from '../components/sections/TestimonialsCarousel';
import type { Metadata } from 'next';
import ScrollTrigger from '../how-it-works/ScrollTrigger';

export const metadata: Metadata = {
  title: 'Weight Loss Treatment | Levels',
  description: 'Discover Levels\'s science-led weight loss program. Access medications like Mounjaro, Wegovy, and Saxenda with expert medical support.',
};

export default function WeightLossPage() {
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
              Weight loss that works
            </h1>
            <p className="text-body-1 text-white mb-[var(--spacing-8x)]">
              Clinically proven treatments combined with expert support to help you
              achieve sustainable weight loss.
            </p>
            <Button variant="inverted" size="large" href="#treatments">
              Explore treatments
            </Button>
          </div>
        </div>
      </section>

      {/* How We Support You */}
      <section className="bg-[var(--color-surface-white-xLight)] py-[56px] md:py-[120px]">
        <div className="page-container">
          <h2 className="text-heading-2 text-center mb-[var(--spacing-14x)]">
            A comprehensive approach to weight loss
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-12x)] max-w-5xl mx-auto">
            {[
              {
                title: 'Medical expertise',
                description: 'Access to leading specialists who review your case and create a personalized plan tailored to your needs.',
                image: '/images/1.png',
              },
              {
                title: 'Proven treatments',
                description: 'FDA and MHRA approved medications with clinically proven results for sustainable weight loss.',
                image: '/images/2.png',
              },
              {
                title: 'Personal coaching',
                description: 'One-on-one support to help you build healthy habits, overcome challenges, and stay motivated throughout your journey.',
                image: '/images/3.png',
              },
              {
                title: 'Ongoing support',
                description: 'Regular check-ins, coaching, and treatment adjustments to ensure safe, effective, and lasting results.',
                image: '/images/4.png',
              },
            ].map((feature, index) => (
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

      {/* How GLP-1 Medications Work */}
      <section className="page-container py-[56px] md:py-[120px]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 mb-[var(--spacing-14x)] text-center">
            How GLP-1 medications work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-8x)]">
            <div className="flex flex-col items-center text-center gap-[var(--spacing-4x)]">
              <div className="w-16 h-16 rounded-full bg-[#E8DCC8]/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-heading-3">Reduce appetite</h3>
              <p className="text-body-3 text-[var(--color-text-dark)]">
                Signals your brain that you're full, helping you eat less without constant hunger.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-[var(--spacing-4x)]">
              <div className="w-16 h-16 rounded-full bg-[#E8DCC8]/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-heading-3">Control blood sugar</h3>
              <p className="text-body-3 text-[var(--color-text-dark)]">
                Regulates insulin response and blood glucose levels, reducing cravings and energy crashes.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-[var(--spacing-4x)]">
              <div className="w-16 h-16 rounded-full bg-[#E8DCC8]/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-heading-3">Slow digestion</h3>
              <p className="text-body-3 text-[var(--color-text-dark)]">
                Food stays in your stomach longer, keeping you satisfied between meals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="bg-[var(--color-surface-white-xLight)] py-[56px] md:py-[120px]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-heading-2 mb-[var(--spacing-14x)] text-center">
            Our treatments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-8x)] max-w-6xl mx-auto">
            {/* Mounjaro */}
            <div className="bg-white rounded-[var(--radius-xlarge)] overflow-hidden flex flex-col">
              <div className="w-full aspect-[4/3]">
                <img
                  src="/images/mounjaro.png"
                  alt="Mounjaro"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-[var(--spacing-8x)] flex flex-col gap-[var(--spacing-6x)]">
                <div className="flex items-start justify-between">
                  <h3 className="text-heading-3">Mounjaro</h3>
                  <Badge type="positive">Most effective</Badge>
                </div>
                <p className="text-body-3 text-[var(--color-text-dark)]">
                  The latest GLP-1 medication. Clinical trials show average weight loss
                  of up to 23% of body weight.
                </p>
                <div className="flex flex-col gap-[var(--spacing-2x)]">
                  <div className="text-body-4 text-[var(--color-text-dark)]">
                    ✓ Once weekly injection
                  </div>
                  <div className="text-body-4 text-[var(--color-text-dark)]">
                    ✓ Reduces appetite and cravings
                  </div>
                  <div className="text-body-4 text-[var(--color-text-dark)]">
                    ✓ Improves blood sugar control
                  </div>
                </div>
                <Button href="/treatments" className="bg-black text-white hover:bg-black/90">
                  Learn more
                </Button>
              </div>
            </div>

            {/* Wegovy */}
            <div className="bg-white rounded-[var(--radius-xlarge)] overflow-hidden flex flex-col">
              <div className="w-full aspect-[4/3]">
                <img
                  src="/images/wegovy.png"
                  alt="Wegovy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-[var(--spacing-8x)] flex flex-col gap-[var(--spacing-6x)]">
                <div className="flex items-start justify-between">
                  <h3 className="text-heading-3">Wegovy</h3>
                  <Badge type="neutral">Popular</Badge>
                </div>
                <p className="text-body-3 text-[var(--color-text-dark)]">
                  Proven GLP-1 medication with clinical results showing up to 21%
                  average weight loss.
                </p>
                <div className="flex flex-col gap-[var(--spacing-2x)]">
                  <div className="text-body-4 text-[var(--color-text-dark)]">
                    ✓ Once weekly injection
                  </div>
                  <div className="text-body-4 text-[var(--color-text-dark)]">
                    ✓ Reduces hunger
                  </div>
                  <div className="text-body-4 text-[var(--color-text-dark)]">
                    ✓ Well-established safety profile
                  </div>
                </div>
                <Button href="/treatments" className="bg-black text-white hover:bg-black/90">
                  Learn more
                </Button>
              </div>
            </div>

            {/* Orlos */}
            <div className="bg-white rounded-[var(--radius-xlarge)] overflow-hidden flex flex-col">
              <div className="w-full aspect-[4/3]">
                <img
                  src="/images/orlos.png"
                  alt="Orlos"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-[var(--spacing-8x)] flex flex-col gap-[var(--spacing-6x)]">
                <h3 className="text-heading-3">Orlos</h3>
                <p className="text-body-3 text-[var(--color-text-dark)]">
                  Oral medication that works by reducing fat absorption.
                  Average weight loss of up to 8% of body weight.
                </p>
                <div className="flex flex-col gap-[var(--spacing-2x)]">
                  <div className="text-body-4 text-[var(--color-text-dark)]">
                    ✓ Oral tablet
                  </div>
                  <div className="text-body-4 text-[var(--color-text-dark)]">
                    ✓ Blocks fat absorption
                  </div>
                  <div className="text-body-4 text-[var(--color-text-dark)]">
                    ✓ No injections required
                  </div>
                </div>
                <Button href="/treatments" className="bg-black text-white hover:bg-black/90">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - Timeline */}
      <section className="page-container py-[56px] md:py-[120px]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-heading-2 text-center mb-[var(--spacing-16x)]">
            How it works
          </h2>

          <div className="flex flex-col gap-[var(--spacing-20x)]">
            {[
              {
                number: '01',
                title: 'Complete our assessment',
                description: 'Answer questions about your health, lifestyle, and weight loss goals. We\'ll assess your medical history and determine the best treatment approach for your unique needs. Takes about 5 minutes.',
                image: '/images/Levels1.png',
              },
              {
                number: '02',
                title: 'Expert medical review',
                description: 'Our team of specialist doctors carefully review your information. They assess your suitability for treatment and create a tailored plan that considers your medical history, lifestyle, and weight loss goals.',
                image: '/images/Levels2.png',
              },
              {
                number: '03',
                title: 'Receive your treatment',
                description: 'Once approved, your medication is delivered discreetly to your door with clear instructions. We include everything you need to get started safely and effectively.',
                image: '/images/Levels3.png',
              },
              {
                number: '04',
                title: 'Ongoing support',
                description: 'Your dedicated care team monitors your progress and adjusts your treatment as needed. Regular check-ins, coaching sessions, and 24/7 support ensure you stay on track and achieve sustainable results.',
                image: '/images/levels4.png',
              },
            ].map((step, index) => (
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

      {/* Results Section */}
      <section className="bg-[var(--color-surface-white-xLight)] py-[56px] md:py-[120px]">
        <div className="page-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-heading-2 mb-[var(--spacing-8x)]">
              Real results from real people
            </h2>
            <p className="text-body-2 text-[var(--color-text-dark)] mb-[var(--spacing-14x)]">
              Join thousands who have achieved their weight loss goals with Levels.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-8x)] mb-[var(--spacing-14x)]">
              {[
                { metric: '15kg', label: 'Average weight loss' },
                { metric: '92%', label: 'Patient satisfaction' },
                { metric: '6 months', label: 'Average time to goal' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-[var(--spacing-2x)]">
                  <div className="text-[var(--font-size-xxxxLarge)] font-light text-[var(--color-action-medium)]">
                    {stat.metric}
                  </div>
                  <div className="text-body-3 text-[var(--color-text-dark)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <Button variant="primary" size="large" href="/weight-loss/results">
              See more results
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#dad8fa] via-[#dfcacf] to-[#f7ad8a] py-[56px] md:py-[120px]">
        <div className="page-container text-center">
          <h2 className="text-heading-2 text-[var(--color-text-xDark)] mb-[var(--spacing-6x)]">
            Start your weight loss journey today
          </h2>
          <p className="text-body-2 text-[var(--color-text-dark)] mb-[var(--spacing-8x)] max-w-2xl mx-auto">
            Take the first step towards a healthier you. Complete our quick assessment
            to see which treatment is right for you.
          </p>
          <Button variant="primary" size="large" href="/weight-loss/assessment" className="bg-black text-white hover:bg-black/90">
            Get started today
          </Button>
        </div>
      </section>
    </div>
  );
}
