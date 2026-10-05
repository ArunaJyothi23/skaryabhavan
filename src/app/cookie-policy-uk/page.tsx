import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seoService';

export const metadata: Metadata = buildPageMetadata('/cookie-policy-uk');

export default function CookiePolicyPage() {
  return (
    <main className="py-16 bg-[#fdfaf6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm space-y-6">
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-gray-900">
          Cookie Policy (UK)
        </h1>
        <p className="text-xs text-gray-400">
          Information regarding cookies and web storage on skaryabhavan.com
        </p>

        <div className="prose prose-orange max-w-none text-sm text-gray-700 space-y-4 leading-relaxed">
          <p>
            This Cookie Policy explains what cookies are, how we use them, and your choices regarding cookies when using Arya Bhavan’s web platform.
          </p>

          <h2 className="text-xl font-serif font-bold text-gray-900 pt-2">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device when you browse websites. They are widely used to make websites work efficiently, remember preferences, and provide analytics data to site owners.
          </p>

          <h2 className="text-xl font-serif font-bold text-gray-900 pt-2">2. Types of Cookies We Use</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Necessary for the technical operation of the site, form validation, and admin authentication.
            </li>
            <li>
              <strong>Performance & Analytics Cookies:</strong> Anonymous usage statistics to understand popular dishes, navigation flows, and site performance.
            </li>
          </ul>

          <h2 className="text-xl font-serif font-bold text-gray-900 pt-2">3. Managing Your Cookie Preferences</h2>
          <p>
            You can modify your browser settings to block or notify you about cookies. Note that disabling certain essential cookies may impact specific functionalities of our web platform.
          </p>
        </div>
      </div>
    </main>
  );
}
