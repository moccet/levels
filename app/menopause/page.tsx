import React from 'react';
import { Button } from '../components/ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menopause Treatment & Support | Levels',
  description: 'Expert menopause care with HRT, specialist consultations, and personalized support.',
};

export default function MenopausePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center bg-gradient-to-br from-[#dad8fa] via-[#dfcacf] to-[#f7ad8a] overflow-hidden">
        <div className="page-container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-display text-[var(--color-text-xDark)] mb-[var(--spacing-6x)]">
              Menopause support that understands you
            </h1>
            <p className="text-body-1 text-[var(--color-text-dark)] mb-[var(--spacing-8x)]">
              Expert-led menopause care with personalized treatment plans, specialist
              consultations, and ongoing support.
            </p>
            <Button variant="primary" size="large" href="#treatments">
              Explore treatments
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="page-container py-[var(--spacing-14x)] md:py-[var(--spacing-30x)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 mb-[var(--spacing-8x)] text-center">
            Comprehensive menopause care
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-8x)]">
            {[
              {
                title: 'Specialist doctors',
                description: 'Access to menopause specialists with years of experience in hormone therapy.',
              },
              {
                title: 'Personalized plans',
                description: 'Treatment tailored to your symptoms, medical history, and lifestyle.',
              },
              {
                title: 'Holistic support',
                description: 'Beyond medication—lifestyle guidance, mental health support, and more.',
              },
            ].map((feature) => (
              <div key={feature.title} className="flex flex-col gap-[var(--spacing-4x)]">
                <h3 className="text-heading-3">{feature.title}</h3>
                <p className="text-body-3 text-[var(--color-text-dark)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Treat */}
      <section id="treatments" className="bg-[var(--color-surface-white-xLight)] py-[var(--spacing-14x)] md:py-[var(--spacing-30x)]">
        <div className="page-container">
          <h2 className="text-heading-2 mb-[var(--spacing-14x)] text-center">
            What we treat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-8x)] max-w-5xl mx-auto">
            {[
              {
                title: 'Perimenopause',
                description: 'Support for the transitional phase with symptom management and treatment options.',
                symptoms: ['Irregular periods', 'Hot flashes', 'Mood changes', 'Sleep issues'],
              },
              {
                title: 'Menopause',
                description: 'Comprehensive care for menopause symptoms with HRT and alternative treatments.',
                symptoms: ['Hot flashes', 'Night sweats', 'Vaginal dryness', 'Low mood'],
              },
              {
                title: 'Sexual health',
                description: 'Treatment for intimacy issues and vaginal discomfort related to menopause.',
                symptoms: ['Vaginal dryness', 'Painful intercourse', 'Low libido', 'Discomfort'],
              },
              {
                title: 'Weight management',
                description: 'Support for menopause-related weight changes with personalized plans.',
                symptoms: ['Weight gain', 'Metabolism changes', 'Body composition', 'Energy Levels'],
              },
            ].map((condition) => (
              <div key={condition.title} className="bg-white rounded-[var(--radius-xlarge)] p-[var(--spacing-8x)] flex flex-col gap-[var(--spacing-4x)]">
                <h3 className="text-heading-3">{condition.title}</h3>
                <p className="text-body-3 text-[var(--color-text-dark)]">
                  {condition.description}
                </p>
                <div className="flex flex-col gap-[var(--spacing-2x)]">
                  <div className="text-body-4 font-bold text-[var(--color-text-xDark)]">
                    Common symptoms:
                  </div>
                  {condition.symptoms.map((symptom) => (
                    <div key={symptom} className="text-body-4 text-[var(--color-text-dark)]">
                      • {symptom}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="page-container py-[var(--spacing-14x)] md:py-[var(--spacing-30x)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-heading-2 mb-[var(--spacing-14x)] text-center">
            Treatment options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-8x)]">
            {[
              {
                title: 'Hormone Replacement Therapy (HRT)',
                description: 'Replace hormones that decline during menopause. Available in patches, tablets, gels, and more.',
              },
              {
                title: 'Testosterone Treatment',
                description: 'Can help with energy, libido, and overall wellbeing during and after menopause.',
              },
              {
                title: 'Vaginal Treatments',
                description: 'Localized estrogen treatments for vaginal dryness and discomfort.',
              },
              {
                title: 'Cognitive Behavioural Therapy (CBT)',
                description: 'Evidence-based therapy for managing anxiety, low mood, and sleep issues.',
              },
            ].map((treatment) => (
              <div key={treatment.title} className="flex flex-col gap-[var(--spacing-3x)]">
                <h3 className="text-heading-3">{treatment.title}</h3>
                <p className="text-body-3 text-[var(--color-text-dark)]">
                  {treatment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blood Tests */}
      <section className="bg-[var(--color-surface-white-xLight)] py-[var(--spacing-14x)] md:py-[var(--spacing-30x)]">
        <div className="page-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-heading-2 mb-[var(--spacing-6x)]">
              Comprehensive blood testing
            </h2>
            <p className="text-body-2 text-[var(--color-text-dark)] mb-[var(--spacing-14x)]">
              We offer blood tests to help guide your treatment and monitor your progress.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-6x)]">
              {[
                'Women\'s midlife (MOT) test',
                'Monitor HRT blood test',
                'Start testosterone test',
              ].map((test) => (
                <div key={test} className="bg-white rounded-[var(--radius-large)] p-[var(--spacing-6x)]">
                  <p className="text-body-3 font-bold text-[var(--color-text-xDark)]">
                    {test}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="page-container py-[var(--spacing-14x)] md:py-[var(--spacing-30x)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 mb-[var(--spacing-14x)] text-center">
            How it works
          </h2>
          <div className="space-y-[var(--spacing-12x)]">
            {[
              {
                step: '01',
                title: 'Complete your assessment',
                description: 'Tell us about your symptoms, medical history, and what you hope to achieve.',
              },
              {
                step: '02',
                title: 'Specialist review',
                description: 'A menopause specialist reviews your case and creates your personalized treatment plan.',
              },
              {
                step: '03',
                title: 'Start treatment',
                description: 'Receive your treatment with clear instructions. Blood tests can be arranged if needed.',
              },
              {
                step: '04',
                title: 'Ongoing support',
                description: 'Regular check-ins with adjustments to your treatment as your needs change.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-[var(--spacing-6x)] items-start">
                <div className="text-[var(--font-size-xxxLarge)] font-light text-[var(--color-surface-neutral-medium)] flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex flex-col gap-[var(--spacing-2x)]">
                  <h3 className="text-heading-3">{item.title}</h3>
                  <p className="text-body-3 text-[var(--color-text-dark)]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-action-medium)] py-[var(--spacing-14x)] md:py-[var(--spacing-30x)]">
        <div className="page-container text-center">
          <h2 className="text-heading-2 text-white mb-[var(--spacing-6x)]">
            Start your menopause journey today
          </h2>
          <p className="text-body-2 text-white mb-[var(--spacing-8x)] max-w-2xl mx-auto">
            Get personalized support from menopause specialists who understand what you're going through.
          </p>
          <Button variant="inverted" size="large" href="/menopause/assessment">
            Get started
          </Button>
        </div>
      </section>
    </div>
  );
}
