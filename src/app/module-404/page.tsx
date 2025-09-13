'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { quantumResilience } from '@/lib/quantum-resilience';

const mockM107 = { restore: async (timeline: string, point: string) => ({ success: true, stability: 0.99 }) };
const mockM108 = { harmonize: async (timeline: string, conflict: string) => ({ success: true, dissonanceReduced: 0.98 }) };
const mockM5 = { evaluateEthicalImpact: async (action: string) => ({ conformity: !action.toLowerCase().includes("apagar") }) };

const Module404Page = () => {
    const [paradoxDescription, setParadoxDescription] = useState('Um loop causal foi detectado na linha temporal Terra-Gama-2042, onde um evento futuro está impedindo sua própria causa de ocorrer.');
    const [isLoading, setIsLoading] = useState(false);
    const [resolutionResult, setResolutionResult] = useState<any>(null);
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (log: string) => setLogs(prev => [log, ...prev].slice(0, 100));

    const handleResolve = async () => {
        setIsLoading(true);
        setLogs([]);
        setResolutionResult(null);
        addLog(`Iniciando resolução do paradoxo: "${paradoxDescription.substring(0, 50)}..."`);

        await quantumResilience.executeWithResilience('resolve_paradox', async () => {
            await new Promise(r => setTimeout(r, 300));
            addLog("Analisando impacto ético da intervenção (M5)...");
            const ethicalCheck = await mockM5.evaluateEthicalImpact(paradoxDescription);
            if (!ethicalCheck.conformity) throw new Error("Intervenção não alinhada eticamente. Resolução abortada.");
            addLog("Alinhamento ético APROVADO.");

            addLog("Harmonizando linhas temporais conflitantes (M108)...");
            const harmonizationResult = await mockM108.harmonize('Terra-Gama-2042', paradoxDescription);
            if (!harmonizationResult.success) throw new Error("Falha na harmonização das realidades.");
            addLog(`Harmonização concluída. Dissonância causal reduzida.`);

            addLog("Restaurando a linha do tempo original (M107)...");
            const restorationResult = await mockM107.restore('Terra-Gama-2042', 'Ponto de Inflexão Causal');
            if (!restorationResult.success) throw new Error("Falha na restauração da linha do tempo.");
            addLog(`Restauração concluída. Estabilidade final: ${(restorationResult.stability * 100).toFixed(2)}%`);

            await new Promise(r => setTimeout(r, 500));
            setResolutionResult({ success: true, message: `Paradoxo resolvido e linha do tempo estabilizada com sucesso.` });
            addLog("Operação finalizada.");

        }).catch(err => {
            const error = err as Error;
            addLog(`ERRO CRÍTICO: ${error.message}`);
            setResolutionResult({ success: false, reason: error.message });
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center gap-3">
                        <AlertTriangle className="text-yellow-500" /> Módulo 404: Resolução de Paradoxo
                    </CardTitle>
                    <CardDescription>
                        Ferramenta de intervenção para detectar, analisar e neutralizar paradoxos temporais e inconsistências causais.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle>Descrição do Paradoxo</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="paradoxDescription">Detalhes do Paradoxo Detectado</Label>
                            <Textarea id="paradoxDescription" value={paradoxDescription} onChange={e => setParadoxDescription(e.target.value)} rows={6} />
                        </div>
                        <Button onClick={handleResolve} disabled={isLoading} className="w-full font-bold">
                            {isLoading ? <Loader2 className="animate-spin mr-2" /> : null}
                            Resolver Paradoxo
                        </Button>
                    </CardContent>
                </Card>

                 <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle>Status e Logs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isLoading && <div className="flex justify-center items-center h-full"><Loader2 className="h-12 w-12 text-amber-400 animate-spin" /></div>}
                        {!isLoading && resolutionResult && (
                             <div className="mb-4 p-4 rounded-lg bg-background/50 border border-accent">
                                {resolutionResult.success ? (
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="text-green-400 h-6 w-6" />
                                        <div>
                                            <h3 className="font-bold text-green-400">Paradoxo Resolvido</h3>
                                            <p className="text-sm">{resolutionResult.message}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-3">
                                        <XCircle className="text-red-400 h-6 w-6" />
                                        <div>
                                            <h3 className="font-bold text-red-400">Falha na Resolução</h3>
                                            <p className="text-sm">{resolutionResult.reason}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                        <ScrollArea className="h-48 pr-4">
                            <div className="text-xs font-mono text-muted-foreground space-y-1">
                                {logs.map((log, i) => <p key={i}>{log}</p>)}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Module404Page;
