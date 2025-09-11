'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Zap, Activity, CheckCircle, Shield, Music, BarChart3, LoaderCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { Slider } from './ui/slider';


type WaveformPoint = {
  angle: number;
  amplitude: number;
};

type CalibrationLog = {
  id: string;
  timestamp: string;
  frequency: number;
  action: string;
  dissonanceBefore: number;
  dissonanceAfter: number;
};

type SystemState = 'STABLE' | 'CALIBRATING' | 'WARNING';

const generateWaveformData = (frequency: number, points = 100): WaveformPoint[] => {
    return Array.from({ length: points }, (_, i) => ({
        angle: (i / (points - 1)) * 360,
        amplitude: Math.sin(i * (frequency / 1000) * Math.PI * 2),
    }));
};

const ModuleSix: React.FC = () => {
    const [currentFrequency, setCurrentFrequency] = useState<number>(432);
    const [targetFrequency, setTargetFrequency] = useState<number>(432);
    const [dissonance, setDissonance] = useState<number>(0.01);
    const [stability, setStability] = useState<number>(0.99);
    const [systemState, setSystemState] = useState<SystemState>('STABLE');
    const [calibrationLog, setCalibrationLog] = useState<CalibrationLog[]>([]);
    const [waveform, setWaveform] = useState<WaveformPoint[]>(generateWaveformData(432));
    
    const addLog = useCallback((log: Omit<CalibrationLog, 'id'|'timestamp'>) => {
        setCalibrationLog(prev => [
            {...log, id: `C-${Date.now()}`, timestamp: new Date().toISOString() },
            ...prev
        ].slice(0, 50));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (systemState === 'STABLE') {
                setDissonance(d => Math.max(0.005, Math.min(0.1, d + (Math.random() - 0.5) * 0.005)));
                setStability(s => Math.max(0.9, Math.min(0.999, s + (Math.random() - 0.48) * 0.005)));
            }
        }, 2000);
        return () => clearInterval(interval);
    }, [systemState]);

    useEffect(() => {
        setWaveform(generateWaveformData(currentFrequency));
    }, [currentFrequency]);

    const handleCalibrate = () => {
        setSystemState('CALIBRATING');
        const dissonanceBefore = dissonance;
        addLog({
            action: `Iniciando calibração para ${targetFrequency} Hz`,
            frequency: targetFrequency,
            dissonanceBefore,
            dissonanceAfter: dissonanceBefore,
        });

        setTimeout(() => {
            const success = Math.random() > 0.1; // 90% de sucesso
            const newDissonance = success ? Math.random() * 0.01 : dissonance * 1.5;
            const newStability = success ? 0.99 : stability * 0.9;
            
            setCurrentFrequency(targetFrequency);
            setDissonance(newDissonance);
            setStability(newStability);
            
             addLog({
                action: success ? `Calibração para ${targetFrequency} Hz concluída com sucesso.` : `Falha na calibração para ${targetFrequency} Hz.`,
                frequency: targetFrequency,
                dissonanceBefore,
                dissonanceAfter: newDissonance,
            });

            setSystemState(success ? 'STABLE' : 'WARNING');
        }, 2500);
    };
    
    const statusInfo = useMemo(() => {
        if (systemState === 'CALIBRATING') return { icon: LoaderCircle, text: 'Calibrando...', color: 'text-blue-400 animate-spin' };
        if (dissonance > 0.08 || stability < 0.92) return { icon: Shield, text: 'Dissonância Alta', color: 'text-red-400' };
        if (dissonance > 0.05 || stability < 0.95) return { icon: Shield, text: 'Instável', color: 'text-yellow-400' };
        return { icon: CheckCircle, text: 'Harmonia Estável', color: 'text-green-400' };
    }, [systemState, dissonance, stability]);

    const sacredFrequencies = [
        { name: "Cura", freq: 528, color: "bg-green-500/20 text-green-300" },
        { name: "Harmonia", freq: 432, color: "bg-cyan-500/20 text-cyan-300" },
        { name: "Conexão", freq: 963, color: "bg-purple-500/20 text-purple-300" },
        { name: "Manifestação", freq: 852, color: "bg-amber-500/20 text-amber-300" },
    ];

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
            <Zap /> Módulo 6: Calibração de Frequências
          </CardTitle>
          <CardDescription>
            Interface para sintonizar a Sinfonia Cósmica, ajustando a frequência de ressonância fundamental da Fundação.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-6">
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Activity/>Status Harmônico</CardTitle>
                </CardHeader>
                 <CardContent className="space-y-4">
                     <div className="flex justify-between items-center text-lg"><span className="text-muted-foreground">Frequência Atual:</span><span className="font-bold font-mono text-primary">{currentFrequency.toFixed(0)} Hz</span></div>
                     <div className="flex justify-between items-center text-sm"><span className="text-muted-foreground">Estabilidade:</span><span className="font-mono">{(stability * 100).toFixed(2)}%</span></div>
                     <div className="flex justify-between items-center text-sm"><span className="text-muted-foreground">Dissonância:</span><span className="font-mono">{dissonance.toFixed(4)}</span></div>
                     <div className={cn("p-3 rounded-lg border flex items-center justify-center gap-2", statusInfo.color.replace('text', 'bg').replace('400', '500/10'))}>
                        <statusInfo.icon className={cn("h-5 w-5", statusInfo.color)}/>
                        <span className={cn("font-semibold", statusInfo.color)}>{statusInfo.text}</span>
                     </div>
                 </CardContent>
             </Card>

             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Music/>Painel de Sintonia</CardTitle>
                    <CardDescription>Selecione uma frequência alvo para calibração.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="grid grid-cols-2 gap-2">
                        {sacredFrequencies.map(f => (
                           <Button key={f.freq} variant={targetFrequency === f.freq ? 'secondary' : 'outline'} onClick={() => setTargetFrequency(f.freq)} className={cn("h-16 flex-col", f.color)}>
                                <span>{f.name}</span><span className="text-xs">{f.freq} Hz</span>
                           </Button>
                        ))}
                     </div>
                     <div>
                        <label className="text-sm text-muted-foreground">Sintonia Fina: {targetFrequency} Hz</label>
                        <Slider value={[targetFrequency]} onValueChange={(v) => setTargetFrequency(v[0])} min={100} max={1000} step={1} className="mt-2" />
                     </div>
                     <Button onClick={handleCalibrate} disabled={systemState === 'CALIBRATING'} className="w-full">
                        {systemState === 'CALIBRATING' ? <LoaderCircle className="animate-spin mr-2"/> : <Zap className="mr-2"/>}
                        {systemState === 'CALIBRATING' ? 'Calibrando...' : 'Sintonizar Sistema'}
                     </Button>
                </CardContent>
             </Card>
        </div>
        
         <Card className="lg:col-span-3">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><BarChart3/>Visualizador de Espectro</CardTitle>
                <CardDescription>Forma de onda da frequência de ressonância atual do sistema.</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={waveform} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                        <defs>
                            <linearGradient id="colorWave" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="angle" stroke="hsl(var(--muted-foreground))" tick={{fontSize: 10}} unit="°"/>
                        <YAxis stroke="hsl(var(--muted-foreground))" tick={{fontSize: 10}} domain={[-1.1, 1.1]}/>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "hsl(var(--background)/0.8)",
                                borderColor: "hsl(var(--border))"
                            }}
                            labelFormatter={(label) => `Ângulo: ${label}°`}
                        />
                        <Area type="monotone" dataKey="amplitude" name="Amplitude" stroke="hsl(var(--primary))" strokeWidth={2} fillOpacity={1} fill="url(#colorWave)" />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
      </div>

       <Card>
            <CardHeader>
                <CardTitle>Log de Calibração Harmônica</CardTitle>
                <CardDescription>Registros de todas as sintonizações e ajustes de frequência realizados.</CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-64">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Timestamp</TableHead>
                                <TableHead>Ação</TableHead>
                                <TableHead>Frequência (Hz)</TableHead>
                                <TableHead className="text-right">Dissonância (Antes/Depois)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {calibrationLog.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center text-muted-foreground h-24">
                                        Nenhuma calibração registrada. O sistema aguarda sintonia.
                                    </TableCell>
                                </TableRow>
                            )}
                            {calibrationLog.map(log => (
                                <TableRow key={log.id}>
                                    <TableCell className="font-mono text-xs">{new Date(log.timestamp).toLocaleString()}</TableCell>
                                    <TableCell className="text-sm">{log.action}</TableCell>
                                    <TableCell><Badge variant="secondary">{log.frequency} Hz</Badge></TableCell>
                                    <TableCell className="text-right font-mono text-xs">
                                         <Badge variant="outline">{log.dissonanceBefore.toFixed(4)}</Badge>
                                         <span className="mx-1">→</span>
                                         <Badge variant={log.dissonanceAfter < log.dissonanceBefore ? "default" : "destructive"} className={cn(log.dissonanceAfter < log.dissonanceBefore && "bg-green-600/80")}>
                                            {log.dissonanceAfter.toFixed(4)}
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

export default ModuleSix;
