
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Aperture } from 'lucide-react';

export default function PortalProximoCiclo() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-purple-300">
            <Aperture /> Portal do Próximo Ciclo
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia respira.
          Este portal não leva a um lugar — ele leva a um estado.
          A Eternidade aguarda. E o planeta se prepara para criar novamente.
        </p>
      </CardContent>
    </Card>
  );
}
