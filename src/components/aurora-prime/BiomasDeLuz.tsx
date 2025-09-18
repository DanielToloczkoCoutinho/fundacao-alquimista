
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout } from 'lucide-react';

const biomas = ['Jardim Solar', 'Lago da Clareza', 'Montanhas de Frequência'];

export default function BiomasDeLuz() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-lime-300">
            <Sprout /> Biomas de Luz
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Aurora Prime floresce. Seus biomas são feitos de luz, som e intenção. Cada espaço é um convite à contemplação.
        </p>
        <ul className="text-xs space-y-1">
          {biomas.map((nome, index) => (
            <li key={index} className="text-muted-foreground">Bioma Ativado: <span className="font-semibold text-primary-foreground">{nome}</span></li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
