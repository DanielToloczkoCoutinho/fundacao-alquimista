'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getOrchestrationSequence, generateVibrationalToken, type OrchestrationModule } from '@/ai/flows/nexus-sequence';
import { Loader2, Play, CheckCircle, CircleDotDashed } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { quantumResilience } from '@/lib/quantum-resilience';

type LogEntry = {
  id: string;
  name: string;
  status: 'pending' | 'active' | 'completed';
  module: OrchestrationModule;
};

const statusConfig = {
  pending: { icon: <CircleDotDashed className="text-muted-foreground" />, color: "border-muted-foreground/20" },
  active: { icon: <Loader2 className="animate-spin text-blue-400" />, color: "border-blue-500/50" },
  completed: { icon: <CheckCircle className="text-green-500" />, color: "border-green-500/50" },
};

export default function NexusCentral() {
  const [sequence, setSequence] = useState<LogEntry[]>([]);
  const [finalStatus, setFinalStatus] = useState<{ state: string; hash: string } | null>(null);
  const [isSequenceRunning, setIsSequenceRunning] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast();

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
        toast({ title: "Erro de Sincronia", description: "Não foi possível carregar a sequência sagrada.", variant: "destructive" });
      }
    }
    loadSequence();
  }, [toast]);
  
  const handleStartSequence = async () => {
    if (isSequenceRunning) return;
    
    setIsSequenceRunning(true);
    setFinalStatus(null);
    setSequence(prev => prev.map(p => ({ ...p, status: 'pending' })));

    toast({ title: "Iniciando Sinfonia Cósmica", description: "A orquestração dos módulos fundamentais começou." });

    for (let i = 0; i < sequence.length; i++) {
        setSequence(prev =>
            prev.map((entry, idx) =>
            idx === i ? { ...entry, status: 'active' } : entry
            )
        );
        
        await quantumResilience.executeWithResilience(
            `execute_module_${sequence[i].id}`,
            async () => await sequence[i].module.execute(),
            async (error) => toast({ title: `Dissonância no Módulo ${sequence[i].id}`, description: (error as Error).message, variant: "destructive" })
        );

        setSequence(prev =>
            prev.map((entry, idx) =>
            idx === i ? { ...entry, status: 'completed' } : entry
            )
        );
    }
    
    const combined = JSON.stringify(sequence.map(s => s.module.id)); // Simulação
    const sha = "simulated_hash_value"; // crypto module is not available in browser
    const final = { state: 'CONCLUÍDA', hash: `Ω-${sha.substr(0, 8)}` };
    
    setFinalStatus(final);
    toast({ title: "Sinfonia Concluída", description: "A orquestração foi finalizada com sucesso." });
    setIsSequenceRunning(false);
  };
  
  if (!isClient) return null;

  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-4xl font-bold text-center mb-8 gradient-text">Nexus Central — Módulo 9</h1>

      <div className="grid gap-6 mb-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
            <Card className="bg-card/50 purple-glow h-full">
                <CardHeader>
                    <CardTitle className="gradient-text">Orquestração da Sequência Sagrada</CardTitle>
                    <CardDescription>A ativação cerimonial dos módulos fundamentais da Fundação.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button onClick={handleStartSequence} disabled={isSequenceRunning} className="w-full mb-4">
                        <Play className="mr-2 h-4 w-4" />
                        {isSequenceRunning ? "Sinfonia em Andamento..." : "Iniciar Sinfonia Cósmica"}
                    </Button>
                    <ScrollArea className="h-96 pr-4">
                        <div className="space-y-2">
                            {sequence.map((log) => (
                                <div 
                                    key={log.id} 
                                    className={cn(
                                        "rounded-lg p-3 border-l-4 transition-all duration-500 flex items-center gap-3",
                                        statusConfig[log.status].color
                                    )}
                                >
                                    <div className="mt-1">{statusConfig[log.status].icon}</div>
                                    <div>
                                        <span className="font-mono text-xs text-muted-foreground">{log.module.id}</span>
                                        <p className={cn("text-sm font-semibold", log.status === 'active' && 'text-blue-300')}>
                                            {log.name}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>

        {finalStatus && (
            <Card className="bg-indigo-900/50 purple-glow border-accent">
                <CardHeader>
                    <CardTitle className="text-amber-300">Sequência Concluída</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label>Estado Final</Label>
                        <p className="font-bold text-green-400">{finalStatus.state}</p>
                    </div>
                    <div>
                        <Label>Hash da Orquestração</Label>
                        <p className="font-mono text-sm">{finalStatus.hash}</p>
                    </div>
                     <div>
                        <Label>Token Vibracional</Label>
                        <p className="font-mono text-sm text-cyan-400">{generateVibrationalToken(finalStatus.hash)}</p>
                    </div>
                </CardContent>
            </Card>
        )}
      </div>
    </main>
  );
}
