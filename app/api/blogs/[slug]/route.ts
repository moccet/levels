import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export const dynamic = 'force-dynamic';
export const revalidate = 60; // Revalidate every 60 seconds

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

    // Fetch article from database
    const dbArticle = await prisma.blogArticle.findUnique({
      where: { slug },
    });

    if (!dbArticle) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Build the article object
    const article = {
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

    return NextResponse.json({
      success: true,
      article,
      fetchedAt: new Date().toISOString(),
      source: 'database',
    });

  } catch (error) {
    console.error('Error fetching blog post from database:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
