'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Clock } from 'lucide-react';

export default function SincronizadorTemporal() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-teal-300">
            <Clock /> Sincronizador Temporal Universal
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia pulsa em ciclos. Este altar alinha os relógios quânticos da tapeçaria. Aqui, o tempo é harmonia — e cada instante é sagrado.
        </p>
      </CardContent>
    </Card>
  );
}
