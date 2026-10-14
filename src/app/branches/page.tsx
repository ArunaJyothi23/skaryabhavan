import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { buildPageMetadata } from '@/lib/seoService';
import { getSiteContent } from '@/lib/firebaseService';
import { Phone, Clock, MapPin, ArrowRight } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const siteContent = await getSiteContent();
  return buildPageMetadata('/branches', undefined, siteContent);
}

export default async function BranchesPage() {
  const ukBranches = [
    {
      name: 'CENTRAL LONDON',
      slug: 'central-london',
      phone: '020 7839 8797',
      hours: '12.00 - 22.00 (MON-SUN)',
      address: '17 Charing Cross Road, Charing Cross, London WC2H 0EP',
      image: '/images/migrated/NKAryaBhavan-Central-London-1.jpeg',
    },
    {
      name: 'WEMBLEY',
      slug: 'wembley',
      phone: '020 8900 8526',
      hours: '09.30 - 22.00 (MON-SUN)',
      address: '22, 22A Ealing Rd, Wembley HA0 4TL',
      image: '/images/migrated/NKAryaBhavan-Wembley-2.jpeg',
    },
    {
      name: 'TOOTING',
      slug: 'tooting',
      phone: '020 8355 3555',
      hours: '10.00 - 22.00 (MON-SUN)',
      address: '254 Upper Tooting Rd, London SW17 0DN',
      image: '/images/migrated/NKAryaBhavan-Tooting-2.jpeg',
    },
  ];

  const europeanBranches = [
    {
      city: 'Paris - Gare du Nord',
      country: 'France',
      address: '185 Rue du Faubourg Saint-Denis, 75010 Paris',
      link: 'https://nkaryabhavan.fr/en/branches/gare-du-nord/',
    },
    {
      city: 'Paris - Louvre',
      country: 'France',
      address: 'Near Louvre Museum, Paris, France',
      link: 'https://nkaryabhavan.fr/en/branches/louvre/',
    },
    {
      city: 'Paris - Notre Dame',
      country: 'France',
      address: 'Near Notre Dame Cathedral, Paris, France',
      link: 'https://nkaryabhavan.fr/en/branches/notre-dame/',
    },
    {
      city: 'Brussels City Centre',
      country: 'Belgium',
      address: 'Brussels City Centre, Belgium',
      link: 'https://skaryabhavan.com/belgium/',
    },
  ];

  return (
    <main className="bg-white min-h-screen font-['Josefin_Sans',sans-serif]">
      {/* 1. Elementor Hero Banner - Exact Replica */}
      <section className="relative w-full min-h-[300px] sm:min-h-[350px] bg-black overflow-hidden flex flex-col justify-center items-center">
        <Image
          src="/images/migrated/erica-ab-bg1-a.jpg"
          alt="Arya Bhavan Restaurant Branches"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1
            id="banner-title"
            className="text-4xl sm:text-5xl lg:text-[60px] font-ivymode font-normal text-[#F6851C] uppercase tracking-[0.4em] sm:tracking-[0.5em] leading-none"
          >
            Branches
          </h1>
        </div>
      </section>

      {/* 2. UK Branches Section - Exact Elementor background #F0F0F0 and card styles */}
      <section className="py-14 sm:py-20 bg-[#F0F0F0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-ivymode font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#344E41] uppercase tracking-[2px] mb-12 sm:mb-16">
            UK Branches
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            {ukBranches.map((branch) => (
              <div
                key={branch.slug}
                className="bg-[#EFEFEF] rounded-[10px] overflow-hidden shadow-[0_0_12px_rgba(0,0,0,0.12)] border border-[#E0E0E0] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl group"
              >
                <div>
                  {/* Branch Thumbnail */}
                  <Link href={`/${branch.slug}`} className="block relative h-60 w-full overflow-hidden bg-gray-200">
                    <Image
                      src={branch.image}
                      alt={branch.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  {/* Branch Details */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <h3 className="font-ivymode font-normal text-2xl lg:text-[26px] text-[#344E41] uppercase tracking-[1px]">
                      <Link href={`/${branch.slug}`} className="hover:text-[#F6851C] transition-colors">
                        {branch.name}
                      </Link>
                    </h3>

                    <div className="font-['Josefin_Sans',sans-serif] text-[15px] sm:text-[16px] text-[#202020] leading-[2em] tracking-[0.4px]">
                      <p className="font-semibold text-[#344E41] flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#F6851C] shrink-0" />
                        <a href={`tel:${branch.phone.replace(/\s+/g, '')}`} className="hover:text-[#F6851C] transition-colors">
                          {branch.phone}
                        </a>
                      </p>
                      <p className="flex items-center gap-2 text-gray-700">
                        <Clock className="w-4 h-4 text-[#F6851C] shrink-0" />
                        <span>HOURS: {branch.hours}</span>
                      </p>
                      <p className="flex items-start gap-2 text-gray-700 pt-1">
                        <MapPin className="w-4 h-4 text-[#F6851C] shrink-0 mt-1" />
                        <span>{branch.address}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  <Link
                    href={`/${branch.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F6851C] group-hover:text-[#344E41] transition-colors"
                  >
                    <span>View Branch Menu & Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Newsletter Section - Exact Elementor background sl2.jpg */}
      <section className="relative w-full min-h-[370px] bg-black overflow-hidden flex flex-col justify-center items-center py-16 px-4">
        <Image
          src="/images/migrated/sl2.jpg"
          alt="Arya Bhavan Special Offers"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="relative z-10 max-w-xl mx-auto text-center space-y-6 w-full">
          <h2 className="text-3xl sm:text-4xl font-ivymode font-normal text-white uppercase tracking-wide">
            Get special offers from us
          </h2>

          <form
            action="#"
            method="POST"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing to Arya Bhavan special offers!');
            }}
            className="flex flex-col sm:flex-row gap-3 items-center justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter Your Email"
              className="w-full sm:flex-1 px-5 py-3 rounded-[6px] bg-white text-gray-900 placeholder-gray-500 font-['Josefin_Sans',sans-serif] text-base focus:outline-none focus:ring-2 focus:ring-[#F6851C]"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-[#F6851C] hover:bg-[#344E41] text-white font-['Josefin_Sans',sans-serif] font-bold text-base rounded-[6px] uppercase tracking-wider transition-colors shadow-sm cursor-pointer shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* 4. European Locations (France & Belgium) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-ivymode font-normal text-3xl sm:text-4xl text-[#344E41] uppercase tracking-[2px] mb-3">
              European Branches
            </h2>
            <p className="text-gray-600 font-['Josefin_Sans',sans-serif] text-base sm:text-lg">
              Expanding authentic South Indian pure vegetarian taste across Europe
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {europeanBranches.map((b, idx) => (
              <div
                key={idx}
                className="bg-[#F9F9F9] p-6 rounded-[10px] border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#F6851C] uppercase tracking-wider block">
                    {b.country}
                  </span>
                  <h4 className="font-ivymode font-bold text-lg text-gray-900">{b.city}</h4>
                  <p className="text-sm text-gray-600 font-['Josefin_Sans',sans-serif] leading-relaxed">
                    {b.address}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <a
                    href={b.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#344E41] hover:text-[#F6851C] inline-flex items-center gap-1 transition-colors uppercase tracking-wider"
                  >
                    <span>Visit European Branch</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
