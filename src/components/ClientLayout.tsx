'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail } from 'lucide-react';

interface ClientLayoutProps {
  children: React.ReactNode;
  initialContent?: any;
}

export default function ClientLayout({ children, initialContent }: ClientLayoutProps) {
  const pathname = usePathname() || '';
  const router = useRouter();
  const isAdmin = pathname.startsWith('/admin');
  const [contentVersion, setContentVersion] = useState<number | null>(null);
  const [content, setContent] = useState<any>(initialContent || null);

  useEffect(() => {
    if (initialContent) {
      setContent(initialContent);
    }
  }, [initialContent]);

  // Instant cross-tab sync when admin publishes in another tab
  useEffect(() => {
    if (isAdmin) return;

    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'content_updated_at') {
        router.refresh();
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [isAdmin, router]);

  // Periodic polling for content updates from Admin CMS (every 5 seconds)
  useEffect(() => {
    if (isAdmin) return;

    const checkVersion = async () => {
      try {
        const res = await fetch('/api/content-version', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (contentVersion && data.version && data.version !== contentVersion) {
            setContentVersion(data.version);
            router.refresh();
          } else if (!contentVersion && data.version) {
            setContentVersion(data.version);
          }
        }
      } catch {}
    };

    const interval = setInterval(checkVersion, 5000);
    return () => clearInterval(interval);
  }, [isAdmin, contentVersion, router]);

  if (isAdmin) {
    return <main className="min-h-screen bg-gray-50">{children}</main>;
  }

  return (
    <>
      <Header logo={content?.headerFooter?.logo} />
      <main>{children}</main>
      <Footer
        copyrightText={content?.headerFooter?.copyrightText}
        disclaimerNotice={content?.headerFooter?.disclaimerNotice}
      />

      {/* Floating WhatsApp on Bottom-Left */}
      <div className="fixed bottom-6 left-6 z-50">
        <a
          href="https://wa.me/442078398797"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
        >
          <svg
            className="w-8 h-8 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.031 2C6.496 2 2 6.502 2 12.046c0 1.902.532 3.738 1.542 5.334L2 22l4.792-1.508a10.02 10.02 0 0 0 5.239 1.482h.005c5.533 0 10.03-4.502 10.03-10.046 0-2.684-1.045-5.207-2.942-7.108C17.228 3.037 14.708 2 12.031 2zm5.834 14.184c-.244.686-1.42 1.317-1.956 1.399-.516.078-1.189.112-3.414-.809-2.85-1.181-4.688-4.084-4.832-4.275-.138-.192-1.144-1.523-1.144-2.906 0-1.383.722-2.062.978-2.344.256-.283.562-.353.75-.353.188 0 .376.002.54.01.176.008.411-.067.643.489.244.588.828 2.02.9 2.167.072.148.12.321.024.512-.096.192-.144.312-.288.481-.144.168-.303.376-.432.505-.144.143-.294.298-.126.587.168.288.747 1.233 1.604 1.996 1.103.982 2.033 1.286 2.321 1.43.288.144.457.12.625-.072.168-.192.721-.84.914-1.128.192-.288.384-.24.644-.144.26.096 1.649.778 1.933.921.284.144.472.216.541.336.069.12.069.697-.175 1.383z" />
          </svg>
        </a>
      </div>

      {/* Floating Quick Action Widget on Right (Call & Message) */}
      <div className="fixed right-6 bottom-20 z-50">
        <div className="bg-white rounded-full shadow-2xl border border-gray-100 flex flex-col p-1.5 gap-1.5">
          <a
            href="tel:+442078398797"
            aria-label="Call Arya Bhavan"
            className="w-11 h-11 rounded-full flex items-center justify-center text-gray-700 hover:text-[#6d1007] hover:bg-orange-50 transition-colors"
          >
            <Phone className="w-5 h-5 stroke-[1.5]" />
          </a>
          <a
            href="/contact-us"
            aria-label="Message Arya Bhavan"
            className="w-11 h-11 rounded-full flex items-center justify-center text-gray-700 hover:text-[#6d1007] hover:bg-orange-50 transition-colors"
          >
            <Mail className="w-5 h-5 stroke-[1.5]" />
          </a>
        </div>
      </div>
    </>
  );
}
