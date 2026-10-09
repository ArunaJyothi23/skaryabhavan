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
  const [hoveredId, setHoveredId] = useState<number | null>(3); // Notre Dame highlighted as in live screenshot

  return (
    <section className="py-14 sm:py-20 bg-[#ECE6DF]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-ivymode text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-[1px] uppercase text-[#344E41]">
            OUR FRANCHISE LOCATIONS
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {franchiseLocs.map((loc) => {
            const isActive = (hoveredId ?? 3) === loc.id;
            return (
              <div
                key={loc.id}
                onMouseEnter={() => setHoveredId(loc.id)}
                className={`bg-white rounded-2xl p-6 lg:p-7 transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'border-2 border-[#F6851C] shadow-[0_0_18px_rgba(246,133,28,0.25)] scale-[1.01]'
                    : 'border-2 border-transparent shadow-xs hover:border-[#F6851C] hover:shadow-[0_0_18px_rgba(246,133,28,0.25)] hover:scale-[1.01]'
                }`}
              >
                <div>
                  {/* Pin Icon Badge */}
                  <div className="w-10 h-10 rounded-full bg-[#E5ECE9] text-[#344E41] flex items-center justify-center mb-5">
                    <MapPin className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  {/* Country Name */}
                  <h3 className="font-ivymode font-bold text-2xl text-gray-900 mb-1">
                    {loc.country}
                  </h3>

                  {/* Branch Name */}
                  <h4 className="font-sans font-medium text-base text-gray-800 mb-4">
                    {loc.branch}
                  </h4>

                  {/* Address */}
                  <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6">
                    {loc.address}
                  </p>
                </div>

                {/* View More Orange Button */}
                <div>
                  <a
                    href={loc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#F6851C] hover:bg-[#e07513] text-white px-5 py-2.5 rounded font-semibold text-sm transition-colors duration-200"
                  >
                    View More
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
