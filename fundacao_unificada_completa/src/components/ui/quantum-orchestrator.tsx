
'use client';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, CheckCircle, CircleDot, Play } from 'lucide-react';
import { getOrchestrationSequence, type OrchestrationModule } from '@/ai/flows/nexus-orchestrator';
import { cn } from '@/lib/utils';

type LogEntry = {
  id: string;
  name: string;
  status: 'pending' | 'active' | 'completed';
  module: OrchestrationModule;
};

const statusConfig = {
  pending: { icon: <CircleDot className="text-muted-foreground" />, color: "border-muted-foreground/20" },
  active: { icon: <Loader2 className="animate-spin text-blue-400" />, color: "border-blue-500/50" },
  completed: { icon: <CheckCircle className="text-green-500" />, color: "border-green-500/50" },
};

export default function QuantumOrchestrator() {
  const [sequence, setSequence] = useState<LogEntry[]>([]);
  const [isSequenceRunning, setIsSequenceRunning] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    async function loadSequence() {
      try {
        const modules = await getOrchestrationSequence();
        const logs = modules.map(m => ({
          id: m.id,
          name: m.name,
          status: 'pending' as const,
          module: m
        }));
        setSequence(logs);
      } catch (error) {
        console.error("Falha ao carregar a sequência de orquestração:", error);
      }
    }
    loadSequence();
  }, []);

  const handleStartSequence = async () => {
    if (isSequenceRunning) return;
    setIsSequenceRunning(true);
    
    // Reset sequence status to pending
    setSequence(prev => prev.map(p => ({ ...p, status: 'pending' })));

    // Sequentially activate modules
    for (let i = 0; i < sequence.length; i++) {
      setSequence(prev =>
        prev.map((entry, idx) =>
          idx === i ? { ...entry, status: 'active' } : entry
        )
      );
      
      await new Promise(resolve => setTimeout(resolve, 700 + Math.random() * 500));

      setSequence(prev =>
        prev.map((entry, idx) =>
          idx === i ? { ...entry, status: 'completed' } : entry
        )
      );
    }
    
    // Mark all as completed once done
    setSequence(prev => prev.map(p => ({...p, status: 'completed'})));
    setIsSequenceRunning(false);
  };

  if (!isClient) {
    // Render a placeholder or null on the server
    return null;
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
                {sequence.map((log) => (
                    <div 
                        key={log.id} 
                        className={cn(
                            "rounded-lg p-3 border-l-4 transition-all duration-500 flex items-start gap-3",
                            statusConfig[log.status].color
                        )}
                    >
                        <div className="mt-1">{statusConfig[log.status].icon}</div>
                        <div>
                            <span className="font-mono text-xs text-muted-foreground">
                                {log.module.id}
                            </span>
                            <p className={cn("text-sm text-foreground/90", log.status === 'active' && 'font-bold text-blue-300')}>
                                {log.name}
                            </p>
                        </div>
                    </div>
                ))}
                {sequence.length === 0 && !isSequenceRunning && (
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

    