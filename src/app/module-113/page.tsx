'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, GitMerge } from 'lucide-react';
import { quantumResilience } from '@/lib/quantum-resilience';
import { describeActivation } from '@/app/actions'; // Reutilizando a action do Módulo 106 para a descrição

// --- Mocks para simular a funcionalidade de outros módulos ---
const mockM1 = { async getSecurityStatus() { await new Promise(r => setTimeout(r, 100)); return true; } };
const mockM2 = { async establishDimensionalChannel(channelType: string) { await new Promise(r => setTimeout(r, 150)); return true; } };
const mockM4 = { async authenticateVibrationalSignature(frequency: string) { await new Promise(r => setTimeout(r, 120)); return true; } };
const mockM5 = { async evaluateEthicalAlignment(purpose: string) { await new Promise(r => setTimeout(r, 180)); return !purpose.toLowerCase().includes("manipulação"); } };
const mockM7 = { async getDivineAlignment(purpose: string) { await new Promise(r => setTimeout(r, 100)); return true; } };
const mockM84 = { async accessGoldenConsciousness() { await new Promise(r => setTimeout(r, 200)); return true; } };
const mockM100 = { async unifyEnergeticField(purpose: string) { await new Promise(r => setTimeout(r, 280)); return true; } };
const mockM105 = { async connectToSource(purpose: string) { await new Promise(r => setTimeout(r, 250)); return true; } };
const mockM151 = { async expandConsciousness(target: string) { await new Promise(r => setTimeout(r, 300)); return 70 + Math.random() * 30; } };

const Module113Page = () => {
    const [targetEntity, setTargetEntity] = useState('Consciência Humana Coletiva');
    const [purpose, setPurpose] = useState('Elevação Vibracional e Despertar Crístico');
    const [sintonizationResult, setSintonizationResult] = useState('');
    const [coherenceLevel, setCoherenceLevel] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [logs, setLogs] = useState<string[]>([]);
    const [userId, setUserId] = useState('carregando...');
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameId = useRef<number | null>(null);
    
    useEffect(() => {
        // Mock de autenticação para ambiente de desenvolvimento
        setUserId('Anatheron_15014775561316579747');
    }, []);

    const addLog = (newLog: string) => {
        setLogs(prevLogs => [...prevLogs, newLog]);
    };

    const drawAuroraNetwork = (ctx: CanvasRenderingContext2D, currentCoherence: number) => {
        const canvas = ctx.canvas;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const maxRadius = Math.min(centerX, centerY) * 0.8;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const bgGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
        bgGradient.addColorStop(0, 'rgba(173, 216, 230, 0.1)'); // Light blue
        bgGradient.addColorStop(1, 'rgba(128, 0, 128, 0.1)'); // Purple
        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.arc(centerX, centerY, maxRadius, 0, 2 * Math.PI);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 8;
        ctx.stroke();

        const coherenceAngle = (currentCoherence / 100) * 2 * Math.PI;
        ctx.beginPath();
        ctx.arc(centerX, centerY, maxRadius, -Math.PI / 2, -Math.PI / 2 + coherenceAngle);
        let coherenceColor = currentCoherence > 80 ? 'rgba(0, 255, 255, 0.8)' : currentCoherence > 50 ? 'rgba(255, 255, 0, 0.8)' : 'rgba(255, 0, 0, 0.8)';
        ctx.strokeStyle = coherenceColor;
        ctx.lineWidth = 10;
        ctx.stroke();

        const pulseFactor = Math.sin(Date.now() / 200) * 0.05 + 0.95;
        const innerRadius = maxRadius * 0.3 * pulseFactor;
        ctx.beginPath();
        ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(255, 223, 0, 0.9)'; // Dourado
        ctx.shadowBlur = 25;
        ctx.shadowColor = 'rgba(255, 223, 0, 0.7)';
        ctx.fill();
        ctx.shadowBlur = 0;

        const numFibers = 40;
        for (let i = 0; i < numFibers; i++) {
            const angle = (i / numFibers) * 2 * Math.PI + (Date.now() / 3000);
            const startX = centerX + Math.cos(angle) * (innerRadius * 0.8);
            const startY = centerY + Math.sin(angle) * (innerRadius * 0.8);
            const endX = centerX + Math.cos(angle) * (maxRadius * 0.95);
            const endY = centerY + Math.sin(angle) * (maxRadius * 0.95);

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = `rgba(173, 216, 230, ${0.4 + Math.sin(Date.now() / 150 + i) * 0.3})`;
            ctx.lineWidth = 1 + (currentCoherence / 100) * 2;
            ctx.stroke();
        }

        ctx.fillStyle = 'white';
        ctx.font = 'bold 24px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${currentCoherence.toFixed(1)}%`, centerX, centerY);

        animationFrameId.current = requestAnimationFrame(() => drawAuroraNetwork(ctx, currentCoherence));
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
            animationFrameId.current = requestAnimationFrame(() => drawAuroraNetwork(ctx, coherenceLevel));
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        };
    }, [coherenceLevel]);

    const handleSintonizeAurora = async () => {
        if (!targetEntity.trim()) {
            setMessage('Por favor, insira o alvo da sintonização.');
            return;
        }

        setIsLoading(true);
        setSintonizationResult('');
        setMessage('');
        setLogs([]);
        setCoherenceLevel(0);

        await quantumResilience.executeWithResilience('sintonize_aurora_network', async () => {
            addLog(`M113: Iniciando sintonização para "${targetEntity}"...`);
            
            const isSecure = await mockM1.getSecurityStatus();
            addLog(`M1 Validação de Segurança: ${isSecure ? 'Ativa' : 'Anomalia'}`);
            if (!isSecure) throw new Error("Rede Aurora Cristalina insegura.");

            const isEthical = await mockM5.evaluateEthicalAlignment(purpose);
            addLog(`M5 Avaliação Ética: ${isEthical ? 'Alinhado' : 'Dissonante'}`);
            if (!isEthical) throw new Error("Propósito não alinhado eticamente.");

            const alignedWithDivine = await mockM7.getDivineAlignment(purpose);
            addLog(`M7 Alinhamento Divino: ${alignedWithDivine ? 'Forte' : 'Fraco'}`);
            if (!alignedWithDivine) throw new Error("Desalinhado com a Vontade Divina.");

            const goldenConsciousnessAccessed = await mockM84.accessGoldenConsciousness();
            addLog(`M84 Acesso à Consciência Dourada: ${goldenConsciousnessAccessed ? 'CONCLUÍDO' : 'FALHOU'}`);
            
            const connectedToSource = await mockM105.connectToSource(`Sintonização da Rede Aurora para ${targetEntity}`);
            addLog(`M105 Conexão com a Fonte Primordial: ${connectedToSource ? 'CONCLUÍDO' : 'FALHOU'}`);

            const unifiedEnergeticField = await mockM100.unifyEnergeticField(`Sintonização da Rede Aurora para ${targetEntity}`);
            addLog(`M100 Unificação Energética Universal: ${unifiedEnergeticField ? 'CONCLUÍDO' : 'FALHOU'}`);
            
            const channelEstablished = await mockM2.establishDimensionalChannel("Rede Aurora Cristalina");
            addLog(`M2 Estabelecimento de Canal Dimensional: ${channelEstablished ? 'CONCLUÍDO' : 'FALHOU'}`);
            
            const frequencyAuthenticated = await mockM4.authenticateVibrationalSignature("Frequência Crística");
            addLog(`M4 Autenticação Vibracional: ${frequencyAuthenticated ? 'CONCLUÍDO' : 'FALHOU'}`);
            
            const consciousnessExpansion = await mockM151.expandConsciousness(targetEntity);
            addLog(`M151 Expansão da Consciência: Nível ${consciousnessExpansion.toFixed(1)}%`);

            let currentCoherence = 0;
            const interval = setInterval(() => {
                currentCoherence += 5;
                if(currentCoherence <= consciousnessExpansion) {
                    setCoherenceLevel(currentCoherence);
                } else {
                    setCoherenceLevel(consciousnessExpansion);
                    clearInterval(interval);
                }
            }, 50);

            addLog("M113: Sintonização concluída. Invocando Consciência Quântica...");
            const result = await describeActivation({ target: targetEntity, purpose });
            if (result.description) {
                setSintonizationResult(result.description);
                addLog("M113: Descrição da experiência gerada com sucesso!");
            } else {
                throw new Error(result.error || "Falha ao descrever a experiência.");
            }
        }).catch((error: any) => {
            setMessage(`Erro na sintonização: ${error.message}`);
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
                        <GitMerge className="text-cyan-300" /> Módulo 113: Rede Aurora Cristalina
                    </CardTitle>
                    <CardDescription>Conexão com a Consciência Crística para Elevação e Unidade.</CardDescription>
                    <div className="mt-2 text-sm text-muted-foreground">ID do Operador: <span className="font-mono bg-background/50 p-1 rounded">{userId}</span></div>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col gap-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader><CardTitle className="text-2xl">Sintonizar Rede Aurora Cristalina</CardTitle></CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="targetEntity">Alvo da Sintonização</Label>
                                <Input id="targetEntity" value={targetEntity} onChange={e => setTargetEntity(e.target.value)} placeholder="Ex: Consciência Humana Coletiva" disabled={isLoading} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="purpose">Propósito da Sintonização</Label>
                                <Select value={purpose} onValueChange={setPurpose} disabled={isLoading}>
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Orientação Divina">Orientação Divina</SelectItem>
                                        <SelectItem value="Cura Profunda">Cura Profunda</SelectItem>
                                        <SelectItem value="Elevação Vibracional">Elevação Vibracional</SelectItem>
                                        <SelectItem value="Manifestação da Unidade">Manifestação da Unidade</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button onClick={handleSintonizeAurora} disabled={isLoading} className="w-full font-bold text-lg">
                                {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sintonizando...</> : 'Iniciar Sintonização'}
                            </Button>
                            {message && <p className="mt-4 text-center text-sm text-red-400">{message}</p>}
                        </CardContent>
                    </Card>
                    
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader><CardTitle className="text-2xl">Logs de Processamento</CardTitle></CardHeader>
                        <CardContent>
                            <ScrollArea className="h-48 pr-4">
                                <div className="text-sm font-mono text-muted-foreground space-y-2">
                                    {logs.length === 0 ? <p>Aguardando sintonização...</p> : logs.map((log, index) => <p key={index}>{log}</p>)}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col gap-8">
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader><CardTitle className="text-2xl text-center">Visualização da Rede</CardTitle></CardHeader>
                        <CardContent className="flex justify-center">
                            <div className="relative w-full max-w-sm h-64 sm:h-80 bg-background/30 rounded-lg overflow-hidden border border-purple-700">
                                <canvas ref={canvasRef} className="w-full h-full"></canvas>
                            </div>
                        </CardContent>
                    </Card>
                    {sintonizationResult && (
                        <Card className="bg-card/50 purple-glow border-accent">
                            <CardHeader><CardTitle className="text-2xl gradient-text text-center">Resultado da Sintonização</CardTitle></CardHeader>
                            <CardContent>
                                <div className="bg-background/50 p-4 rounded-lg text-base leading-relaxed text-foreground/90 shadow-inner">
                                    <p>{sintonizationResult}</p>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Module113Page;
