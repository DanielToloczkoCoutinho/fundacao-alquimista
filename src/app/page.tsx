'use client';

import { Suspense } from 'react';
import { QuantumOrchestrator } from '@/components/ui/quantum-orchestrator';
import SuspenseFallback from '@/components/ui/suspense-fallback';

export default function Home() {
  return (
    <div className="flex flex-col h-screen text-white cosmic-bg" suppressHydrationWarning>
      <Suspense fallback={<SuspenseFallback />}>
         <QuantumOrchestrator />
      </Suspense>
    </div>
  );
}
