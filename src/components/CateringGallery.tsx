'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  images: string[];
  title?: string;
}

export default function CateringGallery({ images, title = 'Our Gallery' }: Props) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + images.length) % images.length);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % images.length);
    }
  };

  return (
    <section className="py-12 sm:py-[50px] bg-white">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4">
        <h2 className="text-3xl sm:text-4xl font-josefin font-semibold text-center text-[#344e41] mb-8 sm:mb-10 tracking-normal">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-[3/2] overflow-hidden rounded-[10px] shadow-sm cursor-pointer group bg-gray-100"
            >
              <Image
                src={src}
                alt={`Arya Bhavan Catering Gallery ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <button
            onClick={closeLightbox}
            aria-label="Close image popup"
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2.5 rounded-full bg-black/50 hover:bg-black/80 transition-colors z-50 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl h-[70vh] sm:h-[80vh]"
          >
            <Image
              src={images[activeImageIndex]}
              alt={`Full size preview ${activeImageIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          <button
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2.5 rounded-full bg-black/50 hover:bg-black/80 transition-colors z-50 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
