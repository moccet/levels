import React from 'react';

export interface FeatureGridProps {
  className?: string;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ className = '' }) => {
  const features = [
    {
      image: '/images/3.png',
      title: 'Personalised nutrition plans',
      description: 'Science-backed meal plans built from your metabolic data and biomarkers, not generic templates. Every recommendation traces to peer-reviewed research.',
    },
    {
      image: '/images/4.png',
      title: 'Intelligent health tracking',
      description: 'Connect wearables, lab results, and health apps to get real-time insights about your body\'s needs and optimal interventions.',
    },
  ];

  return (
    <section className={`page-container py-[40px] md:py-[120px] ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-10x)] md:gap-[var(--spacing-16x)] max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col gap-[var(--spacing-4x)] md:gap-[var(--spacing-6x)]">
            <div className="w-full aspect-[3/2] rounded-[var(--radius-card)] overflow-hidden">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-[var(--spacing-3x)]">
              <h3 className="text-heading-3">{feature.title}</h3>
              <p className="text-body-3 text-[var(--color-text-dark)]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
