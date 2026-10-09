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
          <h2 className="font-ivymode text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-[1px] uppercase text-[#344E41]">
            OUR LOCATIONS IN THE UK
          </h2>
        </div>

        {/* 3 Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 lg:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Location Image */}
                <div className="relative h-56 w-full rounded-xl overflow-hidden mb-5 bg-gray-100">
                  <Image
                    src={loc.image}
                    alt={`Arya Bhavan ${loc.name}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                </div>

                {/* Pin Icon Badge */}
                <div className="w-10 h-10 rounded-full bg-[#E5ECE9] text-[#344E41] flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 stroke-[1.8]" />
                </div>

                {/* Location Title */}
                <h3 className="font-ivymode font-bold text-2xl text-gray-900 mb-2">
                  {loc.name}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6">
                  {loc.desc}
                </p>
              </div>

              {/* View More Orange Button */}
              <div>
                <Link
                  href={loc.link}
                  className="inline-block bg-[#F6851C] hover:bg-[#e07513] text-white px-6 py-2.5 rounded font-semibold text-sm transition-colors duration-200"
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
