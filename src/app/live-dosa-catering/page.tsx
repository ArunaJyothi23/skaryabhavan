import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import CateringEnquiryBox from '@/components/CateringEnquiryBox';
import CateringOrangeFaq from '@/components/CateringOrangeFaq';
import CateringGallery from '@/components/CateringGallery';
import CateringDishIcon from '@/components/CateringDishIcon';

import { buildPageMetadata } from '@/lib/seoService';
import { getSiteContent } from '@/lib/firebaseService';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const siteContent = await getSiteContent();
  return buildPageMetadata('/live-dosa-catering', undefined, siteContent);
}

const menuColumn1 = [
  'Sweet (Pongal / Payasam / Kesari)',
  'Plain Dosa (LIVE)',
  'Masala Dosa (LIVE)',
  'Onion Dosa (LIVE)',
  'Ghee Dosa (LIVE)',
  'Podi Dosa (LIVE)',
  'Millet Dosa',
  'Onion Chilli Uthappam (LIVE)',
  'Medhu Vada (LIVE)',
];

const menuColumn2 = [
  'Paya Idly',
  'Veg Biryani',
  'Vada Curry',
  'Coconut Chutney',
  'Tomato Chutney',
  'Coriander Chutney',
  'Sambar',
  'Tea / Coffee',
];

const addons = [
  'Poori Bhaji Live £3.00',
  'Chole Batura Live £3.00',
  'Chilli Panneer £2.00',
  'Pani Puri £2.00',
  'Dahi Puri £2.00',
  'Gulab Jamun £1.00 (1 pc)',
  'Rasmalai £2.00 per pcs',
  'Paan £1.00 per pcs',
  'Pineapple Kesari £1.00 per person',
];

const faqs = [
  {
    q: 'Do you bring all the cooking equipment for live dosa catering?',
    a: 'We bring all the required equipment including cooker, gas, and other essentials.',
  },
  {
    q: 'Do you provide plates, spoons, and napkins?',
    a: 'Yes, we provide biodegradable disposable plates, spoons, forks, and napkins unless you specify otherwise.',
  },
  {
    q: 'How are the charges calculated for dosa catering?',
    a: 'We will go ahead with the plate count, not the head count. Please note only plate for one person.',
  },
  {
    q: 'Is there a transportation fee for catering services?',
    a: 'Yes, transportation is charged at £2 per mile to and from the destination.',
  },
  {
    q: 'How long do you serve food at an event?',
    a: 'We serve food for 2 hours at your premises, with an additional 30 minutes required for setup. Extra time beyond this will be charged at £60 per hour.',
  },
  {
    q: 'What do customers need to provide for the setup?',
    a: 'Not required we will bring our own tables.',
  },
  {
    q: 'What is the payment policy for booking live dosa catering?',
    a: '30% token of advance to confirm the event, balance can be paid end of the day.',
  },
  {
    q: 'Can I customize the menu with additional items?',
    a: 'Yes, you can add with extra cost.',
  },
  {
    q: 'Do you provide tents or gazebos for outdoor catering?',
    a: 'No, we do not provide tents or gazebos.',
  },
  {
    q: 'Do your dishes contain allergens such as nuts or sesame?',
    a: 'At Arya Bhavan Restaurant, our food is prepared in a kitchen where nuts, sesame, and other allergenic ingredients are used, and despite our care, we cannot guarantee that any dish is completely free from allergen traces. Therefore, our menu may not be suitable for individuals with severe food allergies.',
  },
];

const galleryImages = [
  '/images/catering/gallery/WhatsApp-Image-2025-12-08-at-14.54.23-2.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-08-at-14.54.23-1.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-08-at-14.54.23.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-08-at-14.54.22.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-08-at-14.52.47.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-08-at-14.52.20.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-08-at-14.51.18-2.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-09-at-16.13.11-1.jpeg',
];

export default async function LiveDosaCateringPage() {
  const siteContent = await getSiteContent();
  const activeCol1 = siteContent.liveDosaCatering?.menuColumn1?.length
    ? siteContent.liveDosaCatering.menuColumn1
    : menuColumn1;
  const activeCol2 = siteContent.liveDosaCatering?.menuColumn2?.length
    ? siteContent.liveDosaCatering.menuColumn2
    : menuColumn2;
  const rawAddons = siteContent.liveDosaCatering?.addons?.length
    ? siteContent.liveDosaCatering.addons
    : addons;
  const activeAddons: string[] = rawAddons.map((a: any) =>
    typeof a === 'string' ? a : `${a.item || ''} ${a.price || ''}`.trim()
  );
  const activePricingCards = siteContent.liveDosaCatering?.pricingCards?.length
    ? siteContent.liveDosaCatering.pricingCards
    : [
        { title: 'Monday to Friday', price: '£14.00', pax: '(Minimum 35 Persons)' },
        { title: 'Sat, Sun & Bank Holiday', price: '£15.00', pax: '(Minimum 40 Persons)' }
      ];
  const activeBadges = siteContent.liveDosaCatering?.badges?.length
    ? siteContent.liveDosaCatering.badges
    : [
        '★ All Add-ons Are Charged Separately Per Person ★',
        '★ 2 Hours Pure Vibes ★'
      ];
  const activeFaqs = siteContent.liveDosaCatering?.faqs?.length
    ? siteContent.liveDosaCatering.faqs
    : faqs;
  const activeGallery = siteContent.liveDosaCatering?.gallery?.length
    ? siteContent.liveDosaCatering.gallery
    : galleryImages;

  return (
    <main className="bg-white min-h-screen font-josefin">
      {/* 1. Hero Banner */}
      <section className="relative w-full min-h-[460px] md:min-h-[520px] lg:min-h-[580px] xl:min-h-[640px] bg-black overflow-hidden flex flex-col justify-center items-center px-4">
        <Image
          src="/images/catering/WhatsApp-Image-2025-12-08-at-14.51.18-e1765205112699.jpeg"
          alt="Live Dosa Catering Arya Bhavan London"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left md:object-[0%_50%]"
        />
        {/* Bright vivid image matching live site */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-['Josefin_Sans',sans-serif] font-normal sm:font-medium text-white tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Live Dosa Catering
          </h1>
          <p className="text-lg sm:text-xl md:text-[24px] font-['Josefin_Sans',sans-serif] font-normal text-white tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            London | Wembley | Tooting
          </p>
        </div>
      </section>

      {/* 2. Intro Section + Enquire Now */}
      <section className="py-[50px] bg-white">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start justify-between">
            {/* Left Content Column (starts with a comfortable gap below the top of the form box) */}
            <div className="w-full lg:w-[65%] xl:w-[66%] lg:pt-[44px] xl:pt-[48px]">
              <h2 className="font-['Josefin_Sans',sans-serif] text-[22px] sm:text-[26px] lg:text-[28px] xl:text-[31px] font-normal sm:font-medium text-[#344E41] leading-[1.3] mb-[20px]">
                Why Choose Our Live Dosa Station Catering?
              </h2>
              <div className="space-y-[18px] text-[16px] sm:text-[17px] text-[#202020] leading-[1.6] font-['Josefin_Sans',sans-serif]">
                <p>
                  Bring the joy of authentic South Indian flavors to your special occasions with <strong className="font-semibold text-[#202020]">Skaryabhavan’s Live Dosa Catering</strong> for homes and events. Our expert dosa chefs set up a <strong className="font-semibold text-[#202020]">dosa live station</strong> right at your venue, serving hot, crispy dosas along with freshly prepared chutneys and sambar. Whether it’s a cozy family gathering, birthday celebration, or a house party, your guests can enjoy restaurant-style dosas without leaving the comfort of your home.
                </p>
                <p>
                  Make your celebration truly unforgettable with <strong className="font-semibold text-[#202020]">Skaryabhavan’s Live Masala Dosa Party</strong> experience — every dosa is made fresh, customized to your guests’ taste, and served with love. We take pride in offering <strong className="font-semibold text-[#202020]">100% pure vegetarian catering</strong>, ensuring top-quality hygiene, authentic flavors, and complete satisfaction in every bite.
                </p>
                <p>
                  From weddings and housewarming events to corporate gatherings, <strong className="font-semibold text-[#202020]">Skaryabhavan’s Live Dosa Station Catering</strong> adds a fun, interactive, and delicious highlight that your guests will always remember.
                </p>
              </div>
            </div>

            {/* Right Enquire Form */}
            <div className="w-full lg:w-[35%] xl:w-[34%] flex justify-end">
              <CateringEnquiryBox sourceTitle="Live Dosa Catering" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Live Dosa Menu & Pricing - EXACT REPLICA OF LIVE SITE */}
      <section className="py-[50px] bg-[#F6FFF8]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          
          {/* Section Header (Orange Title, Charcoal Subtitle) */}
          <div className="text-center max-w-3xl mx-auto mb-[30px]">
            <h2 className="text-[34px] sm:text-[38px] lg:text-[40px] font-['Josefin_Sans',sans-serif] font-normal text-[#F68422] leading-tight mb-2">
              Live Dosa Catering Menu
            </h2>
            <p className="text-[16px] sm:text-[18px] text-[#202020] font-['Josefin_Sans',sans-serif] font-normal">
              Authentic South Indian cuisine, prepared fresh at your celebration
            </p>
          </div>

          {/* Pricing Cards - full width 2 columns matching container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mb-8">
            {activePricingCards.map((card: any, idx: number) => (
              <div
                key={idx}
                className="bg-white rounded-[10px] p-[25px] text-center shadow-[0_0_10px_rgba(0,0,0,0.15)] flex flex-col justify-center items-center"
              >
                <h3 className="text-[22px] sm:text-[24px] font-['Josefin_Sans',sans-serif] font-normal text-[#202020]">
                  {card.title}
                </h3>
                <div className="text-[26px] sm:text-[28px] font-['Josefin_Sans',sans-serif] font-semibold text-[#F68422] my-2">
                  {card.price}
                </div>
                <p className="text-[15px] sm:text-[16px] font-['Josefin_Sans',sans-serif] text-[#737373] font-normal">
                  {card.pax}
                </p>
              </div>
            ))}
          </div>

          {/* Book Now Button (Screenshot 3) */}
          <div className="text-center mb-[45px]">
            <Link
              href="#form"
              className="inline-block px-8 py-[12px] bg-[#F68422] hover:bg-[#366732] text-white font-['Josefin_Sans',sans-serif] font-semibold text-[20px] sm:text-[22px] rounded-[5px] transition-colors shadow-sm cursor-pointer"
            >
              Book Now
            </Link>
          </div>

          {/* Dark Green Badges - full width 2 columns matching pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mb-6">
            {activeBadges.map((badge: string, idx: number) => (
              <div
                key={idx}
                className="bg-[#366732] text-white py-3 px-4 rounded-[10px] font-['Josefin_Sans',sans-serif] text-[15px] sm:text-[16px] font-semibold text-center tracking-normal shadow-sm flex items-center justify-center min-h-[48px]"
              >
                {badge}
              </div>
            ))}
          </div>

          {/* Three Columns in Orange Borders - full width 3 columns matching container */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full mb-10 items-stretch">
            
            {/* Box 1: Menu Items (Column 1) */}
            <div className="border-2 border-[#F68422] rounded-[9px] bg-white p-[6px] shadow-sm flex flex-col">
              <div className="bg-[#F68422] text-[#000000] text-center py-[10px] px-2 rounded-[5px] font-['Josefin_Sans',sans-serif] text-[26px] sm:text-[30px] font-semibold tracking-wide mb-[10px]">
                Menu Items
              </div>
              <div className="flex-1 space-y-[10px]">
                {activeCol1.map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-[#CAC9C9] border-b-4 border-b-[#CAC9C9] rounded-[10px] p-[10px] bg-white flex items-center gap-3 transition-colors"
                  >
                    <CateringDishIcon className="w-[27px] h-[27px] text-[#344E41] shrink-0" />
                    <span className="font-['Josefin_Sans',sans-serif] text-[18px] sm:text-[22px] text-[#000000] font-normal leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 2: Menu Items (Column 2) */}
            <div className="border-2 border-[#F68422] rounded-[9px] bg-white p-[6px] shadow-sm flex flex-col">
              <div className="bg-[#F68422] text-[#000000] text-center py-[10px] px-2 rounded-[5px] font-['Josefin_Sans',sans-serif] text-[26px] sm:text-[30px] font-semibold tracking-wide mb-[10px]">
                Menu Items
              </div>
              <div className="flex-1 space-y-[10px]">
                {activeCol2.map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-[#CAC9C9] border-b-4 border-b-[#CAC9C9] rounded-[10px] p-[10px] bg-white flex items-center gap-3 transition-colors"
                  >
                    <CateringDishIcon className="w-[27px] h-[27px] text-[#344E41] shrink-0" />
                    <span className="font-['Josefin_Sans',sans-serif] text-[18px] sm:text-[22px] text-[#000000] font-normal leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 3: Add-ons Items */}
            <div className="border-2 border-[#F68422] rounded-[9px] bg-white p-[6px] shadow-sm flex flex-col">
              <div className="bg-[#F68422] text-[#000000] text-center py-[10px] px-2 rounded-[5px] font-['Josefin_Sans',sans-serif] text-[26px] sm:text-[30px] font-semibold tracking-wide mb-[10px]">
                Add-ons Items
              </div>
              <div className="flex-1 space-y-[10px]">
                {activeAddons.map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-[#CAC9C9] border-b-4 border-b-[#CAC9C9] rounded-[10px] p-[10px] bg-white flex items-center gap-3 transition-colors"
                  >
                    <CateringDishIcon className="w-[27px] h-[27px] text-[#344E41] shrink-0" />
                    <span className="font-['Josefin_Sans',sans-serif] text-[18px] sm:text-[22px] text-[#000000] font-normal leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Book Now Button below 3 Boxes (Screenshot 5) */}
          <div className="text-center">
            <Link
              href="#form"
              className="inline-block px-8 py-[13px] bg-[#F68422] hover:bg-[#366732] text-white font-['Josefin_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] rounded-[5px] transition-colors shadow-sm cursor-pointer"
            >
              Book Now
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Faqs - EXACT REPLICA OF USER SCREENSHOT 4 */}
      <CateringOrangeFaq
        faqs={activeFaqs}
        sideImageSrc="/images/catering/WhatsApp-Image-2025-12-09-at-16.13.11-1.jpeg"
        sideImageAlt="Arya Bhavan Live Dosa Catering London"
      />

      {/* 5. Our Gallery - EXACT REPLICA OF USER SCREENSHOT 5 */}
      <CateringGallery images={activeGallery} />
    </main>
  );
}
