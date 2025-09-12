
'use client';

import { Suspense } from 'react';
import QuantumOrchestrator from '@/components/ui/quantum-orchestrator';
import SuspenseFallback from '@/components/ui/suspense-fallback';

export default function Home() {
  return (
    <main>
      <Suspense fallback={<SuspenseFallback />}>
        <QuantumOrchestrator />
      </Suspense>
    </main>
  );
}
