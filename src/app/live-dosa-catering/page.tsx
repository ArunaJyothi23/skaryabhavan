import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import CateringEnquiryBox from '@/components/CateringEnquiryBox';
import CateringOrangeFaq from '@/components/CateringOrangeFaq';
import CateringGallery from '@/components/CateringGallery';
import CateringDishIcon from '@/components/CateringDishIcon';

export const metadata: Metadata = {
  title: 'Live Dosa Catering at Home & Events | Live Dosa Station | Arya Bhavan',
  description:
    'Book authentic live dosa catering with a traditional live dosa station at home, parties, weddings & events in London. South Indian dosas served live with chutneys & sambar.',
  openGraph: {
    title: 'Live Dosa Catering at Home & Events | Live Dosa Station | Arya Bhavan',
    description:
      'Book authentic live dosa catering with a traditional live dosa station at home, parties, weddings & events in London.',
    images: ['/images/catering/WhatsApp-Image-2025-12-08-at-14.51.18-e1765205112699.jpeg'],
  },
};

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

export default function LiveDosaCateringPage() {
  return (
    <main className="bg-white min-h-screen font-josefin">
      {/* 1. Hero Banner */}
      <section className="relative w-full min-h-[500px] md:min-h-[744px] bg-black overflow-hidden flex flex-col justify-center items-center px-4">
        <Image
          src="/images/catering/WhatsApp-Image-2025-12-08-at-14.51.18-e1765205112699.jpeg"
          alt="Live Dosa Catering Arya Bhavan London"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-josefin font-semibold text-white tracking-wide leading-tight">
            Live Dosa Catering
          </h1>
          <p className="text-lg sm:text-xl md:text-[24px] font-normal text-white tracking-wide">
            London | Wembley | Tooting
          </p>
        </div>
      </section>

      {/* 2. Intro Section + Enquire Now */}
      <section className="py-10 sm:py-12 lg:py-[50px] bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-5">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 items-start justify-between">
            {/* Left Content Column (60% width on desktop) */}
            <div className="w-full lg:w-[60%] space-y-4">
              <h2 className="text-2xl sm:text-[30px] lg:text-[34px] font-ivymode font-semibold text-[#344e41] leading-[1.3] mb-5">
                Why Choose Our Live Dosa Station Catering?
              </h2>
              <p className="text-[16px] sm:text-[17px] text-[#202020] leading-[26px] font-['Josefin_Sans',sans-serif]">
                Bring the joy of authentic South Indian flavors to your special occasions with <strong className="font-bold">Skaryabhavan’s Live Dosa Catering</strong> for homes and events. Our expert dosa chefs set up a <strong className="font-bold">dosa live station</strong> right at your venue, serving hot, crispy dosas along with freshly prepared chutneys and sambar. Whether it’s a cozy family gathering, birthday celebration, or a house party, your guests can enjoy restaurant-style dosas without leaving the comfort of your home.
              </p>
              <p className="text-[16px] sm:text-[17px] text-[#202020] leading-[26px] font-['Josefin_Sans',sans-serif]">
                Make your celebration truly unforgettable with <strong className="font-bold">Skaryabhavan’s Live Masala Dosa Party</strong> experience — every dosa is made fresh, customized to your guests’ taste, and served with love. We take pride in offering <strong className="font-bold">100% pure vegetarian catering</strong>, ensuring top-quality hygiene, authentic flavors, and complete satisfaction in every bite.
              </p>
              <p className="text-[16px] sm:text-[17px] text-[#202020] leading-[26px] font-['Josefin_Sans',sans-serif]">
                From weddings and housewarming events to corporate gatherings, <strong className="font-bold">Skaryabhavan’s Live Dosa Station Catering</strong> adds a fun, interactive, and delicious highlight that your guests will always remember.
              </p>
            </div>

            {/* Right Enquire Form (40% width on desktop) */}
            <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
              <CateringEnquiryBox sourceTitle="Live Dosa Catering" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Live Dosa Menu & Pricing - EXACT REPLICA OF USER SCREENSHOT 5 */}
      <section className="py-12 sm:py-16 bg-[#EFF7F3]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          
          {/* Section Header (Orange Title, Charcoal Subtitle) */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-['Josefin_Sans',sans-serif] font-semibold text-[#f68422] tracking-wide mb-3">
              Live Dosa Catering Menu
            </h2>
            <p className="text-base sm:text-lg text-[#202020] font-['Josefin_Sans',sans-serif] font-normal">
              Authentic South Indian cuisine, prepared fresh at your celebration
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {/* Monday to Friday */}
            <div className="bg-white rounded-[10px] p-7 sm:p-8 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex flex-col justify-center items-center">
              <h3 className="text-xl sm:text-[26px] font-['Josefin_Sans',sans-serif] font-semibold text-[#202020]">
                Monday to Friday
              </h3>
              <div className="text-2xl sm:text-[28px] font-['Josefin_Sans',sans-serif] font-bold text-[#f68422] my-2 sm:my-3">
                £14.00
              </div>
              <p className="text-[15px] font-['Josefin_Sans',sans-serif] text-gray-500 font-normal">
                (Minimum 35 Persons)
              </p>
            </div>

            {/* Sat, Sun & Bank Holiday */}
            <div className="bg-white rounded-[10px] p-7 sm:p-8 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex flex-col justify-center items-center">
              <h3 className="text-xl sm:text-[26px] font-['Josefin_Sans',sans-serif] font-semibold text-[#202020]">
                Sat, Sun &amp; Bank Holiday
              </h3>
              <div className="text-2xl sm:text-[28px] font-['Josefin_Sans',sans-serif] font-bold text-[#f68422] my-2 sm:my-3">
                £15.00
              </div>
              <p className="text-[15px] font-['Josefin_Sans',sans-serif] text-gray-500 font-normal">
                (Minimum 40 Persons )
              </p>
            </div>
          </div>

          {/* Book Now Button */}
          <div className="text-center mb-10">
            <Link
              href="#form"
              className="inline-block px-8 py-3 bg-[#f68422] hover:bg-[#366732] text-white font-['Josefin_Sans',sans-serif] font-bold text-[18px] sm:text-[20px] rounded-[5px] transition-colors shadow-sm cursor-pointer"
            >
              Book Now
            </Link>
          </div>

          {/* Two Dark Green Pill Badges (Exact full width matching 3 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#366732] text-white py-3 px-6 rounded-[10px] font-josefin text-sm sm:text-base font-semibold text-center tracking-wide shadow-sm flex items-center justify-center">
              ★ All Add-ons Are Charged Separately Per Person ★
            </div>
            <div className="bg-[#366732] text-white py-3 px-6 rounded-[10px] font-josefin text-sm sm:text-base font-semibold text-center tracking-wide shadow-sm flex items-center justify-center">
              ★ 2 Hours Pure Vibes ★
            </div>
          </div>

          {/* Three Columns in Orange Borders (Exact full width matching pills) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 mb-10 items-stretch">
            
            {/* Box 1: Menu Items (Column 1) */}
            <div className="border-2 border-[#f68422] rounded-[9px] bg-white p-1.5 shadow-sm flex flex-col">
              <div className="bg-[#f68422] text-black text-center py-2.5 px-4 rounded-[5px] font-josefin text-2xl sm:text-[30px] font-normal tracking-wide mb-3">
                Menu Items
              </div>
              <div className="flex-1 space-y-2">
                {menuColumn1.map((item, idx) => (
                  <div
                    key={idx}
                    className="border-b-4 border-[#CAC9C9] rounded-b-[10px] p-2.5 bg-white flex items-center gap-3"
                  >
                    <CateringDishIcon className="w-[27px] h-[27px] text-[#344e41] shrink-0" />
                    <span className="font-josefin text-base sm:text-[20px] lg:text-[22px] text-black font-normal leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 2: Menu Items (Column 2) */}
            <div className="border-2 border-[#f68422] rounded-[9px] bg-white p-1.5 shadow-sm flex flex-col">
              <div className="bg-[#f68422] text-black text-center py-2.5 px-4 rounded-[5px] font-josefin text-2xl sm:text-[30px] font-normal tracking-wide mb-3">
                Menu Items
              </div>
              <div className="flex-1 space-y-2">
                {menuColumn2.map((item, idx) => (
                  <div
                    key={idx}
                    className="border-b-4 border-[#CAC9C9] rounded-b-[10px] p-2.5 bg-white flex items-center gap-3"
                  >
                    <CateringDishIcon className="w-[27px] h-[27px] text-[#344e41] shrink-0" />
                    <span className="font-josefin text-base sm:text-[20px] lg:text-[22px] text-black font-normal leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 3: Add-ons Items */}
            <div className="border-2 border-[#f68422] rounded-[9px] bg-white p-1.5 shadow-sm flex flex-col">
              <div className="bg-[#f68422] text-black text-center py-2.5 px-4 rounded-[5px] font-josefin text-2xl sm:text-[30px] font-normal tracking-wide mb-3">
                Add-ons Items
              </div>
              <div className="flex-1 space-y-2">
                {addons.map((item, idx) => (
                  <div
                    key={idx}
                    className="border-b-4 border-[#CAC9C9] rounded-b-[10px] p-2.5 bg-white flex items-center gap-3"
                  >
                    <CateringDishIcon className="w-[27px] h-[27px] text-[#344e41] shrink-0" />
                    <span className="font-josefin text-base sm:text-[20px] lg:text-[22px] text-black font-normal leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Book Now Button below 3 Boxes (Screenshot 3) */}
          <div className="text-center">
            <Link
              href="#form"
              className="inline-block px-7 py-3 bg-[#f68422] hover:bg-[#366732] text-white font-josefin font-normal text-xl sm:text-[24px] rounded-[5px] transition-colors shadow-sm cursor-pointer"
            >
              Book Now
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Faqs - EXACT REPLICA OF USER SCREENSHOT 4 */}
      <CateringOrangeFaq
        faqs={faqs}
        sideImageSrc="/images/catering/WhatsApp-Image-2025-12-09-at-16.13.11-1.jpeg"
        sideImageAlt="Arya Bhavan Live Dosa Catering London"
      />

      {/* 5. Our Gallery - EXACT REPLICA OF USER SCREENSHOT 5 */}
      <CateringGallery images={galleryImages} />
    </main>
  );
}
