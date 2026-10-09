'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Clock, Utensils, CheckCircle2, Navigation, ArrowRight } from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import UKLocations from '@/components/UKLocations';

interface BranchProps {
  name: string;
  area: string;
  address: string;
  postcode: string;
  phone: string;
  displayPhone: string;
  hours: string;
  image: string;
  features: string[];
  description: string;
  mapEmbedUrl: string;
}

export default function BranchDetailTemplate({
  name,
  area,
  address,
  postcode,
  phone,
  displayPhone,
  hours,
  image,
  features,
  description,
  mapEmbedUrl
}: BranchProps) {
  return (
    <main className="bg-white min-h-screen">
      
      {/* Top Hero Banner (sl1.jpg with title) */}
      <section className="relative w-full h-72 sm:h-96 bg-black overflow-hidden flex items-center justify-center">
        <Image
          src="/images/migrated/sl1.jpg"
          alt={`Arya Bhavan ${name}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-4 space-y-2">
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-white tracking-wide">
            {name}
          </h1>
          <p className="text-base sm:text-xl font-light text-white tracking-wider">
            {area} • London
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        
        {/* Branch Overview & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Branch Details */}
          <div className="lg:col-span-5 bg-[#fdfaf6] rounded-3xl p-8 border border-gray-100 shadow-xs space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#6d1007]">
                Branch Details
              </span>
              <h2 className="font-serif font-bold text-2xl text-gray-900 mt-1">
                Arya Bhavan {name}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 font-sans leading-relaxed">
                {description}
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-700 font-sans border-t border-gray-200 pt-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#6d1007] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-gray-900 font-semibold">Address:</strong>
                  <span>{address}, <strong className="text-[#6d1007]">{postcode}</strong></span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#6d1007] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-gray-900 font-semibold">Telephone:</strong>
                  <a href={`tel:${phone}`} className="text-gray-900 font-bold hover:text-[#6d1007]">
                    {displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#6d1007] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-gray-900 font-semibold">Opening Hours:</strong>
                  <span>{hours}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <h4 className="text-[11px] font-bold uppercase text-gray-400 tracking-wider mb-2">
                Features & Services
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 font-sans">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                href="/menu"
                className="btn-hero-menu text-xs py-2.5 px-4 justify-center"
              >
                <Utensils className="w-3.5 h-3.5 mr-1.5" /> View Menu
              </Link>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address + ' ' + postcode)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded border border-gray-300 text-xs font-bold uppercase tracking-wider text-gray-700 hover:border-[#6d1007] hover:text-[#6d1007] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#6d1007]" /> Directions
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Embed */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-2 border border-gray-200 shadow-xs overflow-hidden h-[450px]">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1rem' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Google Map for Arya Bhavan ${name}`}
            />
          </div>

        </div>

        {/* Other UK Locations */}
        <UKLocations />

        {/* Booking Form Integration */}
        <ContactSection />

      </div>
    </main>
  );
}
