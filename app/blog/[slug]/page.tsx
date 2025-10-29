import { notFound } from 'next/navigation';
import Image from 'next/image';
import { prisma } from '@/app/lib/prisma';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

async function getBlogPost(slug: string) {
  try {
    // Fetch directly from database (faster and no port issues!)
    const dbArticle = await prisma.blogArticle.findUnique({
      where: { slug },
    });

    if (!dbArticle) {
      return null;
    }

    // Transform to expected format
    return {
      id: dbArticle.externalId,
      title: dbArticle.title,
      slug: dbArticle.slug,
      description: dbArticle.description || '',
      label: dbArticle.label || 'General',
      category: dbArticle.category || 'General',
      imageUrl: dbArticle.imageUrl,
      publishedAt: dbArticle.publishedAt?.toISOString() || null,
      updatedAt: dbArticle.updatedAt.toISOString(),
      content: dbArticle.content,
      seo: {
        title: dbArticle.title,
        description: dbArticle.description || '',
      },
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const article = await getBlogPost(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found | Levels',
    };
  }

  return {
    title: article.seo?.title || article.title || 'Blog Post | Levels',
    description: article.seo?.description || article.description || '',
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const article = await getBlogPost(params.slug);

  if (!article) {
    notFound();
  }

  // Extract ContentHero for breadcrumbs and medical info
  const contentHero = Array.isArray(article.content) ? (article.content.find((c: any) => c.name === 'ContentHero') as any)?.value : undefined;
  const breadcrumbs = contentHero?.breadcrumbs || [];
  const medicalSection = contentHero?.medicalSection;

  return (
    <div className="flex flex-col pt-[100px] md:pt-[148px]">
      {/* Article Header */}
      <section className="bg-[#F5F3EF] py-[var(--spacing-14x)] md:py-[var(--spacing-20x)]">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            {breadcrumbs.length > 0 && (
              <nav className="mb-[var(--spacing-8x)] text-body-4 text-[var(--color-text-dark)]">
                <ol className="flex flex-wrap items-center gap-2">
                  {breadcrumbs.map((crumb: any, index: number) => (
                    <li key={crumb._key} className="flex items-center gap-2">
                      {index > 0 && <span>/</span>}
                      <a
                        href={crumb.href}
                        className="hover:text-[var(--color-text-xDark)] transition-colors"
                      >
                        {crumb.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {/* Title */}
            <h1 className="text-heading-1">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {article.imageUrl && (
        <section className="page-container py-[var(--spacing-10x)]">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-[var(--radius-xlarge)] overflow-hidden bg-[var(--color-surface-neutral-light)]">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="page-container py-[var(--spacing-10x)] md:py-[var(--spacing-14x)]">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Content compositions from JoinVoy */}
            {article.content && Array.isArray(article.content) && article.content.length > 0 ? (
              <div className="space-y-[var(--spacing-8x)]">
                {article.content.map((composition: any, index: number) => {
                  // Skip ContentHero and FAQ as we don't need those
                  if (composition.name === 'ContentHero' || composition.name === 'FAQLong') return null;

                  // Render BlogArticlesContent - this is the main content
                  if (composition.name === 'BlogArticlesContent' && composition.value?.content) {
                    return (
                      <div key={index} className="space-y-[var(--spacing-6x)]">
                        {composition.value.content.map((block: any, blockIndex: number) => {
                          // Render ArticleBio (Key Takeaways)
                          if (block._type === 'ArticleBio') {
                            return (
                              <div key={blockIndex} className="relative bg-[#F5F3EF] rounded-[var(--radius-large)] p-[var(--spacing-8x)] my-[var(--spacing-10x)]">
                                <div className="flex items-start justify-between gap-[var(--spacing-8x)]">
                                  <div className="flex-1">
                                    {block.title && (
                                      <h3 className="text-heading-3 mb-[var(--spacing-6x)]">{block.title}</h3>
                                    )}
                                    {block.description && (
                                      <ul className="space-y-[var(--spacing-3x)]">
                                        {block.description.map((item: any, itemIndex: number) => (
                                          <li key={itemIndex} className="flex items-start gap-[var(--spacing-2x)] text-body-3">
                                            <span className="text-xl">•</span>
                                            <span>
                                              {item.children?.map((child: any, childIndex: number) => {
                                                if (child.marks?.includes('strong')) {
                                                  return <strong key={childIndex}>{child.text}</strong>;
                                                }
                                                return <span key={childIndex}>{child.text}</span>;
                                              })}
                                            </span>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                  {/* Decorative Heart */}
                                  <div className="hidden md:block flex-shrink-0 w-24 h-24">
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                      <path
                                        d="M50 90 L18 100 L0 62 L0 38 L18 0 L50 10 L82 0 L100 38 L100 62 L82 100 Z"
                                        fill="url(#heartGradient)"
                                        opacity="0.7"
                                      />
                                      <defs>
                                        <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                          <stop offset="0%" style={{ stopColor: '#FCA5A5', stopOpacity: 1 }} />
                                          <stop offset="50%" style={{ stopColor: '#FDBA74', stopOpacity: 1 }} />
                                          <stop offset="100%" style={{ stopColor: '#D8B4FE', stopOpacity: 1 }} />
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            );
                          }

                          // Render ArticleCallout (Disclaimer boxes)
                          if (block._type === 'ArticleCallout') {
                            return (
                              <div key={blockIndex} className="bg-gray-50 border-l-4 border-gray-300 p-[var(--spacing-6x)] my-[var(--spacing-8x)] rounded">
                                {block.title && (
                                  <h4 className="text-body-2 font-semibold mb-[var(--spacing-2x)]">{block.title}</h4>
                                )}
                                {block.description && (
                                  <p className="text-body-3 text-[var(--color-text-dark)]">{block.description}</p>
                                )}
                              </div>
                            );
                          }

                          // Skip ArticleReference and ArticleCTA for now
                          if (block._type === 'ArticleReference' || block._type === 'ArticleCTA') {
                            return null;
                          }

                          // Handle text blocks
                          if (block._type === 'block') {
                            const renderText = () => {
                              return block.children?.map((child: any, childIndex: number) => {
                                let text = child.text;

                                // Handle links
                                if (child.marks && child.marks.length > 0) {
                                  const linkMark = block.markDefs?.find((def: any) =>
                                    child.marks.includes(def._key) && def._type === 'link'
                                  );

                                  if (linkMark) {
                                    return (
                                      <a
                                        key={childIndex}
                                        href={linkMark.href}
                                        className="text-[var(--color-text-xDark)] underline hover:no-underline transition-all"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {text}
                                      </a>
                                    );
                                  }

                                  // Handle bold
                                  if (child.marks.includes('strong')) {
                                    return <strong key={childIndex}>{text}</strong>;
                                  }

                                  // Handle italic
                                  if (child.marks.includes('em')) {
                                    return <em key={childIndex}>{text}</em>;
                                  }
                                }

                                return <span key={childIndex}>{text}</span>;
                              });
                            };

                            if (block.style === 'h2') {
                              return <h2 key={blockIndex} className="text-heading-3 mt-[var(--spacing-10x)] mb-[var(--spacing-6x)]">{renderText()}</h2>;
                            }
                            if (block.style === 'h3') {
                              return <h3 key={blockIndex} className="text-heading-4 mt-[var(--spacing-8x)] mb-[var(--spacing-4x)]">{renderText()}</h3>;
                            }
                            if (block.listItem === 'bullet') {
                              return (
                                <li key={blockIndex} className="text-body-3 leading-relaxed text-[var(--color-text-dark)] ml-6 mb-[var(--spacing-2x)] list-disc">
                                  {renderText()}
                                </li>
                              );
                            }

                            return <p key={blockIndex} className="text-body-3 leading-relaxed text-[var(--color-text-dark)] mb-[var(--spacing-4x)]">{renderText()}</p>;
                          }

                          return null;
                        })}
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            ) : (
              <div className="text-body-2 text-[var(--color-text-dark)]">
                <p>Content is being loaded from JoinVoy...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="page-container py-[var(--spacing-10x)] border-t border-[var(--color-surface-neutral-medium)]">
        <div className="max-w-4xl mx-auto">
          <a
            href="/blog"
            className="inline-flex items-center gap-[var(--spacing-2x)] text-body-3 text-[var(--color-action-medium)] hover:opacity-80 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Back to all articles
          </a>
        </div>
      </section>
    </div>
  );
}
