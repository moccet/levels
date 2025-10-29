import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    // Fetch the blog page from JoinVoy
    const response = await fetch('https://www.joinvoy.com/blog', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LevelsBot/1.0)',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const html = await response.text();

    // Extract __NEXT_DATA__ JSON from the HTML
    const nextDataMatch = html.match(/<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/);

    if (!nextDataMatch) {
      throw new Error('Could not find __NEXT_DATA__ in the page');
    }

    const nextData = JSON.parse(nextDataMatch[1]);
    const pageProps = nextData?.props?.pageProps;

    if (!pageProps) {
      throw new Error('Could not find page props');
    }

    // Extract blog articles from the page composition
    const compositions = pageProps.pageConfig?.compositions || [];
    const articles: any[] = [];

    // Process each composition to find article data
    compositions.forEach((composition: any) => {
      if (composition.name === 'ArticleFeaturedCarousel' || composition.name === 'ArticleList') {
        const items = composition.value?.articles || [];
        items.forEach((item: any) => {
          articles.push({
            externalId: item._id,
            slug: item.slug,
            title: item.title || '',
            description: item.description || null,
            label: item.label || null,
            category: item.label || null,
            imageUrl: item.imageURL || null,
          });
        });
      }
    });

    // Fetch full content for each article
    const syncedArticles = [];
    for (const article of articles) {
      try {
        // Fetch individual article
        const articleResponse = await fetch(`https://www.joinvoy.com/blog/${article.slug}`, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; LevelsBot/1.0)',
          },
        });

        if (!articleResponse.ok) {
          console.error(`Failed to fetch article ${article.slug}`);
          continue;
        }

        const articleHtml = await articleResponse.text();
        const articleDataMatch = articleHtml.match(/<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/);

        if (!articleDataMatch) {
          console.error(`Could not find data for article ${article.slug}`);
          continue;
        }

        const articleNextData = JSON.parse(articleDataMatch[1]);
        const articlePageProps = articleNextData?.props?.pageProps;
        const articleConfig = articlePageProps?.pageConfig || {};
        const articleCompositions = articleConfig.compositions || [];

        // Extract metadata from ContentHero
        const contentHero = articleCompositions.find((c: any) => c.name === 'ContentHero');
        const breadcrumbs = contentHero?.value?.breadcrumbs || [];
        const lastBreadcrumb = breadcrumbs[breadcrumbs.length - 1];
        let finalTitle = lastBreadcrumb?.label || article.title;

        // Replace Voy/JoinVoy with Levels in all content
        const replaceVoyWithLevels = (text: string): string => {
          if (!text) return text;
          return text
            .replace(/JoinVoy/g, 'Levels')
            .replace(/joinvoy\.com/g, 'levelsweight.com')
            .replace(/\bVoy\b/g, 'Levels')
            .replace(/www\.joinvoy\.com/g, 'www.levelsweight.com')
            .replace(/https:\/\/joinvoy\.com/g, 'https://levelsweight.com');
        };

        // Apply replacements to title and description
        finalTitle = replaceVoyWithLevels(finalTitle);
        const finalDescription = replaceVoyWithLevels(article.description || '');

        // Deep clone and replace in content
        const updatedContent = JSON.parse(JSON.stringify(articleCompositions));
        const processContent = (obj: any): any => {
          if (typeof obj === 'string') {
            return replaceVoyWithLevels(obj);
          }
          if (Array.isArray(obj)) {
            return obj.map(processContent);
          }
          if (obj && typeof obj === 'object') {
            const newObj: any = {};
            for (const key in obj) {
              newObj[key] = processContent(obj[key]);
            }
            return newObj;
          }
          return obj;
        };
        const finalContent = processContent(updatedContent);

        // Upsert article in database
        const dbArticle = await prisma.blogArticle.upsert({
          where: { slug: article.slug },
          update: {
            title: finalTitle,
            description: finalDescription,
            category: article.category,
            label: article.label,
            imageUrl: article.imageUrl,
            content: finalContent,
            syncedAt: new Date(),
            updatedAt: new Date(),
          },
          create: {
            externalId: article.externalId,
            slug: article.slug,
            title: finalTitle,
            description: finalDescription,
            category: article.category,
            label: article.label,
            imageUrl: article.imageUrl,
            content: finalContent,
            publishedAt: null,
            updatedAt: new Date(),
          },
        });

        syncedArticles.push(dbArticle);
      } catch (error) {
        console.error(`Error syncing article ${article.slug}:`, error);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Synced ${syncedArticles.length} articles`,
      articles: syncedArticles.map(a => ({ slug: a.slug, title: a.title })),
      syncedAt: new Date().toISOString(),
    });

  } catch (error) {
    console.error('Error syncing blogs:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
