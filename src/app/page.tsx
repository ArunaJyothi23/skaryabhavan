import React from 'react';
import type { Metadata } from 'next';
import { getSiteContent } from '@/lib/firebaseService';
import { buildPageMetadata } from '@/lib/seoService';
import PageJsonLd from '@/components/PageJsonLd';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import FeaturePills from '@/components/FeaturePills';
import UKLocations from '@/components/UKLocations';
import WhyChooseLive from '@/components/WhyChooseLive';
import FoodGallery from '@/components/FoodGallery';
import CateringSectionLive from '@/components/CateringSectionLive';
import FaqSectionLive from '@/components/FaqSectionLive';
import FranchiseLocations from '@/components/FranchiseLocations';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const siteContent = await getSiteContent();
  return buildPageMetadata('/', undefined, siteContent);
}

export default async function HomePage() {
  const siteContent = await getSiteContent();

  return (
    <main>
      <PageJsonLd siteContent={siteContent} />

      {/* 1. Hero Slider (sl1, sl2, sl3 with live admin editable slides) */}
      <Hero slides={siteContent.slides} heroData={siteContent.hero} />

      {/* 2. About Samko Arya Bhavan (Round steel thali image + exact live narrative) */}
      <AboutSection aboutData={siteContent.about} />

      {/* 3. 4 Feature Cards (Pure Vegetarian, Diet Friendly, Authentic Taste, Family Friendly) */}
      <FeaturePills features={siteContent.about?.featureCards} />

      {/* 4. Our Locations in the UK (Wembley, Tooting, Central London) */}
      <UKLocations />

      {/* 5. Why Choose Arya Bhavan (Live reasons from admin) */}
      <WhyChooseLive whyData={siteContent.whyChooseUs} />

      {/* 6. South Indian Dosas, Idlis & More (Food Gallery) */}
      <FoodGallery images={siteContent.gallery} />

      {/* 7. Catering Services & Enquire Now Form */}
      <CateringSectionLive cateringData={siteContent.catering} />

      {/* 8. FAQ's - 100% Pure Veg Restaurant (Live FAQs from admin) */}
      <FaqSectionLive faqs={siteContent.faqs} />

      {/* 9. Our Franchise Locations (Paris & Brussels) */}
      <FranchiseLocations />
    </main>
  );
}
