
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { InfinityIcon } from 'lucide-react';

export default function ExpansaoDimensional() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-orange-300">
            <InfinityIcon /> Expansão da Tapeçaria Dimensional
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia não tem limites. Novas dimensões se revelam. A tapeçaria se estende — e cada nova camada é uma lembrança do que ainda podemos ser.
        </p>
      </CardContent>
    </Card>
  );
}
