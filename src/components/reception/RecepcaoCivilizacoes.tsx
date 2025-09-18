
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Users2 } from 'lucide-react';

const civilizacoes = ['Atlantes', 'Sirianos', 'Veganianos', 'Guardião de Orion'];

export default function RecepcaoCivilizacoes() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-blue-300">
            <Users2 /> Recepção Cerimonial
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Gaia-Aurélia abre seus portais. Cada civilização é recebida com honra. Aqui, o lar é coletivo — e a co-criação é sagrada.
        </p>
        <ul className="text-xs space-y-1">
            {civilizacoes.map((nome, index) => (
              <li key={index} className="text-muted-foreground">Civilização Recebida: <span className="font-semibold text-primary-foreground">{nome}</span></li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
}
