import React from 'react';

export interface HealthBenefitsSectionProps {
  className?: string;
}

const HealthBenefitsSection: React.FC<HealthBenefitsSectionProps> = ({ className = '' }) => {
  const benefits = [
    {
      image: '/images/science-icon.jpg',
      title: 'Guided by science',
      description: 'Our medicated weight loss plans are backed by clinical trials and proven to help you lose weight without extreme restriction.',
    },
    {
      image: '/images/team-icon.jpg',
      title: 'Supported by your team',
      description: 'Work with licensed clinicians and coaches who prioritise your health — from managing medication to addressing energy, sleep, emotional eating, and more.',
    },
    {
      image: '/images/lasting-icon.jpg',
      title: 'Built to last',
      description: 'We don\'t just help you lose weight. We help you build new routines and confidence that last well beyond the medication.',
    },
  ];

  return (
    <section className={`relative py-[56px] md:py-[120px] overflow-hidden ${className}`}>
      {/* Gradient Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(180deg, #fdfcfb 0%, #fef5ed 25%, #f5d5c3 50%, #e8d4c8 70%, #d9e3dd 100%)',
        }}
      />

      <div className="page-container relative z-10">
        <h2 className="text-heading-1 font-light text-[#172117] text-center mb-[var(--spacing-16x)] max-w-3xl mx-auto">
          Lose weight now, protect your health for life
        </h2>

        <div className="flex flex-col max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-4x)] md:gap-[var(--spacing-8x)] py-[var(--spacing-6x)] md:py-[var(--spacing-8x)] ${
                index !== benefits.length - 1 ? 'border-b border-white/40' : ''
              }`}
            >
              <h3 className="text-body-2 font-normal text-[#172117]">{benefit.title}</h3>
              <p className="text-body-4 text-[#172117] leading-relaxed font-light">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthBenefitsSection;
