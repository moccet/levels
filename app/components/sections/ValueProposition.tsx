import React from 'react';
import { Button } from '../ui';

export interface ValuePropositionProps {
  className?: string;
}

const ValueProposition: React.FC<ValuePropositionProps> = ({ className = '' }) => {
  return (
    <section className={`bg-white min-h-screen flex items-center justify-center ${className}`}>
      <div className="max-w-[900px] mx-auto text-center px-[var(--spacing-6x)]">
        <h2 className="text-[50px] md:text-[80px] leading-[1.1] mb-[var(--spacing-8x)] md:mb-[var(--spacing-12x)] font-light">
          <span className="text-[#F4B8A4]">Weight</span>
          {' '}
          <span className="text-[#D8D8D8]">loss</span>
          {' '}
          <span className="text-[var(--color-text-xDark)]">built for your health, not your BMI</span>
        </h2>

        <div className="flex justify-center">
          <Button variant="dark" size="large" href="/weight-loss">
            Explore Weight Loss
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
