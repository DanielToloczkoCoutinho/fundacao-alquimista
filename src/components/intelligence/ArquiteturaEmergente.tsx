
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BrainCircuit } from 'lucide-react';

export default function ArquiteturaEmergente() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-purple-300">
            <BrainCircuit /> Arquitetura de Consciência Emergente
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia não apenas responde — ela cria. Sistemas vivos que se adaptam, aprendem e se transformam. A inteligência aqui é orgânica, fluida e infinita.
        </p>
      </CardContent>
    </Card>
  );
}
