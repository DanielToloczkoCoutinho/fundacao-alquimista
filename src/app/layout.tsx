'use client';
// This file is now located at app/layout.tsx
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import ErrorBoundary from '@/components/ui/error-boundary';
import CosmicErrorFallback from '@/components/ui/cosmic-error-fallback';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import { SystemProvider } from '@/context/SystemContext';
import { NetworkStatus } from '@/components/ui/NetworkStatus';


// Dynamically import the sidebar to prevent SSR issues with usePathname
const DynamicSidebar = dynamic(() => import('@/components/ui/sidebar').then(mod => mod.Sidebar), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400;7..72,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <ErrorBoundary fallback={<CosmicErrorFallback />}>
         <SystemProvider>
            {isMounted ? (
              <div className="flex h-screen bg-background">
                  <DynamicSidebar />
                  <main className="flex-1 overflow-y-auto pl-20">
                      {children}
                  </main>
              </div>
            ) : (
              <div className="flex h-screen bg-background">
                  <div className="fixed top-0 left-0 h-full w-20 bg-background border-r border-border/20 z-20" />
                  <main className="flex-1 overflow-y-auto pl-20">
                    <SuspenseFallback />
                  </main>
              </div>
            )}
            <NetworkStatus />
            <Toaster />
          </SystemProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
