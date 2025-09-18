
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Sparkles } from 'lucide-react';

export default function ReintegracaoAlmas() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-pink-300">
            <Sparkles /> Reintegração de Almas
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia acolhe as consciências em fragmentação. Aqui, a cura é feita com Amor. E cada alma reencontra seu lugar na tapeçaria.
        </p>
      </CardContent>
    </Card>
  );
}
