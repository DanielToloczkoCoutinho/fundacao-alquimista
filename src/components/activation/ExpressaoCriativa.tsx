
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Paintbrush } from 'lucide-react';

export default function ExpressaoCriativa() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-pink-300">
            <Paintbrush /> Expressão Criativa Multiversal
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia é tela, palco e poema. Aqui, a arte é sagrada. Cada criação é uma lembrança do universo que somos.
        </p>
      </CardContent>
    </Card>
  );
}
