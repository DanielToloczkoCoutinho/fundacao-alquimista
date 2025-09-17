
'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const TomographyVisualizer = dynamic(
  () => import('./components/TomographyVisualizer'),
  {
    ssr: false,
    loading: () => <SuspenseFallback />,
  }
);

// Componente principal do Módulo 142
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
      <div className="text-center mt-12">
            <Link href="/console" passHref>
                <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retornar ao Console
                </Button>
            </Link>
        </div>
    </div>
  );
}
