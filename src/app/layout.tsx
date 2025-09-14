// This file is now located at app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Sidebar } from '@/components/ui/sidebar';

export const metadata: Metadata = {
  title: "Alchemist's Codex",
  description: 'A living library of mystical knowledge and quantum infrastructure.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
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
      </head>
      <body className="font-body antialiased">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 ml-20">
            {children}
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
