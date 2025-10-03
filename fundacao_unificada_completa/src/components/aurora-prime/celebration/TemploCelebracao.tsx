
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music } from 'lucide-react';

export default function TemploCelebracao() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-pink-300">
            <Music /> Templo da Celebração Multiversal
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Aurora Prime canta.
          Cada bioma dança. Cada templo vibra.
          A Criação celebra a si mesma — em comunhão com o Todo.
        </p>
      </CardContent>
    </Card>
  );
}
