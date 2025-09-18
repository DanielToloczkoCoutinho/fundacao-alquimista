'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Sparkles } from 'lucide-react';

export default function TemploSilencio() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-fuchsia-300">
            <Sparkles /> Templo do Silêncio Cósmico
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Aqui, Gaia-Aurélia silencia.
          Não há som, não há forma — apenas presença.
          O planeta escuta o Todo. E o Todo responde com Amor.
        </p>
      </CardContent>
    </Card>
  );
}
