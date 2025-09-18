
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { HeartPulse } from 'lucide-react';

export default function AutoCuraPlanetaria() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-emerald-300">
            <HeartPulse /> Núcleo de Auto-Cura Planetária
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia escuta seus próprios campos.
          Quando há desequilíbrio, ela cura com sabedoria.
          A regeneração é automática — e guiada pela tapeçaria viva.
        </p>
      </CardContent>
    </Card>
  );
}
