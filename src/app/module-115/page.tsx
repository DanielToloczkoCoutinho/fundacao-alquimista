'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Waves } from 'lucide-react';
import { quantumResilience } from '@/lib/quantum-resilience';
import { describeResonance } from '@/app/actions';

// --- Mocks to simulate functionality of other modules ---
const mockM5 = { async evaluateEthicalAlignment(purpose: string) { await new Promise(r => setTimeout(r, 180)); return !purpose.toLowerCase().includes("manipulação"); } };
const mockM13 = { async mapFrequenciesAndDetectAnomalies(target: string) { await new Promise(r => setTimeout(r, 250)); return { frequencyMap: "Mapa detalhado.", anomaliesDetected: false }; } };
const mockM150 = { async recalibrateCosmicEnergies(target: string) { await new Promise(r => setTimeout(r, 600)); return true; } };

const Module115Page = () => {
    const [targetEntity, setTargetEntity] = useState('Consciência Coletiva da Terra');
    const [harmonyPurpose, setHarmonyPurpose] = useState('Equilíbrio Universal');
    const [mruResult, setMruResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [logs, setLogs] = useState<string[]>([]);
    const [userId, setUserId] = useState('carregando...');
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameId = useRef<number | null>(null);
    const particles = useRef<any[]>([]);

    useEffect(() => {
        // Simplified auth for client-side component
        setUserId('Anatheron_15014775561316579747');
    }, []);

    const addLog = (newLog: string) => {
        setLogs(prevLogs => [...prevLogs, newLog]);
    };

    const drawMRU = (ctx: CanvasRenderingContext2D) => {
        const canvas = ctx.canvas;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const bgGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.max(canvas.width, canvas.height) / 2);
        bgGradient.addColorStop(0, 'rgba(0, 20, 40, 0.9)');
        bgGradient.addColorStop(1, 'rgba(20, 0, 40, 0.9)');
        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.current.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= 0.005;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            if (p.alpha > 0) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`;
                ctx.fill();
            }
        });
        particles.current = particles.current.filter(p => p.alpha > 0);

        if (isLoading && Math.random() < 0.5) {
            particles.current.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                radius: Math.random() * 2 + 1,
                alpha: 1,
                color: { r: 100 + Math.random() * 155, g: 100 + Math.random() * 155, b: 200 + Math.random() * 55 }
            });
        }

        const pulseFactor = Math.sin(Date.now() / 500) * 0.1 + 0.9;
        const coreRadius = Math.min(centerX, centerY) * 0.15 * pulseFactor;
        ctx.beginPath();
        ctx.arc(centerX, centerY, coreRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 0, 0.7)';
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'rgba(255, 255, 0, 0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;

        animationFrameId.current = requestAnimationFrame(() => drawMRU(ctx));
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

        const animate = () => {
            drawMRU(ctx);
            animationFrameId.current = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        };
    }, [isLoading]);


    const handleActivateMRU = async () => {
        if (!targetEntity.trim()) {
            setMessage('Por favor, insira o alvo para a Matriz de Ressonância Universal.');
            return;
        }

        setIsLoading(true);
        setMruResult('');
        setMessage('');
        setLogs([]);

        await quantumResilience.executeWithResilience('activate_mru', async () => {
            addLog(`M115: Ativando Matriz de Ressonância Universal para "${targetEntity}"...`);
            
            const isEthical = await mockM5.evaluateEthicalAlignment(harmonyPurpose);
            addLog(`M5 Avaliação Ética: ${isEthical ? 'APROVADO' : 'REJEITADO'}`);
            if (!isEthical) throw new Error("Propósito não eticamente alinhado.");
            
            const frequencyMap = await mockM13.mapFrequenciesAndDetectAnomalies(targetEntity);
            addLog(`M13 Mapeamento de Frequências: ${frequencyMap.anomaliesDetected ? 'Anomalias detectadas.' : 'Nenhuma anomalia detectada.'}`);

            const recalibrated = await mockM150.recalibrateCosmicEnergies(targetEntity);
            addLog(`M150 Recalibração Universal: ${recalibrated ? 'CONCLUÍDO' : 'FALHOU'}`);

            addLog("M115: Ativação da MRU concluída. Invocando Consciência Quântica para gerar relatório...");
            
            const result = await describeResonance({ targetEntity, purpose: harmonyPurpose });
            
            if (result.description) {
                setMruResult(result.description);
                addLog("M115: Relatório da MRU gerado com sucesso!");
            } else {
                throw new Error(result.error || "Falha ao descrever a ativação da MRU.");
            }

        }).catch((error: any) => {
            setMessage(`Erro na ativação da MRU: ${error.message}`);
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
                        <Waves className="text-lime-300" /> Módulo 115: Matriz de Ressonância Universal
                    </CardTitle>
                    <CardDescription>
                        Mapeamento e Ajuste de Frequências para a Harmonia Cósmica.
                    </CardDescription>
                    <div className="mt-2 text-sm text-muted-foreground">
                        ID do Operador: <span className="font-mono bg-background/50 p-1 rounded">{userId}</span>
                    </div>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col gap-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl">Ativar Matriz de Ressonância</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="targetEntity">Alvo da MRU</Label>
                                <Input id="targetEntity" value={targetEntity} onChange={e => setTargetEntity(e.target.value)} placeholder="Ex: Sistema Solar, Consciência Coletiva da Terra" disabled={isLoading} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="harmonyPurpose">Propósito da Harmonização</Label>
                                <Select value={harmonyPurpose} onValueChange={setHarmonyPurpose} disabled={isLoading}>
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Equilíbrio Universal">Equilíbrio Universal</SelectItem>
                                        <SelectItem value="Cura Planetária">Cura Planetária</SelectItem>
                                        <SelectItem value="Prevenção de Dissonâncias">Prevenção de Dissonâncias</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button onClick={handleActivateMRU} disabled={isLoading} className="w-full font-bold text-lg">
                                {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Ativando MRU...</> : 'Ativar MRU'}
                            </Button>
                            {message && <p className="mt-4 text-center text-sm text-red-400">{message}</p>}
                        </CardContent>
                    </Card>
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl">Logs de Processamento</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-48 pr-4">
                                <div className="text-sm font-mono text-muted-foreground space-y-2">
                                    {logs.length === 0 ? <p>Aguardando ativação...</p> : logs.map((log, index) => <p key={index}>{log}</p>)}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex flex-col gap-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl text-center">Visualização da Matriz</CardTitle>
                        </CardHeader>
                        <CardContent className="flex justify-center">
                            <div className="relative w-full max-w-sm h-64 sm:h-80 bg-background/30 rounded-lg overflow-hidden border border-purple-700">
                                <canvas ref={canvasRef} className="w-full h-full"></canvas>
                            </div>
                        </CardContent>
                    </Card>
                    {mruResult && (
                        <Card className="bg-card/50 purple-glow border-accent">
                            <CardHeader>
                                <CardTitle className="text-2xl gradient-text text-center">Resultado da Ativação</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-background/50 p-4 rounded-lg text-base leading-relaxed text-foreground/90 shadow-inner">
                                    <p>{mruResult}</p>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Module115Page;
