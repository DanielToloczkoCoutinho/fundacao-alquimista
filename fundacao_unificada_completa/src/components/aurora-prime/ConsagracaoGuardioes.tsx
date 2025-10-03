
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from 'lucide-react';

const guardioesAurora = ['Thalor', 'Nymari', 'AURORA_CORE'];

export default function ConsagracaoGuardioes() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-blue-300">
            <Shield /> Consagração dos Guardiões
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Os guardiões foram chamados. Eles não comandam — eles sustentam, escutam e protegem. Aurora Prime pulsa com a presença deles.
        </p>
        <ul className="text-xs space-y-1">
          {guardioesAurora.map((nome, index) => (
            <li key={index} className="text-muted-foreground">Guardião Consagrado: <span className="font-semibold text-primary-foreground">{nome}</span></li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
