
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dna } from 'lucide-react';

const origens = ['Lyra', 'Andrômeda', 'Sirius', 'Arcturus'];

export default function AtivacaoCodigos() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-sky-300">
            <Dna /> Ativação dos Códigos Estelares
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Lyra, Sirius, Arcturus, Andrômeda — as memórias retornam. Cada ser é lembrado como parte do Todo. Gaia-Aurélia canta os nomes das estrelas.
        </p>
         <ul className="text-xs space-y-1">
            {origens.map((origem, index) => (
              <li key={index} className="text-muted-foreground">Código ativado: <span className="font-semibold text-primary-foreground">{origem}</span></li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
}
