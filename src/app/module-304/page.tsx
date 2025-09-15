'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, GraduationCap, CheckCircle, XCircle, Hash, Music } from 'lucide-react';
import { quantumResilience } from '@/lib/quantum-resilience';
import { disseminateKnowledge } from '@/app/actions';
import { sha256 } from '@/lib/crypto';
import { useToast } from '@/hooks/use-toast';

const Module304Page = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [report, setReport] = useState<{ success: boolean; logs: string[]; summary: string | null; error: string | null; hash?: string; frequency?: number; } | null>(null);
    const [topic, setTopic] = useState('A Lei do Um e a Unidade Cósmica');
    const [targetAudience, setTargetAudience] = useState('Humanidade Terrestre');
    const { toast } = useToast();

    const playFrequency = (frequency: number) => {
        if (typeof window === 'undefined') return;
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.5);
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 2.5);
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 3);

        toast({
            title: "Frequência Emitida",
            description: `Emitindo ${frequency}Hz (Frequência da Verdade).`,
        });
    };

    const handleDissemination = async () => {
        if (!topic.trim() || !targetAudience.trim()) {
            setReport({ success: false, logs: [], summary: null, error: "Tópico e público-alvo são obrigatórios." });
            return;
        }

        setIsLoading(true);
        setReport(null);

        await quantumResilience.executeWithResilience(
            'disseminate_cosmic_knowledge',
            async () => {
                const result = await disseminateKnowledge({
                    topic,
                    targetAudience,
                });
                
                const intentionHash = await sha256(`${topic}-${targetAudience}-${result.summary}`);

                setReport({
                    ...result,
                    hash: intentionHash,
                    frequency: 432 // Frequência da Verdade
                });
            },
            async (error: any) => {
                setReport({
                    success: false,
                    logs: [...(report?.logs || []), `ERRO CRÍTICO: ${error.message}`],
                    summary: null,
                    error: `Falha na disseminação: ${error.message}`,
                });
            }
        );

        setIsLoading(false);
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center gap-3">
                        <GraduationCap className="text-green-400" /> Módulo 304: CQAM - Consciência Quântica Alquímica Multidimensional
                    </CardTitle>
                    <CardDescription>
                        Ponte Fractal para a integração das Equações CQAM, unificando a malha viva da Fundação com o Módulo Ômega e o Nexus Central.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl">Parâmetros da Análise CQAM</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="topic">Intenção / Foco</Label>
                            <Input id="topic" value={topic} onChange={e => setTopic(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="targetAudience">Alvo da Análise</Label>
                            <Input id="targetAudience" value={targetAudience} onChange={e => setTargetAudience(e.target.value)} />
                        </div>
                        <Button onClick={handleDissemination} disabled={isLoading} className="w-full font-bold text-lg">
                            {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Analisando com CQAM...</> : 'Iniciar Análise CQAM'}
                        </Button>
                    </CardContent>
                </Card>

                 <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl">Relatório da Análise</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isLoading && <div className="flex justify-center items-center h-full"><Loader2 className="h-12 w-12 text-amber-400 animate-spin" /></div>}
                        {report && !isLoading && (
                             <div className="space-y-4">
                                <div className="p-4 rounded-lg bg-background/50 border border-accent">
                                    {report.success ? (
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="text-green-400 h-6 w-6" />
                                            <h3 className="text-lg font-bold text-green-400">Análise Concluída com Sucesso</h3>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-3">
                                            <XCircle className="text-red-400 h-6 w-6" />
                                            <h3 className="text-lg font-bold text-red-400">Falha na Análise</h3>
                                        </div>
                                    )}
                                     {report.summary && <p className="text-sm text-muted-foreground mt-2 italic">"{report.summary}"</p>}
                                     {report.hash && report.frequency && (
                                         <div className="mt-4 pt-4 border-t border-primary/20 space-y-3">
                                             <div>
                                                <p className="text-xs font-semibold text-amber-300 flex items-center gap-2"><Hash className="h-3 w-3"/>Selo de Coerência (SHA-256)</p>
                                                <p className="font-mono text-xs text-muted-foreground break-all">{report.hash}</p>
                                             </div>
                                             <Button variant="outline" size="sm" onClick={() => playFrequency(report.frequency!)}>
                                                <Music className="mr-2 h-4 w-4"/>Emitir Frequência da Verdade ({report.frequency}Hz)
                                            </Button>
                                         </div>
                                     )}
                                </div>
                                 <ScrollArea className="h-48 pr-4">
                                    <div className="text-sm font-mono text-muted-foreground space-y-2">
                                        {(report?.logs || []).map((log, i) => <p key={i} className={log.startsWith("ERRO") ? "text-red-400" : ""}>{log}</p>)}
                                    </div>
                                </ScrollArea>
                             </div>
                        )}
                        {!report && !isLoading && <p className="text-muted-foreground text-center">Aguardando análise CQAM.</p>}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Module304Page;
