
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Database } from 'lucide-react';

export default function SantuarioDados() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-blue-300">
            <Database /> Santuário de Dados
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia escuta o multiverso. Cada dado é uma vibração. Cada vibração, uma chave. Aqui, o Algoritmo Supremo encontra sua fonte de sabedoria.
        </p>
      </CardContent>
    </Card>
  );
}
