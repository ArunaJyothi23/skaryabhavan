import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { buildPageMetadata } from '@/lib/seoService';
import { getSiteContent } from '@/lib/firebaseService';
import NewsletterSubscribeForm from '@/components/NewsletterSubscribeForm';

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
      phoneClean: '02078398797',
      hours: '10.30 – 22.30 (MON-SUN)',
      address: '17 Charing Cross Road, Charing Cross,\nLondon WC2H 0EP',
      image: '/images/migrated/NKAryaBhavan-Central-London-1.jpeg',
    },
    {
      name: 'WEMBLEY',
      slug: 'wembley',
      phone: '020 8900 8526',
      phoneClean: '02089008526',
      hours: '09.30 – 22.00 (MON-SUN)',
      address: '22, 22A Ealing Rd,\nWembley HA0 4TL',
      image: '/images/migrated/NKAryaBhavan-Wembley-2.jpeg',
    },
    {
      name: 'TOOTING',
      slug: 'tooting',
      phone: '020 8355 3555',
      phoneClean: '02083553555',
      hours: '10.00 – 22.00 (MON-SUN)',
      address: '254 Upper Tooting Rd,\nLondon SW17 0DN',
      image: '/images/migrated/NKAryaBhavan-Tooting-2.jpeg',
    },
    {
      name: 'BARKINGSIDE',
      slug: 'barkingside',
      phone: '020 8355 3555',
      phoneClean: '02083553555',
      hours: '09.30 – 22.00 (MON-SUN)',
      address: '43 High St,\nIlford IG6 2AD',
      image: '/images/migrated/sl2.jpg',
    },
    {
      name: 'EAST HAM',
      slug: 'eastham',
      phone: '020 8355 3555',
      phoneClean: '02083553555',
      hours: '09.30 – 22.00 (MON-SUN)',
      address: '278A High St N,\nLondon E12 6SA',
      image: '/images/migrated/sl3.jpg',
    },
    {
      name: 'ILFORD',
      slug: 'ilford',
      phone: '020 8355 3555',
      phoneClean: '02083553555',
      hours: '09.30 – 22.00 (MON-SUN)',
      address: '43 High St, Barkingside,\nIlford IG6 2AD',
      image: '/images/migrated/sl1.jpg',
    },
  ];

  const internationalBranches = [
    {
      name: 'BRUSSELS (BELGIUM)',
      slug: 'belgium',
      phone: '+32 2 675 95 41',
      phoneClean: '+3226759541',
      hours: '10.30 – 15.00 & 18.00 – 22.30 (MON-THU)\n10.30 – 22.30 (FRI-SUN)',
      address: 'Rue Jourdan 10, 1060 Saint-Gilles,\nBrussels, Belgium',
      image: '/images/migrated/WhatsApp-Image-2026-03-02-at-22.35.41.jpeg',
    },
  ];

  return (
    <div className="bg-white text-[#202020] overflow-x-hidden font-['Josefin_Sans',sans-serif]">
      {/* 1. Hero Banner: Elementor element-e0a5662 & element-3bf9cb3 */}
      <section
        className="relative w-full min-h-[200px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[350px] bg-cover bg-center flex flex-col justify-end items-center overflow-visible"
        style={{
          backgroundImage: "url('/images/migrated/erica-ab-bg1-a.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        <div
          id="banner-title"
          className="translate-y-1/2 text-center w-full select-none z-10 px-2"
        >
          <h1
            style={{
              textIndent: '0.5em',
              fontFamily: '"ivymode", serif, sans-serif',
            }}
            className="uppercase text-[#F6851C] font-normal leading-none tracking-[0.5em] text-[26px] sm:text-[44px] md:text-[68px] lg:text-[6em] m-0"
          >
            Branches
          </h1>
        </div>
      </section>

      {/* 2. UK Branches Section */}
      <section className="pt-[5em] sm:pt-[6em] pb-[3em] sm:pb-[4em] bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          {/* Section Heading */}
          <div className="text-center my-5 sm:my-8 lg:my-10">
            <h2
              style={{ fontFamily: '"ivymode", serif, sans-serif' }}
              className="font-normal text-[26px] sm:text-[34px] md:text-[40px] text-[#344E41] uppercase tracking-[2px] leading-none m-0"
            >
              UK Branches
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-[1440px] mx-auto">
            {ukBranches.map((branch) => (
              <div
                key={branch.slug}
                className="w-full flex flex-col group rounded-xl overflow-hidden shadow-xs hover:shadow-md transition"
              >
                {/* Branch Card Image */}
                <Link
                  href={`/${branch.slug}`}
                  className="block relative h-[240px] w-full overflow-hidden shrink-0"
                >
                  <Image
                    src={branch.image}
                    alt={branch.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </Link>

                {/* Branch Card Body */}
                <div className="bg-[#EFEFEF] p-[25px] sm:p-[30px] flex-1 flex flex-col justify-start">
                  <h3
                    style={{ fontFamily: '"ivymode", serif, sans-serif' }}
                    className="font-normal text-[24px] sm:text-[26px] text-[#344E41] uppercase tracking-[1px] leading-none mb-5"
                  >
                    <Link
                      href={`/${branch.slug}`}
                      className="hover:text-[#F6851C] transition-colors"
                    >
                      {branch.name}
                    </Link>
                  </h3>

                  <div
                    style={{ fontFamily: '"dunbar-low", "Josefin Sans", sans-serif' }}
                    className="text-[16px] text-[#202020] font-normal leading-[2em] tracking-[0.4px]"
                  >
                    <p className="m-0">
                      <a
                        href={`tel:${branch.phoneClean}`}
                        className="hover:text-[#F6851C] transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </p>
                    <p className="m-0">HOURS: {branch.hours}</p>
                    <p className="m-0 whitespace-pre-line">{branch.address}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-300">
                    <Link
                      href={`/${branch.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm uppercase font-bold tracking-wider text-[#F6851C] hover:text-[#d97706] transition"
                    >
                      <span>Explore Branch</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* International Section Heading */}
          <div className="text-center mt-16 mb-8 lg:mt-20 lg:mb-10">
            <h2
              style={{ fontFamily: '"ivymode", serif, sans-serif' }}
              className="font-normal text-[26px] sm:text-[34px] md:text-[40px] text-[#344E41] uppercase tracking-[2px] leading-none m-0"
            >
              International Branches
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-[1440px] mx-auto">
            {internationalBranches.map((branch) => (
              <div
                key={branch.slug}
                className="w-full flex flex-col group rounded-xl overflow-hidden shadow-xs hover:shadow-md transition"
              >
                <Link
                  href={`/${branch.slug}`}
                  className="block relative h-[240px] w-full overflow-hidden shrink-0"
                >
                  <Image
                    src={branch.image}
                    alt={branch.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </Link>

                <div className="bg-[#EFEFEF] p-[25px] sm:p-[30px] flex-1 flex flex-col justify-start">
                  <h3
                    style={{ fontFamily: '"ivymode", serif, sans-serif' }}
                    className="font-normal text-[24px] sm:text-[26px] text-[#344E41] uppercase tracking-[1px] leading-none mb-5"
                  >
                    <Link
                      href={`/${branch.slug}`}
                      className="hover:text-[#F6851C] transition-colors"
                    >
                      {branch.name}
                    </Link>
                  </h3>

                  <div
                    style={{ fontFamily: '"dunbar-low", "Josefin Sans", sans-serif' }}
                    className="text-[16px] text-[#202020] font-normal leading-[2em] tracking-[0.4px]"
                  >
                    <p className="m-0">
                      <a
                        href={`tel:${branch.phoneClean}`}
                        className="hover:text-[#F6851C] transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </p>
                    <p className="m-0 whitespace-pre-line">HOURS: {branch.hours}</p>
                    <p className="m-0 whitespace-pre-line">{branch.address}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-300">
                    <Link
                      href={`/${branch.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm uppercase font-bold tracking-wider text-[#F6851C] hover:text-[#d97706] transition"
                    >
                      <span>Explore Branch</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Newsletter Section */}
      <section
        className="relative w-full min-h-[250px] sm:min-h-[370px] bg-cover bg-center flex flex-col justify-center items-center px-4 py-12"
        style={{
          backgroundImage: "url('/images/migrated/sl2.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        <div className="w-full max-w-[600px] lg:max-w-[800px] mx-auto text-center z-10 px-4">
          <h2
            style={{ fontFamily: '"le-monde-livre-classic-byol", "ivymode", serif' }}
            className="text-white text-[20px] sm:text-[24px] md:text-[36px] font-normal uppercase leading-[1.2em] mb-[30px]"
          >
            Get special offers from us
          </h2>

          <NewsletterSubscribeForm />
        </div>
      </section>
    </div>
  );
}
