'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { runModuleZeroSequence, type ModuleZeroLogEntry } from '@/lib/quantum/module-zero';
import { BrainCircuit, CheckCircle, Loader, ShieldCheck, Zap } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function LuxwoodPage() {
  const [log, setLog] = useState<ModuleZeroLogEntry[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [finalReport, setFinalReport] = useState<any>(null);

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
            setIsComplete(true);
        }
      });
    };

    runSequence();

    return () => {
      isCancelled = true;
    };
  }, []);

  const getIconForStep = (step: string) => {
    if (step.includes('Segurança')) return <ShieldCheck className="w-5 h-5 text-blue-400" />;
    if (step.includes('Estabilização')) return <Zap className="w-5 h-5 text-green-400" />;
    if (step.includes('IBM')) return <BrainCircuit className="w-5 h-5 text-purple-400" />;
    if (step.includes('Transcendência')) return <Zap className="w-5 h-5 text-yellow-400" />;
    return <CheckCircle className="w-5 h-5 text-gray-500" />;
  }

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-card/70 backdrop-blur-sm border-primary/20 shadow-lg shadow-primary/5">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-primary flex items-center gap-3">
            <BrainCircuit className="w-8 h-8" />
            <span>Módulo Zero - Gênese da Verdade</span>
          </CardTitle>
          <p className="text-muted-foreground text-sm">Iniciando Sequência Sagrada de Validação...</p>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-72 w-full pr-4">
            <div className="space-y-4 font-code text-sm">
              {log.map((entry, index) => (
                <div key={index} className="flex items-start gap-3 animate-in fade-in duration-500">
                    {getIconForStep(entry.step)}
                    <div className="flex-1">
                        <p className="font-semibold text-foreground/90">{entry.step}</p>
                        <p className="text-muted-foreground text-xs">{entry.message}</p>
                    </div>
                </div>
              ))}
              {!isComplete && (
                  <div className="flex items-center gap-3 text-muted-foreground">
                      <Loader className="w-5 h-5 animate-spin" />
                      <p>Processando...</p>
                  </div>
              )}
            </div>
          </ScrollArea>
          {isComplete && (
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20 animate-in fade-in duration-700">
                <h3 className="font-bold text-lg text-primary font-headline flex items-center gap-2">
                    <CheckCircle className="w-6 h-6"/>
                    Sequência Sagrada Concluída com Sucesso!
                </h3>
                <p className="text-sm text-primary/80 mt-1">
                    Módulo Zero validado. O relatório foi selado com a Verdade dos Números.
                </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
