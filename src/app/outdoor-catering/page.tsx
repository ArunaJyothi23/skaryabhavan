import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Check } from 'lucide-react';
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
  return buildPageMetadata('/outdoor-catering', undefined, siteContent);
}

const serviceCards = [
  {
    title: 'BUFFET CATERING',
    desc: 'Offering a wide selection of dishes for casual and formal events.',
    img: '/images/catering/closed-metal-pots-1.jpg',
  },
  {
    title: 'FINE DINING',
    desc: 'Elegant and sophisticated meal service for corporate and private events.',
    img: '/images/catering/WhatsApp-Image-2025-12-09-at-18.12.25.jpeg',
  },
  {
    title: 'ON-SITE CATERING',
    desc: 'Convenient and fresh food prepared at your event location.',
    img: '/images/catering/selective-focus-point-catering-buffet-food-1.jpg',
  },
  {
    title: 'BUSINESS EVENTS',
    desc: 'Providing seamless catering for conferences, seminars and corporate functions.',
    img: '/images/catering/two-serious-adult-business-men-discussing-issue-1.jpg',
  },
];

const packages = [
  {
    name: '£15.99 Packages',
    pax: '(Minimum 25Pax)',
    items: [
      '2 Staters',
      '1 VegMains',
      '1 Dhal',
      '1 PaneerMains',
      '1 RiceOrNoodles',
      '1 Dessert',
      '1 Bread',
    ],
    note: '(Accompaniments like Papad, Pickle, Salad & Raitha will be Complimentary.)',
  },
  {
    name: '£19.99 Package',
    pax: '(Minimum 25Pax)',
    items: [
      '3 Staters',
      '2 VegMains',
      '1 Dhal',
      '1 PaneerMains',
      '1 RiceOrNoodles',
      '1 Dessert',
      '1 Bread',
    ],
    note: '(Accompaniments like Papad, Pickle, Salad & Raitha will be Complimentary.)',
  },
  {
    name: '£23.99 Package',
    pax: '(Minimum 25Pax)',
    items: [
      '3 Staters (live stater Opt)',
      '2 VegMains',
      '2 Paneer Mains',
      '2 Rice Or Noodles',
      '2 Dessert',
      'Live Poori',
    ],
    note: '(Accompaniments like Papad, Pickle, Salad & Raitha will be Complimentary.)',
  },
  {
    name: '£11.00 Package',
    pax: '(South Indian thalli)',
    items: [
      'Chappathi / Poori / Vada',
      'Ghee Dhal',
      'Ponni Rice',
      'Sambar',
      'Chef Special Kara Kozhambu',
      'Kootu',
      'Poriyal',
      'Curd',
      'Raitha',
      'Payasam',
      'Banana',
      'Butter Chilli',
      'Applam',
      'Pickle',
    ],
    note: '',
  },
];

const dishCategories = [
  {
    title: 'Starter',
    items: [
      'Arya Bhavan Special Idly',
      'Medu Vada',
      'Rasa Vada',
      'Curd Vada',
      'Bhindi Fry',
      'Honey Chilly Potato / Pineapple',
      'Mushroom Manchurian',
      'Chilli Babycorn / Mushroom',
      'Aloo Pepper Fry',
      'Crispy Lollypop',
      'Gobi 65',
      'Veg Samosa',
      'Baby Corn 65',
      'Paneer 65',
      'Chilli Paneer',
      'Mushroom Pepper Fry',
      'Veg Manchurian Dry',
      'Gobi Manchurian',
      'Chilli Gobi',
      'Paneer Tikka',
    ],
  },
  {
    title: 'Rice & Noodles',
    items: [
      'Golden Garlic Fried Rice',
      'Paneer Bell Pepper Fried Rice',
      'Veg Fried Rice',
      'Steamed Rice',
      'Jeera Rice',
      'Samabar Rice',
      'Schezwan Fried Rice',
      'Kashmiri Pulao',
      'Navratan Pulao',
      'Veg Pulao',
      'Peas Pulao',
      'Veg Biryani',
      'Veg Noodles',
      'Veg Hakka Noodles',
      'Beijing Noodles',
      'Curried Mushroom Noodles',
    ],
  },
  {
    title: 'Veg Curries',
    items: [
      'Vegetable Kolhapuri',
      'Malai Kofta',
      'Vegetable Kofta Curry',
      'Veg Jalfrezi',
      'Bhindi Do Pyaza',
      'Baby Corn Masala',
      'Baingan Masala',
      'Aloo Gobi',
      'Mixed Veg Curry',
      'Aloo Palak',
      'Vegetable Butter Masala',
      'Veg Chettinad Masala',
      'Gobi Masala',
    ],
  },
  {
    title: 'PaneerCurries',
    items: [
      'Palak Paneer',
      'Paneer Jalfrezi',
      'Mutter Paneer',
      'Paneer Butter Masala',
      'Kadai Paneer',
      'Paneer Chettinadu Masala',
      'Shahi Paneer',
      'Paneer Tikka Masala',
      'Paneer Kurma',
      'Chilli Paneer Gravy',
      'Methi Malai Paneer',
    ],
  },
  {
    title: 'Breads',
    items: [
      'Aloo Paratha',
      'Peswari Naan',
      'Paratha',
      'Naan – Plain / Butter',
      'Roti – Plain / Butter',
      'Chapathi',
      'Poori',
      'Garlic Naan',
      'Chilli Garlic Naan',
    ],
  },
  {
    title: 'Dhal',
    items: [
      'Aam Ka Dhal',
      'Dhal Tamatar',
      'Sambar',
      'Chole Masala',
      'Dhal Double Tadka',
      'Rasam',
      'Dhal Tadka',
      'Tomato Dhal',
      'Dhal Butter Fry',
      'Dhal Makhani',
    ],
  },
  {
    title: 'Dessert',
    items: [
      'Ada Pradhaman',
      'Gulab Jamun',
      'Parupu Payasam',
      'Bombay Halwa',
      'Beetroot Halwa',
      'Semiya Javarisi Payasam',
      'Rasmalai',
      'Ravva Kesari',
      'Carrot Halwa',
    ],
  },
];

const faqs = [
  {
    q: 'Do you cater South and North Indian vegetarian food?',
    a: 'Yes. Arya Bhavan offers outdoor catering with a full range of South Indian and North Indian pure vegetarian dishes for all events.',
  },
  {
    q: 'Which areas in London do you cover for catering services?',
    a: 'We cater across London, including Central London, Wembley, Tooting, Barking, Ilford, and East Ham.',
  },
  {
    q: 'Can you offer live dosa catering at events?',
    a: 'Absolutely. Our live dosa stations are one of our most popular catering options and can be added to any event package.',
  },
  {
    q: 'Do you provide vegan and Jain food options in your catering?',
    a: 'Yes, we offer dedicated vegan and Jain vegetarian dishes prepared separately to meet specific dietary preferences.',
  },
  {
    q: 'How far in advance should we book outdoor catering?',
    a: 'We recommend booking 1–2 weeks in advance, especially for weekends or large events, to ensure availability.',
  },
  {
    q: 'What types of events do you cater for?',
    a: 'We cater for weddings, birthdays, corporate events, religious functions, family gatherings, and outdoor community events.',
  },
  {
    q: 'Is all your catering food 100% vegetarian?',
    a: 'Yes. Arya Bhavan is a 100% pure vegetarian caterer, with no meat, fish, or eggs used in any dish.',
  },
  {
    q: 'Can you customise the catering menu for our event?',
    a: 'Yes, our team can fully customise South Indian and North Indian vegetarian menus based on your event theme and guest preferences.',
  },
  {
    q: 'Do you provide staff and equipment for outdoor catering?',
    a: 'Yes, we offer serving staff, buffet setups, live stations, and all essential catering equipment upon request.',
  },
];

const galleryImages = [
  '/images/catering/gallery/WhatsApp-Image-2025-12-09-at-17.36.52-14.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-09-at-17.36.52-13.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-09-at-17.36.52-12.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-09-at-17.36.52-11.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-09-at-17.36.52-10.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-09-at-17.36.52-9.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-09-at-17.36.52-8.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-09-at-17.36.52-7.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-09-at-17.36.52-6.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-09-at-17.36.52-5.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-09-at-17.36.52-4.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-09-at-17.36.52-2.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-09-at-17.36.52-1.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-09-at-17.36.52.jpeg',
  '/images/catering/gallery/WhatsApp-Image-2025-12-09-at-17.45.41.jpeg',
  '/images/catering/WhatsApp-Image-2025-12-09-at-17.38.24.jpeg',
];

export default async function OutdoorCateringPage() {
  const siteContent = await getSiteContent();
  const activeServiceCards = siteContent.outdoorCatering?.serviceCards?.length
    ? siteContent.outdoorCatering.serviceCards
    : serviceCards;
  const activePackages = siteContent.outdoorCatering?.packages?.length
    ? siteContent.outdoorCatering.packages
    : packages;
  const activeDishCategories = siteContent.outdoorCatering?.dishCategories?.length
    ? siteContent.outdoorCatering.dishCategories
    : dishCategories;
  return (
    <main className="bg-white min-h-screen font-josefin">
      {/* 1. Hero Banner */}
      <section className="relative w-full min-h-[500px] md:min-h-[722px] bg-black overflow-hidden flex flex-col justify-center items-center px-4">
        <Image
          src="/images/catering/WhatsApp-Image-2025-12-09-at-17.38.24.jpeg"
          alt="Authentic Indian Vegetarian Outdoor Catering Services London"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-josefin font-semibold text-white tracking-wide leading-tight">
            Authentic Indian Vegetarian Outdoor Catering Services
          </h1>
          <p className="text-lg sm:text-xl md:text-[24px] font-normal text-white tracking-wide">
            London | Wembley | Tooting
          </p>
        </div>
      </section>

      {/* 2. Intro Section + Enquire Now (2 Columns) */}
      <section className="py-10 sm:py-12 lg:py-[50px] bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-5">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 items-start justify-between">
            {/* Left Column Content */}
            <div className="w-full lg:w-[60%] space-y-4">
              <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-josefin font-normal text-[#344e41] leading-[1.3] mb-5">
                100% Pure Indian Vegetarian Catering Across London
              </h2>
              <p className="text-base sm:text-[18px] text-[#202020] leading-relaxed font-josefin">
                At Arya Bhavan, we specialise in delivering premium outdoor catering that brings the richness of South Indian and North Indian vegetarian cuisine directly to your venue anywhere in London, including Central London, Wembley, Tooting, Ilford. Our dedicated catering team prepares an extensive selection of pure vegetarian dishes—from aromatic curries to traditional festive favourites—to ensure every event is memorable. Clients often choose us for our expertise in creating authentic flavours that cater to diverse tastes, whether it’s a family celebration, cultural gathering, wedding reception, or corporate function.
              </p>
              <p className="text-base sm:text-[18px] text-[#202020] leading-relaxed font-josefin">
                Arya Bhavan offers South Indian pure vegetarian outdoor catering and live dosa catering services across London, Wembley, Tooting. North Indian classics, ensuring a menu that satisfies every guest. With a strong focus on quality and authenticity, our outdoor catering service promises a seamless experience, delivering exceptional vegetarian food wherever your celebration takes place.
              </p>
            </div>

            {/* Right Column Enquire Form */}
            <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
              <CateringEnquiryBox sourceTitle="Outdoor Catering" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Four Feature Service Cards */}
      <section className="py-12 sm:py-16 bg-[#F6FFF8]">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {activeServiceCards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-[10px] border border-[#BDBCBC] p-2.5 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative w-full h-[186px] overflow-hidden rounded-[10px]">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between text-center">
                  <div>
                    <h3 className="text-xl font-josefin font-medium text-[#202020] tracking-wide mb-2 uppercase">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-josefin">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="#form"
              className="inline-block px-7 py-3 bg-[#f68422] hover:bg-[#366732] text-white font-josefin font-normal text-xl sm:text-[24px] rounded-[10px] transition-colors shadow-sm cursor-pointer"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Packages Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {activePackages.map((pkg, i) => (
              <div
                key={i}
                className="border border-[#366732] rounded-[10px] bg-[#F9F4EF] p-3 sm:p-3.5 shadow-sm flex flex-col justify-between h-full"
              >
                <div>
                  {/* Orange Header Banner (full width inside card) */}
                  <div className="bg-[#f68422] text-white py-2 px-4 rounded-[6px] text-center font-josefin text-2xl sm:text-[25px] font-normal w-full mb-3 shadow-sm">
                    {pkg.name}
                  </div>

                  <div className="text-center font-josefin text-[17px] sm:text-[18px] text-black font-normal my-3">
                    {pkg.pax}
                  </div>

                  <div className="space-y-1.5 text-center font-josefin text-[17px] sm:text-[19px] text-black font-normal">
                    {pkg.items.map((item, idx) => (
                      <div key={idx} className="py-0.5">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {pkg.note ? (
                  <div className="mt-auto pt-6 pb-2 text-center">
                    <p className="text-[14px] sm:text-[15px] font-josefin text-black font-normal leading-snug px-1">
                      {pkg.note}
                    </p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Dishes Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-4 space-y-6">
          
          {/* Row 1: 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {activeDishCategories.slice(0, 3).map((cat, idx) => (
              <div
                key={idx}
                className="border border-[#CAC9C9] rounded-[10px] bg-[#f9f4ef] p-3 sm:p-4 shadow-sm flex flex-col h-full"
              >
                {/* Category Header */}
                <div className="bg-[#f68422] text-white py-2 px-4 rounded-[6px] text-center font-josefin text-2xl sm:text-[25px] font-normal w-full mb-3 shadow-sm">
                  {cat.title}
                </div>

                {/* Items List */}
                <div className="space-y-1.5 flex-1 px-1">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-3 py-1">
                      <CateringDishIcon className="w-[18px] h-[18px] text-[#344e41] shrink-0" />
                      <span className="font-josefin text-[17px] sm:text-[18px] text-black font-normal leading-normal">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Remaining Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
            {activeDishCategories.slice(3).map((cat, idx) => (
              <div
                key={idx}
                className="border border-[#CAC9C9] rounded-[10px] bg-[#f9f4ef] p-3 sm:p-4 shadow-sm flex flex-col h-full"
              >
                {/* Category Header */}
                <div className="bg-[#f68422] text-white py-2 px-4 rounded-[6px] text-center font-josefin text-2xl sm:text-[25px] font-normal w-full mb-3 shadow-sm">
                  {cat.title}
                </div>

                {/* Items List */}
                <div className="space-y-1.5 flex-1 px-1">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-3 py-1">
                      <CateringDishIcon className="w-[18px] h-[18px] text-[#344e41] shrink-0" />
                      <span className="font-josefin text-[17px] sm:text-[18px] text-black font-normal leading-normal">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Faqs (Exact Solid Orange Bars with Side Image) */}
      <CateringOrangeFaq
        faqs={faqs}
        sideImageSrc="/images/catering/WhatsApp-Image-2025-12-09-at-17.36.52.jpeg"
        sideImageAlt="Arya Bhavan Outdoor Catering London"
      />

      {/* 7. Our Gallery */}
      <CateringGallery images={galleryImages} />
    </main>
  );
}
