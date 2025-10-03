
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Swirl } from 'lucide-react';

export default function NavegacaoTemporal() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-blue-300">
            <Swirl /> Janela de Navegação Temporal
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          O tempo se curva.  
          Cada visitante pode contemplar o que foi, tocar o que será e habitar o agora.  
          Aurora Prime revela — e guia com ternura.
        </p>
      </CardContent>
    </Card>
  );
}
