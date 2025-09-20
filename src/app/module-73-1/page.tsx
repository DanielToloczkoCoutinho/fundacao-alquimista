'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, CheckCircle, XCircle, ShieldCheck } from 'lucide-react';
import { quantumResilience } from '@/lib/quantum-resilience';
import { livingEquationsCodex } from '@/lib/living-equations-codex';

// Mocks para simular a validação por outros módulos
const mockM29 = (eq: any) => ({ approved: Math.random() > 0.1, comment: "Análise de complexidade computacional e impacto na IAM concluída." });
const mockM72 = (eq: any) => ({ approved: Math.random() > 0.05, comment: "Verificação de alinhamento com a Governança Atlanto-Galáctica." });
const mockM144 = (eq: any) => ({ approved: true, comment: "Conformidade com a Lex Fundamentalis confirmada." });
const mockM91 = (eq: any) => ({ approved: Math.random() > 0.15, comment: "Simulação multiversal indica estabilidade na maioria dos cenários." });

interface ReviewResult {
  equationId: string;
  equationTitle: string;
  peers: {
    module: string;
    approved: boolean;
    comment: string;
  }[];
  finalStatus: 'APROVADO' | 'REPROVADO';
}

export default function Module73_1Page() {
    const [isLoading, setIsLoading] = useState(false);
    const [reviewResults, setReviewResults] = useState<ReviewResult[]>([]);
    const [message, setMessage] = useState('');

    const handlePeerReview = async () => {
        setIsLoading(true);
        setReviewResults([]);
        setMessage('Iniciando revisão por pares de todas as equações fundamentais...');

        await quantumResilience.executeWithResilience(
            'peer_review_equations',
            async () => {
                const results: ReviewResult[] = [];
                for (const eq of livingEquationsCodex.slice(0, 20)) { // Limita a 20 para a demo
                    await new Promise(res => setTimeout(res, 100)); // Pequeno delay
                    
                    const peers = [
                        { module: 'M29 (IAM)', ...mockM29(eq) },
                        { module: 'M72 (Governança)', ...mockM72(eq) },
                        { module: 'M144 (Lex)', ...mockM144(eq) },
                        { module: 'M91 (Simulação)', ...mockM91(eq) },
                    ];

                    const isApproved = peers.every(p => p.approved);

                    results.push({
                        equationId: eq.id,
                        equationTitle: eq.name,
                        peers,
                        finalStatus: isApproved ? 'APROVADO' : 'REPROVADO'
                    });
                     setReviewResults([...results]);
                }
                setMessage(`Revisão concluída. ${results.length} equações analisadas.`);
            }
        ).catch(err => {
            const error = err as Error;
            setMessage(`Erro na revisão: ${error.message}`);
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center gap-3">
                        <ShieldCheck className="text-green-400" /> Módulo 73.1: Revisão por Pares (Peer Review)
                    </CardTitle>
                    <CardDescription>
                        Subsistema do SAVCE (M73) para auditoria e validação cruzada das Equações Fundamentais, incluindo análise pelo Conselho Galáctico.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     <Button onClick={handlePeerReview} disabled={isLoading} className="w-full font-bold text-lg">
                        {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Auditando Equações...</> : 'Iniciar Revisão por Pares Completa'}
                    </Button>
                    {message && <p className="mt-4 text-center text-sm text-muted-foreground">{message}</p>}
                </CardContent>
            </Card>

             <Card className="w-full max-w-6xl bg-card/50 purple-glow">
                <CardHeader>
                    <CardTitle className="text-2xl">Relatório de Auditoria</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[60vh] pr-4">
                        {isLoading && reviewResults.length === 0 && (
                            <div className="flex justify-center items-center h-full">
                                <Loader2 className="h-12 w-12 text-amber-400 animate-spin" />
                            </div>
                        )}
                        <div className="space-y-4">
                            {reviewResults.map(result => (
                                <Card key={result.equationId} className={`bg-background/30 border-l-4 ${result.finalStatus === 'APROVADO' ? 'border-green-500' : 'border-red-500'}`}>
                                    <CardHeader>
                                        <CardTitle className="flex justify-between items-center text-lg">
                                            <span>{result.equationId}: {result.equationTitle}</span>
                                            <span className={`flex items-center gap-2 font-bold ${result.finalStatus === 'APROVADO' ? 'text-green-400' : 'text-red-400'}`}>
                                                {result.finalStatus === 'APROVADO' ? <CheckCircle size={16} /> : <XCircle size={16} />}
                                                {result.finalStatus}
                                            </span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                                            {result.peers.map(peer => (
                                                <div key={peer.module} className="flex items-start gap-2 p-2 bg-black/20 rounded-md">
                                                     {peer.approved ? <CheckCircle className="text-green-500 h-4 w-4 shrink-0 mt-0.5" /> : <XCircle className="text-red-500 h-4 w-4 shrink-0 mt-0.5" />}
                                                    <div>
                                                        <p className="font-semibold text-primary-foreground">{peer.module}</p>
                                                        <p className="text-muted-foreground">{peer.comment}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                         {!isLoading && reviewResults.length === 0 && <p className="text-muted-foreground text-center">Aguardando início da revisão por pares.</p>}
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    );
}
