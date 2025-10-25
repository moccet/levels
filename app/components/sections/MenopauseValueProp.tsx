import React from 'react';
import { Button } from '../ui';

export interface MenopauseValuePropProps {
  className?: string;
}

const MenopauseValueProp: React.FC<MenopauseValuePropProps> = ({ className = '' }) => {
  return (
    <section className={`py-[56px] md:py-[120px] bg-transparent ${className}`}>
      {/* Rainbow Image - Full Width */}
      <div className="w-full mb-[var(--spacing-12x)] md:mb-[var(--spacing-16x)]">
        <img
          src="/images/rainbow.png"
          alt="Rainbow"
          className="w-full h-[400px] md:h-[600px] object-cover"
        />
      </div>

      <div className="max-w-[900px] mx-auto text-center px-[var(--spacing-6x)]">
        <h2 className="text-[50px] md:text-[80px] leading-[1.1] mb-[var(--spacing-8x)] md:mb-[var(--spacing-12x)] font-light">
          <span className="text-[var(--color-text-xDark)]">Complete care plans for </span>
          <span className="text-[#D4B5D8]">sustainable</span>
          <span className="text-[var(--color-text-xDark)]"> </span>
          <span className="text-[#F4B8A4]">weight loss</span>
        </h2>

        <div className="flex justify-center">
          <Button variant="dark" size="large" href="/weight-loss">
            Explore weight loss
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenopauseValueProp;
