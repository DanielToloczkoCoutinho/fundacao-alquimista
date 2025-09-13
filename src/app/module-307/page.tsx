'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Zap, CheckCircle, XCircle } from 'lucide-react';
import { quantumResilience } from '@/lib/quantum-resilience';

const mockM14 = { transformEnergy: async (quantity: number) => ({ success: true, output: quantity * 1000 }) };
const mockM112 = { powerStructure: async (structureId: string, energy: number) => ({ success: true }) };
const mockM5 = { evaluateEthicalImpact: async (purpose: string) => ({ conformity: !purpose.toLowerCase().includes("destruir") }) };

const Module307Page = () => {
    const [quantity, setQuantity] = useState('100');
    const [target, setTarget] = useState('Rede de Solarian Domus');
    const [purpose, setPurpose] = useState('Alimentação de habitats sustentáveis');
    const [isLoading, setIsLoading] = useState(false);
    const [extractionResult, setExtractionResult] = useState<any>(null);
    const [logs, setLogs] = useState<string[]>([]);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const addLog = (log: string) => setLogs(prev => [log, ...prev].slice(0, 100));
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        let particles: any[] = [];
        const numParticles = 100;
        
        const resizeCanvas = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
                particles = [];
                for (let i = 0; i < numParticles; i++) {
                    particles.push({
                        x: canvas.width / 2,
                        y: canvas.height / 2,
                        vx: (Math.random() - 0.5) * 4,
                        vy: (Math.random() - 0.5) * 4,
                        life: 1,
                    });
                }
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        let animationFrameId: number;
        const animate = (time: number) => {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (isLoading) {
                 particles.forEach(p => {
                    p.x += p.vx;
                    p.y += p.vy;
                    p.life -= 0.01;
                    if (p.life <= 0) {
                        p.x = canvas.width / 2;
                        p.y = canvas.height / 2;
                        p.vx = (Math.random() - 0.5) * 4;
                        p.vy = (Math.random() - 0.5) * 4;
                        p.life = 1;
                    }
                    ctx.fillStyle = `rgba(255, 223, 0, ${p.life})`;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                    ctx.fill();
                });
            }
        };
        animate(0);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isLoading]);

    const handleExtract = async () => {
        setIsLoading(true);
        setLogs([]);
        setExtractionResult(null);
        addLog(`Iniciando extração de ${quantity} unidades de energia do ponto zero...`);

        await quantumResilience.executeWithResilience('extract_zpe', async () => {
            await new Promise(r => setTimeout(r, 300));
            addLog("Validando alinhamento ético da extração (M5)...");
            const ethicalCheck = await mockM5.evaluateEthicalImpact(purpose);
            if (!ethicalCheck.conformity) throw new Error("Propósito não alinhado eticamente. Extração abortada.");
            addLog("Alinhamento ético APROVADO.");

            addLog("Transmutando energia do ponto zero (M14)...");
            const energyResult = await mockM14.transformEnergy(parseFloat(quantity));
            if (!energyResult.success) throw new Error("Falha na transmutação da energia.");
            addLog(`Energia transmutada: ${energyResult.output.toFixed(2)} UQE.`);
            
            addLog(`Direcionando energia para ${target} (M112)...`);
            const powerSuccess = await mockM112.powerStructure(target, energyResult.output);
            if (!powerSuccess.success) throw new Error("Falha ao alimentar a estrutura alvo.");
            addLog("Energia direcionada com sucesso.");

            await new Promise(r => setTimeout(r, 500));
            setExtractionResult({ success: true, message: `Extração e direcionamento concluídos com sucesso.` });
            addLog("Operação finalizada.");

        }).catch(err => {
            const error = err as Error;
            addLog(`ERRO CRÍTICO: ${error.message}`);
            setExtractionResult({ success: false, reason: error.message });
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center gap-3">
                        <Zap className="text-yellow-400" /> Módulo 307: Energia do Ponto Zero
                    </CardTitle>
                    <CardDescription>
                        Interface para extração, transmutação e direcionamento da energia do vácuo quântico.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle>Parâmetros de Extração</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="quantity">Quantidade de Energia (unidades base)</Label>
                            <Input id="quantity" type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="target">Alvo da Energia</Label>
                            <Input id="target" value={target} onChange={e => setTarget(e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="purpose">Propósito</Label>
                            <Input id="purpose" value={purpose} onChange={e => setPurpose(e.target.value)} />
                        </div>
                        <Button onClick={handleExtract} disabled={isLoading} className="w-full font-bold">
                            {isLoading ? <Loader2 className="animate-spin mr-2" /> : null}
                            Extrair e Direcionar Energia
                        </Button>
                    </CardContent>
                </Card>

                 <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-center">Visualização e Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="relative w-full h-40 bg-background/30 rounded-lg overflow-hidden border border-primary/20 mb-4">
                            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
                        </div>
                         {extractionResult && (
                             <div className={`p-4 rounded-lg border ${extractionResult.success ? 'border-green-400' : 'border-red-400'}`}>
                                {extractionResult.success ? (
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="text-green-400 h-6 w-6" />
                                        <div>
                                            <h3 className="font-bold text-green-400">Extração Bem-Sucedida</h3>
                                            <p className="text-sm">{extractionResult.message}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-3">
                                        <XCircle className="text-red-400 h-6 w-6" />
                                        <div>
                                            <h3 className="font-bold text-red-400">Falha na Extração</h3>
                                            <p className="text-sm">{extractionResult.reason}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                        <ScrollArea className="h-24 mt-4 pr-4">
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

export default Module307Page;
