'use client';

import React, { useState } from 'react';

export interface TestimonialsCarouselProps {
  className?: string;
}

interface Testimonial {
  quote: string;
  name: string;
  category: string;
  image: string;
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote: "With Levels, it's not just about losing weight. It's about building habits that last so the weight stays off for good. That's the best thing about it.",
      name: 'Stephen',
      category: 'Weight Loss',
      image: '/images/medication-card.jpg',
    },
    {
      quote: "Since I started using Wegovy with Levels, I've achieved some things that seemed near impossible a few years ago.",
      name: 'Amy',
      category: 'Weight Loss',
      image: '/images/personalised-plan.jpg',
    },
    {
      quote: "The support and guidance from the Levels team has been incredible. I feel healthier and more confident than ever.",
      name: 'Sarah',
      category: 'Menopause',
      image: '/images/sarah.jpg',
    },
    {
      quote: "I've tried countless diets over the years but nothing stuck. Levels gave me the medical support and structure I needed to finally see real, lasting results.",
      name: 'James',
      category: 'Weight Loss',
      image: '/images/james.jpg',
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Calculate the transform based on current index
  // Each "set" is: testimonial card + image
  const cardWidth = 450; // testimonial card width
  const imageWidth = 700; // image width
  const gap = 16; // gap between items (reduced)
  const setWidth = cardWidth + imageWidth + gap * 2; // total width per testimonial set

  const translateX = -(currentIndex * setWidth);

  return (
    <section className={`bg-white py-[40px] md:py-[120px] overflow-hidden pl-[var(--spacing-4x)] md:pl-[var(--spacing-10x)] ${className}`}>
      {/* Header with Navigation */}
      <div className="relative mb-[var(--spacing-8x)] md:mb-[var(--spacing-12x)] pr-[var(--spacing-4x)] md:pr-[var(--spacing-10x)]">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-heading-2 md:text-heading-1 text-center">
            Join thousands feeling better and living fuller
          </h2>
        </div>

        {/* Navigation Arrows - Desktop */}
        <div className="hidden md:flex absolute right-[80px] top-0 gap-[var(--spacing-2x)]">
          <button
            onClick={handlePrevious}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 16L6 10L12 4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 4L14 10L8 16" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Testimonials Carousel - Horizontal scroll */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-[var(--spacing-4x)] transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {testimonials.map((testimonial, index) => (
            <React.Fragment key={index}>
              {/* Testimonial Card */}
              <div className="bg-gradient-to-br from-[#f5d4c8] via-[#f5ebe5] to-[#e8ebe8] rounded-[var(--radius-card)] p-[var(--spacing-8x)] md:p-[var(--spacing-10x)] flex flex-col justify-between min-h-[400px] md:min-h-[500px] w-[320px] md:w-[450px] shrink-0">
                <p className="text-body-3 md:text-body-2 mb-[var(--spacing-8x)]">
                  <span className="text-[var(--color-text-xDark)]">"{testimonial.quote.split(',')[0]},</span>
                  <span className="text-[#7a7a7a]"> {testimonial.quote.split(',').slice(1).join(',')}"</span>
                </p>
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-body-3 md:text-body-2 font-medium text-[var(--color-text-xDark)]">
                        {testimonial.name}
                      </p>
                      <p className="text-body-4 md:text-body-3 text-[var(--color-text-dark)]">
                        {testimonial.category}
                      </p>
                    </div>
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-[#e8b8a8] to-[#a8a8a0]"></div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="rounded-[var(--radius-card)] overflow-hidden w-[400px] md:w-[700px] h-[400px] md:h-[500px] shrink-0">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} testimonial`}
                  className="w-full h-full object-cover"
                />
              </div>
            </React.Fragment>
          ))}

          {/* Add one more card at the end to show there's more */}
          <div className="bg-gradient-to-br from-[#f5d4c8] via-[#f5ebe5] to-[#e8ebe8] rounded-[var(--radius-card)] p-[var(--spacing-8x)] md:p-[var(--spacing-10x)] flex flex-col justify-between min-h-[400px] md:min-h-[500px] w-[320px] md:w-[450px] shrink-0">
            <p className="text-body-3 md:text-body-2 mb-[var(--spacing-8x)]">
              <span className="text-[var(--color-text-xDark)]">"{testimonials[0].quote.split(',')[0]},</span>
              <span className="text-[#7a7a7a]"> {testimonials[0].quote.split(',').slice(1).join(',')}"</span>
            </p>
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-body-3 md:text-body-2 font-medium text-[var(--color-text-xDark)]">
                    {testimonials[0].name}
                  </p>
                  <p className="text-body-4 md:text-body-3 text-[var(--color-text-dark)]">
                    {testimonials[0].category}
                  </p>
                </div>
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-[#e8b8a8] to-[#a8a8a0]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden justify-center gap-[var(--spacing-4x)] mt-[var(--spacing-6x)] px-[var(--spacing-4x)]">
        <button
          onClick={handlePrevious}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 16L6 10L12 4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Next testimonial"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 4L14 10L8 16" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
