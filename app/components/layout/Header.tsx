'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';
import { Button } from '../ui';

export interface NavLink {
  label: string;
  href: string;
}

export interface HeaderProps {
  navLinks?: NavLink[];
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  navLinks = [
    { label: 'Weight Loss', href: '/weight-loss' },
  ],
  className = '',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <div className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${className}`}>
        <div className={`transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/60 backdrop-blur-md shadow-sm border-gray-200'
            : 'bg-transparent border-white'
        }`}>
          <div className="w-full px-[var(--spacing-6x)] md:px-[var(--spacing-10x)]">
            <div className="flex items-center justify-between py-[48px]">
              {/* Left: Logo */}
              <div className={`flex items-center transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}>
                <Logo href="/" />
              </div>

              {/* Center: Navigation */}
              <nav className="flex items-center gap-[var(--spacing-8x)]">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-body-3 hover:opacity-80 transition-all duration-300 ${
                      isScrolled ? 'text-black' : 'text-white'
                    }`}
                    style={{ fontFamily: 'var(--font-poppins)', fontWeight: 500 }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Right: Get Started Button */}
              <div className="flex items-center gap-[var(--spacing-4x)]">
                <Link
                  href="/weight-loss/assessment"
                  className={`inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                    isScrolled
                      ? 'border-[2.5px] border-black text-black bg-transparent hover:bg-black hover:text-white'
                      : 'border-[2.5px] border-white text-white bg-transparent hover:bg-white hover:text-black'
                  }`}
                  style={{ fontFamily: 'var(--font-poppins)', fontWeight: 500 }}
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${className}`}>
        <div className={`transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/60 backdrop-blur-md shadow-sm border-gray-200'
            : 'bg-transparent border-white'
        }`}>
          <div className="w-full px-[var(--spacing-4x)]">
            <div className="flex items-center justify-between py-[var(--spacing-4x)]">
            {/* Left: Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-[var(--spacing-2x)] -ml-[var(--spacing-2x)]"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width="24"
                height="24"
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                <path
                  d="M3 5H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M3 12H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M3 19H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Center: Logo */}
            <div className={`transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>
              <Logo href="/" />
            </div>

            {/* Right: Placeholder */}
            <div className="w-[40px]" /> {/* Spacer for centering */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 left-0 bottom-0 w-full bg-white shadow-xl overflow-y-auto transform transition-transform duration-300 ease-in-out animate-slide-in">
            {/* Mobile menu content */}
            <div className="p-[var(--spacing-6x)]">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-[var(--spacing-6x)] right-[var(--spacing-6x)]"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <nav className="mt-[var(--spacing-16x)] flex flex-col gap-[var(--spacing-6x)]">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-body-2 font-bold text-[var(--color-text-xDark)]"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="mt-[var(--spacing-6x)]">
                  <Link
                    href="/weight-loss/assessment"
                    className="w-full inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 border-[2.5px] border-black text-black bg-transparent hover:bg-black hover:text-white"
                    style={{ fontFamily: 'var(--font-poppins)', fontWeight: 500 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get started
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          <style jsx>{`
            @keyframes slide-in {
              from {
                transform: translateX(-100%);
              }
              to {
                transform: translateX(0);
              }
            }

            .animate-slide-in {
              animation: slide-in 300ms ease-in-out;
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default Header;
