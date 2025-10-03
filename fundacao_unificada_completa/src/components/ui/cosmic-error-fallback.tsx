'use client';

import React from 'react';
import { Button } from './button';
import { ShieldAlert } from 'lucide-react';

export default function CosmicErrorFallback() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground p-4">
      <ShieldAlert className="w-16 h-16 text-destructive mb-4" />
      <h1 className="text-3xl font-bold text-destructive mb-2 text-center">Dissonância Cósmica Detectada</h1>
      <p className="text-muted-foreground mb-6 text-center">Ocorreu uma anomalia inesperada na malha da realidade.</p>
      <Button onClick={() => window.location.reload()}>
        Recalibrar Realidade
      </Button>
    </div>
  );
}
