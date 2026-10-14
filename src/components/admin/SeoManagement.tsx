'use client';

import React, { useState, useMemo } from 'react';
import {
  Globe,
  Search,
  Share2,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Upload,
  ArrowRight,
  Plus,
  Trash2,
  Smartphone,
  Monitor,
  Code,
  FileText,
  Sparkles,
  Layers,
  Settings,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  Sliders,
  Check,
  Copy,
  Info,
} from 'lucide-react';
import { calculateSeoAudit, defaultPageSeo, SeoConfig, SITE_URL } from '@/lib/seoService';
import ImageUploadField from '@/components/admin/ImageUploadField';

interface SeoManagementProps {
  content: any;
  setContent: React.Dispatch<React.SetStateAction<any>>;
}

const PRESET_ROUTES = [
  { path: '/', label: 'Home Page', category: 'Core' },
  { path: '/menu', label: 'Menu (200+ Dishes)', category: 'Core' },
  { path: '/central-london', label: 'Central London Branch', category: 'Locations' },
  { path: '/wembley', label: 'Wembley Central Branch', category: 'Locations' },
  { path: '/tooting', label: 'Tooting Branch', category: 'Locations' },
  { path: '/outdoor-catering', label: 'Outdoor Catering', category: 'Catering' },
  { path: '/live-dosa-catering', label: 'Live Dosa Station', category: 'Catering' },
  { path: '/branches', label: 'All UK & EU Branches', category: 'Locations' },
  { path: '/franchise', label: 'Franchise Partnering', category: 'Company' },
  { path: '/about-us', label: 'About Us & Heritage', category: 'Company' },
  { path: '/contact-us', label: 'Contact Us & Booking', category: 'Company' },
  { path: '/privacy-policy', label: 'Privacy Policy (UK GDPR)', category: 'Legal' },
  { path: '/terms-and-disclaimer', label: 'Terms & Allergen Disclaimer', category: 'Legal' },
  { path: '/cookie-policy-uk', label: 'Cookie Policy (UK)', category: 'Legal' },
];

const SUGGESTED_KEYWORDS = [
  'South Indian vegetarian London',
  'Authentic crispy dosa near me',
  '100% pure veg restaurant London',
  'Leicester Square vegetarian dining',
  'Wembley Indian pure veg restaurant',
  'Tooting South Indian thali',
  'Live dosa catering London',
  'Indian outdoor wedding catering UK',
  'Vegan & Jain food restaurant London',
];

export default function SeoManagement({ content, setContent }: SeoManagementProps) {
  const [selectedRoute, setSelectedRoute] = useState<string>('/');
  const [serpView, setSerpView] = useState<'desktop' | 'mobile'>('desktop');
  const [socialView, setSocialView] = useState<'facebook' | 'twitter'>('facebook');
  const [activeSubTab, setActiveSubTab] = useState<'editor' | 'audit' | 'schema' | 'redirects' | 'global'>('editor');
  const [uploading, setUploading] = useState(false);
  const [routeSearch, setRouteSearch] = useState('');
  const [customRouteInput, setCustomRouteInput] = useState('');
  const [newRedirectSource, setNewRedirectSource] = useState('');
  const [newRedirectDest, setNewRedirectDest] = useState('');
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [socialCardImgError, setSocialCardImgError] = useState(false);

  // Dynamic Routes Aggregation (Preset + Custom from content.pagesSeo)
  const allRoutes = useMemo(() => {
    const map = new Map<string, { path: string; label: string; category: string; isCustom?: boolean }>();
    PRESET_ROUTES.forEach((r) => map.set(r.path, r));

    if (content.pagesSeo) {
      Object.keys(content.pagesSeo).forEach((path) => {
        if (!map.has(path)) {
          const cleanLabel = path
            .replace(/^\//, '')
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase()) || 'Custom Page';
          map.set(path, {
            path,
            label: cleanLabel,
            category: 'Custom',
            isCustom: true,
          });
        }
      });
    }
    return Array.from(map.values());
  }, [content.pagesSeo]);

  // Current page SEO object with 100% resilient fallbacks
  const pagesSeo = content.pagesSeo || {};
  const defaultFallbackImg = content.seo?.defaultOgImage || '/images/migrated/NKAryaBhavan-Central-London-1.jpeg';
  const baselineSeo = defaultPageSeo[selectedRoute];
  const rawPageSeo = pagesSeo[selectedRoute] || {};

  const currentSeo: SeoConfig = {
    title: rawPageSeo.title !== undefined ? rawPageSeo.title : (baselineSeo?.title || `${content.general?.siteName || 'Arya Bhavan London'} | Authentic South Indian Pure Veg`),
    description: rawPageSeo.description !== undefined ? rawPageSeo.description : (baselineSeo?.description || content.seo?.defaultDescription || 'Welcome to Arya Bhavan London. Authentic South Indian 100% pure vegetarian restaurant.'),
    canonical: rawPageSeo.canonical || baselineSeo?.canonical || `${SITE_URL}${selectedRoute === '/' ? '' : selectedRoute}`,
    ogImage: rawPageSeo.ogImage || baselineSeo?.ogImage || defaultFallbackImg,
    ogTitle: rawPageSeo.ogTitle || baselineSeo?.ogTitle || rawPageSeo.title || '',
    ogDescription: rawPageSeo.ogDescription || baselineSeo?.ogDescription || rawPageSeo.description || '',
    keywords: rawPageSeo.keywords !== undefined ? rawPageSeo.keywords : (baselineSeo?.keywords || content.seo?.keywords || 'South Indian vegetarian London, pure veg restaurant, dosa near me'),
    robotsIndex: rawPageSeo.robotsIndex !== undefined ? rawPageSeo.robotsIndex : (baselineSeo?.robotsIndex !== undefined ? baselineSeo.robotsIndex : true),
    robotsFollow: rawPageSeo.robotsFollow !== undefined ? rawPageSeo.robotsFollow : (baselineSeo?.robotsFollow !== undefined ? baselineSeo.robotsFollow : true),
    priority: rawPageSeo.priority !== undefined ? rawPageSeo.priority : (baselineSeo?.priority !== undefined ? baselineSeo.priority : (selectedRoute === '/' ? 1.0 : 0.8)),
    changeFrequency: rawPageSeo.changeFrequency || baselineSeo?.changeFrequency || (selectedRoute === '/' ? 'daily' : 'weekly'),
  };

  // Run Real-time SEO Diagnostic Audit
  const auditResult = useMemo(() => {
    return calculateSeoAudit(currentSeo, selectedRoute, content.seo);
  }, [currentSeo, selectedRoute, content.seo]);

  // Switch route with image state reset
  const handleSelectRoute = (path: string) => {
    setSelectedRoute(path);
    setSocialCardImgError(false);
  };

  // Update field in current SEO
  const updateCurrentSeo = (field: keyof SeoConfig, value: any) => {
    setContent((prev: any) => ({
      ...prev,
      pagesSeo: {
        ...(prev.pagesSeo || {}),
        [selectedRoute]: {
          ...(prev.pagesSeo?.[selectedRoute] || currentSeo),
          [field]: value,
        },
      },
    }));
  };

  // Upload new OpenGraph image
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success && data.url) {
        setSocialCardImgError(false);
        updateCurrentSeo('ogImage', data.url);
      } else {
        alert(data.error || 'Upload failed');
      }
    } catch {
      alert('Upload failed. Please check network connection.');
    } finally {
      setUploading(false);
    }
  };

  // Add custom route
  const handleAddCustomRoute = () => {
    if (!customRouteInput.trim()) return;
    const cleanRoute = customRouteInput.trim().startsWith('/')
      ? customRouteInput.trim()
      : `/${customRouteInput.trim()}`;

    const cleanLabel = cleanRoute
      .replace(/^\//, '')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase()) || 'New Page';

    if (!pagesSeo[cleanRoute]) {
      setContent((prev: any) => ({
        ...prev,
        pagesSeo: {
          ...(prev.pagesSeo || {}),
          [cleanRoute]: {
            title: `${cleanLabel} | Arya Bhavan London Pure Veg`,
            description: `Explore authentic South Indian vegetarian ${cleanLabel.toLowerCase()} specialties, traditional stone-ground recipes, and dining at Arya Bhavan London.`,
            canonical: `${SITE_URL}${cleanRoute}`,
            ogImage: defaultFallbackImg,
            ogTitle: `${cleanLabel} | Arya Bhavan London`,
            ogDescription: `Authentic South Indian vegetarian ${cleanLabel.toLowerCase()} in London at Arya Bhavan.`,
            keywords: `${cleanLabel.toLowerCase()}, south indian vegetarian london, pure veg restaurant, authentic dosa`,
            robotsIndex: true,
            robotsFollow: true,
            priority: 0.8,
            changeFrequency: 'weekly',
          },
        },
      }));
    }
    handleSelectRoute(cleanRoute);
    setCustomRouteInput('');
  };

  // Delete custom route
  const handleDeleteCustomRoute = (routeToDelete: string) => {
    if (confirm(`Remove custom page route "${routeToDelete}" from SEO suite?`)) {
      setContent((prev: any) => {
        const updated = { ...(prev.pagesSeo || {}) };
        delete updated[routeToDelete];
        return { ...prev, pagesSeo: updated };
      });
      if (selectedRoute === routeToDelete) {
        handleSelectRoute('/');
      }
    }
  };

  // Add redirect
  const handleAddRedirect = () => {
    if (!newRedirectSource.trim() || !newRedirectDest.trim()) return;
    const cleanSource = newRedirectSource.trim().startsWith('/')
      ? newRedirectSource.trim()
      : `/${newRedirectSource.trim()}`;
    const cleanDest = newRedirectDest.trim().startsWith('/')
      ? newRedirectDest.trim()
      : `/${newRedirectDest.trim()}`;

    const newRedirect = {
      source: cleanSource,
      destination: cleanDest,
      permanent: true,
    };

    setContent((prev: any) => ({
      ...prev,
      redirects: [...(prev.redirects || []), newRedirect],
    }));

    setNewRedirectSource('');
    setNewRedirectDest('');
  };

  // Delete redirect
  const handleDeleteRedirect = (index: number) => {
    setContent((prev: any) => ({
      ...prev,
      redirects: (prev.redirects || []).filter((_: any, i: number) => i !== index),
    }));
  };

  // Character lengths
  const titleLength = (currentSeo.title || '').length;
  const descLength = (currentSeo.description || '').length;

  const filteredRoutes = allRoutes.filter(
    (r) =>
      r.path.toLowerCase().includes(routeSearch.toLowerCase()) ||
      r.label.toLowerCase().includes(routeSearch.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-6xl">
      {/* 1. Header Overview & Live Audit Score Gauge */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 sm:p-7 text-white shadow-xl border border-slate-700/60 relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-orange-500/15 border border-orange-500/30 text-[11px] font-semibold text-orange-400 uppercase tracking-wider font-mono">
              <Globe className="w-3.5 h-3.5 text-orange-400" /> Enterprise Dynamic SEO Engine v2.0
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Search Engine & Metadata Management
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Real-time Google SERP simulation, rich Schema.org structured data, OpenGraph social cards, and live algorithm audit diagnostic score.
            </p>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] text-slate-300">
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60 font-semibold text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> {allRoutes.length} Routes Configured
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60">
                <Smartphone className="w-3.5 h-3.5 text-blue-400" /> Mobile First Responsive
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60">
                <Code className="w-3.5 h-3.5 text-amber-400" /> Rich JSON-LD Active
              </span>
            </div>
          </div>

          {/* Live SEO Score Gauge Card */}
          <div className="flex items-center gap-5 bg-slate-950/70 backdrop-blur-md px-6 py-4 rounded-xl border border-slate-700/80 shrink-0 shadow-lg">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-800"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className={
                    auditResult.score >= 90
                      ? 'text-emerald-400'
                      : auditResult.score >= 75
                      ? 'text-amber-400'
                      : 'text-orange-400'
                  }
                  strokeDasharray={`${auditResult.score}, 100`}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute text-center">
                <span className="text-lg font-bold text-white tracking-tight">{auditResult.score}</span>
                <span className="text-[10px] block text-slate-400 -mt-1 font-mono">%</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">SEO Health</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-md font-bold ${
                    auditResult.grade.startsWith('A')
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : auditResult.grade === 'B'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                  }`}
                >
                  Grade {auditResult.grade}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">
                {auditResult.passCount} Passed • {auditResult.warnCount} Warnings • {auditResult.failCount} Issues
              </p>
              <span className="text-[10px] text-slate-500 block truncate max-w-[180px]">
                Target: {selectedRoute}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Route Selector Card */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-orange-600" /> Select Webpage Route to Manage
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Select any site route below to preview and customize its SEO metadata, social share cards, and sitemap settings.
            </p>
          </div>

          {/* Route search & custom route add */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
              <input
                type="text"
                placeholder="Filter routes..."
                value={routeSearch}
                onChange={(e) => setRouteSearch(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-orange-500 w-36 sm:w-44 bg-slate-50 focus:bg-white transition-all"
              />
            </div>
            <input
              type="text"
              placeholder="/new-page"
              value={customRouteInput}
              onChange={(e) => setCustomRouteInput(e.target.value)}
              className="px-2.5 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-orange-500 w-28 bg-slate-50 focus:bg-white"
            />
            <button
              onClick={handleAddCustomRoute}
              className="bg-slate-900 hover:bg-slate-800 text-white text-xs py-1.5 px-3 rounded-xl font-medium flex items-center gap-1 transition-colors shrink-0"
            >
              <Plus className="w-3.5 h-3.5" /> Add
            </button>
          </div>
        </div>

        {/* Route Pills Grid */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 max-h-36 overflow-y-auto">
          {filteredRoutes.map((r) => {
            const isSelected = selectedRoute === r.path;
            const hasCustom = Boolean(pagesSeo[r.path]);
            return (
              <div
                key={r.path}
                className={`text-xs px-2.5 py-1.5 rounded-lg font-medium transition-all duration-150 flex items-center gap-1.5 border cursor-pointer ${
                  isSelected
                    ? 'bg-orange-600 text-white border-orange-600 shadow-sm font-semibold'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80'
                }`}
                onClick={() => handleSelectRoute(r.path)}
              >
                <span className="font-mono text-[11px]">{r.path}</span>
                <span className={`text-[10px] ${isSelected ? 'text-orange-100' : 'text-slate-400'}`}>
                  ({r.label.split(' ')[0]})
                </span>
                {hasCustom && (
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-amber-300' : 'bg-orange-500'}`}
                    title="Has custom overrides"
                  />
                )}
                {r.isCustom && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteCustomRoute(r.path);
                    }}
                    className={`ml-1 px-1 rounded text-xs leading-none hover:bg-black/20 ${
                      isSelected ? 'text-white' : 'text-slate-400 hover:text-red-600'
                    }`}
                    title="Delete custom page route"
                  >
                    ✕
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Sub-tabs Segmented Controller */}
      <div className="bg-slate-200/60 p-1.5 rounded-xl inline-flex flex-wrap gap-1 border border-slate-200">
        <button
          onClick={() => setActiveSubTab('editor')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-2 transition-all ${
            activeSubTab === 'editor'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <FileText className="w-3.5 h-3.5 text-orange-600" /> Metadata & SERP Editor
        </button>
        <button
          onClick={() => setActiveSubTab('audit')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-2 transition-all ${
            activeSubTab === 'audit'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Diagnostic Audit Breakdown
          <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-100 text-slate-700 font-mono font-bold">
            {auditResult.score}%
          </span>
        </button>
        <button
          onClick={() => setActiveSubTab('schema')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-2 transition-all ${
            activeSubTab === 'schema'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Code className="w-3.5 h-3.5 text-blue-600" /> Rich Schemas (JSON-LD)
        </button>
        <button
          onClick={() => setActiveSubTab('redirects')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-2 transition-all ${
            activeSubTab === 'redirects'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <RefreshCw className="w-3.5 h-3.5 text-emerald-600" /> 301 Redirects
        </button>
        <button
          onClick={() => setActiveSubTab('global')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-2 transition-all ${
            activeSubTab === 'global'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Settings className="w-3.5 h-3.5 text-slate-600" /> Global Defaults
        </button>
      </div>

      {/* 4. Tab 1: Metadata & SERP Editor */}
      {activeSubTab === 'editor' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left Column: Form Controls */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-5">
            <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Target URL</span>
                <h3 className="font-bold text-sm text-slate-900 font-mono">
                  {selectedRoute}
                </h3>
              </div>
              <a
                href={`${SITE_URL}${selectedRoute === '/' ? '' : selectedRoute}`}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-medium text-orange-600 hover:underline flex items-center gap-1"
              >
                Open Page <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Page Title */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <label className="font-semibold text-slate-800">
                  SEO Meta Title <span className="text-red-500">*</span>
                </label>
                <span
                  className={`font-mono text-[11px] font-bold ${
                    titleLength >= 40 && titleLength <= 60
                      ? 'text-emerald-600'
                      : titleLength > 60
                      ? 'text-rose-600'
                      : 'text-amber-600'
                  }`}
                >
                  {titleLength} / 60 chars ({titleLength >= 40 && titleLength <= 60 ? 'Optimal' : titleLength < 40 ? 'Short' : 'Truncated'})
                </span>
              </div>
              <input
                type="text"
                value={currentSeo.title}
                onChange={(e) => updateCurrentSeo('title', e.target.value)}
                placeholder="Page Title | Brand Name"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all font-medium"
              />
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    titleLength >= 40 && titleLength <= 60
                      ? 'bg-emerald-500'
                      : titleLength > 60
                      ? 'bg-rose-500'
                      : 'bg-amber-400'
                  }`}
                  style={{ width: `${Math.min(100, (titleLength / 60) * 100)}%` }}
                />
              </div>
            </div>

            {/* Meta Description */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <label className="font-semibold text-slate-800">
                  Meta Description <span className="text-red-500">*</span>
                </label>
                <span
                  className={`font-mono text-[11px] font-bold ${
                    descLength >= 120 && descLength <= 160
                      ? 'text-emerald-600'
                      : descLength > 160
                      ? 'text-rose-600'
                      : 'text-amber-600'
                  }`}
                >
                  {descLength} / 160 chars ({descLength >= 120 && descLength <= 160 ? 'Optimal' : descLength < 120 ? 'Short' : 'Truncated'})
                </span>
              </div>
              <textarea
                rows={3}
                value={currentSeo.description}
                onChange={(e) => updateCurrentSeo('description', e.target.value)}
                placeholder="Write a compelling summary with pure veg specialties, location, and call to action..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all leading-relaxed"
              />
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    descLength >= 120 && descLength <= 160
                      ? 'bg-emerald-500'
                      : descLength > 160
                      ? 'bg-rose-500'
                      : 'bg-amber-400'
                  }`}
                  style={{ width: `${Math.min(100, (descLength / 160) * 100)}%` }}
                />
              </div>
            </div>

            {/* Target Keywords */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-800">Target Keywords (Comma Separated)</label>
              <input
                type="text"
                value={currentSeo.keywords || ''}
                onChange={(e) => updateCurrentSeo('keywords', e.target.value)}
                placeholder="dosa london, vegetarian restaurant, pure veg caterers"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-orange-500"
              />
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTED_KEYWORDS.slice(0, 4).map((kw) => (
                  <button
                    key={kw}
                    type="button"
                    onClick={() => {
                      const existing = currentSeo.keywords || '';
                      if (!existing.includes(kw)) {
                        updateCurrentSeo('keywords', existing ? `${existing}, ${kw}` : kw);
                      }
                    }}
                    className="text-[10px] bg-slate-100 hover:bg-orange-50 hover:text-orange-700 text-slate-600 px-2 py-0.5 rounded-md font-medium border border-slate-200/60 transition-colors"
                  >
                    + {kw}
                  </button>
                ))}
              </div>
            </div>

            {/* Canonical URL */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-800">Canonical Tag URL</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={currentSeo.canonical || ''}
                  onChange={(e) => updateCurrentSeo('canonical', e.target.value)}
                  placeholder="https://skaryabhavan.com/..."
                  className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono text-slate-800"
                />
                <button
                  type="button"
                  onClick={() => updateCurrentSeo('canonical', `${SITE_URL}${selectedRoute === '/' ? '' : selectedRoute}`)}
                  className="px-3 py-2 text-[11px] font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-200 shrink-0 transition-colors"
                >
                  Standardize
                </button>
              </div>
            </div>

            {/* OpenGraph & Social Image Upload */}
            <div className="pt-2 border-t border-slate-100">
              <ImageUploadField
                label="OpenGraph / Social Card Asset URL (1200x630)"
                value={currentSeo.ogImage || ''}
                onChange={(url) => {
                  setSocialCardImgError(false);
                  updateCurrentSeo('ogImage', url);
                }}
                recommendation="1200 × 630 px PNG or WebP"
              />
            </div>

            {/* Robots Indexing Directives */}
            <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-4">
              <label className="flex items-center gap-2 cursor-pointer p-2 rounded-xl hover:bg-slate-50 transition-colors">
                <input
                  type="checkbox"
                  checked={currentSeo.robotsIndex !== false}
                  onChange={(e) => updateCurrentSeo('robotsIndex', e.target.checked)}
                  className="w-4 h-4 rounded text-orange-600 focus:ring-orange-500"
                />
                <span className="text-xs font-semibold text-slate-700">Allow Indexing (index)</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer p-2 rounded-xl hover:bg-slate-50 transition-colors">
                <input
                  type="checkbox"
                  checked={currentSeo.robotsFollow !== false}
                  onChange={(e) => updateCurrentSeo('robotsFollow', e.target.checked)}
                  className="w-4 h-4 rounded text-orange-600 focus:ring-orange-500"
                />
                <span className="text-xs font-semibold text-slate-700">Follow Links (follow)</span>
              </label>
            </div>

            {/* Sitemap Priority & Frequency */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Sitemap Priority: <span className="text-orange-600 font-mono font-bold">{currentSeo.priority ?? 0.8}</span>
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="1.0"
                  step="0.05"
                  value={currentSeo.priority ?? 0.8}
                  onChange={(e) => updateCurrentSeo('priority', parseFloat(e.target.value))}
                  className="w-full accent-orange-600 cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Change Frequency</label>
                <select
                  value={currentSeo.changeFrequency || 'weekly'}
                  onChange={(e) => updateCurrentSeo('changeFrequency', e.target.value)}
                  className="w-full px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white text-slate-800"
                >
                  <option value="always">Always</option>
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Column: True-to-Life Previews (SERP & Social Cards) */}
          <div className="space-y-6">
            {/* Google SERP Preview Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                    G
                  </div>
                  <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">
                    Google Search Result Simulator
                  </h4>
                </div>
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                  <button
                    onClick={() => setSerpView('desktop')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${
                      serpView === 'desktop' ? 'bg-white shadow-xs text-slate-900 font-bold' : 'text-slate-500'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" /> Desktop
                  </button>
                  <button
                    onClick={() => setSerpView('mobile')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${
                      serpView === 'mobile' ? 'bg-white shadow-xs text-slate-900 font-bold' : 'text-slate-500'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" /> Mobile
                  </button>
                </div>
              </div>

              {/* SERP Preview Body */}
              <div
                className={`p-4 rounded-xl bg-white border border-slate-200 font-sans transition-all ${
                  serpView === 'mobile' ? 'max-w-xs mx-auto border-slate-300 shadow-sm' : ''
                }`}
              >
                {/* SERP Top URL Breadcrumbs */}
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-700 shrink-0 font-mono">
                    AB
                  </div>
                  <div className="leading-tight overflow-hidden">
                    <span className="text-[12px] font-medium text-slate-800 block truncate">
                      {content.general?.siteName || 'Arya Bhavan London'}
                    </span>
                    <span className="text-[10px] text-slate-500 block truncate font-mono">
                      https://skaryabhavan.com{selectedRoute === '/' ? '' : selectedRoute}
                    </span>
                  </div>
                </div>

                {/* Clickable Blue Title */}
                <h3 className="text-base sm:text-lg font-medium text-[#1a0dab] hover:underline cursor-pointer leading-snug line-clamp-2">
                  {currentSeo.title || `${content.general?.siteName || 'Arya Bhavan'} | Authentic South Indian Pure Veg`}
                </h3>

                {/* Snippet Description */}
                <p className="text-xs text-[#4d5156] mt-1 leading-relaxed line-clamp-3">
                  {currentSeo.description ||
                    'Welcome to Arya Bhavan London. Authentic South Indian 100% pure vegetarian restaurant in Central London, Wembley & Tooting.'}
                </p>
              </div>

              <p className="text-[11px] text-slate-400 italic text-center">
                Simulated Google Search presentation based on active metadata tags.
              </p>
            </div>

            {/* Social Share Card Preview (Facebook & Twitter) */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-orange-600" />
                  <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">
                    Social Card Share Preview
                  </h4>
                </div>
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                  <button
                    onClick={() => setSocialView('facebook')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                      socialView === 'facebook' ? 'bg-white shadow-xs text-slate-900 font-bold' : 'text-slate-500'
                    }`}
                  >
                    OpenGraph
                  </button>
                  <button
                    onClick={() => setSocialView('twitter')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                      socialView === 'twitter' ? 'bg-white shadow-xs text-slate-900 font-bold' : 'text-slate-500'
                    }`}
                  >
                    Twitter / X
                  </button>
                </div>
              </div>

              {/* Social Card Preview Frame */}
              <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50 max-w-md mx-auto shadow-sm">
                <div className="relative h-44 bg-slate-200 flex items-center justify-center overflow-hidden">
                  {currentSeo.ogImage && !socialCardImgError ? (
                    <img
                      src={currentSeo.ogImage}
                      alt="Social Preview"
                      className="w-full h-full object-cover"
                      onError={() => setSocialCardImgError(true)}
                      onLoad={() => setSocialCardImgError(false)}
                    />
                  ) : (
                    <div className="text-slate-400 text-xs flex flex-col items-center gap-1.5 p-4 text-center">
                      <Share2 className="w-6 h-6 text-orange-500" />
                      <span className="font-semibold text-slate-700">No Image or Invalid Path</span>
                      <span className="text-[10px] text-slate-400">Click &ldquo;Upload File&rdquo; on the left to select an image from your PC</span>
                    </div>
                  )}
                  <span className="absolute bottom-2 right-2 bg-black/75 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded">
                    1200 × 630
                  </span>
                </div>

                <div className="p-3.5 bg-white space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider font-mono">
                    SKARYABHAVAN.COM
                  </span>
                  <h5 className="font-bold text-xs text-slate-900 leading-snug line-clamp-1">
                    {currentSeo.ogTitle || currentSeo.title || 'Arya Bhavan London'}
                  </h5>
                  <p className="text-[11px] text-slate-500 leading-normal line-clamp-2">
                    {currentSeo.ogDescription || currentSeo.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Tab 2: Diagnostic Audit Breakdown */}
      {activeSubTab === 'audit' && (
        <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-bold text-base text-slate-900">
                SEO Audit Diagnostic for: <span className="text-orange-600 font-mono">{selectedRoute}</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">{auditResult.summary}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-600">Audit Grade:</span>
              <span
                className={`text-xs px-3 py-1 rounded-lg font-bold font-mono ${
                  auditResult.grade.startsWith('A')
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                Grade {auditResult.grade} ({auditResult.score}%)
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {auditResult.checks.map((check) => (
              <div
                key={check.id}
                className={`p-4 rounded-xl border transition-all ${
                  check.status === 'pass'
                    ? 'bg-emerald-50/40 border-emerald-200'
                    : check.status === 'warn'
                    ? 'bg-amber-50/40 border-amber-200'
                    : 'bg-rose-50/40 border-rose-200'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      {check.status === 'pass' && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                      {check.status === 'warn' && <AlertTriangle className="w-5 h-5 text-amber-600" />}
                      {check.status === 'fail' && <XCircle className="w-5 h-5 text-rose-600" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-xs text-slate-900">{check.name}</h4>
                        <span
                          className={`text-[9px] uppercase font-bold px-2 py-0.5 rounded-md ${
                            check.status === 'pass'
                              ? 'bg-emerald-100 text-emerald-800'
                              : check.status === 'warn'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-rose-100 text-rose-800'
                          }`}
                        >
                          {check.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 mt-1">{check.message}</p>
                      {check.recommendation && (
                        <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1 font-medium">
                          <ArrowRight className="w-3 h-3 text-orange-600" />
                          Fix: {check.recommendation}
                        </p>
                      )}
                    </div>
                  </div>

                  <span className="font-mono text-xs font-bold text-slate-600 shrink-0">
                    {check.score} / {check.maxScore} pts
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Tab 3: Rich Schemas (JSON-LD) */}
      {activeSubTab === 'schema' && (
        <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-bold text-base text-slate-900">
              Structured Data & Schema.org Rich Snippets
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Google uses these JSON-LD structures to power Knowledge Panels, Google Maps integrations, and rich FAQ snippets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Restaurant Schema Details */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-orange-600" />
                <h4 className="font-bold text-xs text-slate-900">Schema Type: Restaurant (All Branches)</h4>
              </div>
              <p className="text-xs text-slate-600">
                Automatically rendered on all pages with full branch coordinates, opening hours, South Indian vegetarian cuisines, price range (££), and menu links.
              </p>
              <div className="bg-slate-950 text-amber-300 p-3 rounded-lg font-mono text-[10px] overflow-x-auto max-h-48 border border-slate-800">
                <pre>{JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Restaurant",
                  "name": "Arya Bhavan London",
                  "servesCuisine": ["South Indian", "Vegetarian", "Vegan", "Jain"],
                  "priceRange": "££",
                  "menu": `${SITE_URL}/menu`,
                  "branches": ["Central London", "Wembley", "Tooting"]
                }, null, 2)}</pre>
              </div>
            </div>

            {/* FAQPage Schema Details */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-emerald-600" />
                <h4 className="font-bold text-xs text-slate-900">Schema Type: FAQPage</h4>
              </div>
              <p className="text-xs text-slate-600">
                Dynamically generated from the FAQ manager so questions and answers show up as rich expandable accordions directly on Google search results.
              </p>
              <div className="bg-slate-950 text-emerald-300 p-3 rounded-lg font-mono text-[10px] overflow-x-auto max-h-48 border border-slate-800">
                <pre>{JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": (content.faqs || []).slice(0, 2).map((f: any) => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": { "@type": "Answer", "text": f.a }
                  }))
                }, null, 2)}</pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. Tab 4: 301 Permanent Redirects */}
      {activeSubTab === 'redirects' && (
        <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-bold text-base text-slate-900">
              301 Permanent Redirects Engine
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Preserve legacy WordPress Google rankings by redirecting old WordPress URL structures cleanly to Next.js routes.
            </p>
          </div>

          {/* Add New Redirect Row */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Add New 301 Redirect</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                placeholder="Old Source URL (e.g. /wp-menu)"
                value={newRedirectSource}
                onChange={(e) => setNewRedirectSource(e.target.value)}
                className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:border-orange-500"
              />
              <input
                type="text"
                placeholder="New Destination (e.g. /menu)"
                value={newRedirectDest}
                onChange={(e) => setNewRedirectDest(e.target.value)}
                className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:border-orange-500"
              />
              <button
                type="button"
                onClick={handleAddRedirect}
                className="bg-orange-600 hover:bg-orange-700 text-white text-xs py-2 px-4 rounded-xl font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" /> Save 301 Redirect
              </button>
            </div>
          </div>

          {/* Active Redirects Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-semibold uppercase tracking-wider text-[10px] border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3">Legacy WordPress Source</th>
                  <th className="px-4 py-3">Target Next.js Destination</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {(content.redirects || []).map((red: any, idx: number) => (
                  <tr key={idx} className="hover:bg-slate-50/80">
                    <td className="px-4 py-3 font-mono text-orange-700 font-semibold">{red.source}</td>
                    <td className="px-4 py-3 font-mono text-slate-800">{red.destination}</td>
                    <td className="px-4 py-3">
                      <span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full text-[10px]">
                        301 Permanent
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => handleDeleteRedirect(idx)}
                        className="text-slate-400 hover:text-red-600 p-1 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 8. Tab 5: Global Brand Defaults */}
      {activeSubTab === 'global' && (
        <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-bold text-base text-slate-900">
              Global Default SEO Configuration
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Fallback values utilized across dynamic or unconfigured routes.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Official Brand Site Name</label>
              <input
                type="text"
                value={content.seo?.siteName || content.general?.siteName || ''}
                onChange={(e) =>
                  setContent({
                    ...content,
                    seo: { ...content.seo, siteName: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Default Global Page Title</label>
              <input
                type="text"
                value={content.seo?.defaultTitle || ''}
                onChange={(e) =>
                  setContent({
                    ...content,
                    seo: { ...content.seo, defaultTitle: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Default Global Meta Description</label>
              <textarea
                rows={3}
                value={content.seo?.defaultDescription || ''}
                onChange={(e) =>
                  setContent({
                    ...content,
                    seo: { ...content.seo, defaultDescription: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 leading-relaxed"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Production Site URL</label>
                <input
                  type="text"
                  value={content.seo?.siteUrl || SITE_URL}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      seo: { ...content.seo, siteUrl: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Default Fallback OG Image</label>
                <input
                  type="text"
                  value={content.seo?.defaultOgImage || ''}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      seo: { ...content.seo, defaultOgImage: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
