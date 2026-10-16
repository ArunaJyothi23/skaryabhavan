import type { Metadata } from 'next';
import BranchDetailClient from '@/components/BranchDetailClient';
import { branchesData } from '@/data/branchesDetailedData';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const branch = branchesData.ilford;

export const metadata: Metadata = {
  title: branch.seo.title,
  description: branch.seo.description,
  alternates: {
    canonical: branch.seo.canonical,
  },
  openGraph: {
    title: branch.seo.title,
    description: branch.seo.description,
    url: branch.seo.canonical,
    siteName: 'Arya Bhavan',
    images: [
      {
        url: 'https://skaryabhavan.com/wp-content/uploads/2024/11/sl1.jpg',
        width: 1200,
        height: 630,
        alt: 'Arya Bhavan Ilford',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export default function IlfordPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Arya Bhavan Ilford',
    image: 'https://skaryabhavan.com/wp-content/uploads/2024/11/sl1.jpg',
    telephone: branch.schema.telephone,
    servesCuisine: 'South Indian, Vegetarian, Vegan, Jain',
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: branch.schema.streetAddress,
      addressLocality: branch.schema.addressLocality,
      postalCode: branch.schema.postalCode,
      addressCountry: branch.schema.addressCountry,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: branch.schema.opens,
        closes: branch.schema.closes,
      },
    ],
    url: branch.seo.canonical,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BranchDetailClient branch={branch} />
    </>
  );
}
