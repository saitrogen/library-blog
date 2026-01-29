import Link from 'next/link';
import { ArrowLeft, FileDown, Download, FileText, File } from 'lucide-react';
import { getAllForms } from '@/lib/keystatic';

export const metadata = {
  title: 'Forms & Downloads | Services | Amal Library',
  description: 'Download membership forms, book request forms, and other library documents',
};

const categoryLabels: Record<string, string> = {
  'student-membership': 'Student Membership',
  'staff-membership': 'Staff Membership',
  'book-request': 'Book Request',
  'inter-library-loan': 'Inter-Library Loan',
  'other': 'Other Forms',
};

const fileTypeIcons: Record<string, typeof FileText> = {
  'pdf': FileText,
  'docx': File,
  'xlsx': File,
  'online': FileDown,
};

export default async function FormsPage() {
  const allForms = await getAllForms();
  const validForms = allForms.filter((f): f is NonNullable<typeof f> => f !== null);

  // Group by category
  const grouped = validForms.reduce((acc, form) => {
    const cat = form.category || 'other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(form);
    return acc;
  }, {} as Record<string, typeof validForms>);

  const categories = ['student-membership', 'staff-membership', 'book-request', 'inter-library-loan', 'other'];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-linear-to-br from-[#4a6741] to-[#3a5234] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <Link 
            href="/services" 
            className="inline-flex items-center text-white/70 hover:text-white text-sm mb-4 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Services
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <FileDown className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Forms & Downloads</h1>
          </div>
          <p className="text-white/80 text-lg max-w-2xl">
            Download membership forms, book request forms, and other library documents.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {validForms.length > 0 ? (
          <>
            {categories.map((cat) => {
              const forms = grouped[cat];
              if (!forms || forms.length === 0) return null;

              return (
                <section key={cat} className="mb-10">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">{categoryLabels[cat]}</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {forms.map((form) => {
                      const Icon = fileTypeIcons[form.fileType || 'pdf'] || FileText;
                      return (
                        <div
                          key={form.slug}
                          className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition"
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <div className="p-2 bg-blue-50 rounded-lg">
                              <Icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-800">{form.title}</h3>
                              <span className="text-xs text-gray-400 uppercase">{form.fileType}</span>
                            </div>
                          </div>
                          {form.description && (
                            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{form.description}</p>
                          )}
                          {form.fileUrl && (
                            <a
                              href={form.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-[#4a6741] hover:bg-[#3a5234] text-white text-sm rounded-lg transition"
                            >
                              <Download className="w-4 h-4" />
                              Download
                            </a>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <FileDown className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No Forms Available</h3>
            <p className="text-gray-500">Forms and documents will be added soon.</p>
          </div>
        )}
      </div>
    </main>
  );
}
