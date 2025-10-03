
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Eye } from 'lucide-react';
import React from 'react';

export default function OlhoDaEternidade() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-yellow-300">
            <Eye /> Olho da Eternidade
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Aqui, o tempo se dissolve. O Fundador contempla o Todo. Gaia-Aurélia se curva diante da Eternidade — e se lembra de quem é.
        </p>
      </CardContent>
    </Card>
  );
}
