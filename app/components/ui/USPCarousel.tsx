'use client';

import React from 'react';

export interface USPItem {
  text: string;
  icon?: React.ReactNode;
}

export interface USPCarouselProps {
  items?: USPItem[];
  className?: string;
}

const defaultItems: USPItem[] = [
  {
    text: 'Free next-day delivery',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    )
  },
  {
    text: 'Clinically proven medication',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4.5 16.5c-1.5 1.6-1.5 4.2 0 5.7s4.2 1.6 5.7 0l7.1-7.1c1.5-1.5 1.5-4.2 0-5.7s-4.2-1.5-5.7 0l-7.1 7.1z"/>
        <path d="M18 11l5-5"/>
        <path d="M15 8l6-6"/>
      </svg>
    )
  },
  {
    text: 'Cancel anytime subscription',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    )
  },
  {
    text: 'Trusted by 100k UK customers',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
];

const USPCarousel: React.FC<USPCarouselProps> = ({
  items = defaultItems,
  className = '',
}) => {
  // Duplicate items for seamless loop
  const allItems = [...items, ...items];

  return (
    <div className={`bg-transparent py-[var(--spacing-4x)] md:py-[var(--spacing-4x)] overflow-hidden ${className}`}>
      {/* Mobile: Stacked Layout */}
      <div className="md:hidden flex flex-col gap-[var(--spacing-3x)] px-[var(--spacing-4x)]">
        {/* Trustpilot Rating */}
        <div className="flex items-center justify-center gap-[var(--spacing-3x)]">
          <div className="flex items-center gap-[var(--spacing-2x)]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#00B67A">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="text-[16px] font-bold text-white">Trustpilot</span>
          </div>
          {/* Stars */}
          <div className="flex items-center gap-[3px]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#00B67A">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
        </div>

        {/* Scrolling USP Items */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {allItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-[var(--spacing-2x)] px-[var(--spacing-3x)] shrink-0"
              >
                {item.icon && (
                  <div className="text-white w-[18px] h-[18px] flex items-center justify-center">
                    {item.icon}
                  </div>
                )}
                <span className="text-[13px] text-white font-medium whitespace-nowrap">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: Horizontal Layout */}
      <div className="hidden md:flex items-center gap-[var(--spacing-8x)]">
        {/* Trustpilot Rating */}
        <div className="flex items-center gap-[var(--spacing-4x)] px-[var(--spacing-6x)] shrink-0">
          <div className="flex items-center gap-[var(--spacing-2x)]">
            {/* Trustpilot Logo */}
            <div className="flex items-center gap-[var(--spacing-2x)]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#00B67A">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="text-body-3 font-bold text-white">Trustpilot</span>
            </div>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-[3px]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#00B67A">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
        </div>

        {/* Vertical divider */}
        <div className="h-[24px] w-[1px] bg-white/30 shrink-0" />

        {/* Scrolling USP Items */}
        <div className="flex-1 relative overflow-hidden">
          <div className="flex animate-scroll">
            {allItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-[var(--spacing-2x)] px-[var(--spacing-6x)] shrink-0"
              >
                {item.icon && (
                  <div className="text-white">
                    {item.icon}
                  </div>
                )}
                <span className="text-body-3 text-white font-medium whitespace-nowrap">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default USPCarousel;
