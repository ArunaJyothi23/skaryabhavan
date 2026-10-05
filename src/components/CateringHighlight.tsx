import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CateringHighlight() {
  return (
    <section id="catering" className="py-16 sm:py-24 bg-[#121316] text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#c45c26]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Events & Celebrations
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
            Award-Winning Indian Catering Services
          </h2>
          <p className="mt-4 text-base text-gray-400 leading-relaxed">
            From theatrical live dosa griddles at intimate garden parties to lavish multi-course wedding banquets across the UK, we make every celebration unforgettable.
          </p>
        </div>

        {/* 2 Big Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Live Dosa Catering */}
          <div className="glass-panel-dark p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-[#c45c26]/50 transition-all duration-300 group">
            <div>
              <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 bg-white/5">
                <Image
                  src="/images/migrated/MASALA-DOSA-V-G.png"
                  alt="Live Dosa Station Catering London"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#c45c26] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Live Dosa Station at Your Venue
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Our chef arrives with commercial flat-top griddles, serving unlimited crispy dosas (Masala, Plain, Onion, Podi, Cheese, Ghee Roast) spun fresh to order in front of your guests.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Fresh stone-ground batter & 3 traditional chutneys + hot sambar</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Includes uniform-clad master chef & high-temperature griddles</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Eco-friendly biodegradable disposables & cutlery included</span>
                </div>
              </div>
            </div>

            <Link
              href="/live-dosa-catering"
              className="btn-3d-primary w-full text-center text-sm py-3 justify-center"
            >
              Explore Live Dosa Packages &rarr;
            </Link>
          </div>

          {/* Card 2: Outdoor Buffets & Banquets */}
          <div className="glass-panel-dark p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 group">
            <div>
              <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 bg-white/5">
                <Image
                  src="/images/migrated/NKAryaBhavan-Central-London-1.jpeg"
                  alt="Outdoor Vegetarian Catering London"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Weddings & Banquets
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Grand Outdoor Buffets & Banquets
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Complete multi-course packages (Options 1–9) tailored for weddings, corporate galas, poojas, and birthday parties with full setup and heated chaffing dishes.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Extensive choice: Starters, Fragrant Biryanis, Paneer Curries & Naans</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Strictly 100% pure vegetarian with dedicated Vegan & Jain menus</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Catering delivered across London, Wembley, Ilford, Surrey & UK</span>
                </div>
              </div>
            </div>

            <Link
              href="/outdoor-catering"
              className="btn-3d-secondary w-full text-center text-sm py-3 justify-center bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
            >
              View Outdoor Catering Menus &rarr;
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
