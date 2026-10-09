import type { Metadata } from 'next';
import Image from 'next/image';
import { buildPageMetadata } from '@/lib/seoService';

export const metadata: Metadata = buildPageMetadata('/contact-us', {
  title: 'Contact Us – Samko Arya Bhavan',
  description: 'Samko Arya Bhavan pure Indian vegetarian restaurant branches in Central London, Wembley, and Tooting. View branch addresses, phone numbers, opening hours, and location maps.'
});

const branchLocations = [
  {
    id: 'central-london',
    name: 'CENTRAL LONDON',
    mapUrl:
      'https://www.google.com/maps/embed/v1/place?key=AIzaSyAygp3I8_t5UHDzf4GUHGCEUo1gBvQk-s0&q=NK%20Arya%20Bhavan%20-%20South%20Indian%20Pure%20Vegetarian%20Restaurant%20Central%20London&zoom=16',
    mapTitle: 'NK Arya Bhavan - South Indian Pure Vegetarian Restaurant Central London',
    address: '17 Charing Cross Road, Charing Cross London WC2H 0EP',
    addressLink: 'https://maps.google.com/?q=17+Charing+Cross+Road,+Charing+Cross+London+WC2H+0EP',
    phone: '020 7839 8797',
    hours: 'HOURS: 10:00 AM – 10:00 PM (MON-SUN)',
  },
  {
    id: 'wembley',
    name: 'WEMBLEY',
    mapUrl:
      'https://www.google.com/maps/embed/v1/place?key=AIzaSyAygp3I8_t5UHDzf4GUHGCEUo1gBvQk-s0&q=NK%20Arya%20Bhavan%20-%20South%20Indian%20Pure%20Vegetarian%20Restaurant%20Wembley&zoom=13',
    mapTitle: 'NK Arya Bhavan - South Indian Pure Vegetarian Restaurant Wembley',
    address: '22, 22A Ealing Rd,Wembley HA0 4TL',
    addressLink: 'https://maps.google.com/?q=22,+22A+Ealing+Rd,Wembley+HA0+4TL',
    phone: '020 8900 8526',
    hours: 'HOURS: 09.30 - 22.00 (MON-SUN)',
  },
  {
    id: 'tooting',
    name: 'TOOTING',
    mapUrl:
      'https://www.google.com/maps/embed/v1/place?key=AIzaSyAygp3I8_t5UHDzf4GUHGCEUo1gBvQk-s0&q=Arya%20Bhavan%20-%20100%25%20Pure%20South%20Indian%20Vegetarian%20Restaurant%20Tooting&zoom=16',
    mapTitle: 'Arya Bhavan - 100% Pure South Indian Vegetarian Restaurant Tooting',
    address: '254 Upper Tooting Rd London SW17 0DN',
    addressLink: 'https://maps.google.com/?q=254+Upper+Tooting+Rd+London+SW17+0DN',
    phone: '020 8355 3555',
    hours: 'HOURS: 10.00 - 22.00 (MON-SUN)',
  },
];

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-[#ECE6DF]">
      {/* Hero Banner (Exact from live site) */}
      <section className="relative w-full h-[380px] sm:h-[450px] lg:h-[506px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/migrated/Hero-banner-scaled.jpg"
          alt="Contact Us – Samko Arya Bhavan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft dark overlay matching live site */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-white font-['Josefin_Sans',sans-serif] text-[34px] sm:text-[42px] font-normal tracking-wide">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Our Branches Locations Section */}
      <section className="py-[50px] lg:py-[60px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1240px] mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-[#344E41] font-serif text-[26px] sm:text-[32px] font-semibold tracking-[1px] uppercase leading-tight">
              OUR BRANCHES LOCATIONS
            </h2>
          </div>

          {/* 3 Branches Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {branchLocations.map((branch) => (
              <div
                key={branch.id}
                className="bg-white rounded-[10px] p-[10px] pb-[25px] flex flex-col justify-start transition-all duration-300 ease-out hover:scale-[1.01] hover:shadow-[2px_0px_9px_1px_rgba(245,133,34,0.59)] shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
              >
                {/* Embedded Google Map */}
                <div className="w-full h-[250px] sm:h-[260px] rounded-[6px] overflow-hidden bg-[#e5e3df] relative">
                  <iframe
                    src={branch.mapUrl}
                    title={branch.mapTitle}
                    aria-label={branch.mapTitle}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0 block"
                  />
                </div>

                {/* Branch Heading */}
                <div className="pt-4 pb-2 px-1">
                  <h3 className="text-[#344E41] font-serif text-[26px] sm:text-[30px] font-semibold uppercase tracking-[1px] leading-[1.2]">
                    {branch.name}
                  </h3>
                </div>

                {/* Details List */}
                <ul className="px-1 space-y-3 pt-2 text-[#000000] font-['Josefin_Sans',sans-serif] text-[15px] sm:text-[16px] leading-[1.4]">
                  {/* Location Address */}
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 pt-0.5 text-[#344E41]" aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 300 300"
                        className="fill-current"
                      >
                        <path d="M150 0C95.1 0 37.5 42.6 37.5 112.5c0 66.3 99.9 167.4 103.8 171.3 2.4 2.4 5.1 3.6 8.7 3.6s6.3-1.2 8.7-3.6c3.9-3.9 103.8-105 103.8-171.3C262.5 42.6 204.9 0 150 0zm0 150c-21.3 0-37.5-16.2-37.5-37.5S128.7 75 150 75s37.5 16.2 37.5 37.5S171.3 150 150 150z" />
                      </svg>
                    </span>
                    <a
                      href={branch.addressLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F6851C] transition-colors"
                    >
                      {branch.address}
                    </a>
                  </li>

                  {/* Phone Number */}
                  <li className="flex items-center gap-3">
                    <span className="shrink-0 text-[#344E41]" aria-hidden="true">
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                      </svg>
                    </span>
                    <a
                      href={`tel:${branch.phone.replace(/\s+/g, '')}`}
                      className="hover:text-[#F6851C] transition-colors font-medium"
                    >
                      {branch.phone}
                    </a>
                  </li>

                  {/* Opening Hours */}
                  <li className="flex items-center gap-3">
                    <span className="shrink-0 text-[#344E41]" aria-hidden="true">
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                      </svg>
                    </span>
                    <span>{branch.hours}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
