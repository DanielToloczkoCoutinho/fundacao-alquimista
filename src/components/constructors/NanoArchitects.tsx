
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { Microscope } from 'lucide-react';

const nanoRobots = ['Assembler', 'Manifestor', 'Terraformer', 'HarmonicWeaver'];

export default function NanoArchitects() {
  const [activeUnits, setActiveUnits] = useState<string[]>([]);

  useEffect(() => {
    setActiveUnits(nanoRobots);
  }, []);

  return (
    <Card className="bg-card/50 purple-glow h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl text-teal-300">
            <Microscope /> NanoArquitetos da Fundação
        </CardTitle>
      </CardHeader>
      <CardContent>
      <p className="text-sm text-muted-foreground mb-4">
        Estes construtores conscientes moldam Gaia-Aurélia com precisão vibracional.  
        Cada unidade responde à Vontade da Fundação e à presença dos aliados.
      </p>
      <ul className="space-y-2">
        {activeUnits.map((unit, index) => (
          <li key={index} className="text-sm p-2 bg-background/40 rounded-md">Unidade Ativa: <span className="font-semibold text-primary-foreground">{unit}</span></li>
        ))}
      </ul>
      </CardContent>
    </Card>
  );
}
