import React from 'react';

export interface StatCardProps {
  percentage: string;
  label: string;
  description: string;
  imageSrc?: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  percentage,
  label,
  description,
  imageSrc,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center text-center gap-[var(--spacing-4x)] ${className}`}>
      {imageSrc && (
        <div className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] relative">
          <img
            src={imageSrc}
            alt={label}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      <div className="flex flex-col gap-[var(--spacing-2x)]">
        <div className="text-[var(--font-size-display-1)] md:text-[var(--font-size-display-2)] font-light text-[var(--color-action-medium)]">
          {percentage}
        </div>

        <div className="text-[var(--font-size-small)] md:text-[var(--font-size-medium)] font-semibold uppercase tracking-wider text-[var(--color-text-xDark)] mb-[var(--spacing-2x)]">
          {label}
        </div>

        <p className="text-body-3 text-[var(--color-text-dark)] max-w-[300px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StatCard;
