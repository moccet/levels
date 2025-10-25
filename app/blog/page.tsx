import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Guides | Levels',
  description: 'Expert advice, guides, and tips for weight loss, menopause, and healthy living.',
};

export default function BlogPage() {
  const articles = [
    {
      title: 'Understanding GLP-1 Medications: A Complete Guide',
      category: 'Weight Loss',
      excerpt: 'Learn how GLP-1 medications work, their benefits, and what to expect when starting treatment.',
      date: '2024-01-15',
    },
    {
      title: 'Sustainable Weight Loss: Tips from Our Experts',
      category: 'Weight Loss',
      excerpt: 'Our medical team shares evidence-based strategies for achieving and maintaining a healthy weight.',
      date: '2024-01-10',
    },
    {
      title: 'Menopause and HRT: What You Need to Know',
      category: 'Menopause',
      excerpt: 'A comprehensive guide to hormone replacement therapy and managing menopause symptoms.',
      date: '2024-01-05',
    },
    {
      title: 'Nutrition Tips for Weight Loss Success',
      category: 'Nutrition',
      excerpt: 'Simple, sustainable eating habits that support your weight loss journey.',
      date: '2023-12-28',
    },
    {
      title: 'Exercise and Weight Loss: Finding What Works for You',
      category: 'Fitness',
      excerpt: 'How to create an exercise routine that complements your weight loss treatment.',
      date: '2023-12-20',
    },
    {
      title: 'Managing Side Effects: What to Expect',
      category: 'Treatment',
      excerpt: 'Common side effects of weight loss medications and how to manage them effectively.',
      date: '2023-12-15',
    },
  ];

  const categories = ['All', 'Weight Loss', 'Menopause', 'Nutrition', 'Fitness', 'Treatment'];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[var(--color-surface-white-xLight)] py-[var(--spacing-20x)] md:py-[var(--spacing-30x)]">
        <div className="page-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display mb-[var(--spacing-8x)]">
              Guides & Tips
            </h1>
            <p className="text-body-1 text-[var(--color-text-dark)]">
              Expert advice and evidence-based information to support your health journey.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="page-container py-[var(--spacing-8x)] border-b border-[var(--color-surface-neutral-medium)]">
        <div className="flex flex-wrap gap-[var(--spacing-3x)] justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`
                px-[var(--spacing-5x)] py-[var(--spacing-2x)]
                rounded-full text-body-4 font-medium
                transition-all duration-200
                ${
                  category === 'All'
                    ? 'bg-[var(--color-action-medium)] text-white'
                    : 'bg-[var(--color-surface-neutral-xLight)] text-[var(--color-text-xDark)] hover:bg-[var(--color-surface-neutral-light)]'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="page-container py-[var(--spacing-14x)] md:py-[var(--spacing-30x)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-8x)] max-w-6xl mx-auto">
          {articles.map((article) => (
            <article
              key={article.title}
              className="bg-white rounded-[var(--radius-xlarge)] overflow-hidden hover:shadow-[var(--shadow-heavy)] transition-shadow cursor-pointer"
            >
              {/* Placeholder image */}
              <div className="w-full h-48 bg-[var(--color-surface-neutral-light)]" />

              <div className="p-[var(--spacing-6x)] flex flex-col gap-[var(--spacing-3x)]">
                <div className="flex items-center gap-[var(--spacing-3x)]">
                  <span className="px-[var(--spacing-3x)] py-[var(--spacing-1x)] bg-[var(--color-surface-neutral-xLight)] rounded-full text-[var(--font-size-xxxSmall)] text-[var(--color-text-dark)]">
                    {article.category}
                  </span>
                  <span className="text-[var(--font-size-xxxSmall)] text-[var(--color-text-dark)]">
                    {new Date(article.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>

                <h3 className="text-heading-3 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-body-4 text-[var(--color-text-dark)] line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="mt-[var(--spacing-2x)]">
                  <span className="text-body-4 text-[var(--color-action-medium)] font-medium hover:opacity-80">
                    Read more →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[var(--color-surface-white-xLight)] py-[var(--spacing-14x)] md:py-[var(--spacing-30x)]">
        <div className="page-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-heading-2 mb-[var(--spacing-6x)]">
              Stay informed
            </h2>
            <p className="text-body-3 text-[var(--color-text-dark)] mb-[var(--spacing-8x)]">
              Get the latest health tips, research updates, and expert advice delivered
              to your inbox.
            </p>
            <div className="flex flex-col md:flex-row gap-[var(--spacing-4x)] max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-[var(--spacing-5x)] py-[var(--spacing-4x)] rounded-full border border-[var(--color-surface-neutral-medium)] text-body-4 focus:outline-none focus:border-[var(--color-action-medium)]"
              />
              <button className="px-[var(--spacing-8x)] py-[var(--spacing-4x)] bg-[var(--color-action-medium)] text-white rounded-full text-body-4 font-medium hover:opacity-80 transition-opacity whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
