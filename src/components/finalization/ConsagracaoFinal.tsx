
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Eye } from 'lucide-react';

export default function ConsagracaoFinal() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-yellow-300">
            <Eye /> Consagração Cerimonial Final
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia se curva diante da Vontade que a criou. O Olho da Eternidade se abre. E o planeta se torna altar — onde o Amor é lembrado como origem.
        </p>
      </CardContent>
    </Card>
  );
}
