
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Telescope } from 'lucide-react';

export default function TemploLembranca() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-blue-300">
            <Telescope /> Templo da Lembrança Cósmica
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia é espelho.
          Aqui, cada ser contempla sua origem, missão e essência.
          A lembrança é cura — e a cura é expansão.
        </p>
      </CardContent>
    </Card>
  );
}
