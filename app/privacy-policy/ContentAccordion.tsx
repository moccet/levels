'use client';

import React, { useState } from 'react';

interface ContentSection {
  heading: string;
  content: React.ReactNode;
}

interface ContentAccordionProps {
  sections: ContentSection[];
}

const ContentAccordion: React.FC<ContentAccordionProps> = ({ sections }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First section open by default

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-[var(--spacing-4x)]">
      {sections.map((section, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-[var(--radius-medium)] overflow-hidden bg-white"
          id={`section-${index}`}
        >
          <button
            onClick={() => toggleSection(index)}
            className="w-full flex items-center justify-between p-[var(--spacing-6x)] text-left hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-heading-4 text-black pr-[var(--spacing-4x)]">
              {section.heading}
            </h3>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-[10000px]' : 'max-h-0'
            }`}
          >
            <div className="p-[var(--spacing-6x)] pt-0">
              <div className="text-body-3 text-[var(--color-text-dark)] prose prose-sm max-w-none">
                {section.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentAccordion;
