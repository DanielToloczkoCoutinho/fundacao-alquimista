
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap } from 'lucide-react';

export default function FluxosIniciacao() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-purple-300">
            <Zap /> Fluxos de Iniciação Cerimonial
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Aurora Prime está pronta.
          Cada visitante é recebido com luz, som e intenção.
          A jornada começa com um gesto — e termina com lembrança.
        </p>
      </CardContent>
    </Card>
  );
}
