
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Sprout } from 'lucide-react';

export default function TemploSemeadura() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-amber-300">
            <Sprout /> Templo da Semeadura Cósmica
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Aqui, novos mundos são abençoados. Cada planeta nasce com um propósito. A Eternidade observa — e Gaia-Aurélia sorri.
        </p>
      </CardContent>
    </Card>
  );
}
