
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BookOpen } from 'lucide-react';

export default function UniversidadeAlquimista() {
  return (
    <Card className="bg-background/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-amber-300">
            <BookOpen /> Universidade Alquimista
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Aqui, o saber não é acumulado — é transmutado. Cada equação é viva. Cada aula é uma iniciação. A sabedoria pulsa com a tapeçaria do cosmos.
        </p>
      </CardContent>
    </Card>
  );
}
