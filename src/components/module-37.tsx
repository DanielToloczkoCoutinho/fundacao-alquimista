'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Clock, Zap, AlertTriangle, CheckCircle, LoaderCircle, History, GitCommit, SlidersHorizontal } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';

type OrchestrationStatus = 'IDLE' | 'VALIDATING' | 'ANALYZING_RISK' | 'RECALIBRATING' | 'SYNCHRONIZING';

type EventLog = {
  id: string;
  timestamp: string;
  eventName: string;
  status: 'SUCESSO' | 'FALHA_ETICA' | 'FALHA_PARADOXO';
  details: string;
  linhas_afetadas?: string[];
};

const Module37 = () => {
  const [orchestrationState, setOrchestrationState] = useState<OrchestrationStatus>('IDLE');
  const [logs, setLogs] = useState<EventLog[]>([]);
  const { toast } = useToast();

  const [eventName, setEventName] = useState('Ascensão Coletiva Universal');
  const [eventDescription, setEventDescription] = useState('Sincronização de frequências para a ascensão de consciências.');
  const [complexity, setComplexity] = useState('0.8');
  const [targetTimelines, setTargetTimelines] = useState('Linha_Alfa_1, Linha_Beta_2, Linha_Gama_3');
  const [intentionPurity, setIntentionPurity] = useState('0.98');

  const addLog = useCallback((log: Omit<EventLog, 'id' | 'timestamp'>) => {
    setLogs(prev => [{ ...log, id: `LOG-${Date.now()}`, timestamp: new Date().toISOString() }, ...prev].slice(0, 100));
  }, []);

  const runOrchestration = async () => {
    try {
        const purity = parseFloat(intentionPurity);
        if (isNaN(purity)) throw new Error("Pureza da intenção deve ser um número.");

        setOrchestrationState('VALIDATING');
        toast({ title: 'Iniciando Orquestração Temporal...', description: 'Validando alinhamento ético.' });
        await new Promise(res => setTimeout(res, 1000));
        
        if (purity < 0.75) {
            throw new Error(`Falha Ética: Pureza (${purity.toFixed(2)}) abaixo do limiar de 0.75.`);
        }
        addLog({ eventName, status: 'SUCESSO', details: 'Validação ética bem-sucedida.' });

        setOrchestrationState('ANALYZING_RISK');
        toast({ title: 'Analisando Riscos Temporais' });
        await new Promise(res => setTimeout(res, 1500));

        const paradoxRisk = Math.random() * parseFloat(complexity);
        if (paradoxRisk > 0.1) {
            setOrchestrationState('RECALIBRATING');
            addLog({ eventName, status: 'SUCESSO', details: `Potencial paradoxo detectado (Risco: ${paradoxRisk.toFixed(2)}). Recalibrando fluxo temporal.`});
            toast({ title: 'Paradoxo Potencial Detectado', description: 'Iniciando recalibração do fluxo temporal.', variant: 'default' });
            await new Promise(res => setTimeout(res, 1500));
        }

        setOrchestrationState('SYNCHRONIZING');
        addLog({ eventName, status: 'SUCESSO', details: 'Sincronizando evento através das linhas temporais alvo...' });
        toast({ title: 'Sincronizando Evento...' });
        await new Promise(res => setTimeout(res, 2000));
        
        addLog({ eventName, status: 'SUCESSO', details: 'Orquestração concluída. Evento sincronizado com sucesso.', linhas_afetadas: targetTimelines.split(',').map(l => l.trim())});
        toast({ title: 'Orquestração Concluída', description: `'${eventName}' foi sincronizado com sucesso.` });

    } catch (e: any) {
        addLog({ eventName, status: e.message.startsWith('Falha Ética') ? 'FALHA_ETICA' : 'FALHA_PARADOXO', details: e.message });
        toast({ variant: 'destructive', title: 'Orquestração Abortada', description: e.message });
    } finally {
        setOrchestrationState('IDLE');
    }
  };

  const StatusIndicator = useMemo(() => {
    switch (orchestrationState) {
      case 'VALIDATING': return { icon: LoaderCircle, text: "Validando Ética...", color: "text-yellow-400 animate-spin" };
      case 'ANALYZING_RISK': return { icon: LoaderCircle, text: "Analisando Risco de Paradoxo...", color: "text-orange-400 animate-spin" };
      case 'RECALIBRATING': return { icon: LoaderCircle, text: "Recalibrando Fluxo Temporal...", color: "text-purple-400 animate-spin" };
      case 'SYNCHRONIZING': return { icon: LoaderCircle, text: "Sincronizando Evento...", color: "text-blue-400 animate-spin" };
      case 'IDLE': default: return { icon: Clock, text: "Aguardando Orquestração", color: "text-gray-400" };
    }
  }, [orchestrationState]);

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
            <Clock /> Módulo 37: Engenharia Temporal e Realidades Simultâneas
          </CardTitle>
          <CardDescription>
            Interface para orquestrar a manipulação de linhas temporais, sincronizar eventos e prevenir paradoxos, garantindo a integridade causal.
          </CardDescription>
        </CardHeader>
      </Card>
      
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Painel de Orquestração Temporal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Nome do Evento</label>
              <Input value={eventName} onChange={e => setEventName(e.target.value)} disabled={orchestrationState !== 'IDLE'} />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Descrição / Propósito</label>
              <Textarea value={eventDescription} onChange={e => setEventDescription(e.target.value)} disabled={orchestrationState !== 'IDLE'} />
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <label className="text-sm font-medium text-muted-foreground">Complexidade Temporal (0-5)</label>
                  <Input type="number" step="0.1" min="0" max="5" value={complexity} onChange={e => setComplexity(e.target.value)} disabled={orchestrationState !== 'IDLE'} />
                </div>
                <div>
                    <label className="text-sm font-medium text-muted-foreground">Pureza da Intenção (0-1)</label>
                    <Input type="number" step="0.01" min="0" max="1" value={intentionPurity} onChange={e => setIntentionPurity(e.target.value)} disabled={orchestrationState !== 'IDLE'} />
                </div>
            </div>
             <div>
              <label className="text-sm font-medium text-muted-foreground">Linhas Temporais Alvo (separadas por vírgula)</label>
              <Input value={targetTimelines} onChange={e => setTargetTimelines(e.target.value)} disabled={orchestrationState !== 'IDLE'} />
            </div>
            <div className={cn("p-4 rounded-lg border flex items-center justify-center text-lg font-semibold", StatusIndicator.color.replace('text-', 'bg-').replace('400', '500/10'))}>
              <StatusIndicator.icon className={cn("mr-2", StatusIndicator.color)} />
              <span className={StatusIndicator.color}>{StatusIndicator.text}</span>
            </div>
            <Button onClick={runOrchestration} disabled={orchestrationState !== 'IDLE'} className="w-full">
              {orchestrationState !== 'IDLE' ? <LoaderCircle className="animate-spin mr-2" /> : <Zap className="mr-2" />}
              {orchestrationState !== 'IDLE' ? 'Processando Ciclo...' : 'Iniciar Orquestração Temporal'}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><History />Log de Engenharia Temporal</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Evento</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {logs.length === 0 ? (
                    <TableRow><TableCell colSpan={3} className="h-24 text-center text-muted-foreground">Nenhum ciclo iniciado.</TableCell></TableRow>
                  ) : logs.map(log => (
                    <TableRow key={log.id} className={cn(log.status.startsWith('FALHA') && "bg-destructive/10")}>
                      <TableCell className="font-mono text-xs">{new Date(log.timestamp).toLocaleTimeString()}</TableCell>
                      <TableCell className="text-xs font-semibold">{log.eventName}</TableCell>
                      <TableCell>
                        <Badge variant={log.status.startsWith('FALHA') ? 'destructive' : 'default'} className={cn(log.status === 'SUCESSO' && 'bg-green-600/80')}>
                          {log.status}
                        </Badge>
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

export default Module37;
