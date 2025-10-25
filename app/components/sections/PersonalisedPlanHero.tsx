import React from 'react';

export interface PersonalisedPlanHeroProps {
  className?: string;
}

const PersonalisedPlanHero: React.FC<PersonalisedPlanHeroProps> = ({ className = '' }) => {
  const planAspects = [
    { label: 'Appointments' },
    { label: 'Treatments' },
    { label: 'Messaging' },
  ];

  return (
    <section className={`page-container py-[56px] md:py-[120px] ${className}`}>
      <div className="max-w-5xl mx-auto">
        {/* Hero Image with Overlay */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[var(--radius-card)] overflow-hidden">
          <img
            src="/images/5.png"
            alt="Personalised treatment plan"
            className="w-full h-full object-cover"
          />

          {/* Overlay with circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center gap-[var(--spacing-8x)] md:gap-[var(--spacing-16x)]">
              {planAspects.map((aspect, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full border-2 border-white/40 backdrop-blur-sm"
                >
                  <span className="text-body-3 md:text-body-2 text-white font-medium">
                    {aspect.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Text overlay at bottom */}
          <div className="absolute bottom-[var(--spacing-8x)] left-[var(--spacing-8x)] right-[var(--spacing-8x)] text-center md:text-left">
            <h3 className="text-heading-3 md:text-heading-2 text-white mb-[var(--spacing-2x)]">
              Personalised treatment plan
            </h3>
          </div>
        </div>

        {/* Description below image */}
        <div className="mt-[var(--spacing-8x)] max-w-3xl mx-auto text-center">
          <p className="text-body-2 text-[var(--color-text-dark)]">
            One personalised plan to get you feeling back to yourself.
            Our care plans combine your treatment with consultations, home measurements and messaging for an effortless, head-to-toe care.
            Check-in with your hormone specialist, and adapt your plan in line with your goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalisedPlanHero;
