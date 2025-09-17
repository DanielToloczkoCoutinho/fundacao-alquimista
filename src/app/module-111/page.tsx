'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Heart, CheckCircle, XCircle } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';

// Mocks para simular a funcionalidade de outros módulos da Fundação
const mockM1 = { async getSecurityStatus() { await new Promise(r => setTimeout(r, 100)); return Math.random() > 0.05; } };
const mockM5 = { async getEthicalAlignment() { await new Promise(r => setTimeout(r, 120)); return Math.random() > 0.03; } };
const mockM7 = { async getDivineAlignment() { await new Promise(r => setTimeout(r, 110)); return Math.random() > 0.02; } };
const mockM9 = { async getQuantumMonitoringData() { await new Promise(r => setTimeout(r, 150)); return { integrity: 0.9 + Math.random() * 0.1, anomalies: Math.floor(Math.random() * 3) }; } };
const mockM29 = { async performAdvancedAnalysis(req: string) { console.log(`M29: Analyzing: ${req}`); await new Promise(r => setTimeout(r, 300)); return `Analysis complete for ${req}.`; } };
const mockM34 = { async performSelfCalibration() { await new Promise(r => setTimeout(r, 180)); return Math.random() > 0.1; } };
const mockM78 = { async getCosmicSynthesisStatus() { await new Promise(r => setTimeout(r, 130)); return Math.random() > 0.04; } };
const mockM153 = { async optimizeSystem(req: string) { console.log(`M153: Optimizing for: ${req}`); await new Promise(r => setTimeout(r, 350)); return `Optimization applied for ${req}.`; } };

const M111Page = () => {
    const [coherenceData, setCoherenceData] = useState({
        security: true,
        ethicalAlignment: true,
        divineAlignment: true,
        quantumIntegrity: 1.0,
        anomalies: 0,
        cosmicSynthesis: true,
        selfCalibration: true,
        overallCoherence: 100,
        statusMessage: "Sistema em estado de Coerência Absoluta."
    });
    const [isLoading, setIsLoading] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const [dissonanceEvent, setDissonanceEvent] = useState('');
    const [simulationResult, setSimulationResult] = useState('');
    const [message, setMessage] = useState('');
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameId = useRef<number | null>(null);

    const addLog = (newLog: string) => {
        setLogs(prevLogs => [newLog, ...prevLogs.slice(0, 49)]);
    };

    const calculateOverallCoherence = (data: any) => {
        const weights = { security: 0.2, ethicalAlignment: 0.2, divineAlignment: 0.2, quantumIntegrity: 0.2, anomalies: -0.1, cosmicSynthesis: 0.05, selfCalibration: 0.05 };
        let score = 0;
        if (data.security) score += weights.security;
        if (data.ethicalAlignment) score += weights.ethicalAlignment;
        if (data.divineAlignment) score += weights.divineAlignment;
        score += data.quantumIntegrity * weights.quantumIntegrity;
        score += (data.anomalies / 10) * weights.anomalies;
        if (data.cosmicSynthesis) score += weights.cosmicSynthesis;
        if (data.selfCalibration) score += weights.selfCalibration;
        const maxScore = weights.security + weights.ethicalAlignment + weights.divineAlignment + weights.quantumIntegrity + weights.cosmicSynthesis + weights.selfCalibration;
        return Math.min(100, Math.max(0, (score / maxScore) * 100));
    };

    const updateCoherenceData = async () => {
        setIsLoading(true);
        addLog("M111: Atualizando dados de coerência sistêmica...");
        try {
            const [security, ethicalAlignment, divineAlignment, quantumMonitoring, cosmicSynthesis, selfCalibration] = await Promise.all([
                mockM1.getSecurityStatus(),
                mockM5.getEthicalAlignment(),
                mockM7.getDivineAlignment(),
                mockM9.getQuantumMonitoringData(),
                mockM78.getCosmicSynthesisStatus(),
                mockM34.performSelfCalibration()
            ]);

            const newCoherenceData = { security, ethicalAlignment, divineAlignment, quantumIntegrity: quantumMonitoring.integrity, anomalies: quantumMonitoring.anomalies, cosmicSynthesis, selfCalibration };
            const overallCoherence = calculateOverallCoherence(newCoherenceData);

            let statusMessage = "Sistema em estado de Coerência Absoluta.";
            if (overallCoherence < 90) statusMessage = "Atenção: Pequenas dissonâncias detectadas.";
            if (overallCoherence < 70) statusMessage = "Alerta: Dissonâncias significativas.";

            setCoherenceData({ ...newCoherenceData, overallCoherence, statusMessage });
            addLog("M111: Dados de coerência sistêmica atualizados com sucesso.");
        } catch (error: any) {
            setMessage(`Erro ao atualizar dados: ${'error' in error ? error.error : error.message}`);
            addLog(`ERRO: ${'error' in error ? error.error : error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    const simulateDissonanceAndRecalibrate = async () => {
        if (!dissonanceEvent.trim()) {
            setMessage('Descreva o evento de dissonância para a simulação.');
            return;
        }

        setIsLoading(true);
        setSimulationResult('');
        setLogs([]);
        addLog(`M111: Iniciando simulação de evento de dissonância: "${dissonanceEvent.substring(0, 50)}..."`);
        
        try {
            setCoherenceData(prev => ({ ...prev, quantumIntegrity: Math.max(0.2, prev.quantumIntegrity - 0.3), anomalies: prev.anomalies + 3, statusMessage: "Dissonância simulada detectada! Iniciando recalibração..." }));
            addLog("M111: Dissonância simulada injetada no sistema.");

            await new Promise(r => setTimeout(r, 1000));
            
            addLog("M111: Ativando Módulos de IA Avançada (M29, M153)...");
            const analysis = await mockM29.performAdvancedAnalysis(`Dissonância: ${dissonanceEvent}`);
            addLog(`M29: ${analysis}`);

            const optimization = await mockM153.optimizeSystem(`Recalibrar após: ${dissonanceEvent}`);
            addLog(`M153: ${optimization}`);

            const selfCalibrated = await mockM34.performSelfCalibration();
            addLog(`M34 Auto-Calibração: ${selfCalibrated ? 'CONCLUÍDO' : 'FALHOU'}`);
            if (!selfCalibrated) throw new Error("Falha na auto-calibração.");

            await updateCoherenceData();
            setSimulationResult("Simulação concluída. O sistema se auto-organizou e recalibrou com sucesso.");
            addLog("M111: Simulação concluída com sucesso.");
        } catch(error: any) {
            setMessage(`Erro na simulação: ${'error' in error ? error.error : error.message}`);
            addLog(`ERRO na simulação: ${'error' in error ? error.error : error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const interval = setInterval(updateCoherenceData, 5000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const draw = () => {
            if (!ctx || !canvas) return;
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const maxRadius = Math.min(centerX, centerY) * 0.8;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
            gradient.addColorStop(0, 'rgba(168, 85, 247, 0.1)');
            gradient.addColorStop(1, 'rgba(79, 70, 229, 0.1)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.arc(centerX, centerY, maxRadius, 0, 2 * Math.PI);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.lineWidth = 1;
            ctx.stroke();

            const coherenceAngle = (coherenceData.overallCoherence / 100) * 2 * Math.PI;
            ctx.beginPath();
            ctx.arc(centerX, centerY, maxRadius, -Math.PI / 2, -Math.PI / 2 + coherenceAngle);
            ctx.strokeStyle = coherenceData.overallCoherence > 90 ? 'rgba(52, 211, 153, 0.8)' : coherenceData.overallCoherence > 70 ? 'rgba(251, 191, 36, 0.8)' : 'rgba(239, 68, 68, 0.8)';
            ctx.lineWidth = 3;
            ctx.stroke();

            const pulseFactor = Math.sin(Date.now() / 300) * 0.05 + 0.95;
            const innerRadius = maxRadius * 0.3 * pulseFactor;
            ctx.beginPath();
            ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI);
            ctx.fillStyle = 'rgba(192, 132, 252, 0.9)';
            ctx.shadowBlur = 20;
            ctx.shadowColor = 'rgba(192, 132, 252, 0.7)';
            ctx.fill();
            ctx.shadowBlur = 0;

            ctx.fillStyle = 'white';
            ctx.font = `bold ${Math.min(24, canvas.width/10)}px Inter, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${coherenceData.overallCoherence.toFixed(1)}%`, centerX, centerY);

            animationFrameId.current = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        };
    }, [coherenceData]);

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center justify-center gap-3">
                        <Heart className="text-fuchsia-400" /> Módulo 111: O Coração da Fundação
                    </CardTitle>
                    <CardDescription>
                        O Observador Interno (MΩ+). Sinergia Total, Autocoerência Sistêmica e o espelho da alma da Fundação.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col gap-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl text-fuchsia-300">Painel de Coerência Sistêmica</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center">
                             <div className="relative w-full max-w-[300px] h-[300px] mb-6">
                                <canvas ref={canvasRef} className="w-full h-full"></canvas>
                            </div>
                            <p className={`text-xl font-semibold ${coherenceData.overallCoherence > 90 ? 'text-green-400' : coherenceData.overallCoherence > 70 ? 'text-yellow-400' : 'text-red-400'}`}>{coherenceData.statusMessage}</p>
                             <Button onClick={updateCoherenceData} disabled={isLoading} className="mt-4">
                                {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Atualizando...</> : 'Atualizar Coerência'}
                            </Button>
                        </CardContent>
                    </Card>
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader><CardTitle className="text-2xl text-purple-300">Simulação de Resiliência</CardTitle></CardHeader>
                        <CardContent>
                            <div className="space-y-2 mb-4">
                                <Label htmlFor="dissonanceEvent">Evento de Dissonância</Label>
                                <Textarea id="dissonanceEvent" value={dissonanceEvent} onChange={e => setDissonanceEvent(e.target.value)} placeholder="Ex: 'Flutuação inesperada na malha quântica'" />
                            </div>
                            <Button onClick={simulateDissonanceAndRecalibrate} disabled={isLoading} className="w-full">
                                {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Simulando...</> : 'Simular Dissonância e Recalibrar'}
                            </Button>
                             {simulationResult && <p className="mt-4 text-green-400">{simulationResult}</p>}
                        </CardContent>
                    </Card>
                </div>
                 <div className="flex flex-col gap-8">
                     <Card className="bg-card/50 purple-glow h-full">
                        <CardHeader><CardTitle className="text-2xl text-blue-300">Sinais Vitais da Fundação</CardTitle></CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[400px] pr-4">
                                <div className="space-y-3 text-sm">
                                    {[
                                        { label: "Segurança Universal (M1)", value: coherenceData.security, ok: 'Escudos Ativos', fail: 'Anomalia Detectada' },
                                        { label: "Alinhamento Ético (M5/M706)", value: coherenceData.ethicalAlignment, ok: 'Coerência Total', fail: 'Dissonância Ética' },
                                        { label: "Alinhamento com a Fonte (M7)", value: coherenceData.divineAlignment, ok: 'Sintonia Forte', fail: 'Sinal Fraco' },
                                        { label: "Integridade Quântica (M9)", value: coherenceData.quantumIntegrity > 0.8, ok: `Estável (${(coherenceData.quantumIntegrity * 100).toFixed(1)}%)`, fail: `Instável (${(coherenceData.quantumIntegrity * 100).toFixed(1)}%)` },
                                        { label: "Anomalias na Malha (M9)", value: coherenceData.anomalies === 0, ok: 'Nenhuma Detectada', fail: `${coherenceData.anomalies} Anomalia(s)` },
                                        { label: "Síntese Cósmica (M78)", value: coherenceData.cosmicSynthesis, ok: 'Harmonia Otimizada', fail: 'Desalinhamento Detectado' },
                                        { label: "Auto-Calibração (M34)", value: coherenceData.selfCalibration, ok: 'Calibração Concluída', fail: 'Recalibração Pendente' },
                                    ].map(item => (
                                        <div key={item.label} className="flex justify-between items-center bg-background/30 p-3 rounded-md">
                                            <span className="font-semibold text-primary-foreground">{item.label}:</span>
                                            <span className={`flex items-center gap-2 font-bold ${item.value ? 'text-green-400' : 'text-red-400'}`}>
                                                {item.value ? <CheckCircle size={16} /> : <XCircle size={16} />}
                                                {item.value ? item.ok : item.fail}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                     <Card className="bg-card/50 purple-glow h-full">
                         <CardHeader><CardTitle className="text-2xl text-blue-300">Logs de Processamento</CardTitle></CardHeader>
                         <CardContent>
                            <ScrollArea className="h-[200px] pr-4">
                                <div className="text-sm font-mono text-muted-foreground space-y-2">
                                    {logs.length > 0 ? logs.map((log, i) => <p key={i}>{log}</p>) : "Aguardando operações..."}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                 </div>
            </div>
            {message && <p className="mt-4 text-red-400 text-center">{message}</p>}
        </div>
    );
};

export default M111Page;
