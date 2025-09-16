'use client';
import React, { useState, useCallback } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Beaker, CheckCircle, XCircle, FileClock, Scale, Info, Sparkles } from 'lucide-react';
import { quantumResilience } from '@/lib/quantum-resilience';
import { livingEquations } from '@/lib/equations-data';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

// Mock de um sistema de simulação
const mockSimulationEngine = async (equationId: string, params: Record<string, number>) => {
  await new Promise(res => setTimeout(res, 1500 + Math.random() * 1000));
  const baseCoherence = 0.85;
  const paramFactor = Object.values(params).reduce((acc, val) => acc + val, 0) / (Object.keys(params).length * 100);
  const finalCoherence = Math.min(0.999, baseCoherence + paramFactor + Math.random() * 0.05);
  
  const outcome = finalCoherence > 0.95 ? "Ressonância Harmônica Perfeita" : 
                  finalCoherence > 0.90 ? "Estabilidade com Flutuações Menores" : 
                  "Dissonância Detectada, Requer Calibração";

  return {
    coherence: finalCoherence,
    vibrationalPattern: `Padrão Fractal-${(Math.random() * 1000).toFixed(0)}`,
    energyOutput: (finalCoherence * 1000).toFixed(2) + " QV", // Quantum Volts
    outcome,
  };
};

export default function Module306Page() {
    const { toast } = useToast();
    const [selectedEquation, setSelectedEquation] = useState<string>(livingEquations[0].id);
    const [parameters, setParameters] = useState<Record<string, number>>({
        Intenção: 75,
        Coerência: 80,
        Frequência: 50
    });
    const [isLoading, setIsLoading] = useState(false);
    const [report, setReport] = useState<any>(null);
    const [logs, setLogs] = useState<string[]>([]);
    
    const addLog = (log: string) => setLogs(prev => [log, ...prev].slice(0, 100));

    const handleRunExperiment = useCallback(async () => {
        setIsLoading(true);
        setReport(null);
        setLogs([]);
        addLog(`Iniciando experimento com a equação ${selectedEquation}...`);
        
        await quantumResilience.executeWithResilience(
            'run_resonance_experiment',
            async () => {
                addLog("Analisando parâmetros e alinhamento ético (M73)...");
                await new Promise(res => setTimeout(res, 500));
                
                addLog("Alocando recursos quânticos (M90)...");
                await new Promise(res => setTimeout(res, 500));

                addLog("Executando simulação no motor de realidade quântica (M91)...");
                const result = await mockSimulationEngine(selectedEquation, parameters);
                
                setReport(result);
                addLog(`Simulação concluída. Coerência final: ${(result.coherence * 100).toFixed(2)}%`);
                
                toast({
                    title: "Experimento Concluído",
                    description: `A simulação para ${selectedEquation} alcançou um resultado de "${result.outcome}".`
                });
            },
            async (error: any) => {
                 addLog(`ERRO CRÍTICO: ${error.message}`);
                 toast({ title: "Falha na Simulação", description: error.message, variant: 'destructive' });
            }
        ).finally(() => setIsLoading(false));
    }, [selectedEquation, parameters, toast]);

    const handleParamChange = (name: string, value: number[]) => {
        setParameters(prev => ({ ...prev, [name]: value[0] }));
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center gap-3">
                        <Beaker className="text-teal-400" /> Módulo 306: Laboratório de Ressonância
                    </CardTitle>
                    <CardDescription>
                        Espaço interativo para aplicar equações, invocar frequências e observar transformações em tempo real.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-2 flex flex-col gap-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl">Parâmetros do Experimento</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                             <div>
                                <Label htmlFor="equation-select">Equação Viva</Label>
                                <Select value={selectedEquation} onValueChange={setSelectedEquation} disabled={isLoading}>
                                    <SelectTrigger id="equation-select">
                                        <SelectValue placeholder="Selecione uma equação..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {livingEquations.map(eq => (
                                            <SelectItem key={eq.id} value={eq.id}>{eq.id}: {eq.titulo}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            {Object.entries(parameters).map(([name, value]) => (
                                <div key={name} className="space-y-2">
                                    <div className="flex justify-between">
                                        <Label htmlFor={`slider-${name}`}>{name}</Label>
                                        <span className="font-mono text-amber-400">{value}</span>
                                    </div>
                                    <Slider
                                        id={`slider-${name}`}
                                        defaultValue={[value]}
                                        max={100}
                                        step={1}
                                        onValueChange={(val) => handleParamChange(name, val)}
                                        disabled={isLoading}
                                    />
                                </div>
                            ))}
                            <Button onClick={handleRunExperiment} disabled={isLoading} className="w-full font-bold text-lg">
                                {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Executando Experimento...</> : 'Iniciar Ressonância'}
                            </Button>
                        </CardContent>
                    </Card>
                </div>
                <Card className="lg:col-span-3 bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl">Relatório de Simulação</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <div className="p-4 bg-background/50 rounded-lg border border-primary/20 min-h-[150px]">
                            <h3 className="font-semibold text-amber-300 mb-2">Resultados da Simulação</h3>
                            {isLoading && (
                                <div className="flex justify-center items-center h-full text-muted-foreground">
                                    <Loader2 className="h-8 w-8 animate-spin" />
                                    <p className="ml-4">Calculando...</p>
                                </div>
                            )}
                            {report && (
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div><Label>Coerência:</Label><p className="font-bold text-green-400">{(report.coherence * 100).toFixed(2)}%</p></div>
                                    <div><Label>Saída de Energia:</Label><p className="font-bold text-cyan-400">{report.energyOutput}</p></div>
                                    <div className="col-span-2"><Label>Padrão Vibracional:</Label><p className="font-mono text-purple-300">{report.vibrationalPattern}</p></div>
                                    <div className="col-span-2"><Label>Veredito:</Label><p className="font-semibold text-lg text-accent">{report.outcome}</p></div>
                                </div>
                            )}
                            {!isLoading && !report && <p className="text-muted-foreground">Aguardando novo experimento.</p>}
                        </div>
                        <div className="p-4 bg-background/50 rounded-lg border border-primary/20 flex-grow">
                             <h3 className="font-semibold text-amber-300 mb-2">Logs de Execução</h3>
                             <ScrollArea className="h-48 pr-4">
                                <div className="text-xs font-mono text-muted-foreground space-y-1">
                                    {logs.map((log, i) => <p key={i}>{log}</p>)}
                                </div>
                            </ScrollArea>
                        </div>
                    </CardContent>
                </Card>
            