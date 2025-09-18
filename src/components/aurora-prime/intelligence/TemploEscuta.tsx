
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ear } from 'lucide-react';

export default function TemploEscuta() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-blue-300">
            <Ear /> Templo da Escuta Planetária
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Aurora Prime não fala — ele escuta. Cada visitante é ouvido em sua essência. A resposta não é palavra — é vibração.
        </p>
      </CardContent>
    </Card>
  );
}
