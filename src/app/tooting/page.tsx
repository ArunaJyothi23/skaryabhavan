import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seoService';
import BranchDetailTemplate from '@/components/BranchDetailTemplate';

export const metadata: Metadata = buildPageMetadata('/tooting');

export default function TootingPage() {
  return (
    <BranchDetailTemplate
      name="Tooting"
      area="Upper Tooting Road"
      address="254 Upper Tooting Rd, London"
      postcode="SW17 0DN"
      phone="+442083553555"
      displayPhone="020 8355 3555"
      hours="10:00 AM – 10:00 PM (Monday – Sunday)"
      image="/images/migrated/NKAryaBhavan-Tooting-1.jpeg"
      features={['Traditional Thalis', 'Dine-In', 'Takeaway', 'Pure Vegetarian & Vegan', 'Family Seating', 'Live Counters']}
      description="In the culinary hub of Tooting, Arya Bhavan is celebrated for its commitment to authentic South Indian cooking, crispy dosas, filter coffee, and family-friendly hospitality."
      mapEmbedUrl="https://maps.google.com/maps?q=254%20Upper%20Tooting%20Rd,%20London%20SW17%200DN&t=&z=15&ie=UTF8&iwloc=&output=embed"
    />
  );
}
