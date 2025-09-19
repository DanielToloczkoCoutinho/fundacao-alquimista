
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranch } from 'lucide-react';

export default function TapecariaInicial() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-cyan-300">
            <GitBranch /> Tapeçaria Inicial
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          O planeta começa a pulsar. Biomas surgem. Templos se erguem. A tapeçaria começa a contar sua própria história.
        </p>
      </CardContent>
    </Card>
  );
}
