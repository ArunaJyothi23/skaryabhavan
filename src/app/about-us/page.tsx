import type { Metadata } from 'next';
import Image from 'next/image';
import { buildPageMetadata } from '@/lib/seoService';
import { getSiteContent } from '@/lib/firebaseService';
import UKLocations from '@/components/UKLocations';
import FoodGallery from '@/components/FoodGallery';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const siteContent = await getSiteContent();
  return buildPageMetadata('/about-us', undefined, siteContent);
}

const features = [
  {
    icon: '/images/migrated/Screenshot-2026-02-25-103420.png',
    title: 'Traditional recipes',
  },
  {
    icon: '/images/migrated/Screenshot-2026-02-25-103428.png',
    title: 'Freshly prepared daily',
  },
  {
    icon: '/images/migrated/Screenshot-2026-02-25-103446.png',
    title: 'Family friendly dining',
  },
  {
    icon: '/images/migrated/Screenshot-2026-02-25-103437.png',
    title: 'Vegan & Jain friendly',
  },
];

export default async function AboutUsPage() {
  const siteContent = await getSiteContent();
  const narrative = siteContent.about?.narrative?.length
    ? siteContent.about.narrative
    : [
        'Our journey began with the hope and determination to carry a piece of India with us wherever we go, and share our love and joy with you. Like pockets of delectable delicacies nestled among the busy streets of Tooting, Wembley, and London, the flavour and aroma of Kanyakumari is never far away.',
        'Our dishes pay homage to the traditional cuisine of South India, concentrating on vegetarian and vegan options, seamlessly blending our flavours and authentic spices to create dishes suitable for a diverse audience, and ensure an exceptional dining experience. Every dish tells a story, and this is our opportunity to share the story with you, and embark on a culinary journey that transcends through time.'
      ];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Banner (Bright light mode matching live site, no dimming overlay) */}
      <section className="relative w-full h-[380px] sm:h-[450px] lg:h-[506px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/migrated/Hero-banner-scaled.jpg"
          alt="About Us – Samko Arya Bhavan"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-white font-['Josefin_Sans',sans-serif] text-[34px] sm:text-[42px] font-normal tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.65)]">
            About Us
          </h1>
        </div>
      </section>

      {/* 2. Let's Create Memories That Will Last a Lifetime Section */}
      <section className="w-full bg-white overflow-hidden">
        <div className="grid w-full grid-cols-1 items-stretch lg:grid-cols-[48%_52%]">
          {/* Left Column: South Indian Thali Feast Image flush to left edge */}
          <div className="relative min-h-[313px] w-full sm:min-h-[460px] lg:min-h-[506px]">
            <Image
              src="/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-11.jpeg"
              alt="South Indian Traditional Vegetarian Thali Feast"
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-center"
            />
          </div>

          {/* Right column: heading narrative and 4 feature badges */}
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-12 xl:px-16 py-10 sm:py-12 lg:py-[50px]">
            <h2 className="font-ivymode mb-5 text-[26px] font-semibold uppercase leading-[1.25] tracking-[1px] text-[#344E41] sm:text-[28px] lg:text-[32px] lg:leading-[56px]">
              LET’S CREATE MEMORIES THAT WILL LAST A LIFETIME.
            </h2>

            <div className="mb-8 space-y-4 font-['Josefin_Sans',sans-serif] text-[16px] font-normal leading-[1.4] text-[#202020] lg:text-[18px] lg:leading-[1.55]">
              {narrative.map((p: string, idx: number) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* 4 Feature Badges (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-[#EBE6E0] rounded-[10px] p-2.5 px-3.5 flex items-center gap-3.5 transition-all duration-300 hover:shadow-[1px_1px_8px_1px_#F68422]"
                >
                  <div className="relative w-10 h-10 shrink-0">
                    <Image
                      src={feat.icon}
                      alt={feat.title}
                      fill
                      quality={90}
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[#000000] font-['Josefin_Sans',sans-serif] font-bold text-[15px] sm:text-[16px] leading-snug">
                    {feat.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Locations in the UK Section (Exact Image 3 matching live site) */}
      <UKLocations />

      {/* 4. South Indian Dosas, Idlis & More Gallery (Exact Images 4 & 5 matching live site) */}
      <FoodGallery />
    </main>
  );
}
