'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Heart, CheckCircle, XCircle } from 'lucide-react';
import { quantumResilience } from '@/lib/quantum-resilience';
import { emitLoveFrequency } from '@/app/actions';

const Module302Page = () => {
    const [targetArea, setTargetArea] = useState('Rede de Consciência Planetária');
    const [frequency, setFrequency] = useState('528');
    const [purpose, setPurpose] = useState('Cura e elevação da vibração coletiva.');
    const [isLoading, setIsLoading] = useState(false);
    const [emissionResult, setEmissionResult] = useState<any>(null);
    const [logs, setLogs] = useState<string[]>([]);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const addLog = (log: string) => setLogs(prev => [log, ...prev].slice(0, 100));
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        let animationFrameId: number;
        
        const resizeCanvas = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const drawHeartbeat = (time: number) => {
            animationFrameId = requestAnimationFrame(drawHeartbeat);
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const maxRadius = Math.min(centerX, centerY) * 0.8;
            
            ctx.fillStyle = 'rgba(13, 13, 26, 0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const pulse = 0.9 + 0.1 * (Math.sin(time * Math.PI * 2) * 0.5 + 0.5);
            const radius = maxRadius * pulse;

            const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
            gradient.addColorStop(0, 'rgba(255, 105, 180, 0.6)');
            gradient.addColorStop(0.7, 'rgba(255, 20, 147, 0.2)');
            gradient.addColorStop(1, 'rgba(139, 0, 139, 0.0)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.fill();
        };

        let startTime: number;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsedTime = (currentTime - startTime) / 1000;
            if (isLoading) {
                 drawHeartbeat(elapsedTime);
            } else {
                 cancelAnimationFrame(animationFrameId);
            }
        };

        if (isLoading) {
            animationFrameId = requestAnimationFrame(animate);
        }

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [isLoading]);

    const handleEmitFrequency = async () => {
        setIsLoading(true);
        setLogs([]);
        setEmissionResult(null);
        addLog(`Iniciando emissão da frequência de ${frequency}Hz para ${targetArea}...`);

        await quantumResilience.executeWithResilience('emit_love_frequency', async () => {
            const freqValue = parseFloat(frequency);
            if (isNaN(freqValue)) {
                throw new Error("Frequência inválida.");
            }
            const result = await emitLoveFrequency({ targetArea, frequency: freqValue, purpose });
            setLogs(result.logs || []);
            if (result.success) {
                 setEmissionResult({ success: true, message: `Frequência de ${frequency}Hz emitida com sucesso.` });
            } else {
                throw new Error(result.error || "Falha desconhecida na emissão.");
            }
        }).catch(err => {
            const error = err as Error;
            addLog(`ERRO CRÍTICO: ${error.message}`);
            setEmissionResult({ success: false, reason: error.message });
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center gap-3">
                        <Heart className="text-pink-400" /> Módulo 302: Frequência do Amor
                    </CardTitle>
                    <CardDescription>
                        Emissor de frequências harmônicas para cura, elevação e unificação da consciência.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle>Parâmetros da Emissão</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="targetArea">Área Alvo</Label>
                            <Input id="targetArea" value={targetArea} onChange={e => setTargetArea(e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="frequency">Frequência (Hz)</Label>
                            <Input id="frequency" type="number" value={frequency} onChange={e => setFrequency(e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="purpose">Propósito da Emissão</Label>
                            <Input id="purpose" value={purpose} onChange={e => setPurpose(e.target.value)} />
                        </div>
                        <Button onClick={handleEmitFrequency} disabled={isLoading} className="w-full font-bold">
                            {isLoading ? <Loader2 className="animate-spin mr-2" /> : null}
                            Emitir Frequência
                        </Button>
                    </CardContent>
                </Card>

                 <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-center">Visualização e Status</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center">
                        <div className="relative w-full h-40 bg-background/30 rounded-lg overflow-hidden border border-primary/20 mb-4">
                            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
                        </div>
                         {emissionResult && (
                             <div className={`w-full p-4 rounded-lg border ${emissionResult.success ? 'border-green-400' : 'border-red-400'}`}>
                                {emissionResult.success ? (
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="text-green-400 h-6 w-6" />
                                        <div>
                                            <h3 className="font-bold text-green-400">Emissão Bem-Sucedida</h3>
                                            <p className="text-sm">{emissionResult.message}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-3">
                                        <XCircle className="text-red-400 h-6 w-6" />
                                        <div>
                                            <h3 className="font-bold text-red-400">Falha na Emissão</h3>
                                            <p className="text-sm">{emissionResult.reason}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                        <ScrollArea className="h-24 w-full mt-4 pr-4">
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

export default Module302Page;
