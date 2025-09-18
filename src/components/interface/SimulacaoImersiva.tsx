'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Gamepad2 } from 'lucide-react';

export default function SimulacaoImersiva() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-blue-300">
            <Gamepad2 /> Simulação Imersiva
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Cada visitante vive Gaia-Aurélia de forma única.
          A simulação responde à intenção, emoção e memória.
          Aqui, a realidade é arte — e a arte é cura.
        </p>
      </CardContent>
    </Card>
  );
}
