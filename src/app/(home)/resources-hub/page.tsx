import Link from 'next/link';
import { Database, BookOpen, Layers, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Resources Hub | Amal Library',
  description: 'Access e-resources, journals, books, and research databases',
};

const sections = [
  {
    title: 'E-Resources',
    description: 'E-Journals, E-Books, Newspapers, Multimedia & Wall Magazine',
    icon: BookOpen,
    href: '/resources-hub/e-resources',
    color: 'bg-blue-50 text-blue-600',
    items: ['E-Journals', 'E-Books', 'E-Newspapers', 'Multimedia', 'Wall Magazine'],
  },
  {
    title: 'Research Databases',
    description: 'INFLIBNET N-LIST, Springer, JSTOR, Elsevier, Oxford Academic',
    icon: Database,
    href: '/resources-hub/databases',
    color: 'bg-purple-50 text-purple-600',
    items: ['INFLIBNET N-LIST', 'Springer', 'JSTOR', 'Elsevier', 'Oxford Academic'],
  },
];

export default function ResourcesHubPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-linear-to-br from-[#681e26] to-[#4a1a1f] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Layers className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Resources Hub</h1>
          </div>
          <p className="text-white/80 text-lg max-w-2xl">
            Your gateway to digital resources, research databases, and academic materials.
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.href}
                href={section.href}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-[#681e26]/30 transition-all group"
              >
                <div className={`w-16 h-16 ${section.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-[#681e26] transition">
                  {section.title}
                </h2>
                <p className="text-gray-600 mb-4">{section.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {section.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-[#681e26] text-sm font-medium">
                  <span>Browse Resources</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quick Access */}
        <div className="mt-12 bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Resources</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            <a
              href="https://nlist.inflibnet.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-50 rounded-lg hover:bg-[#681e26]/10 transition text-center"
            >
              <div className="font-semibold text-gray-800 mb-1">N-LIST</div>
              <div className="text-xs text-gray-500">INFLIBNET Consortium</div>
            </a>
            <a
              href="https://link.springer.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-50 rounded-lg hover:bg-[#681e26]/10 transition text-center"
            >
              <div className="font-semibold text-gray-800 mb-1">Springer</div>
              <div className="text-xs text-gray-500">Journals & Books</div>
            </a>
            <a
              href="https://www.jstor.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-50 rounded-lg hover:bg-[#681e26]/10 transition text-center"
            >
              <div className="font-semibold text-gray-800 mb-1">JSTOR</div>
              <div className="text-xs text-gray-500">Academic Journals</div>
            </a>
            <a
              href="https://www.sciencedirect.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-50 rounded-lg hover:bg-[#681e26]/10 transition text-center"
            >
              <div className="font-semibold text-gray-800 mb-1">Elsevier</div>
              <div className="text-xs text-gray-500">ScienceDirect</div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
