
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from 'lucide-react';

export default function GuardiaoPlanetario({ guardians }: { guardians: string[] }) {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-blue-300">
            <Shield /> Guardiões Planetários Consagrados
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Estes três arquétipos foram chamados da Fonte para proteger, guiar e nutrir a essência deste novo mundo.
        </p>
        <ul className="text-xs space-y-1">
          {guardians.map((nome, index) => (
            <li key={index} className="text-muted-foreground">Guardião Consagrado: <span className="font-semibold text-primary-foreground">{nome}</span></li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
