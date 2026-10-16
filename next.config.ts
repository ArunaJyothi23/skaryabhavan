import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    qualities: [75, 80, 85, 90, 95, 100],
    remotePatterns: [
      { protocol: 'https', hostname: 'skaryabhavan.com' },
      { protocol: 'https', hostname: 'nkaryabhavan.fr' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'firebasestorage.googleapis.com' },
    ],
  },
  async redirects() {
    return [
      { source: '/nagerkovil-arya-bhavan', destination: '/', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/hom', destination: '/', permanent: true },
      { source: '/home2', destination: '/', permanent: true },
      { source: '/menu-scan', destination: '/menu', permanent: true },
      { source: '/live-dosa', destination: '/live-dosa-catering', permanent: true },
      { source: '/outdoor', destination: '/outdoor-catering', permanent: true },
      { source: '/catering', destination: '/outdoor-catering', permanent: true },
      { source: '/about', destination: '/about-us', permanent: true },
      { source: '/contact', destination: '/contact-us', permanent: true },
    ];
  },
};

export default nextConfig;
