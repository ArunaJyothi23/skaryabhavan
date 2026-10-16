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

  // Polling for content updates from Admin CMS (every 30 seconds + on tab focus)
  useEffect(() => {
    if (isAdmin) return;

    let isMounted = true;
    const checkVersion = async () => {
      if (typeof document !== 'undefined' && document.visibilityState !== 'visible') return;
      try {
        const res = await fetch('/api/content-version', { cache: 'no-store' });
        if (res.ok && isMounted) {
          const data = await res.json();
          if (data?.version) {
            setContentVersion((prev) => {
              if (prev && data.version !== prev) {
                router.refresh();
              }
              return data.version;
            });
          }
        }
      } catch {}
    };

    window.addEventListener('visibilitychange', checkVersion);
    window.addEventListener('focus', checkVersion);

    const interval = setInterval(checkVersion, 30000);
    return () => {
      isMounted = false;
      window.removeEventListener('visibilitychange', checkVersion);
      window.removeEventListener('focus', checkVersion);
      clearInterval(interval);
    };
  }, [isAdmin, router]);

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

      {/* Floating WhatsApp on Bottom-Left (Exact 100% replica of live site click-to-chat widget) */}
      <div className="fixed bottom-[15px] left-[15px] z-[99999]">
        <a
          href="https://wa.me/442078398797"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="block w-[50px] h-[50px] transition-transform duration-200 hover:scale-105 drop-shadow-[0_4px_10px_rgba(0,0,0,0.18)]"
        >
          <svg
            className="w-[50px] h-[50px] block"
            width="50px"
            height="50px"
            viewBox="0 0 1024 1024"
            aria-hidden="true"
          >
            <defs>
              <path
                id="htwasqicona-chat-app"
                d="M1023.941 765.153c0 5.606-.171 17.766-.508 27.159-.824 22.982-2.646 52.639-5.401 66.151-4.141 20.306-10.392 39.472-18.542 55.425-9.643 18.871-21.943 35.775-36.559 50.364-14.584 14.56-31.472 26.812-50.315 36.416-16.036 8.172-35.322 14.426-55.744 18.549-13.378 2.701-42.812 4.488-65.648 5.3-9.402.336-21.564.505-27.15.505l-504.226-.081c-5.607 0-17.765-.172-27.158-.509-22.983-.824-52.639-2.646-66.152-5.4-20.306-4.142-39.473-10.392-55.425-18.542-18.872-9.644-35.775-21.944-50.364-36.56-14.56-14.584-26.812-31.471-36.415-50.314-8.174-16.037-14.428-35.323-18.551-55.744-2.7-13.378-4.487-42.812-5.3-65.649-.334-9.401-.503-21.563-.503-27.148l.08-504.228c0-5.607.171-17.766.508-27.159.825-22.983 2.646-52.639 5.401-66.151 4.141-20.306 10.391-39.473 18.542-55.426C34.154 93.24 46.455 76.336 61.07 61.747c14.584-14.559 31.472-26.812 50.315-36.416 16.037-8.172 35.324-14.426 55.745-18.549 13.377-2.701 42.812-4.488 65.648-5.3 9.402-.335 21.565-.504 27.149-.504l504.227.081c5.608 0 17.766.171 27.159.508 22.983.825 52.638 2.646 66.152 5.401 20.305 4.141 39.472 10.391 55.425 18.542 18.871 9.643 35.774 21.944 50.363 36.559 14.559 14.584 26.812 31.471 36.415 50.315 8.174 16.037 14.428 35.323 18.551 55.744 2.7 13.378 4.486 42.812 5.3 65.649.335 9.402.504 21.564.504 27.15l-.082 504.226z"
              />
              <linearGradient
                id="htwasqiconb-chat-app"
                gradientUnits="userSpaceOnUse"
                x1="512.001"
                y1=".978"
                x2="512.001"
                y2="1025.023"
              >
                <stop offset="0" stopColor="#61fd7d" />
                <stop offset="1" stopColor="#2bb826" />
              </linearGradient>
            </defs>
            <use
              xlinkHref="#htwasqicona-chat-app"
              overflow="visible"
              fill="url(#htwasqiconb-chat-app)"
            />
            <g>
              <path
                fill="#FFFFFF"
                d="M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z"
              />
            </g>
          </svg>
        </a>
      </div>

      {/* Floating Quick Action Widget on Right (Call & Message - Exact Live Site replica) */}
      <div className="fixed right-5 sm:right-8 md:right-10 bottom-10 md:bottom-12 z-50">
        <div className="bg-white py-[18px] px-[11px] rounded-[30px] shadow-[2px_2px_11px_4px_rgba(0,0,0,0.12)] flex flex-col items-center gap-[14px]">
          <a
            href="tel:+442078398797"
            aria-label="Call Arya Bhavan"
            className="text-[#636363] hover:text-[#F6851C] transition-colors flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 1024 1024"
              fill="currentColor"
            >
              <path d="M608 0c-17.664 0-32 14.336-32 32s14.336 32 32 32c194.08 0 352 157.92 352 352 0 17.664 14.336 32 32 32s32-14.336 32-32C1024 186.624 837.376 0 608 0zm192 1024c8.48 0 16.64-3.36 22.624-9.376l160-160c12.512-12.512 12.512-32.736 0-45.248l-224-224c-12.512-12.512-32.736-12.512-45.248 0L576 722.752 301.248 448l137.376-137.376c12.512-12.512 12.512-32.736 0-45.248l-224-224c-12.512-12.512-32.736-12.512-45.248 0l-160 160C3.36 207.36 0 215.52 0 224c0 441.12 358.88 800 800 800zM192 109.248L370.752 288 233.376 425.376c-12.512 12.512-12.512 32.736 0 45.248l320 320c12.512 12.512 32.736 12.512 45.248 0L736 653.248 914.752 832 786.848 959.904C391.424 952.928 71.072 632.576 64.096 237.152L192 109.248zM768 416c0 17.664 14.336 32 32 32s32-14.336 32-32c0-123.52-100.48-224-224-224-17.664 0-32 14.336-32 32s14.336 32 32 32c88.224 0 160 71.776 160 160z" />
            </svg>
          </a>
          <a
            href="mailto:contact@nk-ab.com"
            aria-label="Email Arya Bhavan"
            className="text-[#636363] hover:text-[#F6851C] transition-colors flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 1024 1024"
              fill="currentColor"
            >
              <path d="M491.744 600.768C497.632 605.6 504.8 608 512 608s14.368-2.4 20.256-7.232l352-288c13.664-11.232 15.68-31.36 4.512-45.024-11.2-13.728-31.328-15.68-45.024-4.544L512 534.656 180.256 263.232c-13.696-11.168-33.792-9.216-45.024 4.512-11.2 13.664-9.184 33.824 4.512 45.024l352 288zM992 128H32c-17.664 0-32 14.304-32 32v704c0 17.696 14.336 32 32 32h960c17.664 0 32-14.304 32-32V160c0-17.696-14.336-32-32-32zm-32 704H64V192h896v640zM263.008 524l-128 160c-11.04 13.824-8.8 33.952 4.992 44.992 5.92 4.736 12.96 7.008 20 7.008 9.376 0 18.688-4.128 24.992-12l128-160c11.04-13.824 8.8-33.952-4.992-44.992s-33.952-8.8-44.992 4.992zm497.984 0c-11.04-13.824-31.2-16.032-44.96-4.992C702.208 530.08 700 550.208 711.04 564l128 160c6.304 7.904 15.584 12 24.96 12 7.008 0 14.08-2.272 19.968-7.008C897.792 717.92 900 697.792 888.96 684L760.992 524z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
