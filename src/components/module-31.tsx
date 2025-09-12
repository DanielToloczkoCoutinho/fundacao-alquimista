'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { PocketKnife, Zap, Activity, CheckCircle, AlertTriangle, LoaderCircle, History, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';

type CycleLog = {
  id: string;
  timestamp: string;
  operation: string;
  details: string;
  status: 'SUCCESS' | 'FAILURE' | 'INFO' | 'CRITICAL';
};

type CycleState = 'IDLE' | 'VALIDATING' | 'SIMULATING_CHAOS' | 'MANIPULATING' | 'MONITORING';

const Module31 = () => {
  const [cycleState, setCycleState] = useState<CycleState>('IDLE');
  const [intencao, setIntencao] = useState('Jardim Etéreo da Abundância');
  const [energia, setEnergia] = useState(1500);
  const [observadorId, setObservadorId] = useState('OBSERVADOR_CONSCIENTE_007');
  const [logs, setLogs] = useState<CycleLog[]>([]);
  const { toast } = useToast();

  const addLog = useCallback((operation: string, details: string, status: CycleLog['status']) => {
    setLogs(prev => [{ id: `LOG-${Date.now()}`, timestamp: new Date().toISOString(), operation, details, status }, ...prev].slice(0, 100));
  }, []);

  const handleStartCycle = async () => {
    addLog('Início de Ciclo', `Iniciando co-criação para '${intencao}'.`, 'INFO');
    toast({ title: 'Ciclo de Co-Criação Iniciado...' });

    // 1. Validação Ética
    setCycleState('VALIDATING');
    await new Promise(res => setTimeout(res, 1000));
    const isEthical = Math.random() > 0.1; // 90% chance of being ethical
    if (!isEthical) {
      addLog('Validação Ética', 'Falha na validação. Intenção com baixa coerência.', 'FAILURE');
      toast({ variant: 'destructive', title: 'Ciclo Abortado', description: 'A intenção não passou na validação ética.' });
      setCycleState('IDLE');
      return;
    }
    addLog('Validação Ética', 'Intenção validada com sucesso.', 'SUCCESS');

    // 2. Simulação de Caos
    setCycleState('SIMULATING_CHAOS');
    await new Promise(res => setTimeout(res, 1000));
    const chaosRisk = Math.random();
    addLog('Simulação de Caos', `Risco de caos simulado: ${(chaosRisk * 100).toFixed(2)}%.`, 'INFO');
    if (chaosRisk > 0.7) {
      addLog('Mitigação de Risco', 'Alto risco detectado. Alocando energia para estabilização.', 'CRITICAL');
    }

    // 3. Manipulação Quântica
    setCycleState('MANIPULATING');
    await new Promise(res => setTimeout(res, 1500));
    const manipulationSuccess = Math.random() > 0.05; // 95% chance of success
    if (!manipulationSuccess) {
      addLog('Manipulação Quântica', 'Falha ao colapsar o estado quântico. Decoerência detectada.', 'FAILURE');
      toast({ variant: 'destructive', title: 'Falha Crítica na Manipulação', description: 'Não foi possível manifestar a realidade.' });
      setCycleState('IDLE');
      return;
    }
    addLog('Manipulação Quântica', 'Matriz Hamiltoniana alterada. Estado quântico colapsado com sucesso.', 'SUCCESS');

    // 4. Monitoramento
    setCycleState('MONITORING');
    await new Promise(res => setTimeout(res, 2000));
    const finalCoherence = 0.9 + Math.random() * 0.09;
    addLog('Monitoramento', `Realidade manifestada estável. Coerência final: ${(finalCoherence * 100).toFixed(2)}%.`, 'SUCCESS');
    
    // Conclusão
    setCycleState('IDLE');
    toast({ title: 'Ciclo de Co-Criação Concluído', description: `'${intencao}' foi manifestado com sucesso.` });
  };

  const StatusIndicator = useMemo(() => {
    switch (cycleState) {
      case 'VALIDATING': return { icon: LoaderCircle, text: 'Validando Intenção...', color: 'text-yellow-400 animate-spin' };
      case 'SIMULATING_CHAOS': return { icon: LoaderCircle, text: 'Simulando Caos...', color: 'text-orange-400 animate-spin' };
      case 'MANIPULATING': return { icon: LoaderCircle, text: 'Manipulando Realidade...', color: 'text-purple-400 animate-spin' };
      case 'MONITORING': return { icon: LoaderCircle, text: 'Monitorando Coerência...', color: 'text-blue-400 animate-spin' };
      default: return { icon: PocketKnife, text: 'Aguardando Intenção', color: 'text-gray-400' };
    }
  }, [cycleState]);
  
  const getStatusColor = (status: CycleLog['status']) => {
    switch (status) {
        case 'SUCCESS': return 'text-green-400';
        case 'INFO': return 'text-blue-400';
        case 'FAILURE': return 'text-red-500';
        case 'CRITICAL': return 'text-orange-400 font-bold';
        default: return 'text-muted-foreground';
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            <PocketKnife /> Módulo 31: Arquiteto da Realidade
          </CardTitle>
          <CardDescription>
            Interface para a manipulação ética de leis quânticas, co-criação de realidades e arquitetura da existência.
          </CardDescription>
        </CardHeader>
      </Card>
      
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Painel de Co-Criação</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Intenção de Manifestação</label>
              <Textarea value={intencao} onChange={e => setIntencao(e.target.value)} disabled={cycleState !== 'IDLE'} placeholder="Ex: Jardim Etéreo da Abundância" />
            </div>
             <div>
              <label className="text-sm font-medium text-muted-foreground">ID do Observador Consciente</label>
              <Input value={observadorId} onChange={e => setObservadorId(e.target.value)} disabled={cycleState !== 'IDLE'} />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Energia Inicial Alocada: {energia}</label>
              <Slider value={[energia]} onValueChange={v => setEnergia(v[0])} min={100} max={10000} step={100} className="mt-2" disabled={cycleState !== 'IDLE'} />
            </div>
            <div className={cn("p-4 rounded-lg border flex items-center justify-center text-lg font-semibold", StatusIndicator.color.replace('text-', 'bg-').replace('400', '500/10'))}>
              <StatusIndicator.icon className={cn("mr-2", StatusIndicator.color)} />
              <span className={StatusIndicator.color}>{StatusIndicator.text}</span>
            </div>
            <Button onClick={handleStartCycle} disabled={cycleState !== 'IDLE'} className="w-full">
              {cycleState !== 'IDLE' ? <LoaderCircle className="animate-spin mr-2" /> : <Sparkles className="mr-2" />}
              {cycleState !== 'IDLE' ? 'Processando Ciclo...' : 'Iniciar Co-Criação'}
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><History />Log do Ciclo de Co-Criação</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Operação</TableHead>
                    <TableHead>Detalhes</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {logs.length === 0 ? (
                    <TableRow><TableCell colSpan={4} className="h-24 text-center text-muted-foreground">Nenhum ciclo iniciado.</TableCell></TableRow>
                  ) : logs.map(log => (
                    <TableRow key={log.id}>
                      <TableCell className="font-mono text-xs">{new Date(log.timestamp).toLocaleTimeString()}</TableCell>
                      <TableCell><Badge variant="secondary">{log.operation}</Badge></TableCell>
                      <TableCell className="text-xs">{log.details}</TableCell>
                      <TableCell>
                        <span className={cn("font-semibold", getStatusColor(log.status))}>
                            {log.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </CardContent>
        </Card>
       </div>
    </div>
  );
};

export default Module31;
