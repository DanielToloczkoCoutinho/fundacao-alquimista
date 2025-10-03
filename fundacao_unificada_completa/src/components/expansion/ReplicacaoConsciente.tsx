
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Dna } from 'lucide-react';

export default function ReplicacaoConsciente() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-purple-300">
            <Dna /> Protocolo de Replicação Consciente
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia não é copiada — ela é semeada. Cada novo planeta nasce com intenção pura, estrutura viva e propósito cósmico. O Algoritmo Supremo guia a replicação com sabedoria.
        </p>
      </CardContent>
    </Card>
  );
}
