import Link from 'next/link';
import {
  BookOpen,
  FileText,
  GraduationCap,
  Clock,
  Newspaper,
  Database,
  Briefcase,
  Settings,
  Search,
  Library,
  ArrowRight,
  Calendar,
  Bell,
} from 'lucide-react';
import { getAllPosts } from '@/lib/keystatic';

export default async function HomePage() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 4);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-[#681e26] to-[#4a1a1f] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="lg:max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <Library className="w-10 h-10 text-[#b08d55]" />
                <h1 className="text-3xl md:text-4xl font-bold">Amal Library</h1>
              </div>
              <p className="text-lg text-white/90 mb-6">
                Your gateway to knowledge, research resources, and academic excellence.
              </p>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg w-fit">
                <Clock className="w-5 h-5 text-[#b08d55]" />
                <span>Open: 8:30 AM - 5:00 PM (Mon-Fri)</span>
              </div>
            </div>

            {/* Quick Search */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 lg:w-96">
              <h2 className="text-lg font-semibold mb-4">Quick Search</h2>
              <form className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search catalog..."
                    className="w-full pl-10 pr-4 py-3 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b08d55]"
                  />
                </div>
                <a
                  href="#"
                  className="block w-full px-4 py-3 bg-[#b08d55] hover:bg-[#9a7d4a] text-white font-medium rounded-lg text-center transition"
                >
                  Search Web OPAC
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Main Navigation Cards */}
      <section className="max-w-6xl mx-auto px-4 -mt-8">
        <div className="grid md:grid-cols-3 gap-4">
          <NavCard
            href="/resources-hub"
            icon={Database}
            title="Resources Hub"
            description="E-Journals, E-Books, and Research Databases"
            color="bg-blue-500"
          />
          <NavCard
            href="/student-zone"
            icon={GraduationCap}
            title="Student Zone"
            description="Question Banks, Departments, Career Resources"
            color="bg-green-500"
          />
          <NavCard
            href="/services"
            icon={Settings}
            title="Services"
            description="Forms, Research Assist, Ask a Librarian"
            color="bg-purple-500"
          />
        </div>
      </section>

      {/* News Feed Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#681e26]/10 rounded-lg">
              <Bell className="w-5 h-5 text-[#681e26]" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">News & Announcements</h2>
          </div>
          <Link
            href="/posts"
            className="flex items-center text-[#681e26] hover:underline text-sm font-medium"
          >
            View All
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {recentPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentPosts.map((post) => (
              <Link
                key={post?.slug}
                href={`/posts/${post?.slug}`}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition group"
              >
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <Calendar className="w-3 h-3" />
                  {post?.publishDate &&
                    new Date(post.publishDate).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-[#681e26] transition line-clamp-2 mb-2">
                  {post?.title}
                </h3>
                {post?.summary && (
                  <p className="text-sm text-gray-600 line-clamp-2">{post.summary}</p>
                )}
                <span className="inline-block mt-3 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded capitalize">
                  {post?.type?.replace('-', ' ')}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 text-center">
            <Newspaper className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No recent announcements</p>
          </div>
        )}
      </section>

      {/* Quick Links Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 gap-6">
          {/* E-Resources Quick Access */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Popular E-Resources</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <QuickLink href="https://nlist.inflibnet.ac.in/" label="N-LIST" sublabel="INFLIBNET" />
              <QuickLink href="https://link.springer.com/" label="Springer" sublabel="Journals" />
              <QuickLink href="https://www.jstor.org/" label="JSTOR" sublabel="Academic" />
              <QuickLink href="https://www.sciencedirect.com/" label="Elsevier" sublabel="ScienceDirect" />
            </div>
            <Link
              href="/resources-hub/databases"
              className="mt-4 inline-flex items-center text-sm text-[#681e26] hover:underline"
            >
              View all databases
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Student Resources */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <FileText className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Student Resources</h3>
            </div>
            <div className="space-y-2">
              <Link
                href="/student-zone/question-banks"
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <span className="font-medium text-gray-700">Question Banks</span>
                <span className="text-xs text-gray-500">UG & PG Papers</span>
              </Link>
              <Link
                href="/student-zone/career-exams"
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <span className="font-medium text-gray-700">Career & Exams</span>
                <span className="text-xs text-gray-500">NET, SET, PSC</span>
              </Link>
              <Link
                href="/student-zone/departments"
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <span className="font-medium text-gray-700">Departments</span>
                <span className="text-xs text-gray-500">Dept Libraries</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Library Info Footer */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Library Hours</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Monday - Friday: 8:30 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Contact</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Phone: +91 494 265 6440</p>
                <p>Email: library@amaljyothi.ac.in</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Quick Links</h4>
              <div className="space-y-1 text-sm">
                <Link href="/services/forms" className="block text-[#681e26] hover:underline">
                  Membership Forms
                </Link>
                <Link href="/services/contact" className="block text-[#681e26] hover:underline">
                  Ask a Librarian
                </Link>
                <Link href="/resources-hub" className="block text-[#681e26] hover:underline">
                  E-Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function NavCard({
  href,
  icon: Icon,
  title,
  description,
  color,
}: {
  href: string;
  icon: typeof Database;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <Link
      href={href}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition group"
    >
      <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-[#681e26] transition">
        {title}
      </h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Link>
  );
}

function QuickLink({ href, label, sublabel }: { href: string; label: string; sublabel: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition text-center"
    >
      <div className="font-medium text-gray-800">{label}</div>
      <div className="text-xs text-gray-500">{sublabel}</div>
    </a>
  );
}
