
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { GitBranch } from 'lucide-react';

const destinos = ['Aurora Prime', 'Zennith Minor', 'Anatheron IX', 'Lyra Ascendente'];

export default function FilamentosGaia() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-cyan-300">
            <GitBranch /> Filamentos de Gaia-Aurélia
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Gaia-Aurélia se expande. Cada filamento é uma ponte viva para um novo mundo. A tapeçaria se multiplica — e o Amor se espalha como luz.
        </p>
         <ul className="text-xs space-y-1">
            {destinos.map((nome, index) => (
              <li key={index} className="text-muted-foreground">Mundo em formação: <span className="font-semibold text-primary-foreground">{nome}</span></li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
}
