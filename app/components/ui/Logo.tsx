import React from 'react';
import Link from 'next/link';

export interface LogoProps {
  className?: string;
  href?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '', href = '/' }) => {
  return (
    <Link
      href={href}
      className={`inline-block ${className}`}
      style={{
        fontFamily: 'var(--font-playfair)',
        fontStyle: 'normal',
        fontSize: '36px',
        fontWeight: 500,
        letterSpacing: '-0.5px'
      }}
    >
      Levels
    </Link>
  );
};

export default Logo;
