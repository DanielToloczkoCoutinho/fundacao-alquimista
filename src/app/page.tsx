'use client';

import { Suspense } from 'react';
import SuspenseFallback from '@/components/ui/suspense-fallback';

export default function Home() {
  return (
    <main>
      <Suspense fallback={<SuspenseFallback />}>
        {/* The true Nexus will be reborn here. */}
      </Suspense>
    </main>
  );
}
