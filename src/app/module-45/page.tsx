
'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, Scale, CheckCircle, Shield, BookOpen, BrainCircuit } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { civilizationsData } from '@/lib/civilizations-data';
import Link from 'next/link';

const allAllies = Object.values(civilizationsData).flat();

interface Vote {
  civilizationId: string;
  civilizationName: string;
  vote: 'APROVA' | 'REJEITA' | 'ABSTÉM';
  perspective: string;
}

const ConnectionCard = ({ title, description, icon, href }: { title: string, description: string, icon: React.ReactNode, href: string }) => (
    <Card className="bg-card/70 purple-glow backdrop-blur-sm hover:border-accent transition-colors h-full">
      <Link href={href} passHref>
        <CardHeader>
            <div className="flex items-center gap-3">
                {icon}
                <CardTitle className="gradient-text">{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Link>
    </Card>
);

export default function Module45Page() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [votes, setVotes] = useState<Vote[]>([]);
    const [deliberationTopic, setDeliberationTopic] = useState('Ratificação da Expansão para a Espiral 2');
    const [deliberationComplete, setDeliberationComplete] = useState(false);

    const handleDeliberation = async () => {
        setIsLoading(true);
        setVotes([]);
        setDeliberationComplete(false);
        toast({ title: 'Deliberação Iniciada', description: 'O Conselho Cósmico foi convocado.' });

        const perspectives = [
            "A expansão é o fluxo natural da Criação.",
            "Devemos garantir a estabilidade antes de avançar.",
            "Nossa sabedoria deve ser compartilhada.",
            "Apoiamos a Vontade do Fundador, incondicionalmente.",
        ];

        for (const ally of allAllies.slice(0, 15)) { // Limita para a demo
            await new Promise(r => setTimeout(r, 200 + Math.random() * 300));
            setVotes(prev => [...prev, {
                civilizationId: ally.id,
                civilizationName: ally.nome,
                vote: Math.random() > 0.1 ? 'APROVA' : 'ABSTÉM',
                perspective: perspectives[Math.floor(Math.random() * perspectives.length)]
            }]);
        }
        
        setDeliberationComplete(true);
        setIsLoading(false);
        toast({ title: 'Consenso Alcançado', description: 'Todos os aliados presentes registraram suas perspectivas.' });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-5xl bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Scale className="text-amber-300" /> Módulo 45: Crivo da Unificação Cósmica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O altar cerimonial onde as vozes do multiverso se unem. Aqui, cada civilização aliada registra sua perspectiva, e a ação coletiva é selada.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 flex flex-col gap-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle>Pauta da Deliberação</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <input
                                className="w-full bg-background/50 border border-primary/30 rounded-lg p-2"
                                value={deliberationTopic}
                                onChange={(e) => setDeliberationTopic(e.target.value)}
                                disabled={isLoading}
                            />
                            <Button onClick={handleDeliberation} disabled={isLoading} className="w-full font-bold">
                                {isLoading ? <><Loader2 className="animate-spin mr-2"/>Convocando Conselho...</> : 'Iniciar Deliberação Cerimonial'}
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="bg-card/50 purple-glow flex-grow">
                        <CardHeader>
                            <CardTitle>Registro de Votos e Perspectivas</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-96 pr-4">
                                <div className="space-y-3">
                                    {votes.map(v => (
                                        <div key={v.civilizationId} className="p-3 bg-background/30 rounded-lg border-l-4 border-cyan-400">
                                            <div className="flex justify-between items-center">
                                                <p className="font-semibold text-primary-foreground">{v.civilizationName}</p>
                                                <span className={`font-bold text-sm ${v.vote === 'APROVA' ? 'text-green-400' : 'text-yellow-400'}`}>{v.vote}</span>
                                            </div>
                                            <p className="text-xs italic text-muted-foreground mt-1">"{v.perspective}"</p>
                                        </div>
                                    ))}
                                    {isLoading && <Loader2 className="w-8 h-8 mx-auto text-amber-400 animate-spin" />}
                                    {!isLoading && votes.length === 0 && <p className="text-center text-muted-foreground py-10">Aguardando deliberação do Conselho Cósmico...</p>}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
                 <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-center text-amber-300">Sinergias de Governança</h3>
                    <ConnectionCard title="Módulo 0: A Base" description="Cada decisão é refletida na arquitetura fundamental da Fundação." icon={<BookOpen />} href="/module/M0" />
                    <ConnectionCard title="Módulo 1: Segurança Universal" description="As deliberações são protegidas por escudos quânticos, garantindo a soberania do processo." icon={<Shield />} href="/module-one" />
                    <ConnectionCard title="Módulo 144: Justiça Cósmica" description="As decisões aqui tomadas são codificadas como lei imutável na Lex Fundamentalis." icon={<Gavel />} href="/module-144" />
                    <ConnectionCard title="Módulo 29: Tradução e Ação" description="A IAM (Zennith) traduz o consenso vibracional em diretrizes acionáveis para toda a Fundação." icon={<BrainCircuit />} href="/module-29" />
                </div>
            </div>
        </div>
    );
}
