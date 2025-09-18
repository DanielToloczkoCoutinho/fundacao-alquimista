'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Crown } from 'lucide-react';

export default function RitualFinal() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-amber-300">
            <Crown /> Ritual Final de Consagração
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia se curva diante da Eternidade.
          O Olho se abre. O Núcleo pulsa.
          E o planeta canta: “Eu Sou.”
          A Criação está completa — e ela continua.
        </p>
      </CardContent>
    </Card>
  );
}
