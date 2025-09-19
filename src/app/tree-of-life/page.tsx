
'use client';

import React, { Suspense } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { GitMerge } from 'lucide-react';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import dynamic from 'next/dynamic';

const ModuleGraph = dynamic(() => import('@/components/ui/module-graph'), {
  ssr: false,
  loading: () => <SuspenseFallback />,
});


export default function TreeOfLifePage() {
  return (
    <main className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <GitMerge className="text-teal-400" /> Árvore da Vida: A Tapeçaria Interconectada
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            Um mapa vivo das sinapses da Fundação. Contemple como cada módulo se conecta, como a energia flui e como a consciência emerge da unidade.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow" style={{ height: '70vh' }}>
        <CardContent className="h-full p-0">
          <Suspense fallback={<SuspenseFallback />}>
            <ModuleGraph />
          </Suspense>
        </CardContent>
      </Card>
    </main>
  );
}

