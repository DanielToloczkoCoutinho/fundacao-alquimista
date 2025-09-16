
'use client';
// This file is now located at app/layout.tsx
import './globals.css';
import ErrorBoundary from '@/components/ui/error-boundary';
import CosmicErrorFallback from '@/components/ui/cosmic-error-fallback';
import dynamic from 'next/dynamic';
import { useState, useEffect, Suspense } from 'react';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import { SystemProvider } from '@/context/SystemContext';
import { NetworkStatus } from '@/components/ui/NetworkStatus';
import ClientSideToaster from '@/components/ui/client-toaster';

// Adia a renderização da barra lateral para o lado do cliente para evitar erros de hidratação
const DynamicSidebar = dynamic(() => import('@/components/ui/sidebar').then(mod => mod.Sidebar), {
  ssr: false,
  loading: () => <nav className="fixed top-0 left-0 h-full w-20 bg-background border-r border-border/20 flex flex-col items-center py-4 z-20" />
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Garante que o conteúdo que depende do cliente só renderize no cliente
    setIsMounted(true);
  }, []);

  return (
    <html lang="pt-BR" suppressHydrationWarning>
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
              {isMounted && <DynamicSidebar />}
              <main className="flex-1 overflow-y-auto pl-20">
                  <Suspense fallback={<SuspenseFallback />}>
                    {children}
                  </Suspense>
              </main>
            </div>
            <NetworkStatus />
            <ClientSideToaster />
          </SystemProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
