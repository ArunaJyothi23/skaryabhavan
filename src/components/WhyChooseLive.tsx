import React from 'react';
import { Award, Zap, Heart, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Best Quality',
    desc: 'Arya Bhavan, London’s favourite Indian vegetarian restaurant, proudly serving authentic Indian vegetarian cuisine across Central London, Wembley, Tooting.'
  },
  {
    icon: Zap,
    title: 'Fast Service',
    desc: 'Arya Bhavan offers prompt, courteous service without ever compromising on the freshness or quality of its authentic South Indian cuisine.'
  },
  {
    icon: Heart,
    title: 'Vegan Options',
    desc: 'Arya Bhavan offers a wide variety of vegan options, including crispy dosas, steamed idlis, hot sambar vadai, and vegetable curries.'
  },
  {
    icon: Sparkles,
    title: 'Arya Bhavan Special',
    desc: 'Traditional master chefs preparing stone-ground batters, fresh coconut chutneys, and heritage South Indian spices daily.'
  }
];

export default function WhyChooseLive() {
  return (
    <section className="py-14 sm:py-20 bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-wide uppercase text-[#344e41]">
            Why Choose Arya Bhavan
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-gray-100 shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#6d1007] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">
                  {r.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
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
