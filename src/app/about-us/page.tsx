import type { Metadata } from 'next';
import Image from 'next/image';
import { buildPageMetadata } from '@/lib/seoService';
import AboutSection from '@/components/AboutSection';
import FeaturePills from '@/components/FeaturePills';
import UKLocations from '@/components/UKLocations';

export const metadata: Metadata = buildPageMetadata('/about-us', {
  title: 'About Us | Samko Arya Bhavan London',
  description: 'Learn about Samko Arya Bhavan, our heritage from Kanyakumari to London, and our 100% pure Indian vegetarian and vegan culinary excellence.'
});

export default function AboutUsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Banner (Exact from live site) */}
      <section className="relative w-full h-72 sm:h-96 bg-black overflow-hidden flex items-center justify-center">
        <Image
          src="/images/migrated/Hero-banner-scaled.jpg"
          alt="About Samko Arya Bhavan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 space-y-2">
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white tracking-wide">
            About Us
          </h1>
          <p className="text-base sm:text-xl font-light text-white tracking-wider">
            London | Wembley | Tooting
          </p>
        </div>
      </section>

      {/* Main About Section with Round Thali and Narrative */}
      <AboutSection />

      {/* 4 Feature Pills */}
      <FeaturePills />

      {/* UK Locations */}
      <UKLocations />
    </main>
  );
}
