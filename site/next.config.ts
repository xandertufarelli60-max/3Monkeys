import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/arsenal',
        destination: '/noleggio',
        permanent: true,
      },
      {
        source: '/the-arsenal',
        destination: '/noleggio',
        permanent: true,
      },
      {
        source: '/the-arsenal/:path*',
        destination: '/noleggio',
        permanent: true,
      },
      {
        source: '/works',
        destination: '/produzioni',
        permanent: true,
      },
      {
        source: '/works/:path*',
        destination: '/produzioni',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

