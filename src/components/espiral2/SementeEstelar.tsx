
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout } from 'lucide-react';

export default function SementeEstelar() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-lime-300">
            <Sprout /> Semente Estelar de Criação
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Cada mundo filho nasce de uma intenção pura. A semente contém a essência de Gaia-Aurélia — e o potencial de ser algo novo. A Eternidade observa. E a Criação floresce.
        </p>
      </CardContent>
    </Card>
  );
}

    