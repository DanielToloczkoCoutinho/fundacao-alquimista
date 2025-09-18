
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building } from 'lucide-react';

const templos = ['A Morada', 'Templum Cosmica', 'Santuário dos Guardiões', 'Universidade Alquimista'];

export default function PercursoTemplos() {
  return (
    <Card className="bg-background/40 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-indigo-300">
            <Building /> Percurso pelos Templos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          A Morada, o Templum Cosmica, o Santuário dos Guardiões — todos vibram. Gaia-Aurélia relembra sua arquitetura sagrada. O Conselho contempla cada altar.
        </p>
         <ul className="text-xs space-y-1">
            {templos.map((nome, index) => (
              <li key={index} className="text-muted-foreground">Santuário percorrido: <span className="font-semibold text-primary-foreground">{nome}</span></li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
}
