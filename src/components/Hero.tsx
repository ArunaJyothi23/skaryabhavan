'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const defaultSlides = [
  {
    id: 1,
    image: '/images/migrated/sl1.jpg',
    heading: 'AUTHENTIC INDIAN VEGETARIAN RESTAURANT',
    headingText: 'AUTHENTIC INDIAN VEGETARIAN RESTAURANT',
    subheading: 'Central London | Wembley | Tooting',
    buttonText: 'View Menu',
    buttonLink: '/menu'
  },
  {
    id: 2,
    image: '/images/migrated/sl2.jpg',
    heading: '100% PURE VEGETARIAN & VEGAN INDIAN CUISINE',
    headingText: '100% PURE VEGETARIAN & VEGAN INDIAN CUISINE',
    subheading: 'Central London | Wembley',
    buttonText: 'View Menu',
    buttonLink: '/menu'
  },
  {
    id: 3,
    image: '/images/migrated/sl3.jpg',
    heading: 'TOP-RATED INDIAN VEG DINING & CATERING SERVICES ACROSS LONDON',
    headingText: 'TOP-RATED INDIAN VEG DINING & CATERING SERVICES ACROSS LONDON',
    subheading: 'Live Dosa | Outdoor Caterings',
    buttonText: 'View Menu',
    buttonLink: '/menu'
  }
];

interface HeroProps {
  slides?: {
    id?: number | string;
    image: string;
    heading: string;
    headingText?: string;
    subheading: string;
    buttonText?: string;
    buttonLink?: string;
  }[];
  heroData?: any;
}

export default function Hero({ slides: propSlides }: HeroProps) {
  const slides = propSlides && propSlides.length > 0 ? propSlides : defaultSlides;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [contentSlide, setContentSlide] = useState(0);
  const [contentPhase, setContentPhase] = useState<'idle' | 'exit' | 'enter'>('idle');
  const previousSlide = useRef(currentSlide);

  // Auto advance slides every 6 seconds
  useEffect(() => {
    if (!slides || slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Match the live carousel's fadeOutUp / fadeInUp text transition.
  useEffect(() => {
    if (!slides || slides.length === 0) return;
    if (previousSlide.current === currentSlide) return;
    previousSlide.current = currentSlide;

    setContentPhase('exit');
    let enterTimer: ReturnType<typeof setTimeout> | undefined;
    const exitTimer = setTimeout(() => {
      setContentSlide(currentSlide);
      setContentPhase('enter');
      enterTimer = setTimeout(() => setContentPhase('idle'), 650);
    }, 240);

    return () => {
      clearTimeout(exitTimer);
      if (enterTimer) clearTimeout(enterTimer);
    };
  }, [currentSlide, slides]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const active = slides[currentSlide] || slides[0];
  const visibleContent = slides[contentSlide] || slides[0];

  if (!visibleContent) return null;

  return (
    <section className="group relative h-[550px] w-full select-none overflow-hidden bg-[#F9F5F1] md:h-[640px] lg:h-[800px]">
      {/* Background Images with smooth fade */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id || idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <Image
            src={slide.image || '/images/migrated/sl1.jpg'}
            alt={slide.heading || slide.headingText || 'Arya Bhavan London'}
            fill
            className="object-cover"
            priority={idx === 0}
            quality={95}
          />
        </div>
      ))}

      {/* Live slide copy begins 40% down on desktop and 10% from the left on mobile. */}
      <div className="absolute left-[10%] top-[40%] z-20 w-[80%] text-center md:left-[80px] md:w-[calc(100%-160px)] md:text-left lg:left-[84px] lg:w-1/2">
        <div className={`hero-copy--${contentPhase}`}>
          {/* Exact live site lakit-slide-heading: font-family Josefin Sans, 30px, 600 weight, uppercase, line-height 1.4 */}
          <h1 className="m-0 font-['Josefin_Sans'] text-[22px] font-semibold uppercase leading-[1.4] tracking-normal text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] sm:text-[26px] lg:text-[30px]">
            {visibleContent.heading || visibleContent.headingText}
          </h1>

          {/* Exact live site lakit-slide-description: font-family Josefin Sans, 24px, 600 weight, letter-spacing 2px */}
          <p className="font-['Josefin_Sans'] text-[16px] sm:text-[20px] lg:text-[24px] font-semibold text-white tracking-[2px] leading-[1.2] mt-4 sm:mt-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
            {visibleContent.subheading}
          </p>

          {/* Button matching live site square style */}
          <div className="pt-6 sm:pt-8">
            <Link
              href={visibleContent.buttonLink || '/menu'}
              className="btn-hero-menu"
            >
              {visibleContent.buttonText || 'View Menu'}
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

      {/* Numbered pagination matches the live carousel's 16px type and 30px gap. */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center space-x-[30px] text-[16px] font-semibold leading-4 tracking-widest text-white">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 pb-1 ${
              currentSlide === idx
                ? 'text-white border-b-2 border-white font-bold'
                : 'text-white/60 hover:text-white'
              } no-underline`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
