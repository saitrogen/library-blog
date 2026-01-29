import Link from 'next/link';
import { ArrowLeft, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Ask a Librarian | Services | Amal Library',
  description: 'Contact the library for research help and support',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-linear-to-br from-[#681e26] to-[#4a1a1f] text-white">
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
              <MessageCircle className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Ask a Librarian</h1>
          </div>
          <p className="text-white/80 text-lg max-w-2xl">
            Need help finding resources or conducting research? Our librarians are here to assist you.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#681e26]/10 rounded-lg">
                    <Phone className="w-5 h-5 text-[#681e26]" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Phone</div>
                    <a href="tel:+914942656440" className="text-[#681e26] hover:underline">
                      +91 494 265 6440
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#681e26]/10 rounded-lg">
                    <Mail className="w-5 h-5 text-[#681e26]" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Email</div>
                    <a href="mailto:library@amaljyothi.ac.in" className="text-[#681e26] hover:underline">
                      library@amaljyothi.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#681e26]/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-[#681e26]" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Address</div>
                    <div className="text-gray-600">
                      Amal Jyothi College of Engineering<br />
                      Kanjirapally, Kottayam<br />
                      Kerala - 686518
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#4a6741]/10 rounded-lg">
                  <Clock className="w-5 h-5 text-[#4a6741]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Library Hours</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium text-gray-800">8:30 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium text-gray-800">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-gray-800">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Help */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">How Can We Help?</h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">Research Assistance</h4>
                  <p className="text-sm text-gray-600">
                    Get help finding books, journals, databases, and other resources for your research.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">Citation Help</h4>
                  <p className="text-sm text-gray-600">
                    Learn how to properly cite sources in APA, MLA, Chicago, and other formats.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">Database Access</h4>
                  <p className="text-sm text-gray-600">
                    Get help accessing N-LIST, Springer, JSTOR, and other subscribed databases.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">Inter-Library Loan</h4>
                  <p className="text-sm text-gray-600">
                    Request books or articles not available in our collection from other libraries.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#681e26] rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Web OPAC</h3>
              <p className="text-white/80 text-sm mb-4">
                Search our online catalog to find books, journals, and other resources available in the library.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 bg-white text-[#681e26] font-medium rounded-lg hover:bg-gray-100 transition"
              >
                Search Catalog
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
