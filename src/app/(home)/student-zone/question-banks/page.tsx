import Link from 'next/link';
import { FileText, Download, ArrowLeft, GraduationCap, BookOpen } from 'lucide-react';
import { getAllQuestionBankEntries } from '@/lib/keystatic';

export const metadata = {
  title: 'Question Banks | Student Zone | Amal Library',
  description: 'Download previous year question papers for UG and PG courses',
};

export default async function QuestionBanksPage() {
  const allEntries = await getAllQuestionBankEntries();
  
  const validEntries = allEntries.filter((e): e is NonNullable<typeof e> => e !== null);
  const ugEntries = validEntries.filter(e => e.level === 'ug');
  const pgEntries = validEntries.filter(e => e.level === 'pg');

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-linear-to-br from-[#681e26] to-[#4a1a1f] text-white">
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
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Question Banks</h1>
          </div>
          <p className="text-white/80 text-lg max-w-2xl">
            Previous year question papers organized by semester for UG and PG courses.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* UG Section */}
        <section id="ug" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <GraduationCap className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Undergraduate (UG)</h2>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
              {ugEntries.length} Collections
            </span>
          </div>
          
          {ugEntries.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ugEntries.map((entry) => (
                <QuestionCard key={entry.slug} entry={entry} />
              ))}
            </div>
          ) : (
            <EmptyState message="No UG question papers available yet." />
          )}
        </section>

        {/* PG Section */}
        <section id="pg" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 rounded-lg">
              <BookOpen className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Postgraduate (PG)</h2>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
              {pgEntries.length} Collections
            </span>
          </div>
          
          {pgEntries.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pgEntries.map((entry) => (
                <QuestionCard key={entry.slug} entry={entry} variant="pg" />
              ))}
            </div>
          ) : (
            <EmptyState message="No PG question papers available yet." />
          )}
        </section>
      </div>
    </main>
  );
}

type QuestionEntry = NonNullable<Awaited<ReturnType<typeof getAllQuestionBankEntries>>[number]>;

function QuestionCard({ 
  entry, 
  variant = 'ug' 
}: { 
  entry: QuestionEntry;
  variant?: 'ug' | 'pg';
}) {
  const colors = variant === 'ug' 
    ? { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' }
    : { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100' };

  return (
    <div className={`bg-white rounded-xl border ${colors.border} p-5 hover:shadow-md transition`}>
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2 ${colors.bg} rounded-lg`}>
          <FileText className={`w-5 h-5 ${colors.text}`} />
        </div>
        {entry.semester && (
          <span className={`px-2 py-1 ${colors.bg} ${colors.text} text-xs font-medium rounded`}>
            Sem {entry.semester}
          </span>
        )}
      </div>
      <h3 className="font-semibold text-gray-800 mb-2">{entry.title}</h3>
      {entry.notes && (
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{entry.notes}</p>
      )}
      <div className="flex gap-2">
        {entry.googleDriveLink && (
          <a
            href={entry.googleDriveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#681e26] hover:bg-[#551a20] text-white text-sm rounded-lg transition"
          >
            <Download className="w-4 h-4" />
            Download
          </a>
        )}
      </div>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
      <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
      <p className="text-gray-500">{message}</p>
    </div>
  );
}
