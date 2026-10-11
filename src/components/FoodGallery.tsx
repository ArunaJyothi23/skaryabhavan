'use client';

import React from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-12.03.12.jpeg',
    alt: 'Outdoor Catering Buffet Feast'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52.jpeg',
    alt: 'Steamed Idlis & Sambar Vada Spread'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-1.jpeg',
    alt: 'Traditional Idli Sambar on Banana Leaf'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-11.jpeg',
    alt: 'Crispy South Indian Starters & Specialties'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-6.jpeg',
    alt: 'Special Vegetarian Starters & Momos Platter'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-10.jpeg',
    alt: 'Refreshing Lassi & Smoothies Spread'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-8.jpeg',
    alt: 'Authentic Indian Vegetarian Dishes'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-4.jpeg',
    alt: 'Crispy Appetizers on Banana Leaf'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-2.jpeg',
    alt: 'Arya Bhavan Authentic Masala Dosa Platter'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-13.jpeg',
    alt: 'Crispy Golden Masala Dosa Roll with Chutneys'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-04-at-13.21.23.jpeg',
    alt: 'Traditional South Indian Filter Coffee'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-08-at-14.51.18-e1765205112699.jpeg',
    alt: 'Fresh Fried Snacks on Banana Leaf'
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
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {galleryImages.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-[4/3] w-full rounded-[6px] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 bg-gray-100 cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 300px"
              />
              {/* Subtle hover overlay (50% black matching live site) */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
