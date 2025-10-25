import React from 'react';
import ExpertProfile from '../ui/ExpertProfile';

export interface ExpertProfilesSectionProps {
  className?: string;
}

const ExpertProfilesSection: React.FC<ExpertProfilesSectionProps> = ({ className = '' }) => {
  const experts = [
    {
      name: 'Gráinne Reihill',
      title: 'Clinical Lead, Menopause',
      role: 'GP & Menopause Specialist',
      description:
        'Gráinne is a GP and menopause specialist with extensive experience providing community NHS menopause clinics. She is a fully accredited member of the British Menopause Society.',
      credentials: ['GP', 'British Menopause Society Member'],
      imageSrc: 'https://cdn.levelsweight.com/Levelsage/rebrand-assets/Core+Website/WL_Menopause+Homepage/Doctors/Grainne+2720x1200.webp',
    },
  ];

  return (
    <section className={`bg-[var(--color-surface-white-xLight)] py-[56px] md:py-[120px] ${className}`}>
      <div className="page-container">
        <h2 className="text-heading-2 text-center mb-[var(--spacing-14x)]">
          Meet our experts
        </h2>

        <div className="flex flex-col gap-[var(--spacing-14x)] max-w-5xl mx-auto">
          {experts.map((expert, index) => (
            <ExpertProfile
              key={index}
              name={expert.name}
              title={expert.title}
              role={expert.role}
              description={expert.description}
              imageSrc={expert.imageSrc}
              credentials={expert.credentials}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertProfilesSection;
