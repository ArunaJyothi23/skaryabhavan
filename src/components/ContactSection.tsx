'use client';

import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import branchesData from '@/data/branches.json';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: 'central-london',
    inquiryType: 'Table Reservation',
    dateOfEvent: '',
    noOfPax: '2',
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
          serviceType: formData.inquiryType,
          ...formData
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

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Branch Locations & Opening Times */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#c45c26] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                Contact & Hours
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-gray-900 tracking-tight mt-3">
                Get in Touch With Us
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Have a question or looking to reserve a table? Reach out to our branches directly or send us a message below.
              </p>
            </div>

            <div className="space-y-4">
              {branchesData.map((branch) => (
                <div
                  key={branch.id}
                  className="p-5 rounded-2xl bg-[#fdfaf6] border border-gray-100 hover:border-amber-200 transition-colors"
                >
                  <h3 className="font-serif font-bold text-base text-gray-900 mb-1.5 flex items-center justify-between">
                    <span>{branch.name} ({branch.area})</span>
                    <span className="text-xs font-semibold text-[#c45c26]">{branch.postcode}</span>
                  </h3>
                  <div className="space-y-1.5 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#c45c26] shrink-0" />
                      <span>{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#c45c26] shrink-0" />
                      <a href={`tel:${branch.phone}`} className="font-bold text-gray-900 hover:text-[#c45c26]">
                        {branch.displayPhone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#c45c26] shrink-0" />
                      <span>{branch.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-gray-700 space-y-1">
              <div className="flex items-center gap-2 font-bold text-gray-900">
                <Mail className="w-4 h-4 text-[#c45c26]" /> Central Customer & Catering Email
              </div>
              <p>eventsnkab@gmail.com • catering@skaryabhavan.com</p>
            </div>
          </div>

          {/* Right Column: Inquiry / Reservation Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-light p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-xl">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                Send an Inquiry or Booking
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-6">
                Fill in your details and our team will get in touch with you shortly.
              </p>

              {status === 'success' ? (
                <div className="p-6 rounded-2xl bg-green-50 border border-green-200 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                  <h4 className="font-serif font-bold text-lg text-green-900">Thank You!</h4>
                  <p className="text-sm text-green-700">
                    Your inquiry has been submitted successfully. A representative from Arya Bhavan will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-3d-secondary text-xs py-2 px-4 mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#c45c26] focus:outline-none text-sm bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#c45c26] focus:outline-none text-sm bg-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#c45c26] focus:outline-none text-sm bg-white"
                        placeholder="+44 7123 456789"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Preferred Branch *</label>
                      <select
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#c45c26] focus:outline-none text-sm bg-white"
                      >
                        <option value="central-london">Central London (Leicester Sq)</option>
                        <option value="wembley">Wembley Central (Ealing Rd)</option>
                        <option value="tooting">Tooting (Upper Tooting Rd)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Inquiry Type</label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#c45c26] focus:outline-none text-sm bg-white"
                      >
                        <option value="Table Reservation">Table Reservation</option>
                        <option value="Live Dosa Catering">Live Dosa Catering</option>
                        <option value="Outdoor Catering">Outdoor Catering</option>
                        <option value="Franchise Inquiry">Franchise Inquiry</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Event / Booking Date</label>
                      <input
                        type="date"
                        value={formData.dateOfEvent}
                        onChange={(e) => setFormData({ ...formData, dateOfEvent: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#c45c26] focus:outline-none text-sm bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">No. of Guests</label>
                      <input
                        type="number"
                        min="1"
                        value={formData.noOfPax}
                        onChange={(e) => setFormData({ ...formData, noOfPax: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#c45c26] focus:outline-none text-sm bg-white"
                        placeholder="2"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Message & Special Dietary Notes</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#c45c26] focus:outline-none text-sm bg-white"
                      placeholder="Please mention any vegan, Jain, or nut allergy dietary requirements or specific party timings..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      Unable to send your inquiry right now. Please call us directly at 020 7839 8797.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-3d-primary w-full py-3 text-sm justify-center"
                  >
                    <Send className="w-4 h-4" />
                    {status === 'submitting' ? 'Submitting Inquiry...' : 'Submit Inquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
