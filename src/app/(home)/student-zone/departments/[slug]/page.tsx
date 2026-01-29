import { getDepartment, getAllDepartments } from '@/lib/keystatic';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const departments = await getAllDepartments();
  return departments.map((dept) => ({ slug: dept?.slug })).filter(Boolean);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const department = await getDepartment(slug);
  
  if (!department) {
    return { title: 'Department Not Found' };
  }
  
  return {
    title: `${department.name.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())} | Amal College Library`,
    description: `Explore the ${department.name} department at Amal College of Advanced Studies.`,
  };
}

export default async function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const department = await getDepartment(slug);
  
  if (!department) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <Link href="/student-zone/departments" className="text-blue-600 hover:text-blue-800">
          ← Back to Departments
        </Link>
      </nav>

      <article>
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {department.name.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
          </h1>
          
          {department.coursesOffered && department.coursesOffered.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Courses:</span>
              <div className="flex flex-wrap gap-1">
                {department.coursesOffered.map((course, i) => (
                  <span key={i} className="text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Content - using next-mdx-remote for proper MDX rendering */}
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600">
          <MDXRemote source={await department.description()} />
        </div>
      </article>
    </main>
  );
}
