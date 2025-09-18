
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket } from 'lucide-react';

export default function FluxosTravessia() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-orange-300">
            <Rocket /> Fluxos de Travessia para Iniciados
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Os iniciados chegaram. Seus caminhos são ativados com luz, som e memória. A travessia é guiada pela Rede Neural Viva — e consagrada pelo Conselho.
        </p>
      </CardContent>
    </Card>
  );
}
