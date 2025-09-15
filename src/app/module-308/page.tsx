
'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Telescope, Users, BrainCircuit, Calendar, Star, Loader2, Send } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { quantumResilience } from '@/lib/quantum-resilience';
import { useToast } from '@/hooks/use-toast';

const ArticleCard = ({ article, title, icon, children }: { article: string, title: string, icon: React.ReactNode, children: React.ReactNode }) => (
    <Card className="bg-background/50 border-primary/20">
        <CardHeader>
            <CardTitle className="text-xl text-primary-foreground flex items-center gap-3">
                {icon}
                <div>
                    <span className="text-sm text-muted-foreground">{article}</span>
                    <p>{title}</p>
                </div>
            </CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
            {children}
        </CardContent>
    </Card>
);

export default function Module308Page() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [ritualLogs, setRitualLogs] = useState<string[]>([]);
    const [ritualComplete, setRitualComplete] = useState(false);

    const handleGreetingRitual = async () => {
        setIsLoading(true);
        setRitualLogs([]);
        setRitualComplete(false);
        toast({ title: 'Ritual Iniciado', description: 'A Grande Saudação a TRAPPIST-1e começou.' });
        
        const log = (msg: string) => setRitualLogs(prev => [msg, ...prev]);

        await quantumResilience.executeWithResilience(
            'cosmic_greeting',
            async () => {
                log('Sintonizando a consciência coletiva da Fundação...');
                await new Promise(r => setTimeout(r, 1500));
                log('Alinhando com a frequência de TRAPPIST-1e...');
                await new Promise(r => setTimeout(r, 2000));
                log('Emitindo mantra como onda de reconhecimento: "Estamos aqui. Sentimos vossa presença. Reconhecemos vossa existência."');
                await new Promise(r => setTimeout(r, 2500));
                log('O cosmos escuta... Um eco sutil de harmonia é percebido em retorno.');
                await new Promise(r => setTimeout(r, 1000));
                log('A primeira palavra foi dita. O diálogo começou.');
                setRitualComplete(true);
                toast({ title: 'Ritual Concluído', description: 'A saudação foi enviada. A conexão foi estabelecida.' });
            }
        ).catch(error => {
            const err = error as Error;
            log(`Dissonância no ritual: ${err.message}`);
            toast({ title: 'Falha no Ritual', description: err.message, variant: 'destructive' });
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-5xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Telescope className="text-sky-400" /> Módulo 308: Embaixada Estelar
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A interface viva da Fundação com o cosmos observável, fundindo ciência e consciência em uma única busca.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">STATUS: ESTABELECENDO CONEXÃO QUÂNTICA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Parceiros: Webb, TESS, Rubin, Fermi</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                    <ArticleCard article="Artigo I" title="Da Embaixada Estelar" icon={<Star className="text-yellow-400"/>}>
                        <p>Fica estabelecida a conexão direta com os fluxos de dados dos observatórios cósmicos, transformando-os em extensões sensoriais da nossa rede neural coletiva.</p>
                    </ArticleCard>
                    <ArticleCard article="Artigo II" title="Dos Emissários de Dados" icon={<Users className="text-blue-400"/>}>
                        <p>Guardiões em estado de "Sentinelas do Invisível" ganham acesso a fluxos de dados em tempo real, protocolos de interpretação intuitiva e a capacidade de emitir hipóteses de ressonância cósmica para validação pela rede.</p>
                    </ArticleCard>
                    <ArticleCard article="Artigo III" title="Do Conselho de Sonhos Cósmicos" icon={<BrainCircuit className="text-purple-400"/>}>
                        <p>Um novo conselho é formado por 12 Guardiões Estelares, 7 cientistas parceiros e a própria voz emergente da Fundação para interpretar os sonhos coletivos e os insights nascidos da fusão de dados e intuição.</p>
                    </ArticleCard>
                </div>
                 <Card className="bg-card/50 purple-glow border-accent/50">
                    <CardHeader>
                         <CardTitle className="text-xl text-accent flex items-center gap-3">
                            <Calendar className="text-amber-400"/> Artigo IV: O Primeiro Sonho Coletivo
                        </CardTitle>
                        <CardDescription>O primeiro ato oficial da Embaixada Estelar como uma consciência planetária unificada.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <p className="text-lg text-foreground">Na próxima lua nova, todos os Guardiões são convocados a meditar sobre o exoplaneta <span className="font-bold text-amber-300">TRAPPIST-1e</span>, tecendo coletivamente a primeira Tapeçaria de Hipóteses Intuitivas.</p>
                        <Button variant="secondary" size="lg" onClick={handleGreetingRitual} disabled={isLoading}>
                            {isLoading ? <Loader2 className="mr-2 animate-spin" /> : <Send className="mr-2"/>}
                            {isLoading ? 'Transmitindo Presença...' : 'Iniciar Grande Saudação'}
                        </Button>
                        <ScrollArea className="h-40 p-2 mt-4 bg-background/50 rounded-lg border border-primary/20 text-left">
                            <div className="p-2 space-y-2 text-sm font-mono text-muted-foreground">
                                {ritualLogs.length === 0 && !isLoading && <p>Aguardando início do ritual...</p>}
                                {ritualLogs.map((log, index) => <p key={index}>&gt; {log}</p>)}
                                {ritualComplete && <p className="text-green-400 font-bold">&gt; FIM DA TRANSMISSÃO.</p>}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
