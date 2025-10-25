'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-[var(--spacing-4x)]">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-[var(--radius-medium)] overflow-hidden bg-white"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between p-[var(--spacing-6x)] text-left hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-heading-4 text-black pr-[var(--spacing-4x)]">
              {item.question}
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
              openIndex === index ? 'max-h-[500px]' : 'max-h-0'
            }`}
          >
            <div className="p-[var(--spacing-6x)] pt-0">
              <p className="text-body-3 text-[var(--color-text-dark)] whitespace-pre-line">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
