import React from 'react';
import {
  generateRestaurantSchemas,
  generateLocalBusinessSchema,
  generateFaqPageSchema,
  generateAggregateRatingSchema,
} from '@/lib/seoService';

interface PageJsonLdProps {
  siteContent?: any;
}

export default function PageJsonLd({ siteContent }: PageJsonLdProps) {
  const restaurantSchemas = generateRestaurantSchemas(siteContent);
  const localBusinessSchema = generateLocalBusinessSchema(siteContent);
  const faqSchema = generateFaqPageSchema(siteContent?.faqs);
  const ratingSchema = generateAggregateRatingSchema(siteContent?.reviews, siteContent);

  const schemas: any[] = [...restaurantSchemas];
  if (localBusinessSchema) schemas.push(localBusinessSchema);
  if (faqSchema) schemas.push(faqSchema);
  if (ratingSchema) schemas.push(ratingSchema);

  return (
    <>
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
