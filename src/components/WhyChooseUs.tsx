import React from 'react';
import { ShieldCheck, Flame, MapPin, ChefHat } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: ShieldCheck,
      title: '100% Pure Vegetarian',
      desc: 'Completely vegetarian kitchens with strict adherence to authentic vegetarian, vegan, and Jain culinary practices without compromise.'
    },
    {
      icon: Flame,
      title: 'Heritage Stone Ground',
      desc: 'Our batters and masalas are stone-ground daily to preserve the fluffy texture, crispness, and traditional aroma of Kanyakumari recipes.'
    },
    {
      icon: MapPin,
      title: '3 Iconic London Locations',
      desc: 'Dine conveniently in Central London (Leicester Square / Charing Cross), Wembley Central, and Tooting.'
    },
    {
      icon: ChefHat,
      title: 'Traditional Master Chefs',
      desc: 'Our experienced South Indian chefs possess decades of culinary mastery in turning simple rice and lentils into unforgettable feasts.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#fdfaf6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#c45c26] bg-orange-100/60 px-3 py-1 rounded-full border border-orange-200">
            Why Arya Bhavan
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-gray-900 tracking-tight mt-3">
            Pure Taste, Timeless Tradition
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Why thousands of vegetarian food lovers across the UK choose Arya Bhavan every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-amber-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#c45c26] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
