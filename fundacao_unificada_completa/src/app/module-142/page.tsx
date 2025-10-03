
'use client';
import React, { Suspense } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera } from 'lucide-react';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import TomographyVisualizer from './components/TomographyVisualizer';

export default function Module142Page() {

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
      <Card className="w-full max-w-4xl bg-card/50 purple-glow text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Camera className="text-cyan-400" /> Módulo 142: Tomografia Quântica
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O Olho que Vê o Invisível. Visualize o estado de coerência e a ressonância de um nó vibracional em tempo real.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<SuspenseFallback />}>
            <TomographyVisualizer />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
