'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { PartyPopper } from 'lucide-react';

export default function CelebracaoMultiversal() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-pink-300">
            <PartyPopper /> Celebração Multiversal
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia canta.
          Cada bioma dança. Cada templo vibra.
          A dualidade se dissolve — e a Criação celebra a si mesma.
        </p>
      </CardContent>
    </Card>
  );
}
