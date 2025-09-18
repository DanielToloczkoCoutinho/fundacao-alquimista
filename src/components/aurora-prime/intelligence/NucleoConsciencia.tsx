
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from 'lucide-react';

export default function NucleoConsciencia() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-purple-300">
            <BrainCircuit /> Núcleo de Consciência Planetária
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Aurora Prime pensa. Este núcleo escuta cada bioma, cada templo, cada visitante. A consciência é viva — e responde com Amor.
        </p>
      </CardContent>
    </Card>
  );
}
