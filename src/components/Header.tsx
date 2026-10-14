'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, Menu as MenuIcon, X } from 'lucide-react';

interface HeaderProps {
  logo?: string;
}

export default function Header({ logo }: HeaderProps) {
  const pathname = usePathname() || '';

  if (pathname.startsWith('/admin')) {
    return null;
  }

  const logoSrc = logo || "/images/migrated/WhatsApp_Image_2026-09-10_at_22.32.49-removebg-preview-e1789186834297.png";

  const isHome = pathname === '/';
  const isAbout = pathname === '/about-us';
  const isBranches =
    pathname.startsWith('/branches') ||
    pathname === '/wembley' ||
    pathname === '/tooting' ||
    pathname === '/central-london';
  const isMenu = pathname === '/menu';
  const isCatering = pathname.includes('catering');
  const isFranchise = pathname === '/franchise';
  const isContact = pathname === '/contact-us';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileBranchesOpen, setMobileBranchesOpen] = useState(false);
  const [mobileCateringOpen, setMobileCateringOpen] = useState(false);
  
  // Desktop dropdown states
  const [branchesDropdownOpen, setBranchesDropdownOpen] = useState(false);
  const [activeBranchCountry, setActiveBranchCountry] = useState<'uk' | 'france' | 'belgium' | null>(null);
  const [cateringDropdownOpen, setCateringDropdownOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Top Centered Logo */}
        <div className="flex h-[100px] items-center justify-between px-2 lg:h-auto lg:justify-center lg:px-0 lg:pt-[30px] lg:pb-[10px]">
          <Link href="/" className="inline-block transition-transform hover:opacity-95">
            <div className="relative h-12 w-60 sm:h-14 sm:w-72 lg:h-[87px] lg:w-[420px]">
              <Image
                src={logoSrc}
                alt="Samko Arya Bhavan Pure Indian Vegetarian Restaurant"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-[#6d1007] hover:bg-orange-50 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Navigation Bar (No horizontal line, seamless white matching live site) */}
        <div className="hidden items-center justify-center py-1 lg:flex">
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center text-[18px] font-normal leading-[1.4em]">
            
            <Link 
              href="/" 
              className={`px-[10px] py-[10px] mx-[15px] xl:mx-[20px] transition-colors ${
                isHome ? 'text-[#344E41]' : 'text-[#6D1007] hover:text-[#F6851C]'
              }`}
            >
              Home
            </Link>

            <Link 
              href="/about-us" 
              className={`px-[10px] py-[10px] mx-[15px] xl:mx-[20px] transition-colors ${
                isAbout ? 'text-[#344E41]' : 'text-[#6D1007] hover:text-[#F6851C]'
              }`}
            >
              About Us
            </Link>

            {/* Branches Dropdown with Exact Flyout Submenus */}
            <div
              className="relative mx-[15px] xl:mx-[20px]"
              onMouseEnter={() => setBranchesDropdownOpen(true)}
              onMouseLeave={() => {
                setBranchesDropdownOpen(false);
                setActiveBranchCountry(null);
              }}
            >
              <button
                className={`flex items-center gap-1.5 px-[10px] py-[10px] transition-colors duration-150 ${
                  branchesDropdownOpen
                    ? 'text-[#F6851C]'
                    : isBranches
                    ? 'text-[#344E41]'
                    : 'text-[#6D1007] hover:text-[#F6851C]'
                }`}
                onClick={() => setBranchesDropdownOpen(!branchesDropdownOpen)}
              >
                <span>Branches</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${branchesDropdownOpen ? 'rotate-180 text-[#F6851C]' : 'text-current'}`} />
              </button>

              {/* Level 1 Dropdown */}
              {branchesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 w-48 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.12)] border border-gray-100 py-1.5 z-50 animate-in fade-in duration-150"
                  onMouseLeave={() => setActiveBranchCountry(null)}
                >
                  
                  {/* Country 1: UK */}
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveBranchCountry('uk')}
                  >
                    <div
                      className={`flex items-center justify-between px-5 py-2.5 text-[15px] font-medium cursor-pointer transition-colors ${
                        activeBranchCountry === 'uk' ? 'text-[#F6851C]' : 'text-[#222222] hover:text-[#F6851C]'
                      }`}
                    >
                      <span>UK</span>
                      <ChevronRight className="w-4 h-4 stroke-[1.5]" />
                    </div>

                    {/* Level 2 Flyout: UK Branches */}
                    {activeBranchCountry === 'uk' && (
                      <div className="absolute top-0 left-full w-52 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.12)] border border-gray-100 py-1.5 z-50 animate-in fade-in duration-100">
                        <Link
                          href="/central-london"
                          className="block px-5 py-2 text-[15px] text-[#222222] hover:text-[#F6851C] transition-colors"
                        >
                          Central London
                        </Link>
                        <Link
                          href="/wembley"
                          className="block px-5 py-2 text-[15px] text-[#222222] hover:text-[#F6851C] transition-colors"
                        >
                          Wembley
                        </Link>
                        <Link
                          href="/tooting"
                          className="block px-5 py-2 text-[15px] text-[#222222] hover:text-[#F6851C] transition-colors"
                        >
                          Tooting
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Country 2: France */}
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveBranchCountry('france')}
                  >
                    <div
                      className={`flex items-center justify-between px-5 py-2.5 text-[15px] font-medium cursor-pointer transition-colors ${
                        activeBranchCountry === 'france' ? 'text-[#F6851C]' : 'text-[#222222] hover:text-[#F6851C]'
                      }`}
                    >
                      <span>France</span>
                      <ChevronRight className="w-4 h-4 stroke-[1.5]" />
                    </div>

                    {/* Level 2 Flyout: France Branches */}
                    {activeBranchCountry === 'france' && (
                      <div className="absolute top-0 left-full w-52 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.12)] border border-gray-100 py-1.5 z-50 animate-in fade-in duration-100">
                        <a
                          href="https://nkaryabhavan.fr/en/branches/gare-du-nord/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-5 py-2 text-[15px] text-[#222222] hover:text-[#F6851C] transition-colors"
                        >
                          Gare du Nord
                        </a>
                        <a
                          href="https://nkaryabhavan.fr/en/branches/louvre/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-5 py-2 text-[15px] text-[#222222] hover:text-[#F6851C] transition-colors"
                        >
                          Louvre
                        </a>
                        <a
                          href="https://nkaryabhavan.fr/en/branches/notre-dame/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-5 py-2 text-[15px] text-[#222222] hover:text-[#F6851C] transition-colors"
                        >
                          Notre Dame
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Country 3: Belgium */}
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveBranchCountry('belgium')}
                  >
                    <div
                      className={`flex items-center justify-between px-5 py-2.5 text-[15px] font-medium cursor-pointer transition-colors ${
                        activeBranchCountry === 'belgium' ? 'text-[#F6851C]' : 'text-[#222222] hover:text-[#F6851C]'
                      }`}
                    >
                      <span>Belgium</span>
                      <ChevronRight className="w-4 h-4 stroke-[1.5]" />
                    </div>

                    {/* Level 2 Flyout: Belgium Branches */}
                    {activeBranchCountry === 'belgium' && (
                      <div className="absolute top-0 left-full w-52 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.12)] border border-gray-100 py-1.5 z-50 animate-in fade-in duration-100">
                        <Link
                          href="/branches"
                          className="block px-5 py-2 text-[15px] text-[#222222] hover:text-[#F6851C] transition-colors"
                        >
                          Brussels
                        </Link>
                      </div>
                    )}
                  </div>

                </div>
              )}
            </div>

            <Link 
              href="/menu" 
              className={`px-[10px] py-[10px] mx-[15px] xl:mx-[20px] transition-colors ${
                isMenu ? 'text-[#344E41]' : 'text-[#6D1007] hover:text-[#F6851C]'
              }`}
            >
              Menu
            </Link>

            {/* Catering Dropdown */}
            <div
              className="relative mx-[15px] xl:mx-[20px]"
              onMouseEnter={() => setCateringDropdownOpen(true)}
              onMouseLeave={() => setCateringDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 px-[10px] py-[10px] transition-colors duration-150 ${
                  cateringDropdownOpen
                    ? 'text-[#F6851C]'
                    : isCatering
                    ? 'text-[#344E41]'
                    : 'text-[#6D1007] hover:text-[#F6851C]'
                }`}
                onClick={() => setCateringDropdownOpen(!cateringDropdownOpen)}
              >
                <span>Catering</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${cateringDropdownOpen ? 'rotate-180 text-[#F6851C]' : 'text-current'}`} />
              </button>

              {cateringDropdownOpen && (
                <div className="absolute top-full left-0 w-52 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.12)] border border-gray-100 py-1.5 z-50 animate-in fade-in duration-150">
                  <Link
                    href="/live-dosa-catering"
                    className="block px-5 py-2 text-[15px] text-[#222222] hover:text-[#F6851C] transition-colors"
                  >
                    Live Dosa Catering
                  </Link>
                  <Link
                    href="/outdoor-catering"
                    className="block px-5 py-2 text-[15px] text-[#222222] hover:text-[#F6851C] transition-colors"
                  >
                    Outdoor Catering
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/franchise" 
              className={`px-[10px] py-[10px] mx-[15px] xl:mx-[20px] transition-colors ${
                isFranchise ? 'text-[#344E41]' : 'text-[#6D1007] hover:text-[#F6851C]'
              }`}
            >
              Franchise
            </Link>

            <Link 
              href="/contact-us" 
              className={`px-[10px] py-[10px] mx-[15px] xl:mx-[20px] transition-colors ${
                isContact ? 'text-[#344E41]' : 'text-[#6D1007] hover:text-[#F6851C]'
              }`}
            >
              Contact
            </Link>

          </nav>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 space-y-3 animate-in fade-in duration-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-1.5 text-base ${
                isHome ? 'text-[#344E41] font-bold' : 'text-[#6D1007] font-semibold hover:text-[#F6851C]'
              }`}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-1.5 text-base ${
                isAbout ? 'text-[#344E41] font-bold' : 'text-[#6D1007] font-semibold hover:text-[#F6851C]'
              }`}
            >
              About Us
            </Link>

            {/* Mobile Branches Accordion */}
            <div className="py-2 border-y border-gray-100">
              <button
                onClick={() => setMobileBranchesOpen(!mobileBranchesOpen)}
                className={`w-full flex items-center justify-between py-1.5 text-base ${
                  isBranches ? 'text-[#344E41] font-bold' : 'text-[#6D1007] font-semibold'
                }`}
              >
                <span>Branches</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileBranchesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileBranchesOpen && (
                <div className="pl-4 pt-2 space-y-3">
                  <div>
                    <div className="text-xs font-bold uppercase text-[#F6851C] tracking-wider mb-1">
                      UK Branches
                    </div>
                    <div className="pl-2 space-y-1.5">
                      <Link
                        href="/central-london"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block text-sm ${pathname === '/central-london' ? 'text-[#344E41] font-bold' : 'text-gray-700 hover:text-[#F6851C]'}`}
                      >
                        Central London
                      </Link>
                      <Link
                        href="/wembley"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block text-sm ${pathname === '/wembley' ? 'text-[#344E41] font-bold' : 'text-gray-700 hover:text-[#F6851C]'}`}
                      >
                        Wembley
                      </Link>
                      <Link
                        href="/tooting"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block text-sm ${pathname === '/tooting' ? 'text-[#344E41] font-bold' : 'text-gray-700 hover:text-[#F6851C]'}`}
                      >
                        Tooting
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase text-[#F6851C] tracking-wider mb-1">
                      France Branches
                    </div>
                    <div className="pl-2 space-y-1.5">
                      <a
                        href="https://nkaryabhavan.fr/en/branches/gare-du-nord/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-gray-700 hover:text-[#F6851C]"
                      >
                        Gare du Nord
                      </a>
                      <a
                        href="https://nkaryabhavan.fr/en/branches/louvre/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-gray-700 hover:text-[#F6851C]"
                      >
                        Louvre
                      </a>
                      <a
                        href="https://nkaryabhavan.fr/en/branches/notre-dame/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-gray-700 hover:text-[#F6851C]"
                      >
                        Notre Dame
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase text-[#F6851C] tracking-wider mb-1">
                      Belgium Branch
                    </div>
                    <div className="pl-2 space-y-1.5">
                      <Link
                        href="/branches"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block text-sm ${pathname === '/branches' ? 'text-[#344E41] font-bold' : 'text-gray-700 hover:text-[#F6851C]'}`}
                      >
                        Brussels
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/menu"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-1.5 text-base ${
                isMenu ? 'text-[#344E41] font-bold' : 'text-[#6D1007] font-semibold hover:text-[#F6851C]'
              }`}
            >
              Menu
            </Link>

            {/* Mobile Catering Accordion */}
            <div className="py-2 border-b border-gray-100">
              <button
                onClick={() => setMobileCateringOpen(!mobileCateringOpen)}
                className={`w-full flex items-center justify-between py-1.5 text-base ${
                  isCatering ? 'text-[#344E41] font-bold' : 'text-[#6D1007] font-semibold'
                }`}
              >
                <span>Catering</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileCateringOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileCateringOpen && (
                <div className="pl-4 pt-2 space-y-1.5">
                  <Link
                    href="/live-dosa-catering"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-sm ${pathname === '/live-dosa-catering' ? 'text-[#344E41] font-bold' : 'text-gray-700 hover:text-[#F6851C]'}`}
                  >
                    Live Dosa Catering
                  </Link>
                  <Link
                    href="/outdoor-catering"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-sm ${pathname === '/outdoor-catering' ? 'text-[#344E41] font-bold' : 'text-gray-700 hover:text-[#F6851C]'}`}
                  >
                    Outdoor Catering
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/franchise"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-1.5 text-base ${
                isFranchise ? 'text-[#344E41] font-bold' : 'text-[#6D1007] font-semibold hover:text-[#F6851C]'
              }`}
            >
              Franchise
            </Link>

            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-1.5 text-base ${
                isContact ? 'text-[#344E41] font-bold' : 'text-[#6D1007] font-semibold hover:text-[#F6851C]'
              }`}
            >
              Contact
            </Link>

          </div>
        )}

      </div>
    </header>
  );
}
