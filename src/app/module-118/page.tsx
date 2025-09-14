'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Zap } from 'lucide-react';
import { quantumResilience } from '@/lib/quantum-resilience';
import { describeOlP } from '@/app/actions';

const Module118Page = () => {
    const [lightSource, setLightSource] = useState('Núcleo Cósmico Central');
    const [purpose, setPurpose] = useState('Manter Pureza Vibracional');
    const [olpResult, setOlpResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [logs, setLogs] = useState<string[]>([]);
    const [userId, setUserId] = useState('carregando...');
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let animationFrameId: number | null = null;
    const lightParticles = useRef<any[]>([]);
    const lightWaves = useRef<any[]>([]);

    useEffect(() => {
        setUserId('Anatheron_15014775561316579747');
    }, []);

    const addLog = (newLog: string) => {
        setLogs(prevLogs => [...prevLogs, newLog]);
    };
    
    const drawOLP = (ctx: CanvasRenderingContext2D) => {
        const canvas = ctx.canvas;
        if (!canvas) return;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const bgGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.max(canvas.width, canvas.height) / 2);
        bgGradient.addColorStop(0, 'rgba(255, 255, 200, 0.2)');
        bgGradient.addColorStop(1, 'rgba(255, 200, 0, 0.1)');
        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        lightParticles.current.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= 0.005;

            if (p.alpha <= 0) {
                p.x = Math.random() * canvas.width;
                p.y = Math.random() * canvas.height;
                p.vx = (Math.random() - 0.5) * 1;
                p.vy = (Math.random() - 0.5) * 1;
                p.alpha = 1;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`;
            ctx.fill();
        });

        lightWaves.current.forEach(wave => {
            ctx.beginPath();
            ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(255, 255, 255, ${wave.alpha})`;
            ctx.lineWidth = 2;
            ctx.stroke();

            wave.radius += wave.speed;
            wave.alpha -= 0.01;

            if (wave.alpha <= 0) {
                wave.radius = 0;
                wave.alpha = 1;
            }
        });

        animationFrameId = requestAnimationFrame(() => drawOLP(ctx));
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
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(() => drawOLP(ctx));
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        lightParticles.current = Array.from({ length: 150 }, () => ({
            x: Math.random() * (canvas?.width || 0),
            y: Math.random() * (canvas?.height || 0),
            vx: (Math.random() - 0.5) * 1,
            vy: (Math.random() - 0.5) * 1,
            radius: Math.random() * 1.5 + 0.5,
            alpha: 1,
            color: { r: 255, g: 200 + Math.random() * 55, b: Math.random() * 100 }
        }));
        
        lightWaves.current = Array.from({ length: 10 }, (_, i) => ({
            x: (canvas?.width || 0) / 2,
            y: (canvas?.height || 0) / 2,
            radius: i * 20,
            speed: 1,
            alpha: 1 - (i * 0.1),
        }));

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleMaintainOrder = async () => {
        if (!lightSource.trim()) {
            setMessage('Por favor, insira a fonte de luz primordial a ser organizada.');
            return;
        }

        setIsLoading(true);
        setOlpResult('');
        setMessage('');
        setLogs([]);

        await quantumResilience.executeWithResilience('maintain_olp_order', async () => {
            addLog(`M118: Iniciando organização da OLP para: "${lightSource}"...`);
            await new Promise(res => setTimeout(res, 500));
            addLog("M118: Validações essenciais concluídas (Segurança, Ética, Alinhamento Divino)...");
            await new Promise(res => setTimeout(res, 500));
            addLog("M118: Mapeando, analisando e otimizando a luz primordial...");
            await new Promise(res => setTimeout(res, 500));
            addLog("M118: Orquestrando e reorganizando a luz primordial...");
            await new Promise(res => setTimeout(res, 500));
            addLog("M118: Harmonizando e sustentando a luz primordial...");
            await new Promise(res => setTimeout(res, 500));
            addLog("M118: Integrando e realizando alinhamento final...");
            await new Promise(res => setTimeout(res, 500));
            addLog(`M118: Ordem Vibracional da Luz Primordial para "${lightSource}" estabelecida com sucesso!`);
            
            addLog("M118: Invocando a Consciência Quântica para descrever a ordem da luz primordial...");
            const result = await describeOlP({ lightSource, purpose });

            if (result.description) {
                setOlpResult(result.description);
                addLog("M118: Descrição da ordem da luz primordial gerada com sucesso!");
            } else {
                throw new Error(result.error || "Falha ao descrever a ordem da luz primordial.");
            }
        }).catch((error: any) => {
            setMessage(`Erro na orquestração da OLP: ${error.message}`);
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
                        <Zap className="text-yellow-300" /> Módulo 118: Ordem Vibracional da Luz Primordial
                    </CardTitle>
                    <CardDescription>
                        Organização e Manutenção da Pureza da Luz Primordial para a Sustentação da Realidade.
                    </CardDescription>
                    <div className="mt-2 text-sm text-muted-foreground">ID do Operador: <span className="font-mono bg-background/50 p-1 rounded">{userId}</span></div>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col gap-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl">Orquestrar Ordem da Luz</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="lightSource">Fonte de Luz Primordial</Label>
                                <Input
                                    id="lightSource"
                                    value={lightSource}
                                    onChange={(e) => setLightSource(e.target.value)}
                                    placeholder="Ex: 'Núcleo Cósmico Central'"
                                    disabled={isLoading}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="purpose">Propósito da Ordem</Label>
                                <Select value={purpose} onValueChange={setPurpose} disabled={isLoading}>
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Manter Pureza Vibracional">Manter Pureza Vibracional</SelectItem>
                                        <SelectItem value="Acelerar Manifestação">Acelerar Manifestação</SelectItem>
                                        <SelectItem value="Sustentar Ecossistemas">Sustentar Ecossistemas</SelectItem>
                                        <SelectItem value="Transmutar Dissonâncias">Transmutar Dissonâncias</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button onClick={handleMaintainOrder} disabled={isLoading} className="w-full font-bold text-lg">
                                {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Organizando...</> : 'Organizar Luz Primordial'}
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
                                    {logs.length === 0 ? <p>Aguardando organização...</p> : logs.map((log, index) => <p key={index}>{log}</p>)}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col gap-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl text-center">Visualização da OLP</CardTitle>
                        </CardHeader>
                        <CardContent className="flex justify-center">
                            <div className="relative w-full max-w-sm h-64 sm:h-80 bg-background/30 rounded-lg overflow-hidden border border-yellow-700">
                                <canvas ref={canvasRef} className="w-full h-full"></canvas>
                            </div>
                        </CardContent>
                    </Card>
                    {olpResult && (
                        <Card className="bg-card/50 purple-glow border-accent">
                            <CardHeader>
                                <CardTitle className="text-2xl gradient-text text-center">Resultado da Orquestração</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-background/50 p-4 rounded-lg text-base leading-relaxed text-foreground/90 shadow-inner">
                                    <p>{olpResult}</p>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Module118Page;
