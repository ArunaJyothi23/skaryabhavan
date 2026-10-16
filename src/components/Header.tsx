'use client';

import React, { useState, useEffect } from 'react';
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

  const logoSrc = logo || "/images/migrated/WhatsApp-Image-2026-09-10-at-22.32.49-e1789104400967.jpeg";

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

  // Scroll transition state for cool sticky navbar effect
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = React.useRef<HTMLElement>(null);

  const closeAllDropdowns = () => {
    setBranchesDropdownOpen(false);
    setActiveBranchCountry(null);
    setCateringDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileBranchesOpen(false);
    setMobileCateringOpen(false);
  };

  // Close all dropdowns when navigating to a new route
  useEffect(() => {
    closeAllDropdowns();
  }, [pathname]);

  // Close dropdowns if user clicks outside of header
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        closeAllDropdowns();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          // Robust hysteresis deadband prevents oscillation / flying glitch
          if (y > 90) {
            setIsScrolled(true);
          } else if (y < 25) {
            setIsScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      ref={headerRef}
      className={`bg-white sticky top-0 z-50 font-['Josefin_Sans',sans-serif] transition-all duration-300 ease-in-out ${
      isScrolled ? 'shadow-[0_4px_25px_rgba(0,0,0,0.08)] py-1.5 border-b border-gray-100/80' : 'shadow-none py-0'
    }`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Mobile Header Bar */}
        <div className="flex h-[75px] items-center justify-between px-2 lg:hidden">
          <Link href="/" className="inline-block transition-transform hover:opacity-95">
            <div className="relative h-12 w-60 sm:h-14 sm:w-72">
              <Image
                src={logoSrc}
                alt="Samko Arya Bhavan Pure Indian Vegetarian Restaurant"
                fill
                sizes="(max-width: 640px) 240px, 288px"
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

        {/* Desktop Top Centered Logo (smoothly collapses into the center navbar logo on scroll) */}
        <div className={`hidden lg:flex items-center justify-center transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'max-h-0 opacity-0 -translate-y-4 overflow-hidden pointer-events-none py-0' 
            : 'max-h-[140px] opacity-100 translate-y-0 pt-[18px] pb-[4px]'
        }`}>
          <Link href="/" className="inline-block transition-transform hover:opacity-95">
            <div className="relative h-[87px] w-[420px]">
              <Image
                src={logoSrc}
                alt="Samko Arya Bhavan Pure Indian Vegetarian Restaurant"
                fill
                sizes="420px"
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Navigation Bar */}
        <div className={`hidden items-center justify-center transition-all duration-300 ease-in-out lg:flex ${isScrolled ? 'py-1' : 'pb-1 pt-0'}`}>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center w-full font-['Josefin_Sans',sans-serif] text-[18px] font-normal leading-[1.4em]">
            
            {/* Left 4 Navigation Items */}
            <div className={`flex items-center transition-all duration-300 ${isScrolled ? 'flex-1 justify-end' : 'justify-center'}`}>
              <Link 
                href="/" 
                className={`px-[10px] py-[4px] mx-[15px] xl:mx-[20px] transition-colors duration-150 ${
                  isHome ? 'text-[#344E41]' : 'text-[#6D1007] hover:text-[#F6851C]'
                }`}
              >
                Home
              </Link>

              <Link 
                href="/about-us" 
                className={`px-[10px] py-[4px] mx-[15px] xl:mx-[20px] transition-colors duration-150 ${
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
                  type="button"
                  className={`flex items-center gap-1.5 px-[10px] py-[4px] font-['Josefin_Sans',sans-serif] text-[18px] font-normal leading-[1.4em] transition-colors duration-150 cursor-pointer ${
                    branchesDropdownOpen
                      ? 'text-[#F6851C]'
                      : isBranches
                      ? 'text-[#344E41]'
                      : 'text-[#6D1007] hover:text-[#F6851C]'
                  }`}
                  onClick={() => setBranchesDropdownOpen(!branchesDropdownOpen)}
                >
                  <span>Branches</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 stroke-[1.5] ${
                    branchesDropdownOpen ? 'rotate-180 text-[#F6851C]' : 'text-current hover:rotate-180 hover:text-[#F6851C]'
                  }`} />
                </button>

                {/* Level 1 Dropdown */}
                {branchesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 w-[240px] lg:w-[250px] bg-white shadow-[5px_5px_20px_0px_rgba(0,0,0,0.08)] py-2 z-50 border border-gray-100/50 before:content-[''] before:absolute before:-top-2.5 before:left-0 before:w-full before:h-2.5"
                    onMouseLeave={() => setActiveBranchCountry(null)}
                  >
                    
                    {/* Country 1: UK */}
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveBranchCountry('uk')}
                    >
                      <div
                        className={`flex items-center justify-between px-6 py-2.5 font-['Josefin_Sans',sans-serif] text-[18px] font-normal leading-[1.4em] cursor-pointer transition-colors duration-150 ${
                          activeBranchCountry === 'uk' ? 'text-[#F6851C]' : 'text-[#202020] hover:text-[#F6851C]'
                        }`}
                      >
                        <span>UK</span>
                        <ChevronRight className={`w-4 h-4 stroke-[1.5] transition-colors duration-150 ${
                          activeBranchCountry === 'uk' ? 'text-[#F6851C]' : 'text-[#202020]'
                        }`} />
                      </div>

                      {/* Level 2 Flyout: UK Branches (Exact top-0 alignment matching Image 3) */}
                      {activeBranchCountry === 'uk' && (
                        <div className="absolute top-0 left-full w-[240px] lg:w-[250px] bg-white shadow-[0px_5px_20px_0px_rgba(0,0,0,0.08)] py-2 z-50 border border-gray-100/50 before:content-[''] before:absolute before:-left-3 before:top-0 before:w-3 before:h-full">
                          <Link
                            href="/central-london"
                            onClick={closeAllDropdowns}
                            className="block px-6 py-2.5 font-['Josefin_Sans',sans-serif] text-[18px] font-normal leading-[1.4em] text-[#202020] hover:text-[#F6851C] transition-colors duration-150"
                          >
                            Central London
                          </Link>
                          <Link
                            href="/wembley"
                            onClick={closeAllDropdowns}
                            className="block px-6 py-2.5 font-['Josefin_Sans',sans-serif] text-[18px] font-normal leading-[1.4em] text-[#202020] hover:text-[#F6851C] transition-colors duration-150"
                          >
                            Wembley
                          </Link>
                          <Link
                            href="/tooting"
                            onClick={closeAllDropdowns}
                            className="block px-6 py-2.5 font-['Josefin_Sans',sans-serif] text-[18px] font-normal leading-[1.4em] text-[#202020] hover:text-[#F6851C] transition-colors duration-150"
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
                        className={`flex items-center justify-between px-6 py-2.5 font-['Josefin_Sans',sans-serif] text-[18px] font-normal leading-[1.4em] cursor-pointer transition-colors duration-150 ${
                          activeBranchCountry === 'france' ? 'text-[#F6851C]' : 'text-[#202020] hover:text-[#F6851C]'
                        }`}
                      >
                        <span>France</span>
                        <ChevronRight className={`w-4 h-4 stroke-[1.5] transition-colors duration-150 ${
                          activeBranchCountry === 'france' ? 'text-[#F6851C]' : 'text-[#202020]'
                        }`} />
                      </div>

                      {/* Level 2 Flyout: France Branches (Exact top-0 alignment matching Image 4) */}
                      {activeBranchCountry === 'france' && (
                        <div className="absolute top-0 left-full w-[240px] lg:w-[250px] bg-white shadow-[0px_5px_20px_0px_rgba(0,0,0,0.08)] py-2 z-50 border border-gray-100/50 before:content-[''] before:absolute before:-left-3 before:top-0 before:w-3 before:h-full">
                          <a
                            href="https://nkaryabhavan.fr/en/branches/gare-du-nord/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeAllDropdowns}
                            className="block px-6 py-2.5 font-['Josefin_Sans',sans-serif] text-[18px] font-normal leading-[1.4em] text-[#202020] hover:text-[#F6851C] transition-colors duration-150"
                          >
                            Gare du Nord
                          </a>
                          <a
                            href="https://nkaryabhavan.fr/en/branches/louvre/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeAllDropdowns}
                            className="block px-6 py-2.5 font-['Josefin_Sans',sans-serif] text-[18px] font-normal leading-[1.4em] text-[#202020] hover:text-[#F6851C] transition-colors duration-150"
                          >
                            Louvre
                          </a>
                          <a
                            href="https://nkaryabhavan.fr/en/branches/notre-dame/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeAllDropdowns}
                            className="block px-6 py-2.5 font-['Josefin_Sans',sans-serif] text-[18px] font-normal leading-[1.4em] text-[#202020] hover:text-[#F6851C] transition-colors duration-150"
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
                        className={`flex items-center justify-between px-6 py-2.5 font-['Josefin_Sans',sans-serif] text-[18px] font-normal leading-[1.4em] cursor-pointer transition-colors duration-150 ${
                          activeBranchCountry === 'belgium' ? 'text-[#F6851C]' : 'text-[#202020] hover:text-[#F6851C]'
                        }`}
                      >
                        <span>Belgium</span>
                        <ChevronRight className={`w-4 h-4 stroke-[1.5] transition-colors duration-150 ${
                          activeBranchCountry === 'belgium' ? 'text-[#F6851C]' : 'text-[#202020]'
                        }`} />
                      </div>

                      {/* Level 2 Flyout: Belgium Branches (Exact top-0 alignment matching Image 5) */}
                      {activeBranchCountry === 'belgium' && (
                        <div className="absolute top-0 left-full w-[240px] lg:w-[250px] bg-white shadow-[0px_5px_20px_0px_rgba(0,0,0,0.08)] py-2 z-50 border border-gray-100/50 before:content-[''] before:absolute before:-left-3 before:top-0 before:w-3 before:h-full">
                          <Link
                            href="/belgium"
                            onClick={closeAllDropdowns}
                            className="block px-6 py-2.5 font-['Josefin_Sans',sans-serif] text-[18px] font-normal leading-[1.4em] text-[#202020] hover:text-[#F6851C] transition-colors duration-150"
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
                onClick={closeAllDropdowns}
                className={`px-[10px] py-[4px] mx-[15px] xl:mx-[20px] transition-colors duration-150 ${
                  isMenu ? 'text-[#344E41]' : 'text-[#6D1007] hover:text-[#F6851C]'
                }`}
              >
                Menu
              </Link>
            </div>

            {/* Center Logo (Expands in the middle between 4 left items and 3 right items while scrolling) */}
            <div
              className={`hidden lg:flex items-center justify-center shrink-0 transition-all duration-300 ease-in-out ${
                isScrolled
                  ? 'max-w-[240px] opacity-100 scale-100 mx-3 xl:mx-6 pointer-events-auto'
                  : 'max-w-0 opacity-0 scale-75 mx-0 overflow-hidden pointer-events-none'
              }`}
            >
              <Link href="/" onClick={closeAllDropdowns} className="inline-block transition-transform hover:opacity-95">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logoSrc}
                  alt="Samko Arya Bhavan Pure Indian Vegetarian Restaurant"
                  className="h-[44px] xl:h-[48px] w-auto max-w-[220px] object-contain block"
                />
              </Link>
            </div>

            {/* Right Remaining 3 Items */}
            <div className={`flex items-center transition-all duration-300 ${isScrolled ? 'flex-1 justify-start' : 'justify-center'}`}>
              {/* Catering Dropdown */}
              <div
                className="relative mx-[15px] xl:mx-[20px]"
                onMouseEnter={() => setCateringDropdownOpen(true)}
                onMouseLeave={() => setCateringDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1.5 px-[10px] py-[4px] font-['Josefin_Sans',sans-serif] text-[18px] font-normal leading-[1.4em] transition-colors duration-150 cursor-pointer ${
                    cateringDropdownOpen
                      ? 'text-[#F6851C]'
                      : isCatering
                      ? 'text-[#344E41]'
                      : 'text-[#6D1007] hover:text-[#F6851C]'
                  }`}
                  onClick={() => setCateringDropdownOpen(!cateringDropdownOpen)}
                >
                  <span>Catering</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 stroke-[1.5] ${
                    cateringDropdownOpen ? 'rotate-180 text-[#F6851C]' : 'text-current hover:rotate-180 hover:text-[#F6851C]'
                  }`} />
                </button>

                {cateringDropdownOpen && (
                  <div className="absolute top-full left-0 w-[240px] lg:w-[250px] bg-white shadow-[5px_5px_20px_0px_rgba(0,0,0,0.08)] py-2 z-50 border border-gray-100/50 before:content-[''] before:absolute before:-top-2.5 before:left-0 before:w-full before:h-2.5">
                    <Link
                      href="/live-dosa-catering"
                      onClick={closeAllDropdowns}
                      className="block px-6 py-2.5 font-['Josefin_Sans',sans-serif] text-[18px] font-normal leading-[1.4em] text-[#202020] hover:text-[#F6851C] transition-colors duration-150"
                    >
                      Live Dosa Catering
                    </Link>
                    <Link
                      href="/outdoor-catering"
                      onClick={closeAllDropdowns}
                      className="block px-6 py-2.5 font-['Josefin_Sans',sans-serif] text-[18px] font-normal leading-[1.4em] text-[#202020] hover:text-[#F6851C] transition-colors duration-150"
                    >
                      Outdoor Catering
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/franchise" 
                onClick={closeAllDropdowns}
                className={`px-[10px] py-[4px] mx-[15px] xl:mx-[20px] transition-colors duration-150 ${
                  isFranchise ? 'text-[#344E41]' : 'text-[#6D1007] hover:text-[#F6851C]'
                }`}
              >
                Franchise
              </Link>

              <Link 
                href="/contact-us" 
                onClick={closeAllDropdowns}
                className={`px-[10px] py-[4px] mx-[15px] xl:mx-[20px] transition-colors duration-150 ${
                  isContact ? 'text-[#344E41]' : 'text-[#6D1007] hover:text-[#F6851C]'
                }`}
              >
                Contact
              </Link>
            </div>

          </nav>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 space-y-3 font-['Josefin_Sans',sans-serif] text-[18px] animate-in fade-in duration-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-1.5 transition-colors ${
                isHome ? 'text-[#344E41] font-semibold' : 'text-[#6D1007] hover:text-[#F6851C]'
              }`}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-1.5 transition-colors ${
                isAbout ? 'text-[#344E41] font-semibold' : 'text-[#6D1007] hover:text-[#F6851C]'
              }`}
            >
              About Us
            </Link>

            {/* Mobile Branches Accordion */}
            <div className="py-2 border-y border-gray-100">
              <button
                type="button"
                onClick={() => setMobileBranchesOpen(!mobileBranchesOpen)}
                className={`w-full flex items-center justify-between py-1.5 font-['Josefin_Sans',sans-serif] text-[18px] transition-colors cursor-pointer ${
                  isBranches ? 'text-[#344E41] font-semibold' : 'text-[#6D1007] hover:text-[#F6851C]'
                }`}
              >
                <span>Branches</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileBranchesOpen ? 'rotate-180 text-[#F6851C]' : ''}`} />
              </button>

              {mobileBranchesOpen && (
                <div className="pl-4 pt-2 space-y-3 font-['Josefin_Sans',sans-serif]">
                  <div>
                    <div className="text-[14px] font-semibold uppercase text-[#F6851C] tracking-wider mb-1">
                      UK Branches
                    </div>
                    <div className="pl-2 space-y-2">
                      <Link
                        href="/central-london"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-[17px] text-[#202020] hover:text-[#F6851C] transition-colors"
                      >
                        Central London
                      </Link>
                      <Link
                        href="/wembley"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-[17px] text-[#202020] hover:text-[#F6851C] transition-colors"
                      >
                        Wembley
                      </Link>
                      <Link
                        href="/tooting"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-[17px] text-[#202020] hover:text-[#F6851C] transition-colors"
                      >
                        Tooting
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="text-[14px] font-semibold uppercase text-[#F6851C] tracking-wider mb-1">
                      France Branches
                    </div>
                    <div className="pl-2 space-y-2">
                      <a
                        href="https://nkaryabhavan.fr/en/branches/gare-du-nord/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[17px] text-[#202020] hover:text-[#F6851C]"
                      >
                        Gare du Nord
                      </a>
                      <a
                        href="https://nkaryabhavan.fr/en/branches/louvre/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[17px] text-[#202020] hover:text-[#F6851C]"
                      >
                        Louvre
                      </a>
                      <a
                        href="https://nkaryabhavan.fr/en/branches/notre-dame/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[17px] text-[#202020] hover:text-[#F6851C]"
                      >
                        Notre Dame
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="text-[14px] font-semibold uppercase text-[#F6851C] tracking-wider mb-1">
                      Belgium Branch
                    </div>
                    <div className="pl-2 space-y-2">
                      <Link
                        href="/belgium"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block text-[17px] ${pathname === '/belgium' ? 'text-[#344E41] font-semibold' : 'text-[#202020] hover:text-[#F6851C]'}`}
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
              className={`block py-1.5 transition-colors ${
                isMenu ? 'text-[#344E41] font-semibold' : 'text-[#6D1007] hover:text-[#F6851C]'
              }`}
            >
              Menu
            </Link>

            {/* Mobile Catering Accordion */}
            <div className="py-2 border-b border-gray-100">
              <button
                type="button"
                onClick={() => setMobileCateringOpen(!mobileCateringOpen)}
                className={`w-full flex items-center justify-between py-1.5 font-['Josefin_Sans',sans-serif] text-[18px] transition-colors cursor-pointer ${
                  isCatering ? 'text-[#344E41] font-semibold' : 'text-[#6D1007] hover:text-[#F6851C]'
                }`}
              >
                <span>Catering</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileCateringOpen ? 'rotate-180 text-[#F6851C]' : ''}`} />
              </button>

              {mobileCateringOpen && (
                <div className="pl-4 pt-2 space-y-2 font-['Josefin_Sans',sans-serif]">
                  <Link
                    href="/live-dosa-catering"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-[17px] ${pathname === '/live-dosa-catering' ? 'text-[#344E41] font-semibold' : 'text-[#202020] hover:text-[#F6851C]'}`}
                  >
                    Live Dosa Catering
                  </Link>
                  <Link
                    href="/outdoor-catering"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-[17px] ${pathname === '/outdoor-catering' ? 'text-[#344E41] font-semibold' : 'text-[#202020] hover:text-[#F6851C]'}`}
                  >
                    Outdoor Catering
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/franchise"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-1.5 transition-colors ${
                isFranchise ? 'text-[#344E41] font-semibold' : 'text-[#6D1007] hover:text-[#F6851C]'
              }`}
            >
              Franchise
            </Link>

            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-1.5 transition-colors ${
                isContact ? 'text-[#344E41] font-semibold' : 'text-[#6D1007] hover:text-[#F6851C]'
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
