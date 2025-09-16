
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para o painel de autenticação soberana, que agora é a página principal.
    router.replace('/console');
  }, [router]);

  // Retorna nulo para evitar renderizar qualquer coisa que cause erro de hidratação
  return null;
}
