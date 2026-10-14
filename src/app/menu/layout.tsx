import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seoService';
import { getSiteContent } from '@/lib/firebaseService';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const siteContent = await getSiteContent();
  return buildPageMetadata('/menu', undefined, siteContent);
}

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
