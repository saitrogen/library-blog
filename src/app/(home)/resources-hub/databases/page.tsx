import Link from 'next/link';
import { ArrowLeft, Database, ExternalLink, BookOpen, Search } from 'lucide-react';
import { getAllResources } from '@/lib/keystatic';

export const metadata = {
  title: 'Research Databases | Resources Hub | Amal Library',
  description: 'Access INFLIBNET N-LIST, Springer, JSTOR, Elsevier, and other research databases',
};

const databaseLinks = [
  {
    name: 'INFLIBNET N-LIST',
    description: 'Access e-resources from N-LIST consortium including e-journals and e-books',
    url: 'https://nlist.inflibnet.ac.in/',
    color: 'bg-blue-500',
    tutorial: true,
  },
  {
    name: 'Springer Nature',
    description: 'Access journals, books, and protocols from Springer Nature publications',
    url: 'https://link.springer.com/',
    color: 'bg-yellow-500',
  },
  {
    name: 'JSTOR',
    description: 'Digital library of academic journals, books, and primary sources',
    url: 'https://www.jstor.org/',
    color: 'bg-red-500',
  },
  {
    name: 'Elsevier ScienceDirect',
    description: 'Leading full-text scientific database offering journal articles and book chapters',
    url: 'https://www.sciencedirect.com/',
    color: 'bg-orange-500',
  },
  {
    name: 'Oxford Academic',
    description: 'Journals and online books from Oxford University Press',
    url: 'https://academic.oup.com/',
    color: 'bg-blue-700',
  },
  {
    name: 'IEEE Xplore',
    description: 'Research database for engineering, computer science, and electronics',
    url: 'https://ieeexplore.ieee.org/',
    color: 'bg-blue-600',
  },
  {
    name: 'PubMed',
    description: 'Free database of biomedical and life sciences literature',
    url: 'https://pubmed.ncbi.nlm.nih.gov/',
    color: 'bg-green-600',
  },
  {
    name: 'Google Scholar',
    description: 'Freely accessible web search engine for scholarly literature',
    url: 'https://scholar.google.com/',
    color: 'bg-blue-400',
  },
];

export default async function DatabasesPage() {
  const allResources = await getAllResources();
  const validResources = allResources.filter((r): r is NonNullable<typeof r> => r !== null);
  
  // Filter for research databases from Keystatic
  const databases = validResources.filter(r => r.category === 'research-database');

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
              <Database className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Research Databases</h1>
          </div>
          <p className="text-white/80 text-lg max-w-2xl">
            Access scholarly journals, articles, and research materials from leading academic databases.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* N-LIST Featured Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-3">
                  Institutional Access
                </div>
                <h2 className="text-2xl font-bold mb-2">INFLIBNET N-LIST</h2>
                <p className="text-white/80 max-w-xl">
                  Access 6,000+ e-journals and 1,99,500+ e-books through the National Library and Information Services Infrastructure for Scholarly Content.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://nlist.inflibnet.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition"
                >
                  <ExternalLink className="w-5 h-5" />
                  Access N-LIST
                </a>
                <a
                  href="#tutorials"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition"
                >
                  <BookOpen className="w-5 h-5" />
                  View Tutorials
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* All Databases Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">All Research Databases</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {databaseLinks.map((db) => (
              <a
                key={db.name}
                href={db.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg transition group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${db.color} mt-1`} />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 group-hover:text-[#681e26] transition">
                      {db.name}
                    </h3>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#681e26] transition" />
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">{db.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* CMS Databases */}
        {databases.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Resources</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {databases.map((db) => (
                <div
                  key={db.slug}
                  className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <Database className="w-5 h-5 text-purple-600" />
                    </div>
                    {db.featured && (
                      <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{db.title}</h3>
                  {db.description && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{db.description}</p>
                  )}
                  {db.url && (
                    <a
                      href={db.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#681e26] hover:bg-[#551a20] text-white text-sm rounded-lg transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Access
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tutorials Section */}
        <section id="tutorials">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <BookOpen className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">How to Access N-LIST</h3>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="font-medium text-gray-800 mb-1">Step 1: Registration</div>
                <p className="text-sm text-gray-600">
                  Visit N-LIST portal and register using your institutional email (@amaljyothi.ac.in)
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="font-medium text-gray-800 mb-1">Step 2: Activation</div>
                <p className="text-sm text-gray-600">
                  Wait for account activation by the library administrator (usually within 24-48 hours)
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="font-medium text-gray-800 mb-1">Step 3: Access Resources</div>
                <p className="text-sm text-gray-600">
                  Login and access e-journals, e-books, and other resources from the N-LIST consortium
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
