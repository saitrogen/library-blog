import Link from 'next/link';
import {
  BookOpen,
  FileText,
  GraduationCap,
  Clock,
  ExternalLink,
  Lock,
  Globe,
  Newspaper,
  Building2,
  ChevronRight,
  Library,
  Search,
} from 'lucide-react';
import {
  getFeaturedResources,
  getFeaturedPosts,
  getAllDepartments,
  getQuestionBankByFilter,
} from '@/lib/keystatic';

export default async function HomePage() {
  const [featuredResources, featuredPosts, departments, questionBankUG, questionBankPG] =
    await Promise.all([
      getFeaturedResources(),
      getFeaturedPosts(),
      getAllDepartments(),
      getQuestionBankByFilter('ug'),
      getQuestionBankByFilter('pg'),
    ]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#681e26] to-[#4a1a1f] text-white py-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Library className="w-10 h-10 text-[#b08d55]" />
            <h1 className="text-4xl md:text-5xl font-bold">Amal College Library</h1>
          </div>
          <p className="text-xl text-white/90 mb-6">Your Gateway to Knowledge</p>
          <div className="flex items-center justify-center gap-2 text-white/80 mb-8">
            <Clock className="w-5 h-5" />
            <span>Open: 8:30 AM - 5:00 PM (Mon-Sat)</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/docs"
              className="px-6 py-3 bg-white text-[#681e26] font-semibold rounded-lg hover:bg-white/90 transition flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              Browse Catalog
            </Link>
            <Link
              href="/question-bank"
              className="px-6 py-3 bg-[#b08d55] text-white font-semibold rounded-lg hover:bg-[#9a7a4a] transition flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Question Papers
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-[#681e26]" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Digital Resources</h2>
            </div>
            <Link
              href="/resources"
              className="text-[#681e26] hover:text-[#4a1a1f] font-medium flex items-center gap-1 text-sm"
            >
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {featuredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredResources.map((resource) => (
                <a
                  key={resource?.slug}
                  href={resource?.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md hover:border-[#681e26]/30 transition group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        resource?.accessType === 'free'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {resource?.accessType === 'free' ? (
                        <span className="flex items-center gap-1">
                          <Globe className="w-3 h-3" /> Free Access
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <Lock className="w-3 h-3" /> Institutional
                        </span>
                      )}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#681e26] transition" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-[#681e26] transition">
                    {resource?.title}
                  </h3>
                  {resource?.description && (
                    <p className="text-sm text-gray-600 line-clamp-2">{resource.description}</p>
                  )}
                  <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                    <span className="px-2 py-0.5 bg-gray-100 rounded">{resource?.category}</span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No featured resources yet.</p>
              <Link href="/admin" className="text-[#681e26] hover:underline text-sm mt-2 inline-block">
                Add resources in admin →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Question Bank Quick Access */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <FileText className="w-7 h-7 text-[#4a6741]" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Question Papers</h2>
            </div>
            <Link
              href="/question-bank"
              className="text-[#4a6741] hover:text-[#3a5331] font-medium flex items-center gap-1 text-sm"
            >
              Browse All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* UG Papers */}
            <div className="bg-gradient-to-br from-[#4a6741]/10 to-[#4a6741]/5 rounded-xl p-6 border border-[#4a6741]/20">
              <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#4a6741]" />
                Undergraduate (UG)
              </h3>
              {questionBankUG.length > 0 ? (
                <ul className="space-y-2 mb-4">
                  {questionBankUG.slice(0, 4).map((entry) => (
                    <li key={entry?.slug}>
                      <a
                        href={entry?.googleDriveLink || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-[#4a6741] text-sm"
                      >
                        <FileText className="w-4 h-4" />
                        {entry?.title}
                        <ExternalLink className="w-3 h-3 ml-auto" />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-sm mb-4">No UG papers available yet.</p>
              )}
              <Link
                href="/question-bank?level=ug"
                className="text-[#4a6741] hover:underline text-sm font-medium"
              >
                View all UG papers →
              </Link>
            </div>

            {/* PG Papers */}
            <div className="bg-gradient-to-br from-[#681e26]/10 to-[#681e26]/5 rounded-xl p-6 border border-[#681e26]/20">
              <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#681e26]" />
                Postgraduate (PG)
              </h3>
              {questionBankPG.length > 0 ? (
                <ul className="space-y-2 mb-4">
                  {questionBankPG.slice(0, 4).map((entry) => (
                    <li key={entry?.slug}>
                      <a
                        href={entry?.googleDriveLink || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-[#681e26] text-sm"
                      >
                        <FileText className="w-4 h-4" />
                        {entry?.title}
                        <ExternalLink className="w-3 h-3 ml-auto" />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-sm mb-4">No PG papers available yet.</p>
              )}
              <Link
                href="/question-bank?level=pg"
                className="text-[#681e26] hover:underline text-sm font-medium"
              >
                View all PG papers →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates / Latest News */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Newspaper className="w-7 h-7 text-[#b08d55]" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Latest News</h2>
            </div>
            <Link
              href="/posts"
              className="text-[#b08d55] hover:text-[#9a7a4a] font-medium flex items-center gap-1 text-sm"
            >
              All Updates <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {featuredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.slice(0, 3).map((post) => (
                <Link
                  key={post?.slug}
                  href={`/posts/${post?.slug}`}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition group"
                >
                  {post?.featuredImage && (
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-[#681e26] transition line-clamp-2">
                      {post?.title}
                    </h3>
                    {post?.summary && (
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">{post.summary}</p>
                    )}
                    <div className="text-xs text-gray-400">
                      {post?.publishDate &&
                        new Date(post.publishDate).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <Newspaper className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No featured posts yet.</p>
              <Link href="/admin" className="text-[#681e26] hover:underline text-sm mt-2 inline-block">
                Add posts in admin →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Building2 className="w-7 h-7 text-[#681e26]" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Academic Departments</h2>
            </div>
            <Link
              href="/departments"
              className="text-[#681e26] hover:text-[#4a1a1f] font-medium flex items-center gap-1 text-sm"
            >
              All Departments <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {departments.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {departments.map((dept) => (
                <Link
                  key={dept?.slug}
                  href={`/departments/${dept?.slug}`}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-5 border border-gray-200 hover:border-[#681e26]/30 hover:shadow-md transition group text-center"
                >
                  <div className="w-12 h-12 bg-[#681e26]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#681e26]/20 transition">
                    <GraduationCap className="w-6 h-6 text-[#681e26]" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm group-hover:text-[#681e26] transition">
                    {dept?.name}
                  </h3>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-8 text-center">
              <Building2 className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No departments added yet.</p>
              <Link href="/admin" className="text-[#681e26] hover:underline text-sm mt-2 inline-block">
                Add departments in admin →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Footer Quick Links */}
      <section className="py-8 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="/resources" className="hover:text-[#b08d55] transition flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Resources
            </Link>
            <Link href="/question-bank" className="hover:text-[#b08d55] transition flex items-center gap-2">
              <FileText className="w-4 h-4" /> Question Bank
            </Link>
            <Link href="/departments" className="hover:text-[#b08d55] transition flex items-center gap-2">
              <Building2 className="w-4 h-4" /> Departments
            </Link>
            <Link href="/posts" className="hover:text-[#b08d55] transition flex items-center gap-2">
              <Newspaper className="w-4 h-4" /> News & Updates
            </Link>
            <Link href="/docs" className="hover:text-[#b08d55] transition flex items-center gap-2">
              <Search className="w-4 h-4" /> Documentation
            </Link>
            <Link
              href="/admin"
              className="hover:text-[#b08d55] transition flex items-center gap-2 opacity-60"
            >
              Admin
            </Link>
          </div>
          <div className="text-center text-gray-500 text-xs mt-6">
            © {new Date().getFullYear()} Amal College Library. All rights reserved.
          </div>
        </div>
      </section>
    </main>
  );
}
