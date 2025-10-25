import React from 'react';
import Image from 'next/image';

export interface CardProps {
  children?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  className?: string;
  onClick?: () => void;
  href?: string;
  gradient?: boolean;
  rounded?: 'small' | 'medium' | 'large' | 'xlarge';
}

const Card: React.FC<CardProps> = ({
  children,
  image,
  imageAlt = '',
  title,
  description,
  className = '',
  onClick,
  href,
  gradient = false,
  rounded = 'xlarge',
}) => {
  const roundedStyles = {
    small: 'rounded-[var(--radius-small)]',
    medium: 'rounded-[var(--radius-medium)]',
    large: 'rounded-[var(--radius-card)]',
    xlarge: 'rounded-[var(--radius-card)]',
  };

  const baseStyles = `
    ${roundedStyles[rounded]}
    overflow-hidden
    transition-all duration-200 ease-in-out
    shadow-[var(--shadow-medium)]
    ${onClick || href ? 'cursor-pointer hover:shadow-[var(--shadow-heavy)]' : ''}
    ${gradient ? 'bg-gradient-to-br from-[#FEF8F4] to-[#F9FAFB]' : 'bg-white'}
  `;

  const CardContent = (
    <div className={`${baseStyles} ${className}`} onClick={onClick}>
      {image && (
        <div className="relative w-full h-64">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
      )}

      {(title || description || children) && (
        <div className="p-[var(--spacing-8x)]">
          {title && (
            <h3 className="text-heading-3 mb-[var(--spacing-2x)]">
              {title}
            </h3>
          )}

          {description && (
            <p className="text-body-3 text-[var(--color-text-dark)]">
              {description}
            </p>
          )}

          {children}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

export default Card;
