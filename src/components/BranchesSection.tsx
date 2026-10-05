import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Clock, ArrowRight, Utensils } from 'lucide-react';
import branchesData from '@/data/branches.json';

export default function BranchesSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#c45c26] text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" /> Dining Locations
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-gray-900 tracking-tight">
            Visit Our Authentic London Branches
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Enjoy vibrant family-friendly dining at our three landmark South Indian restaurants across Greater London.
          </p>
        </div>

        {/* 3 Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {branchesData.map((branch) => (
            <div
              key={branch.id}
              className="rounded-3xl border border-gray-100 bg-[#fdfaf6] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              {/* Branch Image */}
              <div className="relative h-56 w-full overflow-hidden bg-amber-100">
                <Image
                  src={branch.image}
                  alt={`Arya Bhavan Restaurant ${branch.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-2.5 py-1 rounded-md bg-[#c45c26] text-white text-[11px] font-bold uppercase tracking-wider">
                    {branch.area}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mt-1">
                    {branch.name}
                  </h3>
                </div>
              </div>

              {/* Details Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3.5 text-sm text-gray-600">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#c45c26] shrink-0 mt-0.5" />
                    <span>{branch.address}, <strong className="text-gray-900">{branch.postcode}</strong></span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#c45c26] shrink-0" />
                    <a href={`tel:${branch.phone}`} className="font-semibold text-gray-900 hover:text-[#c45c26] transition-colors">
                      {branch.displayPhone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#c45c26] shrink-0" />
                    <span>{branch.hours}</span>
                  </div>

                  {/* Feature Badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {branch.features.map((feat, idx) => (
                      <span key={idx} className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white border border-gray-200 text-gray-700">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Links */}
                <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between gap-3">
                  <Link
                    href={`/${branch.slug}`}
                    className="text-xs font-bold text-gray-900 hover:text-[#c45c26] flex items-center gap-1 group/link"
                  >
                    Branch Details <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/menu"
                    className="btn-3d-primary text-xs py-2 px-3.5"
                  >
                    <Utensils className="w-3.5 h-3.5" /> Order Online
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Hubs Banner */}
        <div className="mt-12 rounded-2xl bg-[#121316] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif font-bold text-lg text-white">Visiting France or Belgium?</h4>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Arya Bhavan is also proudly serving South Indian vegetarian cuisine in Paris (Gare du Nord, Louvre, Notre Dame) and Brussels.
            </p>
          </div>
          <Link
            href="/branches"
            className="btn-3d-secondary text-xs py-2.5 px-5 shrink-0 bg-transparent text-white border-white/20 hover:border-amber-400 hover:text-amber-400"
          >
            Explore European Branches &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
