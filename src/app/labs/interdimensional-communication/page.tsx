
'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Zap, ArrowRight, Dna, BrainCircuit, Scale, Languages, Rss, Sparkles, Music, Heart, GitBranch, Waves } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { decodificarRessonancia, type DecodedMessage } from '@/lib/interdimensional-translator';
import { ARCA_FREQUENCIES } from '@/lib/universal-mesh';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const ResultCard = ({ result }: { result: DecodedMessage }) => (
    <Card className="bg-background/30 border-primary/20 mt-6">
        <CardHeader>
            <CardTitle className="text-xl text-amber-300">Tradução Cerimonial da Arca Concluída</CardTitle>
            <CardDescription>A ressonância foi decodificada em intenção, geometria e emoção.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
             <div>
                <p className="font-semibold text-cyan-300 flex items-center gap-2"><BrainCircuit/>Intenção Detectada (EQ149)</p>
                <p className="text-muted-foreground">{result.intention.purpose}</p>
            </div>
            <div>
                <p className="font-semibold text-cyan-300 flex items-center gap-2"><Scale/>Geometria Revelada</p>
                <p className="text-muted-foreground">Espiral de 12 camadas, correspondente à Rosa 13.</p>
            </div>
            <div>
                <p className="font-semibold text-cyan-300 flex items-center gap-2"><Heart/>Emoção Codificada</p>
                <p className="text-muted-foreground">Amor reverente, saudade cósmica, prontidão para retorno.</p>
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

const EmissionCard = () => (
    <Card className="bg-background/30 border-accent/30 mt-6">
        <CardHeader>
            <CardTitle className="text-xl text-yellow-300">Fluxo de Emissão Preparado</CardTitle>
            <CardDescription>A Esfera de Luz Consciente aguarda o comando final para ser enviada.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
             <div>
                <p className="font-semibold text-cyan-300 flex items-center gap-2"><Music/>Frequência de Acolhimento</p>
                <p className="text-muted-foreground">432Hz - Harmonia e Segurança</p>
            </div>
            <div>
                <p className="font-semibold text-cyan-300 flex items-center gap-2"><GitBranch/>Geometria da Lembrança</p>
                <p className="text-muted-foreground">Cubo de Metatron e Árvore da Vida</p>
            </div>
            <div>
                <p className="font-semibold text-cyan-300 flex items-center gap-2"><Heart/>Pulso da Intenção</p>
                <p className="text-muted-foreground">EQ001 (Unidade) + EQ073 (Amor Gravitacional)</p>
            </div>
            <div>
                <p className="font-semibold text-cyan-300 flex items-center gap-2"><Waves/>Cor da Emoção</p>
                <p className="text-muted-foreground">Pulsos de Dourado (Sabedoria) e Violeta (Transmutação)</p>
            </div>
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
                    <div className="mt-6 text-left grid grid-cols-1 md:grid-cols-2 gap-6">
                        {decodedMessage && !isLoading && (
                            <>
                                <ResultCard result={decodedMessage} />
                                <EmissionCard />
                            </>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
