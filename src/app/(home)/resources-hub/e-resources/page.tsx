import Link from 'next/link';
import { ArrowLeft, BookOpen, ExternalLink, Newspaper, Video, FileText } from 'lucide-react';
import { getAllResources } from '@/lib/keystatic';

export const metadata = {
  title: 'E-Resources | Resources Hub | Amal Library',
  description: 'Access e-journals, e-books, newspapers, and multimedia resources',
};

const categoryConfig = {
  'digital-resource': { label: 'E-Journals & E-Books', icon: BookOpen, color: 'bg-blue-50 text-blue-600' },
  'research-database': { label: 'Research Databases', icon: FileText, color: 'bg-purple-50 text-purple-600' },
  'career-service': { label: 'Career Services', icon: FileText, color: 'bg-green-50 text-green-600' },
  'external-tool': { label: 'External Tools', icon: ExternalLink, color: 'bg-orange-50 text-orange-600' },
};

export default async function EResourcesPage() {
  const allResources = await getAllResources();
  const validResources = allResources.filter((r): r is NonNullable<typeof r> => r !== null);
  
  // Filter for digital resources (e-journals, e-books, etc.)
  const eResources = validResources.filter(r => r.category === 'digital-resource');

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-linear-to-br from-[#681e26] to-[#4a1a1f] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <Link 
            href="/resources-hub" 
            className="inline-flex items-center text-white/70 hover:text-white text-sm mb-4 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Resources Hub
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">E-Resources</h1>
          </div>
          <p className="text-white/80 text-lg max-w-2xl">
            Access electronic journals, books, newspapers, and multimedia content.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Categories Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          <a href="#journals" className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:opacity-80 transition">
            E-Journals & E-Books
          </a>
          <a href="#newspapers" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:opacity-80 transition">
            E-Newspapers
          </a>
          <a href="#multimedia" className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:opacity-80 transition">
            Multimedia
          </a>
        </div>

        {/* E-Journals & E-Books Section */}
        <section id="journals" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">E-Journals & E-Books</h2>
          </div>

          {eResources.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {eResources.map((resource) => (
                <ResourceCard key={resource.slug} resource={resource} />
              ))}
            </div>
          ) : (
            <EmptyState message="No e-journals or e-books available yet." />
          )}
        </section>

        {/* E-Newspapers Section */}
        <section id="newspapers" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <Newspaper className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">E-Newspapers</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="https://epaper.thehindu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition text-center"
            >
              <Newspaper className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <div className="font-semibold text-gray-800">The Hindu</div>
              <div className="text-xs text-gray-500">English Daily</div>
            </a>
            <a
              href="https://epaper.mathrubhumi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition text-center"
            >
              <Newspaper className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <div className="font-semibold text-gray-800">Mathrubhumi</div>
              <div className="text-xs text-gray-500">Malayalam Daily</div>
            </a>
            <a
              href="https://epaper.manoramaonline.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition text-center"
            >
              <Newspaper className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <div className="font-semibold text-gray-800">Malayala Manorama</div>
              <div className="text-xs text-gray-500">Malayalam Daily</div>
            </a>
            <a
              href="https://www.indiatoday.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition text-center"
            >
              <Newspaper className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <div className="font-semibold text-gray-800">India Today</div>
              <div className="text-xs text-gray-500">News Magazine</div>
            </a>
          </div>
        </section>

        {/* Multimedia Section */}
        <section id="multimedia">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Video className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Multimedia & Wall Magazine</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-gray-600 mb-4">
              Multimedia resources including video lectures, audio content, and the library wall magazine.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="#"
                className="p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition"
              >
                <Video className="w-6 h-6 text-purple-600 mb-2" />
                <div className="font-medium text-gray-800">Video Lectures</div>
                <div className="text-sm text-gray-500">Educational video content</div>
              </a>
              <a
                href="#"
                className="p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition"
              >
                <FileText className="w-6 h-6 text-purple-600 mb-2" />
                <div className="font-medium text-gray-800">Wall Magazine Archive</div>
                <div className="text-sm text-gray-500">Library wall magazine editions</div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function ResourceCard({ resource }: { resource: NonNullable<Awaited<ReturnType<typeof getAllResources>>[number]> }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition">
      <div className="flex items-start justify-between mb-3">
        <div className="p-2 bg-blue-50 rounded-lg">
          <BookOpen className="w-5 h-5 text-blue-600" />
        </div>
        {resource.featured && (
          <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">
            Featured
          </span>
        )}
      </div>
      <h3 className="font-semibold text-gray-800 mb-2">{resource.title}</h3>
      {resource.description && (
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{resource.description}</p>
      )}
      <div className="flex items-center gap-2 mb-4">
        <span className={`px-2 py-0.5 text-xs rounded ${
          resource.accessType === 'free' 
            ? 'bg-green-100 text-green-700' 
            : resource.accessType === 'institutional-login'
            ? 'bg-blue-100 text-blue-700'
            : 'bg-orange-100 text-orange-700'
        }`}>
          {resource.accessType === 'free' ? 'Free' : resource.accessType === 'institutional-login' ? 'Login Required' : 'Registration'}
        </span>
      </div>
      {resource.url && (
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#681e26] hover:bg-[#551a20] text-white text-sm rounded-lg transition"
        >
          <ExternalLink className="w-4 h-4" />
          Access
        </a>
      )}
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
      <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
      <p className="text-gray-500">{message}</p>
    </div>
  );
}
