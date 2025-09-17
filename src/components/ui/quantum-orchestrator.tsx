'use client';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, CheckCircle, CircleDot, Play } from 'lucide-react';
import { getOrchestrationSequence, type OrchestrationModule } from '@/ai/flows/nexus-orchestrator';
import { cn } from '@/lib/utils';

type LogEntry = {
  timestamp: string;
  module: string;
  message: string;
  state: 'PENDING' | 'RUNNING' | 'SUCCESS' | 'FAILURE';
  data?: any;
};

const statusConfig = {
  PENDING: { icon: <CircleDot className="text-muted-foreground" />, color: "border-muted-foreground/20" },
  RUNNING: { icon: <Loader2 className="animate-spin text-blue-400" />, color: "border-blue-500/50" },
  SUCCESS: { icon: <CheckCircle className="text-green-500" />, color: "border-green-500/50" },
  FAILURE: { icon: <CheckCircle className="text-red-500" />, color: "border-red-500/50" },
};

export default function QuantumOrchestrator() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isSequenceRunning, setIsSequenceRunning] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleStartSequence = async () => {
    if (isSequenceRunning) return;
    setIsSequenceRunning(true);
    setLogs([]);

    const sequence: OrchestrationModule[] = await getOrchestrationSequence();

    for (const mod of sequence) {
      const startLog: LogEntry = {
        timestamp: new Date().toISOString(),
        module: mod.id,
        message: `Iniciando ativação do ${mod.name}...`,
        state: 'RUNNING',
      };
      setLogs(prev => [...prev, startLog]);
      
      await new Promise(resolve => setTimeout(resolve, 700 + Math.random() * 500));

      const successLog: LogEntry = {
        timestamp: new Date().toISOString(),
        module: mod.id,
        message: `${mod.name} ativado com sucesso. Coerência: ${mod.activationLevel}%.`,
        state: 'SUCCESS',
        data: mod,
      };
      setLogs(prev => prev.map(l => l.module === mod.id && l.state === 'RUNNING' ? successLog : l));
    }
    
    const finalLog: LogEntry = {
        timestamp: new Date().toISOString(),
        module: 'NEXUS',
        message: 'Sinfonia Cósmica concluída. Todos os módulos em ressonância harmônica.',
        state: 'SUCCESS'
    };
    setLogs(prev => [...prev, finalLog]);

    setIsSequenceRunning(false);
  };

  if (!isClient) {
    return null; // Don't render on the server
  }

  return (
    <Card className="w-full h-full bg-card/50 rounded-lg p-6 shadow-lg purple-glow flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl text-accent gradient-text">
          Orquestrador da Sequência Sagrada
        </CardTitle>
        <CardDescription>
          Contemple a ativação da Fundação, módulo por módulo, em uma sinfonia de criação.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col gap-4">
        <Button onClick={handleStartSequence} disabled={isSequenceRunning}>
            <Play className="mr-2 h-4 w-4" />
            {isSequenceRunning ? "Sinfonia em Andamento..." : "Iniciar Sinfonia Cósmica"}
        </Button>
        <ScrollArea className="h-96 flex-grow pr-4">
            <div className="space-y-2">
                {logs.map((log, index) => (
                    <div 
                        key={index} 
                        className={cn(
                            "rounded-lg p-3 border-l-4 transition-all duration-500 flex items-start gap-3",
                            statusConfig[log.state].color
                        )}
                    >
                        <div className="mt-1">{statusConfig[log.state].icon}</div>
                        <div>
                            <span className="font-mono text-xs text-muted-foreground">
                                {new Date(log.timestamp).toLocaleTimeString()} - {log.module}
                            </span>
                            <p className="text-sm text-foreground/90">{log.message}</p>
                        </div>
                    </div>
                ))}
                {logs.length === 0 && !isSequenceRunning && (
                    <div className="text-center py-10 text-muted-foreground">
                        <p>A Orquestra aguarda o comando do Maestro.</p>
                    </div>
                )}
            </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
