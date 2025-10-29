import React from 'react';
import { Button, Badge } from '../components/ui';
import TestimonialsCarousel from '../components/sections/TestimonialsCarousel';
import StatsSection from '../components/sections/StatsSection';
import GradientDivider from '../components/sections/GradientDivider';
import WeightLossCalculator from '../components/sections/WeightLossCalculator';
import HealthBenefitsSection from '../components/sections/HealthBenefitsSection';
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

      {/* Hero Section */}
      <section className="relative bg-[#f6f1e7] pt-[120px] md:pt-[150px] rounded-b-[var(--radius-card)]">
        {/* Content */}
        <div className="page-container py-[var(--spacing-16x)] md:py-[var(--spacing-20x)]">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <h1 className="text-heading-1 font-light text-[#172117] mb-[var(--spacing-6x)] max-w-[550px]">
              {['Weight', 'loss', 'built', 'for', 'your', 'health'].map((word, index) => (
                <React.Fragment key={index}>
                  <span
                    className="inline-block opacity-0 animate-fade-in"
                    style={{
                      animationDelay: `${index * 150}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    {word}
                  </span>
                  {index < 5 && ' '}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-body-3 text-[#172117] mb-[var(--spacing-8x)] max-w-[450px]">
              Your health is personal, and so is our approach. At Levels, we build a personalised treatment plan to help you lose weight and feel your best — now and for years to come.
            </p>
            <Button
              variant="primary"
              size="large"
              href="/weight-loss/assessment"
              className="bg-black text-white hover:bg-black/90 mb-[var(--spacing-12x)] !text-[14px]"
            >
              Is treatment right for me?
            </Button>

            {/* TrustPilot Section */}
            <div className="flex items-center gap-[var(--spacing-3x)]">
              <div className="flex gap-[2px]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                ))}
              </div>
              <span className="text-[12px] text-[#172117]">
                TrustScore 4.8/5
              </span>
            </div>
          </div>
        </div>

        {/* Image Gallery - Full Width */}
        <div className="w-full px-[var(--spacing-6x)] md:px-[var(--spacing-10x)] pb-[var(--spacing-16x)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-4x)]">
            <div className="rounded-[var(--radius-card)] overflow-hidden aspect-[3/4]">
              <img
                src="/images/coaching-app.jpg"
                alt="Weight loss journey"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-[var(--radius-card)] overflow-hidden aspect-[3/4]">
              <img
                src="/images/medication-card.jpg"
                alt="Active lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-[var(--radius-card)] overflow-hidden aspect-[3/4]">
              <img
                src="/images/personalised-plan.jpg"
                alt="Levels app"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* USP Carousel */}
      <section className="bg-white py-[var(--spacing-6x)] border-y border-gray-200 relative">
        <div className="flex items-center">
          {/* Fixed Trustpilot */}
          <div className="flex items-center gap-[var(--spacing-3x)] px-[var(--spacing-6x)] md:px-[var(--spacing-10x)] bg-white z-10">
            <div className="flex gap-[2px]">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="w-4 h-4 bg-[#00b67a] flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              ))}
            </div>
            <span className="text-body-4 text-[#172117] font-medium whitespace-nowrap">Trustpilot</span>
          </div>

          {/* Scrolling Items */}
          <div className="flex-1 overflow-hidden">
            <div className="flex animate-scroll">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center gap-[var(--spacing-12x)] px-[var(--spacing-6x)] whitespace-nowrap">
                  <div className="flex items-center gap-[var(--spacing-3x)]">
                    <svg className="w-5 h-5 text-[#172117]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-body-4 text-[#172117]">Trusted by 100k UK customers</span>
                  </div>

                  <div className="flex items-center gap-[var(--spacing-3x)]">
                    <svg className="w-5 h-5 text-[#172117]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span className="text-body-4 text-[#172117]">Free next-day delivery</span>
                  </div>

                  <div className="flex items-center gap-[var(--spacing-3x)]">
                    <svg className="w-5 h-5 text-[#172117]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-body-4 text-[#172117]">Clinically proven medication</span>
                  </div>

                  <div className="flex items-center gap-[var(--spacing-3x)]">
                    <svg className="w-5 h-5 text-[#172117]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span className="text-body-4 text-[#172117]">Cancel anytime subscription</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Switch Commitment Section */}
      <section className="bg-white py-[56px] md:py-[120px]">
        <div className="page-container">
          <p className="text-body-4 text-[#172117] mb-[var(--spacing-4x)]">
            Levels's Switch Commitment
          </p>
          <h2 className="text-heading-2 font-light text-[#172117] mb-[var(--spacing-4x)] max-w-4xl">
            Already on treatment? Switch with Levels
          </h2>
          <p className="text-body-3 text-[#172117] mb-[var(--spacing-12x)] max-w-3xl">
            Mounjaro prices have increased. Switch to Wegovy with Levels to stay on track for less. Our commitment to you:
          </p>

          {/* Wegovy Image */}
          <div className="w-full rounded-[var(--radius-card)] overflow-hidden mb-[var(--spacing-12x)] bg-[#f5e8e3]">
            <img
              src="/images/wegovy-switch.png"
              alt="Wegovy injection pen"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Three Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-8x)]">
            <div className="flex gap-[var(--spacing-6x)]">
              <div className="bg-[#e8e8e8] rounded-[var(--radius-large)] w-[80px] h-[80px] flex items-center justify-center shrink-0">
                <span className="text-[48px] font-light text-[#172117]">1</span>
              </div>
              <div>
                <h3 className="text-body-2 font-medium text-[#172117] mb-[var(--spacing-3x)]">
                  Switch to an equivalent dose
                </h3>
                <p className="text-body-4 text-[#172117]">
                  Switch to Wegovy at an equivalent dose to your current Mounjaro treatment. No need to restart or take a break.
                </p>
              </div>
            </div>

            <div className="flex gap-[var(--spacing-6x)]">
              <div className="bg-[#e8e8e8] rounded-[var(--radius-large)] w-[80px] h-[80px] flex items-center justify-center shrink-0">
                <span className="text-[48px] font-light text-[#172117]">2</span>
              </div>
              <div>
                <h3 className="text-body-2 font-medium text-[#172117] mb-[var(--spacing-3x)]">
                  Immediate side effect relief
                </h3>
                <p className="text-body-4 text-[#172117]">
                  Get side effects medication included with your first order, and speak to a clinician within minutes to adjust your dose — all at no extra cost.
                </p>
              </div>
            </div>

            <div className="flex gap-[var(--spacing-6x)]">
              <div className="bg-[#e8e8e8] rounded-[var(--radius-large)] w-[80px] h-[80px] flex items-center justify-center shrink-0">
                <span className="text-[48px] font-light text-[#172117]">3</span>
              </div>
              <div>
                <h3 className="text-body-2 font-medium text-[#172117] mb-[var(--spacing-3x)]">
                  Commit and save
                </h3>
                <p className="text-body-4 text-[#172117]">
                  Commit to a longer plan to save up to £20 every month.
                </p>
              </div>
            </div>
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

      {/* Weight Loss Calculator */}
      <WeightLossCalculator />

      {/* Stats Section */}
      <StatsSection />

      {/* Health Benefits Section */}
      <HealthBenefitsSection />

      {/* Gradient Divider */}
      <GradientDivider />

            {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Testimonials Section */}
      <section className="bg-[#f5f1ed] py-[56px] md:py-[120px]">
        <div className="page-container">
          <div className="mb-[var(--spacing-8x)]">
            <p className="text-body-4 text-[#172117] mb-[var(--spacing-4x)] uppercase tracking-wider">
              Testimonials
            </p>
            <div className="flex items-center justify-between">
              <h2 className="text-heading-1 font-light text-[#172117]">
                Levels is transforming people's lives
              </h2>
              <div className="hidden md:flex gap-[var(--spacing-3x)]">
                <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 16L6 10L12 4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 4L14 10L8 16" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Trustpilot */}
          <div className="flex items-center gap-[var(--spacing-3x)] mb-[var(--spacing-12x)]">
            <div className="flex gap-[2px]">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              ))}
            </div>
            <span className="text-body-4 text-[#172117]">
              TrustScore 4.7/5 · 12102 reviews
            </span>
          </div>

          {/* Testimonial Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-6x)]">
            {/* Left: Text Card */}
            <div className="bg-white rounded-[var(--radius-card)] p-[var(--spacing-10x)]">
              <div className="mb-[var(--spacing-6x)]">
                <div className="text-[80px] font-light text-[#172117] leading-none">21 <span className="text-heading-2">kg</span></div>
                <p className="text-body-3 text-[#172117]">Lost in 6 months</p>
              </div>
              <p className="text-body-3 text-[#172117] mb-[var(--spacing-8x)]">
                This time, it wasn't just another diet. With coaching, medication, and real support, I lost 21kg, started going to the gym, and finally started loving the woman I saw in the mirror. For the first time in years, I feel proud, strong, and ...
              </p>
              <button className="border border-[#172117] text-[#172117] px-[var(--spacing-8x)] py-[var(--spacing-3x)] rounded-full text-body-4 hover:bg-[#172117] hover:text-white transition-colors">
                Read story
              </button>
            </div>

            {/* Right: Before/After Photos */}
            <div className="grid grid-cols-2 gap-[var(--spacing-4x)]">
              <div className="relative rounded-[var(--radius-card)] overflow-hidden aspect-[3/4]">
                <img
                  src="/images/before.jpg"
                  alt="Day 1"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-body-4 text-[#172117]">
                  Day 1
                </div>
              </div>
              <div className="relative rounded-[var(--radius-card)] overflow-hidden aspect-[3/4]">
                <img
                  src="/images/after.jpg"
                  alt="Month 6"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-body-4 text-[#172117]">
                  Month 6
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
