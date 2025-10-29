'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  label?: string;
  imageUrl: string | null;
}

export default function BlogPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch('/api/blogs');
        const data = await response.json();

        if (data.success && data.articles) {
          setArticles(data.articles);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  // Split articles by category
  const featuredArticles = articles.slice(0, 3);
  const weightLossArticles = articles.slice(3, 15); // Show more articles after featured

  return (
    <div className="flex flex-col pt-[100px] md:pt-[148px]">
      {/* Hero Section */}
      <section className="bg-[#F5F3EF] h-[70vh] overflow-hidden flex items-center">
        <div className="page-container w-full">
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-[var(--spacing-10x)]">
              {/* Left Content */}
              <div className="flex-1 max-w-2xl">
                <h1 className="text-display mb-[var(--spacing-8x)]">
                  Guides & Tips
                </h1>
                <p className="text-heading-4 font-normal text-[var(--color-text-xDark)] leading-relaxed">
                  Discover expert-backed guidance on weight loss and personalised tips to help you succeed in your health journey.
                </p>
              </div>

              {/* Right Decorative Shapes */}
              <div className="hidden md:block relative w-[400px] h-[300px] flex-shrink-0">
                {/* Pink Star */}
                <div className="absolute top-[20%] left-[10%] w-24 h-24">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z"
                          fill="url(#pinkGradient)" opacity="0.8"/>
                    <defs>
                      <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#FFB6C1', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#FFE5E9', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Top Rectangle */}
                <div className="absolute top-[15%] right-[5%] w-20 h-16 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-orange-300 via-blue-300 to-blue-400 opacity-70" />
                </div>

                {/* Circle */}
                <div className="absolute bottom-[30%] left-[5%] w-32 h-32 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-orange-300 via-orange-200 to-blue-300 opacity-70" />
                </div>

                {/* Pink Triangle */}
                <div className="absolute bottom-[15%] right-[10%] w-28 h-28">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon points="50,10 90,90 10,90"
                            fill="url(#pinkTriangleGradient)" opacity="0.7"/>
                    <defs>
                      <linearGradient id="pinkTriangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#FFB6C1', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#E9B8D9', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Carousel */}
      <section className="page-container py-[var(--spacing-14x)] md:py-[var(--spacing-20x)]">
        {/* Section Header with Navigation */}
        <div className="flex items-center justify-between mb-[var(--spacing-10x)]">
          <h2 className="text-heading-2">Featured articles</h2>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-[var(--spacing-3x)]">
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? featuredArticles.length - 1 : prev - 1))}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous article"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev === featuredArticles.length - 1 ? 0 : prev + 1))}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next article"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Card */}
        <div className="relative overflow-hidden rounded-[var(--radius-xlarge)]">
          {loading ? (
            <div className="grid md:grid-cols-2 min-h-[400px] md:min-h-[500px] bg-[#1A2D1F] rounded-[var(--radius-xlarge)] items-center justify-center">
              <div className="col-span-2 text-center text-white text-body-2">
                Loading featured articles...
              </div>
            </div>
          ) : featuredArticles.length === 0 ? (
            <div className="grid md:grid-cols-2 min-h-[400px] md:min-h-[500px] bg-[#1A2D1F] rounded-[var(--radius-xlarge)] items-center justify-center">
              <div className="col-span-2 text-center text-white text-body-2">
                No featured articles found.
              </div>
            </div>
          ) : (
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredArticles.map((article, index) => (
              <div
                key={article.id}
                className="w-full flex-shrink-0"
              >
                <Link href={`/blog/${article.slug}`}>
                  <div className="grid md:grid-cols-2 min-h-[400px] md:min-h-[500px] overflow-hidden rounded-[var(--radius-xlarge)] cursor-pointer hover:shadow-[var(--shadow-heavy)] transition-shadow">
                    {/* Left Side - Dark Background with Content */}
                    <div className="bg-[#1A2D1F] p-[var(--spacing-10x)] md:p-[var(--spacing-14x)] flex flex-col justify-center">
                      <div className="max-w-xl">
                        <span className="text-[var(--font-size-xxxSmall)] uppercase tracking-wider text-white/70 font-medium mb-[var(--spacing-6x)] block">
                          {article.category || article.label}
                        </span>
                        <h3 className="text-heading-2 text-white mb-[var(--spacing-6x)]">
                          {article.title}
                        </h3>
                        <p className="text-body-2 text-white/70 leading-relaxed">
                          {article.description}
                        </p>
                      </div>
                    </div>

                  {/* Right Side - Light Background with Abstract Illustration */}
                  <div className="bg-[#F5F3EF] relative flex items-center justify-center p-[var(--spacing-10x)]">
                    {/* Abstract Illustration */}
                    <div className="relative w-full max-w-md h-[300px]">
                      {/* Blue Rectangle */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[120px] h-[280px] rounded-[20px] overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-blue-300 to-blue-400 opacity-80" />
                      </div>

                      {/* Gray Rounded Rectangle */}
                      <div className="absolute left-[100px] top-1/2 -translate-y-1/2 w-[140px] h-[240px] rounded-[60px] overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 opacity-70" />
                      </div>

                      {/* Orange/Pink Gradient */}
                      <div className="absolute right-[80px] top-1/2 -translate-y-1/2 w-[160px] h-[260px] rounded-[40px] overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-orange-300 via-pink-300 to-purple-300 opacity-80" />
                      </div>

                      {/* Text Lines */}
                      <div className="absolute right-[20px] top-1/2 -translate-y-1/2 flex flex-col gap-[var(--spacing-3x)]">
                        <div className="w-[100px] h-[3px] bg-black/80 rounded-full" />
                        <div className="w-[100px] h-[3px] bg-black/80 rounded-full" />
                        <div className="w-[100px] h-[3px] bg-black/80 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
              ))}
            </div>
          )}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-[var(--spacing-2x)] mt-[var(--spacing-8x)]">
          {featuredArticles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-black w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Weight Loss Articles */}
      <section className="page-container py-[var(--spacing-14x)] md:py-[var(--spacing-20x)] border-t border-[var(--color-surface-neutral-medium)]">
        <h2 className="text-heading-2 mb-[var(--spacing-8x)]">Weight Loss</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-8x)]">
          {weightLossArticles.length > 0 ? weightLossArticles.map((article) => (
            <Link key={article.id} href={`/blog/${article.slug}`}>
              <article className="bg-white rounded-[var(--radius-xlarge)] overflow-hidden hover:shadow-[var(--shadow-heavy)] transition-shadow cursor-pointer h-full">
                {article.imageUrl && (
                  <div className="relative w-full h-[240px] bg-[var(--color-surface-neutral-light)]">
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-[var(--spacing-6x)] flex flex-col gap-[var(--spacing-3x)]">
                  <span className="px-[var(--spacing-3x)] py-[var(--spacing-1x)] bg-[var(--color-surface-neutral-xLight)] rounded-full text-[var(--font-size-xxxSmall)] text-[var(--color-text-dark)] w-fit">
                    {article.category || article.label}
                  </span>
                  <h3 className="text-heading-4 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-body-4 text-[var(--color-text-dark)] line-clamp-3">
                    {article.description}
                  </p>
                  <div className="mt-[var(--spacing-2x)]">
                    <span className="text-body-4 text-[var(--color-action-medium)] font-medium hover:opacity-80">
                      Read more →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          )) : (
            <div className="col-span-3 text-center py-[var(--spacing-10x)]">
              <p className="text-body-3 text-[var(--color-text-dark)]">
                {loading ? 'Loading articles...' : 'No weight loss articles found.'}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
