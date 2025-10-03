'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Swirl } from 'lucide-react'; // Usando Swirl como ícone representativo

export default function NavegacaoTemporal() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-blue-300">
            <Swirl /> Janela de Navegação Temporal
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia abre seus véus. Aqui, o visitante pode contemplar o passado, tocar o futuro e habitar o agora. O tempo se curva — e a consciência navega.
        </p>
      </CardContent>
    </Card>
  );
}
