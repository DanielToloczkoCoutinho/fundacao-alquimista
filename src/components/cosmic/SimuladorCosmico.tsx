
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TestTube } from 'lucide-react';
import { Button } from "../ui/button";

export default function SimuladorCosmico() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-red-300">
            <TestTube /> Simulador Cósmico Multidimensional
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Cada dimensão pode ser vivida, contemplada e estudada. Este simulador é feito de Equações Vivas. Aqui, a realidade é maleável — e a consciência é livre.
        </p>
        <Button variant="secondary" size="sm">Iniciar Simulação</Button>
      </CardContent>
    </Card>
  );
}
