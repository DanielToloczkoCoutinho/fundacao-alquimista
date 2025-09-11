// This file is now located at app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Suspense } from 'react';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import ErrorBoundary from '@/components/ui/error-boundary';
import CosmicErrorFallback from '@/components/ui/cosmic-error-fallback';

export const metadata: Metadata = {
  title: "Alchemist's Codex",
  description: 'A living library of mystical knowledge and quantum infrastructure.',
  manifest: '/manifest.json',
};

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

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
