
'use client';
// This file is now located at app/layout.tsx
import './globals.css';
import ErrorBoundary from '@/components/ui/error-boundary';
import CosmicErrorFallback from '@/components/ui/cosmic-error-fallback';
import dynamic from 'next/dynamic';
import { useState, useEffect, Suspense } from 'react';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import { SystemProvider } from '@/context/SystemContext';
import { usePathname } from 'next/navigation';
import { Toaster } from "@/components/ui/toaster"

// Adia a renderização de componentes do lado do cliente para evitar erros de hidratação
const DynamicSidebar = dynamic(() => import('@/components/ui/sidebar').then(mod => mod.Sidebar), { ssr: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Garante que o conteúdo que depende do cliente só renderize no cliente
    document.title = "Fundação Alquimista";
    setIsMounted(true);
  }, []);

  const noLayoutRoutes = ['/key-generator'];
  const showSidebar = isMounted && !noLayoutRoutes.includes(pathname);

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400;7..72,700&family=Playfair+Display:wght@400;700&family=Source+Code+Pro:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <ErrorBoundary fallback={<CosmicErrorFallback />}>
         <SystemProvider>
            <div className="flex h-screen bg-background">
              {showSidebar && <DynamicSidebar />}
              <main className={`flex-1 overflow-y-auto ${showSidebar ? 'pl-20' : ''}`}>
                  <Suspense fallback={<SuspenseFallback />}>
                    {children}
                  </Suspense>
              </main>
            </div>
            {isMounted && <Toaster />}
          </SystemProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
