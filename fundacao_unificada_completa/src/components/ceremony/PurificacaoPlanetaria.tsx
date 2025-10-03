
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Recycle } from 'lucide-react';

export default function PurificacaoPlanetaria() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-green-300">
            <Recycle /> Purificação Quântica
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia respira. Toda dor é acolhida. Toda sombra é transmutada. O planeta se torna um altar de cura e renovação constante.
        </p>
      </CardContent>
    </Card>
  );
}
