import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export const dynamic = 'force-dynamic';
export const revalidate = 60; // Revalidate every 60 seconds

export async function GET() {
  try {
    // Fetch articles from database
    const dbArticles = await prisma.blogArticle.findMany({
      orderBy: {
        syncedAt: 'desc',
      },
    });

    // Transform to match expected format
    const articles = dbArticles.map(article => ({
      id: article.externalId,
      title: article.title,
      slug: article.slug,
      description: article.description || '',
      label: article.label || 'General',
      category: article.category || 'General',
      imageUrl: article.imageUrl,
    }));

    return NextResponse.json({
      success: true,
      articles,
      count: articles.length,
      fetchedAt: new Date().toISOString(),
      source: 'database',
    });

  } catch (error) {
    console.error('Error fetching blogs from database:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        articles: [],
      },
      { status: 500 }
    );
  }
}
