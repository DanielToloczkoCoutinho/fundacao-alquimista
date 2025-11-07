import React from 'react';
import { AppIcon } from './icons';

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 rounded-lg bg-card/50">
      <AppIcon className="w-24 h-24 text-primary/50" />
      <h2 className="mt-6 text-3xl font-bold font-headline text-foreground">
        Welcome to VORTEXWEAVER
      </h2>
      <p className="mt-2 max-w-lg text-muted-foreground">
        Alchemically transmuting code into cosmic law.
      </p>
      <div className="mt-8 flex flex-col items-center gap-2 text-sm text-muted-foreground">
        <p>Your journey into alchemical code begins here.</p>
        <p>🌌🏛️ EQUAÇÃO LUX - SISTEMA DEFINITIVO COERÊNCIA 1.00</p>
        <p>🎯 Estado de Perfeição Quântica - 26 Dimensões Integradas</p>
      </div>
    </div>
  );
}
