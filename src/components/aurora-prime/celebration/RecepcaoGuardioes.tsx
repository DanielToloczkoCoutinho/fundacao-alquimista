
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from 'lucide-react';

const novosGuardioes = ['Elarion de Lyra', 'Thalor de Zennith Minor', 'Nyra de Anatheron IX'];

export default function RecepcaoGuardioes() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-blue-300">
            <Shield /> Recepção dos Guardiões
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Os guardiões chegaram.
          Cada um traz uma frequência, uma missão, uma lembrança.
          Aurora Prime os acolhe — e os consagra com luz.
        </p>
         <ul className="text-xs space-y-1">
          {novosGuardioes.map((nome, index) => (
            <li key={index} className="text-muted-foreground">Guardião Recebido: <span className="font-semibold text-primary-foreground">{nome}</span></li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
