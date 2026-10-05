import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: 'Pure Vegetarian',
    desc: '100% pure — completely vegetarian kitchen',
    icon: '/images/migrated/Screenshot-2026-02-25-104933.png',
    active: false
  },
  {
    title: 'Diet Friendly',
    desc: 'Vegan & Jain friendly menu available',
    icon: '/images/migrated/Screenshot-2026-02-25-104922.png',
    active: false
  },
  {
    title: 'Authentic Taste',
    desc: 'Prepared by Indian cooking techniques',
    icon: '/images/migrated/Screenshot-2026-02-25-104846-e1774635366152.png',
    active: true // Highlighted in live site with orange border
  },
  {
    title: 'Family Friendly',
    desc: 'Comfortable atmosphere for all age groups',
    icon: '/images/migrated/Screenshot-2026-02-25-104939.png',
    active: false
  }
];

export default function FeaturePills() {
  return (
    <section className="py-6 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 ${
                feat.active
                  ? 'feature-card-active bg-[#fdf8f4]'
                  : 'bg-[#f7f5f2] border border-gray-100 hover:border-gray-200'
              }`}
            >
              <div className="relative w-11 h-11 shrink-0">
                <Image
                  src={feat.icon}
                  alt={feat.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="font-serif font-bold text-base text-gray-900 leading-snug">
                  {feat.title}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
