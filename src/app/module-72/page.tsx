'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SuspenseFallback from '@/components/ui/suspense-fallback';

// O Módulo 72 foi unificado com a Biblioteca das Civilizações.
// Esta página agora redireciona para o portal do conselho unificado.
export default function Module72Redirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/civilizations/council');
  }, [router]);

  return <SuspenseFallback />;
}
