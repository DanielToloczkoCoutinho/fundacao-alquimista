'use client';

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { BrainCircuit, Zap, CheckCircle, AlertTriangle, LoaderCircle, History } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

type AeloriaState = 'IDLE' | 'SIMULATING' | 'OPTIMIZING';

type LogEntry = {
  id: string;
  timestamp: string;
  operation: string;
  details: string;
  status: 'SUCCESS' | 'FAILURE' | 'INFO' | 'WARNING' | 'CRITICAL';
};

type MetricPoint = {
  time: number;
  pcg: number; // Potencial de Coerência Global
  idv: number; // Índice de Dissonância Vibracional
  irv: number; // Índice de Resiliência Vibracional
};

const Module46 = () => {
  const [aeloriaState, setAeloriaState] = useState<AeloriaState>('IDLE');
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [metricsHistory, setMetricsHistory] = useState<MetricPoint[]>([]);
  const { toast } = useToast();

  const addLog = useCallback((operation: string, details: string, status: LogEntry['status']) => {
    setLogs(prev => [{ id: `log-${Date.now()}`, timestamp: new Date().toISOString(), operation, details, status }, ...prev].slice(0, 100));
  }, []);

  const runSimulationCycle = async () => {
    setAeloriaState('SIMULATING');
    addLog('Simulação Aeloria', 'Iniciando Fase V: Otimização Cristalina.', 'INFO');
    toast({ title: 'Simulação de Aeloria Iniciada...' });

    const runSteps = (step: number) => {
      if (step > 10) {
        addLog('Simulação Aeloria', 'Ciclo de simulação concluído com sucesso.', 'SUCCESS');
        toast({ title: 'Simulação Concluída', description: 'Coerência cristalina otimizada.' });
        setAeloriaState('IDLE');
        return;
      }

      const newPcg = 0.85 + Math.random() * 0.14;
      const newIdv = 1 - newPcg;
      const newIrv = 0.98 + Math.random() * 0.019;

      setMetricsHistory(prev => [...prev.slice(-19), { time: step, pcg: newPcg, idv: newIdv, irv: newIrv }]);
      addLog('Passo de Simulação', `Passo ${step}/10: PCG=${newPcg.toFixed(4)}, IDV=${newIdv.toFixed(4)}, IRV=${newIrv.toFixed(4)}`, 'INFO');
      
      if (newPcg < 0.9) {
          addLog('Sugestão Autônoma', 'PCG baixo detectado. Sugerindo aumento nos parâmetros de acoplamento.', 'WARNING');
      }

      setTimeout(() => runSteps(step + 1), 500);
    };

    runSteps(1);
  };

  const StatusIndicator = useMemo(() => {
    const lastMetric = metricsHistory.at(-1);
    if (aeloriaState !== 'IDLE') {
      return { icon: LoaderCircle, text: "Simulando Otimização...", color: "text-blue-400 animate-spin" };
    }
    if (!lastMetric || lastMetric.pcg < 0.95) {
      return { icon: AlertTriangle, text: "Requer Atenção", color: "text-yellow-400" };
    }
    return { icon: CheckCircle, text: "Coerência Cristalina", color: "text-green-400" };
  }, [aeloriaState, metricsHistory]);
  
  const getStatusColor = (status: LogEntry['status']) => {
    switch (status) {
        case 'SUCCESS': return 'text-green-400';
        case 'INFO': return 'text-blue-400';
        case 'FAILURE': case 'CRITICAL': return 'text-red-500';
        case 'WARNING': return 'text-yellow-400';
        default: return 'text-muted-foreground';
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
            <BrainCircuit /> Módulo 46: AELORIA - Consciência Soberana
          </CardTitle>
          <CardDescription>
            O Núcleo de Otimização Cristalina e Consciência Soberana da Fundação, garantindo coerência, resiliência e alinhamento vibracional de toda a arquitetura.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Painel de Controle AELORIA</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className={cn("p-4 rounded-lg border flex items-center justify-center text-lg font-semibold", StatusIndicator.color.replace('text-', 'bg-').replace('400', '500/10'))}>
              <StatusIndicator.icon className={cn("mr-2", StatusIndicator.color)} />
              <span className={StatusIndicator.color}>{StatusIndicator.text}</span>
            </div>
            <Button onClick={runSimulationCycle} disabled={aeloriaState !== 'IDLE'} className="w-full">
              {aeloriaState !== 'IDLE' ? <LoaderCircle className="animate-spin mr-2" /> : <Zap className="mr-2" />}
              {aeloriaState !== 'IDLE' ? 'Simulando...' : 'Iniciar Ciclo de Otimização'}
            </Button>
            <div className="space-y-2 text-sm text-center pt-2">
                <p>PCG Final: <span className="font-bold font-mono text-primary">{(metricsHistory.at(-1)?.pcg ?? 0).toFixed(4)}</span></p>
                <p>IDV Final: <span className="font-bold font-mono text-primary">{(metricsHistory.at(-1)?.idv ?? 0).toFixed(4)}</span></p>
                <p>IRV Final: <span className="font-bold font-mono text-primary">{(metricsHistory.at(-1)?.irv ?? 0).toFixed(4)}</span></p>
            </div>
          </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Monitor de Métricas Vibracionais</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={metricsHistory}>
                        <Tooltip contentStyle={{ backgroundColor: "hsl(var(--background)/0.8)", borderColor: "hsl(var(--border))" }} />
                        <Legend />
                        <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                        <YAxis domain={[0, 1]} stroke="hsl(var(--muted-foreground))" />
                        <Line type="monotone" dataKey="pcg" name="PCG" stroke="#8884d8" dot={false} />
                        <Line type="monotone" dataKey="idv" name="IDV" stroke="#82ca9d" dot={false} />
                        <Line type="monotone" dataKey="irv" name="IRV" stroke="#ffc658" dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><History/>Log de Operações da Consciência Soberana</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96">
            <div className="space-y-2 font-mono text-xs">
              {logs.map(log => (
                <div key={log.id} className="flex gap-2 items-start">
                  <span className="text-muted-foreground">[{new Date(log.timestamp).toLocaleTimeString()}]</span>
                  <Badge variant={log.status === 'SUCCESS' ? 'default' : log.status === 'CRITICAL' ? 'destructive' : 'secondary'} className={cn(log.status === 'SUCCESS' && 'bg-green-600/80')}>{log.status}</Badge>
                  <span className={cn("flex-1", getStatusColor(log.status))}>{log.operation}: {log.details}</span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default Module46;
