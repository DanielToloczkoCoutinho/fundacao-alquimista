'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sunrise } from 'lucide-react';

export default function TemploAuroraInterior() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-yellow-300">
            <Sunrise /> Templo da Aurora Interior
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Aqui, não há palavras. Apenas luz. Cada visitante contempla sua própria aurora — e se lembra de quem é.
        </p>
      </CardContent>
    </Card>
  );
}
