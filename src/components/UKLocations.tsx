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
    <section className="py-14 sm:py-20 bg-[#ECE6DF]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-ivymode text-2xl sm:text-3xl lg:text-[32px] font-semibold tracking-[1px] uppercase text-[#344E41]">
            OUR LOCATIONS IN THE UK
          </h2>
        </div>

        {/* 3 Locations Horizontal Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[10px] p-2.5 sm:p-3 shadow-xs hover:scale-[1.01] hover:shadow-[2px_0px_9px_1px_rgba(245,133,34,0.59)] transition-all duration-300 flex flex-col sm:flex-row items-stretch overflow-hidden"
            >
              {/* Left Side: Restaurant Image */}
              <div className="relative w-full sm:w-[48%] min-h-[220px] sm:min-h-[245px] rounded-[6px] overflow-hidden shrink-0 bg-gray-100">
                <Image
                  src={loc.image}
                  alt={`Arya Bhavan ${loc.name}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 220px"
                />
              </div>

              {/* Right Side: Details & View More Button */}
              <div className="w-full sm:w-[52%] p-3 sm:p-3.5 flex flex-col justify-between items-start">
                <div>
                  {/* Pin Icon Badge */}
                  <div className="w-[42px] h-[42px] rounded-full bg-[#EAEDEC] text-[#344B42] flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5 text-[#344B42] stroke-[2]" />
                  </div>

                  {/* Location Title */}
                  <h3 className="font-josefin font-bold text-[22px] sm:text-[24px] text-black leading-tight mb-2">
                    {loc.name}
                  </h3>

                  {/* Description */}
                  <p className="font-josefin text-[14px] sm:text-[15px] leading-relaxed text-[#737373] mb-4">
                    {loc.desc}
                  </p>
                </div>

                {/* View More Button (hover goes green #366732 as on live site) */}
                <Link
                  href={loc.link}
                  className="inline-block bg-[#F68422] hover:bg-[#366732] text-white px-5 py-2 rounded font-josefin font-semibold text-[15px] sm:text-[16px] transition-colors duration-200"
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
