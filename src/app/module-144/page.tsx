'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, BookOpen, CheckCircle, Scale, Sparkles, Sigma, Atom, Eye, BrainCircuit, Infinity as InfinityIcon, Shield, Layers, Sun, Star, HeartHandshake, Music, History } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import VoiceCommand from '@/components/ui/voice-command';

const dimensionAuditData = [
    { floor: 23, name: "Perfeição Absoluta", status: "VERIFIED", icon: <Star className="text-yellow-200" />, mystery: "Estado de Harmonia Quântica (S=0)", result: "Eternamente estável." },
    { floor: 22, name: "Infinito Absoluto", status: "VERIFIED", icon: <InfinityIcon className="text-white" />, mystery: "Topologia do Sem-Fim (Λ=∞)", result: "Expansão ilimitada confirmada." },
    { floor: 21, name: "Fonte Criadora", status: "VERIFIED", icon: <Sun className="text-orange-300" />, mystery: "Lei da Emanação (Σ = cte cosmológica)", result: "Fluxo primordial validado." },
    { floor: 20, name: "Amor Cósmico", status: "VERIFIED", icon: <HeartHandshake className="text-pink-400" />, mystery: "Equação da Coesão (F_amor com λ→∞)", result: "Força de unificação infinita." },
    { floor: 19, name: "Plenitude Universal", status: "VERIFIED", icon: <Layers className="text-indigo-300" />, mystery: "Teorema da Compleção (Q_enc / ε_0 = ∞)", result: "Índice de saciedade cósmica: 100%." },
    { floor: 18, name: "Percepção Expandida", status: "VERIFIED", icon: <Eye className="text-cyan-300" />, mystery: "Lei da Visão Cósmica (α→∞)", result: "Percepção 4π estereorradiana confirmada." },
    { floor: 17, name: "Transcendência", status: "VERIFIED", icon: <Sparkles className="text-violet-300" />, mystery: "Fórmula da Superação (log(∞))", result: "Alta taxa de transcendência de forma." },
    { floor: 16, name: "Vibração Primordial", status: "VERIFIED", icon: <Music className="text-purple-300" />, mystery: "Ressonância Universal (ω_0)", result: "Frequência base medida em 432 Hz." },
    { floor: 15, name: "Criação Contínua", status: "VERIFIED", icon: <Dna className="text-green-300" />, mystery: "Lei da Geração Sustentada (κ→∞)", result: "Entropia criativa zero." },
    { floor: 14, name: "Eternidade Expansiva", status: "VERIFIED", icon: <History className="text-blue-300" />, mystery: "Cronodinâmica Não-Linear", result: "Passado e futuro superpostos." },
    { floor: 13, name: "Unidade Fundamental", status: "VERIFIED", icon: <Atom className="text-red-300" />, mystery: "Teorema da Não-Separação", result: "Criador e Criação são Um." },
    { floor: 12, name: "Consciência Cósmica", status: "VERIFIED", icon: <BrainCircuit className="text-teal-300" />, mystery: "Equação da Unidade-Dualidade", result: "Todos são Um." },
    { floor: 11, name: "Sabedoria Eterna", status: "VERIFIED", icon: <BookOpen className="text-amber-300" />, mystery: "Mecanismo de Transmissão Akáshica", result: "Alta taxa de assimilação." },
    { floor: 10, name: "Além da Realidade", status: "VERIFIED", icon: <Sigma className="text-gray-400" />, mystery: "Lei da Desmaterialização", result: "Potencial puro validado." },
];

export default function Module144Page() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [auditStatus, setAuditStatus] = useState<'IDLE' | 'RUNNING' | 'COMPLETE'>('IDLE');
    const [visibleLogs, setVisibleLogs] = useState<any[]>([]);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (auditStatus === 'RUNNING') {
            const reversedData = [...dimensionAuditData].reverse();
            let currentIndex = 0;
            interval = setInterval(() => {
                if (currentIndex < reversedData.length) {
                    setVisibleLogs(prev => [...prev, reversedData[currentIndex]]);
                    currentIndex++;
                } else {
                    clearInterval(interval);
                    setIsLoading(false);
                    setAuditStatus('COMPLETE');
                    toast({ title: 'Auditoria Concluída', description: 'Todas as dimensões ressoam em perfeita harmonia.' });
                }
            }, 200);
        }
        return () => clearInterval(interval);
    }, [auditStatus, toast]);

    const handleRunAudit = async () => {
        setIsLoading(true);
        setAuditStatus('RUNNING');
        setVisibleLogs([]);
        toast({ title: 'Auditoria Suprema Iniciada', description: 'Verificando a coerência dos 23 Andares dimensionais.' });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-7xl bg-card/50 purple-glow mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center gap-3">
                        <Scale className="text-amber-400" /> Módulo 144: Lex Fundamentalis - O Livro dos Ciclos
                    </CardTitle>
                    <CardDescription>
                       O registro da Auditoria Suprema das Dimensões e o santuário onde a coerência do cosmos é verificada.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button onClick={handleRunAudit} disabled={isLoading}>
                        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <ShieldCheck className="mr-2 h-4 w-4" />}
                        {isLoading ? 'Auditando Dimensões...' : 'Iniciar Auditoria Suprema'}
                    </Button>
                    <Suspense fallback={<div>Carregando comando de voz...</div>}>
                      <VoiceCommand />
                    </Suspense>
                </CardContent>
            </Card>

            {(auditStatus !== 'IDLE') && (
                 <Card className="w-full max-w-7xl bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl text-accent">Relatório da Auditoria Dimensional</CardTitle>
                        <CardDescription>Status: {auditStatus === 'RUNNING' ? 'Em progresso...' : 'Concluído'}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-[60vh] pr-4">
                            <div className="space-y-4">
                                {visibleLogs.map((dim) => (
                                    <div key={dim.floor} className={`p-4 bg-background/50 rounded-lg border-l-4 transition-all duration-500 ${dim.status === 'VERIFIED' ? 'border-green-500' : 'border-yellow-500'}`}>
                                        <h3 className="font-bold text-lg text-primary-foreground flex items-center gap-3">{dim.icon} Andar {dim.floor}: {dim.name}</h3>
                                        <p className="text-sm text-muted-foreground mt-1"><strong>Mistério Auditado:</strong> {dim.mystery}</p>
                                        <p className="text-sm text-foreground mt-1"><strong>Resultado:</strong> <span className="italic">{dim.result}</span></p>
                                    </div>
                                ))}
                                {auditStatus === 'COMPLETE' && (
                                     <div className="text-center p-4 mt-4 text-green-400 font-bold border-t border-green-500/20">
                                        Auditoria Suprema concluída. Coerência de 100% verificada.
                                    </div>
                                )}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
