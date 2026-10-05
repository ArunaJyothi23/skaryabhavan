import type { Metadata } from 'next';
import Image from 'next/image';
import { buildPageMetadata } from '@/lib/seoService';
import { CheckCircle2, ChefHat, ShieldCheck } from 'lucide-react';
import CateringInquiryForm from '@/components/CateringInquiryForm';

export const metadata: Metadata = buildPageMetadata('/live-dosa-catering');

export default function LiveDosaCateringPage() {
  const inclusions = [
    {
      title: 'Dedicated Master Dosa Chef',
      desc: 'Uniformed professional chef preparing paper-thin, piping-hot dosas live right in front of your guests.'
    },
    {
      title: 'Commercial Flat-Top Griddles',
      desc: 'High-power commercial equipment suitable for both indoor venues and outdoor gardens.'
    },
    {
      title: 'Unlimited Traditional Accompaniments',
      desc: 'Signature stone-ground coconut chutney, tangy tomato-onion chutney, mint-coriander chutney, and hot drumstick sambar.'
    },
    {
      title: '100% Eco-Friendly Disposables',
      desc: 'Biodegradable sugarcane pulp plates, wooden cutlery, and napkins provided for effortless clean-up.'
    }
  ];

  const dosaOfferings = [
    { name: 'Traditional Masala Dosa', desc: 'Spiced turmeric potato mash folded inside a crispy golden crepe.' },
    { name: 'Crispy Plain / Ghee Roast', desc: 'Golden browned with aromatic pure ghee, extra crispy.' },
    { name: 'Podi Dosa (Gunpowder)', desc: 'Coated with spicy roasted lentil gunpowder & ghee.' },
    { name: 'Onion & Green Chilli Dosa', desc: 'Topped with caramelized diced red onions and fresh coriander.' },
    { name: 'Cheese / Cheese Chilli Dosa', desc: 'Gooey melted cheddar with a kick of green chillies.' },
    { name: 'Mysore Masala Dosa', desc: 'Lined with fiery red garlic chutney & potato filling.' },
    { name: 'Steamed Idli & Medhu Vadai', desc: 'Soft rice cakes and crunchy lentil doughnuts as starters.' },
    { name: 'Mixed Vegetable Uthappam', desc: 'Thick, fluffy pancake topped with onions, tomatoes, and herbs.' }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Banner (Exact from live site) */}
      <section className="relative w-full h-72 sm:h-96 bg-black overflow-hidden flex items-center justify-center">
        <Image
          src="/images/migrated/WhatsApp-Image-2025-12-08-at-14.51.18-e1765205112699.jpeg"
          alt="Live Dosa Catering Samko Arya Bhavan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-4 space-y-2">
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white tracking-wide">
            Live Dosa Catering
          </h1>
          <p className="text-base sm:text-xl font-light text-white tracking-wider">
            Live Dosa Station at Home & Events Across London & UK
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        
        {/* Why Book Live Dosa */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#344e41] uppercase tracking-wide">
              Why Choose Our Live Dosa Station?
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 font-sans">
              Everything needed to feed 30 to 500+ guests with authentic South Indian hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inclusions.map((item, idx) => (
              <div key={idx} className="bg-[#fdfaf6] p-6 rounded-2xl border border-gray-100 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#6d1007] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-gray-900 mb-1.5">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Offerings and Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Dosa Varieties */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-serif font-bold text-[#344e41] uppercase tracking-wide">
              Live Station Offerings
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 font-sans">
              Your guests can choose and customize from our live counter menu throughout the event:
            </p>

            <div className="space-y-3 font-sans">
              {dosaOfferings.map((dish, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#fdfaf6] border border-gray-100 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#6d1007] mt-2 shrink-0" />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-gray-900">{dish.name}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{dish.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-green-50 border border-green-200 flex items-center gap-3 text-xs text-green-900 font-medium">
              <ShieldCheck className="w-6 h-6 text-green-700 shrink-0" />
              <span>
                100% Pure Vegetarian with dedicated Vegan, Nut-Free, and Jain-friendly options prepared separately.
              </span>
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="lg:col-span-6">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-md">
              <h3 className="text-xl font-serif font-bold text-[#344e41] mb-1 uppercase tracking-wide">
                Get a Live Dosa Catering Quote
              </h3>
              <p className="text-xs text-gray-500 mb-6 font-sans">
                Tell us your date, location, and guest count for an instant customized estimate.
              </p>
              <CateringInquiryForm defaultService="Live Dosa Catering" />
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
