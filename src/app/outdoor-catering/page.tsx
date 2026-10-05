'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import CateringInquiryForm from '@/components/CateringInquiryForm';

const cateringPackages = [
  {
    id: 1,
    name: 'Option 1: Classic Tiffin Feast',
    idealFor: 'Pooja, Morning Gatherings, Breakfasts',
    starters: ['Medhu Vadai', 'Idly with Sambar & Chutneys'],
    mains: ['Mini Masala Dosa (Prepared Hot)', 'Vegetable Kichadi or Pongal'],
    dessert: 'Rava Kesari',
    drinks: 'Authentic South Indian Filter Coffee'
  },
  {
    id: 2,
    name: 'Option 2: Traditional South Indian Banquet',
    idealFor: 'Family Milestones, Anniversaries, Receptions',
    starters: ['Gobi 65', 'Sambar Vadai'],
    mains: ['Avial (Traditional Mixed Veg in Coconut)', 'Paneer Butter Masala', 'Steamed Rice & Sambar', 'Rasam & Curd'],
    breads: ['Poori or Chapathi'],
    dessert: 'Semiya Payasam & Appalam',
    drinks: 'Sweet / Salt Lassi'
  },
  {
    id: 3,
    name: 'Option 3: Royal North & South Fusion Buffet',
    idealFor: 'Weddings, Large Engagements, Corporate Galas',
    starters: ['Chilli Paneer', 'Crispy Spring Rolls', 'Medhu Vadai'],
    mains: ['AB Special Dum Biryani', 'Paneer Tikka Masala', 'Baingan Masala', 'Dal Makhani'],
    breads: ['Fresh Butter Naan', 'Tandoori Roti'],
    dessert: 'Hot Gulab Jamun with Vanilla Ice Cream',
    drinks: 'Mango Lassi & Masala Chai'
  },
  {
    id: 4,
    name: 'Option 4: Indo-Chinese & Tandoor Extravaganza',
    idealFor: 'Cocktail Parties, Birthday Bashes, Youth Gatherings',
    starters: ['Paneer 65', 'Veg Manchurian Dry', 'Crispy Corn'],
    mains: ['Veg Hakka Noodles', 'Schezwan Fried Rice', 'Chilli Mushroom Gravy'],
    dessert: 'Royal Falooda',
    drinks: 'Fresh Fruit Mocktails'
  }
];

export default function OutdoorCateringPage() {
  const [selectedOption, setSelectedOption] = useState(1);
  const activePkg = cateringPackages.find(p => p.id === selectedOption) || cateringPackages[0];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Banner (Exact from live site) */}
      <section className="relative w-full h-72 sm:h-96 bg-black overflow-hidden flex items-center justify-center">
        <Image
          src="/images/migrated/WhatsApp-Image-2025-12-09-at-17.38.24.jpeg"
          alt="Outdoor Catering Samko Arya Bhavan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-4 space-y-2">
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white tracking-wide">
            Outdoor Catering
          </h1>
          <p className="text-base sm:text-xl font-light text-white tracking-wider">
            Authentic Indian Vegetarian Outdoor Catering Across London & UK
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        
        {/* Packages Switcher */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#344e41] uppercase tracking-wide">
              Catering Packages & Menu Options
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 font-sans">
              Select an option below to preview sample multi-course menus. All packages are fully customizable.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {cateringPackages.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setSelectedOption(pkg.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedOption === pkg.id
                    ? 'bg-[#6d1007] text-white shadow-md'
                    : 'bg-[#f7f5f2] border border-gray-200 text-gray-700 hover:border-[#6d1007]'
                }`}
              >
                {pkg.name}
              </button>
            ))}
          </div>

          <div className="bg-[#fdfaf6] rounded-3xl border border-gray-200 p-8 shadow-sm max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-6 border-b border-gray-200">
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900">{activePkg.name}</h3>
                <span className="text-xs text-[#6d1007] font-semibold">Ideal for: {activePkg.idealFor}</span>
              </div>
              <span className="text-xs bg-green-50 text-green-800 font-bold px-3 py-1 rounded-full border border-green-200">
                100% Pure Veg • Vegan Options
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 text-sm font-sans">
              <div className="space-y-4">
                <div>
                  <h4 className="font-serif font-bold text-xs uppercase text-gray-400 tracking-wider mb-2">
                    Starters & Appetizers
                  </h4>
                  <ul className="space-y-1.5 text-xs text-gray-700">
                    {activePkg.starters.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-serif font-bold text-xs uppercase text-gray-400 tracking-wider mb-2">
                    Main Curries & Specialties
                  </h4>
                  <ul className="space-y-1.5 text-xs text-gray-700">
                    {activePkg.mains.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                {activePkg.breads && (
                  <div>
                    <h4 className="font-serif font-bold text-xs uppercase text-gray-400 tracking-wider mb-2">
                      Fresh Tandoori Breads
                    </h4>
                    <ul className="space-y-1.5 text-xs text-gray-700">
                      {activePkg.breads.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="font-serif font-bold text-xs uppercase text-gray-400 tracking-wider mb-2">
                    Desserts & Beverages
                  </h4>
                  <p className="text-xs text-gray-700 mb-1">
                    <strong className="text-gray-900">Dessert:</strong> {activePkg.dessert}
                  </p>
                  <p className="text-xs text-gray-700">
                    <strong className="text-gray-900">Drink:</strong> {activePkg.drinks}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-serif font-bold text-[#344e41] mb-1 uppercase tracking-wide text-center">
            Request an Outdoor Catering Proposal
          </h3>
          <p className="text-xs text-gray-500 mb-6 font-sans text-center">
            Our catering team will contact you with custom packages and chaffing dish banquet setup details.
          </p>
          <CateringInquiryForm defaultService="Outdoor Catering" />
        </div>

      </div>
    </main>
  );
}
