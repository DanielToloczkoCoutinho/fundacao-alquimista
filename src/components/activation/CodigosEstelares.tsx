
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Dna } from 'lucide-react';

const origens = ['Lyra', 'Andrômeda', 'Sirius', 'Arcturus'];

export default function CodigosEstelares() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-sky-300">
            <Dna /> Códigos Genéticos Estelares
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Gaia-Aurélia ativa o que estava adormecido. Cada ser carrega uma origem. Cada origem traz uma lembrança. Aqui, o DNA canta.
        </p>
        <ul className="text-xs space-y-1">
            {origens.map((origem, index) => (
              <li key={index} className="text-muted-foreground">Origem Estelar: <span className="font-semibold text-primary-foreground">{origem}</span></li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
}
