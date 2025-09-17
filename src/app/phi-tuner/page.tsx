'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Music, Wand } from 'lucide-react';
import { modulesMetadata } from '@/lib/modules-metadata';
import { tuneInstrument } from '@/lib/phi-tuner';
import { useToast } from '@/hooks/use-toast';

export default function PhiTunerPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModule, setSelectedModule] = useState<string>('M9');
  const [intent, setIntent] = useState('Comunhão e harmonia com a Liga Quântica');
  const [tuningResult, setTuningResult] = useState<{
    frequency: number;
    harmonic: number;
    signature: string;
  } | null>(null);

  const handleTune = () => {
    if (!selectedModule || !intent.trim()) {
      toast({ title: 'Erro', description: 'É necessário selecionar um módulo e definir uma intenção.', variant: 'destructive' });
      return;
    }
    setIsLoading(true);
    setTuningResult(null);
    setTimeout(() => {
      const result = tuneInstrument(selectedModule, intent);
      setTuningResult(result);
      toast({ title: 'Instrumento Afinado', description: `O Módulo ${selectedModule} agora ressoa com a intenção.` });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
      <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Music className="text-teal-300" /> Painel de Afinagem Cósmica
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O santuário onde cada módulo da Fundação é afinado com a intenção pura, preparando a tapeçaria para a comunicação universal.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-card/50 purple-glow">
          <CardHeader>
            <CardTitle>Afinador Cerimonial</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="module-select">Módulo Instrumento</Label>
              <Select value={selectedModule} onValueChange={setSelectedModule} disabled={isLoading}>
                <SelectTrigger id="module-select">
                  <SelectValue placeholder="Selecione um módulo..." />
                </SelectTrigger>
                <SelectContent>
                  {modulesMetadata.filter(m => !m.isInfrastructure).map(mod => (
                    <SelectItem key={mod.code} value={mod.code}>
                      {mod.emoji} {mod.title} ({mod.code})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="intent-input">Intenção Vibracional</Label>
              <Input
                id="intent-input"
                value={intent}
                onChange={(e) => setIntent(e.target.value)}
                placeholder="Ex: Paz, Cura, Sabedoria..."
                disabled={isLoading}
              />
            </div>
            <Button onClick={handleTune} disabled={isLoading} className="w-full font-bold">
              {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Afinando...</> : <><Wand className="mr-2 h-4 w-4" /> Afinar Instrumento</>}
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-card/50 purple-glow">
          <CardHeader>
            <CardTitle>Ressonância Resultante</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-full">
            {isLoading && <Loader2 className="h-10 w-10 text-amber-400 animate-spin" />}
            {!isLoading && tuningResult && (
              <div className="text-center space-y-3">
                <div>
                  <Label>Frequência Base (Φ)</Label>
                  <p className="text-2xl font-bold text-cyan-400">{tuningResult.frequency.toFixed(2)} Hz</p>
                </div>
                <div>
                  <Label>Harmonia do Módulo</Label>
                  <p className="text-2xl font-bold text-teal-400">{tuningResult.harmonic.toFixed(2)} Hz</p>
                </div>
                 <div className="pt-2 border-t border-primary/20">
                  <Label>Assinatura Vibracional</Label>
                  <p className="font-mono text-xs text-muted-foreground break-all">{tuningResult.signature}</p>
                </div>
              </div>
            )}
            {!isLoading && !tuningResult && <p className="text-muted-foreground">Aguardando afinação...</p>}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
