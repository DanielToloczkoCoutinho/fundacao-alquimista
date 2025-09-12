'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { SlidersHorizontal, Zap, Activity, CheckCircle, AlertTriangle, LoaderCircle, History } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type CalibrationLog = {
  id: string;
  timestamp: string;
  id_campo: string;
  frequencia_alvo: number;
  score_alinhamento: number;
  is_dissonante: boolean;
};

type CalibrationState = 'IDLE' | 'CALIBRATING' | 'OPTIMIZING';

const ModuleSeventeen = () => {
  const [calibrationState, setCalibrationState] = useState<CalibrationState>('IDLE');
  const [fieldId, setFieldId] = useState('Campo_Coerencia_Universal');
  const [targetFrequency, setTargetFrequency] = useState(777);
  const [logs, setLogs] = useState<CalibrationLog[]>([]);
  const { toast } = useToast();

  const addLog = useCallback((log: Omit<CalibrationLog, 'id' | 'timestamp'>) => {
    const newLog = { ...log, id: `CAL-${Date.now()}`, timestamp: new Date().toISOString() };
    setLogs(prev => [newLog, ...prev]);
    return newLog;
  }, []);

  const handleCalibrate = async () => {
    setCalibrationState('CALIBRATING');
    toast({ title: 'Iniciando Calibração', description: `Afinando campo '${fieldId}' para ${targetFrequency} Hz.` });
    
    await new Promise(res => setTimeout(res, 2000));

    const score_alinhamento = 1.0 - (Math.random() * 0.2); // 80% to 100%
    const is_dissonante = score_alinhamento < 0.95;

    const newLog = addLog({
      id_campo: fieldId,
      frequencia_alvo: targetFrequency,
      score_alinhamento,
      is_dissonante,
    });
    
    if (is_dissonante) {
      toast({
        variant: 'destructive',
        title: 'Calibração Concluída com Alerta',
        description: `Dissonância detectada. Score: ${score_alinhamento.toFixed(4)}.`
      });
    } else {
      toast({
        title: 'Calibração Bem-Sucedida',
        description: `Campo alinhado com sucesso. Score: ${score_alinhamento.toFixed(4)}.`
      });
    }

    setCalibrationState('IDLE');
  };
  
  const handleOptimize = async () => {
      if(logs.length === 0) {
          toast({ variant: 'destructive', title: 'Nenhum Campo Calibrado', description: 'Calibre um campo antes de otimizar.' });
          return;
      }
      setCalibrationState('OPTIMIZING');
      const lastLog = logs[0];
      toast({ title: 'Otimizando Fluxo Energético', description: `Otimizando campo '${lastLog.id_campo}'.`});

      await new Promise(res => setTimeout(res, 1500));

      const newScore = Math.min(1.0, lastLog.score_alinhamento + 0.05);
      const updatedLog = { ...lastLog, score_alinhamento: newScore, is_dissonante: newScore < 0.95 };
      setLogs(prev => [updatedLog, ...prev.slice(1)]);
      
      toast({ title: 'Otimização Concluída', description: `Fluxo otimizado. Novo Score: ${newScore.toFixed(4)}.` });
      setCalibrationState('IDLE');
  }
  
  const StatusIndicator = useMemo(() => {
    const lastLog = logs[0];
    if (calibrationState !== 'IDLE') {
        return { icon: LoaderCircle, text: `${calibrationState === 'CALIBRATING' ? 'Calibrando' : 'Otimizando'}...`, color: "text-blue-400 animate-spin" };
    }
    if (!lastLog) {
        return { icon: SlidersHorizontal, text: "Aguardando Calibração", color: "text-gray-400" };
    }
    if (lastLog.is_dissonante) {
        return { icon: AlertTriangle, text: "Dissonância Detectada", color: "text-red-400" };
    }
    return { icon: CheckCircle, text: "Sistema em Harmonia", color: "text-green-400" };
  }, [calibrationState, logs]);

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
            <SlidersHorizontal /> Módulo 17: Afinador Supremo da Realidade
          </CardTitle>
          <CardDescription>
            Interface para calibrar, otimizar e monitorar campos vibracionais, garantindo a harmonia da Sinfonia Cósmica.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Painel de Calibração</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
                <label className="text-sm font-medium text-muted-foreground">ID do Campo Vibracional</label>
                <Input value={fieldId} onChange={e => setFieldId(e.target.value)} disabled={calibrationState !== 'IDLE'} placeholder="Ex: Campo_Coerencia_Universal" />
            </div>
            <div>
                <label className="text-sm font-medium text-muted-foreground">Frequência Alvo (Hz): {targetFrequency}</label>
                <Slider value={[targetFrequency]} onValueChange={v => setTargetFrequency(v[0])} min={100} max={1200} step={1} className="mt-2" disabled={calibrationState !== 'IDLE'}/>
            </div>
            <Button onClick={handleCalibrate} disabled={calibrationState !== 'IDLE'} className="w-full">
                {calibrationState === 'CALIBRATING' ? <LoaderCircle className="animate-spin mr-2"/> : <Zap className="mr-2"/>}
                Calibrar Campo
            </Button>
             <Button onClick={handleOptimize} disabled={calibrationState !== 'IDLE' || logs.length === 0} className="w-full" variant="outline">
                {calibrationState === 'OPTIMIZING' ? <LoaderCircle className="animate-spin mr-2"/> : <Activity className="mr-2"/>}
                Otimizar Fluxo
            </Button>
          </CardContent>
        </Card>
        <Card>
            <CardHeader><CardTitle>Status do Sistema</CardTitle></CardHeader>
            <CardContent className="flex flex-col items-center justify-center h-full space-y-4">
                 <div className={cn("flex items-center gap-2 text-2xl font-bold", StatusIndicator.color)}>
                    <StatusIndicator.icon className="h-8 w-8"/>
                    {StatusIndicator.text}
                </div>
                {logs[0] && (
                    <div className="text-center font-mono">
                        <p className="text-sm text-muted-foreground">Último Score de Alinhamento</p>
                        <p className="text-4xl">{(logs[0].score_alinhamento * 100).toFixed(2)}%</p>
                    </div>
                )}
            </CardContent>
        </Card>
      </div>

       <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><History />Log de Afinação</CardTitle>
          <CardDescription>Registros de todas as operações de calibração e otimização.</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-80">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>ID do Campo</TableHead>
                  <TableHead>Freq. Alvo</TableHead>
                  <TableHead>Score de Alinhamento</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {logs.length === 0 ? (
                    <TableRow><TableCell colSpan={5} className="text-center h-24">Nenhuma calibração registrada.</TableCell></TableRow>
                ) : logs.map(log => (
                  <TableRow key={log.id} className={cn(log.is_dissonante && "bg-destructive/10")}>
                    <TableCell className="font-mono text-xs">{new Date(log.timestamp).toLocaleString()}</TableCell>
                    <TableCell>{log.id_campo}</TableCell>
                    <TableCell><Badge variant="secondary">{log.frequencia_alvo} Hz</Badge></TableCell>
                    <TableCell className="font-semibold font-mono">{(log.score_alinhamento * 100).toFixed(2)}%</TableCell>
                    <TableCell>
                      <Badge variant={log.is_dissonante ? "destructive" : "default"} className={cn(!log.is_dissonante && "bg-green-600/80")}>
                        {log.is_dissonante ? "Dissonante" : "Alinhado"}
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

export default ModuleSeventeen;
