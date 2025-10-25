'use client';

import React from 'react';

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
  const testimonials: Testimonial[] = [
    {
      quote: "With Levels, it's not just about losing weight. It's about building habits that last so long after you sign off for the day. That's the best thing about it.",
      name: 'Stephen',
      category: 'Weight Loss',
      image: 'https://cdn.levelsweight.com/Levelsage/rebrand-assets/Core+Website/WL_Menopause+Homepage/Testimonials/Stephen.webp',
    },
    {
      quote: "Since I started using Wegovy with Levels, I've achieved something that seemed near impossible a few years ago.",
      name: 'Amy',
      category: 'Weight Loss',
      image: 'https://cdn.levelsweight.com/Levelsage/rebrand-assets/Core+Website/WL_Menopause+Homepage/Testimonials/Amy.webp',
    },
    {
      quote: "The support and guidance from the Levels team has been incredible. I feel healthier and more confident than ever.",
      name: 'Sarah',
      category: 'Menopause',
      image: 'https://cdn.levelsweight.com/Levelsage/rebrand-assets/Core+Website/WL_Menopause+Homepage/Testimonials/Sarah.webp',
    },
    {
      quote: "I've tried countless diets over the years but nothing stuck. Levels gave me the medical support and structure I needed to finally see real, lasting results.",
      name: 'James',
      category: 'Weight Loss',
      image: 'https://cdn.levelsweight.com/Levelsage/rebrand-assets/Core+Website/WL_Menopause+Homepage/Testimonials/Stephen.webp',
    },
    {
      quote: "The menopause support programme has been life-changing. I finally feel like myself again and have the energy to enjoy life.",
      name: 'Linda',
      category: 'Menopause',
      image: 'https://cdn.levelsweight.com/Levelsage/rebrand-assets/Core+Website/WL_Menopause+Homepage/Testimonials/Sarah.webp',
    },
    {
      quote: "Having expert medical guidance throughout my weight loss journey made all the difference. I feel supported every step of the way.",
      name: 'Rachel',
      category: 'Weight Loss',
      image: 'https://cdn.levelsweight.com/Levelsage/rebrand-assets/Core+Website/WL_Menopause+Homepage/Testimonials/Amy.webp',
    },
    {
      quote: "Levels helped me understand my body better and gave me the tools to manage my symptoms effectively. I wish I'd found them sooner.",
      name: 'Emma',
      category: 'Menopause',
      image: 'https://cdn.levelsweight.com/Levelsage/rebrand-assets/Core+Website/WL_Menopause+Homepage/Testimonials/Sarah.webp',
    },
    {
      quote: "The personalised approach and ongoing coaching made me feel valued, not just another number. I've lost 3 stone and kept it off.",
      name: 'David',
      category: 'Weight Loss',
      image: 'https://cdn.levelsweight.com/Levelsage/rebrand-assets/Core+Website/WL_Menopause+Homepage/Testimonials/Stephen.webp',
    },
  ];

  // Duplicate testimonials for seamless loop
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section className={`bg-white py-[56px] md:py-[120px] overflow-hidden ${className}`}>
      <div className="page-container">
        <h2 className="text-heading-2 text-center mb-[var(--spacing-14x)]">
          Join thousands feeling better and living fuller
        </h2>
      </div>

      {/* Scrolling Testimonials */}
      <div className="relative overflow-hidden w-full">
        <div className="flex animate-testimonial-scroll gap-[var(--spacing-6x)] px-[var(--spacing-6x)]">
          {allTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F5EDE8]/50 rounded-[var(--radius-card)] p-[var(--spacing-8x)] flex flex-col gap-[var(--spacing-6x)] min-h-[320px] w-[500px] shrink-0"
            >
              <p className="text-body-2 text-[var(--color-text-xDark)] flex-grow">
                "{testimonial.quote}"
              </p>

              <div className="flex flex-col gap-[var(--spacing-1x)]">
                <p className="text-body-3 font-medium text-[var(--color-text-xDark)]">
                  {testimonial.name}
                </p>
                <p className="text-body-4 text-[var(--color-text-dark)]">
                  {testimonial.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes testimonial-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-testimonial-scroll {
          animation: testimonial-scroll 30s linear infinite;
        }

        .animate-testimonial-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsCarousel;
