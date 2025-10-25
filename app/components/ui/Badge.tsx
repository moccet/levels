import React from 'react';

export type BadgeType = 'positive' | 'neutral' | 'warning' | 'error';
export type BadgeSize = 'small' | 'medium';

export interface BadgeProps {
  children: React.ReactNode;
  type?: BadgeType;
  size?: BadgeSize;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  type = 'neutral',
  size = 'small',
  className = '',
}) => {
  // Base styles
  const baseStyles = `
    inline-flex items-center justify-center
    rounded-full font-bold
    transition-all duration-200
  `;

  // Size styles
  const sizeStyles = {
    small: 'px-[var(--spacing-2x)] py-[var(--spacing-1x)] text-[var(--font-size-xxxxSmall)] leading-[var(--line-height-xxxxSmall)]',
    medium: 'px-[var(--spacing-3x)] py-[var(--spacing-2x)] text-[var(--font-size-xxxSmall)] leading-[var(--line-height-xxxSmall)]',
  };

  // Type styles
  const typeStyles = {
    positive: `
      bg-[var(--color-bias-success-medium)]
      text-white
    `,
    neutral: `
      bg-[var(--color-surface-neutral-medium)]
      text-[var(--color-text-dark)]
    `,
    warning: `
      bg-[var(--color-trustpilot-yellow)]
      text-[var(--color-text-xDark)]
    `,
    error: `
      bg-[var(--color-trustpilot-red)]
      text-white
    `,
  };

  const combinedClassName = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${typeStyles[type]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
};

export default Badge;
