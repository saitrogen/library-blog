import { getAllQuestionBankEntries } from '@/lib/keystatic';
import Link from 'next/link';

export const metadata = {
  title: 'Question Bank | Amal College Library',
  description: 'Access previous year question papers, model papers, and practice sets for UG and PG students.',
};

export default async function QuestionBankPage() {
  const entries = await getAllQuestionBankEntries();
  
  // Group by level
  const ugEntries = entries.filter((e) => e?.level === 'ug');
  const pgEntries = entries.filter((e) => e?.level === 'pg');

  const examTypeBadge: Record<string, { label: string; color: string }> = {
    'university-exam': { label: 'University Exam', color: 'bg-purple-100 text-purple-800' },
    'model-papers': { label: 'Model Papers', color: 'bg-blue-100 text-blue-800' },
    'previous-year': { label: 'Previous Year', color: 'bg-green-100 text-green-800' },
    'practice-set': { label: 'Practice Set', color: 'bg-yellow-100 text-yellow-800' },
  };

  const departmentLabels: Record<string, string> = {
    'english': 'English',
    'commerce-management': 'Commerce & Management',
    'economics': 'Economics',
    'psychology': 'Psychology',
    'computer-science': 'Computer Science',
    'hotel-tourism': 'Hotel & Tourism',
    'all': 'All Departments',
  };

  const renderEntryCard = (entry: (typeof entries)[0]) => (
    <article
      key={entry?.slug}
      className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-medium text-gray-900">
          Semester {entry?.semester} - {departmentLabels[entry?.department || ''] || entry?.department}
        </h3>
        {entry?.examType && (
          <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${examTypeBadge[entry.examType]?.color || 'bg-gray-100 text-gray-800'}`}>
            {examTypeBadge[entry.examType]?.label || entry.examType}
          </span>
        )}
      </div>
      
      {entry?.academicYear && (
        <p className="text-sm text-gray-500 mb-2">Academic Year: {entry.academicYear}</p>
      )}
      
      {entry?.notes && (
        <p className="text-sm text-gray-600 mb-3">{entry.notes}</p>
      )}
      
      {entry?.googleDriveLink && (
        <Link
          href={entry.googleDriveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
          </svg>
          Open in Google Drive
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>
      )}
    </article>
  );

  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Question Bank</h1>
        <p className="text-gray-600">
          Access previous year question papers, model papers, and practice sets organized by level and semester.
        </p>
      </header>

      {/* UG Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b flex items-center">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-2">UG</span>
          Undergraduate Papers
        </h2>
        
        {ugEntries.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {ugEntries.map(renderEntryCard)}
          </div>
        ) : (
          <p className="text-gray-500 py-4">No UG papers available yet.</p>
        )}
      </section>

      {/* PG Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b flex items-center">
          <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded mr-2">PG</span>
          Postgraduate Papers
        </h2>
        
        {pgEntries.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {pgEntries.map(renderEntryCard)}
          </div>
        ) : (
          <p className="text-gray-500 py-4">No PG papers available yet.</p>
        )}
      </section>

      {entries.length === 0 && (
        <p className="text-gray-500 text-center py-8">
          Question bank is being updated. Check back soon!
        </p>
      )}
    </main>
  );
}
