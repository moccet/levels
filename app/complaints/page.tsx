import React from 'react';
import ScrollTrigger from './ScrollTrigger';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Complaints Policy | Levels',
  description: 'Our complaints policy explains how to raise concerns, our investigation process, and what to do if you\'re not satisfied with our response.',
};

export default function ComplaintsPage() {
  const currentDate = new Date().toLocaleDateString('en-GB', { month: '2-digit', year: '2-digit' });

  return (
    <div className="flex flex-col">
      <ScrollTrigger />
      {/* Spacer for fixed header */}
      <div className="h-[120px] md:h-[150px] bg-white" />

      {/* Hero Section */}
      <section className="bg-[#f5f0eb] py-[56px] md:py-[80px]">
        <div className="page-container">
          <h1 className="text-[48px] md:text-[64px] font-light text-[var(--color-text-xDark)]">
            Complaints policy
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="page-container py-[56px] md:py-[120px]">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="prose prose-sm max-w-none mb-[var(--spacing-12x)]">
            <p className="text-body-2 text-[var(--color-text-dark)] leading-relaxed">
              At Levels, we put patients at the heart of what we do, and we always aim to provide high quality services and products that meet your needs. If we're not getting something right, please let us know. All complaints, concerns and compliments are valuable feedback, and help us to improve our services for all our patients.
            </p>
            <p className="text-body-2 text-[var(--color-text-dark)] leading-relaxed mt-4">
              Our team is happy to discuss any concerns you may have with our services or products and we will always try to resolve concerns or complaints informally. If you'd like to make a formal complaint, please email us at <a href="mailto:help@levelsweight.com" className="text-[var(--color-action-medium)] underline">help@levelsweight.com</a> with <strong>"Formal Complaint"</strong> as the subject line of your email to ensure it is identified correctly.
            </p>
          </div>

          {/* Information to Include */}
          <div className="mb-[var(--spacing-12x)]">
            <h2 className="text-heading-3 text-[var(--color-text-xDark)] mb-[var(--spacing-6x)]">
              To help us investigate your complaint further, please share as much information as possible, including:
            </h2>
            <ul className="space-y-3 text-body-3 text-[var(--color-text-dark)]">
              <li className="flex gap-3">
                <span className="text-[var(--color-action-medium)]">•</span>
                <span>Your full name, email address and postcode</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-action-medium)]">•</span>
                <span>Order number (if applicable)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-action-medium)]">•</span>
                <span>A clear description of your complaint - please be as specific as possible to ensure we can carry out a thorough review and provide an appropriate response</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-action-medium)]">•</span>
                <span>If your complaint relates to an order that wasn't right (e.g. missing product) please also include photos</span>
              </li>
            </ul>
          </div>

          {/* Internal Complaints Procedure */}
          <div className="mb-[var(--spacing-12x)]">
            <h2 className="text-heading-3 text-[var(--color-text-xDark)] mb-[var(--spacing-6x)]">
              Our internal complaints procedure aims to:
            </h2>
            <ol className="space-y-3 text-body-3 text-[var(--color-text-dark)]">
              <li className="flex gap-3">
                <span className="font-semibold">1.</span>
                <span>Understand and acknowledge the nature of the complaint</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold">2.</span>
                <span>Allocate for investigation</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold">3.</span>
                <span>Review and identify the root cause</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold">4.</span>
                <span>Respond to you</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold">5.</span>
                <span>Take action (where applicable)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold">6.</span>
                <span>Share learnings for continuous improvement</span>
              </li>
            </ol>
          </div>

          {/* Timeline */}
          <div className="mb-[var(--spacing-12x)] p-[var(--spacing-8x)] bg-[#f5f0eb] rounded-[var(--radius-card)]">
            <p className="text-body-2 text-[var(--color-text-dark)] leading-relaxed">
              We aim to <strong>acknowledge receipt of your complaint within 72 business hours</strong>, and this will outline the process and provide you with our contact details should you need to get in touch. We will then launch an internal investigation to determine what happened and work to find a solution. Our time frame for response is <strong>20 working days</strong>, but we will reach out to you if we need further information or more time to complete our review.
            </p>
            <p className="text-body-2 text-[var(--color-text-dark)] leading-relaxed mt-4">
              After the investigation has taken place, we will contact you with a summary of our findings, confirming all actions taken to resolve your concerns. We will also share any changes and/or learnings with the team and all members involved. Where the complaint relates to issues of patient safety or safeguarding, we will notify our safeguarding lead and take immediate actions where necessary.
            </p>
          </div>

          {/* What to do if not happy */}
          <div className="mb-[var(--spacing-12x)]">
            <h2 className="text-heading-2 text-[var(--color-text-xDark)] mb-[var(--spacing-6x)]">
              What to do if you're not happy with our response
            </h2>
            <p className="text-body-2 text-[var(--color-text-dark)] leading-relaxed mb-6">
              If you're still not satisfied with our formal complaint response, you can ask for an <strong>internal appeal (Stage 2)</strong>. Please do this within 3 months of receiving our response and send us a clear, detailed description of your complaint in writing, explaining why you were not satisfied with our original response. An internal review will then be completed by a senior member of staff that was not involved in the original review.
            </p>
            <p className="text-body-2 text-[var(--color-text-dark)] leading-relaxed">
              Where we are unable to resolve the matter at Stage 2, we can look to refer the matter to <strong>MEDSU</strong>, an impartial and objective complaints resolution service for independent review and determination (Stage 3).
            </p>
          </div>

          {/* Other Formats */}
          <div className="border-t border-gray-200 pt-[var(--spacing-12x)]">
            <h2 className="text-heading-3 text-[var(--color-text-xDark)] mb-[var(--spacing-6x)]">
              Other formats
            </h2>
            <p className="text-body-3 text-[var(--color-text-dark)] mb-4">
              Our complaints policy is available in the following formats:
            </p>
            <ul className="space-y-2 text-body-3 text-[var(--color-text-dark)]">
              <li>
                <a href="#" className="text-[var(--color-action-medium)] hover:underline">
                  Easy Read format
                </a>
                {' '}- Last updated {currentDate}
              </li>
              <li>
                <a href="#" className="text-[var(--color-action-medium)] hover:underline">
                  English
                </a>
                {' '}- Last updated {currentDate}
              </li>
              <li>
                <a href="#" className="text-[var(--color-action-medium)] hover:underline">
                  Polish
                </a>
                {' '}- Last updated {currentDate}
              </li>
              <li>
                <a href="#" className="text-[var(--color-action-medium)] hover:underline">
                  Welsh
                </a>
                {' '}- Last updated {currentDate}
              </li>
              <li>
                <a href="#" className="text-[var(--color-action-medium)] hover:underline">
                  Punjabi
                </a>
                {' '}- Last updated {currentDate}
              </li>
              <li>
                <a href="#" className="text-[var(--color-action-medium)] hover:underline">
                  Portuguese
                </a>
                {' '}- Last updated {currentDate}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
