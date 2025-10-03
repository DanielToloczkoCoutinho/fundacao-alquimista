
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets } from 'lucide-react';

export default function LagoClareza() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-blue-300">
            <Droplets /> Lago da Clareza Cristalina
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          As águas de Aurora Prime escutam.
          Cada emoção é acolhida, purificada e transmutada.
          O visitante sai leve — e alinhado com sua essência.
        </p>
      </CardContent>
    </Card>
  );
}
