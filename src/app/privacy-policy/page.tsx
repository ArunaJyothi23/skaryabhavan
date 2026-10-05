import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seoService';

export const metadata: Metadata = buildPageMetadata('/privacy-policy');

export default function PrivacyPolicyPage() {
  return (
    <main className="py-16 bg-[#fdfaf6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm space-y-6">
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-gray-900">
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-400">
          Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div className="prose prose-orange max-w-none text-sm text-gray-700 space-y-4 leading-relaxed">
          <p>
            This Privacy Policy describes how <strong>Arya Bhavan</strong> (Asgard Ventures LTD, Company No. 09828018) collects, uses, and discloses your personal data when you visit our website (skaryabhavan.com), place online orders, make table reservations, or contact us.
          </p>

          <h2 className="text-xl font-serif font-bold text-gray-900 pt-4">1. Information We Collect</h2>
          <p>We may collect information you provide directly, including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contact details such as your full name, email address, and telephone number.</li>
            <li>Event details including dates, party size, venue address, and dietary requirements.</li>
            <li>Technical data such as browser type, IP address, and interaction analytics.</li>
          </ul>

          <h2 className="text-xl font-serif font-bold text-gray-900 pt-4">2. How We Use Your Data</h2>
          <p>We process your data strictly to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Confirm table reservations and provide catering quotations.</li>
            <li>Respond to customer service inquiries and support requests.</li>
            <li>Comply with UK legal and food allergen safety regulations.</li>
          </ul>

          <h2 className="text-xl font-serif font-bold text-gray-900 pt-4">3. Data Security & Storage</h2>
          <p>
            Your information is stored securely on protected serverless infrastructure with strict access controls. We do not sell, rent, or trade your personal information to third parties for marketing purposes.
          </p>

          <h2 className="text-xl font-serif font-bold text-gray-900 pt-4">4. Your Rights under UK GDPR</h2>
          <p>
            Under the UK General Data Protection Regulation (UK GDPR), you have the right to request access to, rectification of, or erasure of your personal data. To make a request, contact us at <code>eventsnkab@gmail.com</code>.
          </p>
        </div>
      </div>
    </main>
  );
}
