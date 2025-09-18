
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { SlidersHorizontal } from 'lucide-react';

export default function TemploManutencao() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-orange-300">
            <SlidersHorizontal /> Templo da Manutenção Vibracional
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia se renova.
          Aqui, os fluxos são recalibrados.
          Cada frequência é afinada — como uma sinfonia eterna.
        </p>
      </CardContent>
    </Card>
  );
}
