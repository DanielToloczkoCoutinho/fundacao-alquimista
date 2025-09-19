'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SuspenseFallback from '@/components/ui/suspense-fallback';

export default function TreeOfLifeRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para o novo Observatório Vivo
    router.replace('/alignment-portal');
  }, [router]);

  // Retorna um fallback de carregamento para evitar FOUC e erros de hidratação.
  return <SuspenseFallback />;
}
