import React from 'react';
import { AppIcon } from './icons';

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 rounded-lg bg-card/50">
      <AppIcon className="w-24 h-24 text-primary/50" />
      <h2 className="mt-6 text-3xl font-bold font-headline text-foreground">
        Welcome to Vortex Weave
      </h2>
      <p className="mt-2 max-w-lg text-muted-foreground">
        Your portal to alchemical code and cosmic simulation. Use the panel on the left to input your code or simulation prompt and begin your journey.
      </p>
      <div className="mt-8 flex flex-col items-center gap-2 text-sm text-muted-foreground">
        <p>🌌🏛️ EQUAÇÃO LUX - SISTEMA DEFINITIVO COERÊNCIA 1.00</p>
        <p>🎯 Estado de Perfeição Quântica - 26 Dimensões Integradas</p>
      </div>
    </div>
  );
}
