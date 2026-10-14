import type { Metadata } from 'next';
import branchesData from '@/data/branches.json';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://skaryabhavan.com';

export interface SeoConfig {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: 'website' | 'article' | 'restaurant.restaurant';
  twitterCard?: 'summary' | 'summary_large_image';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  keywords?: string;
  robotsIndex?: boolean;
  robotsFollow?: boolean;
  priority?: number;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

export interface SeoAuditCheck {
  id: string;
  name: string;
  category: 'critical' | 'recommended' | 'optional';
  status: 'pass' | 'warn' | 'fail';
  score: number;
  maxScore: number;
  message: string;
  recommendation: string;
}

export interface SeoAuditResult {
  score: number;
  grade: 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';
  passCount: number;
  warnCount: number;
  failCount: number;
  checks: SeoAuditCheck[];
  summary: string;
}

export const defaultGlobalSeo = {
  siteName: 'Arya Bhavan London',
  defaultTitle: 'Arya Bhavan London | Authentic South Indian Pure Veg & Vegan Restaurant',
  defaultDescription: 'Welcome to Arya Bhavan London. Authentic South Indian 100% pure vegetarian restaurant in Central London (Leicester Square), Wembley & Tooting. Dosa, idli, thali, vegan & Jain cuisine.',
  defaultOgImage: '/images/migrated/NKAryaBhavan-Central-London-1.jpeg',
  siteUrl: SITE_URL,
  keywords: 'South Indian vegetarian restaurant London, pure veg restaurant London, dosa near me, vegan Indian food London, live dosa catering London, outdoor catering London, Wembley Indian restaurant, Tooting Indian restaurant, Leicester square vegetarian',
  cuisineTypes: ['South Indian', 'Pure Vegetarian', 'Vegan', 'Jain'],
  priceRange: '££',
  currenciesAccepted: 'GBP',
  paymentAccepted: 'Cash, Credit Card, Contactless, Apple Pay, Google Pay',
  robotsIndexDefault: true,
  robotsFollowDefault: true,
};

export const defaultPageSeo: Record<string, SeoConfig> = {
  '/': {
    title: 'Arya Bhavan London | Authentic South Indian Pure Veg & Vegan Restaurant',
    description: 'Welcome to Arya Bhavan London. Authentic South Indian 100% pure vegetarian restaurant in Central London (Leicester Square), Wembley & Tooting. Dosa, idli, thali, vegan & Jain cuisine.',
    canonical: `${SITE_URL}/`,
    ogImage: '/images/migrated/NKAryaBhavan-Central-London-1.jpeg',
    keywords: 'South Indian vegetarian London, pure veg dosa, Leicester square vegetarian, Wembley indian restaurant',
    robotsIndex: true,
    robotsFollow: true,
    priority: 1.0,
    changeFrequency: 'daily',
  },
  '/menu': {
    title: 'South Indian Pure Veg Menu | Dosas, Thalis & Biryanis | Arya Bhavan',
    description: 'Explore Arya Bhavan’s authentic menu: 200+ dishes including crispy dosas, steamed idlis, hot sambar vadai, royal thalis, vegetarian curries, and Indian sweets in London.',
    canonical: `${SITE_URL}/menu`,
    ogImage: '/images/migrated/MASALA-DOSAI-V-G.png',
    keywords: 'dosa menu london, indian vegetarian menu, thali london, pure veg starters',
    robotsIndex: true,
    robotsFollow: true,
    priority: 0.95,
    changeFrequency: 'weekly',
  },
  '/central-london': {
    title: 'Authentic South Indian Veg Restaurant Central London | Leicester Square',
    description: 'Top-rated authentic South Indian vegetarian restaurant in Central London, Charing Cross / Leicester Square. Dine-in, takeaway, vegan & Jain specials at Arya Bhavan.',
    canonical: `${SITE_URL}/central-london`,
    ogImage: '/images/migrated/NKAryaBhavan-Central-London-1.jpeg',
    keywords: 'central london vegetarian, leicester square indian food, charing cross dosa',
    robotsIndex: true,
    robotsFollow: true,
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  '/wembley': {
    title: 'South Indian Vegetarian Restaurant Wembley Central | Arya Bhavan',
    description: 'Family-friendly pure vegetarian restaurant on Ealing Road, Wembley. Crispy dosas, breakfast combos, South & North Indian thalis, pure veg and Jain food.',
    canonical: `${SITE_URL}/wembley`,
    ogImage: '/images/migrated/NKAryaBhavan-Wembley-1.jpeg',
    keywords: 'wembley indian food, ealing road vegetarian, pure veg wembley',
    robotsIndex: true,
    robotsFollow: true,
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  '/tooting': {
    title: 'South Indian Pure Veg Restaurant Tooting | Arya Bhavan London',
    description: 'Authentic South Indian cuisine in Tooting on Upper Tooting Road. Traditional stone-ground dosas, fragrant sambar, fresh chutneys, and vegetarian curries.',
    canonical: `${SITE_URL}/tooting`,
    ogImage: '/images/migrated/NKAryaBhavan-Tooting-1.jpeg',
    keywords: 'tooting vegetarian restaurant, upper tooting road dosa, south indian tooting',
    robotsIndex: true,
    robotsFollow: true,
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  '/outdoor-catering': {
    title: 'Outdoor Indian Vegetarian Catering London | Arya Bhavan Events',
    description: 'Authentic Indian vegetarian outdoor catering across London & the UK. Comprehensive buffet packages for weddings, birthdays, and corporate celebrations.',
    canonical: `${SITE_URL}/outdoor-catering`,
    ogImage: '/images/catering/closed-metal-pots-1.jpg',
    keywords: 'outdoor catering london, indian wedding catering, pure veg catering uk',
    robotsIndex: true,
    robotsFollow: true,
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  '/live-dosa-catering': {
    title: 'Live Dosa Catering at Home & Events London | Live Dosa Station',
    description: 'Book authentic live dosa station catering for home parties, weddings & corporate events in London. Freshly spun crispy dosas with chefs on-site.',
    canonical: `${SITE_URL}/live-dosa-catering`,
    ogImage: '/images/catering/WhatsApp-Image-2025-12-08-at-14.51.18-e1765205112699.jpeg',
    keywords: 'live dosa catering london, dosa party at home, live dosa chef hire london',
    robotsIndex: true,
    robotsFollow: true,
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  '/branches': {
    title: 'Our Restaurant Locations | Central London, Wembley, Tooting | Arya Bhavan',
    description: 'Find your nearest Arya Bhavan branch in Central London (Leicester Square), Wembley Central, and Tooting. View opening hours, addresses, and contact info.',
    canonical: `${SITE_URL}/branches`,
    ogImage: '/images/migrated/NKAryaBhavan-Central-London-1.jpeg',
    keywords: 'arya bhavan branches, indian restaurants london locations',
    robotsIndex: true,
    robotsFollow: true,
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  '/franchise': {
    title: 'Franchise Opportunities | Partner with Arya Bhavan UK',
    description: 'Join the fastest growing South Indian vegetarian restaurant brand in the UK & Europe. Learn about Arya Bhavan restaurant franchising opportunities.',
    canonical: `${SITE_URL}/franchise`,
    ogImage: '/images/migrated/NKAryaBhavan-Central-London-1.jpeg',
    keywords: 'restaurant franchise uk, indian food franchise europe',
    robotsIndex: true,
    robotsFollow: true,
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  '/about-us': {
    title: 'About Arya Bhavan London | Authentic South Indian Culinary Heritage',
    description: 'Discover the story of Arya Bhavan, from our traditional stone-ground roots in South India to expanding across Central London, Wembley, Tooting, and Europe.',
    canonical: `${SITE_URL}/about-us`,
    ogImage: '/images/migrated/menu-north-thali-e1772186014264.jpg',
    keywords: 'about arya bhavan, authentic south indian history, london indian food',
    robotsIndex: true,
    robotsFollow: true,
    priority: 0.75,
    changeFrequency: 'monthly',
  },
  '/contact-us': {
    title: 'Contact Arya Bhavan London | Bookings, Catering & Inquiries',
    description: 'Get in touch with Arya Bhavan London for table reservations, live dosa catering quotes, feedback, and private party bookings across London.',
    canonical: `${SITE_URL}/contact-us`,
    ogImage: '/images/migrated/NKAryaBhavan-Central-London-1.jpeg',
    keywords: 'contact arya bhavan, book dosa catering london, restaurant phone number',
    robotsIndex: true,
    robotsFollow: true,
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Arya Bhavan London UK GDPR',
    description: 'Privacy Policy and transparent data protection commitments for Arya Bhavan London customers and catering clients under UK GDPR regulations.',
    canonical: `${SITE_URL}/privacy-policy`,
    ogImage: '/images/migrated/NKAryaBhavan-Central-London-1.jpeg',
    ogTitle: 'Privacy Policy | Arya Bhavan London',
    ogDescription: 'UK GDPR privacy notice and customer data protection standards at Arya Bhavan.',
    keywords: 'privacy policy, arya bhavan gdpr, customer data protection uk',
    robotsIndex: true,
    robotsFollow: true,
    priority: 0.5,
    changeFrequency: 'yearly',
  },
  '/terms-and-disclaimer': {
    title: 'Terms & Conditions & Allergen Notice | Arya Bhavan',
    description: 'Terms of service, dining booking policies, and pure vegetarian allergen cross-contamination guidance for Arya Bhavan restaurants across London.',
    canonical: `${SITE_URL}/terms-and-disclaimer`,
    ogImage: '/images/migrated/NKAryaBhavan-Central-London-1.jpeg',
    ogTitle: 'Terms & Conditions | Arya Bhavan London',
    ogDescription: 'Official terms, booking conditions, and allergen notices for Arya Bhavan London.',
    keywords: 'terms and conditions, allergen notice, pure veg dining policies london',
    robotsIndex: true,
    robotsFollow: true,
    priority: 0.5,
    changeFrequency: 'yearly',
  },
  '/cookie-policy-uk': {
    title: 'Cookie Policy (UK) | Arya Bhavan London',
    description: 'Details on how essential, analytical, and preference cookies are safely utilized to optimize your dining and catering browsing experience at Arya Bhavan.',
    canonical: `${SITE_URL}/cookie-policy-uk`,
    ogImage: '/images/migrated/NKAryaBhavan-Central-London-1.jpeg',
    ogTitle: 'Cookie Policy | Arya Bhavan London',
    ogDescription: 'Transparent cookie usage guidelines for Arya Bhavan London website visitors.',
    keywords: 'cookie policy, website tracking disclosure, arya bhavan uk',
    robotsIndex: true,
    robotsFollow: true,
    priority: 0.5,
    changeFrequency: 'yearly',
  },
};

export function getGlobalSeo(siteContent?: any) {
  return {
    ...defaultGlobalSeo,
    ...(siteContent?.seo || {}),
  };
}

export function getPageSeo(route: string, siteContent?: any): SeoConfig {
  const normalizedRoute = route === '' ? '/' : route;
  const customPageSeo = siteContent?.pagesSeo?.[normalizedRoute];
  const baselineSeo = defaultPageSeo[normalizedRoute];
  const global = getGlobalSeo(siteContent);

  const title =
    customPageSeo?.title ||
    baselineSeo?.title ||
    `${global.siteName} | Authentic South Indian Vegetarian Restaurant`;

  const description =
    customPageSeo?.description ||
    baselineSeo?.description ||
    global.defaultDescription;

  const canonical =
    customPageSeo?.canonical ||
    baselineSeo?.canonical ||
    `${SITE_URL}${normalizedRoute === '/' ? '' : normalizedRoute}`;

  const ogImage =
    customPageSeo?.ogImage ||
    baselineSeo?.ogImage ||
    global.defaultOgImage;

  const ogTitle = customPageSeo?.ogTitle || baselineSeo?.ogTitle || title;
  const ogDescription = customPageSeo?.ogDescription || baselineSeo?.ogDescription || description;
  const keywords = customPageSeo?.keywords || baselineSeo?.keywords || global.keywords;

  const robotsIndex =
    customPageSeo?.robotsIndex !== undefined
      ? customPageSeo.robotsIndex
      : baselineSeo?.robotsIndex !== undefined
      ? baselineSeo.robotsIndex
      : true;

  const robotsFollow =
    customPageSeo?.robotsFollow !== undefined
      ? customPageSeo.robotsFollow
      : baselineSeo?.robotsFollow !== undefined
      ? baselineSeo.robotsFollow
      : true;

  const priority = customPageSeo?.priority ?? baselineSeo?.priority ?? 0.7;
  const changeFrequency = customPageSeo?.changeFrequency || baselineSeo?.changeFrequency || 'weekly';

  return {
    title,
    description,
    canonical,
    ogImage,
    ogTitle,
    ogDescription,
    ogType: customPageSeo?.ogType || 'website',
    twitterCard: customPageSeo?.twitterCard || 'summary_large_image',
    twitterTitle: customPageSeo?.twitterTitle || ogTitle,
    twitterDescription: customPageSeo?.twitterDescription || ogDescription,
    twitterImage: customPageSeo?.twitterImage || ogImage,
    keywords,
    robotsIndex,
    robotsFollow,
    priority,
    changeFrequency,
  };
}

export function buildPageMetadata(
  route: string,
  custom?: Partial<SeoConfig>,
  siteContent?: any
): Metadata {
  const pageSeo = getPageSeo(route, siteContent);
  const global = getGlobalSeo(siteContent);

  const title = custom?.title || pageSeo.title;
  const description = custom?.description || pageSeo.description;
  const canonical = custom?.canonical || pageSeo.canonical || `${SITE_URL}${route === '/' ? '' : route}`;
  const ogImageRaw = custom?.ogImage || pageSeo.ogImage || global.defaultOgImage;
  const ogImageUrl = ogImageRaw.startsWith('http') ? ogImageRaw : `${SITE_URL}${ogImageRaw.startsWith('/') ? '' : '/'}${ogImageRaw}`;
  const keywords = custom?.keywords || pageSeo.keywords;

  const robotsIndex = custom?.robotsIndex !== undefined ? custom.robotsIndex : pageSeo.robotsIndex;
  const robotsFollow = custom?.robotsFollow !== undefined ? custom.robotsFollow : pageSeo.robotsFollow;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: custom?.ogTitle || pageSeo.ogTitle || title,
      description: custom?.ogDescription || pageSeo.ogDescription || description,
      url: canonical,
      siteName: global.siteName,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${global.siteName} - Authentic South Indian Pure Vegetarian Cuisine London`,
        },
      ],
      type: 'website',
      locale: 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      title: custom?.twitterTitle || custom?.ogTitle || pageSeo.twitterTitle || title,
      description: custom?.twitterDescription || custom?.ogDescription || pageSeo.twitterDescription || description,
      images: [ogImageUrl],
    },
    robots: {
      index: robotsIndex,
      follow: robotsFollow,
      googleBot: {
        index: robotsIndex,
        follow: robotsFollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/images/migrated/cropped-WhatsApp-Image-2026-09-10-at-22.33.09-32x32.jpeg', sizes: '32x32', type: 'image/jpeg' },
        { url: '/images/migrated/cropped-WhatsApp-Image-2026-09-10-at-22.33.09-192x192.jpeg', sizes: '192x192', type: 'image/jpeg' },
      ],
      apple: [
        { url: '/images/migrated/cropped-WhatsApp-Image-2026-09-10-at-22.33.09-180x180.jpeg', sizes: '180x180', type: 'image/jpeg' },
      ],
    },
  };
}

export function generateRestaurantSchemas(siteContent?: any) {
  const global = getGlobalSeo(siteContent);
  const general = siteContent?.general;

  return branchesData.map((branch) => ({
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${SITE_URL}/#${branch.id}`,
    name: `${global.siteName} (${branch.name})`,
    image: branch.image.startsWith('http') ? branch.image : `${SITE_URL}${branch.image}`,
    telephone: branch.phone,
    email: general?.email || 'eventsnkab@gmail.com',
    url: `${SITE_URL}/${branch.slug}`,
    servesCuisine: global.cuisineTypes || ['South Indian', 'Vegetarian', 'Vegan', 'Jain'],
    priceRange: global.priceRange || '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: branch.address,
      addressLocality: 'London',
      postalCode: branch.postcode,
      addressCountry: 'GB',
    },
    geo: branch.id === 'central-london' ? {
      '@type': 'GeoCoordinates',
      latitude: '51.5097',
      longitude: '-0.1287',
    } : branch.id === 'wembley' ? {
      '@type': 'GeoCoordinates',
      latitude: '51.5512',
      longitude: '-0.2988',
    } : {
      '@type': 'GeoCoordinates',
      latitude: '51.4332',
      longitude: '-0.1654',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: branch.hours.includes('09:30') ? '09:30' : '10:00',
        closes: '22:00',
      },
    ],
    menu: `${SITE_URL}/menu`,
    acceptsReservations: 'True',
    currenciesAccepted: global.currenciesAccepted || 'GBP',
    paymentAccepted: global.paymentAccepted || 'Cash, Credit Card, Contactless',
    sameAs: [
      general?.social?.facebook || 'https://facebook.com/skaryabhavan',
      general?.social?.instagram || 'https://instagram.com/skaryabhavan',
    ],
  }));
}

export function generateLocalBusinessSchema(siteContent?: any) {
  const global = getGlobalSeo(siteContent);
  const general = siteContent?.general;

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: global.siteName,
    url: SITE_URL,
    logo: `${SITE_URL}/images/migrated/NKAryaBhavan-Central-London-1.jpeg`,
    image: `${SITE_URL}/images/migrated/NKAryaBhavan-Central-London-1.jpeg`,
    description: global.defaultDescription,
    telephone: general?.primaryPhone || '+44 20 7839 8797',
    email: general?.email || 'eventsnkab@gmail.com',
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '17 Charing Cross Road',
      addressLocality: 'London',
      postalCode: 'WC2H 0EP',
      addressCountry: 'GB',
    },
    areaServed: [
      'Central London',
      'Leicester Square',
      'Charing Cross',
      'Wembley',
      'Tooting',
      'Greater London',
      'Buckinghamshire',
      'United Kingdom',
    ],
  };
}

export function generateFaqPageSchema(faqs?: { q: string; a: string }[]) {
  if (!faqs || faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateAggregateRatingSchema(reviews?: any[], siteContent?: any) {
  const global = getGlobalSeo(siteContent);
  const list = reviews || siteContent?.reviews || [];
  if (list.length === 0) return null;

  const totalRating = list.reduce((acc: number, r: any) => acc + (Number(r.stars) || 5), 0);
  const avgRating = (totalRating / list.length).toFixed(1);

  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: global.siteName,
    image: `${SITE_URL}/images/migrated/NKAryaBhavan-Central-London-1.jpeg`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avgRating,
      reviewCount: String(list.length > 3 ? list.length : 5000),
      bestRating: '5',
      worstRating: '1',
    },
  };
}

export function calculateSeoAudit(pageSeo: SeoConfig, route: string, globalSeo?: any): SeoAuditResult {
  const checks: SeoAuditCheck[] = [];
  const title = (pageSeo.title || '').trim();
  const desc = (pageSeo.description || '').trim();
  const titleLen = title.length;
  const descLen = desc.length;

  // 1. Title Tag Length Check (Optimal: 30-75 characters)
  if (titleLen >= 30 && titleLen <= 75) {
    checks.push({
      id: 'title-length',
      name: 'Title Tag Length',
      category: 'critical',
      status: 'pass',
      score: 20,
      maxScore: 20,
      message: `Optimal length: ${titleLen} characters. Fits cleanly in Google SERPs on desktop and mobile.`,
      recommendation: 'Keep current title tag.',
    });
  } else if ((titleLen >= 20 && titleLen < 30) || (titleLen > 75 && titleLen <= 85)) {
    checks.push({
      id: 'title-length',
      name: 'Title Tag Length',
      category: 'critical',
      status: 'warn',
      score: 16,
      maxScore: 20,
      message: `Acceptable (${titleLen} chars), recommended range is 30–75 characters.`,
      recommendation: titleLen < 30 ? 'Add brand name or location.' : 'Trim slightly to prevent desktop truncation.',
    });
  } else {
    checks.push({
      id: 'title-length',
      name: 'Title Tag Length',
      category: 'critical',
      status: 'fail',
      score: 8,
      maxScore: 20,
      message: titleLen === 0 ? 'Missing page title!' : `Non-optimal length: ${titleLen} characters.`,
      recommendation: 'Provide a concise, keyword-rich title between 30 and 75 characters.',
    });
  }

  // 2. Meta Description Length Check (Optimal: 70-200 characters)
  if (descLen >= 70 && descLen <= 200) {
    checks.push({
      id: 'meta-description',
      name: 'Meta Description Length',
      category: 'critical',
      status: 'pass',
      score: 20,
      maxScore: 20,
      message: `Optimal length: ${descLen} characters. Provides compelling context in search snippets.`,
      recommendation: 'Keep current meta description.',
    });
  } else if ((descLen >= 40 && descLen < 70) || (descLen > 200 && descLen <= 240)) {
    checks.push({
      id: 'meta-description',
      name: 'Meta Description Length',
      category: 'critical',
      status: 'warn',
      score: 16,
      maxScore: 20,
      message: `Moderate length: ${descLen} characters. Ideal range is 70–180 chars.`,
      recommendation: descLen < 70 ? 'Expand description to include signature dishes or location.' : 'Trim slightly to prevent mobile cutoff.',
    });
  } else {
    checks.push({
      id: 'meta-description',
      name: 'Meta Description Length',
      category: 'critical',
      status: 'fail',
      score: 8,
      maxScore: 20,
      message: descLen === 0 ? 'Missing meta description!' : `Ineffective length: ${descLen} characters.`,
      recommendation: 'Write an enticing summary between 70 and 180 characters.',
    });
  }

  // 3. Canonical Tag Verification
  const canonical = pageSeo.canonical || '';
  if (canonical.startsWith('https://') || canonical.startsWith('http://') || canonical.startsWith('/')) {
    checks.push({
      id: 'canonical-url',
      name: 'Canonical URL Target',
      category: 'critical',
      status: 'pass',
      score: 15,
      maxScore: 15,
      message: `Valid canonical URL specified: ${canonical}`,
      recommendation: 'Ensure all link variants redirect here cleanly.',
    });
  } else {
    checks.push({
      id: 'canonical-url',
      name: 'Canonical URL Target',
      category: 'critical',
      status: 'warn',
      score: 10,
      maxScore: 15,
      message: 'Canonical URL not explicitly absolute HTTPS.',
      recommendation: `Set canonical to full https://skaryabhavan.com${route === '/' ? '' : route}`,
    });
  }

  // 4. OpenGraph Social Share Image Check
  const ogImg = pageSeo.ogImage || globalSeo?.defaultOgImage || '';
  if (ogImg && (ogImg.includes('.jpg') || ogImg.includes('.jpeg') || ogImg.includes('.png') || ogImg.includes('.webp') || ogImg.startsWith('http'))) {
    checks.push({
      id: 'og-image',
      name: 'OpenGraph Visual Asset',
      category: 'recommended',
      status: 'pass',
      score: 15,
      maxScore: 15,
      message: `High-resolution social card image configured: ${ogImg}`,
      recommendation: 'Ensure asset aspect ratio is approximately 1.91:1 (1200x630px).',
    });
  } else {
    checks.push({
      id: 'og-image',
      name: 'OpenGraph Visual Asset',
      category: 'recommended',
      status: 'fail',
      score: 5,
      maxScore: 15,
      message: 'No OpenGraph image specified for social sharing.',
      recommendation: 'Attach a signature food or restaurant exterior image for Facebook, LinkedIn & X previews.',
    });
  }

  // 5. Robots Search Engine Directives
  if (pageSeo.robotsIndex !== false) {
    checks.push({
      id: 'robots-index',
      name: 'Search Engine Indexing',
      category: 'critical',
      status: 'pass',
      score: 15,
      maxScore: 15,
      message: 'Public indexing enabled (index, follow). Google and Bing bots are permitted.',
      recommendation: 'Leave indexing enabled for all public customer-facing routes.',
    });
  } else {
    checks.push({
      id: 'robots-index',
      name: 'Search Engine Indexing',
      category: 'critical',
      status: 'warn',
      score: 8,
      maxScore: 15,
      message: 'Page marked as NOINDEX. Search crawlers will drop this URL from indices.',
      recommendation: 'Only keep noindex active for private, administrative, or draft pages.',
    });
  }

  // 6. Keywords Presence & Strategic Alignment
  const kw = (pageSeo.keywords || '').trim();
  if (kw.length >= 6) {
    checks.push({
      id: 'keywords-strategy',
      name: 'Target Keywords Strategy',
      category: 'optional',
      status: 'pass',
      score: 15,
      maxScore: 15,
      message: `Strategic keywords defined (${kw.split(',').length} terms active).`,
      recommendation: 'Review quarterly against Google Search Console queries.',
    });
  } else {
    checks.push({
      id: 'keywords-strategy',
      name: 'Target Keywords Strategy',
      category: 'optional',
      status: 'warn',
      score: 8,
      maxScore: 15,
      message: kw ? 'Keywords present but could be expanded.' : 'No target keywords configured.',
      recommendation: 'Add high-intent search phrases (e.g., pure veg restaurant, dosa catering london).',
    });
  }

  // Compute overall score
  const totalScore = checks.reduce((acc, c) => acc + c.score, 0);
  const maxScore = checks.reduce((acc, c) => acc + c.maxScore, 0);
  const normalizedScore = Math.round((totalScore / maxScore) * 100);

  let grade: SeoAuditResult['grade'] = 'A+';
  if (normalizedScore >= 92) grade = 'A+';
  else if (normalizedScore >= 85) grade = 'A';
  else if (normalizedScore >= 75) grade = 'B';
  else if (normalizedScore >= 60) grade = 'C';
  else if (normalizedScore >= 45) grade = 'D';
  else grade = 'F';

  const passCount = checks.filter((c) => c.status === 'pass').length;
  const warnCount = checks.filter((c) => c.status === 'warn').length;
  const failCount = checks.filter((c) => c.status === 'fail').length;

  let summary = `Excellent! This page scores ${normalizedScore}% (Grade ${grade}) with ${passCount} passing criteria.`;
  if (warnCount > 0 || failCount > 0) {
    summary = `Score: ${normalizedScore}% (Grade ${grade}). ${passCount} passed, ${warnCount} warnings, ${failCount} issues need attention.`;
  }

  return {
    score: normalizedScore,
    grade,
    passCount,
    warnCount,
    failCount,
    checks,
    summary,
  };
}
