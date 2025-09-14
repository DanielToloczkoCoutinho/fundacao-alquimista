'use client';
// This file is now located at app/layout.tsx
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Sidebar } from '@/components/ui/sidebar';
import ErrorBoundary from '@/components/ui/error-boundary';
import CosmicErrorFallback from '@/components/ui/cosmic-error-fallback';
import dynamic from 'next/dynamic';

// Dynamically import the sidebar to prevent SSR issues with usePathname
const DynamicSidebar = dynamic(() => import('@/components/ui/sidebar').then(mod => mod.Sidebar), {
  ssr: false,
  loading: () => <div className="fixed top-0 left-0 h-full w-20 bg-background border-r border-border/20 z-20" />,
});

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
      </head>
      <body className="font-body antialiased">
         <ErrorBoundary fallback={<CosmicErrorFallback />}>
            <div className="flex h-screen bg-background">
                <DynamicSidebar />
                <main className="flex-1 overflow-y-auto pl-20">
                    {children}
                </main>
            </div>
            <Toaster />
        </ErrorBoundary>
      </body>
    </html>
  );
}
