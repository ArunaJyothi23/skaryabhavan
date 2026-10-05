import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
      { source: '/menu-scan', destination: '/menu', permanent: true },
    ];
  },
};

export default nextConfig;
