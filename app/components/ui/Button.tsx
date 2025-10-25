import React from 'react';
import Link from 'next/link';

export type ButtonVariant = 'primary' | 'inverted' | 'secondary' | 'text' | 'dark';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  // Base styles
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium
    transition-all duration-200 ease-in-out
    outline-none focus:outline-none
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}
  `.trim().replace(/\s+/g, ' ');

  // Size styles with pill-shaped border radius
  const sizeStyles = {
    small: 'px-[var(--spacing-4x)] py-[var(--spacing-2x)] text-body-4 rounded-[var(--radius-pill)]',
    medium: 'px-[var(--spacing-4x)] py-[var(--spacing-2x)] text-body-3 rounded-[var(--radius-pill)]',
    large: 'px-[var(--spacing-8x)] py-[var(--spacing-4x)] text-body-2 rounded-[var(--radius-pill)]',
  };

  // Variant styles
  const variantStyles = {
    primary: `
      bg-[var(--color-action-medium)]
      text-white
      hover:bg-[var(--color-action-dark)]
    `,
    inverted: `
      bg-white
      text-[var(--color-action-xDark)]
      border-2 border-white
      hover:bg-[var(--color-surface-neutral-xLight)]
    `,
    secondary: `
      bg-[var(--color-surface-neutral-xLight)]
      text-[var(--color-text-xDark)]
      hover:bg-[var(--color-surface-neutral-light)]
    `,
    text: `
      bg-transparent
      text-[var(--color-action-medium)]
      hover:bg-[var(--color-surface-neutral-xLight)]
    `,
    dark: `
      bg-black
      text-white
      hover:bg-[#1a1a1a]
    `,
  };

  const combinedClassName = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // If href is provided, render as Link
  if (href) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
      >
        {children}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
