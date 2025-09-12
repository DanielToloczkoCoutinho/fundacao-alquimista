'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Waves, Zap, Activity, CheckCircle, AlertTriangle, LoaderCircle, History } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

type FieldAnalysisLog = {
  id: string;
  timestamp: string;
  locationId: string;
  anomalyScore: number;
  status: 'ESTÁVEL' | 'ANOMALIA DETECTADA';
};

type CycleResult = {
  iteration: number;
  analysis: FieldAnalysisLog;
  modulation?: {
    newIntensity: number;
  };
};

type ModuleState = 'IDLE' | 'ANALYZING' | 'MODULATING';

const ModuleNineteen = () => {
  const [moduleState, setModuleState] = useState<ModuleState>('IDLE');
  const [locationId, setLocationId] = useState('Setor Zeta-9');
  const [baseFrequency, setBaseFrequency] = useState(432);
  const [cycleDuration, setCycleDuration] = useState(3);
  const [cycleResults, setCycleResults] = useState<CycleResult[]>([]);
  const { toast } = useToast();

  const addCycleResult = useCallback((result: CycleResult) => {
    setCycleResults(prev => [result, ...prev].slice(0, 100));
  }, []);

  const handleRunCycle = async () => {
    if (!locationId) {
      toast({ variant: 'destructive', title: 'Localização Necessária', description: 'Por favor, defina a localização para análise.' });
      return;
    }
    setModuleState('ANALYZING');
    setCycleResults([]);
    toast({ title: 'Ciclo de Análise Iniciado', description: `Monitorando ${locationId} por ${cycleDuration} iterações.` });

    for (let i = 1; i <= cycleDuration; i++) {
      await new Promise(res => setTimeout(res, 1000));
      
      const measuredFrequency = baseFrequency * (1 + (Math.random() - 0.5) * 0.2); // Flutuação de até 10%
      const anomalyScore = Math.abs(measuredFrequency - baseFrequency);
      const isAnomaly = anomalyScore > baseFrequency * 0.05; // 5% de tolerância

      const analysisLog: FieldAnalysisLog = {
        id: `ANALYSIS-${Date.now()}`,
        timestamp: new Date().toISOString(),
        locationId,
        anomalyScore,
        status: isAnomaly ? 'ANOMALIA DETECTADA' : 'ESTÁVEL',
      };
      
      let cycleResult: CycleResult = { iteration: i, analysis: analysisLog };

      if (isAnomaly) {
        setModuleState('MODULATING');
        toast({
          variant: 'destructive',
          title: `Anomalia Detectada na Iteração ${i}`,
          description: `Score: ${anomalyScore.toFixed(2)}. Iniciando modulação.`
        });
        await new Promise(res => setTimeout(res, 1000));
        
        const newIntensity = baseFrequency * (1 + (Math.random() - 0.5) * 0.02);
        cycleResult.modulation = { newIntensity };
        setModuleState('ANALYZING');
      }
      
      addCycleResult(cycleResult);
    }
    
    setModuleState('IDLE');
    toast({ title: 'Ciclo de Análise Concluído', description: `Monitoramento de ${locationId} finalizado.` });
  };
  
  const StatusIndicator = useMemo(() => {
    const lastResult = cycleResults[0];
    if (moduleState !== 'IDLE') {
        return { icon: LoaderCircle, text: `${moduleState === 'ANALYZING' ? 'Analisando...' : 'Modulando...'}`, color: "text-blue-400 animate-spin" };
    }
    if (!lastResult) {
        return { icon: Waves, text: "Aguardando Análise", color: "text-gray-400" };
    }
    if (lastResult.analysis.status === 'ANOMALIA DETECTADA') {
        return { icon: AlertTriangle, text: "Última Análise: Anomalia", color: "text-red-400" };
    }
    return { icon: CheckCircle, text: "Sistema Estável", color: "text-green-400" };
  }, [moduleState, cycleResults]);

  const chartData = cycleResults.map(r => ({
      name: `Iter. ${r.iteration}`,
      anomalia: r.analysis.anomalyScore
  })).reverse();

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-sky-400">
            <Waves /> Módulo 19: Análise de Campos de Força Interdimensionais
          </CardTitle>
          <CardDescription>
            Interface para analisar e modular campos de força, detectando anomalias vibracionais e reequilibrando a realidade.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Painel de Controle</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div>
                <label className="text-sm font-medium text-muted-foreground">ID da Localização/Campo</label>
                <Input value={locationId} onChange={e => setLocationId(e.target.value)} disabled={moduleState !== 'IDLE'} placeholder="Ex: Setor Zeta-9"/>
            </div>
             <div>
                <label className="text-sm font-medium text-muted-foreground">Frequência Base (Hz)</label>
                <Input type="number" value={baseFrequency} onChange={e => setBaseFrequency(Number(e.target.value))} disabled={moduleState !== 'IDLE'} />
            </div>
            <div>
                <label className="text-sm font-medium text-muted-foreground">Duração do Ciclo (Iterações)</label>
                <Input type="number" value={cycleDuration} onChange={e => setCycleDuration(Number(e.target.value))} disabled={moduleState !== 'IDLE'} min={1} max={10} />
            </div>
            <div className={cn("p-4 rounded-lg border flex items-center justify-center text-lg font-semibold", StatusIndicator.color.replace('text-', 'bg-').replace('400', '500/10'))}>
                <StatusIndicator.icon className={cn("mr-2", StatusIndicator.color)} />
                <span className={StatusIndicator.color}>{StatusIndicator.text}</span>
            </div>
            <Button onClick={handleRunCycle} disabled={moduleState !== 'IDLE'} className="w-full">
                {moduleState !== 'IDLE' ? <LoaderCircle className="animate-spin mr-2"/> : <Zap className="mr-2"/>}
                Iniciar Ciclo de Análise
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Activity /> Histórico de Anomalias do Ciclo</CardTitle>
            </CardHeader>
            <CardContent className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                        <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--background)/0.8)",
                            borderColor: "hsl(var(--border))"
                          }}
                        />
                        <Bar dataKey="anomalia" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
      </div>

       <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><History />Log de Ciclo de Análise e Modulação</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-80">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Iteração</TableHead>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Score Anomalia</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Modulação</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cycleResults.length === 0 ? (
                    <TableRow><TableCell colSpan={5} className="text-center h-24 text-muted-foreground">Aguardando ciclo de análise.</TableCell></TableRow>
                ) : cycleResults.map(result => (
                  <TableRow key={result.iteration} className={cn(result.analysis.status === 'ANOMALIA DETECTADA' && "bg-destructive/10")}>
                    <TableCell className="font-bold">{result.iteration}</TableCell>
                    <TableCell className="font-mono text-xs">{new Date(result.analysis.timestamp).toLocaleTimeString()}</TableCell>
                    <TableCell className="font-mono">{result.analysis.anomalyScore.toFixed(4)}</TableCell>
                    <TableCell>
                      <Badge variant={result.analysis.status === 'ESTÁVEL' ? 'default' : 'destructive'} className={cn(result.analysis.status === 'ESTÁVEL' && "bg-green-600/80")}>
                        {result.analysis.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {result.modulation ? `Nova Intensidade: ${result.modulation.newIntensity.toFixed(2)}` : 'N/A'}
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

export default ModuleNineteen;
