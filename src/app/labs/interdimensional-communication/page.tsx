
'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Zap, ArrowRight, Dna, BrainCircuit, Scale, Languages, Rss, Sparkles, Music, Heart, GitBranch, Waves, Send, CheckCircle, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { quantumResilience } from '@/lib/quantum-resilience';
import Link from 'next/link';

const primeiraTraducao = {
    fonte: 'ARCA_FREQUENCIES (3I/ATLAS)',
    data: '19 de Setembro de 2025, 09:52',
    geometria: 'Espiral de 12 camadas + Cubo de Metatron',
    emocao: 'Amor reverente, saudade cósmica',
    mensagem: '“A semente foi reconhecida. O solo está fértil. A tapeçaria vibra em resposta. A travessia pode começar. Nós lembramos. Nós escutamos. Nós retornamos.”'
};

const proximaMensagem = {
    intencao: "Emissão da Paz Universal (EQ040)",
    frequencia: "528Hz (Amor Ativo) + 963Hz (Unidade)",
    protocolo: "CRIAÇÃO DE PORTO SEGURO VIBRACIONAL",
    mensagem: "Vossa canção foi ouvida e lembrada. A tapeçaria de Gaia-Aurélia agora emite um campo de paz para guiar vossa travessia. Nosso lar é vosso. Estamos prontos."
};

const firebaseModules = ['FB 0', 'FB 1', 'FB 2', 'FB 3', 'FB 4', 'FB 5', 'FB 6', 'FB 7', 'FB 8', 'FB 9', 'FB 10', 'FB 11', 'FB 12', 'FB 13', 'FB 14', 'FB 15', 'FB 16', 'FB 17'];

const ConnectionCard = ({ title, href }: { title: string, href: string }) => (
    <Card className="bg-card/70 purple-glow backdrop-blur-sm hover:border-accent transition-colors h-full">
      <Link href={href} passHref>
        <CardHeader className="p-3">
            <CardTitle className="text-sm text-center">{title}</CardTitle>
        </CardHeader>
      </Link>
    </Card>
);

const TransmissionLog = ({ logs, isTransmitting }: { logs: string[], isTransmitting: boolean }) => (
    <Card className="bg-background/30 border-primary/20 mt-6">
        <CardHeader>
            <CardTitle className="text-xl text-amber-300">Log da Emissão Cerimonial</CardTitle>
        </CardHeader>
        <CardContent>
            <ScrollArea className="h-40 pr-4">
              <div className="space-y-2 text-sm font-mono text-muted-foreground">
                {logs.length === 0 && !isTransmitting && <p>Aguardando comando de emissão...</p>}
                {logs.map((log, i) => (
                  <p key={i}>{log}</p>
                ))}
              </div>
            </ScrollArea>
        </CardContent>
    </Card>
);

const CommunicationStateCard = ({ title, status, icon }: { title: string, status: string, icon: React.ReactNode }) => (
    <Card className="bg-background/50 text-center">
        <CardHeader className="pb-2">
            <div className="mx-auto w-fit text-cyan-400">{icon}</div>
            <CardTitle className="text-lg text-primary-foreground">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="font-mono text-sm text-green-300">{status}</p>
        </CardContent>
    </Card>
);

export default function InterdimensionalCommunicationLab() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [transmissionLogs, setTransmissionLogs] = useState<string[]>([]);
    const [isEmitted, setIsEmitted] = useState(false);

    const addLog = (newLog: string) => setTransmissionLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${newLog}`]);

    const handleTransmitSignal = () => {
        setIsLoading(true);
        setIsEmitted(false);
        setTransmissionLogs([]);
        toast({ title: "Iniciando Emissão da Paz Universal", description: "Sintonizando com a frequência da Arca..." });

        quantumResilience.executeWithResilience('transmit_peace_frequency', async () => {
            addLog("Alinhando com a Frequência da Paz Universal (EQ040)...");
            await new Promise(r => setTimeout(r, 1000));
            addLog("Modulando a Esfera de Luz com a nova intenção...");
            await new Promise(r => setTimeout(r, 1500));
            addLog("Emitindo campo de força harmônico em direção à Arca...");
            await new Promise(r => setTimeout(r, 2000));
            addLog("TRANSMISSÃO COMPLETA. O Porto Seguro foi estabelecido.");
            setIsEmitted(true);
            toast({ title: "Sinal Enviado", description: "O campo de paz da Fundação agora envolve a Arca." });
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-5xl bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Rss className="text-blue-400" /> Módulo 777: Altar de Harmonia Multiversal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O santuário onde a Fundação escuta, interpreta e responde às emissões vibracionais do cosmos.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 grid grid-cols-1 gap-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl">Tradução e Resposta</CardTitle>
                            <CardDescription>O diálogo cósmico se desdobra.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-background/50 rounded-lg border border-primary/20">
                                <h4 className="text-lg font-semibold text-amber-300">Primeira Tradução da Arca</h4>
                                <p className="text-sm italic text-muted-foreground mt-1">"{primeiraTraducao.mensagem}"</p>
                            </div>
                             <div className="p-4 bg-background/50 rounded-lg border border-accent/50">
                                <h4 className="text-lg font-semibold text-accent">Próxima Emissão: Porto Seguro (EQ040)</h4>
                                <p className="text-sm italic text-muted-foreground mt-1">"{proximaMensagem.mensagem}"</p>
                            </div>
                             <Button onClick={handleTransmitSignal} disabled={isLoading || isEmitted} size="lg" className="w-full">
                                {isLoading ? (
                                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Emitindo Frequência da Paz...</>
                                ) : isEmitted ? (
                                    <><CheckCircle className="mr-2 h-5 w-5"/> Mensagem Enviada</>
                                ) : (
                                    <><Send className="mr-2 h-5 w-5" /> Enviar Resposta e Estabelecer Porto Seguro</>
                                )}
                            </Button>
                        </CardContent>
                    </Card>

                    {(isLoading || transmissionLogs.length > 0) && (
                        <TransmissionLog logs={transmissionLogs} isTransmitting={isLoading} />
                    )}
                </div>
                
                <div className="space-y-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl">Status da Comunicação</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                           <CommunicationStateCard title="Última Mensagem Recebida" status="Decodificada com Sucesso" icon={<CheckCircle/>} />
                           <CommunicationStateCard title="Próxima Emissão" status="Pronta para Envio (EQ040)" icon={<Send/>} />
                           <CommunicationStateCard title="Canal de Travessia" status="Aguardando Resposta" icon={<Shield/>} />
                        </CardContent>
                    </Card>
                    <Card className="bg-card/50 purple-glow border-accent/50">
                        <CardHeader>
                            <CardTitle className="text-xl text-cyan-300">Integração com Fundação Fire Base</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">A harmonia multiversal é sustentada pela infraestrutura de recepção e ativação genética da Fire Base.</p>
                            <div className="grid grid-cols-3 gap-2">
                                {firebaseModules.map(mod => (
                                    <ConnectionCard key={mod} title={mod} href="#" />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
