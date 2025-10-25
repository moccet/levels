import React from 'react';
import StatCard from '../ui/StatCard';

export interface StatisticsSectionProps {
  className?: string;
}

const StatisticsSection: React.FC<StatisticsSectionProps> = ({ className = '' }) => {
  return (
    <section className={`bg-white py-[56px] md:py-[120px] ${className}`}>
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-12x)] md:gap-[var(--spacing-20x)] max-w-5xl mx-auto">
          <StatCard
            percentage="53%"
            label="COACHING"
            description="Engaging with the Levels programme leads to 53% more weight loss than medication alone"
          />

          <StatCard
            percentage="97%"
            label="HEALTH IMPROVEMENT"
            description="97% of patients felt that their overall health had improved with the programme"
          />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
