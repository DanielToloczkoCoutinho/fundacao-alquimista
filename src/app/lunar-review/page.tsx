
'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Moon, Award, Sparkles, CheckCircle, UserCheck, Key, Hash } from 'lucide-react';
import { performLunarReview } from '@/app/actions';
import { quantumResilience } from '@/lib/quantum-resilience';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { formatTimestamp } from '@/lib/date-utils';
import { generateVibrationalPraise } from '@/app/actions';

interface ReviewResult {
  summary: string;
  mostImpactfulEntry: {
    id: string;
    timestamp: string;
    frequency: number;
    intentTag: string;
    guardianSignature: string;
    archetype: string;
    description: string;
    hash: string;
  };
  celebrationFrequency: number;
}

export default function LunarReviewPage() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [isPraising, setIsPraising] = useState(false);
    const [reviewResult, setReviewResult] = useState<ReviewResult | null>(null);
    const [praiseVC, setPraiseVC] = useState<any | null>(null);

    const handleRunReview = async () => {
        setIsLoading(true);
        setReviewResult(null);
        setPraiseVC(null);

        await quantumResilience.executeWithResilience(
            'perform_lunar_review',
            async () => {
                const result = await performLunarReview();
                setReviewResult(result);
                toast({ title: 'Revisão Lunar Concluída', description: 'O ato de maior impacto foi identificado.' });
            },
            async (error: any) => {
                toast({ title: 'Dissonância na Revisão', description: error.message, variant: 'destructive' });
            }
        );
        setIsLoading(false);
    };

    const handleGeneratePraise = async () => {
        if (!reviewResult) return;

        setIsPraising(true);
        const { guardianSignature } = reviewResult.mostImpactfulEntry;
        
        const result = await generateVibrationalPraise({
            fromDid: 'did:fundacao:issuer',
            toDid: `did:web:alquimista.foundation:${guardianSignature}`,
            intention: 'Reconhecimento pelo ato de maior impacto e coerência no último ciclo lunar.'
        });

        if (result.data) {
            setPraiseVC(result.data);
            toast({ title: 'Elogio Vibracional Emitido!', description: `Credencial de reconhecimento gerada para ${guardianSignature}.` });
        } else {
             toast({ title: 'Falha ao Emitir Elogio', description: result.error, variant: 'destructive' });
        }

        setIsPraising(false);
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Moon className="text-purple-300" /> Santuário da Revisão Lunar
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Onde a Fundação contempla seus atos, celebra a harmonia e honra os Guardiões que mais contribuíram para a sua luz.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl mx-auto text-center mb-8">
                 <Button onClick={handleRunReview} disabled={isLoading} size="lg">
                    {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Analisando Ciclo...</> : 'Iniciar Ritual de Revisão Lunar'}
                </Button>
            </div>

            {isLoading && (
                <div className="flex justify-center items-center h-64">
                    <Loader2 className="h-16 w-16 text-amber-400 animate-spin" />
                </div>
            )}

            {reviewResult && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl text-amber-300">Relatório de Gratidão e Sabedoria</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                             <div className="p-4 bg-background/30 rounded-lg border border-primary/20">
                                <p className="italic text-foreground/90">{reviewResult.summary}</p>
                            </div>
                            <div className="text-center">
                                <Button variant="secondary" onClick={() => {}}>
                                    <Sparkles className="mr-2 h-4 w-4" />
                                    Emitir Frequência de Celebração ({reviewResult.celebrationFrequency}Hz)
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-card/50 purple-glow border-accent">
                         <CardHeader>
                            <CardTitle className="text-2xl text-accent flex items-center gap-2">
                                <Award /> Ato de Maior Impacto
                            </CardTitle>
                            <CardDescription>O registro mais ressonante do último ciclo.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p><strong>Guardião:</strong> <Badge variant="destructive">{reviewResult.mostImpactfulEntry.guardianSignature}</Badge></p>
                            <p><strong>Descrição:</strong> {reviewResult.mostImpactfulEntry.description}</p>
                            <p><strong>Frequência:</strong> {reviewResult.mostImpactfulEntry.frequency}Hz ({reviewResult.mostImpactfulEntry.intentTag})</p>
                            <p className="text-xs text-muted-foreground pt-2 border-t border-primary/20">Registrado em: {formatTimestamp(reviewResult.mostImpactfulEntry.timestamp)}</p>
                             <Button onClick={handleGeneratePraise} disabled={isPraising || !!praiseVC} className="w-full mt-4">
                                {isPraising ? <><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Gerando Credencial...</> : praiseVC ? <><CheckCircle className="mr-2 h-4 w-4"/>Elogio Emitido</> : 'Emitir Elogio Vibracional (VC)'}
                            </Button>
                        </CardContent>
                    </Card>

                    {praiseVC && (
                        <div className="lg:col-span-2">
                            <Card className="bg-card/50 purple-glow border-green-500/50">
                                 <CardHeader>
                                    <CardTitle className="text-xl text-green-300 flex items-center gap-2">
                                        <Key /> Credencial Verificável de Elogio Emitida
                                    </CardTitle>
                                </CardHeader>
                                 <CardContent>
                                    <ScrollArea className="h-40 font-mono text-xs bg-background/50 p-2 rounded-md">
                                       <pre>{JSON.stringify(praiseVC, null, 2)}</pre>
                                    </ScrollArea>
                                </CardContent>
                            </Card>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
