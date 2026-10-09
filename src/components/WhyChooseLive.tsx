'use client';

import React from 'react';
import { Award, Truck, Leaf, ChefHat } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Best Quality',
    desc: 'Arya Bhavan, London’s favourite Indian vegetarian restaurant, proudly serving authentic Indian vegetarian cuisine across London, Wembley, Tooting'
  },
  {
    icon: Truck,
    title: 'Fast Service',
    desc: 'Arya Bhavan offers fast service without compromising on the quality of its authentic South Indian cuisine.'
  },
  {
    icon: Leaf,
    title: 'Vegan Options',
    desc: 'Arya Bhavan offers a variety of vegan options, including dishes like onion masala dosa and cauliflower wings, clearly indicated on their menu.'
  },
  {
    icon: ChefHat,
    title: 'Arya Bhavan Special',
    desc: 'Arya Bhavan specials include Chef’s special dosa, South Indian thali, and paneer butter cheese masala dosa, offering authentic South Indian flavours.'
  }
];

export default function WhyChooseLive() {
  return (
    <section className="py-16 sm:py-20 bg-[#344E41] text-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-ivymode text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-[1.5px] uppercase text-[#EDE7DF]">
            WHY CHOOSE ARYA BHAVAN
          </h2>
        </div>

        {/* 4 Feature Columns with vertical dividing lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/20">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={idx}
                className="py-8 lg:py-4 px-4 sm:px-6 flex flex-col items-start text-left"
              >
                {/* Gold Icon */}
                <div className="text-[#C4A05A] mb-5">
                  <Icon className="w-9 h-9 stroke-[1.8]" />
                </div>

                {/* Title */}
                <h3 className="font-ivymode text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  {r.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-[#EDE7DF]/85 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
