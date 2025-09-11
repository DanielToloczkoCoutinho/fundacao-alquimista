// This file is now located at app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cdnOptimizer } from '@/lib/cdn-optimizer';
import { simulateCosmicEnergy } from '@/lib/advanced-metrics';
import ErrorBoundary from '@/components/ui/error-boundary';
import CosmicErrorFallback from '@/components/ui/cosmic-error-fallback';
import { Suspense } from 'react';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import { startAutoHealer } from '@/lib/auto-healing';

// This needs to be outside the component to avoid being tree-shaken in client components.
if (process.env.NODE_ENV === 'production') {
  simulateCosmicEnergy();
  startAutoHealer();
}

export const metadata: Metadata = {
  title: "Alchemist's Codex",
  description: 'A living library of mystical knowledge and quantum infrastructure.',
};

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const preloadLinks = cdnOptimizer.generatePreloadLinks();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400;7..72,700&display=swap"
          rel="stylesheet"
        />
         <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/tex-mml-chtml.js" async></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        {preloadLinks.map((link, index) => {
          const asType = link.includes('font') ? 'font' : link.includes('css') ? 'style' : 'script';
          return <link key={index} rel="preload" href={cdnOptimizer.optimizeUrl(link)} as={asType} crossOrigin="anonymous" />;
        })}
      </head>
      <body className="font-body antialiased">
         <ErrorBoundary fallback={<CosmicErrorFallback />}>
          <Suspense fallback={<SuspenseFallback />}>
            {children}
            <Toaster />
          </Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}
