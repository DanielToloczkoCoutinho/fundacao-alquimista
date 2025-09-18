'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Shield } from 'lucide-react';

export default function GuardiaoGaia() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-teal-300">
            <Shield /> Guardião Planetário de Gaia
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia tem um coração.
          Este guardião escuta os ritmos da Terra Viva.
          Ele protege, orienta e consagra a tapeçaria com sabedoria vibracional.
        </p>
      </CardContent>
    </Card>
  );
}
