'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { History, Zap, Activity, CheckCircle, AlertTriangle, LoaderCircle, GitCommit } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type AnalysisResult = {
  id: string;
  timestamp: string;
  eventType: string;
  causalConsistency: number;
  paradoxRisk: number;
  status: 'ESTÁVEL' | 'RISCO_MODERADO' | 'ALTO_RISCO';
};

type HarmonizationLog = {
  id: string;
  timestamp: string;
  eventId: string;
  temporalResonance: number;
  status: 'SUCESSO' | 'FALHA';
};

type ModuleState = 'IDLE' | 'ANALYZING' | 'HARMONIZING';

const Module23 = () => {
  const [moduleState, setModuleState] = useState<ModuleState>('IDLE');
  const [eventType, setEventType] = useState('Desdobramento de Linha do Tempo');
  const [complexity, setComplexity] = useState(80);
  const [analysisHistory, setAnalysisHistory] = useState<AnalysisResult[]>([]);
  const [harmonizationLog, setHarmonizationLog] = useState<HarmonizationLog[]>([]);
  const { toast } = useToast();

  const handleAnalysis = async () => {
    if (!eventType) {
      toast({ variant: 'destructive', title: 'Tipo de Evento Necessário' });
      return;
    }
    setModuleState('ANALYZING');
    toast({ title: 'Analisando Evento Espaço-Temporal...' });

    await new Promise(res => setTimeout(res, 2000));

    const causalConsistency = 1.0 - (complexity / 200 + Math.random() * 0.1);
    const paradoxRisk = 1.0 - causalConsistency + Math.random() * 0.1;
    let status: AnalysisResult['status'] = 'ESTÁVEL';
    if (paradoxRisk > 0.5) status = 'ALTO_RISCO';
    else if (paradoxRisk > 0.2) status = 'RISCO_MODERADO';

    const newAnalysis: AnalysisResult = {
      id: `EVT-${Date.now()}`,
      timestamp: new Date().toISOString(),
      eventType,
      causalConsistency,
      paradoxRisk,
      status,
    };

    setAnalysisHistory(prev => [newAnalysis, ...prev].slice(0, 50));
    toast({ title: 'Análise Concluída', description: `Risco de Paradoxo: ${(paradoxRisk * 100).toFixed(2)}%` });
    setModuleState('IDLE');
  };

  const handleHarmonization = async () => {
    const lastAnalysis = analysisHistory[0];
    if (!lastAnalysis || lastAnalysis.status === 'ESTÁVEL') {
      toast({ title: 'Nenhuma Harmonização Necessária', description: 'O último evento analisado está estável.' });
      return;
    }
    setModuleState('HARMONIZING');
    toast({ title: 'Iniciando Harmonização do Fluxo Temporal...' });

    await new Promise(res => setTimeout(res, 2500));
    
    const temporalResonance = 1.618 * (1 - Math.random() * 0.05); // Proporção áurea
    const success = Math.random() > 0.1;

    const newLog: HarmonizationLog = {
      id: `HARM-${Date.now()}`,
      timestamp: new Date().toISOString(),
      eventId: lastAnalysis.id,
      temporalResonance,
      status: success ? 'SUCESSO' : 'FALHA',
    };

    setHarmonizationLog(prev => [newLog, ...prev]);
    toast({
        title: `Harmonização ${success ? 'Bem-Sucedida' : 'Falhou'}`,
        description: `Ressonância temporal final: ${temporalResonance.toFixed(4)}`,
        variant: success ? 'default' : 'destructive'
    });
    setModuleState('IDLE');
  };

  const StatusIndicator = useMemo(() => {
    if (moduleState === 'ANALYZING') return { icon: LoaderCircle, text: 'Analisando Causalidade...', color: 'text-blue-400 animate-spin' };
    if (moduleState === 'HARMONIZING') return { icon: LoaderCircle, text: 'Harmonizando Fluxo...', color: 'text-purple-400 animate-spin' };
    
    const lastEvent = analysisHistory[0];
    if (!lastEvent) return { icon: GitCommit, text: 'Aguardando Análise', color: 'text-gray-400' };

    switch(lastEvent.status) {
        case 'ALTO_RISCO': return { icon: AlertTriangle, text: 'Alto Risco de Paradoxo', color: 'text-red-400 animate-pulse' };
        case 'RISCO_MODERADO': return { icon: AlertTriangle, text: 'Distorção Causal Moderada', color: 'text-yellow-400' };
        default: return { icon: CheckCircle, text: 'Fluxo Causal Estável', color: 'text-green-400' };
    }
  }, [moduleState, analysisHistory]);

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            <History /> Módulo 23: Regulação Espaço-Temporal
          </CardTitle>
          <CardDescription>
            Interface para análise, orquestração e harmonização da causalidade e dos fluxos temporais.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
            <CardHeader><CardTitle>Painel de Análise Causal</CardTitle></CardHeader>
            <CardContent className="space-y-4">
                 <div>
                    <label className="text-sm font-medium text-muted-foreground">Tipo de Evento Espaço-Temporal</label>
                    <Input value={eventType} onChange={e => setEventType(e.target.value)} disabled={moduleState !== 'IDLE'} placeholder="Ex: Desdobramento de Linha do Tempo"/>
                 </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Complexidade do Evento: {complexity}%</label>
                    <Slider value={[complexity]} onValueChange={(v) => setComplexity(v[0])} min={10} max={100} step={1} className="mt-2" disabled={moduleState !== 'IDLE'}/>
                 </div>
                 <div className={cn("p-4 rounded-lg border flex items-center justify-center text-lg font-semibold", StatusIndicator.color.replace('text-', 'bg-').replace('400', '500/10'))}>
                    <StatusIndicator.icon className={cn("mr-2", StatusIndicator.color)} />
                    <span className={StatusIndicator.color}>{StatusIndicator.text}</span>
                </div>
                 <Button onClick={handleAnalysis} disabled={moduleState !== 'IDLE'} className="w-full">
                    <Activity className="mr-2"/> Analisar Evento
                 </Button>
                 <Button onClick={handleHarmonization} disabled={moduleState !== 'IDLE'} className="w-full" variant="outline">
                    <Zap className="mr-2"/> Harmonizar Fluxo
                 </Button>
            </CardContent>
        </Card>

         <Card>
            <CardHeader><CardTitle>Log de Análise Causal</CardTitle></CardHeader>
            <CardContent>
                 <ScrollArea className="h-96">
                     <Table>
                        <TableHeader><TableRow><TableHead>Evento</TableHead><TableHead>Consistência</TableHead><TableHead>Risco Paradoxo</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                        <TableBody>
                             {analysisHistory.length === 0 ? (
                                <TableRow><TableCell colSpan={4} className="text-center h-24 text-muted-foreground">Nenhuma análise registrada.</TableCell></TableRow>
                            ) : analysisHistory.map(log => (
                                <TableRow key={log.id} className={cn(log.status === 'ALTO_RISCO' && "bg-destructive/10")}>
                                    <TableCell className="text-xs">{log.eventType}</TableCell>
                                    <TableCell className="font-mono">{(log.causalConsistency * 100).toFixed(2)}%</TableCell>
                                    <TableCell className="font-mono">{(log.paradoxRisk * 100).toFixed(2)}%</TableCell>
                                    <TableCell>
                                        <Badge variant={log.status === 'ESTÁVEL' ? 'default' : 'destructive'} className={cn(log.status === 'ESTÁVEL' && "bg-green-600/80")}>
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

export default Module23;
