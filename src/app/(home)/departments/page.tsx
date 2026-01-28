import { getAllDepartments } from '@/lib/keystatic';
import Link from 'next/link';

export const metadata = {
  title: 'Departments | Amal College Library',
  description: 'Explore academic departments at Amal College of Advanced Studies.',
};

export default async function DepartmentsPage() {
  const departments = await getAllDepartments();

  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Academic Departments</h1>
        <p className="text-gray-600">
          Explore the academic departments at Amal College of Advanced Studies.
        </p>
      </header>

      {departments.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept) => (
            <Link
              key={dept?.slug}
              href={`/departments/${dept?.slug}`}
              className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow group"
            >
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                {dept?.name.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
              </h2>
              
              {dept?.coursesOffered && dept.coursesOffered.length > 0 && (
                <div className="mb-3">
                  <p className="text-sm text-gray-500 mb-1">Courses Offered:</p>
                  <div className="flex flex-wrap gap-1">
                    {dept.coursesOffered.map((course, i) => (
                      <span key={i} className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <span className="text-sm text-blue-600 group-hover:text-blue-800 font-medium">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center py-8">
          Department information coming soon.
        </p>
      )}
    </main>
  );
}
