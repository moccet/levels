import React from 'react';
import { Button } from '../components/ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Levels',
  description: 'Learn about Levels\'s mission to provide science-led healthcare with expert medical support.',
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[var(--color-surface-white-xLight)] py-[var(--spacing-20x)] md:py-[var(--spacing-30x)]">
        <div className="page-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display mb-[var(--spacing-8x)]">
              About Levels
            </h1>
            <p className="text-body-1 text-[var(--color-text-dark)]">
              We&apos;re on a mission to make world-class healthcare accessible to everyone,
              combining cutting-edge treatments with expert medical support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="page-container py-[var(--spacing-14x)] md:py-[var(--spacing-30x)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 mb-[var(--spacing-8x)] text-center">
            Our mission
          </h2>
          <div className="text-body-2 text-[var(--color-text-dark)] space-y-6">
            <p>
              At Levels, we believe that everyone deserves access to exceptional healthcare.
              We combine the latest medical research with personalized support to help you
              achieve your health goals.
            </p>
            <p>
              Our approach is simple: listen to you, provide evidence-based treatments,
              and support you every step of the way. Whether you&apos;re managing your weight
              or navigating menopause, we&apos;re here to help you thrive.
            </p>
            <p>
              We work with the country&apos;s leading medical experts to ensure you receive
              the highest standard of care, delivered conveniently to your door.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[var(--color-surface-white-xLight)] py-[var(--spacing-14x)] md:py-[var(--spacing-30x)]">
        <div className="page-container">
          <h2 className="text-heading-2 mb-[var(--spacing-14x)] text-center">
            What we stand for
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-8x)] max-w-5xl mx-auto">
            {[
              {
                title: 'Evidence-based',
                description: 'Every treatment we offer is backed by rigorous scientific research and clinical trials.',
              },
              {
                title: 'Expert-led',
                description: 'Our medical team includes leading specialists who review every case personally.',
              },
              {
                title: 'Patient-first',
                description: 'Your health and wellbeing are at the heart of everything we do.',
              },
            ].map((value) => (
              <div key={value.title} className="flex flex-col gap-[var(--spacing-4x)]">
                <h3 className="text-heading-3">{value.title}</h3>
                <p className="text-body-3 text-[var(--color-text-dark)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="page-container py-[var(--spacing-14x)] md:py-[var(--spacing-30x)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-heading-2 mb-[var(--spacing-8x)] text-center">
            Our Team
          </h2>
          <p className="text-body-2 text-[var(--color-text-dark)] text-center mb-[var(--spacing-14x)] max-w-2xl mx-auto">
            Our medical team brings together decades of experience across multiple
            specialties, united by a passion for helping you achieve your health goals.
          </p>
          <div className="text-center">
            <Button href="/experts" variant="primary" size="large">
              Meet our experts
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-[var(--color-surface-white-xLight)] py-[var(--spacing-14x)] md:py-[var(--spacing-30x)]">
        <div className="page-container">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-heading-2 mb-[var(--spacing-8x)]">
              Thousands of people in the UK trust Levels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-8x)] mb-[var(--spacing-14x)]">
              {[
                { metric: '50,000+', label: 'Patients supported' },
                { metric: '4.8/5', label: 'Average rating' },
                { metric: '95%', label: 'Would recommend' },
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-container py-[var(--spacing-14x)] md:py-[var(--spacing-30x)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-heading-2 mb-[var(--spacing-6x)]">
            Ready to start your journey?
          </h2>
          <p className="text-body-2 text-[var(--color-text-dark)] mb-[var(--spacing-8x)]">
            Join thousands who have transformed their health with Levels.
          </p>
          <Button variant="primary" size="large" href="/weight-loss">
            Get started today
          </Button>
        </div>
      </section>
    </div>
  );
}
