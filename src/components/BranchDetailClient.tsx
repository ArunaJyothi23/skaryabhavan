'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Clock, 
  ExternalLink 
} from 'lucide-react';
import centralLondonMenuData from '@/data/centralLondonMenu.json';
import { BranchData } from '@/data/branchesDetailedData';

interface MenuItem {
  title: string;
  desc: string;
  img?: string;
}

interface MenuCategory {
  category: string;
  itemsCount: number;
  items: MenuItem[];
}

function DeliveryScooterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>
  );
}

export default function BranchDetailClient({ branch }: { branch: BranchData }) {
  const categories = centralLondonMenuData as MenuCategory[];
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [faqImageIndex, setFaqImageIndex] = useState(0);

  const activeCategory = categories[activeCategoryIndex] || categories[0];

  const faqCarouselImages = [
    '/images/migrated/thali2.jpg',
    '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-10.jpeg',
    '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-6.jpeg',
    '/images/migrated/WhatsApp-Image-2025-12-09-at-17.33.13.jpeg',
    '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-14.jpeg',
    '/images/migrated/South-indian.jpg'
  ];

  // Auto transition carousel every 5 seconds (5000ms) matching Elementor background_slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setFaqImageIndex((prev) => (prev + 1) % faqCarouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [faqCarouselImages.length]);

  const introFeatures = [
    {
      title: 'Traditional recipes',
      img: '/images/migrated/Screenshot-2026-02-25-103420.png',
    },
    {
      title: 'Freshly prepared daily',
      img: '/images/migrated/Screenshot-2026-02-25-103428.png',
    },
    {
      title: 'Family friendly dining',
      img: '/images/migrated/Screenshot-2026-02-25-103446.png',
    },
    {
      title: 'Vegan & Jain friendly',
      img: '/images/migrated/Screenshot-2026-02-25-103437.png',
    },
  ];

  const whyGuestsLove = [
    {
      title: 'Authentic Taste',
      desc: 'Prepared by Indian cooking techniques',
      img: '/images/migrated/Screenshot-2026-02-25-104846-e1774635366152.png'
    },
    {
      title: 'Pure Vegetarian',
      desc: '100% pure – completely vegetarian kitchen',
      img: '/images/migrated/Screenshot-2026-02-25-104933.png'
    },
    {
      title: 'Fresh Batter Daily',
      desc: 'Idli & dosa batter fermented fresh every day',
      img: '/images/migrated/Screenshot-2026-02-25-104922.png'
    },
    {
      title: 'Diet Friendly',
      desc: 'Vegan & Jain friendly menu available',
      img: '/images/migrated/Screenshot-2026-02-25-104933.png'
    },
    {
      title: 'Family Friendly',
      desc: 'Comfortable atmosphere for all age groups',
      img: '/images/migrated/Screenshot-2026-02-25-104939.png'
    },
    {
      title: 'Central Location',
      desc: 'Convenient transport links and local parking',
      img: '/images/migrated/Screenshot-2026-02-25-104947.png'
    }
  ];

  const whatWeOffer = [
    {
      title: '100% Vegetarian Kitchen',
      svg: (
        <svg className="w-9 h-9" viewBox="0 0 576 512" fill="currentColor">
          <path d="M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z" />
        </svg>
      )
    },
    {
      title: 'Vegan Options Available',
      svg: (
        <svg className="w-9 h-9" viewBox="0 0 1024 1024" fill="currentColor">
          <path d="M934.4 592c-32-22.4-67.2-16-96-9.6-6.4 0-9.6 3.2-16 3.2-54.4-118.4-112-310.4 16-441.6 9.6-9.6 12.8-22.4 6.4-35.2s-16-19.2-28.8-19.2c-70.4 0-134.4 12.8-201.6 35.2C576 86.4 467.2 0 352 0 214.4 0 80 131.2 73.6 137.6S64 150.4 64 160c0 9.6 3.2 16 9.6 22.4s121.6 118.4 249.6 134.4c-60.8 73.6-115.2 166.4-128 265.6h-6.4c-28.8-6.4-64-12.8-96 12.8C32 636.8 0 700.8 0 771.2 0 892.8 99.2 992 224 992s224-99.2 224-220.8c0-70.4-35.2-134.4-89.6-179.2-32-22.4-67.2-16-96-9.6h-3.2c16-105.6 89.6-208 156.8-272 102.4-25.6 188.8-105.6 208-124.8 41.6-16 80-25.6 121.6-32-70.4 108.8-67.2 256 3.2 425.6-25.6-3.2-57.6-6.4-86.4 12.8C608 636.8 576 700.8 576 771.2 576 892.8 675.2 992 800 992s224-99.2 224-220.8c0-70.4-35.2-137.6-89.6-179.2zm-659.2 51.2c25.6-6.4 38.4-6.4 44.8 0C361.6 672 384 720 384 768c0 86.4-70.4 156.8-160 156.8S64 854.4 64 768c0-51.2 22.4-96 64-124.8 3.2-3.2 9.6-3.2 16-3.2s16 3.2 32 3.2c16 3.2 32 6.4 51.2 6.4 16 0 32-3.2 48-6.4zM352 256c-83.2 0-166.4-60.8-208-96 41.6-35.2 128-96 208-96 83.2 0 166.4 60.8 208 96-41.6 35.2-124.8 96-208 96zm448 672c-89.6 0-160-70.4-160-156.8 0-51.2 22.4-96 64-124.8 3.2-3.2 9.6-3.2 16-3.2s16 3.2 32 3.2c16 3.2 32 6.4 51.2 6.4H812.8c12.8 0 25.6-3.2 38.4-6.4 25.6-6.4 38.4-6.4 44.8 0 41.6 28.8 64 76.8 64 124.8 0 86.4-70.4 156.8-160 156.8z" />
        </svg>
      )
    },
    {
      title: 'Jain Friendly Dishes',
      svg: (
        <svg className="w-9 h-9" viewBox="0 0 1024 1024" fill="currentColor">
          <path d="M608 288c-19.2 0-32 12.8-32 32v128h-32V320c0-19.2-12.8-32-32-32s-32 12.8-32 32v128h-32V320c0-19.2-12.8-32-32-32s-32 12.8-32 32v128c0 35.2 28.8 64 64 64h32v96h-32c-19.2 0-32 12.8-32 32v160c0 54.4 41.6 96 96 96s96-41.6 96-96V640c0-19.2-12.8-32-32-32h-32v-96h32c35.2 0 64-28.8 64-64V320c0-19.2-12.8-32-32-32zm-64 512c0 19.2-12.8 32-32 32s-32-12.8-32-32V672h64v128zm384 192V96c0-19.2-12.8-32-32-32H736V32c0-19.2-12.8-32-32-32s-32 12.8-32 32v32H544V32c0-19.2-12.8-32-32-32s-32 12.8-32 32v32H352V32c0-19.2-12.8-32-32-32s-32 12.8-32 32v32H128c-19.2 0-32 12.8-32 32v896c0 19.2 12.8 32 32 32h768c19.2 0 32-12.8 32-32zm-64-32H160V128h128v32c0 19.2 12.8 32 32 32s32-12.8 32-32v-32h128v32c0 19.2 12.8 32 32 32s32-12.8 32-32v-32h128v32c0 19.2 12.8 32 32 32s32-12.8 32-32v-32h128v832z" />
        </svg>
      )
    },
    {
      title: 'Fresh Filter Coffee',
      svg: (
        <svg className="w-9 h-9" viewBox="0 0 1024 1024" fill="currentColor">
          <path d="M416 32v96c0 19.2 12.8 32 32 32s32-12.8 32-32V32c0-19.2-12.8-32-32-32s-32 12.8-32 32zM256 96v96c0 19.2 12.8 32 32 32s32-12.8 32-32V96c0-19.2-12.8-32-32-32s-32 12.8-32 32zm320 0v96c0 19.2 12.8 32 32 32s32-12.8 32-32V96c0-19.2-12.8-32-32-32s-32 12.8-32 32zM0 864c0 89.6 70.4 160 160 160h576c89.6 0 160-70.4 160-160 0-19.2-12.8-32-32-32H659.2c86.4-57.6 147.2-150.4 166.4-256H864c54.4 0 96-41.6 96-96V320c0-19.2-12.8-32-32-32H96c-19.2 0-32 12.8-32 32v192c0 134.4 67.2 249.6 172.8 320H32c-19.2 0-32 12.8-32 32zm896-384c0 19.2-12.8 32-32 32h-32V352h64v128zm-768 32V352h640v160c0 176-144 320-320 320S128 688 128 512zm697.6 384c-12.8 38.4-48 64-89.6 64H160c-41.6 0-76.8-25.6-89.6-64h755.2z" />
        </svg>
      )
    },
    {
      title: 'Live Dosa Catering',
      svg: (
        <svg className="w-9 h-9" viewBox="0 0 1024 1024" fill="currentColor">
          <path d="M512 160c-195.2 0-352 156.8-352 352s156.8 352 352 352 352-156.8 352-352-156.8-352-352-352zm0 640c-160 0-288-128-288-288s128-288 288-288 288 128 288 288-128 288-288 288zm0-800C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zm0 960C265.6 960 64 758.4 64 512S265.6 64 512 64s448 201.6 448 448-201.6 448-448 448z" />
        </svg>
      )
    },
    {
      title: 'Outdoor Catering Service',
      svg: (
        <svg className="w-9 h-9" viewBox="0 0 1024 1024" fill="currentColor">
          <path d="M448 544h128c19.2 0 32-12.8 32-32s-12.8-32-32-32H448c-19.2 0-32 12.8-32 32s12.8 32 32 32zm544-192h-57.6C864 246.4 758.4 176 640 144V32c0-19.2-12.8-32-32-32H416c-19.2 0-32 12.8-32 32v112C265.6 176 160 246.4 89.6 352H32c-19.2 0-32 12.8-32 32s12.8 32 32 32h32v32c0 182.4 108.8 339.2 265.6 409.6L259.2 976c-6.4 16-3.2 35.2 12.8 44.8 3.2 3.2 9.6 3.2 16 3.2 9.6 0 22.4-6.4 28.8-16l76.8-128c38.4 9.6 76.8 16 118.4 16s80-6.4 118.4-16l76.8 128c6.4 9.6 16 16 28.8 16 6.4 0 12.8 0 16-3.2 16-9.6 19.2-28.8 9.6-44.8l-70.4-118.4C851.2 787.2 960 630.4 960 448v-32h32c19.2 0 32-12.8 32-32s-12.8-32-32-32zM448 64h128v67.2c-22.4-3.2-41.6-3.2-64-3.2s-41.6 0-64 3.2V64zm64 128c134.4 0 259.2 57.6 342.4 160H169.6c83.2-102.4 208-160 342.4-160zm384 256c0 211.2-172.8 384-384 384S128 659.2 128 448v-32h768v32z" />
        </svg>
      )
    }
  ];

  // Helper to colorize dietary symbols in dish title e.g. (V G J N) exactly as on live site
  const renderDishTitle = (title: string) => {
    const regex = /\(([^)]+)\)/g;
    const parts = [];
    let lastIdx = 0;
    let match;

    while ((match = regex.exec(title)) !== null) {
      if (match.index > lastIdx) {
        parts.push(title.substring(lastIdx, match.index));
      }
      const tagsStr = match[1];
      const tags = tagsStr.split(/[\s,]+/);

      parts.push(
        <span key={match.index} className="inline-flex items-center gap-1 ml-1 text-[13px] font-bold">
          <span>(</span>
          {tags.map((t, ti) => {
            let color = 'text-gray-600';
            if (t.includes('V')) color = 'text-[#16a34a]';
            else if (t.includes('G')) color = 'text-[#1d4ed8]';
            else if (t.includes('J')) color = 'text-[#d97706]';
            else if (t.includes('N')) color = 'text-[#dc2626]';
            else if (t.includes('?')) color = 'text-[#7c3aed]';
            return (
              <span key={ti} className={color}>
                {t}
              </span>
            );
          })}
          <span>)</span>
        </span>
      );
      lastIdx = regex.lastIndex;
    }

    if (lastIdx < title.length) {
      parts.push(title.substring(lastIdx));
    }

    return parts;
  };

  return (
    <div className="min-h-screen bg-white font-['Josefin_Sans',sans-serif] text-[#202020] overflow-x-hidden">
      
      {/* 1. HERO SECTION (Only when branch has hero enabled) */}
      {branch.hasHero !== false && (
        <section className="relative w-full h-[520px] sm:h-[640px] lg:h-[800px] select-none overflow-hidden bg-black">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={branch.hero.bgImage}
              alt={`${branch.hero.titleLine1} ${branch.hero.titleLine2}`}
              fill
              sizes="100vw"
              className="object-cover"
              priority
              quality={95}
            />
            {/* Subtle overlay keeping images bright, vivid, and clearly visible */}
            <div className="absolute inset-0 bg-black/15" />
          </div>

          {/* Live slide copy begins 40% down matching live site */}
          <div className="absolute left-[8%] sm:left-[40px] lg:left-[84px] top-[38%] sm:top-[40%] z-20 max-w-[90%] sm:max-w-[700px] lg:max-w-[800px] text-left">
            <h1 className="m-0 font-['Josefin_Sans',sans-serif] text-[22px] sm:text-[26px] lg:text-[30px] font-semibold uppercase leading-[1.4] tracking-normal text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
              {branch.hero.titleLine1}<br />
              {branch.hero.titleLine2}
            </h1>

            <p className="font-['Josefin_Sans',sans-serif] text-[15px] sm:text-[20px] lg:text-[24px] font-semibold text-white tracking-[2px] leading-[1.25] mt-4 sm:mt-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
              {branch.hero.subtitle}
            </p>

            <div className="pt-6 sm:pt-8">
              <a
                href={branch.hero.orderUrl || 'https://onlineordering.skaryabhavan.com/popmenu-order'}
                target={branch.hero.orderUrl?.startsWith('http') ? '_blank' : undefined}
                rel={branch.hero.orderUrl?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="btn-hero-menu cursor-pointer inline-block"
              >
                {branch.hero.buttonText || 'Online Order'}
              </a>
            </div>
          </div>
        </section>
      )}

      {/* 2. INTRODUCTION SECTION (Exact 50/50 full-bleed left flush matching live site) */}
      <section className="w-full bg-white pt-0 pb-12 lg:pb-16 overflow-hidden">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            
            {/* Left: Interior Photo full-bleed flush to left edge, no gap, sharp corners */}
            <div className="w-full flex">
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-auto min-h-[480px] lg:min-h-[620px] overflow-hidden rounded-none">
                <Image
                  src={branch.intro.image}
                  alt={branch.intro.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right: Content & 4 Feature Badges with exact live site typography */}
            <div className="px-6 sm:px-10 lg:pl-10 lg:pr-[30px] xl:pr-[50px] py-8 lg:py-12 flex flex-col justify-center">
              {branch.intro.heading === 'AUTHENTIC SOUTH INDIAN VEGETARIAN RESTAURANT IN BRUSSELS' ? (
                <h2 className="font-ivymode text-[22px] sm:text-[25px] lg:text-[27px] xl:text-[29px] font-semibold text-[#344E41] uppercase tracking-[0.5px] leading-tight lg:leading-[44px] mb-5">
                  AUTHENTIC SOUTH INDIAN<br className="hidden sm:inline" />
                  <span className="inline lg:whitespace-nowrap">VEGETARIAN RESTAURANT IN BRUSSELS</span>
                </h2>
              ) : (
                <h2 className="font-ivymode text-[22px] sm:text-[25px] lg:text-[27px] xl:text-[29px] font-semibold text-[#344E41] uppercase tracking-[0.5px] leading-tight lg:leading-[44px] mb-5">
                  {branch.intro.heading}
                </h2>
              )}
              
              <p className="font-['Josefin_Sans',sans-serif] text-[17px] sm:text-[18px] leading-[1.65] text-[#000000] mb-4">
                {branch.intro.p1}
              </p>
              
              <p className="font-['Josefin_Sans',sans-serif] text-[17px] sm:text-[18px] leading-[1.65] text-[#000000] mb-4">
                {branch.intro.p2}
              </p>

              {branch.intro.p3 && (
                <p className="font-['Josefin_Sans',sans-serif] text-[17px] sm:text-[18px] leading-[1.65] text-[#000000] mb-4">
                  {branch.intro.p3}
                </p>
              )}

              {branch.intro.p4 && (
                <p className="font-['Josefin_Sans',sans-serif] text-[17px] sm:text-[18px] leading-[1.65] text-[#000000] mb-4">
                  {branch.intro.p4}
                </p>
              )}

              {/* 4 Feature Badges (2x2 Grid) with exact #EBE6E0 background & hover shadow */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {introFeatures.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3.5 p-3.5 rounded-[10px] bg-[#EBE6E0] transition-all duration-300 hover:shadow-[1px_1px_8px_1px_#F68422] cursor-pointer"
                  >
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        sizes="48px"
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[17px] font-bold text-[#000000]">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR MENU SECTION */}
      <section id="menu" className="py-14 lg:py-20 bg-[#FAF8F5] border-t border-gray-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-[700px] mx-auto mb-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal uppercase tracking-wider text-[#344E41]">
              OUR MENU
            </h2>
          </div>

          {/* Dietary Legend Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-sm mb-8">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2b59c3] bg-white text-[#1e3a8a] font-semibold text-xs sm:text-sm shadow-xs">
              <span className="w-5 h-5 rounded-full bg-[#1e40af] text-white flex items-center justify-center text-[11px] font-bold">G</span>
              <span>GLUTEN FREE</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f59e0b] bg-white text-[#92400e] font-semibold text-xs sm:text-sm shadow-xs">
              <span className="w-5 h-5 rounded-full bg-[#d97706] text-white flex items-center justify-center text-[11px] font-bold">J</span>
              <span>JAIN</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#16a34a] bg-white text-[#166534] font-semibold text-xs sm:text-sm shadow-xs">
              <span className="w-5 h-5 rounded-full bg-[#16a34a] text-white flex items-center justify-center text-[11px] font-bold">V</span>
              <span>VEGAN</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ef4444] bg-white text-[#991b1b] font-semibold text-xs sm:text-sm shadow-xs">
              <span className="w-5 h-5 rounded-full bg-[#dc2626] text-white flex items-center justify-center text-[11px] font-bold">N</span>
              <span>CONTAIN NUTS</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-500 bg-white text-gray-800 font-semibold text-xs sm:text-sm shadow-xs">
              <span className="w-5 h-5 rounded-full bg-gray-600 text-white flex items-center justify-center text-[11px] font-bold">?</span>
              <span>Ask for VEGAN</span>
            </div>
          </div>

          {/* Category Tabs: Inactive = Dark Green, Active = Light Gray #C8C8C8 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
            {categories.map((cat, idx) => {
              const isActive = idx === activeCategoryIndex;
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`px-4 py-2 text-[15px] sm:text-[16px] font-medium rounded-[8px] transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#C8C8C8] text-[#202020] font-bold shadow-xs'
                      : 'bg-[#28492C] hover:bg-[#1e3822] text-white'
                  }`}
                >
                  {cat.category}
                </button>
              );
            })}
          </div>

          {/* Dishes Cards Grid: 4 columns matching exact live site rectangular card design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {activeCategory.items.map((dish, dIdx) => (
              <div
                key={`${dish.title}-${dIdx}`}
                className="bg-white rounded-[10px] border-2 border-[#BBBBBB] p-3 sm:p-3.5 hover:bg-[#ECECEC] transition-colors duration-200 cursor-pointer flex flex-col justify-between min-h-[96px]"
              >
                <div className="flex items-start gap-3">
                  {dish.img && (
                    <div className="relative w-14 h-14 sm:w-15 sm:h-15 flex-shrink-0 rounded-full overflow-hidden border border-gray-200 bg-gray-50">
                      <Image
                        src={dish.img}
                        alt={dish.title}
                        fill
                        className="object-cover"
                        sizes="60px"
                      />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <h4 className="font-['Josefin_Sans',sans-serif] text-[15px] sm:text-[16px] font-bold text-[#202020] leading-snug">
                      {renderDishTitle(dish.title)}
                    </h4>
                    {dish.desc && (
                      <p className="font-['Josefin_Sans',sans-serif] mt-1 text-[13px] leading-relaxed text-gray-500 line-clamp-3">
                        {dish.desc}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. VISIT US TODAY (fixed background, left widget card, right frosted info card) */}
      <section 
        id="visit-us" 
        className="relative py-16 lg:py-24 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('/images/migrated/enquire-banner-1-scaled.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: SevenRooms widget or Google Map */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-white rounded-[14px] overflow-hidden shadow-2xl h-[560px] border border-white/20">
                <iframe
                  src={branch.visitUs.widgetUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title={`Arya Bhavan ${branch.name} Location and Reservations`}
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Right Column: Frosted container with ADDRESS & MOBILE NO */}
            <div className="lg:col-span-6 border border-white/60 rounded-[12px] p-6 sm:p-8 lg:p-10 flex flex-col justify-center text-white backdrop-blur-xs">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold uppercase tracking-wider text-center text-white mb-3">
                VISIT US TODAY
              </h2>
              
              <p className="text-center text-white/90 text-[16px] sm:text-[17px] leading-relaxed mb-8 max-w-[500px] mx-auto">
                Whether you’re exploring the area or searching for comforting vegetarian food, Arya Bhavan welcomes you with authentic flavours and heartfelt hospitality.
              </p>

              {/* Box 1: Address */}
              <div className="bg-[#777777]/65 rounded-[10px] p-5 mb-4 text-center border border-white/20">
                <h3 className="font-bold text-lg sm:text-xl uppercase tracking-wider text-white">
                  ADDRESS
                </h3>
                <p className="text-white/90 text-[15px] sm:text-[16px] mt-1.5">
                  {branch.visitUs.address}
                </p>
                <a
                  href={branch.visitUs.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2 text-xs uppercase font-bold tracking-wider text-[#F6851C] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Box 2: Mobile No */}
              <div className="bg-[#777777]/65 rounded-[10px] p-5 text-center border border-white/20">
                <h3 className="font-bold text-lg sm:text-xl uppercase tracking-wider text-white">
                  MOBILE NO:
                </h3>
                <a
                  href={`tel:${branch.visitUs.phone.replace(/\s+/g, '')}`}
                  className="text-white hover:text-[#F6851C] transition font-bold text-lg sm:text-xl mt-1.5 inline-block"
                >
                  {branch.visitUs.phone}
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. SOUTH INDIAN CULTURAL HERITAGE SKETCH BANNER */}
      <section className="relative w-full h-[240px] sm:h-[340px] md:h-[427px] overflow-hidden bg-white">
        <Image
          src="/images/migrated/WhatsApp-Image-2026-02-28-at-16.21.58.jpeg"
          alt="South Indian Heritage Landmarks, Culture, and Monuments"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </section>

      {/* 6. WHY GUESTS LOVE DINING WITH US */}
      <section className="py-12 lg:py-16 bg-[#FAF7F2]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold uppercase tracking-wider text-[#1F302B] mb-4">
                WHY GUESTS LOVE DINING WITH US
              </h2>
              
              <p className="text-gray-700 text-[15px] sm:text-[16px] leading-relaxed mb-8">
                {branch.whyGuestsLove.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {whyGuestsLove.map((feat, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F6EFE8] rounded-xl p-3.5 flex items-center gap-3.5 border border-[#EDE4DA]"
                  >
                    <div className="w-12 h-12 flex-shrink-0 relative flex items-center justify-center">
                      <Image
                        src={feat.img}
                        alt={feat.title}
                        width={48}
                        height={48}
                        style={{ width: "auto", height: "auto" }}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-[15px] text-[#202020] leading-snug">
                        {feat.title}
                      </h3>
                      <p className="text-[12px] sm:text-[13px] text-gray-600 leading-snug mt-0.5">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={branch.whyGuestsLove.dishImage}
                alt={`Delicious South Indian Podi Idli and Chutney at Arya Bhavan ${branch.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 7. OPENING TIMES */}
      <section className="py-16 sm:py-20 bg-[#28492C] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold uppercase tracking-widest text-white">
            OPENING TIMES
          </h2>
          <p className="font-serif text-lg sm:text-xl lg:text-[22px] text-white/90 mt-2 font-normal">
            We&apos;re Open Every Day
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            
            <div className="bg-[#203D24] rounded-2xl p-8 sm:p-10 border border-white/10 flex flex-col items-center justify-center text-center shadow-lg hover:border-white/20 transition">
              <div className="w-14 h-14 rounded-full bg-[#F6851C] flex items-center justify-center text-white mb-4 shadow-md">
                <Clock className="w-8 h-8 stroke-[2.2]" />
              </div>
              <h3 className="font-semibold text-lg text-white">
                Opening Times
              </h3>
              <p className="text-white/70 text-sm mt-1">
                {branch.openingHours.label1}
              </p>
              <div className="text-xl sm:text-2xl font-bold text-white mt-3 tracking-wide">
                {branch.openingHours.time1}
              </div>
            </div>

            <div className="bg-[#203D24] rounded-2xl p-8 sm:p-10 border border-white/10 flex flex-col items-center justify-center text-center shadow-lg hover:border-white/20 transition">
              <div className="w-14 h-14 rounded-full bg-[#F6851C] flex items-center justify-center text-white mb-4 shadow-md">
                <Clock className="w-8 h-8 stroke-[2.2]" />
              </div>
              <h3 className="font-semibold text-lg text-white">
                Opening Times
              </h3>
              <p className="text-white/70 text-sm mt-1">
                {branch.openingHours.label2}
              </p>
              <div className="text-xl sm:text-2xl font-bold text-white mt-3 tracking-wide">
                {branch.openingHours.time2}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. WHAT WE OFFER */}
      <section className="py-14 sm:py-16 bg-[#F4EFEA]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold uppercase tracking-wider text-[#1F302B]">
              WHAT WE OFFER
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {whatWeOffer.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:scale-[1.02] transition-transform duration-200 min-h-[140px]"
              >
                <div className="text-[#872622] mb-3 flex items-center justify-center">
                  {item.svg}
                </div>
                <p className="text-sm font-medium text-[#202020] leading-snug">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DELIVERY SECTION */}
      <section className="py-16 sm:py-20 bg-[#28492C] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-[700px] mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#F6851C]">
              Delivery
            </span>
            <h2 className="font-serif mt-2 text-2xl sm:text-3xl lg:text-[36px] font-bold uppercase tracking-wider text-white">
              ENJOY ARYA BHAVAN AT HOME
            </h2>
            <p className="mt-3 text-[15px] sm:text-[16px] text-white/80 leading-relaxed">
              Order your favourites through popular delivery partners and enjoy authentic South Indian flavours at your doorstep.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={branch.delivery.uberEatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#1F2421] text-white rounded-xl font-medium text-[15px] hover:bg-black transition shadow-sm"
            >
              <DeliveryScooterIcon className="w-5 h-5 text-white" />
              <span>Order on Uber Eats</span>
            </a>

            <a
              href={branch.delivery.deliverooUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#00CDBC] text-white rounded-xl font-medium text-[15px] hover:bg-[#00bfae] transition shadow-sm"
            >
              <DeliveryScooterIcon className="w-5 h-5 text-white" />
              <span>Order on Deliveroo</span>
            </a>

            <a
              href={branch.delivery.justEatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#FF8000] text-white rounded-xl font-medium text-[15px] hover:bg-[#e67300] transition shadow-sm"
            >
              <DeliveryScooterIcon className="w-5 h-5 text-white" />
              <span>Order on Just Eat</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. FAQ'S ACCORDION WITH CHANGING IMAGE CAROUSEL */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[36px] font-bold uppercase tracking-wider text-[#1F302B]">
              FAQ &apos;S
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Food Image Carousel (changes every 5 seconds) */}
            <div className="lg:col-span-6 relative w-full min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-sm bg-neutral-100">
              {faqCarouselImages.map((src, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    i === faqImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Arya Bhavan South Indian dish ${i + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                    priority={i === 0}
                  />
                </div>
              ))}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/30 backdrop-blur-xs px-3 py-1.5 rounded-full">
                {faqCarouselImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setFaqImageIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      i === faqImageIndex ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Branch-specific FAQ Accordion */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-3.5">
              {branch.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl overflow-hidden transition"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left bg-[#EDE8E2] hover:bg-[#E5DFD7] transition cursor-pointer rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-[#2C241E] leading-none select-none">
                          {isOpen ? '−' : '+'}
                        </span>
                        <span className="text-[15px] sm:text-[16px] font-medium text-[#2C241E]">
                          {faq.q}
                        </span>
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-5 py-3.5 bg-white border border-[#EDE8E2] rounded-b-xl text-[15px] leading-relaxed text-gray-700 animate-in fade-in duration-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
