import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-wide uppercase text-[#344e41]">
            OUR LOCATIONS IN THE UK
          </h2>
        </div>

        {/* 3 Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-gray-50">
                  <Image
                    src={loc.image}
                    alt={`Arya Bhavan ${loc.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-serif font-bold text-xl text-gray-900 mb-2">
                    {loc.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {loc.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={loc.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6d1007] hover:text-[#c4a05a] group-hover:translate-x-1 transition-all"
                >
                  View More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
