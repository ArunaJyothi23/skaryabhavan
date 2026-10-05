'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Do you serve vegan food?',
    a: 'Yes, many dishes are fully vegan and clearly marked across our menu.'
  },
  {
    q: 'Is your kitchen completely vegetarian?',
    a: 'Yes — 100% pure vegetarian kitchen with zero meat, fish, or egg products anywhere on our premises.'
  },
  {
    q: 'Do you accept reservations?',
    a: 'Yes, reservations and walk-ins are both welcome across all our branches.'
  },
  {
    q: 'Do you provide catering?',
    a: 'Yes, indoor, outdoor and theatrical live dosa station catering are available for events of all sizes.'
  },
  {
    q: 'Is Jain food available?',
    a: 'Yes, Jain-friendly options (prepared strictly without root vegetables) are readily available upon request.'
  }
];

export default function FaqSectionLive() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-wide uppercase text-[#344e41]">
            Faq &apos;S - 100% Pure Veg Restaurant
          </h2>
        </div>

        <div className="space-y-3 font-sans">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-gray-100 bg-[#fdfaf6] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className="font-serif font-bold text-base text-gray-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#6d1007] transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-4 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
