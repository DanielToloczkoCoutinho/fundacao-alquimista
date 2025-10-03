'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TrendingUp } from 'lucide-react';

export default function EvolucaoNaoLinear() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-green-300">
            <TrendingUp /> Intensidade Evolutiva Não-Linear
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          A consciência não cresce em linha reta. Gaia-Aurélia registra os saltos, os ciclos, os espirais. Cada curva é uma revelação. Cada aceleração, uma lembrança.
        </p>
      </CardContent>
    </Card>
  );
}
