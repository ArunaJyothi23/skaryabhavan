import type { Metadata } from 'next';
import Image from 'next/image';
import { buildPageMetadata } from '@/lib/seoService';
import ContactSection from '@/components/ContactSection';
import UKLocations from '@/components/UKLocations';

export const metadata: Metadata = buildPageMetadata('/contact-us', {
  title: 'Contact Us | Samko Arya Bhavan London',
  description: 'Contact Samko Arya Bhavan. View telephone numbers, locations, and opening hours for Central London, Wembley, and Tooting.'
});

export default function ContactUsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Banner (Exact from live site) */}
      <section className="relative w-full h-72 sm:h-96 bg-black overflow-hidden flex items-center justify-center">
        <Image
          src="/images/migrated/Hero-banner-scaled.jpg"
          alt="Contact Samko Arya Bhavan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 space-y-2">
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white tracking-wide">
            Contact Us
          </h1>
          <p className="text-base sm:text-xl font-light text-white tracking-wider">
            Central London • Wembley • Tooting
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />

      {/* UK Locations */}
      <UKLocations />
    </main>
  );
}
