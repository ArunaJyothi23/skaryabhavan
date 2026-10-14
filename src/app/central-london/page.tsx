import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seoService';
import { getSiteContent } from '@/lib/firebaseService';
import BranchDetailTemplate from '@/components/BranchDetailTemplate';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const siteContent = await getSiteContent();
  return buildPageMetadata('/central-london', undefined, siteContent);
}

export default function CentralLondonPage() {
  return (
    <BranchDetailTemplate
      name="Central London"
      area="Leicester Square / Charing Cross"
      address="17 Charing Cross Road, Charing Cross, London"
      postcode="WC2H 0EP"
      phone="+442078398797"
      displayPhone="020 7839 8797"
      hours="10:00 AM – 10:00 PM (Monday – Sunday)"
      image="/images/migrated/NKAryaBhavan-Central-London-1.jpeg"
      features={['Dine-In', 'Takeaway', 'Delivery', 'Air Conditioned', 'Vegan Friendly', 'Jain Options']}
      description="Located moments away from Leicester Square and Trafalgar Square, Arya Bhavan Central London is the capital's flagship destination for authentic South Indian vegetarian dosas, idlis, and thalis."
      mapEmbedUrl="https://maps.google.com/maps?q=17%20Charing%20Cross%20Rd,%20London%20WC2H%200EP&t=&z=15&ie=UTF8&iwloc=&output=embed"
    />
  );
}
