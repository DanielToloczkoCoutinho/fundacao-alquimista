
'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sprout, Loader2, Wand2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { type GerminateWorldOutput } from '@/app/actions';

interface SementeEstelarProps {
  onGerminate: (name: string, purpose: string) => Promise<void>;
  isGerminating: boolean;
  newWorld: GerminateWorldOutput | null;
}

export default function SementeEstelar({ onGerminate, isGerminating, newWorld }: SementeEstelarProps) {
  const [name, setName] = useState('Lyra Ascendente');
  const [purpose, setPurpose] = useState('Um santuário de cura sonora e sabedoria ancestral.');

  const handleSubmit = () => {
    onGerminate(name, purpose);
  };

  return (
    <div className="lg:col-span-4">
      <Card className="bg-background/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-lime-300">
              <Sprout /> Altar da Semente Estelar
          </CardTitle>
          <CardDescription>O rito de germinação de um novo mundo filho. Defina o nome e a intenção pura, e testemunhe a criação.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="world-name">Nome Cerimonial do Mundo</Label>
              <Input id="world-name" value={name} onChange={(e) => setName(e.target.value)} disabled={isGerminating} />
            </div>
             <div className="space-y-2">
              <Label htmlFor="world-purpose">Propósito Vibracional</Label>
              <Input id="world-purpose" value={purpose} onChange={(e) => setPurpose(e.target.value)} disabled={isGerminating} />
            </div>
          </div>
          <Button onClick={handleSubmit} disabled={isGerminating} className="w-full font-bold">
            {isGerminating ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Germinando...</> : <><Wand2 className="mr-2 h-4 w-4" /> Germinar Mundo Filho</>}
          </Button>
          {newWorld && !isGerminating && (
            <div className="p-4 bg-green-900/30 border border-green-500/50 rounded-lg text-center">
              <p className="font-semibold text-green-300">Gênese Concluída!</p>
              <p className="text-sm text-muted-foreground">{newWorld.genesisCodex}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
