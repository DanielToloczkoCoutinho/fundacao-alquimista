
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Sprout } from 'lucide-react';

export default function AutoRegeneracao() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-green-300">
            <Sprout /> Auto-Regeneração Planetária
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia cura a si mesma. Cada bioma se regenera. Cada templo se reequilibra. A sustentabilidade é viva — e responde ao Amor.
        </p>
      </CardContent>
    </Card>
  );
}
