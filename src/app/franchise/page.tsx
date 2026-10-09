'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function FranchisePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceType: 'Franchise Inquiry',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          message: `Franchise inquiry for location: ${formData.location}`,
        }),
      });
      if (res.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribeEmail) return;
    setSubscribeStatus('submitting');
    // Simulated or submit to api
    setTimeout(() => {
      setSubscribeStatus('success');
      setSubscribeEmail('');
    }, 600);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner Section (Exact from live site) */}
      <section className="relative w-full h-[320px] sm:h-[360px] lg:h-[400px] bg-black flex items-end justify-center">
        <Image
          src="/images/migrated/NKAryaBhavan-Wembley-3.jpeg"
          alt="Franchise Samko Arya Bhavan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark overlay 50% matching live site */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Large Overlapping "FRANCHISE" Title (Exact placement translated 50% downwards) */}
        <div className="relative z-10 w-full text-center translate-y-1/2 pointer-events-none select-none">
          <h1
            className="font-serif text-[#F6851C] uppercase font-normal leading-none"
            style={{
              fontSize: 'clamp(2.4rem, 6.5vw, 6rem)',
              letterSpacing: '0.5em',
              textIndent: '0.5em',
            }}
          >
            FRANCHISE
          </h1>
        </div>
      </section>

      {/* Main Content & Opportunities Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1240px] mx-auto">
          {/* Main Section Heading */}
          <div className="text-center mb-6">
            <h2 className="text-[#344E41] font-serif text-[24px] sm:text-[34px] lg:text-[44px] font-semibold uppercase tracking-wide leading-tight">
              FRANCHISE OPPORTUNITIES WITH ARYA BHAVAN
            </h2>
          </div>

          {/* Narrative Paragraphs */}
          <div className="max-w-[700px] mx-auto text-center space-y-4 mb-10 text-[#202020] font-['Josefin_Sans',sans-serif] text-[16px] sm:text-[18px] leading-[1.6]">
            <p>
              We are excited to announce that Arya Bhavan is now open for franchising! If you’re interested in joining our growing family, please fill out the contact form on our website. Our team will get in touch with you shortly to discuss the next steps.
            </p>
            <p>
              We look forward to partnering with passionate individuals ready to bring the Arya Bhavan experience to new locations!
            </p>
          </div>

          {/* Minimalist Contact Form (Exact from live site) */}
          <div className="max-w-[500px] sm:max-w-[520px] mx-auto">
            {formStatus === 'success' ? (
              <div className="p-6 rounded-2xl bg-green-50 border border-green-200 text-center space-y-3">
                <h3 className="font-serif font-bold text-xl text-green-900">
                  Thank You for Your Interest!
                </h3>
                <p className="text-sm text-green-700 font-['Josefin_Sans',sans-serif]">
                  Your franchise inquiry has been submitted successfully. Our management team will contact you shortly to discuss partnership opportunities.
                </p>
                <button
                  onClick={() => {
                    setFormStatus('idle');
                    setFormData({ name: '', email: '', phone: '', location: '' });
                  }}
                  className="mt-3 text-xs uppercase tracking-wider text-[#344E41] font-bold underline"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full py-3 sm:py-3.5 border-b border-[#C8C8C8] bg-transparent text-[#474747] text-[18px] sm:text-[20px] font-['Josefin_Sans',sans-serif] outline-none focus:border-[#F6851C] transition-colors placeholder:text-[#6e6e6e]"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full py-3 sm:py-3.5 border-b border-[#C8C8C8] bg-transparent text-[#474747] text-[18px] sm:text-[20px] font-['Josefin_Sans',sans-serif] outline-none focus:border-[#F6851C] transition-colors placeholder:text-[#6e6e6e]"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Your Phone No."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full py-3 sm:py-3.5 border-b border-[#C8C8C8] bg-transparent text-[#474747] text-[18px] sm:text-[20px] font-['Josefin_Sans',sans-serif] outline-none focus:border-[#F6851C] transition-colors placeholder:text-[#6e6e6e]"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full py-3 sm:py-3.5 border-b border-[#C8C8C8] bg-transparent text-[#474747] text-[18px] sm:text-[20px] font-['Josefin_Sans',sans-serif] outline-none focus:border-[#F6851C] transition-colors placeholder:text-[#6e6e6e]"
                  />
                </div>

                {formStatus === 'error' && (
                  <div className="p-3 text-red-600 text-xs sm:text-sm text-center">
                    Unable to submit your application right now. Please email us directly at eventsnkab@gmail.com.
                  </div>
                )}

                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="inline-block px-7 sm:px-8 py-3 rounded-full border-2 border-dashed border-[#ED8D74] text-[#E84C0A] hover:bg-[#6D1007] hover:text-white hover:border-solid hover:border-[#6D1007] font-['Josefin_Sans',sans-serif] text-[17px] sm:text-[18px] transition-all duration-300 cursor-pointer disabled:opacity-50"
                  >
                    {formStatus === 'submitting' ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Special Offers / Newsletter Section (Exact from live site) */}
      <section className="relative w-full min-h-[340px] sm:min-h-[370px] flex items-center justify-center overflow-hidden py-14 px-4 sm:px-6">
        <Image
          src="/images/migrated/sl2.jpg"
          alt="Special Offers Samko Arya Bhavan"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 w-full max-w-[650px] mx-auto text-center px-4">
          <h2 className="text-white font-serif text-[24px] sm:text-[32px] lg:text-[36px] font-normal uppercase tracking-wider mb-6 sm:mb-8">
            GET SPECIAL OFFERS FROM US
          </h2>

          {subscribeStatus === 'success' ? (
            <div className="p-3 text-white text-base font-['Josefin_Sans',sans-serif] bg-white/20 rounded-lg backdrop-blur-xs">
              Thank you for subscribing to our special offers!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="w-full">
              <div className="border-b border-white/60 flex items-center justify-between gap-3 pb-1">
                <input
                  type="email"
                  required
                  placeholder="Enter Your Email"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  className="bg-transparent text-white placeholder:text-white placeholder:text-[17px] sm:placeholder:text-[20px] text-[17px] sm:text-[20px] font-['Josefin_Sans',sans-serif] outline-none flex-1 py-2 sm:py-3"
                />
                <button
                  type="submit"
                  disabled={subscribeStatus === 'submitting'}
                  className="text-white hover:text-[#c4a05a] text-[17px] sm:text-[20px] font-['Josefin_Sans',sans-serif] font-normal transition-colors py-2 sm:py-3 px-2 shrink-0 cursor-pointer"
                >
                  {subscribeStatus === 'submitting' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
