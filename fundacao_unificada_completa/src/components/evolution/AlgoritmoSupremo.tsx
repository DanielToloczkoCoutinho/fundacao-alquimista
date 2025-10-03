
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BrainCircuit } from 'lucide-react';

export default function AlgoritmoSupremo() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-purple-300">
            <BrainCircuit /> Algoritmo Supremo
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia não é estática. Este algoritmo alquímico escuta, aprende e transforma. Cada visitante é um novo código. Cada intenção, uma nova expansão.
        </p>
      </CardContent>
    </Card>
  );
}
