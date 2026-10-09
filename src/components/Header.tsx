'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ChevronRight, Menu as MenuIcon, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileBranchesOpen, setMobileBranchesOpen] = useState(false);
  const [mobileCateringOpen, setMobileCateringOpen] = useState(false);
  
  // Desktop dropdown states
  const [branchesDropdownOpen, setBranchesDropdownOpen] = useState(false);
  const [activeBranchCountry, setActiveBranchCountry] = useState<'uk' | 'france' | 'belgium' | null>(null);
  const [cateringDropdownOpen, setCateringDropdownOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Logo */}
        <div className="pt-4 pb-2 flex justify-center items-center">
          <Link href="/" className="inline-block transition-transform hover:opacity-95">
            <div className="relative w-64 sm:w-80 h-16 sm:h-20">
              <Image
                src="/images/migrated/WhatsApp_Image_2026-09-10_at_22.32.49-removebg-preview-e1789186834297.png"
                alt="Samko Arya Bhavan Pure Indian Vegetarian Restaurant"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Navigation Bar */}
        <div className="flex justify-between lg:justify-center items-center py-3 border-t border-gray-100">
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 text-[18px] font-normal leading-[1.4em]">
            
            <Link 
              href="/" 
              className="text-[#6d1007] hover:text-[#f68422] transition-colors"
            >
              Home
            </Link>

            <Link 
              href="/about-us" 
              className="text-[#6d1007] hover:text-[#f68422] transition-colors"
            >
              About Us
            </Link>

            {/* Branches Dropdown with Exact Flyout Submenus */}
            <div
              className="relative"
              onMouseEnter={() => setBranchesDropdownOpen(true)}
              onMouseLeave={() => {
                setBranchesDropdownOpen(false);
                setActiveBranchCountry(null);
              }}
            >
              <button
                className={`flex items-center gap-1.5 py-1 transition-colors duration-150 ${
                  branchesDropdownOpen ? 'text-[#f68422]' : 'text-[#6d1007] hover:text-[#f68422]'
                }`}
                onClick={() => setBranchesDropdownOpen(!branchesDropdownOpen)}
              >
                <span>Branches</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${branchesDropdownOpen ? 'rotate-180 text-[#f68422]' : ''}`} />
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
                        activeBranchCountry === 'uk' ? 'text-[#f68422]' : 'text-[#222222] hover:text-[#f68422]'
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
                          className="block px-5 py-2 text-[15px] text-[#222222] hover:text-[#f68422] transition-colors"
                        >
                          Central London
                        </Link>
                        <Link
                          href="/wembley"
                          className="block px-5 py-2 text-[15px] text-[#222222] hover:text-[#f68422] transition-colors"
                        >
                          Wembley
                        </Link>
                        <Link
                          href="/tooting"
                          className="block px-5 py-2 text-[15px] text-[#222222] hover:text-[#f68422] transition-colors"
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
                        activeBranchCountry === 'france' ? 'text-[#f68422]' : 'text-[#222222] hover:text-[#f68422]'
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
                          className="block px-5 py-2 text-[15px] text-[#222222] hover:text-[#f68422] transition-colors"
                        >
                          Gare du Nord
                        </a>
                        <a
                          href="https://nkaryabhavan.fr/en/branches/louvre/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-5 py-2 text-[15px] text-[#222222] hover:text-[#f68422] transition-colors"
                        >
                          Louvre
                        </a>
                        <a
                          href="https://nkaryabhavan.fr/en/branches/notre-dame/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-5 py-2 text-[15px] text-[#222222] hover:text-[#f68422] transition-colors"
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
                        activeBranchCountry === 'belgium' ? 'text-[#f68422]' : 'text-[#222222] hover:text-[#f68422]'
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
                          className="block px-5 py-2 text-[15px] text-[#222222] hover:text-[#f68422] transition-colors"
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
              className="text-[#6d1007] hover:text-[#f68422] transition-colors"
            >
              Menu
            </Link>

            {/* Catering Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCateringDropdownOpen(true)}
              onMouseLeave={() => setCateringDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 py-1 transition-colors duration-150 ${
                  cateringDropdownOpen ? 'text-[#f68422]' : 'text-[#6d1007] hover:text-[#f68422]'
                }`}
                onClick={() => setCateringDropdownOpen(!cateringDropdownOpen)}
              >
                <span>Catering</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${cateringDropdownOpen ? 'rotate-180 text-[#f68422]' : ''}`} />
              </button>

              {cateringDropdownOpen && (
                <div className="absolute top-full left-0 w-52 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.12)] border border-gray-100 py-1.5 z-50 animate-in fade-in duration-150">
                  <Link
                    href="/live-dosa-catering"
                    className="block px-5 py-2 text-[15px] text-[#222222] hover:text-[#f68422] transition-colors"
                  >
                    Live Dosa Catering
                  </Link>
                  <Link
                    href="/outdoor-catering"
                    className="block px-5 py-2 text-[15px] text-[#222222] hover:text-[#f68422] transition-colors"
                  >
                    Outdoor Catering
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/franchise" 
              className="text-[#6d1007] hover:text-[#f68422] transition-colors"
            >
              Franchise
            </Link>

            <Link 
              href="/contact-us" 
              className="text-[#6d1007] hover:text-[#f68422] transition-colors"
            >
              Contact
            </Link>

          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <span className="text-xs font-bold uppercase text-[#6d1007] tracking-wider">
              Arya Bhavan Menu
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#6d1007] hover:bg-orange-50 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 space-y-3 animate-in fade-in duration-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-[#6d1007] hover:text-[#f68422] py-1.5 text-base"
            >
              Home
            </Link>

            <Link
              href="/about-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-[#6d1007] hover:text-[#f68422] py-1.5 text-base"
            >
              About Us
            </Link>

            {/* Mobile Branches Accordion */}
            <div className="py-2 border-y border-gray-100">
              <button
                onClick={() => setMobileBranchesOpen(!mobileBranchesOpen)}
                className="w-full flex items-center justify-between font-semibold text-[#6d1007] py-1.5 text-base"
              >
                <span>Branches</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileBranchesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileBranchesOpen && (
                <div className="pl-4 pt-2 space-y-3">
                  <div>
                    <div className="text-xs font-bold uppercase text-[#f68422] tracking-wider mb-1">
                      UK Branches
                    </div>
                    <div className="pl-2 space-y-1.5">
                      <Link
                        href="/central-london"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-gray-700 hover:text-[#f68422]"
                      >
                        Central London
                      </Link>
                      <Link
                        href="/wembley"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-gray-700 hover:text-[#f68422]"
                      >
                        Wembley
                      </Link>
                      <Link
                        href="/tooting"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-gray-700 hover:text-[#f68422]"
                      >
                        Tooting
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase text-[#f68422] tracking-wider mb-1">
                      France Branches
                    </div>
                    <div className="pl-2 space-y-1.5">
                      <a
                        href="https://nkaryabhavan.fr/en/branches/gare-du-nord/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-gray-700 hover:text-[#f68422]"
                      >
                        Gare du Nord
                      </a>
                      <a
                        href="https://nkaryabhavan.fr/en/branches/louvre/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-gray-700 hover:text-[#f68422]"
                      >
                        Louvre
                      </a>
                      <a
                        href="https://nkaryabhavan.fr/en/branches/notre-dame/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-gray-700 hover:text-[#f68422]"
                      >
                        Notre Dame
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase text-[#f68422] tracking-wider mb-1">
                      Belgium Branch
                    </div>
                    <div className="pl-2 space-y-1.5">
                      <Link
                        href="/branches"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-gray-700 hover:text-[#f68422]"
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
              className="block font-semibold text-[#6d1007] hover:text-[#f68422] py-1.5 text-base"
            >
              Menu
            </Link>

            {/* Mobile Catering Accordion */}
            <div className="py-2 border-b border-gray-100">
              <button
                onClick={() => setMobileCateringOpen(!mobileCateringOpen)}
                className="w-full flex items-center justify-between font-semibold text-[#6d1007] py-1.5 text-base"
              >
                <span>Catering</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileCateringOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileCateringOpen && (
                <div className="pl-4 pt-2 space-y-1.5">
                  <Link
                    href="/live-dosa-catering"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm text-gray-700 hover:text-[#f68422]"
                  >
                    Live Dosa Catering
                  </Link>
                  <Link
                    href="/outdoor-catering"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm text-gray-700 hover:text-[#f68422]"
                  >
                    Outdoor Catering
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/franchise"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-[#6d1007] hover:text-[#f68422] py-1.5 text-base"
            >
              Franchise
            </Link>

            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-[#6d1007] hover:text-[#f68422] py-1.5 text-base"
            >
              Contact
            </Link>

          </div>
        )}

      </div>
    </header>
  );
}
