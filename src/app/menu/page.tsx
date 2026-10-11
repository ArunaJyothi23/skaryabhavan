'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import menuCategoriesData from '@/data/exact_menu_categories.json';

// Exact Two Rows of Categories from Live Site (Screenshots 1 & 3)
const categoryRow1 = [
  'South Indian Staters',
  'North Indian Staters',
  'Meals',
  'Roti / Parotta',
  'Chef Special Dosa',
  'Dosa',
  'Uthappam'
];

const categoryRow2 = [
  'Rava Dosa',
  'Millet Dosas',
  'Curries',
  'Basmati',
  'Bread',
  'Indo-Chines Staters',
  'Noodles & Rice',
  'Momos',
  'Deserts'
];

// Helper to keep dietary badges strictly grouped together on one line (Fixes Image 5 wrapping issue)
function formatDishTitleHtml(titleHtml: string): string {
  if (!titleHtml) return '';
  // Clean up any extra spacing inside parentheses
  const cleaned = titleHtml.replace(/\(\s+/g, '(').replace(/\s+\)/g, ')');
  // Wrap parentheses containing dietary spans in inline-block whitespace-nowrap
  return cleaned.replace(
    /\s*(\([^\)]*<span[^>]*>[^\)]*\))/g,
    ' <span class="inline-block whitespace-nowrap">$1</span>'
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('South Indian Staters');
  const [selectedDietary, setSelectedDietary] = useState<string | null>(null);

  // Safe lookup supporting both hyphen and en-dash for Indo-Chines Staters
  const menuMap = menuCategoriesData as Record<string, any[]>;
  const dishesForCategory =
    menuMap[activeCategory] ||
    menuMap[activeCategory.replace('-', '–')] ||
    menuMap[activeCategory.replace('–', '-')] ||
    [];

  // Filter by dietary tag if selected
  const filteredDishes = dishesForCategory.filter((dish) => {
    if (!selectedDietary) return true;
    const title = dish.titleText || '';
    if (selectedDietary === 'G') return title.includes('G');
    if (selectedDietary === 'J') return title.includes('J');
    if (selectedDietary === 'V') return title.includes('V');
    if (selectedDietary === 'N') return title.includes('N');
    return true;
  });

  const renderCategoryButton = (cat: string) => {
    const isActive = activeCategory === cat;
    return (
      <button
        key={cat}
        onClick={() => {
          setActiveCategory(cat);
          setSelectedDietary(null);
        }}
        className={`px-3.5 sm:px-4 py-1.5 rounded-[9px] text-[15px] sm:text-[17px] transition-colors duration-200 cursor-pointer font-josefin ${
          isActive
            ? 'bg-[#BDBDBD] text-black font-bold'
            : 'bg-[#366732] text-white font-semibold hover:bg-[#E1E1E1] hover:text-black'
        }`}
      >
        {cat}
      </button>
    );
  };

  return (
    <main className="bg-white min-h-screen">
      
      {/* 1. Hero Banner (Exact from Live Site Screenshot 1 & Elementor Settings) */}
      <section className="relative w-full h-[360px] sm:h-[440px] lg:h-[490px] bg-black overflow-hidden flex items-center justify-center">
        <Image
          src="/images/migrated/WhatsApp-Image-2025-12-08-at-14.51.18-e1765205112699.jpeg"
          alt="Samko Arya Bhavan Menu"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Subtle Overlay to match Screenshot 1 while keeping dosa colors vivid */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Hero Title & Subtitle */}
        <div className="relative z-10 text-center px-4">
          <h1 className="font-josefin text-4xl sm:text-5xl lg:text-[42px] font-semibold text-white tracking-wide drop-shadow-md">
            Menu
          </h1>
          <p className="font-josefin text-lg sm:text-xl lg:text-[24px] font-normal text-white tracking-wider mt-2.5 drop-shadow-md">
            London | Wembley | Tooting | Barking
          </p>
        </div>
      </section>

      {/* 2. Main Menu Container (Spacious 1550px matching Live Elementor boxed_width: 1600px) */}
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        
        {/* Dietary Legend Pills (Exact HTML/CSS from Live Site Screenshot 1 & 2) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6 font-josefin">
          {/* GLUTEN FREE */}
          <button
            onClick={() => setSelectedDietary(selectedDietary === 'G' ? null : 'G')}
            className={`flex items-center gap-2 py-1.5 pr-3.5 pl-1.5 rounded-full text-[13px] sm:text-[14px] font-semibold bg-[#f5f5f5] whitespace-nowrap cursor-pointer transition-all duration-200 border-2 ${
              selectedDietary === 'G' ? 'border-[#2f4fa3] ring-2 ring-[#2f4fa3]' : 'border-[#2f4fa3]'
            }`}
          >
            <span className="w-6 h-6 rounded-full bg-[#2f4fa3] text-white flex items-center justify-center text-[12px] font-bold shrink-0">
              G
            </span>
            <span className="text-[#2f4fa3]">GLUTEN FREE</span>
          </button>

          {/* JAIN */}
          <button
            onClick={() => setSelectedDietary(selectedDietary === 'J' ? null : 'J')}
            className={`flex items-center gap-2 py-1.5 pr-3.5 pl-1.5 rounded-full text-[13px] sm:text-[14px] font-semibold bg-[#f5f5f5] whitespace-nowrap cursor-pointer transition-all duration-200 border-2 ${
              selectedDietary === 'J' ? 'border-[#f39c12] ring-2 ring-[#f39c12]' : 'border-[#f39c12]'
            }`}
          >
            <span className="w-6 h-6 rounded-full bg-[#f39c12] text-white flex items-center justify-center text-[12px] font-bold shrink-0">
              J
            </span>
            <span className="text-[#f39c12]">JAIN</span>
          </button>

          {/* VEGAN */}
          <button
            onClick={() => setSelectedDietary(selectedDietary === 'V' ? null : 'V')}
            className={`flex items-center gap-2 py-1.5 pr-3.5 pl-1.5 rounded-full text-[13px] sm:text-[14px] font-semibold bg-[#f5f5f5] whitespace-nowrap cursor-pointer transition-all duration-200 border-2 ${
              selectedDietary === 'V' ? 'border-[#2e7d32] ring-2 ring-[#2e7d32]' : 'border-[#2e7d32]'
            }`}
          >
            <span className="w-6 h-6 rounded-full bg-[#2e7d32] text-white flex items-center justify-center text-[12px] font-bold shrink-0">
              V
            </span>
            <span className="text-[#2e7d32]">VEGAN</span>
          </button>

          {/* CONTAIN NUTS */}
          <button
            onClick={() => setSelectedDietary(selectedDietary === 'N' ? null : 'N')}
            className={`flex items-center gap-2 py-1.5 pr-3.5 pl-1.5 rounded-full text-[13px] sm:text-[14px] font-semibold bg-[#f5f5f5] whitespace-nowrap cursor-pointer transition-all duration-200 border-2 ${
              selectedDietary === 'N' ? 'border-[#e53935] ring-2 ring-[#e53935]' : 'border-[#e53935]'
            }`}
          >
            <span className="w-6 h-6 rounded-full bg-[#e53935] text-white flex items-center justify-center text-[12px] font-bold shrink-0">
              N
            </span>
            <span className="text-[#e53935]">CONTAIN NUTS</span>
          </button>

          {/* ASK FOR VEGAN */}
          <div className="flex items-center gap-2 py-1.5 pr-3.5 pl-1.5 rounded-full text-[13px] sm:text-[14px] font-semibold bg-[#f5f5f5] whitespace-nowrap border-2 border-[#6e6e6e]">
            <span className="w-6 h-6 rounded-full bg-[#6e6e6e] text-white flex items-center justify-center text-[12px] font-bold shrink-0">
              ?
            </span>
            <span className="text-[#6e6e6e]">Ask for VEGAN</span>
          </div>
        </div>

        {/* Category Tabs: Exact 2 Rows from Screenshots 1 & 3 */}
        <div className="flex flex-col gap-2.5 items-center justify-center mb-8">
          {/* Row 1: 7 categories ending with Uthappam */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {categoryRow1.map(renderCategoryButton)}
          </div>
          {/* Row 2: 9 categories starting with Rava Dosa and ending with Deserts */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {categoryRow2.map(renderCategoryButton)}
          </div>
        </div>

        {/* 4-Column Dish Cards Grid (Exact from Screenshots 1, 2, 3, 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredDishes.map((dish, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[10px] border-2 border-[#BBBBBB] p-2 sm:p-2.5 flex items-center gap-3 hover:bg-[#ECECEC] transition-colors duration-200 cursor-pointer"
            >
              {/* Left: Circular Image */}
              <div className="relative w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-full overflow-hidden shrink-0 bg-transparent">
                {dish.image ? (
                  <Image
                    src={dish.image}
                    alt={dish.titleText || 'Dish'}
                    fill
                    className="object-cover"
                    sizes="60px"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold text-xs bg-gray-100">
                    AB
                  </div>
                )}
              </div>

              {/* Right: Title & Description (Strictly Josefin Sans bold font with colored dietary badges) */}
              <div className="flex-1 min-w-0">
                <div
                  className="font-josefin font-bold text-[15px] sm:text-[17px] text-black leading-snug tracking-tight"
                  dangerouslySetInnerHTML={{ __html: formatDishTitleHtml(dish.titleHtml) }}
                />
                {dish.description && (
                  <p className="font-josefin font-normal text-[13px] sm:text-[14px] text-[#737373] mt-1 line-clamp-2 leading-snug">
                    {dish.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
