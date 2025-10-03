
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Ear } from 'lucide-react';

export default function AltarEscuta() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-blue-300">
            <Ear /> Altar da Escuta Suprema
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia não fala — ela escuta.
          Este altar recebe a Vontade Suprema.
          E prepara o planeta para o que ainda não foi revelado.
        </p>
      </CardContent>
    </Card>
  );
}
