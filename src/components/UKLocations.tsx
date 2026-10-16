'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

const locations = [
  {
    name: 'Wembley',
    desc: 'Perfect place for families and vegetarian food lovers.',
    image: '/images/migrated/NKAryaBhavan-Wembley-6.jpeg',
    link: '/wembley'
  },
  {
    name: 'Tooting',
    desc: 'Enjoy traditional dosas and South Indian favourites.',
    image: '/images/migrated/NKAryaBhavan-Tooting-1.jpeg',
    link: '/tooting'
  },
  {
    name: 'Central London',
    desc: 'Authentic South Indian vegetarian dining in the heart of London.',
    image: '/images/migrated/NKAryaBhavan-Central-London-2.jpeg',
    link: '/central-london'
  }
];

export default function UKLocations() {
  return (
    <section className="py-10 sm:py-[50px] bg-[#ECE6DF]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-ivymode text-2xl font-semibold leading-[1.25] tracking-[1px] text-[#344E41] uppercase sm:text-[26px] lg:text-[32px] lg:leading-[56px]">
            OUR LOCATIONS IN THE UK
          </h2>
        </div>

        {/* 3 Locations Horizontal Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[10px] p-2.5 sm:p-3 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[2px_0px_9px_1px_rgba(245,133,34,0.59)] hover:scale-[1.01] transition-all duration-300 flex flex-col sm:flex-row items-start overflow-hidden"
            >
              {/* Left Side: Restaurant Image (Fixed height matching Image 4, not stretched to full card height) */}
              <div className="relative w-full sm:w-[46%] h-[220px] sm:h-[245px] self-start rounded-[6px] overflow-hidden shrink-0 bg-gray-100">
                <Image
                  src={loc.image}
                  alt={`Arya Bhavan ${loc.name}`}
                  fill
                  quality={90}
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 220px"
                />
              </div>

              {/* Right Side: Details & View More Button */}
              <div className="w-full sm:w-[54%] p-3 sm:p-3.5 flex flex-col justify-between items-start min-h-[220px] sm:min-h-[245px]">
                <div>
                  {/* Pin Icon Badge */}
                  <div className="w-11 h-11 rounded-full bg-[#EAEDEC] text-[#344B42] flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5 text-[#344B42] stroke-[2]" />
                  </div>

                  {/* Location Title (Exact matching Image 1: bold black/charcoal #202020) */}
                  <h3 className="font-['Josefin_Sans',sans-serif] font-bold text-[24px] sm:text-[28px] text-[#202020] leading-tight mb-2">
                    {loc.name}
                  </h3>

                  {/* Description */}
                  <p className="font-['Josefin_Sans',sans-serif] text-[15px] sm:text-[16px] leading-[1.5] text-[#202020] mb-5 font-normal">
                    {loc.desc}
                  </p>
                </div>

                {/* View More Button (hover goes green #366732 as on live site) */}
                <Link
                  href={loc.link}
                  className="inline-block bg-[#F68422] hover:bg-[#366732] text-white px-6 py-2.5 rounded-[6px] font-['Josefin_Sans',sans-serif] font-bold text-[18px] transition-colors duration-200 shadow-sm"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
