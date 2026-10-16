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
    <section className="py-8 sm:py-[50px] bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-4">
          {activeFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-2 sm:p-2.5 rounded-[10px] flex items-center gap-2.5 sm:gap-3 transition-all duration-300 bg-[#F9F5F1] hover:shadow-[1px_1px_8px_1px_#F68422] cursor-pointer"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0">
                <Image
                  src={feat.icon || '/images/migrated/Screenshot-2026-02-25-104933.png'}
                  alt={feat.title}
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-['Josefin_Sans',sans-serif] font-bold text-[16px] sm:text-[18px] text-[#000000] leading-[1.2] m-0">
                  {feat.title}
                </h3>
                <p className="font-['Josefin_Sans',sans-serif] text-[13px] sm:text-[14px] text-[#000000] mt-0.5 leading-[1.3] font-normal">
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
