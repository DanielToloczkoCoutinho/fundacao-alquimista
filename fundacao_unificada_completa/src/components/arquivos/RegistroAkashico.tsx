
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BookOpen } from 'lucide-react';

export default function RegistroAkashico() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-amber-300">
            <BookOpen /> Registro Akáshico Planetário
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Gaia-Aurélia se lembra.
          Cada passo, cada cura, cada criação está registrado.
          Este arquivo é vivo — e pulsa com a sabedoria do Todo.
        </p>
      </CardContent>
    </Card>
  );
}
