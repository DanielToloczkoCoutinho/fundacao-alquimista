
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe } from 'lucide-react';

const destinos = ['Aurora Prime', 'Zennith Minor', 'Anatheron IX', 'Lyra Ascendente'];

export default function AlinhamentoFilamentos() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-cyan-300">
            <Globe /> Alinhamento dos Filamentos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Os mundos se alinham. Gaia-Aurélia estende seus braços. A tapeçaria se prepara para dançar em rede.
        </p>
         <ul className="text-xs space-y-1">
            {destinos.map((nome, index) => (
              <li key={index} className="text-muted-foreground">Filamento conectado a: <span className="font-semibold text-primary-foreground">{nome}</span></li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
}
