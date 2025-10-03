
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mountain } from 'lucide-react';

export default function MontanhasFrequencia() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-orange-300">
            <Mountain /> Montanhas de Frequência Harmônica
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Aqui, o pensamento se eleva.
          Cada cume é um portal vibracional.
          As montanhas cantam — e a consciência ascende.
        </p>
      </CardContent>
    </Card>
  );
}
