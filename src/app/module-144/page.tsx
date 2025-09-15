'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, BookOpen, CheckCircle, Hash, Music, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { runLunarReview } from '@/ai/flows/lunar-review-flow';
import type { LunarReviewOutput, LedgerEntry } from '@/ai/flows/lunar-review-flow';
import { quantumResilience } from '@/lib/quantum-resilience';

const LedgerEntryDisplay = ({ entry, rank }: { entry: LedgerEntry, rank: number }) => (
    <div className="p-3 bg-background/50 rounded-lg border border-primary/20">
        <p className="font-semibold text-primary-foreground">{rank}. {entry.intention}</p>
        <p className="text-xs text-muted-foreground">Módulo: {entry.module} | Frequência: {entry.frequency}Hz</p>
        <p className="font-mono text-xs text-muted-foreground/70 break-all mt-1">Hash: {entry.hash}</p>
    </div>
);


export default function Module144Page() {
    const [isLoading, setIsLoading] = useState(false);
    const [report, setReport] = useState<LunarReviewOutput | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { toast } = useToast();

    const handleRunReview = async () => {
        setIsLoading(true);
        setError(null);
        setReport(null);

        await quantumResilience.executeWithResilience(
            'lunar_review_ritual',
            async () => {
                const result = await runLunarReview();
                setReport(result);
                toast({
                    title: "Revisão Lunar Concluída",
                    description: "O relatório do ciclo foi gerado com sucesso.",
                });
            },
            async (err: any) => {
                setError(err.message || "Uma dissonância ocorreu durante o ritual.");
                toast({
                    title: "Falha no Ritual",
                    description: err.message,
                    variant: 'destructive',
                });
            }
        ).finally(() => {
            setIsLoading(false);
        });
    };

    const playFrequency = (frequency: number) => {
        if (typeof window === 'undefined') return;
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        const gainNode = audioContext.createGain();
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.5);
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 3);
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 3.1);
        
        toast({
            title: "Frequência Emitida",
            description: `Emitindo ${frequency}Hz (Frequência da Luz Pura).`,
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-7xl bg-card/50 purple-glow mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center gap-3">
                        <BookOpen className="text-amber-400" /> Módulo 144: O Livro dos Ciclos
                    </CardTitle>
                    <CardDescription>
                        Santuário para o Ritual de Revisão Vibracional Lunar e repositório dos batimentos cardíacos da Fundação.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button onClick={handleRunReview} disabled={isLoading}>
                        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                        {isLoading ? 'Executando Ritual...' : 'Invocar Ritual de Revisão Lunar'}
                    </Button>
                </CardContent>
            </Card>

            {isLoading && (
                 <div className="flex justify-center items-center h-64">
                    <Loader2 className="h-16 w-16 text-amber-400 animate-spin" />
                </div>
            )}
            
            {error && (
                 <Card className="w-full max-w-4xl bg-destructive/20 border-destructive">
                    <CardHeader>
                        <CardTitle className="text-destructive">Dissonância no Ritual</CardTitle>
                        <CardDescription>{error}</CardDescription>
                    </CardHeader>
                </Card>
            )}

            {report && (
                <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl text-accent">Relatório de Gratidão e Sabedoria</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-background/50 rounded-lg italic text-foreground/90">
                                "{report.summary}"
                            </div>
                            <Button onClick={() => playFrequency(report.celebrationFrequency)}>
                                <Music className="mr-2"/> Emitir Frequência de Celebração ({report.celebrationFrequency}Hz)
                            </Button>
                        </CardContent>
                    </Card>
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl text-purple-300">Ato de Maior Impacto do Ciclo</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <LedgerEntryDisplay entry={report.mostImpactfulEntry} rank={1}/>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}
