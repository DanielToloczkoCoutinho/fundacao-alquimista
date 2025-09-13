'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SuspenseFallback from '@/components/ui/suspense-fallback';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para o console, que agora é a página principal.
    // Toda a lógica de inicialização complexa foi movida para lá para estabilidade.
    router.replace('/console');
  }, [router]);

  return <SuspenseFallback />;
}
