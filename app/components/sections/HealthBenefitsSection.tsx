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
    <section className={`bg-gradient-to-b from-[#fef9f5] to-[#f5e8e3] py-[56px] md:py-[120px] ${className}`}>
      <div className="page-container">
        <h2 className="text-heading-1 font-light text-[#172117] text-center mb-[var(--spacing-16x)] max-w-4xl mx-auto">
          Lose weight now, protect your health for life
        </h2>

        <div className="flex flex-col gap-[var(--spacing-12x)] max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-8x)] items-center"
            >
              {/* Left: Icon and Title */}
              <div className="flex items-center gap-[var(--spacing-6x)]">
                <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-heading-3 text-[#172117]">{benefit.title}</h3>
              </div>

              {/* Right: Description */}
              <div>
                <p className="text-body-3 text-[#172117]">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthBenefitsSection;
