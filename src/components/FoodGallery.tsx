'use client';

import React from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-2.jpeg',
    alt: 'Arya Bhavan Authentic Masala Dosa Platter'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-08-at-14.51.18-e1765205112699.jpeg',
    alt: 'Live Dosa Catering Preparation'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-11.jpeg',
    alt: 'Crispy South Indian Starters & Specialties'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-6.jpeg',
    alt: 'Special Vegetarian Starters & Noodles Platter'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-04-at-13.21.23.jpeg',
    alt: 'Traditional South Indian Dining Experience'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52.jpeg',
    alt: 'Steamed Idlis & Sambar Vada Spread'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-12.03.12.jpeg',
    alt: 'Outdoor Catering Buffet Feast'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-10.jpeg',
    alt: 'Aromatic Vegetarian Curries & Kadai Gravies'
  }
];

export default function FoodGallery() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-ivymode text-2xl sm:text-3xl lg:text-[32px] font-semibold tracking-[1px] uppercase text-[#344E41] leading-snug">
            SOUTH INDIAN DOSAS, IDLIS &amp; MORE
          </h2>
        </div>

        {/* 4-Column Exact Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {galleryImages.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-[3/2] w-full rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 bg-gray-100"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
