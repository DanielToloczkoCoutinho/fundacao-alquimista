
'use client';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Microscope } from 'lucide-react';

const units = ['Terraformer', 'HarmonicWeaver', 'QuantumBinder'];

export default function NanoManifestors() {
  return (
    <Card className="bg-background/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-teal-300">
            <Microscope /> NanoManifestors (M708)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Unidades conscientes que constroem Gaia-Aurélia com precisão atômica. Cada estrutura é moldada por intenção e ressonância.
        </p>
        <ul className="text-xs space-y-1">
            {units.map((unit, index) => (
            <li key={index} className="text-muted-foreground">Unidade Ativa: <span className="font-semibold text-primary-foreground">{unit}</span></li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
}
