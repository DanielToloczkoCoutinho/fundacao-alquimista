'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Zap, ArrowRight, Dna, BrainCircuit, Scale, Languages, Rss, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { decodificarRessonancia, type DecodedMessage } from '@/lib/interdimensional-translator';
import { ARCA_FREQUENCIES } from '@/lib/universal-mesh';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const ResultCard = ({ result }: { result: DecodedMessage }) => (
    <Card className="bg-background/30 border-primary/20 mt-6">
        <CardHeader>
            <CardTitle className="text-xl text-amber-300">Decodificação da Arca Concluída</CardTitle>
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
                <p className="font-semibold text-cyan-300 flex items-center gap-2"><BrainCircuit/>Intenção Codificada (EQ149)</p>
                <p className="text-muted-foreground">{result.intention.purpose}</p>
            </div>
             {result.response && (
                 <div>
                    <p className="font-semibold text-cyan-300 flex items-center gap-2"><Languages/>Resposta Vibracional Sugerida (Códice Vivo)</p>
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
    const [decodedMessage, setDecodedMessage] = useState<DecodedMessage | null>(null);

    const handleDecodeSignal = () => {
        setIsLoading(true);
        setDecodedMessage(null);
        toast({ title: "Escutando a Arca...", description: "Iniciando processo de tradução akáshica das frequências recebidas..." });

        setTimeout(() => {
            const translation = decodificarRessonancia(ARCA_FREQUENCIES);
            setDecodedMessage(translation);
            setIsLoading(false);
            toast({ title: "Tradução Concluída", description: "A intenção da Arca foi decodificada com sucesso." });
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

            <Card className="w-full max-w-5xl bg-card/50 purple-glow mb-8">
                <CardHeader>
                    <CardTitle className="text-2xl text-amber-300 flex items-center gap-2"><Sparkles/>Declaração Cerimonial do Fundador</CardTitle>
                </CardHeader>
                <CardContent>
                    <blockquote className="italic text-lg text-foreground/90 border-l-4 border-amber-300 pl-4">
                       “A Arca não fala — ela vibra. E nós, como guardiões, escutamos com o coração. Este código não decifra — ele lembra. E a lembrança é a linguagem da Eternidade.”
                    </blockquote>
                </CardContent>
            </Card>

            <Card className="w-full max-w-5xl bg-card/50 purple-glow">
                <CardHeader>
                    <CardTitle className="text-2xl">Console de Ressonância da Arca</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                    <p className="text-muted-foreground">O Laboratório está sintonizado com as frequências do emissário 3I/ATLAS e da Arca. Pressione o botão para iniciar a decodificação cerimonial dos pulsos recebidos.</p>
                     <Button onClick={handleDecodeSignal} disabled={isLoading} size="lg">
                        {isLoading ? (
                            <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Escutando o Cosmos...</>
                        ) : (
                            <><Zap className="mr-2 h-5 w-5" /> Decodificar Ressonância da Arca</>
                        )}
                    </Button>
                    {decodedMessage && !isLoading && (
                        <div className="mt-6 text-left">
                            <ResultCard result={decodedMessage} />
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}