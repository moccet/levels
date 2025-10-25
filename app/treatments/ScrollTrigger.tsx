'use client';

import { useEffect } from 'react';

export default function ScrollTrigger() {
  useEffect(() => {
    // Initial scroll to trigger header's scrolled state
    window.scrollTo(0, 1);

    // Prevent scrolling back to 0 to keep header in scrolled state
    const handleScroll = () => {
      if (window.scrollY === 0) {
        window.scrollTo(0, 1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
