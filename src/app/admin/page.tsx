'use client';

import React, { useState, useEffect } from 'react';
import { Lock, Save, CheckCircle2, AlertCircle, RefreshCw, LayoutDashboard, Utensils, MapPin, Sparkles, HelpCircle, Mail, Settings } from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [activeTab, setActiveTab] = useState<'general' | 'hero' | 'branches' | 'catering' | 'faqs' | 'forms'>('general');
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  // Load content
  useEffect(() => {
    if (isAuthenticated) {
      setLoading(true);
      fetch('/api/admin/content')
        .then((res) => res.json())
        .then((data) => {
          setContent(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default passcodes
    if (passcode === '0k07nvYbQy82' || passcode === 'eventsnkab' || passcode === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid passcode. Use the admin credentials provided in your prompt.');
    }
  };

  const handleSave = async () => {
    setSaveStatus('saving');
    try {
      const res = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content)
      });
      if (res.ok) {
        setSaveStatus('saved');
        setTimeout(() => setSaveStatus('idle'), 3000);
      } else {
        setSaveStatus('error');
      }
    } catch {
      setSaveStatus('error');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl max-w-md w-full space-y-5">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#c45c26] flex items-center justify-center mx-auto">
            <Lock className="w-6 h-6" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-serif font-bold text-gray-900">Arya Bhavan Admin CMS</h1>
            <p className="text-xs text-gray-500 mt-1">Enter your management passcode to access live content settings.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Passcode / Master Password</label>
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#c45c26]"
                placeholder="Enter password..."
              />
            </div>
            <button type="submit" className="btn-3d-primary w-full py-2.5 text-xs justify-center">
              Authenticate & Unlock CMS
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (loading || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <RefreshCw className="w-8 h-8 text-[#c45c26] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#c45c26] text-white flex items-center justify-center font-bold text-sm">
            AB
          </div>
          <div>
            <h1 className="font-serif font-bold text-base text-gray-900">Arya Bhavan Headless CMS</h1>
            <span className="text-[10px] text-green-600 font-bold uppercase flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Live Synchronized
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {saveStatus === 'saved' && (
            <span className="text-xs text-green-700 font-semibold flex items-center gap-1 bg-green-50 px-3 py-1.5 rounded-lg border border-green-200">
              <CheckCircle2 className="w-4 h-4" /> Changes Published Live
            </span>
          )}
          {saveStatus === 'error' && (
            <span className="text-xs text-red-700 font-semibold flex items-center gap-1 bg-red-50 px-3 py-1.5 rounded-lg border border-red-200">
              <AlertCircle className="w-4 h-4" /> Save Failed
            </span>
          )}
          <button
            onClick={handleSave}
            disabled={saveStatus === 'saving'}
            className="btn-3d-primary text-xs py-2 px-5"
          >
            <Save className="w-4 h-4" />
            {saveStatus === 'saving' ? 'Publishing...' : 'Save & Publish Live'}
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Sidebar Nav */}
        <aside className="w-full md:w-64 bg-white border-r border-gray-200 p-4 space-y-1">
          <button
            onClick={() => setActiveTab('general')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-colors ${
              activeTab === 'general' ? 'bg-orange-50 text-[#c45c26] font-bold' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Settings className="w-4 h-4" /> Restaurant General Info
          </button>
          <button
            onClick={() => setActiveTab('hero')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-colors ${
              activeTab === 'hero' ? 'bg-orange-50 text-[#c45c26] font-bold' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" /> Hero Section
          </button>
          <button
            onClick={() => setActiveTab('catering')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-colors ${
              activeTab === 'catering' ? 'bg-orange-50 text-[#c45c26] font-bold' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Sparkles className="w-4 h-4" /> Catering Settings
          </button>
          <button
            onClick={() => setActiveTab('faqs')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-colors ${
              activeTab === 'faqs' ? 'bg-orange-50 text-[#c45c26] font-bold' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <HelpCircle className="w-4 h-4" /> FAQ Manager
          </button>
          <button
            onClick={() => setActiveTab('forms')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-colors ${
              activeTab === 'forms' ? 'bg-orange-50 text-[#c45c26] font-bold' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Mail className="w-4 h-4" /> Form Notifications & Keys
          </button>
        </aside>

        {/* Content Panel */}
        <main className="flex-1 p-6 md:p-10 max-w-4xl">
          {activeTab === 'general' && (
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
              <h2 className="font-serif font-bold text-xl text-gray-900 border-b border-gray-100 pb-3">
                General Restaurant Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Brand Site Name</label>
                  <input
                    type="text"
                    value={content.general?.siteName || ''}
                    onChange={(e) => setContent({ ...content, general: { ...content.general, siteName: e.target.value } })}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Tagline</label>
                  <input
                    type="text"
                    value={content.general?.tagline || ''}
                    onChange={(e) => setContent({ ...content, general: { ...content.general, tagline: e.target.value } })}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Customer Support Email</label>
                    <input
                      type="email"
                      value={content.general?.email || ''}
                      onChange={(e) => setContent({ ...content, general: { ...content.general, email: e.target.value } })}
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Primary Telephone</label>
                    <input
                      type="text"
                      value={content.general?.primaryPhone || ''}
                      onChange={(e) => setContent({ ...content, general: { ...content.general, primaryPhone: e.target.value } })}
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'hero' && (
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
              <h2 className="font-serif font-bold text-xl text-gray-900 border-b border-gray-100 pb-3">
                Hero Section Configuration
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Badge Text</label>
                  <input
                    type="text"
                    value={content.hero?.badge || ''}
                    onChange={(e) => setContent({ ...content, hero: { ...content.hero, badge: e.target.value } })}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Main Headline</label>
                  <input
                    type="text"
                    value={content.hero?.title || ''}
                    onChange={(e) => setContent({ ...content, hero: { ...content.hero, title: e.target.value } })}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Hero Subtitle</label>
                  <textarea
                    rows={3}
                    value={content.hero?.subtitle || ''}
                    onChange={(e) => setContent({ ...content, hero: { ...content.hero, subtitle: e.target.value } })}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'catering' && (
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
              <h2 className="font-serif font-bold text-xl text-gray-900 border-b border-gray-100 pb-3">
                Catering Descriptions
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Live Dosa Title</label>
                  <input
                    type="text"
                    value={content.catering?.liveDosa?.title || ''}
                    onChange={(e) => setContent({ ...content, catering: { ...content.catering, liveDosa: { ...content.catering.liveDosa, title: e.target.value } } })}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Live Dosa Description</label>
                  <textarea
                    rows={3}
                    value={content.catering?.liveDosa?.desc || ''}
                    onChange={(e) => setContent({ ...content, catering: { ...content.catering, liveDosa: { ...content.catering.liveDosa, desc: e.target.value } } })}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
              <h2 className="font-serif font-bold text-xl text-gray-900 border-b border-gray-100 pb-3">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {content.faqs?.map((faq: any, i: number) => (
                  <div key={i} className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 mb-1">Question {i + 1}</label>
                      <input
                        type="text"
                        value={faq.q}
                        onChange={(e) => {
                          const updated = [...content.faqs];
                          updated[i].q = e.target.value;
                          setContent({ ...content, faqs: updated });
                        }}
                        className="w-full px-3 py-1.5 rounded-lg border border-gray-200 text-xs bg-white font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 mb-1">Answer</label>
                      <textarea
                        rows={2}
                        value={faq.a}
                        onChange={(e) => {
                          const updated = [...content.faqs];
                          updated[i].a = e.target.value;
                          setContent({ ...content, faqs: updated });
                        }}
                        className="w-full px-3 py-1.5 rounded-lg border border-gray-200 text-xs bg-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'forms' && (
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
              <h2 className="font-serif font-bold text-xl text-gray-900 border-b border-gray-100 pb-3">
                Form Deliverability & Keys
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Recipient Email for Inquiries</label>
                  <input
                    type="email"
                    value={content.web3forms?.email || ''}
                    onChange={(e) => setContent({ ...content, web3forms: { ...content.web3forms, email: e.target.value } })}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs"
                    placeholder="eventsnkab@gmail.com"
                  />
                  <p className="text-[11px] text-gray-400 mt-1">All table reservations, catering inquiries, and franchise leads route here.</p>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Web3Forms Access Key</label>
                  <input
                    type="text"
                    value={content.web3forms?.accessKey || ''}
                    onChange={(e) => setContent({ ...content, web3forms: { ...content.web3forms, accessKey: e.target.value } })}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs font-mono"
                    placeholder="Optional: Obtain free from web3forms.com"
                  />
                  <p className="text-[11px] text-gray-400 mt-1">Provides instant serverless dual-dispatch email delivery to your inbox.</p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
