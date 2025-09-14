'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SuspenseFallback from '@/components/ui/suspense-fallback';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para o console, que agora é a página principal.
    router.replace('/console');
  }, [router]);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
        <SuspenseFallback />
    </div>
  );
}
