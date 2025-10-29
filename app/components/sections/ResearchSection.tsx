import React from 'react';

export interface ResearchSectionProps {
  className?: string;
}

const ResearchSection: React.FC<ResearchSectionProps> = ({ className = '' }) => {
  return (
    <section className={`page-container py-[40px] md:py-[120px] ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-heading-2 text-center mb-[var(--spacing-8x)] md:mb-[var(--spacing-14x)]">
          Built from biology, powered by science
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-8x)] md:gap-[var(--spacing-16x)] items-center">
          {/* Image */}
          <div className="w-full rounded-[var(--radius-card)] overflow-hidden order-2 md:order-1">
            <img
              src="/images/1.png"
              alt="Research and data visualization"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-[var(--spacing-4x)] md:gap-[var(--spacing-6x)] order-1 md:order-2">
            <h3 className="text-heading-3">Precision health, personalised</h3>
            <p className="text-body-3 md:text-body-2 text-[var(--color-text-dark)]">
              Our approach combines metabolic data, biomarkers, and behavioural patterns to create truly individualised health protocols. Not templates with minor adjustments — plans built from your unique biology.
            </p>
            <p className="text-body-3 md:text-body-2 text-[var(--color-text-dark)]">
              Every recommendation traces to peer-reviewed research. When we suggest an intervention, you see the evidence base supporting it for your specific metabolic state.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-8x)] md:gap-[var(--spacing-16x)] items-center mt-[var(--spacing-12x)] md:mt-[var(--spacing-20x)]">
          {/* Content */}
          <div className="flex flex-col gap-[var(--spacing-4x)] md:gap-[var(--spacing-6x)]">
            <h3 className="text-heading-3">Continuous adaptation</h3>
            <p className="text-body-3 md:text-body-2 text-[var(--color-text-dark)]">
              Your body changes. Your plan should too. We monitor your biomarkers, wearable data, and lifestyle patterns to adjust recommendations in real-time.
            </p>
            <p className="text-body-3 md:text-body-2 text-[var(--color-text-dark)]">
              When sleep deteriorates, training volume adjusts. When glucose patterns shift, meal timing adapts. When stress increases, recovery protocols intensify. All automated, all evidence-based.
            </p>
          </div>

          {/* Image */}
          <div className="w-full rounded-[var(--radius-card)] overflow-hidden">
            <img
              src="/images/2.png"
              alt="Health insights and analytics"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
