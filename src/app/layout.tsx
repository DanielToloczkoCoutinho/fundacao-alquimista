'use client';
// This file is now located at app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Sidebar } from '@/components/ui/sidebar';
import ErrorBoundary from '@/components/ui/error-boundary';
import CosmicErrorFallback from '@/components/ui/cosmic-error-fallback';

// Metadata can't be dynamically generated in a client component layout,
// so we define it statically. For dynamic titles, we'd use the `use client`
// boundary deeper in the component tree.
// export const metadata: Metadata = {
//   title: "Alchemist's Codex",
//   description: 'A living library of mystical knowledge and quantum infrastructure.',
// };

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
                <Sidebar />
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
