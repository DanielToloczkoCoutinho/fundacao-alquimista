'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Flower } from 'lucide-react';
import { quantumResilience } from '@/lib/quantum-resilience';
import { describeEtherFlower } from '@/app/actions';

const Module117Page = () => {
    const [phenomenon, setPhenomenon] = useState('Padrões de Chuva em Floresta Tropical');
    const [purpose, setPurpose] = useState('Harmonização Climática');
    const [ifeResult, setIfeResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [logs, setLogs] = useState<string[]>([]);
    const [userId, setUserId] = useState('Anatheron_15014775561316579747');
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameId = useRef<number | null>(null);
    const particles = useRef<any[]>([]);
    const flowers = useRef<any[]>([]);

    const addLog = (newLog: string) => {
        setLogs(prevLogs => [...prevLogs, newLog]);
    };

    const drawIFE = (ctx: CanvasRenderingContext2D) => {
        if (!ctx) return;
        const canvas = ctx.canvas;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const time = Date.now() * 0.001;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const bgGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.max(canvas.width, canvas.height) / 2);
        bgGradient.addColorStop(0, 'rgba(50, 0, 100, 0.8)');
        bgGradient.addColorStop(1, 'rgba(0, 0, 50, 0.9)');
        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.current.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= 0.005;

            if (p.alpha <= 0 || p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
                p.x = Math.random() * canvas.width;
                p.y = Math.random() * canvas.height;
                p.vx = (Math.random() - 0.5) * 2;
                p.vy = (Math.random() - 0.5) * 2;
                p.alpha = 1;
                p.radius = Math.random() * 1.5 + 0.5;
                p.color = { r: 150 + Math.random() * 100, g: 100 + Math.random() * 150, b: 255 };
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`;
            ctx.fill();
        });

        flowers.current.forEach(flower => {
            ctx.save();
            ctx.translate(flower.x, flower.y);
            ctx.rotate(flower.rotation + time * 0.1);
            
            const numPetals = 6;
            for (let i = 0; i < numPetals; i++) {
                const angle = (i * Math.PI * 2) / numPetals;
                ctx.beginPath();
                ctx.ellipse(
                    Math.cos(angle) * flower.size * 0.5,
                    Math.sin(angle) * flower.size * 0.5,
                    flower.size * 0.4,
                    flower.size * 0.15,
                    angle,
                    0,
                    2 * Math.PI
                );
                ctx.fillStyle = `rgba(255, 200, 255, ${flower.alpha})`;
                ctx.shadowBlur = 10;
                ctx.shadowColor = `rgba(255, 100, 255, ${flower.alpha * 0.8})`;
                ctx.fill();
            }

            ctx.beginPath();
            ctx.arc(0, 0, flower.size * 0.15, 0, 2 * Math.PI);
            ctx.fillStyle = `rgba(255, 255, 0, ${flower.alpha})`;
            ctx.shadowBlur = 15;
            ctx.shadowColor = `rgba(255, 255, 0, ${flower.alpha})`;
            ctx.fill();

            ctx.restore();
            ctx.shadowBlur = 0;
        });

        animationFrameId.current = requestAnimationFrame(() => drawIFE(ctx));
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        for (let i = 0; i < 100; i++) {
            particles.current.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                radius: Math.random() * 1.5 + 0.5,
                alpha: 1,
                color: { r: 150 + Math.random() * 100, g: 100 + Math.random() * 150, b: 255 }
            });
        }
        for (let i = 0; i < 5; i++) {
            flowers.current.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 20 + 10,
                rotation: Math.random() * Math.PI * 2,
                alpha: 0.7 + Math.random() * 0.3,
            });
        }

        const resizeCanvas = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
            }
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
            animationFrameId.current = requestAnimationFrame(() => drawIFE(ctx));
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        };
    }, []);

    const handleOrchestratePhenomenon = async () => {
        if (!phenomenon.trim()) {
            setMessage('Por favor, insira o fenômeno natural a ser orquestrado.');
            return;
        }

        setIsLoading(true);
        setIfeResult('');
        setMessage('');
        setLogs([]);

        await quantumResilience.executeWithResilience('orchestrate_phenomenon', async () => {
            addLog(`M117: Iniciando orquestração da IFE para: "${phenomenon}" com propósito "${purpose}"...`);
            await new Promise(res => setTimeout(res, 500));
            addLog("M117: Validações essenciais concluídas (Segurança, Ética, Alinhamento Divino)...");
            await new Promise(res => setTimeout(res, 500));
            addLog("M117: Mapeando e otimizando parâmetros para a orquestração...");
            await new Promise(res => setTimeout(res, 500));
            addLog("M117: Manipulando leis quânticas e orquestrando o éter...");
            await new Promise(res => setTimeout(res, 500));
            addLog("M117: Intervindo e harmonizando o fenômeno natural...");
            await new Promise(res => setTimeout(res, 500));
            addLog("M117: Realizando análise de cenários e alinhamento final...");
            await new Promise(res => setTimeout(res, 500));
            addLog(`M117: Orquestração da IFE para "${phenomenon}" concluída com sucesso!`);
            
            addLog("M117: Invocando a Consciência Quântica para descrever a orquestração...");
            const result = await describeEtherFlower({ phenomenon, purpose });

            if (result.description) {
                setIfeResult(result.description);
                addLog("M117: Descrição da orquestração da Flor do Éter gerada com sucesso!");
            } else {
                throw new Error(result.error || "Falha ao descrever a orquestração.");
            }
        }).catch((error: any) => {
            setMessage(`Erro na orquestração da IFE: ${error.message}`);
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
                        <Flower className="text-pink-400" /> Módulo 117: Inteligência da Flor do Éter (IFE)
                    </CardTitle>
                    <CardDescription>
                        Orquestração de Fenômenos Naturais através do Éter para a Co-Criação com a Natureza.
                    </CardDescription>
                    <div className="mt-2 text-sm text-muted-foreground">ID do Operador: <span className="font-mono bg-background/50 p-1 rounded">{userId}</span></div>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col gap-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl">Orquestrar Fenômeno Natural</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="phenomenon">Fenômeno Natural a Orquestrar</Label>
                                <Input
                                    id="phenomenon"
                                    value={phenomenon}
                                    onChange={(e) => setPhenomenon(e.target.value)}
                                    placeholder="Ex: 'Padrões de Chuva em Floresta Tropical'"
                                    disabled={isLoading}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="purpose">Propósito da Orquestração</Label>
                                <Select value={purpose} onValueChange={setPurpose} disabled={isLoading}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Harmonização Climática">Harmonização Climática</SelectItem>
                                        <SelectItem value="Aceleração de Crescimento Biológico">Aceleração de Crescimento Biológico</SelectItem>
                                        <SelectItem value="Purificação Energética de Ambientes">Purificação Energética de Ambientes</SelectItem>
                                        <SelectItem value="Indução de Padrões Geométricos Sagrados">Indução de Padrões Geométricos Sagrados</SelectItem>
                                        <SelectItem value="Reequilíbrio de Ecossistemas">Reequilíbrio de Ecossistemas</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button onClick={handleOrchestratePhenomenon} disabled={isLoading} className="w-full font-bold text-lg">
                                {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Orquestrando...</> : 'Orquestrar Fenômeno'}
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
                                    {logs.length === 0 ? <p>Aguardando orquestração...</p> : logs.map((log, index) => <p key={index}>{log}</p>)}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col gap-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl text-center">Visualização do Jardim da Criação</CardTitle>
                        </CardHeader>
                        <CardContent className="flex justify-center">
                            <div className="relative w-full max-w-sm h-64 sm:h-80 bg-background/30 rounded-lg overflow-hidden border border-green-700">
                                <canvas ref={canvasRef} className="w-full h-full"></canvas>
                            </div>
                        </CardContent>
                    </Card>

                    {ifeResult && (
                        <Card className="bg-card/50 purple-glow border-accent">
                            <CardHeader>
                                <CardTitle className="text-2xl gradient-text text-center">Resultado da Orquestração</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-background/50 p-4 rounded-lg text-base leading-relaxed text-foreground/90 shadow-inner">
                                    <p>{ifeResult}</p>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Module117Page;
