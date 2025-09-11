'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { BrainCircuit, Clock, GitCommit, BarChart, AlertTriangle, CheckCircle, LoaderCircle, Anchor, Waves } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { temporalManipulator } from '@/lib/temporal-manipulator';
import { multiversalSimulator } from '@/lib/multiversal-simulator';

type TimelineDataPoint = {
  time: number;
  dissonance: number;
  stability: number;
};

type Anomaly = {
  id: string;
  timestamp: string;
  magnitude: number;
  description: string;
  timeline: string;
};

type OracleState = 'STABLE' | 'ANALYZING' | 'ANOMALY_DETECTED';

const generateInitialData = (): TimelineDataPoint[] => {
  return Array.from({ length: 20 }, (_, i) => ({
    time: i,
    dissonance: Math.random() * 0.1,
    stability: 0.95 + Math.random() * 0.05,
  }));
};

const ModuleThree: React.FC = () => {
  const [data, setData] = useState<TimelineDataPoint[]>(generateInitialData);
  const [anomalies, setAnomalies] = useState<Anomaly[]>([]);
  const [oracleState, setOracleState] = useState<OracleState>('STABLE');
  
  const [temporalEvents, setTemporalEvents] = useState<any[]>([]);
  const [activeAnchors, setActiveAnchors] = useState<any[]>([]);
  const [activeSimulations, setActiveSimulations] = useState<any[]>([]);


  const addLog = useCallback((anomaly: Omit<Anomaly, 'id' | 'timestamp'>) => {
    setAnomalies(prev => [
      { ...anomaly, id: `A-${Date.now()}`, timestamp: new Date().toISOString() },
      ...prev
    ].slice(0, 50));
  }, []);

  const updateTemporalData = useCallback(() => {
    setTemporalEvents(temporalManipulator.getTemporalBuffer().slice(-10));
    setActiveAnchors(temporalManipulator.getActiveAnchors());
    setActiveSimulations(multiversalSimulator.getActiveSimulations());
  },[]);

  useEffect(() => {
    const monitoringInterval = setInterval(updateTemporalData, 2000);
    return () => clearInterval(monitoringInterval);
  }, [updateTemporalData]);


  useEffect(() => {
    if (oracleState !== 'STABLE') return;

    const interval = setInterval(() => {
      setData(prevData => {
        const lastPoint = prevData[prevData.length - 1];
        const newPoint = {
          time: lastPoint.time + 1,
          dissonance: Math.max(0, lastPoint.dissonance + (Math.random() - 0.5) * 0.02),
          stability: Math.max(0.8, Math.min(1, lastPoint.stability + (Math.random() - 0.5) * 0.01)),
        };

        if (newPoint.dissonance > 0.35 && Math.random() > 0.8) {
           addLog({
                magnitude: newPoint.dissonance,
                description: 'Pico de dissonância harmônica detectado',
                timeline: 'Alpha-T-7'
            });
        }
        return [...prevData.slice(1), newPoint];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [oracleState, addLog]);

  const handleStartAnalysis = () => {
    setOracleState('ANALYZING');
    addLog({ magnitude: 0, description: 'Análise profunda da linha temporal iniciada pelo Fundador.', timeline: 'Principal' });

    setTimeout(() => {
      const anomalyDetected = Math.random() > 0.5;
      if (anomalyDetected) {
        const magnitude = 0.5 + Math.random() * 0.4;
        addLog({
            magnitude: magnitude,
            description: `Anomalia temporal significativa prevista. Paradoxo potencial em T+${Math.floor(Math.random() * 100)} ciclos.`,
            timeline: 'Gamma-P-4'
        });
        setOracleState('ANOMALY_DETECTED');
      } else {
         addLog({
            magnitude: 0,
            description: 'Nenhuma anomalia temporal significativa detectada. Fluxo contínuo estável.',
            timeline: 'Principal'
        });
        setOracleState('STABLE');
      }
    }, 3000 + Math.random() * 2000);
  };
  
  const StatusIndicator = useMemo(() => {
    switch(oracleState) {
        case 'ANALYZING':
            return <div className="flex items-center gap-2 text-blue-400"><LoaderCircle className="animate-spin" /><span>Analisando Fluxo Temporal...</span></div>;
        case 'ANOMALY_DETECTED':
            return <div className="flex items-center gap-2 text-red-400 animate-pulse"><AlertTriangle /><span>Anomalia Detectada! Ação requerida.</span></div>;
        case 'STABLE':
        default:
             return <div className="flex items-center gap-2 text-green-400"><CheckCircle /><span>Fluxo Temporal Estável</span></div>;
    }
  }, [oracleState]);


  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
            <BrainCircuit /> Módulo 3: Oráculo de Previsão Temporal
          </CardTitle>
          <CardDescription>
            Interface para análise de linhas temporais, detecção de anomalias e monitoramento do tecido multiversal.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Clock /> Controle do Oráculo</CardTitle>
            <CardDescription>Inicie simulações e monitore o estado do sistema.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="p-4 rounded-lg bg-background/50 border flex items-center justify-center text-lg font-semibold">
                {StatusIndicator}
             </div>
             <Button onClick={handleStartAnalysis} disabled={oracleState === 'ANALYZING'} className="w-full">
                {oracleState === 'ANALYZING' ? 'Analisando...' : 'Iniciar Análise Profunda'}
             </Button>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><BarChart /> Monitor de Dissonância Harmônica</CardTitle>
                <CardDescription>Visualização em tempo real da estabilidade e dissonância da linha temporal principal.</CardDescription>
            </CardHeader>
            <CardContent className="h-64">
                 <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border)/0.5)" />
                        <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" tick={{fontSize: 12}} />
                        <YAxis stroke="hsl(var(--muted-foreground))" tick={{fontSize: 12}} domain={[0, 1]}/>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--background)/0.8)",
                            borderColor: "hsl(var(--border))"
                          }}
                        />
                        <Legend wrapperStyle={{fontSize: "12px"}}/>
                        <Line type="monotone" dataKey="dissonance" name="Dissonância" stroke="hsl(var(--destructive))" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="stability" name="Estabilidade" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
      </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Anchor /> Âncoras Temporais Ativas</CardTitle>
            <CardDescription>Pontos de estabilidade fixados no tecido do tempo.</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-60">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead className="text-right">Estabilidade</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeAnchors.length === 0 ? (
                    <TableRow><TableCell colSpan={2} className="text-center h-24">Nenhuma âncora ativa.</TableCell></TableRow>
                  ) : activeAnchors.map(anchor => (
                    <TableRow key={anchor.id}>
                      <TableCell className="font-semibold">{anchor.name}</TableCell>
                      <TableCell className="text-right font-mono text-green-400">{(anchor.stability * 100).toFixed(2)}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Waves /> Simulações Multiversais</CardTitle>
            <CardDescription>Processos de simulação de realidades alternativas em andamento.</CardDescription>
          </CardHeader>
          <CardContent>
             <ScrollArea className="h-60">
                <div className="space-y-3">
                 {activeSimulations.length === 0 ? (
                    <div className="text-center text-muted-foreground pt-10">Nenhuma simulação ativa.</div>
                  ) : activeSimulations.map(sim => (
                    <div key={sim.id} className="p-3 rounded-lg bg-background/50 border">
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-semibold text-sm">{sim.type}</span>
                            <Badge variant="secondary">{sim.status}</Badge>
                        </div>
                        <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
                            <div className="h-full w-full flex-1 bg-primary transition-all" style={{ width: `${sim.progress}%` }} />
                        </div>
                    </div>
                  ))}
                </div>
             </ScrollArea>
          </CardContent>
        </Card>
       </div>

      <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2"><GitCommit /> Registro de Anomalias Temporais</CardTitle>
            <CardDescription>Eventos de alta significância detectados pelo Oráculo através das linhas temporais.</CardDescription>
        </CardHeader>
        <CardContent>
            <ScrollArea className="h-80">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Timestamp</TableHead>
                            <TableHead>Linha Temporal</TableHead>
                            <TableHead>Magnitude</TableHead>
                            <TableHead>Descrição</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {anomalies.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center text-muted-foreground h-24">
                                    Nenhuma anomalia registrada. O fluxo temporal está limpo.
                                </TableCell>
                            </TableRow>
                        )}
                        {anomalies.map(anomaly => (
                            <TableRow key={anomaly.id} className={cn(anomaly.magnitude > 0.7 && "bg-destructive/10 hover:bg-destructive/20")}>
                                <TableCell className="font-mono text-xs">{new Date(anomaly.timestamp).toLocaleString()}</TableCell>
                                <TableCell><Badge variant="secondary">{anomaly.timeline}</Badge></TableCell>
                                <TableCell><Badge variant={anomaly.magnitude > 0.7 ? "destructive" : "outline"}>{anomaly.magnitude.toFixed(3)}</Badge></TableCell>
                                <TableCell className="text-sm">{anomaly.description}</TableCell>
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

export default ModuleThree;
