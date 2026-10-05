import type { Metadata } from 'next';
import branchesData from '@/data/branches.json';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://skaryabhavan.com';

export interface SeoConfig {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const pageSeoMap: Record<string, SeoConfig> = {
  '/': {
    title: 'Arya Bhavan London | Authentic South Indian Pure Veg & Vegan Restaurant',
    description: 'Welcome to Arya Bhavan London. Authentic South Indian 100% pure vegetarian restaurant in Central London (Leicester Square), Wembley & Tooting. Dosa, idli, thali, vegan & Jain cuisine.',
    canonical: `${SITE_URL}/`,
  },
  '/menu': {
    title: 'South Indian Pure Veg Menu | Dosas, Thalis & Biryanis | Arya Bhavan',
    description: 'Explore Arya Bhavan’s authentic menu: 200+ dishes including crispy dosas, steamed idlis, hot sambar vadai, royal thalis, vegetarian curries, and Indian sweets in London.',
    canonical: `${SITE_URL}/menu`,
  },
  '/central-london': {
    title: 'Authentic South Indian Veg Restaurant Central London | Leicester Square',
    description: 'Top-rated authentic South Indian vegetarian restaurant in Central London, Charing Cross / Leicester Square. Dine-in, takeaway, vegan & Jain specials at Arya Bhavan.',
    canonical: `${SITE_URL}/central-london`,
  },
  '/wembley': {
    title: 'South Indian Vegetarian Restaurant Wembley Central | Arya Bhavan',
    description: 'Family-friendly pure vegetarian restaurant on Ealing Road, Wembley. Crispy dosas, breakfast combos, South & North Indian thalis, pure veg and Jain food.',
    canonical: `${SITE_URL}/wembley`,
  },
  '/tooting': {
    title: 'South Indian Pure Veg Restaurant Tooting | Arya Bhavan London',
    description: 'Authentic South Indian cuisine in Tooting on Upper Tooting Road. Traditional stone-ground dosas, fragrant sambar, fresh chutneys, and vegetarian curries.',
    canonical: `${SITE_URL}/tooting`,
  },
  '/outdoor-catering': {
    title: 'Outdoor Indian Vegetarian Catering London | Arya Bhavan Events',
    description: 'Authentic Indian vegetarian outdoor catering across London & the UK. Comprehensive buffet packages for weddings, birthdays, and corporate celebrations.',
    canonical: `${SITE_URL}/outdoor-catering`,
  },
  '/live-dosa-catering': {
    title: 'Live Dosa Catering at Home & Events London | Live Dosa Station',
    description: 'Book authentic live dosa station catering for home parties, weddings & corporate events in London. Freshly spun crispy dosas with chefs on-site.',
    canonical: `${SITE_URL}/live-dosa-catering`,
  },
  '/branches': {
    title: 'Our Restaurant Locations | Central London, Wembley, Tooting | Arya Bhavan',
    description: 'Find your nearest Arya Bhavan branch in Central London (Leicester Square), Wembley Central, and Tooting. View opening hours, addresses, and contact info.',
    canonical: `${SITE_URL}/branches`,
  },
  '/franchise': {
    title: 'Franchise Opportunities | Partner with Arya Bhavan UK',
    description: 'Join the fastest growing South Indian vegetarian restaurant brand in the UK & Europe. Learn about Arya Bhavan restaurant franchising opportunities.',
    canonical: `${SITE_URL}/franchise`,
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Arya Bhavan UK',
    description: 'Privacy Policy and data protection details for Arya Bhavan (Asgard Ventures LTD).',
    canonical: `${SITE_URL}/privacy-policy`,
  },
  '/terms-and-disclaimer': {
    title: 'Terms & Conditions & Allergen Disclaimer | Arya Bhavan',
    description: 'Terms of service, allergen declarations, and restaurant booking policies for Arya Bhavan London.',
    canonical: `${SITE_URL}/terms-and-disclaimer`,
  },
  '/cookie-policy-uk': {
    title: 'Cookie Policy | Arya Bhavan London',
    description: 'Information about how cookies and tracking are utilized on Arya Bhavan’s web platform.',
    canonical: `${SITE_URL}/cookie-policy-uk`,
  }
};

export function buildPageMetadata(path: string, custom?: Partial<SeoConfig>): Metadata {
  const base = pageSeoMap[path] || {
    title: 'Arya Bhavan London | Authentic South Indian Pure Veg Restaurant',
    description: 'Authentic South Indian vegetarian and vegan food in Central London, Wembley, and Tooting.',
    canonical: `${SITE_URL}${path}`,
  };

  const title = custom?.title || base.title;
  const description = custom?.description || base.description;
  const canonical = custom?.canonical || base.canonical || `${SITE_URL}${path}`;
  const ogImage = custom?.ogImage || `${SITE_URL}/images/migrated/NKAryaBhavan-Central-London-1.jpeg`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Arya Bhavan London',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'Arya Bhavan Authentic South Indian Restaurant London',
        },
      ],
      type: 'website',
      locale: 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
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

export function generateRestaurantSchemas() {
  return branchesData.map((branch) => ({
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${SITE_URL}/#${branch.id}`,
    name: `Arya Bhavan (${branch.name})`,
    image: `${SITE_URL}${branch.image}`,
    telephone: branch.phone,
    servesCuisine: ['South Indian', 'Vegetarian', 'Vegan', 'Jain'],
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: branch.address,
      addressLocality: 'London',
      postalCode: branch.postcode,
      addressCountry: 'GB',
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
    currenciesAccepted: 'GBP',
    paymentAccepted: 'Cash, Credit Card, Contactless',
  }));
}
