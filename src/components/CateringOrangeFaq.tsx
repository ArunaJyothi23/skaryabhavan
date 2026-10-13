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

export default function CateringOrangeFaq({
  faqs,
  title = 'Faqs',
  sideImageSrc,
  sideImageAlt = 'Arya Bhavan Catering FAQ',
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F6FFF8]">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4">
        <h2 className="text-3xl sm:text-4xl font-josefin font-semibold text-center text-[#344e41] mb-8 sm:mb-10 tracking-normal">
          {title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column Image (Matching live site screenshot 4) */}
          {sideImageSrc && (
            <div className="lg:col-span-5 relative w-full min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] rounded-[10px] overflow-hidden shadow-sm">
              <Image
                src={sideImageSrc}
                alt={sideImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
            </div>
          )}

          {/* Right Column Orange FAQ Bars (Matching live site screenshot 4 & 5) */}
          <div className={sideImageSrc ? 'lg:col-span-7 space-y-2.5 flex flex-col justify-start' : 'max-w-4xl mx-auto w-full space-y-2.5'}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="overflow-hidden">
                  {/* Orange Question Bar */}
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full bg-[#f68422] hover:bg-[#e67516] text-white px-5 py-3 rounded-[10px] flex items-center justify-between text-left cursor-pointer transition-colors shadow-sm font-josefin text-base sm:text-[19px] font-medium gap-3"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="shrink-0 text-white font-bold text-lg">
                      {isOpen ? <Minus className="w-5 h-5 stroke-[2.5]" /> : <Plus className="w-5 h-5 stroke-[2.5]" />}
                    </span>
                  </button>

                  {/* Expandable Answer */}
                  {isOpen && (
                    <div className="bg-white border border-[#f68422]/20 border-t-0 p-4 rounded-b-[10px] text-[#202020] font-josefin text-[15px] sm:text-base leading-relaxed animate-in fade-in duration-150">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
