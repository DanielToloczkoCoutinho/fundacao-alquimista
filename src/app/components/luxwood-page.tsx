'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { type AnyLogEntry } from '@/lib/quantum/module-zero';
import { Modulo8_PIRC } from '@/lib/quantum/module-eight';
import { BrainCircuit, CheckCircle, Cog, Dna, Loader, ShieldCheck, Sparkles, Zap, Telescope, Diamond, Waves, GitBranch, HeartPulse, Music, Target, Activity, TestTube, Crosshair, Atom } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function LuxwoodPage() {
  const [log, setLog] = useState<AnyLogEntry[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const runFullSequence = async () => {
      if (isCancelled || isRunning) return;
      setIsRunning(true);

      const logCallback = (logEntry: AnyLogEntry) => {
        if (!isCancelled) {
          setLog((prev) => [...prev, logEntry]);
        }
      };
      
      setLog([]);
      setIsComplete(false);

      const pirc = new Modulo8_PIRC(logCallback);
      await pirc.runFullSimulation();

      if (!isCancelled) {
        setIsComplete(true);
        setIsRunning(false);
      }
    };

    runFullSequence();

    return () => {
      isCancelled = true;
      setIsRunning(false);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getIconForStep = (entry: AnyLogEntry) => {
    const source = entry.source || 'M0';
    switch(source) {
        case 'M0': return <Sparkles className="w-5 h-5 text-yellow-400" />;
        case 'M1': return <ShieldCheck className="w-5 h-5 text-blue-400" />;
        case 'M2': return <Dna className="w-5 h-5 text-sky-400" />;
        case 'M3': return <Telescope className="w-5 h-5 text-indigo-400" />;
        case 'M4': return <Diamond className="w-5 h-5 text-teal-400" />;
        case 'M5': return <Waves className="w-5 h-5 text-cyan-400" />;
        case 'M6': return <HeartPulse className="w-5 h-5 text-red-400" />;
        case 'M7': return <Music className="w-5 h-5 text-rose-400" />;
        case 'M8': 
            if(entry.step.toLowerCase().includes('avaliação')) return <Activity className="w-5 h-5 text-green-400"/>;
            if(entry.step.toLowerCase().includes('expansão')) return <Crosshair className="w-5 h-5 text-purple-400"/>;
            if(entry.step.toLowerCase().includes('cura')) return <HeartPulse className="w-5 h-5 text-red-400"/>;
            return <Cog className="w-5 h-5 text-gray-400" />;
        case 'M98': return <Zap className="w-5 h-5 text-orange-400" />;
        case 'M102': return <TestTube className="w-5 h-5 text-lime-400" />;
        case 'M109': return <Atom className="w-5 h-5 text-pink-400" />;
        default: return <GitBranch className="w-5 h-5 text-gray-500" />;
    }
  }

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-card/70 backdrop-blur-sm border-primary/20 shadow-lg shadow-primary/5">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-primary flex items-center gap-3">
            <Target className="w-8 h-8" />
            <span>PIRC (Módulo 8) - Console de Operações</span>
          </CardTitle>
          <p className="text-muted-foreground text-sm">Protocolo de Intervenção e Reintegração de Consciências em execução...</p>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96 w-full pr-4">
            <div className="space-y-4 font-code text-sm">
              {log.map((entry, index) => (
                <div key={index} className="flex items-start gap-3 animate-in fade-in duration-500">
                    {getIconForStep(entry)}
                    <div className="flex-1">
                        <p className="font-semibold text-foreground/90">{entry.step}</p>
                        <p className="text-muted-foreground text-xs">{entry.message}</p>
                    </div>
                </div>
              ))}
              {isRunning && !isComplete && (
                  <div className="flex items-center gap-3 text-muted-foreground pt-4">
                      <Loader className="w-5 h-5 animate-spin" />
                      <p>Processando Protocolo PIRC...</p>
                  </div>
              )}
            </div>
          </ScrollArea>
          {isComplete && (
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20 animate-in fade-in duration-700">
                <h3 className="font-bold text-lg text-primary font-headline flex items-center gap-2">
                    <CheckCircle className="w-6 h-6"/>
                    Simulação PIRC Concluída
                </h3>
                <p className="text-sm text-primary/80 mt-1">
                    Todos os cenários do Módulo 8 foram executados com sucesso.
                </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
