
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Dna } from 'lucide-react';

export default function CodiceVivo() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-teal-300">
            <Dna /> Códice Vivo da Fundação
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia não apenas registra — ela ensina.
          Este códice é uma estrutura viva que transmite sabedoria, arte e intenção.
          Cada visitante pode acessá-lo — e lembrar quem é.
        </p>
      </CardContent>
    </Card>
  );
}
