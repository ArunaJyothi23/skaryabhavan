import React from 'react';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import FeaturePills from '@/components/FeaturePills';
import UKLocations from '@/components/UKLocations';
import WhyChooseLive from '@/components/WhyChooseLive';
import FoodGallery from '@/components/FoodGallery';
import CateringSectionLive from '@/components/CateringSectionLive';
import FaqSectionLive from '@/components/FaqSectionLive';
import FranchiseLocations from '@/components/FranchiseLocations';

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero Slider (sl1, sl2, sl3 with exact captions and View Menu button) */}
      <Hero />

      {/* 2. About Samko Arya Bhavan (Round steel thali image + exact narrative) */}
      <AboutSection />

      {/* 3. 4 Feature Cards (Pure Vegetarian, Diet Friendly, Authentic Taste active, Family Friendly) */}
      <FeaturePills />

      {/* 4. Our Locations in the UK (Wembley, Tooting, Central London) */}
      <UKLocations />

      {/* 5. Why Choose Arya Bhavan (Best Quality, Fast Service, Vegan Options, Special) */}
      <WhyChooseLive />

      {/* 6. South Indian Dosas, Idlis & More (Food Gallery) */}
      <FoodGallery />

      {/* 7. Catering Services & Enquire Now Form */}
      <CateringSectionLive />

      {/* 8. FAQ's - 100% Pure Veg Restaurant */}
      <FaqSectionLive />

      {/* 9. Our Franchise Locations (Paris & Brussels) */}
      <FranchiseLocations />
    </main>
  );
}
