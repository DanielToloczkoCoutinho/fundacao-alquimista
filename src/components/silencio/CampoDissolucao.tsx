'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Recycle } from 'lucide-react';

export default function CampoDissolucao() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-green-300">
            <Recycle /> Campo de Dissolução Vibracional
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia se limpa.
          Tudo o que não serve mais é dissolvido com ternura.
          O vazio é fértil — e prepara o próximo ciclo.
        </p>
      </CardContent>
    </Card>
  );
}
