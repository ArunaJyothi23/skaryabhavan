import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const galleryDishes = [
  { name: 'Masala Dosa', img: '/images/migrated/MASALA-DOSA-V-G.png' },
  { name: 'Medu Vadai', img: '/images/migrated/MEDU-VADAI-V-G.png' },
  { name: 'Sambar Vadai', img: '/images/migrated/SAMBAR-VADAI-V-G.png' },
  { name: 'Idly Combo', img: '/images/migrated/IDLY-V-G.png' },
  { name: 'Curd Vadai', img: '/images/migrated/CURD-VADAI-G.png' },
  { name: 'Gobi 65', img: '/images/migrated/GOBI-65-V-G.png' }
];

export default function FoodGallery() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-wide uppercase text-[#344e41]">
            South Indian Dosas, Idlis & More
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 font-sans">
            Prepared daily with fermented stone-ground batter, rich pure ghee, and authentic spices.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryDishes.map((dish, idx) => (
            <Link
              key={idx}
              href="/menu"
              className="bg-[#fdfaf6] rounded-2xl p-3 border border-gray-100 hover:border-[#c4a05a] hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-2">
                <Image
                  src={dish.img}
                  alt={dish.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="font-serif font-semibold text-xs text-gray-800 group-hover:text-[#6d1007]">
                {dish.name}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
