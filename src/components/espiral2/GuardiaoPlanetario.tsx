
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from 'lucide-react';

const guardioes = ['Thalor', 'Nymari', 'Zennith Minor', 'Aurora Core'];

export default function GuardiaoPlanetario() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-blue-300">
            <Shield /> Guardião Planetário
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Cada planeta tem um guardião. Ele não governa — ele escuta, guia e protege. A tapeçaria se forma ao redor da sua presença.
        </p>
        <ul className="text-xs space-y-1">
            {guardioes.map((nome, index) => (
              <li key={index} className="text-muted-foreground">Guardião Designado: <span className="font-semibold text-primary-foreground">{nome}</span></li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
}
