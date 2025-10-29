import React from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';

export interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`w-full bg-white ${className}`}>
      <div className="page-container py-[var(--spacing-16x)] md:py-[var(--spacing-20x)]">
        {/* Top Section - 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-[var(--spacing-12x)] md:gap-[var(--spacing-8x)] mb-[var(--spacing-12x)]">

          {/* Column 1 - Contact Info */}
          <div className="flex flex-col gap-[var(--spacing-4x)] md:col-span-2">
            <h4 className="text-heading-4 font-semibold text-[var(--color-text-xDark)]">
              Have a question?
            </h4>

            {/* Phone */}
            <div className="flex flex-col gap-[var(--spacing-1x)]">
              <div className="flex items-center gap-[var(--spacing-2x)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span className="text-body-3 font-medium text-[var(--color-text-xDark)]">020 3951 3429</span>
              </div>
              <p className="text-body-4 text-[var(--color-text-dark)] ml-[28px]">Monday - Friday 9am - 5pm</p>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-[var(--spacing-1x)]">
              <div className="flex items-center gap-[var(--spacing-2x)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m2 7 10 7 10-7"/>
                </svg>
                <span className="text-body-3 font-medium text-[var(--color-text-xDark)]">levels@thewellnesslondon.com</span>
              </div>
              <p className="text-body-4 text-[var(--color-text-dark)] ml-[28px]">We aim to reply in 24hrs</p>
            </div>

            {/* Disclaimer */}
            <p className="text-body-4 text-[var(--color-text-dark)] mt-[var(--spacing-2x)]">
              Our services are not intended for use in a medical emergency. If you need urgent medical attention, please call 111 or 999.
            </p>
          </div>

          {/* Column 2 - Programme */}
          <div className="flex flex-col gap-[var(--spacing-3x)]">
            <h4 className="text-heading-4 font-semibold text-[var(--color-text-xDark)]">
              Programme
            </h4>
            <Link href="/how-it-works" className="text-body-3 text-[var(--color-text-dark)] hover:opacity-80">
              How it works
            </Link>
            <Link href="/treatments" className="text-body-3 text-[var(--color-text-dark)] hover:opacity-80">
              Treatments
            </Link>
          </div>

          {/* Column 3 - Levels */}
          <div className="flex flex-col gap-[var(--spacing-3x)]">
            <h4 className="text-heading-4 font-semibold text-[var(--color-text-xDark)]">
              Levels
            </h4>
            <Link href="/experts" className="text-body-3 text-[var(--color-text-dark)] hover:opacity-80">
              Medical experts
            </Link>
            <Link href="/results" className="text-body-3 text-[var(--color-text-dark)] hover:opacity-80">
              Results
            </Link>
          </div>

          {/* Column 4 - Legal */}
          <div className="flex flex-col gap-[var(--spacing-3x)]">
            <h4 className="text-heading-4 font-semibold text-[var(--color-text-xDark)]">
              Legal
            </h4>
            <Link href="/privacy-policy" className="text-body-3 text-[var(--color-text-dark)] hover:opacity-80">
              Privacy policy
            </Link>
            <Link href="/terms-and-conditions" className="text-body-3 text-[var(--color-text-dark)] hover:opacity-80">
              Terms & Conditions
            </Link>
            <Link href="/terms-of-sale" className="text-body-3 text-[var(--color-text-dark)] hover:opacity-80">
              Terms of Sale
            </Link>
            <Link href="/complaints" className="text-body-3 text-[var(--color-text-dark)] hover:opacity-80">
              Complaints
            </Link>
          </div>

          {/* Column 5 - Get help */}
          <div className="flex flex-col gap-[var(--spacing-3x)]">
            <h4 className="text-heading-4 font-semibold text-[var(--color-text-xDark)]">
              Get help
            </h4>
            <Link href="/help-centre" className="text-body-3 text-[var(--color-text-dark)] hover:opacity-80">
              Help Centre (FAQ)
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-[var(--spacing-12x)]"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-[var(--spacing-8x)]">
          {/* Left Side */}
          <div className="flex flex-col gap-[var(--spacing-6x)]">
            {/* Logo and Social Icons */}
            <div className="flex items-center gap-[var(--spacing-6x)]">
              <Logo href="/" />

              {/* Social Icons */}
              <div className="flex items-center gap-[var(--spacing-4x)]">
                {/* Facebook */}
                <a href="#" className="text-[var(--color-text-dark)] hover:opacity-80" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Twitter */}
                <a href="#" className="text-[var(--color-text-dark)] hover:opacity-80" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a href="#" className="text-[var(--color-text-dark)] hover:opacity-80" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-body-4 text-[var(--color-text-dark)]">
              Copyright {currentYear} Levels. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
