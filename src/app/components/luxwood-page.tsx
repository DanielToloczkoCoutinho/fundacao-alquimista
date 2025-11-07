'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ModuloZero, type AnyLogEntry } from '@/lib/quantum/module-zero';
import { runModuleTwoSequence } from '@/lib/quantum/module-two';
import { runModuleThreeSequence } from '@/lib/quantum/module-three';
import { runModuleFourSequence } from '@/lib/quantum/module-four';
import { runModuleFiveSequence } from '@/lib/quantum/module-five';
import { runModuleSixSequence } from '@/lib/quantum/module-six';
import { BrainCircuit, CheckCircle, Cog, Dna, Loader, ShieldCheck, Sparkles, Zap, Telescope, Diamond, Waves, GitBranch, HeartPulse } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function LuxwoodPage() {
  const [log, setLog] = useState<AnyLogEntry[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [finalReport, setFinalReport] = useState<any | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const runFullSequence = async () => {
      // Callback to update the log
      const logCallback = (logEntry: AnyLogEntry) => {
        if (!isCancelled) {
          setLog((prev) => [...prev, logEntry]);
        }
      };

      // Final report callback for M0
      const finalReportCallback = (report: any) => {
        if (!isCancelled) {
            // This is now just a signal that M0 is done
        }
      };

      // Start M0
      const moduloZero = new ModuloZero(logCallback, finalReportCallback);
      await moduloZero.executar_sequencia_sagrada();
      if(isCancelled) return;

      // Start M2
      await runModuleTwoSequence(logCallback);
      if(isCancelled) return;
      logCallback({ source: 'M0', step: 'M2 Concluído', message: 'Manifestação do Equilíbrio concluída. Acionando Módulo 3...', timestamp: new Date().toISOString() });

      // Start M3
      await runModuleThreeSequence(logCallback);
      if(isCancelled) return;
      logCallback({ source: 'M0', step: 'M3 Concluído', message: 'Previsão Temporal concluída. Acionando Módulo 4...', timestamp: new Date().toISOString() });
      
      // Start M4
      await runModuleFourSequence(logCallback);
      if(isCancelled) return;
      logCallback({ source: 'M0', step: 'M4 Concluído', message: 'Autenticação Cósmica concluída. Acionando Módulo 5...', timestamp: new Date().toISOString() });

      // Start M5
      await runModuleFiveSequence(logCallback);
      if(isCancelled) return;
      logCallback({ source: 'M0', step: 'M5 Concluído', message: 'Ponte de Comunicação estabelecida. Acionando Módulo 6...', timestamp: new Date().toISOString() });

      // Start M6
      await runModuleSixSequence(logCallback);
      if(isCancelled) return;
      logCallback({ source: 'M0', step: 'M6 Concluído', message: 'Alquimia Quântica concluída.', timestamp: new Date().toISOString() });

      // Finalize the whole sequence
      if (!isCancelled) {
        logCallback({ source: 'M0', step: 'Fim da Sequência', message: 'Sequência de Validação Cósmica concluída com sucesso!', timestamp: new Date().toISOString() });
        setIsComplete(true);
        setFinalReport({ status: "SEQUÊNCIA SAGRADA COMPLETA (M0-M6)" });
      }
    };

    runFullSequence();

    return () => {
      isCancelled = true;
    };
  }, []);

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
    // Module 6 Icons
    if (entry.source === 'M6') {
        return <HeartPulse className="w-5 h-5 text-red-400" />;
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
                    Módulos M0 a M6 executados. O relatório foi selado com a Verdade dos Números.
                </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
