import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import CateringEnquiryBox from '@/components/CateringEnquiryBox';
import CateringFaq from '@/components/CateringFaq';
import CateringGallery from '@/components/CateringGallery';
import DishesBrowser from '@/components/DishesBrowser';

export const metadata: Metadata = {
  title: 'Authentic Indian Vegetarian Outdoor Catering | Arya Bhavan',
  description:
    'Authentic Indian Vegetarian Outdoor Catering Services London | Wembley | Tooting. 100% Pure Indian Vegetarian Catering Across London.',
  openGraph: {
    title: 'Authentic Indian Vegetarian Outdoor Catering | Arya Bhavan',
    description:
      'Authentic Indian Vegetarian Outdoor Catering Services London | Wembley | Tooting. 100% Pure Indian Vegetarian Catering Across London.',
    images: ['/images/catering/WhatsApp-Image-2025-12-09-at-17.38.24.jpeg'],
  },
};

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
      '2 Starters',
      '1 Veg Mains',
      '1 Dhal',
      '1 Paneer Mains',
      '1 Rice Or Noodles',
      '1 Dessert',
      '1 Bread',
    ],
    note: '(Accompaniments like Papad, Pickle, Salad & Raitha will be Complimentary.)',
  },
  {
    name: '£19.99 Package',
    pax: '(Minimum 25Pax)',
    items: [
      '3 Starters',
      '2 Veg Mains',
      '1 Dhal',
      '1 Paneer Mains',
      '1 Rice Or Noodles',
      '1 Dessert',
      '1 Bread',
    ],
    note: '(Accompaniments like Papad, Pickle, Salad & Raitha will be Complimentary.)',
    popular: true,
  },
  {
    name: '£23.99 Package',
    pax: '(Minimum 25Pax)',
    items: [
      '3 Starters (Live starter Opt)',
      '2 Veg Mains',
      '2 Paneer Mains',
      '2 Rice Or Noodles',
      '2 Dessert',
      'Live Poori',
    ],
    note: '(Accompaniments like Papad, Pickle, Salad & Raitha will be Complimentary.)',
  },
  {
    name: '£11.00 Package',
    pax: '(South Indian Thali)',
    items: [
      'Chappathi / Poori / Vada',
      'Ghee Dhal',
      'Ponni Rice',
      'Sambar',
      'Chef Special Kara Kozhambu',
      'Kootu & Poriyal',
      'Curd & Raitha',
      'Payasam & Banana',
      'Butter Chilli & Applam & Pickle',
    ],
    note: '(Traditional South Indian Feast served with reverence.)',
  },
];

const dishesData = {
  Starter: [
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
  'Rice & Noodles': [
    'Golden Garlic Fried Rice',
    'Paneer Bell Pepper Fried Rice',
    'Veg Fried Rice',
    'Steamed Rice',
    'Jeera Rice',
    'Sambar Rice',
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
  'Veg Curries': [
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
  PaneerCurries: [
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
  Breads: [
    'Aloo Paratha',
    'Peshwari Naan',
    'Paratha',
    'Naan – Plain / Butter',
    'Roti – Plain / Butter',
    'Chapathi',
    'Poori',
    'Garlic Naan',
    'Chilli Garlic Naan',
  ],
  Dhal: [
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
  Dessert: [
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
};

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

export default function OutdoorCateringPage() {
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* 1. Hero Banner - Exactly matching live site screenshots */}
      <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] lg:min-h-[92vh] bg-black overflow-hidden flex flex-col justify-end pb-12 sm:pb-16 px-4">
        <Image
          src="/images/catering/WhatsApp-Image-2025-12-09-at-17.38.24.jpeg"
          alt="Authentic Indian Vegetarian Outdoor Catering Services London"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-wide drop-shadow-md">
            Authentic Indian Vegetarian Outdoor Catering Services
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
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#344e41] leading-tight">
                100% Pure Indian Vegetarian Catering Across London
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-sans">
                At Arya Bhavan, we specialise in delivering premium outdoor catering that brings the richness of South Indian and North Indian vegetarian cuisine directly to your venue anywhere in London, including Central London, Wembley, Tooting, Ilford. Our dedicated catering team prepares an extensive selection of pure vegetarian dishes—from aromatic curries to traditional festive favourites—to ensure every event is memorable. Clients often choose us for our expertise in creating authentic flavours that cater to diverse tastes, whether it’s a family celebration, cultural gathering, wedding reception, or corporate function.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-sans">
                Arya Bhavan offers South Indian pure vegetarian outdoor catering and live dosa catering services across London, Wembley, Tooting. North Indian classics, ensuring a menu that satisfies every guest. With a strong focus on quality and authenticity, our outdoor catering service promises a seamless experience, delivering exceptional vegetarian food wherever your celebration takes place.
              </p>

              <div className="pt-2 flex flex-wrap gap-3 text-sm font-semibold text-[#344e41]">
                <span className="flex items-center gap-1.5 bg-[#edf5ee] px-4 py-2 rounded-full">
                  <Check className="w-4 h-4 text-[#2d5a27]" /> 100% Pure Vegetarian
                </span>
                <span className="flex items-center gap-1.5 bg-[#edf5ee] px-4 py-2 rounded-full">
                  <Check className="w-4 h-4 text-[#2d5a27]" /> Jain & Vegan Options
                </span>
                <span className="flex items-center gap-1.5 bg-[#edf5ee] px-4 py-2 rounded-full">
                  <Check className="w-4 h-4 text-[#2d5a27]" /> Live Dosa Stations Available
                </span>
              </div>
            </div>

            {/* Right Column Enquire Form */}
            <div className="lg:col-span-5 w-full">
              <CateringEnquiryBox sourceTitle="Outdoor Catering" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Four Feature Service Cards (Exact images & copy) */}
      <section className="py-16 sm:py-20 bg-[#edf5ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between text-center">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#344e41] tracking-wide mb-2 uppercase">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-sans">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#form"
              className="inline-block px-10 py-3.5 bg-[#e87722] hover:bg-[#d66b1a] active:bg-[#c45f14] text-white font-bold text-base rounded-md transition-colors shadow-md cursor-pointer"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Packages Section (All 4 Tiers) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#344e41] tracking-wide">
              Outdoor Catering Packages
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 font-sans">
              Choose from our curated banquet packages or customize your menu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`relative bg-[#fcfdfa] rounded-2xl border ${
                  pkg.popular ? 'border-[#e87722] shadow-lg ring-2 ring-[#e87722]/20' : 'border-gray-200 shadow-sm'
                } p-6 flex flex-col justify-between`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e87722] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow">
                    Most Popular
                  </span>
                )}
                <div>
                  <div className="text-center pb-4 border-b border-gray-200">
                    <h3 className="text-2xl font-serif font-bold text-[#344e41]">{pkg.name}</h3>
                    <span className="text-xs font-semibold text-gray-500 mt-1 block">{pkg.pax}</span>
                  </div>

                  <ul className="py-5 space-y-2.5 text-sm text-gray-700 font-sans">
                    {pkg.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#2d5a27] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100 text-center">
                  <p className="text-[11px] text-gray-500 italic mb-4 font-sans">{pkg.note}</p>
                  <Link
                    href="#form"
                    className="block w-full py-2.5 px-4 bg-[#2d5a27] hover:bg-[#23471e] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors text-center"
                  >
                    Select Package
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Complete Dishes Sections (All 7 Categories) */}
      <section className="py-16 sm:py-20 bg-[#fcfbf8] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#344e41] tracking-wide">
              Catering Dishes & Specialties
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 font-sans">
              Authentic South & North Indian dishes crafted freshly by master chefs
            </p>
          </div>

          <DishesBrowser categories={dishesData} />
        </div>
      </section>

      {/* 6. Faqs with Side Image (Exact Elementor layout) */}
      <CateringFaq
        faqs={faqs}
        sideImageSrc="/images/catering/WhatsApp-Image-2025-12-09-at-17.36.52.jpeg"
        sideImageAlt="Arya Bhavan Outdoor Catering London"
      />

      {/* 7. Our Gallery (Exact 16 photos with Lightbox) */}
      <CateringGallery images={galleryImages} />
    </main>
  );
}
