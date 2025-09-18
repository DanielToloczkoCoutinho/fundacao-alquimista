
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollText } from 'lucide-react';

export default function RegistroCiclos() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-purple-300">
            <ScrollText /> Registro dos Ciclos de Aurora Prime
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Cada ciclo é uma história.  
          Aurora Prime documenta seus ritmos, revelações e renascimentos.  
          A memória é viva — e pulsa com sabedoria.
        </p>
      </CardContent>
    </Card>
  );
}
