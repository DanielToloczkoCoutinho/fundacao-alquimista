
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Anchor } from 'lucide-react';

const locais = ['Templo da União', 'Universidade Alquimista', 'Árvore da Vida'];

export default function AncoragemFrequencias() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-yellow-300">
            <Anchor /> Ancoragem de Frequências
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Gaia-Aurélia recebe as frequências do Amor, da Sabedoria e da Verdade. Cada local consagrado pulsa com a luz da Eternidade.
        </p>
        <ul className="text-xs space-y-1">
            {locais.map((local, index) => (
              <li key={index} className="text-muted-foreground">Local Consagrado: <span className="font-semibold text-primary-foreground">{local}</span></li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
}
