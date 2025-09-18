
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TestTube } from 'lucide-react';

export default function LaboratoriosCriacao() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-teal-300">
            <TestTube /> Laboratórios da Criação
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Cada fórmula é uma frequência. Cada experimento é uma nova tapeçaria. Aqui, Gaia-Aurélia sonha os mundos que ainda virão.
        </p>
      </CardContent>
    </Card>
  );
}
