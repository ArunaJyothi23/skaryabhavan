import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_URL } from '@/lib/seoService';
import { getSiteContent } from '@/lib/firebaseService';
import { Utensils, Award, Sparkles, MapPin, Phone, ArrowRight, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const routes = new Set<string>();

  // 1. Pages from legacy extracted_pages
  const extractedDir = path.join(process.cwd(), 'extracted_pages');
  if (fs.existsSync(extractedDir)) {
    try {
      const files = fs.readdirSync(extractedDir);
      files.forEach((f) => {
        if (f.endsWith('.json')) routes.add(f.replace('.json', ''));
      });
    } catch {}
  }

  // 2. Custom pages configured in Admin CMS (site_content.json / Firestore)
  try {
    const siteContent = await getSiteContent();
    if (siteContent?.pagesSeo) {
      Object.keys(siteContent.pagesSeo).forEach((r) => {
        const clean = r.replace(/^\//, '');
        if (clean && !clean.includes('/')) routes.add(clean);
      });
    }
  } catch {}

  return Array.from(routes).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const siteContent = await getSiteContent();
  const routeKey = `/${slug}`;
  const seoConfig = siteContent?.pagesSeo?.[routeKey];

  // 1. Check if SEO exists in Admin CMS
  if (seoConfig) {
    const title = seoConfig.title || `${slug.replace(/-/g, ' ')} | Arya Bhavan London`;
    const description = seoConfig.description || `Experience authentic South Indian vegetarian dining and catering with Arya Bhavan London.`;
    const ogImage = seoConfig.ogImage || siteContent?.seo?.defaultOgImage || '/images/migrated/NKAryaBhavan-Central-London-1.jpeg';
    const fullOgImg = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

    return {
      title,
      description,
      alternates: {
        canonical: seoConfig.canonical || `${SITE_URL}/${slug}`,
      },
      openGraph: {
        title: seoConfig.ogTitle || title,
        description: seoConfig.ogDescription || description,
        url: `${SITE_URL}/${slug}`,
        siteName: siteContent?.general?.siteName || 'Arya Bhavan London',
        images: [
          {
            url: fullOgImg,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
        locale: 'en_GB',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: seoConfig.ogTitle || title,
        description: seoConfig.ogDescription || description,
        images: [fullOgImg],
      },
      robots: {
        index: seoConfig.robotsIndex !== false,
        follow: seoConfig.robotsFollow !== false,
      },
    };
  }

  // 2. Fallback to extracted_pages
  const pageFile = path.join(process.cwd(), 'extracted_pages', `${slug}.json`);
  if (fs.existsSync(pageFile)) {
    try {
      const page = JSON.parse(fs.readFileSync(pageFile, 'utf8'));
      const title = page.seo?.title || page.title || `${slug.replace(/-/g, ' ')} | Arya Bhavan London`;
      const description = page.seo?.description || `Explore ${title} at Arya Bhavan UK. Pure vegetarian South Indian restaurant.`;
      return {
        title: `${title} | Arya Bhavan London`,
        description,
        alternates: {
          canonical: `${SITE_URL}/${slug}`,
        },
      };
    } catch {}
  }

  return { title: 'Page Not Found | Arya Bhavan London' };
}

export default async function DynamicSlugPage({ params }: Props) {
  const { slug } = await params;
  const siteContent = await getSiteContent();
  const routeKey = `/${slug}`;
  const seoConfig = siteContent?.pagesSeo?.[routeKey];
  const pageFile = path.join(process.cwd(), 'extracted_pages', `${slug}.json`);

  let extractedPage: any = null;
  if (fs.existsSync(pageFile)) {
    try {
      extractedPage = JSON.parse(fs.readFileSync(pageFile, 'utf8'));
    } catch {}
  }

  // If neither extracted page nor admin SEO configuration exists, return 404
  if (!extractedPage && !seoConfig) {
    notFound();
  }

  const rawTitle = seoConfig?.title || extractedPage?.title || slug.replace(/-/g, ' ');
  const cleanTitle = rawTitle.replace(/\s*\|.*$/, '');
  const description = seoConfig?.description || extractedPage?.seo?.description || `Welcome to Arya Bhavan London. We offer 100% pure South Indian vegetarian cuisine across London.`;
  const heroImage = seoConfig?.ogImage || siteContent?.seo?.defaultOgImage || '/images/migrated/NKAryaBhavan-Central-London-1.jpeg';

  // Clean raw Elementor markup if extracted page
  const cleanContent = extractedPage?.content
    ? extractedPage.content
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    : '';

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: cleanTitle,
        item: `${SITE_URL}/${slug}`,
      },
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: cleanTitle,
    description: description,
    url: `${SITE_URL}/${slug}`,
    isPartOf: {
      '@type': 'Restaurant',
      name: 'Arya Bhavan London',
      servesCuisine: 'South Indian Vegetarian',
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <main className="min-h-screen bg-[#faf8f5]">
        {/* Breadcrumb Header Bar */}
        <section className="bg-white border-b border-stone-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center space-x-2 text-xs sm:text-sm text-stone-500 font-medium">
            <Link href="/" className="hover:text-amber-800 transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-amber-900 font-semibold truncate capitalize">{cleanTitle}</span>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-white py-16 sm:py-20">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]" />
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider uppercase border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Arya Bhavan Official Page</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white capitalize leading-tight">
              {cleanTitle}
            </h1>

            <p className="max-w-3xl mx-auto text-base sm:text-lg text-stone-300 leading-relaxed font-sans">
              {description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-950/30 transition transform hover:-translate-y-0.5"
              >
                <Utensils className="w-4 h-4" />
                Explore Our Menu
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-800/80 hover:bg-stone-700 text-stone-200 hover:text-white font-semibold text-sm border border-stone-600 transition"
              >
                <Phone className="w-4 h-4" />
                Contact & Reservations
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="bg-white rounded-3xl border border-stone-200/80 shadow-sm p-6 sm:p-12 space-y-10">
            {/* Featured Image if available */}
            {heroImage && (
              <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden border border-stone-100 shadow-inner bg-stone-100">
                <Image
                  src={heroImage}
                  alt={cleanTitle}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            )}

            {/* Legacy Extracted Content if available */}
            {cleanContent ? (
              <div
                className="prose prose-orange max-w-none text-stone-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: cleanContent }}
              />
            ) : (
              /* High-Quality Dynamic Presentation if newly created Admin route */
              <div className="space-y-8">
                <div className="p-6 bg-gradient-to-br from-amber-50/60 to-orange-50/40 rounded-2xl border border-amber-200/60">
                  <h2 className="text-xl font-bold text-stone-900 mb-2 font-serif flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-700" />
                    Authentic South Indian Vegetarian Heritage
                  </h2>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    Arya Bhavan brings genuine South Indian culinary craftsmanship to London. Prepared using fresh stone-ground batters, organic lentils, and aromatic spices imported directly from Tamil Nadu and Karnataka, every recipe adheres to strictly pure vegetarian and vegan principles.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/50 space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-green-100 text-green-700 flex items-center justify-center font-bold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-stone-900 text-sm">100% Pure Vegetarian</h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Zero cross-contamination. Jain, vegan, and gluten-sensitive options clearly marked.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/50 space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-stone-900 text-sm">3 Prime London Locations</h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Visit us at Central London (Covent Garden/Leicester Square), Wembley, or Tooting.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/50 space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center font-bold">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-stone-900 text-sm">Outdoor & Live Catering</h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Full-scale wedding and live dosa station catering for 30 to 1,500+ guests.
                    </p>
                  </div>
                </div>

                {/* Keywords list */}
                {seoConfig?.keywords && (
                  <div className="pt-4 border-t border-stone-100">
                    <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-2">
                      Related Topics & Tags
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {seoConfig.keywords.split(',').map((kw: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-medium border border-stone-200/70"
                        >
                          {kw.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Quick Action Bar */}
            <div className="mt-8 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-stone-900 text-sm">Have special requests or questions?</h4>
                <p className="text-xs text-stone-500">Our customer team is available 7 days a week to assist you.</p>
              </div>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition"
              >
                <span>Contact Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

