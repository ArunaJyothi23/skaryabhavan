import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Utensils } from 'lucide-react';
import menuData from '@/data/menu.json';

export default function TopFood() {
  // Select top 8 bestsellers with valid images
  const specials = menuData
    .filter(item => item.image && item.bestseller)
    .slice(0, 8);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#c45c26] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Signature Dishes
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-gray-900 tracking-tight">
              Chef Specials & Customer Favorites
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl">
              Handcrafted with stone-ground batter, heritage spices, and pure ghee. Explore the most celebrated dishes from our kitchen.
            </p>
          </div>

          <Link href="/menu" className="btn-3d-secondary text-xs sm:text-sm py-2.5 px-5 shrink-0">
            View All 200+ Dishes &rarr;
          </Link>
        </div>

        {/* Specials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specials.map((dish) => (
            <div
              key={dish.id}
              className="rounded-3xl border border-gray-100 bg-[#fdfaf6] p-4 flex flex-col justify-between hover:shadow-xl hover:border-amber-200 transition-all duration-300 group"
            >
              <div>
                {/* Dish Image */}
                <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-white mb-4 border border-gray-100">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 right-2.5">
                    <span className="text-xs font-extrabold text-[#c45c26] bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-xs border border-orange-100">
                      {dish.price}
                    </span>
                  </div>
                </div>

                {/* Dietary Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {dish.vegan && <span className="badge-veg">Vegan</span>}
                  {dish.glutenFree && <span className="badge-gluten-free">Gluten-Free</span>}
                  {dish.jain && <span className="badge-jain">Jain Available</span>}
                </div>

                {/* Title & Description */}
                <h3 className="font-serif font-bold text-base text-gray-900 line-clamp-1 group-hover:text-[#c45c26] transition-colors">
                  {dish.name}
                </h3>
                <p className="text-xs text-gray-600 mt-1 line-clamp-2 leading-relaxed">
                  {dish.description}
                </p>
              </div>

              {/* Order CTA */}
              <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center justify-between">
                <span className="text-[11px] font-medium text-gray-500">{dish.category}</span>
                <Link
                  href="/menu"
                  className="text-xs font-bold text-[#c45c26] hover:underline flex items-center gap-1"
                >
                  <Utensils className="w-3 h-3" /> Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
