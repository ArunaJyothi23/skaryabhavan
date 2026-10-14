'use client';

import React from 'react';

const reasons = [
  {
    title: 'Best Quality',
    desc: 'Arya Bhavan, London’s favourite Indian vegetarian restaurant, proudly serving authentic Indian vegetarian cuisine across London, Wembley, Tooting'
  },
  {
    title: 'Fast Service',
    desc: 'Arya Bhavan offers fast service without compromising on the quality of its authentic South Indian cuisine.'
  },
  {
    title: 'Vegan Options',
    desc: 'Arya Bhavan offers a variety of vegan options, including dishes like onion masala dosa and cauliflower wings, clearly indicated on their menu.'
  },
  {
    title: 'Arya Bhavan Special',
    desc: 'Arya Bhavan specials include Chef’s special dosa, South Indian thali, and paneer butter cheese masala dosa, offering authentic South Indian flavours.'
  }
];

function ReasonIcon({ index }: { index: number }) {
  const iconClassName = 'h-[38px] w-[38px] shrink-0 text-[#C4A05A]';

  if (index === 0) {
    return (
      <svg aria-hidden="true" className={iconClassName} viewBox="0 0 384 512" fill="currentColor">
        <path d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg aria-hidden="true" className={iconClassName} viewBox="0 0 1024 1024" fill="currentColor">
        <path d="M1006.304 547.36l-116.736-58.368-91.584-244.256C793.28 232.288 781.344 224 768 224H512V96c0-17.696-14.304-32-32-32H32C14.304 64 0 78.304 0 96s14.304 32 32 32h416v704c0 17.696 14.304 32 32 32h67.232C562.112 936.928 626.72 992 704 992s141.888-55.072 156.768-128H992c17.696 0 32-14.304 32-32V576c0-12.128-6.848-23.2-17.696-28.64zM704 928c-52.928 0-96-43.072-96-96s43.072-96 96-96 96 43.072 96 96-43.072 96-96 96zm256-128h-99.232C845.888 727.072 781.28 672 704 672s-141.888 55.072-156.768 128H512V288h233.824l88.224 235.264a32.161 32.161 0 0 0 15.648 17.376L960 595.776V800zM736 480h-96v-96c0-17.696-14.304-32-32-32s-32 14.304-32 32v128c0 17.696 14.304 32 32 32h128c17.696 0 32-14.304 32-32s-14.304-32-32-32zM352 224H96c-17.696 0-32 14.304-32 32s14.304 32 32 32h256c17.696 0 32-14.304 32-32s-14.304-32-32-32zm0 160H160c-17.696 0-32 14.304-32 32s14.304 32 32 32h192c17.696 0 32-14.304 32-32s-14.304-32-32-32zm0 160H224c-17.696 0-32 14.304-32 32s14.304 32 32 32h128c17.696 0 32-14.304 32-32s-14.304-32-32-32z" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg aria-hidden="true" className={iconClassName} viewBox="0 0 576 512" fill="currentColor">
        <path d="M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className={iconClassName} viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M774.4 176H752C720 73.6 624 0 512 0S304 73.6 272 176h-22.4C112 176 0 288 0 425.6 0 550.4 99.2 656 224 672v320c0 19.2 12.8 32 32 32h512c19.2 0 32-12.8 32-32V668.8c124.8-16 224-118.4 224-246.4C1024 288 912 176 774.4 176zM288 960v-64h448v64H288zm480-352c-19.2 0-32 12.8-32 32v192H544V704c0-19.2-12.8-32-32-32s-32 12.8-32 32v128H288V640c0-19.2-12.8-32-32-32-105.6 0-192-83.2-192-182.4C64 323.2 147.2 240 249.6 240h12.8v9.6c0 35.2 6.4 67.2 22.4 99.2 6.4 12.8 16 19.2 28.8 19.2 3.2 0 9.6 0 12.8-3.2 16-6.4 22.4-25.6 16-41.6-9.6-22.4-16-48-16-73.6C326.4 147.2 409.6 64 512 64s185.6 83.2 185.6 185.6c0 25.6-6.4 51.2-16 73.6-6.4 16 0 35.2 16 41.6s35.2 0 41.6-16c12.8-32 22.4-64 22.4-99.2V240h12.8C876.8 240 960 323.2 960 425.6c0 99.2-86.4 182.4-192 182.4z" />
    </svg>
  );
}

interface WhyChooseLiveProps {
  whyData?: { title: string; desc: string }[];
}

export default function WhyChooseLive({ whyData }: WhyChooseLiveProps) {
  const activeReasons = whyData && whyData.length > 0 ? whyData : reasons;
  return (
    <section className="bg-[#344B42] py-[50px] text-white">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="mb-5 text-center">
          <h2 className="font-ivymode text-2xl font-semibold leading-[56px] tracking-[1px] text-[#EDE7DF] uppercase sm:text-[26px] lg:text-[32px]">
            WHY CHOOSE ARYA BHAVAN
          </h2>
        </div>

        {/* Live-site dividers use a rounded right edge around each separator. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {activeReasons.map((r, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-start rounded-[10px] px-[10px] pb-4 pt-[10px] text-left transition-transform duration-300 hover:scale-[1.01] lg:pb-[40px] ${
                idx !== activeReasons.length - 1 ? 'lg:border-r lg:border-[#CACACA]' : ''
              }`}
            >
              <div className="mb-4">
                <ReasonIcon index={idx} />
              </div>

              <h3 className="mb-3 font-['Josefin_Sans',sans-serif] text-[22px] sm:text-[24px] font-bold leading-[1.25] text-white">
                {r.title}
              </h3>

              <p className="font-['Josefin_Sans',sans-serif] text-[15px] sm:text-[16px] font-normal leading-[1.6] text-white/95">
                {r.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
