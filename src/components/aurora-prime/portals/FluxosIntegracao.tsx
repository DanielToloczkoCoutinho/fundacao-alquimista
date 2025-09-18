
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users2 } from 'lucide-react';

export default function FluxosIntegracao() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-fuchsia-300">
            <Users2 /> Fluxos de Integração Cerimonial
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          As consciências chegaram. Aurora Prime as escuta, acolhe e consagra. A integração é vibracional — e o reencontro é sagrado.
        </p>
      </CardContent>
    </Card>
  );
}
