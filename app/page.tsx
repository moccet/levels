import React from 'react';
import { Button, USPCarousel } from './components/ui';
import ValueProposition from './components/sections/ValueProposition';
import StatisticsSection from './components/sections/StatisticsSection';
import FeatureGrid from './components/sections/FeatureGrid';
import MenopauseValueProp from './components/sections/MenopauseValueProp';
import PersonalisedPlanHero from './components/sections/PersonalisedPlanHero';
import TestimonialsCarousel from './components/sections/TestimonialsCarousel';
import ResearchSection from './components/sections/ResearchSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[620px] md:min-h-[885px] flex items-center justify-center overflow-hidden rounded-none md:rounded-[var(--radius-xlarge)] md:m-[var(--spacing-2x)]">
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/background.png)' }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-[var(--spacing-6x)] md:px-[var(--spacing-10x)] max-w-[606px] gap-[var(--spacing-3x)] md:gap-[var(--spacing-8x)]">
          <h1 className="text-display text-white">
            Today can be life-changing
          </h1>

          <p className="text-body-3 md:text-body-3 text-white">
            Science-led healthcare. Led by the country&apos;s leading medical experts.
          </p>

          <div className="w-full md:w-[320px] mt-[var(--spacing-2x)] md:mt-0">
            <Button
              variant="inverted"
              href="/weight-loss"
              fullWidth
              size="large"
            >
              Explore weight loss
            </Button>
          </div>
        </div>

        {/* USP Carousel - Positioned at bottom */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <USPCarousel />
        </div>
      </section>

      {/* Value Proposition */}
      <ValueProposition />

      {/* Feature Grid - Medication & App */}
      <FeatureGrid />

      {/* Introduction Section */}
      <section className="page-container py-[56px] md:py-[120px]">
        <div className="max-w-[var(--page-container-medium)] mx-auto text-center">
          <h2 className="text-heading-2 mb-[var(--spacing-6x)]">
            Your partner for healthier living
          </h2>
          <p className="text-body-2 text-[var(--color-text-dark)] max-w-2xl mx-auto">
            We combine cutting-edge treatments with expert support to help you achieve
            your health goals. Whether it&apos;s weight management or menopause support,
            we&apos;re here for every step of your journey.
          </p>
        </div>
      </section>

      {/* What We Treat Section */}
      <section className="bg-[var(--color-surface-white-xLight)] py-[56px] md:py-[120px]">
        <div className="page-container">
          <h2 className="text-heading-2 text-center mb-[var(--spacing-14x)]">
            What we treat
          </h2>

          <div className="flex justify-center">
            {/* Weight Loss Card */}
            <div className="bg-white rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-heavy)] transition-all duration-200 ease-in-out max-w-md w-full">
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src="/images/Levels3.png"
                  alt="Weight Loss"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-[var(--spacing-8x)] flex flex-col gap-[var(--spacing-6x)]">
                <h3 className="text-heading-3 text-black">Weight Loss</h3>
                <p className="text-body-3 text-black">
                  Evidence-based weight loss programmes with the latest medications,
                  personalised coaching, and expert medical support.
                </p>
                <Button href="/weight-loss" variant="primary" className="bg-black text-white hover:bg-black/90">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Menopause Value Proposition */}
      <MenopauseValueProp />

      {/* Personalised Plan Hero */}
      <PersonalisedPlanHero />

      {/* How It Works Section */}
      <section className="page-container py-[56px] md:py-[120px]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 text-center mb-[var(--spacing-14x)]">
            How it works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-8x)]">
            {[
              {
                step: '01',
                title: 'Take assessment',
                description: 'Complete our medical questionnaire to help us understand your needs and goals.',
                image: '/images/Levels1.png',
              },
              {
                step: '02',
                title: 'Expert review',
                description: 'Our medical team reviews your information and creates your personalised plan.',
                image: '/images/Levels2.png',
              },
              {
                step: '03',
                title: 'Start your journey',
                description: 'Get your treatment delivered and access ongoing support from our team.',
                image: '/images/Levels3.png',
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col">
                <div className="w-full aspect-square rounded-[var(--radius-card)] overflow-hidden mb-[var(--spacing-4x)]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[var(--spacing-4x)]">
                  <div className="text-[var(--font-size-display-2)] font-light text-[var(--color-surface-neutral-medium)]">
                    {item.step}
                  </div>
                  <h3 className="text-heading-3 min-h-[4.5rem]">{item.title}</h3>
                  <p className="text-body-3 text-[var(--color-text-dark)]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <ResearchSection />

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#dad8fa] via-[#dfcacf] to-[#f7ad8a] py-[56px] md:py-[120px]">
        <div className="page-container text-center">
          <h2 className="text-heading-2 text-[var(--color-text-xDark)] mb-[var(--spacing-6x)]">
            Ready to start your journey?
          </h2>
          <p className="text-body-2 text-[var(--color-text-dark)] mb-[var(--spacing-8x)] max-w-2xl mx-auto">
            Join thousands who have transformed their health with Levels.
          </p>
          <Button variant="primary" size="large" href="/weight-loss" className="bg-black text-white hover:bg-black/90">
            Get started today
          </Button>
        </div>
      </section>
    </div>
  );
}
