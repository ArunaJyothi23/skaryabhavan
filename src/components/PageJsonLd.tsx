import React from 'react';
import { generateRestaurantSchemas } from '@/lib/seoService';

export default function PageJsonLd() {
  const schemas = generateRestaurantSchemas();

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
