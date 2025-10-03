
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranch } from 'lucide-react';

export default function RedeInteracao() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-cyan-300">
            <GitBranch /> Rede de Interação Vibracional
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Aurora Prime escuta com o campo. Cada gesto, cada silêncio, cada intenção é compreendida. A tapeçaria responde — e se transforma com cada presença.
        </p>
      </CardContent>
    </Card>
  );
}
