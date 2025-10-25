import React from 'react';
import { Button } from '../components/ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Medical Experts | Levels',
  description: 'Meet the leading medical specialists behind Levels\'s healthcare services.',
};

export default function ExpertsPage() {
  const experts = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Medical Director',
      specialty: 'Endocrinology & Weight Management',
      credentials: 'MBBS, MRCP, PhD',
      bio: 'Dr. Johnson is a leading endocrinologist with over 15 years of experience in weight management and metabolic health. She has published extensively on GLP-1 medications and obesity treatment.',
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Senior Consultant',
      specialty: 'Internal Medicine',
      credentials: 'MBBS, FRCP',
      bio: 'Dr. Chen specializes in comprehensive internal medicine with a focus on preventative care and chronic disease management. He has treated thousands of patients throughout his 20-year career.',
    },
    {
      name: 'Dr. Emma Williams',
      title: 'Menopause Specialist',
      specialty: 'Women\'s Health',
      credentials: 'MBBS, MRCOG, FRCOG',
      bio: 'Dr. Williams is a consultant obstetrician and gynaecologist with specialist expertise in menopause care and hormone replacement therapy. She is passionate about improving women\'s health outcomes.',
    },
    {
      name: 'Dr. James Taylor',
      title: 'Consultant Physician',
      specialty: 'Obesity Medicine',
      credentials: 'MBBS, MRCP',
      bio: 'Dr. Taylor has dedicated his career to helping patients achieve sustainable weight loss through evidence-based medical interventions and lifestyle modification.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[var(--color-surface-white-xLight)] py-[var(--spacing-20x)] md:py-[var(--spacing-30x)]">
        <div className="page-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display mb-[var(--spacing-8x)]">
              Our Medical Experts
            </h1>
            <p className="text-body-1 text-[var(--color-text-dark)]">
              Meet the leading specialists who review every case and guide your
              treatment journey.
            </p>
          </div>
        </div>
      </section>

      {/* Why Our Team Section */}
      <section className="page-container py-[var(--spacing-14x)] md:py-[var(--spacing-30x)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 mb-[var(--spacing-8x)] text-center">
            Why our team matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-8x)]">
            {[
              {
                title: 'Specialist expertise',
                description: 'Our doctors are leaders in their fields with years of specialized training and experience.',
              },
              {
                title: 'Personal review',
                description: 'Every patient case is reviewed individually by a qualified medical professional.',
              },
              {
                title: 'Ongoing care',
                description: 'Our team monitors your progress and adjusts your treatment as needed.',
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

      {/* Experts Grid */}
      <section className="bg-[var(--color-surface-white-xLight)] py-[var(--spacing-14x)] md:py-[var(--spacing-30x)]">
        <div className="page-container">
          <h2 className="text-heading-2 mb-[var(--spacing-14x)] text-center">
            Meet the team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-8x)] max-w-5xl mx-auto">
            {experts.map((expert) => (
              <div
                key={expert.name}
                className="bg-white rounded-[var(--radius-xlarge)] p-[var(--spacing-8x)] flex flex-col gap-[var(--spacing-4x)]"
              >
                {/* Placeholder for doctor image */}
                <div className="w-24 h-24 rounded-full bg-[var(--color-surface-neutral-light)] mb-[var(--spacing-4x)]" />

                <h3 className="text-heading-3">{expert.name}</h3>
                <div className="text-body-4 text-[var(--color-action-medium)] font-bold">
                  {expert.title}
                </div>
                <div className="text-body-4 text-[var(--color-text-dark)]">
                  {expert.specialty}
                </div>
                <div className="text-body-4 text-[var(--color-text-dark)] italic">
                  {expert.credentials}
                </div>
                <p className="text-body-4 text-[var(--color-text-dark)] mt-[var(--spacing-2x)]">
                  {expert.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="page-container py-[var(--spacing-14x)] md:py-[var(--spacing-30x)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 mb-[var(--spacing-8x)] text-center">
            Qualifications & Accreditations
          </h2>
          <div className="text-body-3 text-[var(--color-text-dark)] space-y-6">
            <p>
              All our doctors are fully registered with the General Medical Council (GMC)
              and hold specialist qualifications in their respective fields. Many are
              fellows of royal colleges and have additional postgraduate degrees.
            </p>
            <p>
              Our medical team stays at the forefront of their specialties through
              continuous professional development, attending conferences, and contributing
              to medical research.
            </p>
            <div className="flex flex-wrap gap-[var(--spacing-4x)] mt-[var(--spacing-8x)]">
              {[
                'GMC Registered',
                'CQC Approved',
                'Royal College Fellows',
                'Specialist Trained',
              ].map((badge) => (
                <div
                  key={badge}
                  className="px-[var(--spacing-4x)] py-[var(--spacing-2x)] bg-[var(--color-surface-neutral-xLight)] rounded-full text-body-4"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-action-medium)] py-[var(--spacing-14x)] md:py-[var(--spacing-30x)]">
        <div className="page-container text-center">
          <h2 className="text-heading-2 text-white mb-[var(--spacing-6x)]">
            Get expert care today
          </h2>
          <p className="text-body-2 text-white mb-[var(--spacing-8x)] max-w-2xl mx-auto">
            Start your journey with personalized medical support from our team of specialists.
          </p>
          <Button variant="inverted" size="large" href="/weight-loss">
            Get started
          </Button>
        </div>
      </section>
    </div>
  );
}
