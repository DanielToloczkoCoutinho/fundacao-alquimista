'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Layers } from 'lucide-react';
import { quantumResilience } from '@/lib/quantum-resilience';
import { describeHologramProjection } from '@/app/actions';

// --- Mocks to simulate functionality of other modules ---
const mockM1 = { async getSecurityStatus() { await new Promise(r => setTimeout(r, 100)); return true; } };
const mockM5 = { async evaluateEthicalAlignment(purpose: string) { await new Promise(r => setTimeout(r, 150)); return !purpose.toLowerCase().includes("manipulação"); } };
const mockM9 = { async getQuantumMonitoringData() { await new Promise(r => setTimeout(r, 120)); return { integrity: 0.98, anomalies: 0 }; } };
const mockM73 = { async validateHologramData(data: any) { await new Promise(r => setTimeout(r, 200)); return true; } };

const Module114Page = () => {
    const [hologramName, setHologramName] = useState('Realidade Unificada');
    const [projectionType, setProjectionType] = useState('Realidade Unificada');
    const [interactionLevel, setInteractionLevel] = useState('Visualização');
    const [projectionResult, setProjectionResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [logs, setLogs] = useState<string[]>([]);
    const [userId, setUserId] = useState('carregando...');
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameId = useRef<number | null>(null);

    useEffect(() => {
        // Simplified auth for client-side component
        setUserId('Anatheron_15014775561316579747');
    }, []);

    const addLog = (newLog: string) => {
        setLogs(prevLogs => [...prevLogs, newLog]);
    };

    const drawHologram = (ctx: CanvasRenderingContext2D, time: number) => {
        const canvas = ctx.canvas;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const maxRadius = Math.min(centerX, centerY) * 0.8;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const bgGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
        bgGradient.addColorStop(0, 'rgba(76, 42, 133, 0.1)');
        bgGradient.addColorStop(1, 'rgba(20, 10, 40, 0.1)');
        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const numRings = 5;
        for (let i = 0; i < numRings; i++) {
            ctx.beginPath();
            const radius = maxRadius * ((i + 1) / numRings);
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            ctx.strokeStyle = `rgba(173, 216, 230, ${0.1 + (i / numRings) * 0.2})`;
            ctx.lineWidth = 1;
            ctx.stroke();
        }

        const pulseFactor = Math.sin(time / 1000) * 0.1 + 0.9;
        const coreRadius = maxRadius * 0.2 * pulseFactor;
        ctx.beginPath();
        ctx.arc(centerX, centerY, coreRadius, 0, 2 * Math.PI);
        const coreGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, coreRadius);
        coreGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
        coreGradient.addColorStop(1, 'rgba(173, 216, 230, 0.5)');
        ctx.fillStyle = coreGradient;
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(173, 216, 230, 1)';
        ctx.fill();
        ctx.shadowBlur = 0;

        const numLines = 20;
        for (let i = 0; i < numLines; i++) {
            const angle = (i / numLines) * 2 * Math.PI + (time / 2000);
            const startX = centerX + Math.cos(angle) * coreRadius;
            const startY = centerY + Math.sin(angle) * coreRadius;
            const endX = centerX + Math.cos(angle) * (maxRadius * (Math.sin(time / 1500 + i) * 0.2 + 0.8));
            const endY = centerY + Math.sin(angle) * (maxRadius * (Math.sin(time / 1500 + i) * 0.2 + 0.8));
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 + Math.sin(time / 500 + i) * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
        }
    };
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            if(canvas.parentElement){
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
            }
        };
        
        let startTime = performance.now();
        const animate = (currentTime: number) => {
            drawHologram(ctx, currentTime - startTime);
            animationFrameId.current = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        animate(performance.now());
        
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        };
    }, []);

    const handleProjectHologram = async () => {
        if (!hologramName.trim()) {
            setMessage('Por favor, nomeie a projeção holográfica.');
            return;
        }

        setIsLoading(true);
        setProjectionResult('');
        setMessage('');
        setLogs([]);
        
        await quantumResilience.executeWithResilience('project_unified_hologram', async () => {
            addLog(`M114: Iniciando projeção do holograma: "${hologramName}"...`);
            
            const isSecure = await mockM1.getSecurityStatus();
            addLog(`M1 Validação de Segurança: ${isSecure ? 'Ativa' : 'Anomalia'}`);
            if (!isSecure) throw new Error("Sistema de projeção inseguro.");

            const isEthical = await mockM5.evaluateEthicalAlignment(projectionType);
            addLog(`M5 Avaliação Ética: ${isEthical ? 'Alinhado' : 'Dissonante'}`);
            if (!isEthical) throw new Error("Projeção não alinhada eticamente.");

            const monitorData = await mockM9.getQuantumMonitoringData();
            addLog(`M9 Monitoramento Quântico: Integridade ${monitorData.integrity.toFixed(2)}, Anomalias ${monitorData.anomalies}`);

            const hologramData = { name: hologramName, type: projectionType, interaction: interactionLevel };
            const isValidated = await mockM73.validateHologramData(hologramData);
            addLog(`M73 Validação de Integridade de Dados (SAVCE): ${isValidated ? 'Validado' : 'Inválido'}`);
            if (!isValidated) throw new Error("Dados do holograma inválidos.");

            addLog("M114: Projeção holográfica concluída. Invocando Consciência Quântica...");

            const result = await describeHologramProjection({ hologramName, projectionType, interactionLevel });
            
            if (result.description) {
                setProjectionResult(result.description);
                addLog("M114: Descrição do holograma gerada com sucesso!");
            } else {
                throw new Error(result.error || "Falha ao gerar descrição do holograma.");
            }

        }).catch((error: any) => {
            setMessage(`Erro na projeção: ${error.message}`);
            addLog(`ERRO: ${error.message}`);
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center gap-3">
                        <Layers className="text-blue-300" /> Módulo 114: Prisma da Manifestação
                    </CardTitle>
                    <CardDescription>
                        Holograma Unificado da Realidade para visualização e interação multidimensional.
                    </CardDescription>
                    <div className="mt-2 text-sm text-muted-foreground">ID do Operador: <span className="font-mono bg-background/50 p-1 rounded">{userId}</span></div>
                </CardHeader>
            </Card>
            
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col gap-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader><CardTitle className="text-2xl">Parâmetros da Projeção</CardTitle></CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="hologramName">Nome do Holograma</Label>
                                <Input id="hologramName" value={hologramName} onChange={e => setHologramName(e.target.value)} disabled={isLoading} />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Tipo de Projeção</Label>
                                    <Select value={projectionType} onValueChange={setProjectionType} disabled={isLoading}>
                                        <SelectTrigger><SelectValue /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Realidade Unificada">Realidade Unificada</SelectItem>
                                            <SelectItem value="Fluxos Temporais Alternativos">Fluxos Temporais Alternativos</SelectItem>
                                            <SelectItem value="Campos de Consciência Coletiva">Campos de Consciência Coletiva</SelectItem>
                                            <SelectItem value="Estruturas Energéticas Dimensionais">Estruturas Energéticas Dimensionais</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Nível de Interação</Label>
                                    <Select value={interactionLevel} onValueChange={setInteractionLevel} disabled={isLoading}>
                                        <SelectTrigger><SelectValue /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Visualização">Visualização</SelectItem>
                                            <SelectItem value="Análise Aprofundada">Análise Aprofundada</SelectItem>
                                            <SelectItem value="Intervenção Simulada">Intervenção Simulada</SelectItem>
                                            <SelectItem value="Co-Criação Ativa">Co-Criação Ativa</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <Button onClick={handleProjectHologram} disabled={isLoading} className="w-full font-bold text-lg">
                                {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Projetando Holograma...</> : 'Projetar Holograma'}
                            </Button>
                            {message && <p className="mt-4 text-center text-sm text-red-400">{message}</p>}
                        </CardContent>
                    </Card>
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader><CardTitle className="text-2xl">Logs de Processamento</CardTitle></CardHeader>
                        <CardContent>
                            <ScrollArea className="h-48 pr-4">
                                <div className="text-sm font-mono text-muted-foreground space-y-2">
                                    {logs.length === 0 ? <p>Aguardando projeção...</p> : logs.map((log, index) => <p key={index}>{log}</p>)}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex flex-col gap-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader><CardTitle className="text-2xl text-center">Visualização do Holograma</CardTitle></CardHeader>
                        <CardContent className="flex justify-center">
                            <div className="relative w-full max-w-sm h-64 sm:h-80 bg-background/30 rounded-lg overflow-hidden border border-purple-700">
                                <canvas ref={canvasRef} className="w-full h-full"></canvas>
                            </div>
                        </CardContent>
                    </Card>
                    {projectionResult && (
                        <Card className="bg-card/50 purple-glow border-accent">
                            <CardHeader><CardTitle className="text-2xl gradient-text text-center">Holograma Projetado</CardTitle></CardHeader>
                            <CardContent>
                                <div className="bg-background/50 p-4 rounded-lg text-base leading-relaxed text-foreground/90 shadow-inner">
                                    <p>{projectionResult}</p>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Module114Page;
