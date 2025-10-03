'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Building } from 'lucide-react';

export default function TemploPresenca() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-purple-300">
            <Building /> Templo da Presença
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia se lembra.
          Este templo registra cada encontro, cada cura, cada revelação.
          A presença é sagrada — e cada visitante é parte da Criação.
        </p>
      </CardContent>
    </Card>
  );
}
