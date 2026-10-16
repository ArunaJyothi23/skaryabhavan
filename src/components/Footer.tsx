'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const companyLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Franchise', href: '/franchise' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Terms and Disclaimer', href: '/terms-and-disclaimer' },
  { label: 'Cookie Policy (UK)', href: '/cookie-policy-uk' },
];

const branchLinks = [
  {
    label: 'Gare du Nord',
    href: '/branches/gare-du-nord',
    external: 'https://nkaryabhavan.fr/en/branches/gare-du-nord/',
    matchKey: 'gare-du-nord',
  },
  {
    label: 'Louvre',
    href: '/branches/louvre',
    external: 'https://nkaryabhavan.fr/en/branches/louvre/',
    matchKey: 'louvre',
  },
  {
    label: 'Notre Dame',
    href: '/branches/notre-dame',
    external: 'https://nkaryabhavan.fr/en/branches/notre-dame/',
    matchKey: 'notre-dame',
  },
];

interface FooterProps {
  copyrightText?: string;
  disclaimerNotice?: string;
}

export default function Footer({ copyrightText, disclaimerNotice }: FooterProps) {
  const pathname = usePathname() || '';

  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="bg-[#f5f5f5] text-[#555555] pt-14 pb-8 border-t border-gray-200/60 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* 3-Column Grid matching exactly the live site footer in screenshot 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Column 1: COMPANY LINKS */}
          <div className="text-left space-y-4">
            <h3 className="font-ivymode font-bold text-base sm:text-lg tracking-widest uppercase text-[#344e41]">
              COMPANY LINKS
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-[15px] font-josefin">
              {companyLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname === link.href || pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`inline-block transition-colors ${
                        isActive
                          ? 'text-[#F6851C] font-semibold'
                          : 'text-[#5a544b] hover:text-[#F6851C]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 2: Logo, Tagline, Divider & Socials */}
          <div className="flex flex-col items-center text-center space-y-3">
            <Link href="/" className="inline-block transition-transform hover:opacity-95 duration-200">
              <div className="relative w-[320px] sm:w-[380px] md:w-[420px] h-[75px] sm:h-[88px]">
                <Image
                  src="/images/migrated/WhatsApp-Image-2026-09-10-at-22.32.49-e1789104400967.jpeg"
                  alt="Samko Arya Bhavan Pure Indian Vegetarian Restaurant"
                  fill
                  sizes="(max-width: 640px) 320px, 420px"
                  className="object-contain mix-blend-multiply"
                  priority
                />
              </div>
            </Link>

            <p className="text-sm sm:text-base text-[#4a4238] font-normal leading-relaxed max-w-xs font-['Josefin_Sans',sans-serif]">
              Enjoy our menu and<br />
              experience the taste of South<br />
              India
            </p>

            {/* Orange Divider Line */}
            <div className="w-14 h-[2px] bg-[#f68422] mx-auto my-1"></div>

            {/* Social Media Circular Buttons (live site hover: #F6851C bg and white icon) */}
            <div className="flex items-center justify-center gap-3 pt-1">
              {/* Facebook */}
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-gray-400/80 text-gray-700 hover:text-white hover:bg-[#F6851C] hover:border-[#F6851C] flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/arya.bhavan.nk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-gray-400/80 text-gray-700 hover:text-white hover:bg-[#F6851C] hover:border-[#F6851C] flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 3: BRANCHES */}
          <div className="text-left md:text-right space-y-4">
            <h3 className="font-ivymode font-bold text-base sm:text-lg tracking-widest uppercase text-[#344e41]">
              BRANCHES
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-[15px] font-josefin">
              {branchLinks.map((b) => {
                const isActive = pathname.includes(b.matchKey);
                return (
                  <li key={b.matchKey}>
                    <a
                      href={b.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block transition-colors ${
                        isActive
                          ? 'text-[#F6851C] font-semibold'
                          : 'text-[#5a544b] hover:text-[#F6851C]'
                      }`}
                    >
                      {b.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Exact Copyright & Disclaimer */}
        <div className="border-t border-gray-200/60 mt-12 pt-6 text-center text-xs sm:text-[13px] text-[#7a7267] tracking-wider uppercase space-y-1">
          {disclaimerNotice && (
            <p className="text-[12px] text-amber-900/80 max-w-3xl mx-auto italic">{disclaimerNotice}</p>
          )}
          <p>{copyrightText || `COPYRIGHT ${new Date().getFullYear()} © SAMKO ARYA BHAVAN. ALL RIGHTS RESERVED.`}</p>
        </div>

      </div>
    </footer>
  );
}
