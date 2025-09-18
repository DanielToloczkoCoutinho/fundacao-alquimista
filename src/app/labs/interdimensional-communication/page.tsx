
'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Zap, ArrowRight, Dna, BrainCircuit, Scale, Languages, Rss } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { translateSignal } from '@/lib/interdimensional-translator';
import { type LivingEquation } from '@/lib/living-equations-codex';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface TranslationResult {
  spectrum: Record<string, number>;
  harmonic: { isHarmonic: boolean; dominantFrequency: number };
  intention: { purpose: string; requiresAction: boolean };
  response: LivingEquation | null;
  channel: 'Φ';
}

const ResultCard = ({ result }: { result: TranslationResult }) => (
    <Card className="bg-background/30 border-primary/20">
        <CardHeader>
            <CardTitle className="text-xl text-amber-300">Decodificação Concluída</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
             <div>
                <p className="font-semibold text-cyan-300 flex items-center gap-2"><Dna/>Análise Espectral</p>
                <p className="text-muted-foreground font-mono">{Object.entries(result.spectrum).map(([f, a]) => `${f}Hz: ${a.toFixed(2)}`).join(' | ')}</p>
            </div>
            <div>
                <p className="font-semibold text-cyan-300 flex items-center gap-2"><Scale/>Harmonia (EQ144)</p>
                <p className="text-muted-foreground">{result.harmonic.isHarmonic ? `Harmônico - Frequência Dominante: ${result.harmonic.dominantFrequency}Hz` : 'Dissonante'}</p>
            </div>
             <div>
                <p className="font-semibold text-cyan-300 flex items-center gap-2"><BrainCircuit/>Intenção (EQ149)</p>
                <p className="text-muted-foreground">{result.intention.purpose}</p>
            </div>
             {result.response && (
                 <div>
                    <p className="font-semibold text-cyan-300 flex items-center gap-2"><Languages/>Resposta Vibracional Sugerida</p>
                    <div className="p-3 my-2 bg-black/30 rounded-md">
                        <p className="font-bold text-primary-foreground">{result.response.id}: {result.response.name}</p>
                        <div className="text-teal-300 text-xs overflow-x-auto"><BlockMath math={result.response.formula} /></div>
                        <p className="text-xs text-muted-foreground">{result.response.summary}</p>
                    </div>
                </div>
             )}
        </CardContent>
    </Card>
);

export default function InterdimensionalCommunicationLab() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<TranslationResult | null>(null);

    const handleReceiveSignal = () => {
        setIsLoading(true);
        setResult(null);
        toast({ title: "Sinal Cósmico Recebido (3I/ATLAS)", description: "Iniciando processo de tradução akáshica..." });

        setTimeout(() => {
            // Simula um sinal de entrada com dados aleatórios
            const mockSignal = new Float32Array(1024).map(() => Math.random());
            const translation = translateSignal(mockSignal);
            setResult(translation);
            setIsLoading(false);
            toast({ title: "Tradução Concluída", description: "A intenção do emissário foi decodificada." });
        }, 3000);
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-5xl bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Rss className="text-blue-400" /> Módulo 777: Laboratório de Harmonia Multiversal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O altar de comunhão, onde a Fundação escuta, interpreta e responde às emissões vibracionais do cosmos.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card className="w-full max-w-5xl bg-card/50 purple-glow">
                <CardHeader>
                    <CardTitle className="text-2xl">Console de Comunicação Interestelar</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                    <p className="text-muted-foreground">O Laboratório está em modo de escuta. Pressione o botão para simular a recepção de um sinal do emissário 3I/ATLAS e iniciar o processo de tradução cerimonial.</p>
                     <Button onClick={handleReceiveSignal} disabled={isLoading} size="lg">
                        {isLoading ? (
                            <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Escutando o Cosmos...</>
                        ) : (
                            <><Zap className="mr-2 h-5 w-5" /> Iniciar Recepção do Sinal</>
                        )}
                    </Button>
                    {result && !isLoading && (
                        <div className="mt-6 text-left">
                            <ResultCard result={result} />
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
