import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seoService';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'migrated_content.json');
  if (!fs.existsSync(filePath)) return [];
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const pages = data.pagesSummary || [];
  return pages
    .filter((p: any) => p.slug && p.status === 'publish')
    .map((p: any) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageFile = path.join(process.cwd(), 'extracted_pages', `${slug}.json`);
  if (!fs.existsSync(pageFile)) {
    return { title: 'Page Not Found | Arya Bhavan' };
  }
  const page = JSON.parse(fs.readFileSync(pageFile, 'utf8'));
  const title = page.seo?.title || page.title || 'Arya Bhavan London';
  const description = page.seo?.description || `Explore ${title} at Arya Bhavan UK.`;
  return {
    title: `${title} | Arya Bhavan London`,
    description,
    alternates: {
      canonical: `${SITE_URL}/${slug}`,
    },
  };
}

export default async function DynamicSlugPage({ params }: Props) {
  const { slug } = await params;
  const pageFile = path.join(process.cwd(), 'extracted_pages', `${slug}.json`);

  if (!fs.existsSync(pageFile)) {
    notFound();
  }

  const page = JSON.parse(fs.readFileSync(pageFile, 'utf8'));

  // Clean raw elementor markup or html content
  const cleanContent = page.content
    ? page.content
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    : '';

  return (
    <main className="py-16 bg-[#fdfaf6] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm space-y-6">
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-gray-900">
          {page.title}
        </h1>

        {cleanContent ? (
          <div
            className="prose prose-orange max-w-none text-sm text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: cleanContent }}
          />
        ) : (
          <p className="text-sm text-gray-500 italic">No additional content available for this section.</p>
        )}
      </div>
    </main>
  );
}
