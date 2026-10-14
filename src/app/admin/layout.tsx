import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Headless Admin CMS | Arya Bhavan London',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-scope min-h-screen bg-[#f8fafc] text-slate-800 antialiased">
      <style>{`
        .admin-scope {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
          font-size: 13px !important;
          line-height: 1.5 !important;
          letter-spacing: -0.01em !important;
        }
        .admin-scope p {
          font-family: inherit !important;
          font-size: 13px !important;
          line-height: 1.5 !important;
          color: inherit !important;
          margin: 0 !important;
        }
        .admin-scope h1, 
        .admin-scope h2, 
        .admin-scope h3, 
        .admin-scope h4, 
        .admin-scope h5, 
        .admin-scope h6 {
          font-family: inherit !important;
          font-weight: 700 !important;
          letter-spacing: -0.02em !important;
        }
        .admin-scope input, 
        .admin-scope textarea, 
        .admin-scope select, 
        .admin-scope button {
          font-family: inherit !important;
          font-size: 13px !important;
        }
        /* Custom slim scrollbar for admin panels */
        .admin-scope ::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        .admin-scope ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .admin-scope ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 9999px;
        }
        .admin-scope ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
      {children}
    </div>
  );
}
