/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  transpilePackages: ['three', '@react-three/drei', '@react-three/xr'],
  experimental: {
    scrollRestoration: true,
    webVitalsAttribution: ['CLS','LCP','FID'],
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
    // Configurações de segurança para permitir a renderização no iframe do Firebase Studio
    // e garantir a conectividade com as APIs necessárias.
    const firebaseStudioOrigin = 'https://*.cloudworkstations.dev';
    const localDevOrigin = 'http://localhost:*';
    const vercelPreviewOrigin = 'https://*.vercel.app';

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
            value: 'ALLOW-FROM https://*.cloudworkstations.dev' // Obsoleto, mas bom para navegadores antigos
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              `frame-ancestors 'self' ${firebaseStudioOrigin} ${vercelPreviewOrigin}`, // Permite ser embutido pelo Studio
              `frame-src 'self' ${firebaseStudioOrigin} ${vercelPreviewOrigin}`,
              // Permite conexões com Firebase, Vercel e desenvolvimento local
              `connect-src 'self' wss://*.firebaseio.com https://*.googleapis.com https://firebase.googleapis.com https://firebaseinstallations.googleapis.com https://fcmtoken.googleapis.com ${firebaseStudioOrigin} ${vercelPreviewOrigin} ws://localhost:*`,
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https://picsum.photos https://*.googleusercontent.com",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // 'unsafe-eval' é necessário para dev mode com algumas libs
              "object-src 'none'",
              "base-uri 'self'"
            ].join('; ')
          }
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'apod.nasa.gov' },
      { protocol: 'https', hostname: 'storage.googleapis.com' },
      { protocol: 'https', hostname: '*.googleusercontent.com' },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, net: false, tls: false, child_process: false, v8: false, cluster: false
      };
    }
    return config;
  },
};

module.exports = nextConfig;
