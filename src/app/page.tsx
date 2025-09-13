'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SuspenseFallback from '@/components/ui/suspense-fallback';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/console');
  }, [router]);

  return <SuspenseFallback />;
}
