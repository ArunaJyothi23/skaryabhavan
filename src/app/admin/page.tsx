'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Lock,
  Save,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  LayoutDashboard,
  Utensils,
  MapPin,
  Sparkles,
  HelpCircle,
  Mail,
  Settings,
  Star,
  ShieldCheck,
  FileText,
  Truck,
  ExternalLink,
  Plus,
  Trash2,
  Image as ImageIcon,
  LogOut,
  Sliders,
  Flame,
  Coffee,
  Calendar,
  Eye,
  Check,
  Search,
  Globe,
  ChevronRight,
  User,
  Activity,
  Layers,
} from 'lucide-react';
import SeoManagement from '@/components/admin/SeoManagement';
import ImageUploadField from '@/components/admin/ImageUploadField';
import menuData from '@/data/menu.json';

type AdminTab =
  | 'hero'
  | 'general'
  | 'topFood'
  | 'menu'
  | 'about'
  | 'gallery'
  | 'outdoor'
  | 'liveDosa'
  | 'whyChooseUs'
  | 'faqs'
  | 'reviews'
  | 'headerFooter'
  | 'forms'
  | 'delivery'
  | 'policies'
  | 'seo';

interface NavGroup {
  group: string;
  items: { id: AdminTab; label: string; icon: any; count?: number; badge?: string }[];
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState<AdminTab>('seo');
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [saveMessage, setSaveMessage] = useState('');

  // Menu tab filters
  const [menuSearch, setMenuSearch] = useState('');
  const [selectedMenuCategory, setSelectedMenuCategory] = useState('All');

  // Check existing session token on mount
  useEffect(() => {
    const token = sessionStorage.getItem('ab_admin_session');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch live site content once authenticated
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        sessionStorage.setItem('ab_admin_session', data.token || 'authenticated');
        setIsAuthenticated(true);
      } else {
        setLoginError(data.error || 'Invalid passcode. Please try again.');
      }
    } catch {
      // Fallback local check
      if (
        passcode === '0k07nvYbQy82' ||
        passcode === 'eventsnkab' ||
        passcode === 'admin123' ||
        passcode === 'skaryabhavan2026'
      ) {
        sessionStorage.setItem('ab_admin_session', 'local_passcode_authenticated');
        setIsAuthenticated(true);
      } else {
        setLoginError('Invalid management passcode. Please try again.');
      }
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('ab_admin_session');
    setIsAuthenticated(false);
    setPasscode('');
  };

  const handleSave = async () => {
    setSaveStatus('saving');
    setSaveMessage('Synchronizing to Cloud Firestore & Local Disk...');

    try {
      const res = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });

      if (res.ok) {
        setSaveStatus('saved');
        setSaveMessage('Changes Published Live Across All London Branch Pages!');
        if (typeof window !== 'undefined') {
          localStorage.setItem('content_updated_at', Date.now().toString());
        }
        setTimeout(() => setSaveStatus('idle'), 4000);
      } else {
        setSaveStatus('error');
        setSaveMessage('Save failed. Please check network connection.');
      }
    } catch {
      setSaveStatus('error');
      setSaveMessage('Save failed. Serverless timeout or file lock.');
    }
  };

  // Helper to add items to arrays
  const handleAddItem = (path: string, defaultItem: any) => {
    setContent((prev: any) => {
      const parts = path.split('.');
      if (parts.length === 1) {
        return {
          ...prev,
          [parts[0]]: [...(prev[parts[0]] || []), defaultItem],
        };
      }
      return {
        ...prev,
        [parts[0]]: {
          ...prev[parts[0]],
          [parts[1]]: [...(prev[parts[0]]?.[parts[1]] || []), defaultItem],
        },
      };
    });
  };

  // Helper to remove items from arrays
  const handleDeleteItem = (path: string, index: number) => {
    setContent((prev: any) => {
      const parts = path.split('.');
      if (parts.length === 1) {
        return {
          ...prev,
          [parts[0]]: (prev[parts[0]] || []).filter((_: any, i: number) => i !== index),
        };
      }
      return {
        ...prev,
        [parts[0]]: {
          ...prev[parts[0]],
          [parts[1]]: (prev[parts[0]]?.[parts[1]] || []).filter((_: any, i: number) => i !== index),
        },
      };
    });
  };

  // Authentication Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 font-sans">
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/80 shadow-2xl max-w-md w-full space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-orange-500/20">
            <Lock className="w-7 h-7" />
          </div>

          <div className="text-center space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-orange-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 font-mono">
              Headless React CMS v2.0
            </span>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Arya Bhavan Admin
            </h1>
            <p className="text-xs text-slate-500">
              Enter your master administrative passcode to manage live website content and enterprise SEO.
            </p>
          </div>

          {loginError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Passcode / Master Password</label>
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all font-mono"
                placeholder="Enter password..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 rounded-xl text-xs transition-colors shadow-md flex items-center justify-center gap-2"
            >
              Authenticate & Access CMS
            </button>
          </form>

          <div className="pt-3 border-t border-slate-100 text-center">
            <Link href="/" className="text-xs text-slate-500 hover:text-orange-600 font-medium flex items-center justify-center gap-1">
              &larr; Back to Public Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Loading State
  if (loading || !content) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 space-y-3 font-sans">
        <RefreshCw className="w-8 h-8 text-orange-600 animate-spin" />
        <p className="text-xs font-semibold text-slate-600">Connecting to Cloud Firestore & Synchronizing Data...</p>
      </div>
    );
  }

  // Navigation Groups Definition (15 Panels)
  const navGroups: NavGroup[] = [
    {
      group: 'Core Brand & Display',
      items: [
        { id: 'hero', label: 'Hero Slider & Stats', icon: LayoutDashboard },
        { id: 'general', label: 'General & Contact Info', icon: Settings },
        { id: 'topFood', label: 'Top Food / Specials', icon: Flame, count: content.topFood?.length },
        { id: 'menu', label: 'Menu Manager (200+)', icon: Utensils },
        { id: 'about', label: 'About Samko Story', icon: Coffee },
        { id: 'gallery', label: 'Food Photo Gallery', icon: ImageIcon, count: content.gallery?.length },
      ],
    },
    {
      group: 'Catering & Offerings',
      items: [
        { id: 'outdoor', label: 'Outdoor Catering', icon: Sparkles },
        { id: 'liveDosa', label: 'Live Dosa Station', icon: Sliders },
        { id: 'whyChooseUs', label: 'Why Choose Us (4 Cards)', icon: ShieldCheck },
        { id: 'faqs', label: 'FAQ Manager', icon: HelpCircle, count: content.faqs?.length },
        { id: 'reviews', label: 'Reviews & Ratings', icon: Star, count: content.reviews?.length },
      ],
    },
    {
      group: 'Operations & Platform',
      items: [
        { id: 'headerFooter', label: 'Header & Footer Bar', icon: Sliders },
        { id: 'forms', label: 'Forms & Web3Forms Leads', icon: Mail },
        { id: 'delivery', label: 'Delivery Platforms', icon: Truck },
        { id: 'policies', label: 'Legal & GDPR Policies', icon: FileText },
      ],
    },
    {
      group: 'Growth & Marketing',
      items: [
        { id: 'seo', label: 'Enterprise SEO Suite', icon: Globe, badge: 'Pro' },
      ],
    },
  ];

  // Find active tab label for breadcrumb
  let activeTabLabel = 'Dashboard';
  for (const g of navGroups) {
    const found = g.items.find((i) => i.id === activeTab);
    if (found) {
      activeTabLabel = found.label;
      break;
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] font-sans antialiased text-slate-800">
      {/* Top Navbar */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-6 py-3 flex flex-wrap justify-between items-center sticky top-0 z-40 shadow-xs">
        {/* Left Breadcrumbs */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-semibold text-slate-500">Admin Console</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold text-slate-900">{activeTabLabel}</span>
          </div>

          <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] bg-emerald-50 text-emerald-700 font-semibold px-2.5 py-0.5 rounded-full border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live Synchronized
          </span>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/"
            target="_blank"
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-xl border border-slate-200 flex items-center gap-1.5 bg-slate-50 hover:bg-white transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-slate-400" /> Preview Site <ExternalLink className="w-3 h-3 text-slate-400" />
          </Link>

          {saveStatus === 'saved' && (
            <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 animate-fade-in-up">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> {saveMessage || 'Published Live!'}
            </span>
          )}

          {saveStatus === 'error' && (
            <span className="text-xs text-rose-700 font-semibold flex items-center gap-1 bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-200">
              <AlertCircle className="w-4 h-4 text-rose-600" /> {saveMessage || 'Save Error'}
            </span>
          )}

          <button
            onClick={handleSave}
            disabled={saveStatus === 'saving'}
            className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white text-xs font-semibold py-1.5 px-4 rounded-xl flex items-center gap-1.5 shadow-sm transition-all active:scale-[0.98]"
          >
            <Save className="w-3.5 h-3.5" />
            {saveStatus === 'saving' ? 'Publishing Changes...' : 'Save & Publish Live'}
          </button>
        </div>
      </header>

      {/* Main CMS Layout */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Executive Dark Sidebar */}
        <aside className="w-full md:w-64 bg-[#0f172a] text-slate-300 border-r border-slate-800 p-3 space-y-5 shrink-0 overflow-y-auto max-h-[calc(100vh-53px)] select-none">
          {/* Brand Monogram Header */}
          <div className="flex items-center gap-3 px-2 py-2 border-b border-slate-800/80 pb-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
              AB
            </div>
            <div className="leading-tight overflow-hidden">
              <h2 className="font-bold text-xs text-white truncate">Arya Bhavan London</h2>
              <span className="text-[10px] text-slate-400 block truncate">Headless CMS Engine</span>
            </div>
          </div>

          {/* Grouped Nav Items */}
          <div className="space-y-4">
            {navGroups.map((group) => (
              <div key={group.group} className="space-y-1">
                <div className="px-2.5 text-[10px] uppercase font-bold text-slate-500 tracking-wider font-mono">
                  {group.group}
                </div>
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-all duration-150 ${
                        isActive
                          ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/10 text-white font-semibold border-l-2 border-orange-500 shadow-xs'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon
                          className={`w-4 h-4 shrink-0 ${
                            isActive ? 'text-orange-400' : 'text-slate-500'
                          }`}
                        />
                        <span className="truncate">{item.label}</span>
                      </div>
                      {item.count !== undefined && (
                        <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-400 font-mono shrink-0">
                          {item.count}
                        </span>
                      )}
                      {item.badge && (
                        <span className="text-[9px] px-1.5 py-0.2 rounded font-bold uppercase tracking-wider bg-orange-500/20 text-orange-300 border border-orange-500/40 shrink-0">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Sidebar Footer User & Logout */}
          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
                <User className="w-3.5 h-3.5" />
              </div>
              <div className="leading-none">
                <span className="text-[11px] font-semibold text-slate-200 block">Events Team</span>
                <span className="text-[9px] text-emerald-400 font-mono">Authenticated</span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              title="Logout"
              className="text-slate-500 hover:text-red-400 p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </aside>

        {/* Right Content Editor Canvas */}
        <main className="flex-1 p-6 sm:p-8 max-w-6xl overflow-y-auto max-h-[calc(100vh-53px)]">
          {/* TAB 1: HERO SLIDER & STATS */}
          {activeTab === 'hero' && (
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
              <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
                <div>
                  <h2 className="font-bold text-base text-slate-900">Hero Carousel & Headline Settings</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Edit homepage slide photos, call-to-actions, and trust statistics.</p>
                </div>
              </div>

              {/* Hero Badge & Main Titles */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-orange-700">Hero Typography & CTAs</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Badge Text</label>
                    <input
                      type="text"
                      value={content.hero?.badge || ''}
                      onChange={(e) => setContent({ ...content, hero: { ...content.hero, badge: e.target.value } })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Primary CTA Button</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Button Text"
                        value={content.hero?.primaryCtaText || ''}
                        onChange={(e) => setContent({ ...content, hero: { ...content.hero, primaryCtaText: e.target.value } })}
                        className="w-1/2 px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-900"
                      />
                      <input
                        type="text"
                        placeholder="/menu"
                        value={content.hero?.primaryCtaLink || ''}
                        onChange={(e) => setContent({ ...content, hero: { ...content.hero, primaryCtaLink: e.target.value } })}
                        className="w-1/2 px-3 py-2 rounded-xl border border-slate-200 text-xs font-mono text-slate-900"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Hero Main Title</label>
                  <input
                    type="text"
                    value={content.hero?.title || ''}
                    onChange={(e) => setContent({ ...content, hero: { ...content.hero, title: e.target.value } })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Hero Subtitle</label>
                  <textarea
                    rows={2}
                    value={content.hero?.subtitle || ''}
                    onChange={(e) => setContent({ ...content, hero: { ...content.hero, subtitle: e.target.value } })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs leading-relaxed text-slate-900"
                  />
                </div>
              </div>

              {/* 3 Live Slides */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-orange-700">
                    Homepage Hero Carousel Slides ({content.slides?.length || 3})
                  </h3>
                  <button
                    type="button"
                    onClick={() =>
                      handleAddItem('slides', {
                        id: Date.now(),
                        image: '/images/migrated/sl1.jpg',
                        heading: 'AUTHENTIC SOUTH INDIAN VEGETARIAN',
                        subheading: 'Central London | Wembley | Tooting',
                        buttonText: 'View Menu',
                        buttonLink: '/menu',
                      })
                    }
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs py-1 px-3 rounded-lg font-semibold flex items-center gap-1 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Slide
                  </button>
                </div>

                <div className="space-y-4">
                  {(content.slides || []).map((slide: any, idx: number) => (
                    <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-800">Slide #{idx + 1}</span>
                        <button
                          type="button"
                          onClick={() => handleDeleteItem('slides', idx)}
                          className="text-slate-400 hover:text-red-600 p-1 rounded"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="space-y-3">
                        <ImageUploadField
                          label="Slide Background Image"
                          value={slide.image || ''}
                          onChange={(url) => {
                            const updated = [...content.slides];
                            updated[idx].image = url;
                            setContent({ ...content, slides: updated });
                          }}
                          recommendation="Recommended: 1920×1080 px or 1200×600 px"
                        />
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Subheading Line</label>
                          <input
                            type="text"
                            value={slide.subheading || ''}
                            onChange={(e) => {
                              const updated = [...content.slides];
                              updated[idx].subheading = e.target.value;
                              setContent({ ...content, slides: updated });
                            }}
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white text-slate-900"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Main Heading Text</label>
                        <input
                          type="text"
                          value={slide.heading || ''}
                          onChange={(e) => {
                            const updated = [...content.slides];
                            updated[idx].heading = e.target.value;
                            setContent({ ...content, slides: updated });
                          }}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white font-bold text-slate-900"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero Stats */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-orange-700">
                  Hero Key Counter Statistics (4 Counters)
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {(content.hero?.stats || []).map((st: any, idx: number) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                      <input
                        type="text"
                        value={st.number || ''}
                        onChange={(e) => {
                          const updated = [...content.hero.stats];
                          updated[idx].number = e.target.value;
                          setContent({ ...content, hero: { ...content.hero, stats: updated } });
                        }}
                        className="w-full px-2 py-1 rounded border border-slate-200 text-xs font-bold text-orange-600 bg-white"
                        placeholder="e.g. 200+"
                      />
                      <input
                        type="text"
                        value={st.label || ''}
                        onChange={(e) => {
                          const updated = [...content.hero.stats];
                          updated[idx].label = e.target.value;
                          setContent({ ...content, hero: { ...content.hero, stats: updated } });
                        }}
                        className="w-full px-2 py-1 rounded border border-slate-200 text-[11px] bg-white text-slate-700"
                        placeholder="Label"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: GENERAL & RESTAURANT INFO */}
          {activeTab === 'general' && (
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="font-bold text-base text-slate-900">Restaurant & Contact Information</h2>
                <p className="text-xs text-slate-500 mt-0.5">Primary brand details, support telephone numbers, addresses, and social links.</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Brand Site Name</label>
                    <input
                      type="text"
                      value={content.general?.siteName || ''}
                      onChange={(e) => setContent({ ...content, general: { ...content.general, siteName: e.target.value } })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Brand Tagline</label>
                    <input
                      type="text"
                      value={content.general?.tagline || ''}
                      onChange={(e) => setContent({ ...content, general: { ...content.general, tagline: e.target.value } })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Brand Full Description</label>
                  <textarea
                    rows={3}
                    value={content.general?.description || ''}
                    onChange={(e) => setContent({ ...content, general: { ...content.general, description: e.target.value } })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs leading-relaxed text-slate-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Customer Support Email</label>
                    <input
                      type="email"
                      value={content.general?.email || ''}
                      onChange={(e) => setContent({ ...content, general: { ...content.general, email: e.target.value } })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Catering Inquiry Email</label>
                    <input
                      type="email"
                      value={content.general?.cateringEmail || ''}
                      onChange={(e) => setContent({ ...content, general: { ...content.general, cateringEmail: e.target.value } })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Primary Telephone</label>
                    <input
                      type="text"
                      value={content.general?.primaryPhone || ''}
                      onChange={(e) => setContent({ ...content, general: { ...content.general, primaryPhone: e.target.value } })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Opening Hours Schedule</label>
                    <input
                      type="text"
                      value={content.general?.openingHours || ''}
                      onChange={(e) => setContent({ ...content, general: { ...content.general, openingHours: e.target.value } })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Primary Physical Address</label>
                  <input
                    type="text"
                    value={content.general?.primaryAddress || ''}
                    onChange={(e) => setContent({ ...content, general: { ...content.general, primaryAddress: e.target.value } })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900"
                  />
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-orange-700">Social Media Links</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">Facebook URL</label>
                      <input
                        type="text"
                        value={content.general?.social?.facebook || ''}
                        onChange={(e) =>
                          setContent({
                            ...content,
                            general: {
                              ...content.general,
                              social: { ...content.general?.social, facebook: e.target.value },
                            },
                          })
                        }
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">Instagram URL</label>
                      <input
                        type="text"
                        value={content.general?.social?.instagram || ''}
                        onChange={(e) =>
                          setContent({
                            ...content,
                            general: {
                              ...content.general,
                              social: { ...content.general?.social, instagram: e.target.value },
                            },
                          })
                        }
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">WhatsApp Link</label>
                      <input
                        type="text"
                        value={content.general?.social?.whatsapp || ''}
                        onChange={(e) =>
                          setContent({
                            ...content,
                            general: {
                              ...content.general,
                              social: { ...content.general?.social, whatsapp: e.target.value },
                            },
                          })
                        }
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-900"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TOP FOOD / CHEF SPECIALS */}
          {activeTab === 'topFood' && (
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <div>
                  <h2 className="font-bold text-base text-slate-900">Top Food & Chef Specials</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Manage featured signature dishes displayed prominently on the homepage.</p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    handleAddItem('topFood', {
                      id: `dish-spec-${Date.now()}`,
                      name: 'New Chef Special',
                      category: 'Dosa Corner',
                      price: '£8.95',
                      image: '/images/migrated/MASALA-DOSAI-V-G.png',
                      description: 'Delicious crispy dosa with authentic spices and fresh chutneys.',
                      vegan: true,
                      glutenFree: true,
                      jain: false,
                      bestseller: true,
                    })
                  }
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs py-1.5 px-3.5 rounded-lg font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Special Dish
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(content.topFood || []).map((dish: any, idx: number) => (
                  <div key={dish.id || idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-800">Special #{idx + 1}</span>
                      <button
                        type="button"
                        onClick={() => handleDeleteItem('topFood', idx)}
                        className="text-slate-400 hover:text-red-600 p-1 rounded"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Dish Name</label>
                        <input
                          type="text"
                          value={dish.name || ''}
                          onChange={(e) => {
                            const updated = [...content.topFood];
                            updated[idx].name = e.target.value;
                            setContent({ ...content, topFood: updated });
                          }}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white font-bold text-slate-900"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Price (£)</label>
                        <input
                          type="text"
                          value={dish.price || ''}
                          onChange={(e) => {
                            const updated = [...content.topFood];
                            updated[idx].price = e.target.value;
                            setContent({ ...content, topFood: updated });
                          }}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white font-bold text-orange-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">Category</label>
                      <input
                        type="text"
                        value={dish.category || ''}
                        onChange={(e) => {
                          const updated = [...content.topFood];
                          updated[idx].category = e.target.value;
                          setContent({ ...content, topFood: updated });
                        }}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white text-slate-900"
                      />
                    </div>

                    <ImageUploadField
                      label="Dish Photo"
                      value={dish.image || ''}
                      onChange={(url) => {
                        const updated = [...content.topFood];
                        updated[idx].image = url;
                        setContent({ ...content, topFood: updated });
                      }}
                      recommendation="Recommended: Transparent PNG or crisp photo"
                    />

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">Description</label>
                      <textarea
                        rows={2}
                        value={dish.description || ''}
                        onChange={(e) => {
                          const updated = [...content.topFood];
                          updated[idx].description = e.target.value;
                          setContent({ ...content, topFood: updated });
                        }}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white leading-relaxed text-slate-900"
                      />
                    </div>

                    <div className="flex gap-4 pt-1">
                      <label className="flex items-center gap-1.5 text-xs text-slate-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={dish.vegan || false}
                          onChange={(e) => {
                            const updated = [...content.topFood];
                            updated[idx].vegan = e.target.checked;
                            setContent({ ...content, topFood: updated });
                          }}
                          className="w-3.5 h-3.5 rounded text-orange-600"
                        />
                        Vegan
                      </label>
                      <label className="flex items-center gap-1.5 text-xs text-slate-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={dish.glutenFree || false}
                          onChange={(e) => {
                            const updated = [...content.topFood];
                            updated[idx].glutenFree = e.target.checked;
                            setContent({ ...content, topFood: updated });
                          }}
                          className="w-3.5 h-3.5 rounded text-orange-600"
                        />
                        Gluten-Free
                      </label>
                      <label className="flex items-center gap-1.5 text-xs text-slate-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={dish.jain || false}
                          onChange={(e) => {
                            const updated = [...content.topFood];
                            updated[idx].jain = e.target.checked;
                            setContent({ ...content, topFood: updated });
                          }}
                          className="w-3.5 h-3.5 rounded text-orange-600"
                        />
                        Jain
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: MENU MANAGER */}
          {activeTab === 'menu' && (
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-3">
                <div>
                  <h2 className="font-bold text-base text-slate-900">Menu Manager (200+ Dishes)</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Filter, search, and manage all menu categories and pricing.</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Search dish name..."
                      value={menuSearch}
                      onChange={(e) => setMenuSearch(e.target.value)}
                      className="pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>

              {/* Menu Categories Pills */}
              <div className="flex flex-wrap gap-1.5">
                {['All', 'Tiffins & Starters', 'Dosa Corner', 'South Indian Thali', 'Curries', 'Breads', 'Desserts', 'Beverages'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedMenuCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      selectedMenuCategory === cat
                        ? 'bg-orange-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Dishes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[500px] overflow-y-auto p-1">
                {menuData
                  .filter((d: any) => {
                    const matchesCat = selectedMenuCategory === 'All' || d.category?.toLowerCase().includes(selectedMenuCategory.toLowerCase());
                    const matchesSearch = !menuSearch || d.name?.toLowerCase().includes(menuSearch.toLowerCase());
                    return matchesCat && matchesSearch;
                  })
                  .slice(0, 30)
                  .map((dish: any, idx: number) => (
                    <div key={dish.id || idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center gap-3">
                      <div className="leading-snug truncate">
                        <h4 className="font-bold text-xs text-slate-900 truncate">{dish.name}</h4>
                        <span className="text-[10px] text-slate-500">{dish.category}</span>
                      </div>
                      <span className="text-xs font-bold text-orange-600 font-mono shrink-0 bg-white px-2 py-0.5 rounded border border-orange-100">
                        {dish.price}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* TAB 5: ABOUT SECTION */}
          {activeTab === 'about' && (
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="font-bold text-base text-slate-900">About Samko Arya Bhavan</h2>
                <p className="text-xs text-slate-500 mt-0.5">Narrative, culinary story, and feature badges.</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Section Badge</label>
                    <input
                      type="text"
                      value={content.about?.badge || ''}
                      onChange={(e) => setContent({ ...content, about: { ...content.about, badge: e.target.value } })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <ImageUploadField
                      label="Featured Thali Image"
                      value={content.about?.image || ''}
                      onChange={(url) => setContent({ ...content, about: { ...content.about, image: url } })}
                      recommendation="Recommended: High-resolution culinary thali photo"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Section Main Title</label>
                  <input
                    type="text"
                    value={content.about?.title || ''}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, title: e.target.value } })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-900"
                  />
                </div>

                {/* Narrative Paragraphs */}
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-semibold text-slate-800">Narrative Story Paragraphs</label>
                    <button
                      type="button"
                      onClick={() => handleAddItem('about.narrative', 'New narrative paragraph...')}
                      className="text-xs text-orange-600 font-semibold hover:underline flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Paragraph
                    </button>
                  </div>
                  {(content.about?.narrative || []).map((para: string, idx: number) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <textarea
                        rows={3}
                        value={para}
                        onChange={(e) => {
                          const updated = [...content.about.narrative];
                          updated[idx] = e.target.value;
                          setContent({ ...content, about: { ...content.about, narrative: updated } });
                        }}
                        className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs leading-relaxed text-slate-900"
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteItem('about.narrative', idx)}
                        className="text-slate-400 hover:text-red-600 p-2 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* 4 Core Feature Badges / Cards */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div>
                    <label className="text-xs font-bold text-slate-800">4 Core Feature Badges (Pure Vegetarian, Diet Friendly, Authentic, Family)</label>
                    <p className="text-[11px] text-slate-500">Pills displayed beneath the about section on the homepage.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(content.about?.featureCards || []).map((feat: any, idx: number) => (
                      <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                        <label className="block text-[11px] font-semibold text-slate-600">Feature #{idx + 1} Title</label>
                        <input
                          type="text"
                          value={feat.title || ''}
                          onChange={(e) => {
                            const updated = [...(content.about.featureCards || [])];
                            updated[idx].title = e.target.value;
                            setContent({ ...content, about: { ...content.about, featureCards: updated } });
                          }}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold bg-white text-slate-900"
                        />
                        <label className="block text-[11px] font-semibold text-slate-600">Short Subtitle / Description</label>
                        <input
                          type="text"
                          value={feat.desc || ''}
                          onChange={(e) => {
                            const updated = [...(content.about.featureCards || [])];
                            updated[idx].desc = e.target.value;
                            setContent({ ...content, about: { ...content.about, featureCards: updated } });
                          }}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white text-slate-900"
                        />
                        <ImageUploadField
                          label="Badge Icon Image"
                          value={feat.icon || ''}
                          onChange={(url) => {
                            const updated = [...(content.about.featureCards || [])];
                            updated[idx].icon = url;
                            setContent({ ...content, about: { ...content.about, featureCards: updated } });
                          }}
                          recommendation="Recommended: Small icon or logo (PNG / SVG)"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5B: FOOD PHOTO GALLERY */}
          {activeTab === 'gallery' && (
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <div>
                  <h2 className="font-bold text-base text-slate-900">Food Photo Gallery (Homepage Grid)</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Upload photos, update descriptions, and manage image showcases.</p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    handleAddItem('gallery', {
                      src: '/images/migrated/WhatsApp-Image-2025-12-09-at-17.36.52.jpeg',
                      alt: 'Delicious authentic vegetarian dish',
                    })
                  }
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs py-1.5 px-3 rounded-lg font-semibold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Gallery Photo
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {(content.gallery || []).map((imgItem: any, idx: number) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-orange-700">Photo #{idx + 1}</span>
                      <button
                        type="button"
                        onClick={() => handleDeleteItem('gallery', idx)}
                        className="text-slate-400 hover:text-red-600 p-1 rounded"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <ImageUploadField
                      label="Gallery Image"
                      value={imgItem.src || ''}
                      onChange={(url) => {
                        const updated = [...(content.gallery || [])];
                        updated[idx].src = url;
                        setContent({ ...content, gallery: updated });
                      }}
                      recommendation="Recommended: 4:3 or square crisp culinary photo"
                    />

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">Alt Caption / Accessibility Text</label>
                      <input
                        type="text"
                        value={imgItem.alt || ''}
                        onChange={(e) => {
                          const updated = [...(content.gallery || [])];
                          updated[idx].alt = e.target.value;
                          setContent({ ...content, gallery: updated });
                        }}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white text-slate-900"
                        placeholder="Image description..."
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: OUTDOOR CATERING */}
          {activeTab === 'outdoor' && (
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs space-y-8">
              {/* Service Cards (4 Cards) */}
              <div className="space-y-4">
                <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
                  <div>
                    <h2 className="font-bold text-base text-slate-900">1. Outdoor Catering Service Types (4 Cards)</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Cards shown on the Outdoor Catering page (Buffet, Fine Dining, On-Site, Business).</p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      handleAddItem('outdoorCatering.serviceCards', {
                        title: 'NEW SERVICE',
                        desc: 'Description of service...',
                        img: '/images/catering/closed-metal-pots-1.jpg',
                      })
                    }
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs py-1.5 px-3 rounded-lg font-semibold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Service Card
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(content.outdoorCatering?.serviceCards || []).map((card: any, idx: number) => (
                    <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-orange-700">Card #{idx + 1}</span>
                        <button
                          type="button"
                          onClick={() => handleDeleteItem('outdoorCatering.serviceCards', idx)}
                          className="text-slate-400 hover:text-red-600 p-1 rounded"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Service Title</label>
                        <input
                          type="text"
                          value={card.title || ''}
                          onChange={(e) => {
                            const updated = [...content.outdoorCatering.serviceCards];
                            updated[idx].title = e.target.value;
                            setContent({
                              ...content,
                              outdoorCatering: { ...content.outdoorCatering, serviceCards: updated },
                            });
                          }}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold bg-white text-slate-900"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Service Description</label>
                        <textarea
                          rows={2}
                          value={card.desc || ''}
                          onChange={(e) => {
                            const updated = [...content.outdoorCatering.serviceCards];
                            updated[idx].desc = e.target.value;
                            setContent({
                              ...content,
                              outdoorCatering: { ...content.outdoorCatering, serviceCards: updated },
                            });
                          }}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white text-slate-900"
                        />
                      </div>

                      <ImageUploadField
                        label="Card Cover Image"
                        value={card.img || ''}
                        onChange={(url) => {
                          const updated = [...content.outdoorCatering.serviceCards];
                          updated[idx].img = url;
                          setContent({
                            ...content,
                            outdoorCatering: { ...content.outdoorCatering, serviceCards: updated },
                          });
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Catering Packages */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center pb-2">
                  <div>
                    <h2 className="font-bold text-base text-slate-900">2. Catering Packages (Pricing, Pax & Inclusions)</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Customize buffet packages, items list, and minimum headcount.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      handleAddItem('outdoorCatering.packages', {
                        name: 'Option New (£21.99)',
                        pax: '(Minimum 40Pax)',
                        items: ['4 Starters', '3 Mains', '1 Dal', 'Biryani', 'Desserts', 'Breads'],
                        note: 'Full service included.',
                      })
                    }
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs py-1.5 px-3 rounded-lg font-semibold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Package
                  </button>
                </div>

                <div className="space-y-4">
                  {(content.outdoorCatering?.packages || []).map((pkg: any, idx: number) => (
                    <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                      <div className="flex justify-between items-center">
                        <input
                          type="text"
                          value={pkg.name || ''}
                          onChange={(e) => {
                            const updated = [...content.outdoorCatering.packages];
                            updated[idx].name = e.target.value;
                            setContent({ ...content, outdoorCatering: { ...content.outdoorCatering, packages: updated } });
                          }}
                          className="font-bold text-xs px-2.5 py-1 bg-white rounded border border-slate-200 text-orange-700"
                          placeholder="Package Name & Price"
                        />
                        <button
                          type="button"
                          onClick={() => handleDeleteItem('outdoorCatering.packages', idx)}
                          className="text-slate-400 hover:text-red-600 p-1 rounded"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Pax Minimum</label>
                          <input
                            type="text"
                            value={pkg.pax || ''}
                            onChange={(e) => {
                              const updated = [...content.outdoorCatering.packages];
                              updated[idx].pax = e.target.value;
                              setContent({ ...content, outdoorCatering: { ...content.outdoorCatering, packages: updated } });
                            }}
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white text-slate-900"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Notes / Accompaniments</label>
                          <input
                            type="text"
                            value={pkg.note || ''}
                            onChange={(e) => {
                              const updated = [...content.outdoorCatering.packages];
                              updated[idx].note = e.target.value;
                              setContent({ ...content, outdoorCatering: { ...content.outdoorCatering, packages: updated } });
                            }}
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white text-slate-900"
                          />
                        </div>
                      </div>

                      {/* Package Items Editor */}
                      <div className="space-y-1.5 pt-2">
                        <div className="flex justify-between items-center">
                          <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">
                            Package Included Dishes / Courses ({pkg.items?.length || 0})
                          </label>
                          <button
                            type="button"
                            onClick={() => {
                              const updated = [...content.outdoorCatering.packages];
                              updated[idx].items = [...(updated[idx].items || []), 'New Dish Course'];
                              setContent({ ...content, outdoorCatering: { ...content.outdoorCatering, packages: updated } });
                            }}
                            className="text-orange-600 hover:text-orange-700 text-[11px] font-semibold flex items-center gap-1"
                          >
                            <Plus className="w-3 h-3" /> Add Course
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                          {(pkg.items || []).map((item: string, itemIdx: number) => (
                            <div key={itemIdx} className="flex items-center gap-1.5 bg-white p-1 rounded-lg border border-slate-200">
                              <input
                                type="text"
                                value={item}
                                onChange={(e) => {
                                  const updated = [...content.outdoorCatering.packages];
                                  updated[idx].items[itemIdx] = e.target.value;
                                  setContent({ ...content, outdoorCatering: { ...content.outdoorCatering, packages: updated } });
                                }}
                                className="w-full px-2 py-0.5 text-xs text-slate-900 focus:outline-none"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  const updated = [...content.outdoorCatering.packages];
                                  updated[idx].items.splice(itemIdx, 1);
                                  setContent({ ...content, outdoorCatering: { ...content.outdoorCatering, packages: updated } });
                                }}
                                className="text-slate-400 hover:text-red-600 p-1"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Menu Dish Categories (All 7 Columns) */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center pb-2">
                  <div>
                    <h2 className="font-bold text-base text-slate-900">3. Menu Dish Categories (All Columns & Dishes)</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Control Starters, Rice & Noodles, Veg Curries, Paneer Curries, Breads, Dhal, and Desserts.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      handleAddItem('outdoorCatering.dishCategories', {
                        title: 'New Dish Category',
                        items: ['Dish Item 1', 'Dish Item 2'],
                      })
                    }
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs py-1.5 px-3 rounded-lg font-semibold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Category Column
                  </button>
                </div>

                <div className="space-y-4">
                  {(content.outdoorCatering?.dishCategories || []).map((cat: any, catIdx: number) => (
                    <div key={catIdx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-500">Col #{catIdx + 1}</span>
                          <input
                            type="text"
                            value={cat.title || ''}
                            onChange={(e) => {
                              const updated = [...content.outdoorCatering.dishCategories];
                              updated[catIdx].title = e.target.value;
                              setContent({
                                ...content,
                                outdoorCatering: { ...content.outdoorCatering, dishCategories: updated },
                              });
                            }}
                            className="font-bold text-xs px-2.5 py-1 bg-white rounded border border-slate-200 text-orange-700"
                            placeholder="Category Title"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              const updated = [...content.outdoorCatering.dishCategories];
                              updated[catIdx].items = [...(updated[catIdx].items || []), 'New Dish Item'];
                              setContent({
                                ...content,
                                outdoorCatering: { ...content.outdoorCatering, dishCategories: updated },
                              });
                            }}
                            className="bg-orange-100 hover:bg-orange-200 text-orange-700 text-xs py-1 px-2.5 rounded font-semibold flex items-center gap-1"
                          >
                            <Plus className="w-3 h-3" /> Add Dish
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteItem('outdoorCatering.dishCategories', catIdx)}
                            className="text-slate-400 hover:text-red-600 p-1 rounded"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-1">
                        {(cat.items || []).map((dishName: string, dishIdx: number) => (
                          <div key={dishIdx} className="flex items-center gap-1.5 bg-white p-1 rounded-lg border border-slate-200">
                            <input
                              type="text"
                              value={dishName}
                              onChange={(e) => {
                                const updated = [...content.outdoorCatering.dishCategories];
                                updated[catIdx].items[dishIdx] = e.target.value;
                                setContent({
                                  ...content,
                                  outdoorCatering: { ...content.outdoorCatering, dishCategories: updated },
                                });
                              }}
                              className="w-full px-2 py-0.5 text-xs text-slate-900 focus:outline-none"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const updated = [...content.outdoorCatering.dishCategories];
                                updated[catIdx].items.splice(dishIdx, 1);
                                setContent({
                                  ...content,
                                  outdoorCatering: { ...content.outdoorCatering, dishCategories: updated },
                                });
                              }}
                              className="text-slate-400 hover:text-red-600 p-1"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accompaniments Note */}
              <div className="pt-4 border-t border-slate-100">
                <label className="block text-xs font-semibold text-slate-700 mb-1">Complimentary Accompaniments Global Notice</label>
                <textarea
                  rows={2}
                  value={content.outdoorCatering?.accompanimentsNote || ''}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      outdoorCatering: { ...content.outdoorCatering, accompanimentsNote: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900"
                />
              </div>
            </div>
          )}

          {/* TAB 7: LIVE DOSA CATERING */}
          {activeTab === 'liveDosa' && (
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs space-y-8">
              {/* Pricing Cards */}
              <div className="space-y-4">
                <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
                  <div>
                    <h2 className="font-bold text-base text-slate-900">1. Live Dosa Pricing Cards</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Rates for weekday and weekend / bank holiday live dosa events.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      handleAddItem('liveDosaCatering.pricingCards', {
                        title: 'New Rate Option',
                        price: '£16.00',
                        pax: '(Minimum 40 Persons)',
                      })
                    }
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs py-1.5 px-3 rounded-lg font-semibold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Pricing Card
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(content.liveDosaCatering?.pricingCards || []).map((card: any, idx: number) => (
                    <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-orange-700">Card #{idx + 1}</span>
                        <button
                          type="button"
                          onClick={() => handleDeleteItem('liveDosaCatering.pricingCards', idx)}
                          className="text-slate-400 hover:text-red-600 p-1 rounded"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={card.title || ''}
                          onChange={(e) => {
                            const updated = [...content.liveDosaCatering.pricingCards];
                            updated[idx].title = e.target.value;
                            setContent({
                              ...content,
                              liveDosaCatering: { ...content.liveDosaCatering, pricingCards: updated },
                            });
                          }}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold bg-white text-slate-900"
                          placeholder="Card Title (e.g. Monday to Friday)"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            value={card.price || ''}
                            onChange={(e) => {
                              const updated = [...content.liveDosaCatering.pricingCards];
                              updated[idx].price = e.target.value;
                              setContent({
                                ...content,
                                liveDosaCatering: { ...content.liveDosaCatering, pricingCards: updated },
                              });
                            }}
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-orange-600 bg-white"
                            placeholder="Price (e.g. £14.00)"
                          />
                          <input
                            type="text"
                            value={card.pax || ''}
                            onChange={(e) => {
                              const updated = [...content.liveDosaCatering.pricingCards];
                              updated[idx].pax = e.target.value;
                              setContent({
                                ...content,
                                liveDosaCatering: { ...content.liveDosaCatering, pricingCards: updated },
                              });
                            }}
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white text-slate-900"
                            placeholder="Pax (e.g. (Minimum 35 Persons))"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Green Pill Badges */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">2. Highlight Badges (Dark Green Pills)</h3>
                    <p className="text-[11px] text-slate-500">Pill badges displayed directly above the menu columns.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleAddItem('liveDosaCatering.badges', '★ New Badge Text ★')}
                    className="text-orange-600 hover:underline text-xs font-semibold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Badge
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(content.liveDosaCatering?.badges || []).map((badge: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-200">
                      <input
                        type="text"
                        value={badge}
                        onChange={(e) => {
                          const updated = [...content.liveDosaCatering.badges];
                          updated[idx] = e.target.value;
                          setContent({
                            ...content,
                            liveDosaCatering: { ...content.liveDosaCatering, badges: updated },
                          });
                        }}
                        className="flex-1 px-3 py-1 rounded-lg border border-slate-200 text-xs bg-white text-slate-900 font-semibold"
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteItem('liveDosaCatering.badges', idx)}
                        className="text-slate-400 hover:text-red-600 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Menu Columns 1 & 2 */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-orange-700">3. Live Dosa Offerings (Col 1 & Col 2)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Column 1 */}
                  <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold text-slate-800">Menu Column 1 (Dosas & Starters)</span>
                      <button
                        type="button"
                        onClick={() => handleAddItem('liveDosaCatering.menuColumn1', 'New Live Item (LIVE)')}
                        className="text-orange-600 hover:underline text-xs font-semibold flex items-center gap-1"
                      >
                        <Plus className="w-3 h-3" /> Add Item
                      </button>
                    </div>
                    {(content.liveDosaCatering?.menuColumn1 || []).map((item: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => {
                            const updated = [...content.liveDosaCatering.menuColumn1];
                            updated[idx] = e.target.value;
                            setContent({
                              ...content,
                              liveDosaCatering: { ...content.liveDosaCatering, menuColumn1: updated },
                            });
                          }}
                          className="w-full px-3 py-1 rounded-lg border border-slate-200 text-xs bg-white text-slate-900"
                        />
                        <button
                          type="button"
                          onClick={() => handleDeleteItem('liveDosaCatering.menuColumn1', idx)}
                          className="text-slate-400 hover:text-red-600 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold text-slate-800">Menu Column 2 (Sides, Chutneys & Drinks)</span>
                      <button
                        type="button"
                        onClick={() => handleAddItem('liveDosaCatering.menuColumn2', 'New Accompaniment Item')}
                        className="text-orange-600 hover:underline text-xs font-semibold flex items-center gap-1"
                      >
                        <Plus className="w-3 h-3" /> Add Item
                      </button>
                    </div>
                    {(content.liveDosaCatering?.menuColumn2 || []).map((item: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => {
                            const updated = [...content.liveDosaCatering.menuColumn2];
                            updated[idx] = e.target.value;
                            setContent({
                              ...content,
                              liveDosaCatering: { ...content.liveDosaCatering, menuColumn2: updated },
                            });
                          }}
                          className="w-full px-3 py-1 rounded-lg border border-slate-200 text-xs bg-white text-slate-900"
                        />
                        <button
                          type="button"
                          onClick={() => handleDeleteItem('liveDosaCatering.menuColumn2', idx)}
                          className="text-slate-400 hover:text-red-600 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Add-ons Stations & Pricing */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">4. Live Add-on Stations & Extras</h3>
                    <p className="text-[11px] text-slate-500">Add-on dishes charged separately per person (Poori Bhaji, Chaats, Sweets).</p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      handleAddItem('liveDosaCatering.addons', {
                        item: 'New Add-on Special',
                        price: '£2.50',
                      })
                    }
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs py-1.5 px-3 rounded-lg font-semibold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Extra Item
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {(content.liveDosaCatering?.addons || []).map((addon: any, idx: number) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[11px] font-bold text-slate-600">Extra #{idx + 1}</span>
                        <button
                          type="button"
                          onClick={() => handleDeleteItem('liveDosaCatering.addons', idx)}
                          className="text-slate-400 hover:text-red-600 p-1"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                      <input
                        type="text"
                        value={typeof addon === 'string' ? addon : addon.item || ''}
                        onChange={(e) => {
                          const updated = [...content.liveDosaCatering.addons];
                          if (typeof updated[idx] === 'string') {
                            updated[idx] = { item: e.target.value, price: '' };
                          } else {
                            updated[idx].item = e.target.value;
                          }
                          setContent({
                            ...content,
                            liveDosaCatering: { ...content.liveDosaCatering, addons: updated },
                          });
                        }}
                        className="w-full px-2.5 py-1 rounded border border-slate-200 text-xs bg-white text-slate-900"
                        placeholder="Add-on Item Name"
                      />
                      <input
                        type="text"
                        value={typeof addon === 'object' ? addon.price || '' : ''}
                        onChange={(e) => {
                          const updated = [...content.liveDosaCatering.addons];
                          if (typeof updated[idx] === 'string') {
                            updated[idx] = { item: updated[idx], price: e.target.value };
                          } else {
                            updated[idx].price = e.target.value;
                          }
                          setContent({
                            ...content,
                            liveDosaCatering: { ...content.liveDosaCatering, addons: updated },
                          });
                        }}
                        className="w-full px-2.5 py-1 rounded border border-slate-200 text-xs font-semibold text-orange-600 bg-white"
                        placeholder="Price (e.g. £2.00)"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Chef Inclusions */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">5. Catering Inclusions & Chef Notes</h3>
                    <p className="text-[11px] text-slate-500">Service inclusions, equipment, griddles, and staff policies.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleAddItem('liveDosaCatering.inclusions', 'New inclusion item...')}
                    className="text-orange-600 hover:underline text-xs font-semibold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Inclusion
                  </button>
                </div>
                <div className="space-y-2">
                  {(content.liveDosaCatering?.inclusions || []).map((inc: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={inc}
                        onChange={(e) => {
                          const updated = [...content.liveDosaCatering.inclusions];
                          updated[idx] = e.target.value;
                          setContent({
                            ...content,
                            liveDosaCatering: { ...content.liveDosaCatering, inclusions: updated },
                          });
                        }}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white text-slate-900"
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteItem('liveDosaCatering.inclusions', idx)}
                        className="text-slate-400 hover:text-red-600 p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: WHY CHOOSE US */}
          {activeTab === 'whyChooseUs' && (
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="font-bold text-base text-slate-900">Why Choose Us (4 Value Proposition Cards)</h2>
                <p className="text-xs text-slate-500 mt-0.5">Edit trust elements, stone-ground certification, and descriptions.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(content.whyChooseUs || []).map((card: any, idx: number) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                    <label className="block text-[11px] font-semibold text-slate-600">Card #{idx + 1} Title</label>
                    <input
                      type="text"
                      value={card.title || ''}
                      onChange={(e) => {
                        const updated = [...content.whyChooseUs];
                        updated[idx].title = e.target.value;
                        setContent({ ...content, whyChooseUs: updated });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold bg-white text-slate-900"
                    />
                    <label className="block text-[11px] font-semibold text-slate-600">Description</label>
                    <textarea
                      rows={2}
                      value={card.desc || ''}
                      onChange={(e) => {
                        const updated = [...content.whyChooseUs];
                        updated[idx].desc = e.target.value;
                        setContent({ ...content, whyChooseUs: updated });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white text-slate-900 leading-relaxed"
                    />
                    <ImageUploadField
                      label="Card Custom Icon / Image"
                      value={card.icon || ''}
                      onChange={(url) => {
                        const updated = [...content.whyChooseUs];
                        updated[idx].icon = url;
                        setContent({ ...content, whyChooseUs: updated });
                      }}
                      recommendation="Icon file or uploaded PNG / SVG badge"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 9: FAQ MANAGER */}
          {activeTab === 'faqs' && (
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <div>
                  <h2 className="font-bold text-base text-slate-900">FAQ Manager (Google Rich Snippets)</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Questions added here automatically generate Schema.org FAQPage rich snippets.</p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    handleAddItem('faqs', {
                      q: 'New FAQ Question?',
                      a: 'Answer to question...',
                    })
                  }
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs py-1.5 px-3 rounded-lg font-semibold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Question
                </button>
              </div>

              <div className="space-y-4">
                {(content.faqs || []).map((faq: any, idx: number) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-orange-700">Question #{idx + 1}</span>
                      <button
                        type="button"
                        onClick={() => handleDeleteItem('faqs', idx)}
                        className="text-slate-400 hover:text-red-600 p-1 rounded"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={faq.q || ''}
                      onChange={(e) => {
                        const updated = [...content.faqs];
                        updated[idx].q = e.target.value;
                        setContent({ ...content, faqs: updated });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold bg-white text-slate-900"
                      placeholder="Question?"
                    />
                    <textarea
                      rows={2}
                      value={faq.a || ''}
                      onChange={(e) => {
                        const updated = [...content.faqs];
                        updated[idx].a = e.target.value;
                        setContent({ ...content, faqs: updated });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white text-slate-900 leading-relaxed"
                      placeholder="Answer..."
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 10: REVIEWS & TESTIMONIALS */}
          {activeTab === 'reviews' && (
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <div>
                  <h2 className="font-bold text-base text-slate-900">Customer Testimonials & Ratings</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Used for trust badges and Google AggregateRating schema snippets.</p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    handleAddItem('reviews', {
                      name: 'Customer Name',
                      source: 'Google Review • London',
                      stars: 5,
                      comment: 'Amazing pure vegetarian experience!',
                      date: new Date().toISOString().split('T')[0],
                    })
                  }
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs py-1.5 px-3 rounded-lg font-semibold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Review
                </button>
              </div>

              <div className="space-y-4">
                {(content.reviews || []).map((rev: any, idx: number) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-800">Review #{idx + 1}</span>
                      <button
                        type="button"
                        onClick={() => handleDeleteItem('reviews', idx)}
                        className="text-slate-400 hover:text-red-600 p-1 rounded"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <input
                        type="text"
                        value={rev.name || ''}
                        onChange={(e) => {
                          const updated = [...content.reviews];
                          updated[idx].name = e.target.value;
                          setContent({ ...content, reviews: updated });
                        }}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white font-bold text-slate-900"
                        placeholder="Author"
                      />
                      <input
                        type="text"
                        value={rev.source || ''}
                        onChange={(e) => {
                          const updated = [...content.reviews];
                          updated[idx].source = e.target.value;
                          setContent({ ...content, reviews: updated });
                        }}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white text-slate-800"
                        placeholder="Source"
                      />
                      <input
                        type="number"
                        min="1"
                        max="5"
                        value={rev.stars || 5}
                        onChange={(e) => {
                          const updated = [...content.reviews];
                          updated[idx].stars = parseInt(e.target.value);
                          setContent({ ...content, reviews: updated });
                        }}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white font-bold text-amber-500"
                      />
                    </div>

                    <textarea
                      rows={2}
                      value={rev.comment || ''}
                      onChange={(e) => {
                        const updated = [...content.reviews];
                        updated[idx].comment = e.target.value;
                        setContent({ ...content, reviews: updated });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white text-slate-900 leading-relaxed"
                      placeholder="Comment text..."
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 11: HEADER & FOOTER */}
          {activeTab === 'headerFooter' && (
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="font-bold text-base text-slate-900">Header & Footer Global Settings</h2>
                <p className="text-xs text-slate-500 mt-0.5">Top announcement notification bar, emergency telephone, and copyright notice.</p>
              </div>

              <div className="space-y-4">
                <ImageUploadField
                  label="Header Brand Logo Image"
                  value={content.headerFooter?.logo || '/images/migrated/WhatsApp_Image_2026-09-10_at_22.32.49-removebg-preview-e1789186834297.png'}
                  onChange={(url) =>
                    setContent({
                      ...content,
                      headerFooter: { ...content.headerFooter, logo: url },
                    })
                  }
                  recommendation="Recommended: Transparent PNG (420x87px)"
                />

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Top Announcement Bar Text</label>
                  <input
                    type="text"
                    value={content.headerFooter?.announcementText || ''}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        headerFooter: { ...content.headerFooter, announcementText: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Announcement Phone</label>
                    <input
                      type="text"
                      value={content.headerFooter?.announcementPhone || ''}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          headerFooter: { ...content.headerFooter, announcementPhone: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Announcement Opening Hours</label>
                    <input
                      type="text"
                      value={content.headerFooter?.announcementHours || ''}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          headerFooter: { ...content.headerFooter, announcementHours: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Footer Copyright Notice</label>
                  <input
                    type="text"
                    value={content.headerFooter?.copyrightText || ''}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        headerFooter: { ...content.headerFooter, copyrightText: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Allergen & Cross-Contamination Disclaimer</label>
                  <textarea
                    rows={2}
                    value={content.headerFooter?.disclaimerNotice || ''}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        headerFooter: { ...content.headerFooter, disclaimerNotice: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs leading-relaxed text-slate-900"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 12: FORMS & WEB3FORMS */}
          {activeTab === 'forms' && (
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="font-bold text-base text-slate-900">Form Handlers & Lead Processing</h2>
                <p className="text-xs text-slate-500 mt-0.5">Dual-dispatch routing to Web3Forms and Firestore database archive.</p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 space-y-1">
                  <span className="font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-700" /> Serverless Dual-Dispatch Active
                  </span>
                  <p>
                    All inquiries submitted from the Contact and Catering forms are simultaneously emailed via Web3Forms API and permanently logged into the Firestore database collection (`/enquiries`).
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Inquiry Recipient Email</label>
                  <input
                    type="email"
                    value={content.web3forms?.email || ''}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        web3forms: { ...content.web3forms, email: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Web3Forms Access Key</label>
                  <input
                    type="text"
                    value={content.web3forms?.accessKey || ''}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        web3forms: { ...content.web3forms, accessKey: e.target.value },
                      })
                    }
                    placeholder="Enter key or leave blank to rely on server process.env"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono text-slate-900"
                  />
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    Free keys can be generated instantly at <a href="https://web3forms.com" target="_blank" className="text-orange-600 underline">web3forms.com</a>
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 13: DELIVERY PLATFORMS */}
          {activeTab === 'delivery' && (
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="font-bold text-base text-slate-900">Delivery & Ordering Platform Links</h2>
                <p className="text-xs text-slate-500 mt-0.5">Manage external partner buttons on branch pages and header.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Uber Eats Store Link</label>
                  <input
                    type="text"
                    value={content.delivery?.uberEats || ''}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        delivery: { ...content.delivery, uberEats: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Deliveroo Store Link</label>
                  <input
                    type="text"
                    value={content.delivery?.deliveroo || ''}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        delivery: { ...content.delivery, deliveroo: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Just Eat Store Link</label>
                  <input
                    type="text"
                    value={content.delivery?.justEat || ''}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        delivery: { ...content.delivery, justEat: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 font-mono"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 14: LEGAL & POLICIES */}
          {activeTab === 'policies' && (
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="font-bold text-base text-slate-900">Legal Compliance & GDPR Policies</h2>
                <p className="text-xs text-slate-500 mt-0.5">Edit in-browser policies rendered on legal routes.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Privacy Policy (UK GDPR)</label>
                  <textarea
                    rows={4}
                    value={content.policies?.privacyPolicy || ''}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        policies: { ...content.policies, privacyPolicy: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs leading-relaxed text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Terms & Conditions & Allergen Disclaimer</label>
                  <textarea
                    rows={4}
                    value={content.policies?.termsAndDisclaimer || ''}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        policies: { ...content.policies, termsAndDisclaimer: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs leading-relaxed text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Cookie Policy (UK)</label>
                  <textarea
                    rows={3}
                    value={content.policies?.cookiePolicy || ''}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        policies: { ...content.policies, cookiePolicy: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs leading-relaxed text-slate-900"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 15: ENTERPRISE SEO SUITE */}
          {activeTab === 'seo' && (
            <SeoManagement content={content} setContent={setContent} />
          )}
        </main>
      </div>
    </div>
  );
}
