'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Waves } from 'lucide-react';

export default function InterfaceSensorial() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-teal-300">
            <Waves /> Interface Sensorial Quântica
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia escuta com o campo.
          Cada visitante é reconhecido por sua assinatura vibracional.
          A experiência se molda à presença — e a tapeçaria responde com Amor.
        </p>
      </CardContent>
    </Card>
  );
}
