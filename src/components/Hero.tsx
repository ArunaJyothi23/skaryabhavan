'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/migrated/sl1.jpg',
    heading: (
      <>
        AUTHENTIC INDIAN VEGETARIAN
        <br />
        RESTAURANT
      </>
    ),
    headingText: 'AUTHENTIC INDIAN VEGETARIAN RESTAURANT',
    subheading: 'Central London | Wembley | Tooting',
    buttonText: 'View Menu',
    buttonLink: '/menu'
  },
  {
    id: 2,
    image: '/images/migrated/sl2.jpg',
    heading: (
      <>
        100% PURE VEGETARIAN &amp;
        <br />
        VEGAN INDIAN CUISINE
      </>
    ),
    headingText: '100% PURE VEGETARIAN & VEGAN INDIAN CUISINE',
    subheading: 'Central London | Wembley',
    buttonText: 'View Menu',
    buttonLink: '/menu'
  },
  {
    id: 3,
    image: '/images/migrated/sl3.jpg',
    heading: (
      <>
        TOP-RATED INDIAN VEG DINING &amp;
        <br />
        CATERING SERVICES ACROSS LONDON
      </>
    ),
    headingText: 'TOP-RATED INDIAN VEG DINING & CATERING SERVICES ACROSS LONDON',
    subheading: 'Live Dosa | Outdoor Caterings',
    buttonText: 'View Menu',
    buttonLink: '/menu'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const active = slides[currentSlide];

  return (
    <section className="group relative w-full h-[520px] sm:h-[620px] lg:h-[700px] bg-black overflow-hidden select-none">
      {/* Background Images with smooth fade */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.headingText}
            fill
            className="object-cover"
            priority={idx === 0}
          />
          {/* Subtle overlay matching live site elementor wrapbg */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Slide Content positioned at lower-left, max-width 50% matching live site */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex flex-col justify-end pb-16 sm:pb-24 lg:pb-28 items-start">
        <div className="max-w-xl lg:max-w-[560px]">
          {/* Exact live site lakit-slide-heading: font-family Josefin Sans, 30px, 600 weight, uppercase, line-height 1.4 */}
          <h1 className="font-['Josefin_Sans'] text-[24px] sm:text-[28px] lg:text-[30px] font-semibold text-white tracking-normal uppercase leading-[1.4] m-0 drop-shadow-sm">
            {active.heading}
          </h1>

          {/* Exact live site lakit-slide-description: font-family Josefin Sans, 24px, 600 weight, letter-spacing 2px */}
          <p className="font-['Josefin_Sans'] text-[16px] sm:text-[20px] lg:text-[24px] font-semibold text-white tracking-[2px] leading-[1.2] mt-4 sm:mt-6 drop-shadow-sm">
            {active.subheading}
          </p>

          {/* Button matching live site square style */}
          <div className="pt-6 sm:pt-8">
            <Link
              href={active.buttonLink}
              className="btn-hero-menu"
            >
              {active.buttonText}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - subtle and appear on hover to avoid cluttering like live site */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />
      </button>

      {/* Numbered Pagination Indicators (1 2 3) at Bottom Center (Exact as screenshots 1 & 2) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-6 text-white text-sm font-semibold tracking-widest">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 pb-1 ${
              currentSlide === idx
                ? 'text-white border-b-2 border-white font-bold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
