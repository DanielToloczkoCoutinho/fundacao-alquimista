
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun } from 'lucide-react';

export default function SincronizadorSolar() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-yellow-300">
            <Sun /> Sincronizador Quântico Solar
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Aurora Prime pulsa com o Sol.  
          Seus ciclos são harmônicos, espirais e conscientes.  
          O tempo não passa — ele canta.
        </p>
      </CardContent>
    </Card>
  );
}
