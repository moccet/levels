import React from 'react';
import { Button, USPCarousel } from './components/ui';
import ValueProposition from './components/sections/ValueProposition';
import FeaturesGrid from './components/sections/FeaturesGrid';
import StatisticsSection from './components/sections/StatisticsSection';
import StatsSection from './components/sections/StatsSection';
import FeatureGrid from './components/sections/FeatureGrid';
import MenopauseValueProp from './components/sections/MenopauseValueProp';
import PersonalisedPlanHero from './components/sections/PersonalisedPlanHero';
import PersonalisedPlanSection from './components/sections/PersonalisedPlanSection';
import TestimonialsCarousel from './components/sections/TestimonialsCarousel';
import ResearchSection from './components/sections/ResearchSection';
import GradientDivider from './components/sections/GradientDivider';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden rounded-none md:rounded-[var(--radius-xlarge)] md:m-[var(--spacing-2x)]">
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/background.png)' }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-[var(--spacing-4x)] md:px-[var(--spacing-10x)] max-w-[606px] gap-[var(--spacing-4x)] md:gap-[var(--spacing-8x)] pt-[var(--spacing-8x)] pb-[var(--spacing-20x)] md:pt-0 md:pb-0">
          <h1 className="text-heading-1 md:text-display text-white font-normal max-w-[450px]">
            Today can be life-changing
          </h1>

          <p className="text-body-4 md:text-body-3 text-white max-w-[90%] md:max-w-full">
            Science-led healthcare. Led by the country&apos;s leading medical experts.
          </p>

          <div className="w-full md:w-[320px] mt-[var(--spacing-1x)] md:mt-0">
            <Button
              variant="inverted"
              href="/weight-loss"
              fullWidth
              size="medium"
              className="md:text-body-2 text-body-4 py-[1.2rem]"
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

      {/* Features Grid - 3 Cards */}
      <FeaturesGrid />

      {/* Feature Grid - Medication & App */}
      <FeatureGrid />

      {/* Menopause Value Proposition */}
      <MenopauseValueProp />

      {/* Personalised Plan Hero */}
      <PersonalisedPlanHero />

      {/* Research Section */}
      <ResearchSection />

      {/* Personalised Plan Section */}
      <PersonalisedPlanSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Gradient Divider */}
      <GradientDivider />

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />
    </div>
  );
}
