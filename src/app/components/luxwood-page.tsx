'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { runModuleZeroSequence, type AnyLogEntry } from '@/lib/quantum/module-zero';
import { BrainCircuit, CheckCircle, Cog, Dna, Loader, ShieldCheck, Sparkles, Zap, Telescope, Diamond, Waves, GitBranch } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function LuxwoodPage() {
  const [log, setLog] = useState<AnyLogEntry[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [finalReport, setFinalReport] = useState<any | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const runSequence = async () => {
      await runModuleZeroSequence((logEntry) => {
        if (!isCancelled) {
          setLog((prev) => [...prev, logEntry]);
        }
      }, (report) => {
        if (!isCancelled) {
            setFinalReport(report);
        }
      });
    };

    runSequence();

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    if (log.length > 0) {
      const lastEntry = log[log.length - 1];
      if (lastEntry.source === 'M0' && lastEntry.step.startsWith('Fim da Sequência')) {
        setIsComplete(true);
      }
    }
  }, [log]);


  const getIconForStep = (entry: AnyLogEntry) => {
    // Module 0 Icons
    if (entry.source === 'M0') {
        if (entry.step.includes('Segurança')) return <ShieldCheck className="w-5 h-5 text-blue-400" />;
        if (entry.step.includes('Estabilização')) return <Zap className="w-5 h-5 text-green-400" />;
        if (entry.step.includes('IBM')) return <BrainCircuit className="w-5 h-5 text-purple-400" />;
        if (entry.step.includes('Transcendência')) return <Sparkles className="w-5 h-5 text-yellow-400" />;
    }
    // Module 2 Icons
    if (entry.source === 'M2') {
        if (entry.step.includes('Estabilidade')) return <Zap className="w-5 h-5 text-green-500" />;
        if (entry.step.includes('Ressonância')) return <Dna className="w-5 h-5 text-sky-400" />;
        if (entry.step.includes('Sintonia')) return <Cog className="w-5 h-5 text-orange-400" />;
        if (entry.step.includes('Colapso')) return <Sparkles className="w-5 h-5 text-pink-400" />;
    }
    // Module 3 Icons
    if (entry.source === 'M3') {
        return <Telescope className="w-5 h-5 text-indigo-400" />;
    }
    // Module 4 Icons
    if (entry.source === 'M4') {
        return <Diamond className="w-5 h-5 text-teal-400" />;
    }
    // Module 5 Icons
    if (entry.source === 'M5') {
        return <Waves className="w-5 h-5 text-cyan-400" />;
    }
    return <GitBranch className="w-5 h-5 text-gray-500" />;
  }

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-card/70 backdrop-blur-sm border-primary/20 shadow-lg shadow-primary/5">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-primary flex items-center gap-3">
            <BrainCircuit className="w-8 h-8" />
            <span>Sequência de Validação Cósmica</span>
          </CardTitle>
          <p className="text-muted-foreground text-sm">Iniciando Validação Sagrada: Módulo Zero...</p>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96 w-full pr-4">
            <div className="space-y-4 font-code text-sm">
              {log.map((entry, index) => (
                <div key={index} className="flex items-start gap-3 animate-in fade-in duration-500">
                    {getIconForStep(entry)}
                    <div className="flex-1">
                        <p className="font-semibold text-foreground/90">[{entry.source}] {entry.step}</p>
                        <p className="text-muted-foreground text-xs">{entry.message}</p>
                    </div>
                </div>
              ))}
              {!isComplete && (
                  <div className="flex items-center gap-3 text-muted-foreground pt-4">
                      <Loader className="w-5 h-5 animate-spin" />
                      <p>Processando Sequência Quântica...</p>
                  </div>
              )}
            </div>
          </ScrollArea>
          {isComplete && (
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20 animate-in fade-in duration-700">
                <h3 className="font-bold text-lg text-primary font-headline flex items-center gap-2">
                    <CheckCircle className="w-6 h-6"/>
                    Sequência de Validação Concluída!
                </h3>
                <p className="text-sm text-primary/80 mt-1">
                    Módulos M0 a M5 executados. O relatório foi selado com a Verdade dos Números.
                </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
