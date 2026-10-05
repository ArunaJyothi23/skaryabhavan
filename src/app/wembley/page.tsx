import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seoService';
import BranchDetailTemplate from '@/components/BranchDetailTemplate';

export const metadata: Metadata = buildPageMetadata('/wembley');

export default function WembleyPage() {
  return (
    <BranchDetailTemplate
      name="Wembley Central"
      area="Ealing Road"
      address="22, 22A Ealing Rd, Wembley"
      postcode="HA0 4TL"
      phone="+442089008526"
      displayPhone="020 8900 8526"
      hours="09:30 AM – 10:00 PM (Monday – Sunday)"
      image="/images/migrated/NKAryaBhavan-Wembley-1.jpeg"
      features={['Family Seating', 'Dine-In', 'Takeaway', 'Pure Vegetarian', 'Weekend Breakfast', 'Party Hall Bookings']}
      description="In the vibrant heart of Ealing Road, Arya Bhavan Wembley offers authentic South Indian 100% pure vegetarian cuisine, traditional South Indian breakfasts, and royal thalis."
      mapEmbedUrl="https://maps.google.com/maps?q=22%20Ealing%20Rd,%20Wembley%20HA0%204TL&t=&z=15&ie=UTF8&iwloc=&output=embed"
    />
  );
}
