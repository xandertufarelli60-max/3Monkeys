import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

