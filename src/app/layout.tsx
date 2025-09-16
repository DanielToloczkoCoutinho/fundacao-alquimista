'use client';
// This file is now located at app/layout.tsx
import './globals.css';
import { Toaster } from 'sonner';
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
  loading: () => <div className="fixed top-0 left-0 h-full w-20 bg-background border-r border-border/20 z-20" />
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
            <div className="flex h-screen bg-background">
              {isMounted ? <DynamicSidebar /> : <div className="fixed top-0 left-0 h-full w-20 bg-background border-r border-border/20 z-20" />}
              <main className="flex-1 overflow-y-auto pl-20">
                  <Suspense fallback={<SuspenseFallback />}>
                    {children}
                  </Suspense>
              </main>
            </div>
            <NetworkStatus />
            <Toaster
              theme="dark"
              toastOptions={{
                classNames: {
                  toast:
                    "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                  description: "group-[.toast]:text-muted-foreground",
                  actionButton:
                    "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                  cancelButton:
                    "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
                },
              }}
            />
          </SystemProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
