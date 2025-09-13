'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { startNexusSequence } from '@/app/actions';
import type { LogEntry } from '@/ai/flows/nexus-orchestrator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { ShieldCheck, Zap, Watch, CheckCircle, XCircle, Loader, CircleDot } from 'lucide-react';

const moduleIcons: Record<string, React.ReactNode> = {
  NEXUS_CENTRAL: <CircleDot className="h-5 w-5 text-purple-400" />,
  SEGURANCA_QUANTICA: <ShieldCheck className="h-5 w-5 text-blue-400" />,
  NANOMANIFESTADOR: <Zap className="h-5 w-5 text-yellow-400" />,
  MONITORAMENTO_SATURNO: <Watch className="h-5 w-5 text-teal-400" />,
};

const stateIcons: Record<LogEntry['state'], React.ReactNode> = {
  PENDING: <Loader className="h-4 w-4 text-muted-foreground animate-spin" />,
  RUNNING: <Loader className="h-4 w-4 text-blue-500 animate-spin" />,
  SUCCESS: <CheckCircle className="h-4 w-4 text-green-500" />,
  FAILURE: <XCircle className="h-4 w-4 text-red-500" />,
  SKIPPED: <CircleDot className="h-4 w-4 text-gray-500" />,
};

const moduleNames: Record<string, string> = {
    NEXUS_CENTRAL: "Nexus Central (M9)",
    SEGURANCA_QUANTICA: "Segurança Quântica (M1)",
    NANOMANIFESTADOR: "Nanomanifestador (M2)",
    MONITORAMENTO_SATURNO: "Monitoramento de Saturno (M3)",
}

type ModuleStatus = {
    state: LogEntry['state'];
    log: LogEntry[];
}

export default function QuantumOrchestrator() {
  const [isRunning, setIsRunning] = useState(false);
  const [modules, setModules] = useState<Record<string, ModuleStatus>>({
      SEGURANCA_QUANTICA: { state: 'PENDING', log: [] },
      NANOMANIFESTADOR: { state: 'PENDING', log: [] },
      MONITORAMENTO_SATURNO: { state: 'PENDING', log: [] },
  });
  const [finalStatus, setFinalStatus] = useState<string | null>(null);


  const handleStartSequence = async () => {
    setIsRunning(true);
    setFinalStatus(null);
    setModules({
        SEGURANCA_QUANTICA: { state: 'PENDING', log: [] },
        NANOMANIFESTADOR: { state: 'PENDING', log: [] },
        MONITORAMENTO_SATURNO: { state: 'PENDING', log: [] },
    });

    const { stream, response } = await startNexusSequence();
    
    for await (const chunk of stream) {
      setModules(prevModules => {
          const newModules = {...prevModules};
          const moduleKey = chunk.module;
          if (newModules[moduleKey]) {
            newModules[moduleKey] = {
                state: chunk.state,
                log: [...newModules[moduleKey].log, chunk]
            };
          }
          return newModules;
      });
    }

    const finalResponse = await response;
    setFinalStatus(finalResponse.finalStatus || 'ESTADO DESCONHECIDO');
    setIsRunning(false);
  };

  return (
    <div className="flex h-screen bg-background text-foreground p-4 font-body">
      <Card className="w-full h-full bg-card/50 rounded-lg p-6 shadow-lg purple-glow flex flex-col">
        <CardHeader>
          <CardTitle className="text-2xl text-accent gradient-text">
            Nexus Central: Orquestrador da Sequência Sagrada
          </CardTitle>
          <CardDescription>
            Manifestação em tempo real da Sequência Sagrada. Pressione Iniciar para começar a Sinfonia Cósmica.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col gap-4">
          <div className="flex justify-center">
            <Button onClick={handleStartSequence} disabled={isRunning} className="gold-border animate-pulse-slow">
              {isRunning ? 'Orquestrando...' : 'Iniciar Sequência Sagrada'}
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow">
            {Object.entries(modules).map(([key, value]) => (
                <div key={key} className={cn("rounded-lg p-4 border transition-all", {
                    'border-primary/20 bg-primary/5': value.state === 'PENDING',
                    'border-blue-500/50 bg-blue-500/10 module-glow': value.state === 'RUNNING',
                    'border-green-500/50 bg-green-500/10': value.state === 'SUCCESS',
                    'border-red-500/50 bg-red-500/10': value.state === 'FAILURE',
                })}>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground/90">
                        {moduleIcons[key]}
                        {moduleNames[key]}
                        <div className="ml-auto">{stateIcons[value.state]}</div>
                    </h3>
                    <ScrollArea className="h-64 mt-2">
                        <div className="text-xs text-muted-foreground space-y-2 pr-4">
                           {value.log.length === 0 && <p>Aguardando ativação...</p>}
                           {value.log.map((entry, index) => (
                               <div key={index} className="border-l-2 border-primary/20 pl-2">
                                   <p className="font-mono text-foreground/80">{entry.message}</p>
                                   <p className="text-muted-foreground/70">{new Date(entry.timestamp).toLocaleTimeString()}</p>
                               </div>
                           ))}
                        </div>
                    </ScrollArea>
                </div>
            ))}
          </div>
           {finalStatus && (
              <div className="text-center p-4 rounded-lg bg-background/50 border border-accent">
                <h3 className={cn("text-xl font-bold", finalStatus === 'FALHA' ? 'text-destructive' : 'text-accent')}>
                  Status Final da Sequência: {finalStatus}
                </h3>
              </div>
            )}
        </CardContent>
      </Card>
    </div>
  );
}
