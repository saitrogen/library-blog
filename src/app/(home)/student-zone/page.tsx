import Link from 'next/link';
import { FileText, Building2, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Student Zone | Amal Library',
  description: 'Access question banks, departmental libraries, and career resources',
};

const sections = [
  {
    title: 'Question Banks',
    description: 'Previous year question papers for UG and PG courses',
    icon: FileText,
    href: '/student-zone/question-banks',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Departmental Libraries',
    description: 'Access resources from English, Commerce, Economics, and more',
    icon: Building2,
    href: '/student-zone/departments',
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Career & Exams',
    description: 'Resources for NTA-NET, SET, K-TET, PSC Kerala, and Civil Services',
    icon: Briefcase,
    href: '/student-zone/career-exams',
    color: 'bg-amber-50 text-amber-600',
  },
];

export default function StudentZonePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-linear-to-br from-[#681e26] to-[#4a1a1f] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Student Zone</h1>
          </div>
          <p className="text-white/80 text-lg max-w-2xl">
            Your one-stop hub for academic resources, question papers, and career preparation materials.
          </p>
        </div>
      </div>

      {/* Sections Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.href}
                href={section.href}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-[#681e26]/30 transition-all group"
              >
                <div className={`w-14 h-14 ${section.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#681e26] transition">
                  {section.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{section.description}</p>
                <div className="flex items-center text-[#681e26] text-sm font-medium">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quick Access */}
        <div className="mt-12 bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Access</h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/student-zone/question-banks#ug"
              className="px-4 py-2 bg-gray-100 hover:bg-[#681e26] hover:text-white rounded-lg text-sm transition"
            >
              UG Question Papers
            </Link>
            <Link
              href="/student-zone/question-banks#pg"
              className="px-4 py-2 bg-gray-100 hover:bg-[#681e26] hover:text-white rounded-lg text-sm transition"
            >
              PG Question Papers
            </Link>
            <Link
              href="/student-zone/career-exams#net"
              className="px-4 py-2 bg-gray-100 hover:bg-[#681e26] hover:text-white rounded-lg text-sm transition"
            >
              NTA-NET Resources
            </Link>
            <Link
              href="/student-zone/career-exams#psc"
              className="px-4 py-2 bg-gray-100 hover:bg-[#681e26] hover:text-white rounded-lg text-sm transition"
            >
              PSC Kerala
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
