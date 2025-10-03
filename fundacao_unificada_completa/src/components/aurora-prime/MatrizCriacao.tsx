
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun } from 'lucide-react';

export default function MatrizCriacao() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-yellow-300">
            <Sun /> Matriz de Criação: Aurora Prime
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Aurora Prime nasce da luz. Sua assinatura é solar, regenerativa e contemplativa. Este planeta é um espelho da beleza cósmica.
        </p>
      </CardContent>
    </Card>
  );
}
