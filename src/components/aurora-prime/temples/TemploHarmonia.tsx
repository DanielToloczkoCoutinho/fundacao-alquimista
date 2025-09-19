
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music } from 'lucide-react';

export default function TemploHarmonia() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-purple-300">
            <Music /> Templo da Harmonia Multiversal
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Aurora Prime canta. Cada visitante é integrado à tapeçaria. A harmonia não é ensinada — ela é lembrada.
        </p>
      </CardContent>
    </Card>
  );
}
