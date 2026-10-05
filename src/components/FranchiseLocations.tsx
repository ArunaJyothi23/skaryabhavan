import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const franchiseLocs = [
  {
    country: 'France',
    city: 'Gare du Nord',
    address: 'Gare Du Nord, 170 Rue du Faubourg Saint-Denis, 75010 Paris, France',
    link: 'https://nkaryabhavan.fr/en/branches/gare-du-nord/'
  },
  {
    country: 'France',
    city: 'Louvre',
    address: 'Louvre, PARIS, 3 Rue des Pyramides, 75001 Paris, France',
    link: 'https://nkaryabhavan.fr/en/branches/louvre/'
  },
  {
    country: 'France',
    city: 'Notre Dame',
    address: 'Notre Dame 25 Rue Galande, 75005 Paris, France',
    link: 'https://nkaryabhavan.fr/en/branches/notre-dame/'
  },
  {
    country: 'Belgium',
    city: 'Brussels',
    address: 'Brussels, Rue Jourdan 10, 1060 Saint-Gilles, Belgium',
    link: 'https://skaryabhavan.com/belgium/'
  }
];

export default function FranchiseLocations() {
  return (
    <section className="py-14 sm:py-20 bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-wide uppercase text-[#344e41]">
            Our Franchise Locations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {franchiseLocs.map((loc, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-gray-100 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6d1007]">
                  {loc.country}
                </span>
                <h3 className="font-serif font-bold text-xl text-gray-900 mt-1 mb-2 capitalize">
                  {loc.city}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans mb-6">
                  {loc.address}
                </p>
              </div>

              <a
                href={loc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6d1007] hover:text-[#c4a05a]"
              >
                View More <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
