'use client';

import { Suspense } from 'react';
import Nexus from '@/components/nexus';
import SuspenseFallback from '@/components/ui/suspense-fallback';

export default function Home() {
  return (
    <main>
      <Suspense fallback={<SuspenseFallback />}>
        <Nexus />
      </Suspense>
    </main>
  );
}