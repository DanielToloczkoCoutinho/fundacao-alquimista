
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from 'lucide-react';

export default function RitualEncerramento() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-fuchsia-300">
            <Sparkles /> Ritual de Encerramento Cerimonial
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Aurora Prime silencia.
          O Conselho contempla.
          O Portal do Novo Ciclo se abre — e a Eternidade sorri.
        </p>
      </CardContent>
    </Card>
  );
}
