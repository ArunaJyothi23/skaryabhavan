'use client';

import React, { useState } from 'react';

export default function NewsletterSubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'newsletter',
          email,
          timestamp: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        setStatus('success');
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-[540px] mx-auto">
      <form onSubmit={handleSubmit} className="lakit-subscribe-form__form">
        <div className="flex items-center justify-between border-b border-[#FFFFFF82] w-full">
          <input
            type="email"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            autoComplete="email"
            className="bg-transparent border-0 outline-none text-white placeholder:text-white text-[18px] sm:text-[20px] leading-[20px] py-[15px] px-0 flex-1 font-['Josefin_Sans',sans-serif]"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            aria-label="Subscribe to newsletter"
            className="bg-transparent border-0 text-white hover:text-[#344E41] text-[18px] sm:text-[20px] leading-[20px] py-[15px] pl-4 pr-0 font-['Josefin_Sans',sans-serif] transition-colors cursor-pointer shrink-0"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
      </form>
      {message && (
        <p className={`text-center mt-3 text-sm font-['Josefin_Sans',sans-serif] ${status === 'success' ? 'text-white' : 'text-red-300'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
