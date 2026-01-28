import { getPage, getAllPages } from '@/lib/keystatic';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const pages = await getAllPages();
  return pages.map((page) => ({ slug: page?.slug })).filter(Boolean);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getPage(slug);
  
  if (!page) {
    return { title: 'Page Not Found' };
  }
  
  return {
    title: `${page.title.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())} | Amal College Library`,
  };
}

export default async function StaticPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getPage(slug);
  
  if (!page) {
    notFound();
  }

  // Render MDX content
  const Content = await page.content();

  const formatDate = (dateStr: string | null | undefined) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          ← Home
        </Link>
      </nav>

      <article>
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {page.title.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
          </h1>
          
          {page.lastModified && (
            <p className="text-sm text-gray-500">
              Last updated: {formatDate(page.lastModified)}
            </p>
          )}
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600">
          <Content />
        </div>
      </article>
    </main>
  );
}
