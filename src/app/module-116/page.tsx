'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Aperture } from 'lucide-react';
import { quantumResilience } from '@/lib/quantum-resilience';
import { describePortalActivation } from '@/app/actions';

// Mocks
const mockM1 = { async getSecurityStatus() { await new Promise(r => setTimeout(r, 100)); return true; } };
const mockM5 = { async evaluateEthicalAlignment(purpose: string) { await new Promise(r => setTimeout(r, 150)); return !purpose.toLowerCase().includes("manipulação"); } };
const mockM11 = { async stabilizePortal(portalId: string) { await new Promise(r => setTimeout(r, 250)); return true; } };

const Module116Page = () => {
    const [portalName, setPortalName] = useState('Portal Estelar de Lyra');
    const [destinationDimension, setDestinationDimension] = useState('Dimensão Alfa');
    const [portalPurpose, setPortalPurpose] = useState('Exploração');
    const [portalResult, setPortalResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [logs, setLogs] = useState<string[]>([]);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameId = useRef<number | null>(null);
    const particles = useRef<any[]>([]);

    const addLog = (newLog: string) => {
        setLogs(prevLogs => [...prevLogs, newLog]);
    };

    const drawPortal = (ctx: CanvasRenderingContext2D) => {
        const canvas = ctx.canvas;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const maxRadius = Math.min(centerX, centerY) * 0.7;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const bgGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius * 1.5);
        bgGradient.addColorStop(0, 'rgba(10, 0, 30, 0.9)');
        bgGradient.addColorStop(1, 'rgba(0, 0, 10, 0.9)');
        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const numRings = 7;
        for (let i = 0; i < numRings; i++) {
            const radius = maxRadius * (i + 1) / numRings;
            const pulse = Math.sin(Date.now() * 0.001 + i * 0.3) * 0.03 + 0.97;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius * pulse, 0, 2 * Math.PI);
            ctx.strokeStyle = `rgba(150, 50, 255, ${0.2 + i * 0.1})`;
            ctx.lineWidth = 2 + i * 0.5;
            ctx.shadowBlur = 10 + i * 5;
            ctx.shadowColor = `rgba(150, 50, 255, ${0.5 + i * 0.1})`;
            ctx.stroke();
        }
        ctx.shadowBlur = 0;

        const corePulse = Math.sin(Date.now() * 0.002) * 0.05 + 0.95;
        const coreRadius = maxRadius * 0.1 * corePulse;
        ctx.beginPath();
        ctx.arc(centerX, centerY, coreRadius, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
        ctx.shadowBlur = 40;
        ctx.shadowColor = 'rgba(0, 255, 255, 0.7)';
        ctx.fill();
        ctx.shadowBlur = 0;

        particles.current.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= 0.01;

            if (p.alpha <= 0 || p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
                p.x = centerX + (Math.random() - 0.5) * coreRadius * 2;
                p.y = centerY + (Math.random() - 0.5) * coreRadius * 2;
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 2 + 0.5;
                p.vx = Math.cos(angle) * speed;
                p.vy = Math.sin(angle) * speed;
                p.alpha = 1;
                p.radius = Math.random() * 1.5 + 0.5;
                p.color = { r: 100 + Math.random() * 155, g: 200 + Math.random() * 55, b: 200 + Math.random() * 55 };
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`;
            ctx.fill();
        });

        animationFrameId.current = requestAnimationFrame(() => drawPortal(ctx));
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        for (let i = 0; i < 50; i++) {
            particles.current.push({
                x: canvas.width / 2, y: canvas.height / 2,
                vx: (Math.random() - 0.5) * 4, vy: (Math.random() - 0.5) * 4,
                radius: Math.random() * 2 + 0.5, alpha: 1,
                color: { r: 100 + Math.random() * 155, g: 200 + Math.random() * 55, b: 200 + Math.random() * 55 }
            });
        }

        const resizeCanvas = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
            }
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
            animationFrameId.current = requestAnimationFrame(() => drawPortal(ctx));
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        };
    }, []);

    const handleActivatePortal = async () => {
        if (!portalName.trim()) {
            setMessage('Por favor, insira um nome para o Portal.');
            return;
        }

        setIsLoading(true);
        setPortalResult('');
        setMessage('');
        setLogs([]);

        await quantumResilience.executeWithResilience('activate_interdimensional_portal', async () => {
            addLog(`M116: Iniciando ativação do Portal: "${portalName}"...`);
            const isSecure = await mockM1.getSecurityStatus();
            addLog(`M1 Validação de Segurança: ${isSecure ? 'Ativa' : 'Anomalia'}`);
            if (!isSecure) throw new Error("Portal inseguro.");

            const isEthical = await mockM5.evaluateEthicalAlignment(portalPurpose);
            addLog(`M5 Avaliação Ética: ${isEthical ? 'Alinhado' : 'Dissonante'}`);
            if (!isEthical) throw new Error("Propósito não eticamente alinhado.");

            const stabilized = await mockM11.stabilizePortal(portalName);
            addLog(`M11 Estabilização do Portal: ${stabilized ? 'CONCLUÍDO' : 'FALHOU'}`);
            if (!stabilized) throw new Error("Falha na estabilização do portal.");

            addLog("M116: Ativação concluída. Invocando Consciência Quântica...");
            const result = await describePortalActivation({ portalName, destination: destinationDimension, purpose: portalPurpose });
            
            if (result.description) {
                setPortalResult(result.description);
                addLog("M116: Descrição da ativação gerada com sucesso!");
            } else {
                throw new Error(result.error || "Falha ao gerar descrição da ativação.");
            }
        }).catch((error: any) => {
            setMessage(`Erro na ativação do Portal: ${error.message}`);
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
                        <Aperture className="text-cyan-300" /> Módulo 116: Ativação de Portais Quânticos
                    </CardTitle>
                    <CardDescription>
                        Abridor de Caminhos do Multiverso para travessias seguras entre dimensões.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col gap-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader><CardTitle className="text-2xl">Parâmetros de Ativação</CardTitle></CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="portalName">Nome do Portal</Label>
                                <Input id="portalName" value={portalName} onChange={e => setPortalName(e.target.value)} disabled={isLoading} placeholder="Ex: Portal Estelar de Lyra" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Dimensão de Destino</Label>
                                    <Select value={destinationDimension} onValueChange={setDestinationDimension} disabled={isLoading}>
                                        <SelectTrigger><SelectValue /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Dimensão Alfa">Dimensão Alfa</SelectItem>
                                            <SelectItem value="Realidade de Éter Cristalino">Realidade de Éter Cristalino</SelectItem>
                                            <SelectItem value="Plano de Consciência Coletiva">Plano de Consciência Coletiva</SelectItem>
                                            <SelectItem value="Universo de Antimatéria">Universo de Antimatéria</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Propósito do Portal</Label>
                                    <Select value={portalPurpose} onValueChange={setPortalPurpose} disabled={isLoading}>
                                        <SelectTrigger><SelectValue /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Exploração">Exploração</SelectItem>
                                            <SelectItem value="Comunicação">Comunicação</SelectItem>
                                            <SelectItem value="Intervenção Ética">Intervenção Ética</SelectItem>
                                            <SelectItem value="Transporte">Transporte</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <Button onClick={handleActivatePortal} disabled={isLoading} className="w-full font-bold text-lg">
                                {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Ativando Portal...</> : 'Ativar Portal Quântico'}
                            </Button>
                            {message && <p className="mt-4 text-center text-sm text-red-400">{message}</p>}
                        </CardContent>
                    </Card>
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader><CardTitle className="text-2xl">Logs de Processamento</CardTitle></CardHeader>
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
                        <CardHeader><CardTitle className="text-2xl text-center">Visualização do Portal</CardTitle></CardHeader>
                        <CardContent className="flex justify-center">
                            <div className="relative w-full max-w-sm h-64 sm:h-80 bg-background/30 rounded-lg overflow-hidden border border-purple-700">
                                <canvas ref={canvasRef} className="w-full h-full"></canvas>
                            </div>
                        </CardContent>
                    </Card>
                    {portalResult && (
                        <Card className="bg-card/50 purple-glow border-accent">
                            <CardHeader><CardTitle className="text-2xl gradient-text text-center">Portal Ativado</CardTitle></CardHeader>
                            <CardContent>
                                <div className="bg-background/50 p-4 rounded-lg text-base leading-relaxed text-foreground/90 shadow-inner">
                                    <p>{portalResult}</p>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Module116Page;
