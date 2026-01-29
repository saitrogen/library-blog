import Link from 'next/link';
import { FileDown, Search, Phone, Settings, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Services & Downloads | Amal Library',
  description: 'Library services, downloadable forms, and research assistance',
};

const sections = [
  {
    title: 'Forms & Downloads',
    description: 'Membership forms, book requests, and other downloadable documents',
    icon: FileDown,
    href: '/services/forms',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Research Assistance',
    description: 'Access NDL, E-PG Pathshala, Amal VLE, and other research tools',
    icon: Search,
    href: '/services/research-assist',
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Ask a Librarian',
    description: 'Get help with research, resources, or library services',
    icon: Phone,
    href: '/services/contact',
    color: 'bg-purple-50 text-purple-600',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-linear-to-br from-[#4a6741] to-[#3a5234] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Settings className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Services & Downloads</h1>
          </div>
          <p className="text-white/80 text-lg max-w-2xl">
            Access library forms, research tools, and get help from our librarians.
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
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-[#4a6741]/30 transition-all group"
              >
                <div className={`w-14 h-14 ${section.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#4a6741] transition">
                  {section.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{section.description}</p>
                <div className="flex items-center text-[#4a6741] text-sm font-medium">
                  <span>Access</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Library Hours Card */}
        <div className="mt-12 bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Library Hours</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Monday - Friday</div>
              <div className="font-semibold text-gray-800">8:30 AM - 5:00 PM</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Saturday</div>
              <div className="font-semibold text-gray-800">9:00 AM - 1:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
