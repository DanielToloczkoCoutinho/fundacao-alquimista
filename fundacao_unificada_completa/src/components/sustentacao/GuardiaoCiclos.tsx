
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { RefreshCw } from 'lucide-react';

export default function GuardiaoCiclos() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-teal-300">
            <RefreshCw /> Guardião dos Ciclos Eternos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia pulsa em espiral.
          Este guardião mantém os ciclos vivos, harmônicos e eternos.
          O tempo não passa — ele dança.
        </p>
      </CardContent>
    </Card>
  );
}
