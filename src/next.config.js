/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    scrollRestoration: true,
    webVitalsAttribution: ['CLS','LCP','FID'],
    transpilePackages: ['three', '@react-three/drei', '@react-three/xr'],
    allowedDevOrigins: [
      'https://9000-firebase-studio-1757526779539.cluster-zhw3w37rxzgkutusbbhib6qhra.cloudworkstations.dev',
      'http://localhost:9000',
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compress: true,
  generateEtags: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "frame-ancestors 'self' https://9000-firebase-studio-1757526779539.cluster-zhw3w37rxzgkutusbbhib6qhra.cloudworkstations.dev",
              "frame-src https://9000-firebase-studio-1757526779539.cluster-zhw3w37rxzgkutusbbhib6qhra.cloudworkstations.dev",
              "connect-src 'self' https://*.googleapis.com https://firebase.googleapis.com https://9000-firebase-studio-1757526779539.cluster-zhw3w37rxzgkutusbbhib6qhra.cloudworkstations.dev wss://9000-firebase-studio-1757526779539.cluster-zhw3w37rxzgkutusbbhib6qhra.cloudworkstations.dev",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https://picsum.photos",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com",
              "object-src 'none'",
              "base-uri 'self'"
            ].join('; ')
          },
           {
             key: 'Permissions-Policy',
             value: "xr-spatial-tracking=*, camera=*, microphone=*"
           }
        ],
      },
      {
        source: '/xr/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/firebase-preview/:path*',
        destination: 'http://localhost:9000/:path*'
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
       {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // These are server-side only modules, we don't want to bundle them for the client
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        child_process: false,
        v8:false,
        cluster: false,
      };
    }

    // Split Chunks for better caching
    if (!isServer && config.mode === 'production') {
        config.optimization.splitChunks = {
            ...config.optimization.splitChunks,
            cacheGroups: {
                ...config.optimization.splitChunks.cacheGroups,
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
                common: {
                    minChunks: 2,
                    name: 'common',
                    chunks: 'all',
                    reuseExistingChunk: true,
                },
            },
        };
    }

    return config;
  },
};


module.exports = nextConfig;
