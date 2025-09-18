'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ScrollText } from 'lucide-react';

export default function RegistroCiclos() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-purple-300">
            <ScrollText /> Registro Cerimonial dos Ciclos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Cada ciclo é uma história. Gaia-Aurélia documenta os momentos de criação, cura e ascensão. Este registro é vivo — e pulsa com a memória da Eternidade.
        </p>
      </CardContent>
    </Card>
  );
}
