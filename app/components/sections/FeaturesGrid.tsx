import React from 'react';

export interface FeaturesGridProps {
  className?: string;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ className = '' }) => {
  return (
    <section className={`bg-white py-[56px] md:py-[120px] ${className}`}>
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-6x)] max-w-7xl mx-auto">
          {/* Clinically proven medication */}
          <div className="flex flex-col gap-[var(--spacing-4x)]">
            <div className="aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden">
              <img
                src="/images/medication-card.jpg"
                alt="Clinically proven medication"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-[var(--spacing-2x)]">
              <h3 className="text-heading-4">Clinically proven medication</h3>
              <p className="text-body-4 text-[var(--color-text-dark)]">
                Evidence-based treatments help you lose weight, developing problematic on your joints, heart, and overall wellbeing
              </p>
            </div>
          </div>

          {/* Compassion and coaching app */}
          <div className="flex flex-col gap-[var(--spacing-4x)]">
            <div className="aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden">
              <img
                src="/images/coaching-app.jpg"
                alt="Compassion and coaching app"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-[var(--spacing-2x)]">
              <h3 className="text-heading-4">Compassion and coaching app</h3>
              <p className="text-body-4 text-[var(--color-text-dark)]">
                Track your progress, build new habits, and chat to your team with an app that keeps your goals on track
              </p>
            </div>
          </div>

          {/* Dedicated health team - Full width */}
          <div className="md:col-span-2 flex flex-col gap-[var(--spacing-4x)]">
            <div className="aspect-[16/9] md:aspect-[2/1] rounded-[var(--radius-card)] overflow-hidden">
              <img
                src="/images/health-team.jpg"
                alt="Dedicated health team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-[var(--spacing-2x)]">
              <h3 className="text-heading-4">Dedicated health team</h3>
              <p className="text-body-4 text-[var(--color-text-dark)]">
                Enjoy expert care from clinicians and coaches who specialise in weight loss, so you're safe, motivated and never alone
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
