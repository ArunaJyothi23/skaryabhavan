'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { HelpCircle, ChevronDown, Phone } from 'lucide-react';
import siteContent from '@/data/site_content.json';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Visual & Direct Contact */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#c45c26] text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-black text-gray-900 tracking-tight">
              Got Questions? We’ve Got Answers.
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Find quick answers regarding our dietary standards, catering booking process, table reservations, and branch opening times.
            </p>

            <div className="relative h-64 w-full rounded-3xl overflow-hidden shadow-lg border border-gray-100 hidden sm:block">
              <Image
                src="/images/migrated/NKAryaBhavan-Tooting-1.jpeg"
                alt="Arya Bhavan Dining Atmosphere"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-sm text-gray-900">Have a specific question?</div>
                <div className="text-xs text-gray-600">Our customer team is happy to assist.</div>
              </div>
              <a
                href="tel:+442078398797"
                className="btn-3d-primary text-xs py-2 px-3.5"
              >
                <Phone className="w-3.5 h-3.5" /> Call Us
              </a>
            </div>
          </div>

          {/* Right Column: Accordion Questions */}
          <div className="lg:col-span-7 space-y-4">
            {siteContent.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200 bg-[#fdfaf6] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif font-bold text-base sm:text-lg text-gray-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#c45c26] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.a}
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
