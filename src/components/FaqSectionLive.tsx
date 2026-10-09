'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-6.jpeg',
    alt: 'Arya Bhavan Fresh Food Platter - Momos, Crispy Starters & Noodles'
  },
  {
    src: '/images/migrated/thali2.jpg',
    alt: 'Arya Bhavan Authentic South Indian Thali'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-10.jpeg',
    alt: 'Arya Bhavan Fresh Indian Curries & Gravies'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.33.13.jpeg',
    alt: 'Arya Bhavan Traditional Vegetarian Specialties'
  },
  {
    src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52-14.jpeg',
    alt: 'Arya Bhavan Freshly Prepared Vegetarian Dishes'
  },
  {
    src: '/images/migrated/South-indian.jpg',
    alt: 'Arya Bhavan Classic South Indian Dosa & Idli Spread'
  }
];

const faqs = [
  {
    q: 'Do you serve vegan food?',
    a: 'Yes, many dishes are fully vegan and clearly marked.'
  },
  {
    q: 'Is your kitchen completely vegetarian?',
    a: 'Yes — 100% pure vegetarian kitchen with zero meat, fish, or egg products anywhere on our premises.'
  },
  {
    q: 'Do you accept reservations?',
    a: 'Yes, reservations and walk-ins both welcome.'
  },
  {
    q: 'Do you provide catering?',
    a: 'Yes, indoor, outdoor and live dosa catering available.'
  },
  {
    q: 'Is Jain food available?',
    a: 'Yes, Jain-friendly options available on request.'
  }
];

export default function FaqSectionLive() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const slideCount = carouselImages.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Automatic scrolling / cycling timer
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideCount);
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, slideCount]);

  const goToPrev = () => {
    setActiveSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const goToNext = () => {
    setActiveSlide((prev) => (prev + 1) % slideCount);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-ivymode text-2xl sm:text-3xl lg:text-[32px] font-semibold tracking-[1px] uppercase text-[#344E41] leading-snug">
            FAQ &apos;S - 100% PURE VEG RESTAURANT
          </h2>
        </div>

        {/* 2-Column Layout: Left Carousel + Right Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          
          {/* Left Column: Auto-scrolling Carousel */}
          <div
            className="relative w-full h-[380px] sm:h-[480px] lg:h-[536px] rounded-[10px] overflow-hidden shadow-xs group bg-[#111]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Sliding Track */}
            <div
              className="flex w-full h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {carouselImages.map((img, idx) => (
                <div key={idx} className="relative w-full h-full shrink-0">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={idx === 0}
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  {/* Subtle vignette shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Previous Arrow Button */}
            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Arrow Button */}
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Slide Indicator Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-xs">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    activeSlide === idx
                      ? 'w-6 h-2 bg-[#F6851C]'
                      : 'w-2 h-2 bg-white/70 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="flex flex-col justify-center">
            <div className="space-y-[10px]">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-[8px] overflow-hidden transition-all duration-200"
                  >
                    {/* Header Button */}
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="w-full px-5 py-3.5 sm:py-4 bg-[#ECE6DF] hover:bg-[#e4ded6] text-left flex items-center gap-3 transition-colors duration-150 focus:outline-hidden"
                      aria-expanded={isOpen}
                    >
                      {/* Plus / Minus Indicator Icon on Left */}
                      <span className="text-[18px] sm:text-[20px] font-bold text-[#202020] shrink-0 leading-none select-none w-4 text-center">
                        {isOpen ? '−' : '+'}
                      </span>

                      {/* Question Text */}
                      <span className="font-sans font-bold text-[16px] sm:text-[18px] text-[#202020] leading-snug">
                        {faq.q}
                      </span>
                    </button>

                    {/* Answer Region */}
                    {isOpen && (
                      <div className="px-5 py-4 bg-[#fbf9f6] border-t border-[#ECE6DF]/60 text-sm sm:text-[15px] text-[#444444] leading-relaxed font-sans transition-all duration-300">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
