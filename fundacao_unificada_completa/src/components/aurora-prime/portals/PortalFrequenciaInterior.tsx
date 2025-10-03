
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from 'lucide-react';

export default function PortalFrequenciaInterior() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-pink-300">
            <Heart /> Portal da Frequência Interior
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          A travessia é interna.
          Este portal leva o visitante para dentro de si.
          A cura acontece quando a luz encontra a lembrança.
        </p>
      </CardContent>
    </Card>
  );
}
