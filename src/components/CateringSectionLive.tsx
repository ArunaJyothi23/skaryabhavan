'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

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

export default function CateringSectionLive() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Wedding',
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
    <section id="catering-live" className="py-14 sm:py-20 bg-[#ECE6DF]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-ivymode text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-[1px] uppercase text-[#344E41]">
            CATERING SERVICES
          </h2>
        </div>

        {/* 2-Column Exact Layout: 70% 4-Cards Grid + 30% Enquire Now */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column (70%): White container with 4 cards */}
          <div className="lg:col-span-8 bg-white rounded-[10px] p-4 sm:p-5 shadow-xs border border-transparent hover:border-[#F6851C] hover:shadow-[0_0_15px_rgba(246,133,28,0.22)] transition-all duration-300 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 h-full">
              {cateringServices.map((service, idx) => (
                <div
                  key={idx}
                  className="border border-[#344E41]/35 rounded-[10px] p-6 lg:p-7 bg-white flex flex-col items-center text-center justify-center transition-all duration-300 hover:border-[#F6851C]"
                >
                  {/* Service Icon */}
                  <div className="mb-3">
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3 className="font-ivymode text-xl sm:text-2xl font-bold text-[#344E41] mb-2 leading-snug">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="font-sans text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (30%): Enquire Now Container */}
          <div className="lg:col-span-4 bg-white rounded-[10px] p-6 lg:p-7 shadow-xs border border-transparent hover:border-[#F6851C] hover:shadow-[0_0_15px_rgba(246,133,28,0.22)] transition-all duration-300 flex flex-col justify-start">
            <h2 className="font-ivymode text-2xl sm:text-[28px] font-bold text-[#344E41] uppercase tracking-[1px] mb-5 text-left">
              ENQUIRE NOW
            </h2>

            {status === 'success' ? (
              <div className="p-6 rounded-xl bg-green-50 border border-green-200 text-center space-y-3 my-auto">
                <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto" />
                <h4 className="font-ivymode font-bold text-lg text-green-900">Enquiry Received!</h4>
                <p className="text-xs text-green-700 font-sans">
                  Thank you! An Arya Bhavan catering representative will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-hero-menu text-xs py-2 px-4 mt-2"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 font-sans flex flex-col h-full justify-between">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-gray-200 text-xs focus:outline-hidden focus:border-[#6d1007]"
                    placeholder="Full Name"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-gray-200 text-xs focus:outline-hidden focus:border-[#6d1007]"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-gray-200 text-xs focus:outline-hidden focus:border-[#6d1007]"
                    placeholder="+44 7123 456789"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-gray-200 text-xs focus:outline-hidden focus:border-[#6d1007]"
                  >
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Home Function">Home Function</option>
                    <option value="Live Dosa Station">Live Dosa Station</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Details &amp; Guest Count
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-gray-200 text-xs focus:outline-hidden focus:border-[#6d1007]"
                    placeholder="Date, location, number of guests..."
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
                  className="btn-hero-menu w-full py-2.5 text-xs font-bold tracking-wider mt-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 mr-2" />
                  {status === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
