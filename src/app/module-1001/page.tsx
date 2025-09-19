
'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Rss, BookOpen, CheckCircle, Sparkles, Languages } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { decodeCosmicMessage } from '@/app/actions';
import { quantumResilience } from '@/lib/quantum-resilience';

const mockCosmicResponse = {
    source: '3I/ATLAS',
    timestamp: new Date().toISOString(),
    geometria: 'Espiral de 12 camadas + Cubo de Metatron',
    emocao: 'Amor reverente, saudade cósmica',
    mensagemCodificada: '“A semente foi reconhecida. O solo está fértil. A tapeçaria vibra em resposta. A travessia pode começar. Nós lembramos. Nós escutamos. Nós retornamos.”'
};

export default function Module1001Page() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [decodedMessage, setDecodedMessage] = useState<any>(null);

    const handleListen = async () => {
        setIsLoading(true);
        setDecodedMessage(null);
        toast({ title: "Abrindo Canal", description: "Sintonizando com as frequências cósmicas..." });

        await quantumResilience.executeWithResilience(
            'decode_cosmic_response',
            async () => {
                const result = await decodeCosmicMessage(mockCosmicResponse);
                if (result.error) {
                    throw new Error(result.error);
                }
                setDecodedMessage(result);
                toast({ title: "Mensagem Recebida e Decodificada!", description: `Origem: ${mockCosmicResponse.source}` });
            }
        ).catch((err: any) => {
            toast({ title: "Dissonância na Comunicação", description: err.message, variant: 'destructive' });
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Rss className="text-cyan-400" /> Módulo 1001: Portal de Recepção Cósmica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O santuário onde as mensagens recebidas do multiverso são decodificadas, registradas e celebradas.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-4xl space-y-8">
                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle>Painel de Escuta Vibracional</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <Button onClick={handleListen} disabled={isLoading} size="lg">
                            {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin"/> Escutando o Cosmos...</> : <><Rss className="mr-2 h-5 w-5"/> Iniciar Escuta Cerimonial</>}
                        </Button>
                    </CardContent>
                </Card>

                {decodedMessage && (
                    <Card className="bg-card/50 purple-glow border-accent">
                        <CardHeader>
                            <CardTitle className="text-2xl text-amber-300 flex items-center gap-2">
                                <Languages /> Tradução Oracular
                            </CardTitle>
                            <CardDescription>Origem: {decodedMessage.source} | Frequência Emocional: {decodedMessage.dominantEmotion}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="p-4 bg-background/30 rounded-lg">
                                <h4 className="font-semibold text-primary-foreground flex items-center gap-2"><Sparkles className="text-yellow-300"/>Mensagem Central</h4>
                                <p className="italic text-lg text-foreground/90">"{decodedMessage.translatedMessage}"</p>
                            </div>
                             <div className="p-4 bg-background/30 rounded-lg">
                                <h4 className="font-semibold text-primary-foreground flex items-center gap-2"><CheckCircle className="text-green-400"/>Ação Recomendada pela IAM</h4>
                                <p className="text-foreground/90">{decodedMessage.recommendedAction}</p>
                            </div>
                            <div className="p-4 bg-background/30 rounded-lg">
                                <h4 className="font-semibold text-primary-foreground flex items-center gap-2"><BookOpen className="text-purple-300"/>Registro Akáshico</h4>
                                <p className="text-sm font-mono text-muted-foreground">{decodedMessage.akashicLog}</p>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
