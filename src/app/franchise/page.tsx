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
      {/* Hero Banner Section (Exact from live site: 300px on laptop/1366px screens, 350px on large displays) */}
      <section className="relative w-full h-[300px] 2xl:h-[350px] min-h-[300px] 2xl:min-h-[350px] bg-[#201c1a] flex items-end justify-center overflow-visible">
        <Image
          src="/images/migrated/NKAryaBhavan-Wembley-3.jpeg"
          alt="Franchise Samko Arya Bhavan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle touch if needed or completely transparent for bright live site clarity */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Large Overlapping "FRANCHISE" Title (Exact wide tracking from live site Image 5) */}
        <div id="banner-title" className="relative z-10 w-full text-center translate-y-1/2 pointer-events-none select-none">
          <h1
            className="font-ivymode text-[#F6851C] uppercase font-normal leading-none inline-block"
            style={{
              fontSize: 'clamp(2.8rem, 6.8vw, 6.2rem)',
              letterSpacing: '0.52em',
              marginRight: '-0.52em',
            }}
          >
            FRANCHISE
          </h1>
        </div>
      </section>

      {/* Main Content & Opportunities Section (Exact from live site: mt-80px) */}
      <section className="pt-[65px] lg:pt-[75px] pb-[80px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1240px] mx-auto">
          {/* Main Section Heading: EXACT Josefin Sans, font-normal (400, un-bold), 36px on laptop/desktop, #344E41 */}
          <div className="text-center mb-[18px]">
            <h2 className="font-['Josefin_Sans',sans-serif] text-[#344E41] text-[20px] sm:text-[26px] md:text-[30px] lg:text-[36px] font-normal uppercase tracking-[2px] leading-[1.3]">
              FRANCHISE OPPORTUNITIES WITH ARYA BHAVAN
            </h2>
          </div>

          {/* Narrative Paragraphs: exactly 42% width on desktop for identical line wraps */}
          <div className="w-full sm:w-[70%] lg:w-[44%] max-w-[560px] mx-auto text-center space-y-4 mt-[10px] mb-[50px] text-[#202020] font-['Josefin_Sans',sans-serif] text-[16px] sm:text-[18px] leading-[1.6]">
            <p>
              We are excited to announce that Arya Bhavan is now open for franchising! If you’re interested in joining our growing family, please fill out the contact form on our website. Our team will get in touch with you shortly to discuss the next steps.
            </p>
            <p>
              We look forward to partnering with passionate individuals ready to bring the Arya Bhavan experience to new locations!
            </p>
          </div>

          {/* Minimalist Contact Form (Exact from live site: 40% width, 20px inputs, 2px dashed pill submit) */}
          <div className="w-full sm:w-[60%] lg:w-[40%] max-w-[480px] mx-auto">
            {formStatus === 'success' ? (
              <div className="p-6 rounded-2xl bg-green-50 border border-green-200 text-center space-y-3">
                <h3 className="font-ivymode font-bold text-xl text-green-900">
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
                  className="mt-3 text-xs uppercase tracking-wider text-[#344E41] font-bold underline cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-0">
                <div className="mb-[20px]">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full py-[15px] border-b border-[#C8C8C8] bg-transparent text-[#474747] text-[18px] sm:text-[20px] font-['Josefin_Sans',sans-serif] outline-none focus:border-[#F6851C] transition-colors placeholder:text-[#474747]"
                  />
                </div>

                <div className="mb-[20px]">
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full py-[15px] border-b border-[#C8C8C8] bg-transparent text-[#474747] text-[18px] sm:text-[20px] font-['Josefin_Sans',sans-serif] outline-none focus:border-[#F6851C] transition-colors placeholder:text-[#474747]"
                  />
                </div>

                <div className="mb-[20px]">
                  <input
                    type="tel"
                    required
                    placeholder="Your Phone No."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full py-[15px] border-b border-[#C8C8C8] bg-transparent text-[#474747] text-[18px] sm:text-[20px] font-['Josefin_Sans',sans-serif] outline-none focus:border-[#F6851C] transition-colors placeholder:text-[#474747]"
                  />
                </div>

                <div className="mb-[20px]">
                  <input
                    type="text"
                    required
                    placeholder="Location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full py-[15px] border-b border-[#C8C8C8] bg-transparent text-[#474747] text-[18px] sm:text-[20px] font-['Josefin_Sans',sans-serif] outline-none focus:border-[#F6851C] transition-colors placeholder:text-[#474747]"
                  />
                </div>

                {formStatus === 'error' && (
                  <div className="p-3 text-red-600 text-xs sm:text-sm text-center">
                    Unable to submit your application right now. Please email us directly at eventsnkab@gmail.com.
                  </div>
                )}

                <div className="pt-[15px] text-center">
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="inline-block px-[25px] pt-[13px] pb-[15px] rounded-[25px] border-2 border-dashed border-[#ED8D74] bg-transparent text-[#E84C0A] hover:bg-[#6D1007] hover:text-white hover:border-solid hover:border-[#6D1007] font-['Josefin_Sans',sans-serif] text-[18px] font-normal capitalize transition-all duration-300 cursor-pointer disabled:opacity-50"
                  >
                    {formStatus === 'submitting' ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Special Offers / Newsletter Section (Exact from live site: min-height 370px, content-width 800px) */}
      <section className="relative w-full min-h-[370px] flex items-center justify-center overflow-hidden py-14 px-4 sm:px-6">
        <Image
          src="/images/migrated/sl2.jpg"
          alt="Special Offers Samko Arya Bhavan"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 w-full max-w-[800px] mx-auto text-center px-4">
          <h2 className="text-white font-ivymode text-[26px] sm:text-[32px] lg:text-[36px] font-normal uppercase tracking-wider mb-[30px] leading-[1.2]">
            GET SPECIAL OFFERS FROM US
          </h2>

          {subscribeStatus === 'success' ? (
            <div className="p-3 text-white text-base font-['Josefin_Sans',sans-serif] bg-white/20 rounded-lg backdrop-blur-xs">
              Thank you for subscribing to our special offers!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="w-full">
              <div className="border-b border-[#FFFFFF82] flex items-center justify-between gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter Your Email"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  className="bg-transparent text-white placeholder:text-white placeholder:text-[18px] sm:placeholder:text-[20px] text-[18px] sm:text-[20px] font-['Josefin_Sans',sans-serif] outline-none flex-1 py-[15px]"
                />
                <button
                  type="submit"
                  disabled={subscribeStatus === 'submitting'}
                  className="text-white hover:text-[#344E41] text-[18px] sm:text-[20px] font-['Josefin_Sans',sans-serif] font-normal transition-colors py-[15px] px-2 shrink-0 cursor-pointer"
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
