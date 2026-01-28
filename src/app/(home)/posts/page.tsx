import { getAllPosts } from '@/lib/keystatic';
import Link from 'next/link';

export const metadata = {
  title: 'Posts & Updates | Amal College Library',
  description: 'Latest announcements, new arrivals, events, workshops, and tutorials from Amal College Library.',
};

export default async function PostsPage() {
  const posts = await getAllPosts();

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

  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Posts & Updates</h1>
        <p className="text-gray-600">
          Stay updated with the latest announcements, new book arrivals, events, and tutorials from the library.
        </p>
      </header>

      {posts.length > 0 ? (
        <div className="grid gap-6">
          {posts.map((post) => (
            <article
              key={post?.slug}
              className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {post?.type && (
                      <span className={`text-xs px-2 py-1 rounded-full ${typeBadge[post.type]?.color || 'bg-gray-100 text-gray-800'}`}>
                        {typeBadge[post.type]?.label || post.type}
                      </span>
                    )}
                    {post?.featured && (
                      <span className="text-xs text-amber-600 font-medium">★ Featured</span>
                    )}
                  </div>
                  <Link href={`/posts/${post?.slug}`}>
                    <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                      {post?.title.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                    </h2>
                  </Link>
                </div>
                
                {post?.publishDate && (
                  <time className="text-sm text-gray-500 whitespace-nowrap">
                    {formatDate(post.publishDate)}
                  </time>
                )}
              </div>
              
              {post?.summary && (
                <p className="text-gray-600 mb-4">{post.summary}</p>
              )}
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {post?.author && (
                    <span className="text-sm text-gray-500">By {post.author}</span>
                  )}
                  {post?.tags && post.tags.length > 0 && (
                    <div className="flex gap-1">
                      {post.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                <Link
                  href={`/posts/${post?.slug}`}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center py-8">
          No posts available yet. Check back soon!
        </p>
      )}
    </main>
  );
}
