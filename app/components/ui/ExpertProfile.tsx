import React from 'react';

export interface ExpertProfileProps {
  name: string;
  title: string;
  role: string;
  description: string;
  imageSrc?: string;
  credentials?: string[];
  className?: string;
}

const ExpertProfile: React.FC<ExpertProfileProps> = ({
  name,
  title,
  role,
  description,
  imageSrc,
  credentials = [],
  className = '',
}) => {
  return (
    <div className={`flex flex-col md:flex-row gap-[var(--spacing-6x)] md:gap-[var(--spacing-8x)] ${className}`}>
      {imageSrc && (
        <div className="w-full md:w-[280px] h-[320px] md:h-[380px] flex-shrink-0 rounded-[var(--radius-card)] overflow-hidden">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="flex flex-col gap-[var(--spacing-4x)] justify-center">
        <div>
          <h3 className="text-heading-3 mb-[var(--spacing-1x)]">{name}</h3>
          <p className="text-body-3 text-[var(--color-action-medium)] font-medium mb-[var(--spacing-2x)]">
            {title}
          </p>
          <p className="text-[var(--font-size-small)] text-[var(--color-text-dark)] uppercase tracking-wider">
            {role}
          </p>
        </div>

        <p className="text-body-3 text-[var(--color-text-dark)] leading-relaxed">
          {description}
        </p>

        {credentials.length > 0 && (
          <div className="flex flex-wrap gap-[var(--spacing-2x)] mt-[var(--spacing-2x)]">
            {credentials.map((credential, index) => (
              <span
                key={index}
                className="inline-flex items-center px-[var(--spacing-3x)] py-[var(--spacing-1x)] bg-[var(--color-surface-white-xLight)] rounded-[var(--radius-medium)] text-[var(--font-size-xSmall)] text-[var(--color-text-dark)]"
              >
                {credential}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpertProfile;
