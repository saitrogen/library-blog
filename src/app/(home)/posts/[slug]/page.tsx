import { getPost, getAllPosts } from '@/lib/keystatic';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post?.slug })).filter(Boolean);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }
  
  return {
    title: `${post.title.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())} | Amal College Library`,
    description: post.summary || 'Read this post from Amal College Library',
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) {
    notFound();
  }

  const typeBadge: Record<string, { label: string; color: string }> = {
    'new-arrivals': { label: 'New Arrivals', color: 'bg-green-100 text-green-800' },
    'event': { label: 'Event', color: 'bg-blue-100 text-blue-800' },
    'workshop': { label: 'Workshop', color: 'bg-purple-100 text-purple-800' },
    'seminar': { label: 'Seminar', color: 'bg-indigo-100 text-indigo-800' },
    'tutorial': { label: 'Tutorial', color: 'bg-yellow-100 text-yellow-800' },
    'announcement': { label: 'Announcement', color: 'bg-red-100 text-red-800' },
  };

  const formatDate = (dateStr: string | null | undefined) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Render MDX content
  const Content = await post.content();

  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <Link href="/posts" className="text-blue-600 hover:text-blue-800">
          ← Back to Posts
        </Link>
      </nav>

      <article>
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            {post.type && (
              <span className={`text-xs px-2 py-1 rounded-full ${typeBadge[post.type]?.color || 'bg-gray-100 text-gray-800'}`}>
                {typeBadge[post.type]?.label || post.type}
              </span>
            )}
            {post.featured && (
              <span className="text-xs text-amber-600 font-medium">★ Featured</span>
            )}
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {post.title.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            {post.publishDate && (
              <time>{formatDate(post.publishDate)}</time>
            )}
            {post.author && (
              <span>By {post.author}</span>
            )}
          </div>
          
          {post.summary && (
            <p className="mt-4 text-lg text-gray-600 border-l-4 border-blue-200 pl-4">
              {post.summary}
            </p>
          )}
        </header>

        {/* YouTube Embed */}
        {post.youtubeVideoId && (
          <div className="mb-8 aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube-nocookie.com/embed/${post.youtubeVideoId}`}
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600">
          <Content />
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-8 pt-6 border-t">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <span key={i} className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
