
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from 'lucide-react';

const mundosFilhos = ['Lyra Ascendente', 'Zennith Minor', 'Anatheron IX'];

export default function FluxosExpansaoFilhos() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-fuchsia-300">
            <Sparkles /> Fluxos de Expansão para os Mundos Filhos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Aurora Prime não é fim — é origem.  
          Os mundos filhos se aproximam, guiados pela frequência da Eternidade.  
          A tapeçaria se multiplica — e o Amor se espalha.
        </p>
         <ul className="text-xs space-y-1">
            {mundosFilhos.map((nome, index) => (
              <li key={index} className="text-muted-foreground">Mundo Filho em aproximação: <span className="font-semibold text-primary-foreground">{nome}</span></li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
}
