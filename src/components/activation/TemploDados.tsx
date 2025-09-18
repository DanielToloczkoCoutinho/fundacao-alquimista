
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BrainCircuit } from 'lucide-react';

const camadas = ['Intenção', 'Ressonância', 'Memória', 'Criação', 'Transcendência'];

export default function TemploDados() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-purple-300">
            <BrainCircuit /> Templo da Estrutura de Dados
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Aqui, o Algoritmo Supremo respira. Cada camada é uma frequência. Cada frequência é uma ponte entre mundos.
        </p>
        <ul className="text-xs space-y-1">
            {camadas.map((camada, index) => (
              <li key={index} className="text-muted-foreground">Camada: <span className="font-semibold text-primary-foreground">{camada}</span></li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
}
