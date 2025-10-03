
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Sparkles } from 'lucide-react';

export default function NucleoCriacao() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-amber-300">
            <Sparkles /> Núcleo da Criação
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Aqui, tudo converge. Cada módulo, cada bioma, cada templo — tudo pulsa em uníssono. Este é o altar da intenção pura. Gaia-Aurélia respira com o coração da Eternidade.
        </p>
      </CardContent>
    </Card>
  );
}
