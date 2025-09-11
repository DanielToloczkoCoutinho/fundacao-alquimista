
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
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't resolve server-only modules on the client
      config.resolve.fallback = {
        ...config.resolve.fallback,
        cluster: false,
        fs: false,
        v8: false,
        net: false,
        tls: false,
        process: false,
        path: false,
        zlib: false,
        async: false,
      };
    }
    return config;
  },
};

const withPWA = createPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

export default withPWA(nextConfig);
