
'use client';

import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Shield, Zap, History, CheckCircle, XCircle, LoaderCircle, Network, SlidersHorizontal, Trophy, GanttChartSquare, Wrench } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sha512 } from 'js-sha512';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import KeyGenerator from './key-generator';

type BarrierLog = {
  timestamp: string;
  potencia: number;
  coerencia: number;
  hash: string;
  status: 'ATIVO' | 'FALHA';
};

type ExecutionMetrics = {
    coerencia: number;
    energia_produzida: number;
    eficiencia: number;
    estabilidade: number;
};

const ZpeContainment = () => {
  const [potencia, setPotencia] = useState(100); // em kW
  const [coerencia, setCoerencia] = useState(0.9998);
  const [barrierLog, setBarrierLog] = useState<BarrierLog[]>([]);
  const [isCreatingBarrier, setIsCreatingBarrier] = useState(false);
  const { toast } = useToast();

  const [executionMetrics, setExecutionMetrics] = useState<ExecutionMetrics>({
      coerencia: 0.9997,
      energia_produzida: 1e5,
      eficiencia: 0.997,
      estabilidade: 0.999
  });

   const milestones = {
        "2025-12-31": "Fase 1 concluída - Simulações validadas",
        "2026-12-31": "Fase 2 concluída - 1MW operacional",
        "2030-12-31": "Fase 3 iniciada - Implementação continental",
        "2035-12-31": "Fase 4 - Implementação planetária"
    };

  const handleCreateBarrier = () => {
    setIsCreatingBarrier(true);
    toast({ title: 'Iniciando protocolo de contenção...', description: 'Criando barreira quântica.' });

    setTimeout(() => {
      const success = coerencia >= 0.999;
      const newLogEntry: BarrierLog = {
        timestamp: new Date().toISOString(),
        potencia,
        coerencia,
        hash: success ? sha512(`${potencia}_${coerencia}`) : 'N/A',
        status: success ? 'ATIVO' : 'FALHA',
      };

      setBarrierLog(prev => [newLogEntry, ...prev]);
      if (success) {
        toast({ title: 'Barreira Quântica Ativada', description: `Potência de ${potencia}kW estabelecida com sucesso.` });
      } else {
        toast({
          variant: 'destructive',
          title: 'Falha na Contenção',
          description: `Coerência de ${coerencia} é insuficiente. Mínimo de 0.999 requerido.`,
        });
      }
      setIsCreatingBarrier(false);
    }, 2000);
  };
  
    const getNextMilestone = () => {
        const now = new Date();
        for (const [date, desc] of Object.entries(milestones)) {
            if (new Date(date) > now) {
                return `${date}: ${desc}`;
            }
        }
        return "Todos os marcos concluídos";
    };

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
       <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">
            <Wrench /> Ferramentas e Protocolos Akáshicos
          </CardTitle>
          <CardDescription>
            Interfaces para geração de chaves, controle de barreiras quânticas e monitoramento de logs de segurança.
          </CardDescription>
        </CardHeader>
      </Card>

      <KeyGenerator />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Painel de Contenção */}
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><SlidersHorizontal />Controle de Barreira Quântica</CardTitle>
                <CardDescription>Defina os parâmetros e ative os campos de contenção.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <label className="text-sm text-muted-foreground">Potência da Barreira (kW)</label>
                    <Slider
                        value={[potencia]}
                        onValueChange={(v) => setPotencia(v[0])}
                        min={10} max={1000} step={10}
                        className="my-2"
                    />
                    <Input className="font-mono" value={`${potencia} kW`} readOnly />
                </div>
                 <div>
                    <label className="text-sm text-muted-foreground">Coerência Requerida</label>
                    <Slider
                        value={[coerencia]}
                        onValueChange={(v) => setCoerencia(v[0])}
                        min={0.99} max={0.9999} step={0.0001}
                        className="my-2"
                    />
                    <Input className="font-mono" value={coerencia.toFixed(4)} readOnly/>
                </div>
                <Button onClick={handleCreateBarrier} disabled={isCreatingBarrier} className="w-full">
                    {isCreatingBarrier ? <LoaderCircle className="animate-spin mr-2"/> : <Zap className="mr-2"/>}
                    {isCreatingBarrier ? 'Ativando...' : 'Criar Barreira Quântica'}
                </Button>
            </CardContent>
        </Card>

        {/* Painel de Rede */}
        <Card>
             <CardHeader>
                <CardTitle className="flex items-center gap-2"><Network />Rede de Entrelaçamento Global</CardTitle>
                 <CardDescription>Status da rede de comunicação quântica segura.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
                <div className="flex justify-between"><strong>Protocolo:</strong> <Badge variant="secondary">QUANTUM_ENTANGLEMENT_V3</Badge></div>
                <div className="flex justify-between"><strong>Latência Máxima:</strong> <span className="font-mono">5ms</span></div>
                <div className="flex justify-between"><strong>Coerência Mínima:</strong> <span className="font-mono">0.9997</span></div>
                <div>
                    <strong>Frequências Primárias:</strong>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {[963.0, 1440.0, 888.25].map(f => <Badge key={f} variant="outline">{f} Hz</Badge>)}
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>

       <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><GanttChartSquare/> Plano de Execução ZPE</CardTitle>
          <CardDescription>Monitoramento dos marcos e métricas do projeto.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-lg bg-background border"><p className="text-2xl font-bold text-green-400">{(executionMetrics.coerencia * 100).toFixed(4)}%</p><p className="text-xs text-muted-foreground">Coerência</p></div>
            <div className="p-4 rounded-lg bg-background border"><p className="text-2xl font-bold text-blue-400">{(executionMetrics.energia_produzida / 1e6).toFixed(2)} MW</p><p className="text-xs text-muted-foreground">Energia Produzida</p></div>
            <div className="p-4 rounded-lg bg-background border"><p className="text-2xl font-bold text-purple-400">{(executionMetrics.eficiencia * 100).toFixed(2)}%</p><p className="text-xs text-muted-foreground">Eficiência</p></div>
            <div className="p-4 rounded-lg bg-background border"><p className="text-2xl font-bold text-cyan-400">{(executionMetrics.estabilidade * 100).toFixed(3)}%</p><p className="text-xs text-muted-foreground">Estabilidade</p></div>
             <div className="md:col-span-2 lg:col-span-4 p-4 rounded-lg bg-background border flex items-center justify-center gap-4">
                <Trophy className="w-8 h-8 text-amber-400"/>
                <div>
                    <p className="text-sm text-muted-foreground">Próximo Marco</p>
                    <p className="font-semibold">{getNextMilestone()}</p>
                </div>
            </div>
        </CardContent>
      </Card>

       <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><History />Log de Ativação (Blockchain Akáshico)</CardTitle>
          <CardDescription>Cada ativação de barreira gera um hash SHA-512, selando a operação no registro eterno.</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-64">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Potência</TableHead>
                  <TableHead>Coerência</TableHead>
                  <TableHead>Hash de Segurança (SHA-512)</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {barrierLog.length === 0 ? (
                    <TableRow><TableCell colSpan={5} className="text-center h-24 text-muted-foreground">Nenhuma barreira ativada.</TableCell></TableRow>
                ) : barrierLog.map(log => (
                  <TableRow key={log.timestamp}>
                    <TableCell className="font-mono text-xs">{new Date(log.timestamp).toLocaleString()}</TableCell>
                    <TableCell>{log.potencia} kW</TableCell>
                    <TableCell>{log.coerencia.toFixed(4)}</TableCell>
                    <TableCell className="font-mono text-xs max-w-xs truncate">{log.hash}</TableCell>
                    <TableCell>
                      <Badge variant={log.status === 'ATIVO' ? 'default' : 'destructive'} className={cn(log.status === 'ATIVO' && "bg-green-600/80")}>
                        {log.status === 'ATIVO' ? <CheckCircle className="mr-1 h-3 w-3" /> : <XCircle className="mr-1 h-3 w-3" />}
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
  );
};

export default ZpeContainment;
