'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/migrated/sl1.jpg',
    heading: 'AUTHENTIC INDIAN VEGETARIAN RESTAURANT',
    subheading: 'Central London | Wembley | Tooting',
    buttonText: 'View Menu',
    buttonLink: '/menu'
  },
  {
    id: 2,
    image: '/images/migrated/sl2.jpg',
    heading: '100% PURE VEGETARIAN & VEGAN INDIAN CUISINE',
    subheading: 'Central London | Wembley',
    buttonText: 'View Menu',
    buttonLink: '/menu'
  },
  {
    id: 3,
    image: '/images/migrated/sl3.jpg',
    heading: 'TOP-RATED INDIAN VEG DINING & CATERING SERVICES ACROSS LONDON',
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
    <section className="relative w-full h-[480px] sm:h-[580px] lg:h-[650px] bg-black overflow-hidden select-none">
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
            alt={slide.heading}
            fill
            className="object-cover"
            priority={idx === 0}
          />
          {/* Dark Overlay for typography legibility */}
          <div className="absolute inset-0 bg-black/45" />
        </div>
      ))}

      {/* Slide Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-center items-start">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-sans text-white tracking-wider uppercase leading-tight drop-shadow-md">
            {active.heading}
          </h1>

          <p className="text-lg sm:text-2xl font-light text-white tracking-wide drop-shadow-sm">
            {active.subheading}
          </p>

          <div className="pt-4">
            <Link
              href={active.buttonLink}
              className="btn-hero-menu hover:scale-105"
            >
              {active.buttonText}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
      >
        <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
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
