import React from 'react';
import Image from 'next/image';

export interface GradientDividerProps {
  className?: string;
}

const GradientDivider: React.FC<GradientDividerProps> = ({ className = '' }) => {
  return (
    <section className={`w-full relative ${className}`}>
      <Image
        src="/images/gradient-divider.png"
        alt="Gradient divider"
        width={1440}
        height={400}
        className="w-full h-auto"
        priority={false}
      />
    </section>
  );
};

export default GradientDivider;
