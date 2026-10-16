import type { Metadata } from 'next';
import CentralLondonClient from '@/components/CentralLondonClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Top-rated Authentic South Indian Veg Restaurant Central London',
  description: 'Authentic South Indian vegetarian restaurant in Central London – Leicester Square. Enjoy crispy dosa, South Indian breakfast, veg thali, vegan & Jain options at Arya Bhavan.',
  alternates: {
    canonical: 'https://skaryabhavan.com/central-london/',
  },
  openGraph: {
    title: 'Top-rated Authentic South Indian Veg Restaurant Central London',
    description: 'Authentic South Indian vegetarian restaurant in Central London – Leicester Square. Enjoy crispy dosa, South Indian breakfast, veg thali, vegan & Jain options at Arya Bhavan.',
    url: 'https://skaryabhavan.com/central-london/',
    siteName: 'Arya Bhavan',
    images: [
      {
        url: 'https://skaryabhavan.com/wp-content/uploads/2024/11/sl1.jpg',
        width: 1200,
        height: 630,
        alt: 'Arya Bhavan Central London',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export default function CentralLondonPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Samko Arya Bhavan Central London',
    image: 'https://skaryabhavan.com/wp-content/uploads/2024/11/sl1.jpg',
    telephone: '+44 20 7839 8797',
    servesCuisine: 'South Indian, Vegetarian, Vegan, Jain',
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '17 Charing Cross Rd',
      addressLocality: 'London',
      postalCode: 'WC2H 0EP',
      addressCountry: 'GB',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '10:30',
        closes: '22:30',
      },
    ],
    url: 'https://skaryabhavan.com/central-london/',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CentralLondonClient />
    </>
  );
}
