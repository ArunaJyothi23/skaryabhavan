'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import menuCategoriesData from '@/data/exact_menu_categories.json';

const categories = [
  'South Indian Staters',
  'North Indian Staters',
  'Meals',
  'Roti / Parotta',
  'Chef Special Dosa',
  'Dosa',
  'Uthappam',
  'Rava Dosa',
  'Millet Dosas',
  'Curries',
  'Basmati',
  'Bread',
  'Indo–Chines Staters',
  'Noodles & Rice',
  'Momos',
  'Deserts'
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('South Indian Staters');
  const [selectedDietary, setSelectedDietary] = useState<string | null>(null);

  const dishesForCategory = (menuCategoriesData as Record<string, any[]>)[activeCategory] || [];

  // Filter by dietary if clicked
  const filteredDishes = dishesForCategory.filter((dish) => {
    if (!selectedDietary) return true;
    const title = dish.titleText || '';
    if (selectedDietary === 'G') return title.includes('G');
    if (selectedDietary === 'J') return title.includes('J');
    if (selectedDietary === 'V') return title.includes('V');
    if (selectedDietary === 'N') return title.includes('N');
    return true;
  });

  return (
    <main className="bg-white min-h-screen">
      
      {/* 1. Menu Top Hero Banner (Exact from Screenshot 1) */}
      <section className="relative w-full h-72 sm:h-96 bg-black overflow-hidden flex items-center justify-center">
        <Image
          src="/images/migrated/WhatsApp-Image-2025-12-08-at-14.51.18-e1765205112699.jpeg"
          alt="Samko Arya Bhavan Menu"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Hero Title & Subtitle */}
        <div className="relative z-10 text-center px-4 space-y-2">
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-white tracking-wide">
            Menu
          </h1>
          <p className="text-base sm:text-xl font-light text-white tracking-wider">
            London | Wembley | Tooting | Barking
          </p>
        </div>
      </section>

      {/* 2. Main Menu Body Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Dietary Legend Pills (Exact from Screenshot 2) */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {/* Gluten Free */}
          <button
            onClick={() => setSelectedDietary(selectedDietary === 'G' ? null : 'G')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide flex items-center gap-2 border transition-all ${
              selectedDietary === 'G'
                ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                : 'bg-white text-blue-700 border-blue-600 hover:bg-blue-50'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-blue-700 text-white flex items-center justify-center text-[11px] font-black">
              G
            </span>
            GLUTEN FREE
          </button>

          {/* Jain */}
          <button
            onClick={() => setSelectedDietary(selectedDietary === 'J' ? null : 'J')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide flex items-center gap-2 border transition-all ${
              selectedDietary === 'J'
                ? 'bg-amber-500 text-white border-amber-500 shadow-md'
                : 'bg-white text-amber-600 border-amber-500 hover:bg-amber-50'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[11px] font-black">
              J
            </span>
            JAIN
          </button>

          {/* Vegan */}
          <button
            onClick={() => setSelectedDietary(selectedDietary === 'V' ? null : 'V')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide flex items-center gap-2 border transition-all ${
              selectedDietary === 'V'
                ? 'bg-green-600 text-white border-green-600 shadow-md'
                : 'bg-white text-green-700 border-green-600 hover:bg-green-50'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-green-600 text-white flex items-center justify-center text-[11px] font-black">
              V
            </span>
            VEGAN
          </button>

          {/* Contain Nuts */}
          <button
            onClick={() => setSelectedDietary(selectedDietary === 'N' ? null : 'N')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide flex items-center gap-2 border transition-all ${
              selectedDietary === 'N'
                ? 'bg-red-600 text-white border-red-600 shadow-md'
                : 'bg-white text-red-600 border-red-500 hover:bg-red-50'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[11px] font-black">
              N
            </span>
            CONTAIN NUTS
          </button>

          {/* Ask for Vegan */}
          <div className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide flex items-center gap-2 border border-gray-400 text-gray-700 bg-white">
            <span className="w-5 h-5 rounded-full bg-gray-500 text-white flex items-center justify-center text-[11px] font-black">
              ?
            </span>
            Ask for VEGAN
          </div>
        </div>

        {/* Category Pills (Exact 2 Rows from Screenshot 2) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedDietary(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-xs ${
                  isActive
                    ? 'bg-[#c4c4c4] text-gray-900 font-bold border-2 border-gray-400'
                    : 'bg-[#2e5b30] text-white hover:bg-[#254b27] border-2 border-transparent'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Active Category Title & Counter */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-3 pt-2">
          <h2 className="font-serif font-bold text-xl text-[#344e41]">
            {activeCategory} ({filteredDishes.length})
          </h2>
          {selectedDietary && (
            <button
              onClick={() => setSelectedDietary(null)}
              className="text-xs text-[#6d1007] font-bold hover:underline"
            >
              Clear Dietary Filter
            </button>
          )}
        </div>

        {/* 4-Column Dish Cards Grid (Exact from Screenshots 2, 3, 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {filteredDishes.map((dish, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border-2 border-[#d4d4d4] hover:border-[#f68422] p-3 flex items-center gap-3 shadow-xs hover:shadow-md transition-all duration-200"
            >
              {/* Left: Circular Image (Exact from Screenshots) */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 bg-gray-50 border border-gray-200">
                {dish.image ? (
                  <Image
                    src={dish.image}
                    alt={dish.titleText}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-300 font-bold text-xs">
                    AB
                  </div>
                )}
              </div>

              {/* Right: Title & Description (Exact with Colored Badges) */}
              <div className="flex-1 min-w-0">
                <h3
                  className="font-serif font-bold text-[14px] sm:text-[15px] text-gray-900 leading-snug truncate"
                  dangerouslySetInnerHTML={{ __html: dish.titleHtml }}
                />
                <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed font-sans">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
