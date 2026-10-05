import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { buildPageMetadata } from '@/lib/seoService';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import branchesData from '@/data/branches.json';

export const metadata: Metadata = buildPageMetadata('/branches');

export default function BranchesPage() {
  const europeanBranches = [
    { name: 'Paris - Gare du Nord', country: 'France', address: '185 Rue du Faubourg Saint-Denis, 75010 Paris', link: 'https://nkaryabhavan.fr/en/branches/gare-du-nord/' },
    { name: 'Paris - Louvre', country: 'France', address: 'Near Louvre Museum, Paris', link: 'https://nkaryabhavan.fr/en/branches/louvre/' },
    { name: 'Paris - Notre Dame', country: 'France', address: 'Near Notre Dame Cathedral, Paris', link: 'https://nkaryabhavan.fr/en/branches/notre-dame/' },
    { name: 'Brussels', country: 'Belgium', address: 'Brussels City Centre, Belgium', link: 'https://skaryabhavan.com/belgium/' }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Banner (Exact from live site) */}
      <section className="relative w-full h-72 sm:h-96 bg-black overflow-hidden flex items-center justify-center">
        <Image
          src="/images/migrated/erica-ab-bg1-a.jpg"
          alt="Arya Bhavan Branches"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-4 space-y-2">
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white tracking-wide">
            Branches
          </h1>
          <p className="text-base sm:text-xl font-light text-white tracking-wider">
            United Kingdom • France • Belgium
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* UK Branches Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#344e41] mb-8 uppercase tracking-wide">
            United Kingdom Locations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branchesData.map((branch) => (
              <div
                key={branch.id}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 w-full bg-gray-50">
                    <Image
                      src={branch.image}
                      alt={branch.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-serif font-bold text-xl text-gray-900">
                      {branch.name}
                    </h3>
                    
                    <div className="space-y-2 text-xs text-gray-600 font-sans">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#6d1007] shrink-0 mt-0.5" />
                        <span>{branch.address}, <strong className="text-gray-900">{branch.postcode}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#6d1007] shrink-0" />
                        <a href={`tel:${branch.phone}`} className="font-bold text-gray-900 hover:text-[#6d1007]">
                          {branch.displayPhone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#6d1007] shrink-0" />
                        <span>{branch.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/${branch.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6d1007] hover:text-[#c4a05a]"
                  >
                    View Branch Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* European Hubs */}
        <div className="pt-8 border-t border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#344e41] mb-8 uppercase tracking-wide">
            France & Belgium Locations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {europeanBranches.map((eb, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-2xs hover:shadow-md transition-shadow">
                <span className="text-[11px] font-bold text-[#6d1007] uppercase tracking-wider">{eb.country}</span>
                <h4 className="font-serif font-bold text-base text-gray-900 mt-1">{eb.name}</h4>
                <p className="text-xs text-gray-500 mt-1 mb-4 font-sans leading-relaxed">{eb.address}</p>
                <a
                  href={eb.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#6d1007] hover:text-[#c4a05a]"
                >
                  Visit Branch <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
