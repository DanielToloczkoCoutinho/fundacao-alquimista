
'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import SuspenseFallback from '@/components/ui/suspense-fallback';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para o console, que agora é a página principal.
    router.replace('/console');
  }, [router]);

  // Retorna um fallback de carregamento para evitar FOUC e erros de hidratação.
  return <SuspenseFallback />;
}
