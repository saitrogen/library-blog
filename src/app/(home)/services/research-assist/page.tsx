import Link from 'next/link';
import { ArrowLeft, Search, ExternalLink, Library, BookOpen, Database, Video, Link as LinkIcon } from 'lucide-react';
import { getAllResearchAssist } from '@/lib/keystatic';

export const metadata = {
  title: 'Research Assistance | Services | Amal Library',
  description: 'Access NDL, E-PG Pathshala, and other research tools',
};

const iconMap = {
  library: Library,
  book: BookOpen,
  search: Search,
  database: Database,
  video: Video,
  link: LinkIcon,
};

export default async function ResearchAssistPage() {
  const allResources = await getAllResearchAssist();
  const validResources = allResources.filter((r): r is NonNullable<typeof r> => r !== null);

  const featured = validResources.filter(r => r.featured);
  const others = validResources.filter(r => !r.featured);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-linear-to-br from-[#4a6741] to-[#3a5234] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <Link 
            href="/services" 
            className="inline-flex items-center text-white/70 hover:text-white text-sm mb-4 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Services
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Search className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Research Assistance</h1>
          </div>
          <p className="text-white/80 text-lg max-w-2xl">
            Access digital libraries, e-learning platforms, and research databases to support your academic work.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {validResources.length > 0 ? (
          <>
            {/* Featured Resources */}
            {featured.length > 0 && (
              <section className="mb-10">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Featured Resources</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {featured.map((resource) => (
                    <ResourceCard key={resource.slug} resource={resource} />
                  ))}
                </div>
              </section>
            )}

            {/* Other Resources */}
            {others.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4">All Resources</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {others.map((resource) => (
                    <ResourceCard key={resource.slug} resource={resource} />
                  ))}
                </div>
              </section>
            )}
          </>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Coming Soon</h3>
            <p className="text-gray-500">Research assistance resources will be added soon.</p>
          </div>
        )}

        {/* Quick Links */}
        <div className="mt-12 bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            <a
              href="https://ndl.iitkgp.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-50 rounded-lg hover:bg-[#4a6741]/10 transition text-center"
            >
              <Library className="w-6 h-6 text-[#4a6741] mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-700">NDL India</div>
            </a>
            <a
              href="https://epgp.inflibnet.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-50 rounded-lg hover:bg-[#4a6741]/10 transition text-center"
            >
              <BookOpen className="w-6 h-6 text-[#4a6741] mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-700">E-PG Pathshala</div>
            </a>
            <a
              href="https://www.swayam.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-50 rounded-lg hover:bg-[#4a6741]/10 transition text-center"
            >
              <Video className="w-6 h-6 text-[#4a6741] mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-700">SWAYAM</div>
            </a>
            <a
              href="https://shodhganga.inflibnet.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-50 rounded-lg hover:bg-[#4a6741]/10 transition text-center"
            >
              <Database className="w-6 h-6 text-[#4a6741] mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-700">Shodhganga</div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

function ResourceCard({ resource }: { resource: NonNullable<Awaited<ReturnType<typeof getAllResearchAssist>>[number]> }) {
  const Icon = iconMap[resource.icon as keyof typeof iconMap] || LinkIcon;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition">
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 bg-green-50 rounded-lg">
          <Icon className="w-5 h-5 text-green-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{resource.title}</h3>
        </div>
        {resource.featured && (
          <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">
            Featured
          </span>
        )}
      </div>
      {resource.description && (
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{resource.description}</p>
      )}
      {resource.url && (
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#4a6741] hover:bg-[#3a5234] text-white text-sm rounded-lg transition"
        >
          <ExternalLink className="w-4 h-4" />
          Access
        </a>
      )}
    </div>
  );
}
