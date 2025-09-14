'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Scale, CheckCircle, XCircle } from 'lucide-react';
import { quantumResilience } from '@/lib/quantum-resilience';

// --- Mocks para simular a funcionalidade de outros módulos ---
const mockM5 = { async evaluateEthicalImpact(directive: string) { await new Promise(r => setTimeout(r, 400)); return !directive.toLowerCase().includes("violação"); } };
const mockM33 = { async getDivineDirectives() { await new Promise(r => setTimeout(r, 300)); return "Alinhar com o Bem Maior Universal"; } };
const mockM45 = { async submitToCouncil(directive: string) { await new Promise(r => setTimeout(r, 600)); return "DECRETO_APROVADO"; } };

const Module72Page = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [report, setReport] = useState<any>(null);
    const [directive, setDirective] = useState('Harmonizar as leis comerciais entre Sirius e Plêiades para promover a troca justa de recursos energéticos.');
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameId = useRef<number | null>(null);

    const addLog = (log: string) => {
        setReport(prev => ({ ...prev, logs: [...(prev?.logs || []), log] }));
    };

    const drawBalance = (ctx: CanvasRenderingContext2D, balance: number) => {
        const canvas = ctx.canvas;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Desenha a balança
        ctx.strokeStyle = '#a78bfa'; // violet-400
        ctx.lineWidth = 3;

        // Base
        ctx.beginPath();
        ctx.moveTo(centerX - 50, centerY + 100);
        ctx.lineTo(centerX + 50, centerY + 100);
        ctx.stroke();

        // Haste Central
        ctx.beginPath();
        ctx.moveTo(centerX, centerY + 100);
        ctx.lineTo(centerX, centerY - 80);
        ctx.stroke();

        // Haste Horizontal (Balanço)
        const angle = (balance - 0.5) * -0.3; // Mapeia 0-1 para um pequeno ângulo
        const armLength = 120;
        const startX = centerX - armLength * Math.cos(angle);
        const startY = centerY - 80 - armLength * Math.sin(angle);
        const endX = centerX + armLength * Math.cos(angle);
        const endY = centerY - 80 + armLength * Math.sin(angle);
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        
        // Pratos
        ctx.beginPath();
        ctx.arc(startX, startY + 50, 40, 0, Math.PI);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(endX, endY + 50, 40, 0, Math.PI);
        ctx.stroke();
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
                drawBalance(ctx, report?.balance || 0.5);
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [report]);


    const handleHarmonize = async () => {
        setIsLoading(true);
        setReport({ logs: [], balance: 0.5 });

        await quantumResilience.executeWithResilience('harmonize_governance', async () => {
            addLog("Iniciando processo de Governança Atlanto-Galáctica...");
            
            await new Promise(r => setTimeout(r, 300));
            addLog("Consultando Diretrizes Divinas (M33)...");
            const divineDirective = await mockM33.getDivineDirectives();
            addLog(`Diretriz recebida: "${divineDirective}"`);

            await new Promise(r => setTimeout(r, 300));
            addLog("Avaliando impacto ético da diretriz (M5)...");
            const ethical = await mockM5.evaluateEthicalImpact(directive);
            if (!ethical) throw new Error("Diretriz proposta viola os princípios éticos universais.");
            addLog("Validação ética APROVADA.");
            drawBalance(canvasRef.current!.getContext('2d')!, 0.8);
            
            await new Promise(r => setTimeout(r, 300));
            addLog("Submetendo diretriz ao Conselho Cósmico (M45)...");
            const councilVerdict = await mockM45.submitToCouncil(directive);
            if (councilVerdict !== "DECRETO_APROVADO") throw new Error("O Conselho Cósmico não ratificou o decreto.");
            addLog(`Veredito do Conselho: ${councilVerdict}`);
            drawBalance(canvasRef.current!.getContext('2d')!, 1.0);
            
            await new Promise(r => setTimeout(r, 500));
            const finalReport = { 
                success: true, 
                message: `Diretriz '${directive.substring(0, 30)}...' harmonizada e decretada com sucesso.`,
                coherence: 0.98 + Math.random() * 0.02,
                balance: 1.0,
                logs: report?.logs || []
            };
            addLog("Governança concluída com sucesso. Coerência estabelecida.");
            setReport(finalReport);

        }).catch(err => {
            const error = err as Error;
            addLog(`ERRO CRÍTICO: ${error.message}`);
            setReport({ success: false, reason: error.message, logs: report?.logs || [], balance: 0.2 });
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center gap-3">
                        <Scale className="text-indigo-300" /> Módulo 72: Governança Atlanto-Galáctica
                    </CardTitle>
                    <CardDescription>
                        Conselho de deliberação para harmonizar e ratificar diretrizes cósmicas em alinhamento com a Vontade Divina.
                    </CardDescription>
                </CardHeader>
            </Card>
            
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle>Propor Diretriz para Harmonização</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <textarea
                            className="w-full min-h-[120px] bg-background/50 p-2 rounded-md border border-input"
                            value={directive}
                            onChange={(e) => setDirective(e.target.value)}
                            placeholder="Descreva a diretriz a ser harmonizada..."
                        />
                        <Button onClick={handleHarmonize} disabled={isLoading} className="w-full font-bold">
                            {isLoading ? <Loader2 className="animate-spin mr-2" /> : null}
                            Submeter à Governança
                        </Button>
                    </CardContent>
                </Card>

                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-center">Balança da Justiça Cósmica</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center">
                         <div className="relative w-full h-48 mb-4">
                            <canvas ref={canvasRef} className="w-full h-full"></canvas>
                        </div>
                        {report && !isLoading && (
                             <div className={`w-full p-4 rounded-lg border ${report.success ? 'border-green-400' : 'border-red-400'}`}>
                                {report.success ? (
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="text-green-400 h-6 w-6" />
                                        <div>
                                            <h3 className="font-bold text-green-400">Diretriz Harmonizada</h3>
                                            <p className="text-sm">Coerência: {(report.coherence * 100).toFixed(2)}%</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-3">
                                        <XCircle className="text-red-400 h-6 w-6" />
                                        <div>
                                            <h3 className="font-bold text-red-400">Falha na Harmonização</h3>
                                            <p className="text-sm">{report.reason}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                         <ScrollArea className="h-24 w-full mt-4 pr-4">
                            <div className="text-xs font-mono text-muted-foreground space-y-1">
                                {report?.logs?.map((log: string, i: number) => <p key={i}>{log}</p>) || <p>Aguardando diretriz...</p>}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Module72Page;
