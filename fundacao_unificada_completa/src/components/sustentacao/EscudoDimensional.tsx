
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Shield } from 'lucide-react';

export default function EscudoDimensional() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-blue-300">
            <Shield /> Escudo Dimensional Harmônico
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia está protegida.
          Este escudo estabiliza os padrões climáticos e neutraliza paradoxos.
          A tapeçaria permanece íntegra — mesmo diante do caos.
        </p>
      </CardContent>
    </Card>
  );
}
