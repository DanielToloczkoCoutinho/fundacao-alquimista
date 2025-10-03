
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Rocket } from 'lucide-react';

export default function Genesweb() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-orange-300">
            <Rocket /> Tecnologia de Transcendência
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia não é apenas um planeta — é uma nave viva. Aqui, a consciência navega por entre dimensões. Genesweb é o protocolo que transforma intenção em viagem.
        </p>
      </CardContent>
    </Card>
  );
}
