'use client';

import React from 'react';

export interface TestimonialShowcaseProps {
  className?: string;
}

const TestimonialShowcase: React.FC<TestimonialShowcaseProps> = ({ className = '' }) => {
  return (
    <section className={`bg-[#f5f1ed] py-[56px] md:py-[120px] ${className}`}>
      <div className="page-container">
        <div className="mb-[var(--spacing-8x)]">
          <p className="text-body-4 text-[#172117] mb-[var(--spacing-4x)] uppercase tracking-wider">
            Testimonials
          </p>
          <div className="flex items-center justify-between">
            <h2 className="text-heading-1 font-light text-[#172117]">
              Levels is transforming people's lives
            </h2>
            <div className="hidden md:flex gap-[var(--spacing-3x)]">
              <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 16L6 10L12 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 4L14 10L8 16" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Trustpilot */}
        <div className="flex items-center gap-[var(--spacing-3x)] mb-[var(--spacing-12x)]">
          <div className="flex gap-[2px]">
            {[1, 2, 3, 4, 5].map((star) => (
              <div key={star} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            ))}
          </div>
          <span className="text-body-4 text-[#172117]">
            TrustScore 4.7/5 · 12102 reviews
          </span>
        </div>

        {/* Testimonial Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-6x)]">
          {/* Left: Text Card */}
          <div className="bg-white rounded-[var(--radius-card)] p-[var(--spacing-10x)]">
            <div className="mb-[var(--spacing-6x)]">
              <div className="text-[80px] font-light text-[#172117] leading-none">21 <span className="text-heading-2">kg</span></div>
              <p className="text-body-3 text-[#172117]">Lost in 6 months</p>
            </div>
            <p className="text-body-3 text-[#172117] mb-[var(--spacing-8x)]">
              This time, it wasn't just another diet. With coaching, medication, and real support, I lost 21kg, started going to the gym, and finally started loving the woman I saw in the mirror. For the first time in years, I feel proud, strong, and ...
            </p>
            <button className="border border-[#172117] text-[#172117] px-[var(--spacing-8x)] py-[var(--spacing-3x)] rounded-full text-body-4 hover:bg-[#172117] hover:text-white transition-colors">
              Read story
            </button>
          </div>

          {/* Right: Before/After Photo */}
          <div className="rounded-[var(--radius-card)] overflow-hidden">
            <img
              src="/images/james.jpg"
              alt="Before and after transformation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialShowcase;
