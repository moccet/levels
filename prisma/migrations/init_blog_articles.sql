-- CreateTable
CREATE TABLE IF NOT EXISTS "blog_articles" (
    "id" TEXT NOT NULL,
    "externalId" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT,
    "label" TEXT,
    "imageUrl" TEXT,
    "content" JSONB NOT NULL,
    "publishedAt" TIMESTAMP(3),
    "syncedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blog_articles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "blog_articles_externalId_key" ON "blog_articles"("externalId");

-- CreateIndex
CREATE UNIQUE INDEX "blog_articles_slug_key" ON "blog_articles"("slug");

-- CreateIndex
CREATE INDEX "blog_articles_slug_idx" ON "blog_articles"("slug");

-- CreateIndex
CREATE INDEX "blog_articles_category_idx" ON "blog_articles"("category");
