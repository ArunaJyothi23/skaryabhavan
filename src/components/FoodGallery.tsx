'use client';

import React from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-6.jpeg',
    alt: 'Special Vegetarian Starters & Noodles Platter'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52.jpeg',
    alt: 'Steamed Idlis & Sambar Vada Spread'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-1.jpeg',
    alt: 'Traditional Dosa on Banana Leaf with Chutneys'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-4.jpeg',
    alt: 'Crispy Dumplings on Banana Leaf'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-13.jpeg',
    alt: 'Crispy Golden Cutlets with Chutney Dip'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-10.jpeg',
    alt: 'Refreshing Lassi & Smoothies Spread'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-8.jpeg',
    alt: 'Steamed Idlis with Chutneys'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-2.jpeg',
    alt: 'Authentic Indian Curries in Kadai Bowls'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-08-at-14.51.18-e1765205112699.jpeg',
    alt: 'Fresh Golden Vada & Bonda on Banana Leaf'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-12.03.12.jpeg',
    alt: 'Grand South Indian Feast Spread'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-11.jpeg',
    alt: 'Royal Indian Vegetarian Thali'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-04-at-13.21.23.jpeg',
    alt: 'Traditional South Indian Filter Coffee'
  }
];

interface FoodGalleryProps {
  images?: { src: string; alt?: string }[];
}

export default function FoodGallery({ images: propImages }: FoodGalleryProps = {}) {
  const activeImages = propImages && propImages.length > 0 ? propImages : galleryImages;

  return (
    <section className="py-10 sm:py-[50px] bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-ivymode text-2xl font-semibold leading-[1.25] tracking-[1px] text-[#344E41] uppercase sm:text-[26px] lg:text-[32px] lg:leading-[56px]">
            SOUTH INDIAN DOSAS, IDLIS &amp; MORE
          </h2>
        </div>

        {/* 4-Column Exact Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {activeImages.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-[4/3] w-full rounded-[6px] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 bg-gray-100 cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                quality={90}
                priority={idx < 4}
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
