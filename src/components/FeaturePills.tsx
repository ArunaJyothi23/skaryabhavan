import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: 'Pure Vegetarian',
    desc: '100% pure — completely vegetarian kitchen',
    icon: '/images/migrated/Screenshot-2026-02-25-104933.png'
  },
  {
    title: 'Diet Friendly',
    desc: 'Vegan & Jain friendly menu available',
    icon: '/images/migrated/Screenshot-2026-02-25-104922.png'
  },
  {
    title: 'Authentic Taste',
    desc: 'Prepared by Indian cooking techniques',
    icon: '/images/migrated/Screenshot-2026-02-25-104846-e1774635366152.png'
  },
  {
    title: 'Family Friendly',
    desc: 'Comfortable atmosphere for all age groups',
    icon: '/images/migrated/Screenshot-2026-02-25-104939.png'
  }
];

interface FeaturePillsProps {
  features?: { title: string; desc: string; icon?: string }[];
}

export default function FeaturePills({ features: propFeatures }: FeaturePillsProps = {}) {
  const activeFeatures = propFeatures && propFeatures.length > 0 ? propFeatures : features;
  return (
    <section className="py-10 sm:py-[50px] bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {activeFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-3.5 rounded-[10px] flex items-center gap-3.5 transition-all duration-300 bg-[#F9F5F1] hover:shadow-[1px_1px_8px_1px_#F68422] cursor-pointer"
            >
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src={feat.icon}
                  alt={feat.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="font-josefin font-bold text-[17px] sm:text-[18px] text-black leading-snug">
                  {feat.title}
                </h3>
                <p className="font-josefin text-[14px] sm:text-[14px] text-[#737373] mt-0.5 leading-snug font-normal">
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
