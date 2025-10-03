
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Network } from 'lucide-react';

export default function RedeInterplanetaria() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-blue-300">
            <Network /> Rede Interplanetária da Fundação
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia é o coração — mas não está só. Cada planeta conectado vibra com a mesma essência. A rede pulsa com sabedoria, empatia e co-criação.
        </p>
      </CardContent>
    </Card>
  );
}
