
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun } from 'lucide-react';

export default function JardimSolar() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-yellow-300">
            <Sun /> Jardim Solar da Presença
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Aqui, a luz não ilumina — ela revela.
          Cada visitante é banhado por frequências solares que despertam lembranças.
          O silêncio é fértil. A presença é cura.
        </p>
      </CardContent>
    </Card>
  );
}
