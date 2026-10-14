'use client';

import React, { useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const cateringServices = [
  {
    title: 'Wedding',
    desc: 'Celebrate your special day with authentic South Indian flavors from Arya Bhavan—where every bite is pure tradition and taste.',
    // Mandap / Wedding arch icon
    icon: (
      <svg className="w-12 h-12 text-[#F6851C]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 56V28C12 18 20 10 32 10C44 10 52 18 52 28V56" />
        <path d="M6 56H58" />
        <path d="M22 56V32C22 26 26 22 32 22C38 22 42 26 42 32V56" />
        <circle cx="32" cy="6" r="2" fill="currentColor" />
        <path d="M16 26Q20 20 24 26" />
        <path d="M40 26Q44 20 48 26" />
        <path d="M28 14Q32 10 36 14" />
      </svg>
    )
  },
  {
    title: 'Corporate Events & Parties',
    desc: 'Make your corporate events stand out with Arya Bhavan’s curated catering—where every dish adds flavor to your business success.',
    // Fork & Knife plate badge icon
    icon: (
      <svg className="w-12 h-12 text-[#F6851C]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="26" />
        <circle cx="32" cy="32" r="20" strokeDasharray="3 3" />
        <path d="M26 20V32M23 20V26C23 28 26 29 26 29M29 20V26C29 28 26 29 26 29M26 32V44" />
        <path d="M38 20C38 20 35 24 35 30C35 33 38 34 38 34V44M38 20V44" />
      </svg>
    )
  },
  {
    title: 'Home Functions',
    desc: 'Hosting a celebration at home? Arya Bhavan brings authentic South Indian street food to your doorstep—fresh, flavorful, and irresistible.',
    // Traditional house / pavilion canopy icon
    icon: (
      <svg className="w-12 h-12 text-[#F6851C]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 8L10 22V26H54V22L32 8Z" />
        <path d="M16 26V52M48 26V52" />
        <path d="M10 52H54V56H10V52Z" />
        <path d="M24 26V38C24 42 28 44 32 44C36 44 40 42 40 38V26" />
        <circle cx="32" cy="18" r="2" fill="currentColor" />
      </svg>
    )
  },
  {
    title: 'Live Dosa Stations',
    desc: 'Add a fun twist to your event with Arya Bhavan’s live food stations—freshly prepared, aromatic, and truly satisfying.',
    // Chef hat & stove / pan icon
    icon: (
      <svg className="w-12 h-12 text-[#F6851C]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 28C18 28 16 24 18 20C18 16 22 14 26 14C28 10 36 10 38 14C42 14 46 16 46 20C48 24 46 28 42 28H22Z" />
        <path d="M22 28V34H42V28" />
        <path d="M14 42H50" />
        <path d="M18 42L16 54H48L46 42" />
        <path d="M24 48H40" />
        <path d="M50 46H56" />
      </svg>
    )
  }
];

interface CateringSectionLiveProps {
  cateringData?: {
    title?: string;
    subtitle?: string;
    services?: { title: string; desc: string }[];
  };
}

export default function CateringSectionLive({ cateringData }: CateringSectionLiveProps = {}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pax: '',
    eventType: 'Catering',
    eventDate: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceType: `Catering: ${formData.eventType}`,
          ...formData
        })
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="catering-live" className="py-12 sm:py-16 bg-[#ECE6DF]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-ivymode text-2xl font-bold leading-[1.25] tracking-[1px] text-[#344E41] uppercase sm:text-[26px] lg:text-[32px] lg:leading-[56px]">
            {cateringData?.title || 'CATERING SERVICES'}
          </h2>
        </div>

        {/* 2-Column Exact Layout: 70% 4-Cards Grid + 30% Enquire Now */}
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-12 lg:gap-5">
          
          {/* Left Column (70%): White container with 4 cards */}
          <div className="flex flex-col justify-center rounded-[10px] bg-white p-3 sm:p-4 lg:col-span-8">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3">
              {cateringServices.map((service, idx) => (
                <div
                  key={idx}
                  className="flex min-h-[250px] flex-col items-center justify-center rounded-[10px] border border-[#344E41] bg-white px-4 py-4 text-center transition-all duration-300 hover:border-[#F6851C] hover:shadow-[2px_0_9px_1px_rgba(245,133,34,0.59)] sm:min-h-[260px]"
                >
                  {/* Service Icon */}
                  <div className="mb-2.5 flex items-center justify-center [&_svg]:h-[70px] [&_svg]:w-[70px]">
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3 className="mb-2 font-ivymode text-[22px] font-bold leading-[1.2] text-[#344E41] sm:text-[25px]">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="font-['Josefin_Sans',sans-serif] text-[15px] font-semibold leading-[1.4] text-[#202020]">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (30%): Enquire Now Container */}
          <div className="flex flex-col justify-start rounded-[10px] bg-white p-4 sm:p-5 lg:col-span-4">
            <h2 className="font-ivymode text-2xl sm:text-[28px] lg:text-[32px] font-bold text-[#344E41] uppercase tracking-[1px] mb-3 text-left leading-[36px] sm:leading-[42px]">
              ENQUIRE NOW
            </h2>

            {status === 'success' ? (
              <div className="p-6 rounded-xl bg-green-50 border border-green-200 text-center space-y-3 my-auto font-josefin">
                <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto" />
                <h4 className="font-josefin font-bold text-lg text-green-900">Enquiry Received!</h4>
                <p className="text-xs text-green-700">
                  Thank you! An Arya Bhavan catering representative will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-5 py-2 bg-[#f68422] hover:bg-[#366732] text-white text-xs font-bold rounded-[10px] transition-colors cursor-pointer mt-2"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 font-josefin">
                <div>
                  <label htmlFor="home-catering-name" className="mb-1 block font-['Josefin_Sans',sans-serif] text-[15px] font-bold leading-5 text-[#202020]">
                    Full Name
                  </label>
                  <input
                    id="home-catering-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-[10px] border border-[#CAC9C9] bg-[#F9F4EF] px-4 py-2.5 font-['Josefin_Sans',sans-serif] text-[15px] font-semibold leading-5 text-[#202020] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#366732]"
                    placeholder="Full Name"
                  />
                </div>

                <div>
                  <label htmlFor="home-catering-email" className="mb-1 block font-['Josefin_Sans',sans-serif] text-[15px] font-bold leading-5 text-[#202020]">
                    Email
                  </label>
                  <input
                    id="home-catering-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-[10px] border border-[#CAC9C9] bg-[#F9F4EF] px-4 py-2.5 font-['Josefin_Sans',sans-serif] text-[15px] font-semibold leading-5 text-[#202020] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#366732]"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label htmlFor="home-catering-phone" className="mb-1 block font-['Josefin_Sans',sans-serif] text-[15px] font-bold leading-5 text-[#202020]">
                    Phone Number
                  </label>
                  <input
                    id="home-catering-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-[10px] border border-[#CAC9C9] bg-[#F9F4EF] px-4 py-2.5 font-['Josefin_Sans',sans-serif] text-[15px] font-semibold leading-5 text-[#202020] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#366732]"
                    placeholder="Phone Number"
                  />
                </div>

                <div>
                  <label htmlFor="home-catering-pax" className="mb-1 block font-['Josefin_Sans',sans-serif] text-[15px] font-bold leading-5 text-[#202020]">
                    No. of Pax ( Min 25 )
                  </label>
                  <input
                    id="home-catering-pax"
                    type="number"
                    min="25"
                    required
                    value={formData.pax}
                    onChange={(e) => setFormData({ ...formData, pax: e.target.value })}
                    className="w-full rounded-[10px] border border-[#CAC9C9] bg-[#F9F4EF] px-4 py-2.5 font-['Josefin_Sans',sans-serif] text-[15px] font-semibold leading-5 text-[#202020] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#366732]"
                    placeholder="No. of pax"
                  />
                </div>

                <div>
                  <label htmlFor="home-catering-message" className="mb-1 block font-['Josefin_Sans',sans-serif] text-[15px] font-bold leading-5 text-[#202020]">
                    Message
                  </label>
                  <textarea
                    id="home-catering-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full resize-y rounded-[10px] border border-[#CAC9C9] bg-[#F9F4EF] px-4 py-2.5 font-['Josefin_Sans',sans-serif] text-[15px] font-semibold leading-5 text-[#202020] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#366732]"
                    placeholder="Message"
                  />
                </div>

                {status === 'error' && (
                  <div className="p-2.5 rounded-lg bg-red-50 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" /> Failed to submit. Please call 020 7839 8797.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-1.5 flex w-full cursor-pointer items-center justify-center rounded-[10px] bg-[#F68422] py-3 font-['Josefin_Sans',sans-serif] text-[18px] font-extrabold text-white transition-colors hover:bg-[#366732] shadow-sm uppercase tracking-wide"
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
