import React from 'react';
import { Button } from '../ui';

export interface ValuePropositionProps {
  className?: string;
}

const ValueProposition: React.FC<ValuePropositionProps> = ({ className = '' }) => {
  return (
    <section className={`bg-white h-[70vh] flex items-center justify-center py-[var(--spacing-10x)] md:py-0 ${className}`}>
      <div className="max-w-[900px] mx-auto text-center px-[var(--spacing-4x)] md:px-[var(--spacing-6x)]">
        <h2 className="text-[32px] md:text-[64px] leading-[1.15] md:leading-[1.1] mb-[var(--spacing-6x)] md:mb-[var(--spacing-12x)] font-light max-w-[550px] mx-auto">
          <span className="text-[#F4B8A4]">Weight</span>
          {' '}
          <span className="text-[#D8D8D8]">loss</span>
          {' '}
          <span className="text-[var(--color-text-xDark)]">built for your health, not your BMI</span>
        </h2>

        <div className="flex justify-center">
          <Button variant="dark" size="medium" href="/weight-loss" className="py-5 px-10 text-body-4 md:text-body-3">
            Explore Weight Loss
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
