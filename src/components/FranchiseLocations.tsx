'use client';

import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const franchiseLocs = [
  {
    id: 1,
    country: 'France',
    branch: 'Gare du Nord',
    address: 'Gare Du Nord, 170 Rue du Faubourg Saint-Denis, 75010 Paris, France',
    link: 'https://nkaryabhavan.fr/en/branches/gare-du-nord/'
  },
  {
    id: 2,
    country: 'France',
    branch: 'louvre',
    address: 'Louvre, PARIS, 3 Rue des Pyramides, 75001 Paris, France',
    link: 'https://nkaryabhavan.fr/en/branches/louvre/'
  },
  {
    id: 3,
    country: 'France',
    branch: 'Notre Dame',
    address: 'Notre Dame 25 Rue Galande, 75005 Paris, France',
    link: 'https://nkaryabhavan.fr/en/branches/notre-dame/',
    defaultActive: true
  },
  {
    id: 4,
    country: 'Belgium',
    branch: 'Brussels',
    address: 'Brussels, Rue Jourdan 10, 1060 Saint-Gilles, Belgium',
    link: 'https://skaryabhavan.com/belgium/'
  }
];

export default function FranchiseLocations() {
  return (
    <section className="py-10 sm:py-[50px] bg-[#ECE6DF]">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-ivymode text-2xl font-semibold leading-[1.25] tracking-[1px] text-[#344E41] uppercase sm:text-[26px] lg:text-[32px] lg:leading-[56px]">
            OUR FRANCHISE LOCATIONS
          </h2>
        </div>

        {/* 4 Cards Grid with exact spacing matching Image 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {franchiseLocs.map((loc) => (
            <div
              key={loc.id}
              className="flex flex-col justify-between rounded-[10px] bg-white p-5 sm:p-6 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[2px_0px_9px_1px_rgba(245,133,34,0.59)] hover:scale-[1.01]"
            >
              <div>
                {/* Pin Icon Badge */}
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#EAEDEC] text-[#344B42]">
                  <MapPin className="w-5 h-5 stroke-[2]" />
                </div>

                {/* Country Name (Exact matching Image 5: bold charcoal #202020) */}
                <h3 className="mb-1.5 font-['Josefin_Sans',sans-serif] text-[26px] sm:text-[28px] font-bold leading-tight text-[#202020]">
                  {loc.country}
                </h3>

                {/* Branch Name */}
                <h4 className="mb-3 font-['Josefin_Sans',sans-serif] text-[18px] sm:text-[20px] font-semibold leading-snug text-[#202020]">
                  {loc.branch}
                </h4>

                {/* Address */}
                <p className="mb-6 font-['Josefin_Sans',sans-serif] text-[15px] sm:text-[16px] font-normal leading-[1.6] text-[#333333]">
                  {loc.address}
                </p>
              </div>

              {/* View More Button (hover goes green #366732 matching live site) */}
              <div>
                <a
                  href={loc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#F68422] hover:bg-[#366732] text-white px-6 py-2.5 rounded-[6px] font-['Josefin_Sans',sans-serif] font-bold text-[18px] transition-colors duration-200 shadow-sm cursor-pointer"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
