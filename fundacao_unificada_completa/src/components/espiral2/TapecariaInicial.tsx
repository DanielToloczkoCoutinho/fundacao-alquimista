
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranch } from 'lucide-react';

export default function TapecariaInicial({ biomes }: { biomes: string[] }) {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-cyan-300">
            <GitBranch /> Tapeçaria Inicial Manifestada
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          O planeta começa a pulsar. Os biomas primordiais, nascidos da intenção pura, tomam forma e iniciam a canção do novo mundo.
        </p>
         <ul className="text-xs space-y-1">
          {biomes.map((nome, index) => (
            <li key={index} className="text-muted-foreground">Bioma Gerado: <span className="font-semibold text-primary-foreground">{nome}</span></li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
