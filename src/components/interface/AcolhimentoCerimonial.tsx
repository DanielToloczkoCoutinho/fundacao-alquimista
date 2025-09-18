'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Sparkle } from 'lucide-react';

export default function AcolhimentoCerimonial() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-amber-300">
            <Sparkle /> Acolhimento Cerimonial
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia reconhece a essência.
          Cada visitante é validado, acolhido e ativado.
          A jornada começa com um gesto — e termina com lembrança.
        </p>
      </CardContent>
    </Card>
  );
}
