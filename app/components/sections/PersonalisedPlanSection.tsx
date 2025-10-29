import React from 'react';

export interface PersonalisedPlanSectionProps {
  className?: string;
}

const PersonalisedPlanSection: React.FC<PersonalisedPlanSectionProps> = ({ className = '' }) => {
  return (
    <section className={`page-container py-[56px] md:py-[120px] ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Hero Image with Overlay */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-[var(--radius-card)] overflow-hidden mb-[var(--spacing-8x)]">
          <img
            src="/images/personalised-plan.jpg"
            alt="Personalised treatment plan"
            className="w-full h-full object-cover"
          />

          {/* Decorative circles overlay */}
          <div className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 1400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="300" cy="300" r="280" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none"/>
              <circle cx="700" cy="300" r="350" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none"/>
              <circle cx="1100" cy="300" r="280" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-[var(--spacing-12x)] md:pb-[var(--spacing-16x)] gap-[var(--spacing-6x)] md:gap-[var(--spacing-8x)]">
            <h3 className="text-body-2 md:text-heading-3 text-white font-medium text-center px-4">
              Personalised treatment plan
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-[var(--spacing-3x)] md:gap-[var(--spacing-4x)] px-4">
              {['Appointments', 'Treatments', 'Messaging'].map((item) => (
                <div
                  key={item}
                  className="px-[var(--spacing-5x)] md:px-[var(--spacing-6x)] py-[var(--spacing-3x)] md:py-[var(--spacing-4x)] rounded-full bg-white/10 backdrop-blur-sm border border-white/30"
                >
                  <span className="text-body-4 md:text-body-3 text-white font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description below image */}
        <div>
          <h2 className="text-heading-3 md:text-heading-2 mb-[var(--spacing-3x)]">
            One personalised plan to get you feeling back to yourself
          </h2>
          <p className="text-body-4 md:text-body-3 text-[var(--color-text-dark)]">
            Create a bespoke plan including your treatment (HRT, testosterone), review appointments and messaging for an affordable, fixed cost. Check-in with your hormone specialist, and adapt your plan as you need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalisedPlanSection;
