import Link from 'next/link';
import { ArrowLeft, Briefcase, ExternalLink, FileText, Award, BookOpen } from 'lucide-react';
import { getAllCareerExams } from '@/lib/keystatic';

export const metadata = {
  title: 'Career & Exams | Student Zone | Amal Library',
  description: 'Resources for competitive exams including NTA-NET, SET, K-TET, PSC Kerala, and Civil Services',
};

const categoryConfig = {
  'nta-net': { label: 'NTA-NET', color: 'bg-blue-100 text-blue-700', icon: Award },
  'set': { label: 'SET', color: 'bg-green-100 text-green-700', icon: Award },
  'k-tet': { label: 'K-TET', color: 'bg-purple-100 text-purple-700', icon: BookOpen },
  'psc-kerala': { label: 'PSC Kerala', color: 'bg-orange-100 text-orange-700', icon: FileText },
  'civil-services': { label: 'Civil Services', color: 'bg-red-100 text-red-700', icon: Briefcase },
  'other': { label: 'Other', color: 'bg-gray-100 text-gray-700', icon: FileText },
};

export default async function CareerExamsPage() {
  const allExams = await getAllCareerExams();

  // Group by category
  const grouped = allExams.reduce((acc, entry) => {
    const cat = entry?.category || 'other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(entry);
    return acc;
  }, {} as Record<string, typeof allExams>);

  const categories = ['nta-net', 'set', 'k-tet', 'psc-kerala', 'civil-services', 'other'];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#b08d55] to-[#8a6d3f] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <Link 
            href="/student-zone" 
            className="inline-flex items-center text-white/70 hover:text-white text-sm mb-4 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Student Zone
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Briefcase className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Career & Exams</h1>
          </div>
          <p className="text-white/80 text-lg max-w-2xl">
            Prepare for competitive exams with study materials, previous papers, mock tests, and official resources.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => {
            const config = categoryConfig[cat as keyof typeof categoryConfig];
            const count = grouped[cat]?.length || 0;
            if (count === 0) return null;
            return (
              <a
                key={cat}
                href={`#${cat}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${config.color} hover:opacity-80 transition`}
              >
                {config.label} ({count})
              </a>
            );
          })}
        </div>

        {/* Category Sections */}
        {categories.map((cat) => {
          const items = grouped[cat];
          if (!items || items.length === 0) return null;
          
          const config = categoryConfig[cat as keyof typeof categoryConfig];
          const Icon = config.icon;

          return (
            <section key={cat} id={cat} className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg ${config.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{config.label}</h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item) => (
                  <div
                    key={item?.slug}
                    className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded ${config.color}`}>
                        {item?.resourceType?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                      {item?.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{item?.title}</h3>
                    {item?.description && (
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                    )}
                    {item?.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#681e26] hover:bg-[#551a20] text-white text-sm rounded-lg transition"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Access Resource
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* Empty State */}
        {allExams.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Coming Soon</h3>
            <p className="text-gray-500">Career and exam resources will be added soon. Check back later!</p>
          </div>
        )}
      </div>
    </main>
  );
}
