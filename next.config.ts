
import type { NextConfig } from 'next';
import createPWA from 'next-pwa';

const isProduction = process.env.NODE_ENV === 'production';
const assetPrefix = isProduction ? process.env.NEXT_PUBLIC_CDN_DOMAIN ? `https://${process.env.NEXT_PUBLIC_CDN_DOMAIN}` : '' : '';

const nextConfig: NextConfig = {
  assetPrefix,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    allowedDevOrigins: [
        "https://9000-firebase-studio-1757526779539.cluster-zhw3w37rxzgkutusbbhib6qhra.cloudworkstations.dev",
        "http://localhost:9002",
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'xr-spatial-tracking=(), camera=(), microphone=()',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'apod.nasa.gov',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'your-cdn-domain.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

const withPWA = createPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

export default withPWA(nextConfig);
