import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import PageJsonLd from "@/components/PageJsonLd";
import { buildPageMetadata } from "@/lib/seoService";
import { getSiteContent } from "@/lib/firebaseService";

export async function generateMetadata(): Promise<Metadata> {
  const siteContent = await getSiteContent();
  return buildPageMetadata("/", undefined, siteContent);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteContent = await getSiteContent();

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/jid7xtu.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/jpeg" sizes="32x32" href="/images/migrated/cropped-WhatsApp-Image-2026-09-10-at-22.33.09-32x32.jpeg" />
        <link rel="icon" type="image/jpeg" sizes="192x192" href="/images/migrated/cropped-WhatsApp-Image-2026-09-10-at-22.33.09-192x192.jpeg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/migrated/cropped-WhatsApp-Image-2026-09-10-at-22.33.09-180x180.jpeg" />
        <PageJsonLd />
      </head>
      <body className="antialiased min-h-screen flex flex-col justify-between font-sans bg-white selection:bg-[#C7803F] selection:text-white">
        <ClientLayout initialContent={siteContent}>{children}</ClientLayout>
      </body>
    </html>
  );
}
