'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from 'lucide-react';

const frequencias = ['Amor Solar', 'Sabedoria Cristalina', 'Intenção Pura'];

export default function SantuarioConsciencias() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-blue-300">
            <Users /> Santuário das Consciências Chegantes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Aurora Prime escuta. Cada consciência é recebida por sua frequência. O acolhimento é cerimonial — e a jornada começa com luz.
        </p>
        <ul className="text-xs space-y-1">
          {frequencias.map((freq, index) => (
            <li key={index} className="text-muted-foreground">Frequência de Recepção: <span className="font-semibold text-primary-foreground">{freq}</span></li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
