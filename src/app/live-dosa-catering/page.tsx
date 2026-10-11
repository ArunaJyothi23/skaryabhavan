import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Check, Flame, Clock, Star, Sparkles } from 'lucide-react';
import CateringEnquiryBox from '@/components/CateringEnquiryBox';
import CateringFaq from '@/components/CateringFaq';
import CateringGallery from '@/components/CateringGallery';

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
  { item: 'Poori Bhaji Live', price: '£3.00' },
  { item: 'Chole Batura Live', price: '£3.00' },
  { item: 'Chilli Panneer', price: '£2.00' },
  { item: 'Pani Puri', price: '£2.00' },
  { item: 'Dahi Puri', price: '£2.00' },
  { item: 'Gulab Jamun (1 pc)', price: '£1.00' },
  { item: 'Rasmalai (per pc)', price: '£2.00' },
  { item: 'Paan (per pc)', price: '£1.00' },
  { item: 'Pineapple Kesari (per person)', price: '£1.00' },
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
  '/images/catering/gallery/WhatsApp-Image-2025-12-08-at-14.52.20.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-08-at-14.51.18-2.jpeg',
  '/images/catering/WhatsApp-Image-2025-12-08-at-14.51.18-e1765205112699.jpeg',
  '/images/catering/WhatsApp-Image-2025-12-09-at-16.13.11-1.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-09-at-17.36.52-14.jpeg',
];

export default function LiveDosaCateringPage() {
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* 1. Hero Banner - Exactly matching live site screenshots */}
      <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] lg:min-h-[92vh] bg-black overflow-hidden flex flex-col justify-end pb-12 sm:pb-16 px-4">
        <Image
          src="/images/catering/WhatsApp-Image-2025-12-08-at-14.51.18-e1765205112699.jpeg"
          alt="Live Dosa Catering Arya Bhavan London"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-wide drop-shadow-md">
            Live Dosa Catering
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-white/95 tracking-widest">
            London | Wembley | Tooting
          </p>
        </div>
      </section>

      {/* 2. Intro Section + Enquire Now (2 Columns matching live site screenshot) */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#344e41] leading-tight">
                Why Choose Our Live Dosa Station Catering?
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-sans">
                Bring the joy of authentic South Indian flavors to your special occasions with Skaryabhavan’s Live Dosa Catering for homes and events. Our expert dosa chefs set up a dosa live station right at your venue, serving hot, crispy dosas along with freshly prepared chutneys and sambar. Whether it’s a cozy family gathering, birthday celebration, or a house party, your guests can enjoy restaurant-style dosas without leaving the comfort of your home.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-sans">
                Make your celebration truly unforgettable with Skaryabhavan’s Live Masala Dosa Party experience — every dosa is made fresh, customized to your guests’ taste, and served with love. We take pride in offering 100% pure vegetarian catering, ensuring top-quality hygiene, authentic flavors, and complete satisfaction in every bite.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-sans">
                From weddings and housewarming events to corporate gatherings, Skaryabhavan’s Live Dosa Station Catering adds a fun, interactive, and delicious highlight that your guests will always remember.
              </p>

              <div className="pt-2 flex flex-wrap gap-3 text-sm font-semibold text-[#344e41]">
                <span className="flex items-center gap-1.5 bg-[#edf5ee] px-4 py-2 rounded-full">
                  <Flame className="w-4 h-4 text-[#e87722]" /> Live Cooking On-Site
                </span>
                <span className="flex items-center gap-1.5 bg-[#edf5ee] px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-[#2d5a27]" /> 100% Pure Vegetarian
                </span>
                <span className="flex items-center gap-1.5 bg-[#edf5ee] px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 text-[#2d5a27]" /> 2 Hours Pure Vibes
                </span>
              </div>
            </div>

            {/* Right Enquire Form */}
            <div className="lg:col-span-5 w-full">
              <CateringEnquiryBox sourceTitle="Live Dosa Catering" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Live Dosa Menu & Pricing */}
      <section className="py-16 sm:py-20 bg-[#edf5ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#344e41] tracking-wide">
              Live Dosa Catering Menu
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-2 font-sans">
              Authentic South Indian cuisine, prepared fresh at your celebration
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
            {/* Weekday Card */}
            <div className="bg-white rounded-2xl p-7 text-center shadow-sm border border-gray-200 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#344e41]">Monday to Friday</h3>
                <div className="text-4xl font-serif font-bold text-[#e87722] my-3">£14.00</div>
                <p className="text-sm text-gray-600 font-sans font-medium">(Minimum 35 Persons)</p>
              </div>
            </div>

            {/* Weekend Card */}
            <div className="bg-white rounded-2xl p-7 text-center shadow-md border-2 border-[#e87722] flex flex-col justify-between relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e87722] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow">
                Weekends
              </span>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#344e41]">Sat, Sun & Bank Holiday</h3>
                <div className="text-4xl font-serif font-bold text-[#e87722] my-3">£15.00</div>
                <p className="text-sm text-gray-600 font-sans font-medium">(Minimum 40 Persons)</p>
              </div>
            </div>
          </div>

          {/* Book Now Button */}
          <div className="text-center mb-8">
            <Link
              href="#form"
              className="inline-block px-10 py-3.5 bg-[#e87722] hover:bg-[#d66b1a] text-white font-bold text-base rounded-md transition-colors shadow-md cursor-pointer"
            >
              Book Now
            </Link>
          </div>

          {/* Highlights bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base font-bold text-[#2d5a27] mb-12">
            <span className="flex items-center gap-1.5 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              All Add-ons Are Charged Separately Per Person
            </span>
            <span className="flex items-center gap-1.5 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100">
              <Clock className="w-4 h-4 text-[#e87722]" />
              2 Hours Pure Vibes
            </span>
          </div>

          {/* Two Menu Items Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-14">
            <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm">
              <h4 className="text-xl font-serif font-bold text-[#344e41] mb-5 pb-3 border-b border-gray-100 flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#e87722]" /> Menu Items (Fresh & Live)
              </h4>
              <ul className="space-y-3 font-sans text-sm sm:text-base text-gray-700">
                {menuColumn1.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#2d5a27] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm">
              <h4 className="text-xl font-serif font-bold text-[#344e41] mb-5 pb-3 border-b border-gray-100 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#2d5a27]" /> Menu Items & Accompaniments
              </h4>
              <ul className="space-y-3 font-sans text-sm sm:text-base text-gray-700">
                {menuColumn2.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#2d5a27] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Add-ons Items */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 border border-gray-200 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-[#344e41] text-center mb-6">
              Add-ons Items
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
              {addons.map((addon, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#fafaf8] border border-gray-100"
                >
                  <span className="text-sm font-medium text-gray-800">{addon.item}</span>
                  <span className="text-xs font-bold text-[#e87722] bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200 shrink-0 ml-2">
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="#form"
                className="inline-block px-10 py-3.5 bg-[#e87722] hover:bg-[#d66b1a] text-white font-bold text-base rounded-md transition-colors shadow-md cursor-pointer"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Faqs with Side Image (Exact Elementor layout) */}
      <CateringFaq
        faqs={faqs}
        sideImageSrc="/images/catering/WhatsApp-Image-2025-12-09-at-16.13.11-1.jpeg"
        sideImageAlt="Arya Bhavan Live Dosa Catering London"
      />

      {/* 5. Our Gallery (Exact 8 live dosa photos with Lightbox) */}
      <CateringGallery images={galleryImages} />
    </main>
  );
}
