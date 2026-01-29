import Link from 'next/link';
import { Building2, ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { getAllDepartments } from '@/lib/keystatic';

export const metadata = {
  title: 'Departmental Libraries | Student Zone | Amal Library',
  description: 'Access department-specific library resources',
};

export default async function DepartmentsPage() {
  const departments = await getAllDepartments();
  const sortedDepts = departments
    .filter((d): d is NonNullable<typeof d> => d !== null)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#4a6741] to-[#3a5234] text-white">
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
              <Building2 className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Departmental Libraries</h1>
          </div>
          <p className="text-white/80 text-lg max-w-2xl">
            Access specialized resources, research materials, and study guides from each academic department.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {sortedDepts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedDepts.map((dept) => (
              <Link
                key={dept.slug}
                href={`/departments/${dept.slug}`}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-[#4a6741]/30 transition-all group"
              >
                <div className="w-14 h-14 bg-[#4a6741]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#4a6741]/20 transition">
                  <BookOpen className="w-7 h-7 text-[#4a6741]" />
                </div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#4a6741] transition">
                  {dept.name}
                </h2>
                {dept.coursesOffered && dept.coursesOffered.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {dept.coursesOffered.slice(0, 3).map((course) => (
                      <span 
                        key={course} 
                        className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {course}
                      </span>
                    ))}
                    {dept.coursesOffered.length > 3 && (
                      <span className="px-2 py-0.5 text-gray-400 text-xs">
                        +{dept.coursesOffered.length - 3} more
                      </span>
                    )}
                  </div>
                )}
                <div className="flex items-center text-[#4a6741] text-sm font-medium">
                  <span>View Resources</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No Departments Yet</h3>
            <p className="text-gray-500">Department information will be added soon.</p>
          </div>
        )}
      </div>
    </main>
  );
}
