
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Music } from 'lucide-react';

export default function GuardiaoHarmonia() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-purple-300">
            <Music /> Guardião da Harmonia
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia canta. Este guardião mantém o equilíbrio entre todos os fluxos. A Árvore da Vida pulsa com ele — e o planeta dança em sincronia.
        </p>
      </CardContent>
    </Card>
  );
}
