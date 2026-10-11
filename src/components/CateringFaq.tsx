'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

interface Props {
  faqs: FaqItem[];
  title?: string;
  sideImageSrc?: string;
  sideImageAlt?: string;
}

export default function CateringFaq({
  faqs,
  title = 'Faqs',
  sideImageSrc,
  sideImageAlt = 'Arya Bhavan Catering FAQ',
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-[#344e41] mb-12 tracking-wide">
          {title}
        </h2>

        {sideImageSrc ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Column Image (matching live site) */}
            <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[460px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src={sideImageSrc}
                alt={sideImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>

            {/* Right Column FAQs */}
            <div className="lg:col-span-7 flex flex-col justify-center divide-y divide-gray-200 border-y border-gray-200">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="py-4">
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-[#e87722] transition-colors leading-relaxed">
                        {faq.q}
                      </span>
                      <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-gray-700 bg-gray-100 group-hover:bg-orange-50 group-hover:text-[#e87722] transition-all">
                        {isOpen ? (
                          <Minus className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pt-3 pb-1 text-sm sm:text-base text-gray-600 leading-relaxed font-sans animate-in fade-in duration-200">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto divide-y divide-gray-200 border-y border-gray-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-4 sm:py-5">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-[#e87722] transition-colors leading-relaxed">
                      {faq.q}
                    </span>
                    <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-gray-700 bg-gray-100 group-hover:bg-orange-50 group-hover:text-[#e87722] transition-all">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pb-1 text-sm sm:text-base text-gray-600 leading-relaxed font-sans animate-in fade-in duration-200">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
