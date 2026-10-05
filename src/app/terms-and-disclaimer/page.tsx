import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seoService';

export const metadata: Metadata = buildPageMetadata('/terms-and-disclaimer');

export default function TermsAndDisclaimerPage() {
  return (
    <main className="py-16 bg-[#fdfaf6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm space-y-6">
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-gray-900">
          Terms & Conditions and Allergen Disclaimer
        </h1>
        <p className="text-xs text-gray-400">
          Asgard Ventures LTD (Trading as Arya Bhavan)
        </p>

        <div className="prose prose-orange max-w-none text-sm text-gray-700 space-y-4 leading-relaxed">
          <h2 className="text-xl font-serif font-bold text-gray-900 pt-2">1. Pure Vegetarian Kitchen Policy</h2>
          <p>
            Arya Bhavan operates 100% strictly pure vegetarian kitchens. We do not store, prepare, or handle any meat, poultry, seafood, or egg products anywhere in our culinary premises.
          </p>

          <h2 className="text-xl font-serif font-bold text-gray-900 pt-2">2. Food Allergen Disclaimer</h2>
          <p>
            While our menu features clearly marked items for Vegan (<span className="text-green-600 font-bold">V</span>), Gluten-Free (<span className="text-blue-600 font-bold">G</span>), and Jain (<span className="text-amber-600 font-bold">J</span>) dietary needs, our kitchens handle nuts, dairy (ghee, paneer, curd, butter), mustard, sesame, and gluten products.
          </p>
          <p>
            If you have a severe food allergy or intolerance, you <strong>must notify our staff prior to ordering</strong>. We take extreme precautions with cross-contamination; however, we cannot guarantee 100% allergen-free environments.
          </p>

          <h2 className="text-xl font-serif font-bold text-gray-900 pt-2">3. Catering & Table Reservations</h2>
          <p>
            Catering bookings require an advance deposit to secure your event date. Cancellations made within 7 days of the scheduled event may be subject to partial retention of the deposit to cover procured raw materials.
          </p>

          <h2 className="text-xl font-serif font-bold text-gray-900 pt-2">4. Applicable Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of England and Wales.
          </p>
        </div>
      </div>
    </main>
  );
}
