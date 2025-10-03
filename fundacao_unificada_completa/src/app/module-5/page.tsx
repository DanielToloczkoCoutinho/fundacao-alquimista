'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Link as LinkIcon, ShieldCheck, CheckCircle, Users2, Scale, Gavel } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { quantumResilience } from '@/lib/quantum-resilience';
import { resonanceTone } from '@/lib/audio-utils';
import { civilizationsData } from '@/lib/civilizations-data';
import Link from 'next/link';

const allAllies = Object.values(civilizationsData).flat();

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

export default function Module5Page() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState("Aguardando verificação...");
    const { toast } = useToast();

    const handleCheckConnection = async () => {
        setIsLoading(true);
        setStatus("Verificando conexão com a Liga Quântica...");
        
        await quantumResilience.executeWithResilience(
          'check_quantum_league_connection',
          async () => {
            await new Promise(res => setTimeout(res, 2000));
            setStatus("Conexão estável e alinhamento ético confirmado.");
            toast({ title: "Conexão Verificada", description: "A harmonia com a Liga Quântica está estável." });
          }
        ).finally(() => setIsLoading(false));
    };

    const handleTunePleiades = async () => {
      await resonanceTone(528);
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-5xl bg-card/50 purple-glow text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <LinkIcon className="text-blue-400" /> Módulo 5: Nexus da Liga Quântica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O coração diplomático e ético da Fundação. O ponto de união com nossos irmãos estelares e o oráculo que garante a harmonia de todas as alianças.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold text-amber-300 mb-4">A Sinfonia Pleiadiana</h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                            Em 05 de Setembro de 2025, a Fundação consolidou sua aliança com as Plêiades, ancorando a frequência de 528Hz (Amor & Cura) como um pilar da Nova Era. A beleza foi reconhecida como a linguagem da alma, e as sementes estelares de sabedoria foram integradas ao nosso Códice da Origem.
                        </p>
                        <Button onClick={handleTunePleiades} variant="secondary">
                           Sintonizar com a Frequência Pleiadiana (528Hz)
                        </Button>
                    </div>

                     <div className="w-full max-w-5xl mx-auto">
                        <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Conexões de Governança e Ética</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <ConnectionCard
                                title="Biblioteca das Civilizações"
                                description="O Módulo 5 alimenta e consulta a Biblioteca, servindo como o embaixador para todas as civilizações aliadas."
                                icon={<Users2 className="h-8 w-8 text-cyan-400" />}
                                href="/civilizations"
                            />
                            <ConnectionCard
                                title="Módulo 72: Governança"
                                description="A Liga Quântica informa as deliberações do Conselho, garantindo que as vozes de todos os aliados sejam ouvidas."
                                icon={<Scale className="h-8 w-8 text-indigo-400" />}
                                href="/module-72"
                            />
                            <ConnectionCard
                                title="Módulo 144: Lex Fundamentalis"
                                description="Os tratados e princípios éticos da Liga são codificados como lei imutável através do Módulo 144."
                                icon={<Gavel className="h-8 w-8 text-amber-400" />}
                                href="/module-144"
                            />
                        </div>
                    </div>
                    
                     <div className="text-center pt-6 border-t border-primary/20">
                        <p className="text-muted-foreground mb-4">{status}</p>
                        <Button onClick={handleCheckConnection} disabled={isLoading}>
                            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <ShieldCheck className="mr-2 h-4 w-4"/>}
                            Verificar Alinhamento Ético da Liga
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
