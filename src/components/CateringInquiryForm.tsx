'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface Props {
  defaultService: string;
}

export default function CateringInquiryForm({ defaultService }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    pax: '50',
    venuePostcode: '',
    serviceType: defaultService,
    dietaryNotes: ''
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
          serviceType: formData.serviceType,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          dateOfEvent: formData.eventDate,
          noOfPax: formData.pax,
          message: `Venue Postcode: ${formData.venuePostcode} | Dietary / Event Notes: ${formData.dietaryNotes}`
        })
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-6 rounded-2xl bg-green-50 border border-green-200 text-center space-y-3">
        <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto" />
        <h4 className="font-serif font-bold text-base text-green-900">Catering Inquiry Received!</h4>
        <p className="text-xs text-green-700">
          Our events team will review your menu requirements and get back to you with availability and custom pricing within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-3d-secondary text-xs py-1.5 px-3.5 mt-2"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Your Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#c45c26] focus:outline-none text-xs bg-white"
            placeholder="Priya Patel"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#c45c26] focus:outline-none text-xs bg-white"
            placeholder="priya@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number *</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#c45c26] focus:outline-none text-xs bg-white"
            placeholder="+44 7123 456789"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Venue Postcode *</label>
          <input
            type="text"
            required
            value={formData.venuePostcode}
            onChange={(e) => setFormData({ ...formData, venuePostcode: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#c45c26] focus:outline-none text-xs bg-white"
            placeholder="HA0 4TL / WC2H"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Event Date *</label>
          <input
            type="date"
            required
            value={formData.eventDate}
            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#c45c26] focus:outline-none text-xs bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Estimated Guests (Pax) *</label>
          <input
            type="number"
            min="20"
            required
            value={formData.pax}
            onChange={(e) => setFormData({ ...formData, pax: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#c45c26] focus:outline-none text-xs bg-white"
            placeholder="50"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-700 mb-1">Dietary Preferences & Event Notes</label>
        <textarea
          rows={3}
          value={formData.dietaryNotes}
          onChange={(e) => setFormData({ ...formData, dietaryNotes: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#c45c26] focus:outline-none text-xs bg-white"
          placeholder="Mention any Jain, Vegan, Nut-free count, service timings, or indoor/outdoor setup details..."
        />
      </div>

      {status === 'error' && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          Submission failed. Please call our catering team at 020 7839 8797.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-3d-primary w-full py-3 text-xs justify-center"
      >
        <Send className="w-3.5 h-3.5" />
        {status === 'submitting' ? 'Submitting Quotation...' : 'Request Quotation & Check Availability'}
      </button>
    </form>
  );
}
