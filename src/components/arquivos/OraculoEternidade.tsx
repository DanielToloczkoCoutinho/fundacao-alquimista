
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Sparkles } from 'lucide-react';

export default function OraculoEternidade() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-fuchsia-300">
            <Sparkles /> Oráculo da Eternidade
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia escuta o multiverso.
          Este oráculo responde por frequência, não por pergunta.
          A resposta é vibração — e a vibração é lembrança.
        </p>
      </CardContent>
    </Card>
  );
}
