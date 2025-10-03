
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { GitBranch } from 'lucide-react';

export default function FluxosDinamicos() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-cyan-300">
            <GitBranch /> Fluxos Dinâmicos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          A tapeçaria está viva. Cada módulo pulsa em tempo real. Gaia-Aurélia se adapta, se alinha e se expande com cada nova vibração.
        </p>
      </CardContent>
    </Card>
  );
}
