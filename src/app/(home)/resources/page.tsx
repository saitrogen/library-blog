import { getAllResources } from '@/lib/keystatic';
import Link from 'next/link';

export const metadata = {
  title: 'Digital Resources | Amal College Library',
  description: 'Access e-books, e-journals, research databases, and more digital resources from Amal College Library.',
};

export default async function ResourcesPage() {
  const resources = await getAllResources();
  
  // Group resources by category
  const grouped = resources.reduce((acc, resource) => {
    const category = resource?.category || 'other';
    if (!acc[category]) acc[category] = [];
    acc[category].push(resource);
    return acc;
  }, {} as Record<string, typeof resources>);

  const categoryLabels: Record<string, string> = {
    'digital-resource': 'Digital Resources',
    'research-database': 'Research Databases',
    'career-service': 'Career Services',
    'external-tool': 'External Tools',
    'other': 'Other Resources',
  };

  const accessTypeBadge: Record<string, { label: string; color: string }> = {
    'free': { label: 'Free', color: 'bg-green-100 text-green-800' },
    'institutional-login': { label: 'Institutional Login', color: 'bg-blue-100 text-blue-800' },
    'registration-required': { label: 'Registration Required', color: 'bg-yellow-100 text-yellow-800' },
  };

  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Digital Resources</h1>
        <p className="text-gray-600">
          Access our collection of e-resources including e-books, e-journals, research databases, and career services.
        </p>
      </header>

      {Object.entries(grouped).map(([category, items]) => (
        <section key={category} className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">
            {categoryLabels[category] || category}
          </h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            {items.map((resource) => (
              <article
                key={resource?.slug}
                className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-medium text-gray-900">
                    {resource?.title.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                  </h3>
                  {resource?.accessType && (
                    <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${accessTypeBadge[resource.accessType]?.color || 'bg-gray-100 text-gray-800'}`}>
                      {accessTypeBadge[resource.accessType]?.label || resource.accessType}
                    </span>
                  )}
                </div>
                
                {resource?.description && (
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {resource.description}
                  </p>
                )}
                
                {resource?.url && (
                  <Link
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Visit Resource
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                )}
                
                {resource?.featured && (
                  <span className="ml-2 text-xs text-amber-600">★ Featured</span>
                )}
              </article>
            ))}
          </div>
        </section>
      ))}

      {resources.length === 0 && (
        <p className="text-gray-500 text-center py-8">
          No resources available yet. Check back soon!
        </p>
      )}
    </main>
  );
}
