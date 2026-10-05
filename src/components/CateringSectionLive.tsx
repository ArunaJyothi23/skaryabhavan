'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const services = [
  {
    title: 'Wedding',
    desc: 'Celebrate your special day with authentic South Indian flavors from Arya Bhavan—where every bite is pure tradition and taste.'
  },
  {
    title: 'Corporate Events & Parties',
    desc: 'Make your corporate events stand out with Arya Bhavan’s curated catering—where every dish adds flavor to your business success.'
  },
  {
    title: 'Home Functions',
    desc: 'Hosting a celebration at home? Arya Bhavan brings authentic South Indian street favorites and traditional delicacies directly to your doorstep.'
  },
  {
    title: 'Live Dosa Stations',
    desc: 'Experience the theater of live dosa stations at your venue, serving unlimited hot, crispy dosas made to order for your guests.'
  }
];

export default function CateringSectionLive() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Wedding',
    eventDate: '',
    pax: '50',
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
    <section id="catering-live" className="py-14 sm:py-20 bg-[#fdfaf6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-wide uppercase text-[#344e41]">
            Catering Services
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-gray-100 shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-serif font-bold text-lg text-gray-900 mb-2.5">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Enquire Now Form */}
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-md">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#344e41] uppercase tracking-wide">
              Enquire Now
            </h3>
            <p className="text-xs text-gray-500 mt-1 font-sans">
              Get in touch with our catering team for customized menus, availability, and quotes.
            </p>
          </div>

          {status === 'success' ? (
            <div className="p-6 rounded-2xl bg-green-50 border border-green-200 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto" />
              <h4 className="font-serif font-bold text-base text-green-900">Enquiry Submitted!</h4>
              <p className="text-xs text-green-700 font-sans">
                Thank you for reaching out. An Arya Bhavan catering representative will get back to you shortly.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="btn-hero-menu text-xs py-2 px-4 mt-2"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs focus:outline-none focus:border-[#6d1007]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs focus:outline-none focus:border-[#6d1007]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs focus:outline-none focus:border-[#6d1007]"
                    placeholder="+44 7123 456789"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Event Type</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs focus:outline-none focus:border-[#6d1007]"
                  >
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Home Function">Home Function</option>
                    <option value="Live Dosa Station">Live Dosa Station</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Event Date</label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs focus:outline-none focus:border-[#6d1007]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Estimated Guests & Details</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-xs focus:outline-none focus:border-[#6d1007]"
                  placeholder="Number of guests, venue location, dietary preferences (Vegan, Jain, etc.)..."
                />
              </div>

              {status === 'error' && (
                <div className="p-3 rounded-lg bg-red-50 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" /> Failed to submit. Please call us at 020 7839 8797.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-hero-menu w-full py-3 text-xs"
              >
                <Send className="w-3.5 h-3.5 mr-2" />
                {status === 'submitting' ? 'Submitting...' : 'Submit Catering Enquiry'}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
