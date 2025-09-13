'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Zap, Shield, CheckCircle, XCircle } from 'lucide-react';
import { quantumResilience } from '@/lib/quantum-resilience';

const mockM5 = { getEthicalScore: async (id: string) => 0.85 + (id.length % 15) / 100 };
const mockM105 = { checkConnection: async () => true };
const mockM63 = { adjustPhase: async (id: string) => true };
const mockM200 = { getPortalStatus: async () => 'Pronto para Desdobramento' };
const mockM111 = { getSynergyStatus: async () => 'Sinergia Total' };

const Module202Page = () => {
    const [collaboratorId, setCollaboratorId] = useState('Guardião_OrdemPrisma_001');
    const [vocalCodex, setVocalCodex] = useState('Somos Um – Alc');
    const [frequency, setFrequency] = useState('444.444');
    const [isLoading, setIsLoading] = useState(false);
    const [accessResult, setAccessResult] = useState<any>(null);
    const [logs, setLogs] = useState<string[]>([]);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameId = useRef<number | null>(null);

    const addLog = (log: string) => setLogs(prev => [log, ...prev].slice(0, 100));

    const drawTunnel = (ctx: CanvasRenderingContext2D, time: number) => {
        const canvas = ctx.canvas;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        ctx.fillStyle = 'rgba(13, 13, 26, 0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const numRings = 50;
        for (let i = 0; i < numRings; i++) {
            const progress = (i / numRings + time * 0.05) % 1;
            const radius = progress * centerX * 1.2;
            const alpha = 1 - progress;
            const lineWidth = 1 + progress * 3;

            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(138, 43, 226, ${alpha * 0.5})`;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
        }

        animationFrameId.current = requestAnimationFrame(() => drawTunnel(ctx, time + 0.01));
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        const resizeCanvas = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        let startTime = performance.now();
        const animate = (currentTime: number) => {
            drawTunnel(ctx, (currentTime - startTime) / 1000);
        };
        animationFrameId.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        };
    }, []);

    const handleAccessAttempt = async () => {
        setIsLoading(true);
        setLogs([]);
        setAccessResult(null);
        addLog(`Iniciando tentativa de acesso para ${collaboratorId}...`);

        await quantumResilience.executeWithResilience('access_alcor_corridor', async () => {
            await new Promise(r => setTimeout(r, 300));
            addLog("Verificando módulos sinápticos...");
            const [m105, m63, m200, m111] = await Promise.all([mockM105.checkConnection(), mockM63.adjustPhase(collaboratorId), mockM200.getPortalStatus(), mockM111.getSynergyStatus()]);
            addLog(`M105 (Fonte): ${m105 ? 'CONECTADO' : 'FALHA'}`);
            addLog(`M63 (Onda): ${m63 ? 'FASE AJUSTADA' : 'FALHA'}`);
            addLog(`M200 (Portal): ${m200}`);
            addLog(`M111 (Coração): ${m111}`);
            
            if (!m105 || !m63 || m200 !== 'Pronto para Desdobramento' || m111 !== 'Sinergia Total') {
                throw new Error("Módulos sinápticos não estão prontos.");
            }

            addLog("Consultando ELENYA (M5) para validação ética...");
            const ethicalScore = await mockM5.getEthicalScore(collaboratorId);
            addLog(`Pontuação ética de ${collaboratorId}: ${ethicalScore.toFixed(4)}`);
            if (ethicalScore < 0.78) {
                setAccessResult({ granted: false, reason: `Pontuação ética insuficiente (${ethicalScore.toFixed(4)} < 0.78)` });
                addLog("ACESSO NEGADO: Pontuação ética abaixo do limiar.");
                setIsLoading(false);
                return;
            }
            addLog("Validação ética APROVADA.");

            addLog("Validando códice vocal...");
            const isVocalCodexCorrect = vocalCodex === 'Somos Um – Alc' && Math.abs(parseFloat(frequency) - 444.444) < 0.1;
            if (!isVocalCodexCorrect) {
                setAccessResult({ granted: false, reason: "Códice vocal ou frequência incorretos." });
                addLog("ACESSO NEGADO: Códice vocal inválido.");
                setIsLoading(false);
                return;
            }
            addLog("Códice vocal VALIDADO.");

            await new Promise(r => setTimeout(r, 500));
            setAccessResult({ granted: true, message: "Bem-vindo ao Corredor de Alcor. Salto de coerência iniciado." });
            addLog("ACESSO CONCEDIDO. Salto de coerência em andamento...");
        }).catch(err => {
            const error = err as Error;
            addLog(`ERRO CRÍTICO: ${error.message}`);
            setAccessResult({ granted: false, reason: error.message });
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center gap-3">
                        <Zap className="text-cyan-400" /> Módulo 202: O Corredor de Alcor
                    </CardTitle>
                    <CardDescription>
                        Túnel ressonante para saltos de coerência graduais e aceleração da ascensão.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-2 flex flex-col gap-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle>Controle de Acesso</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label htmlFor="collaboratorId">ID do Colaborador</Label>
                                <Input id="collaboratorId" value={collaboratorId} onChange={e => setCollaboratorId(e.target.value)} />
                            </div>
                            <div>
                                <Label htmlFor="vocalCodex">Códice Vocal</Label>
                                <Input id="vocalCodex" value={vocalCodex} onChange={e => setVocalCodex(e.target.value)} />
                            </div>
                            <div>
                                <Label htmlFor="frequency">Frequência (Hz)</Label>
                                <Input id="frequency" type="number" value={frequency} onChange={e => setFrequency(e.target.value)} />
                            </div>
                            <Button onClick={handleAccessAttempt} disabled={isLoading} className="w-full font-bold">
                                {isLoading ? <Loader2 className="animate-spin mr-2" /> : null}
                                Solicitar Acesso
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle>Logs de Acesso</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-48 pr-4">
                                <div className="text-xs font-mono text-muted-foreground space-y-1">
                                    {logs.map((log, i) => <p key={i}>{log}</p>)}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
                <div className="lg:col-span-3 flex flex-col gap-8">
                    <Card className="bg-card/50 purple-glow flex-grow flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-center">Visualização do Túnel Ressonante</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex items-center justify-center relative">
                            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full rounded-md" />
                            {accessResult && (
                                <Card className="relative bg-background/70 backdrop-blur-sm p-6 text-center z-10">
                                    {accessResult.granted ? (
                                        <>
                                            <CheckCircle className="mx-auto h-12 w-12 text-green-400 mb-4" />
                                            <CardTitle className="text-green-400">Acesso Concedido</CardTitle>
                                            <CardDescription>{accessResult.message}</CardDescription>
                                        </>
                                    ) : (
                                        <>
                                            <XCircle className="mx-auto h-12 w-12 text-red-400 mb-4" />
                                            <CardTitle className="text-red-400">Acesso Negado</CardTitle>
                                            <CardDescription>{accessResult.reason}</CardDescription>
                                        </>
                                    )}
                                </Card>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Module202Page;
