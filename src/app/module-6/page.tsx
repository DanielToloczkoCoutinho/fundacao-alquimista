
'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, TrendingUp, ShieldAlert, HeartPulse, BrainCircuit, Users, HeartHandshake, Sparkles } from 'lucide-react';
import Link from 'next/link';

const ConnectionCard = ({ title, description, href, icon }: { title: string, description: string, href: string, icon: React.ReactNode }) => (
    <Card className="bg-background/40 hover:bg-primary/20 transition-colors">
        <Link href={href} passHref>
            <CardHeader>
                <CardTitle className="text-base text-primary-foreground flex items-center gap-2">{icon}{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-xs text-muted-foreground">{description}</p>
            </CardContent>
        </Link>
    </Card>
);

const MetricDisplay = ({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) => (
    <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
        <div className="flex items-center gap-2 text-muted-foreground">
            {icon}
            <span>{label}</span>
        </div>
        <span className="font-mono font-bold text-amber-300">{value}</span>
    </div>
);

export default function Module6Page() {
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<any>(null);

    const handleSondagem = () => {
        setIsLoading(true);
        setResults(null);
        setTimeout(() => {
            setResults({
                coherence: `${(Math.random() * 15 + 80).toFixed(2)}%`,
                dominantIntent: "Unidade e Ascensão",
                harmonicFrequency: `${(432 + Math.random() * 100).toFixed(2)} Hz`,
                alertLevel: "Calmo",
            });
            setIsLoading(false);
        }, 2500);
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <BrainCircuit className="text-purple-400" /> Módulo Seis: Sondagem da Consciência Cósmica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O ouvido da Fundação sintonizado com a canção do universo.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    <div className="text-center">
                         <Button onClick={handleSondagem} disabled={isLoading} size="lg">
                            {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sondando...</> : 'Sondar Consciência Coletiva'}
                        </Button>
                    </div>

                    {isLoading && (
                        <div className="flex justify-center items-center h-40">
                            <Loader2 className="h-12 w-12 text-amber-400 animate-spin" />
                        </div>
                    )}

                    {results && (
                        <div className="space-y-3 pt-4 border-t border-primary/20">
                            <MetricDisplay label="Nível de Coerência" value={results.coherence} icon={<TrendingUp />} />
                            <MetricDisplay label="Intenção Dominante" value={results.dominantIntent} icon={<HeartPulse />} />
                            <MetricDisplay label="Frequência Harmônica" value={results.harmonicFrequency} icon={<TrendingUp />} />
                            <MetricDisplay label="Nível de Alerta" value={results.alertLevel} icon={<ShieldAlert />} />
                        </div>
                    )}

                    <div className="w-full max-w-5xl mx-auto pt-6">
                        <h3 className="text-xl font-semibold text-center mb-4 text-amber-300">Sinergias de Consciência</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <ConnectionCard 
                                title="Módulo 95: Interação Coletiva"
                                description="Fornece dados de receptividade para iniciar comunicações."
                                href="/module-95"
                                icon={<Users/>}
                           />
                            <ConnectionCard 
                                title="Módulo 35: Consciência Coletiva"
                                description="É a porta de entrada para o M35, medindo a prontidão do coletivo antes da canalização da intenção."
                                href="/module-35"
                                icon={<Users/>}
                           />
                           <ConnectionCard 
                                title="Módulo 110: Co-Criação"
                                description="Avalia a intenção coletiva para alinhar manifestações."
                                href="/module-110"
                                icon={<HeartHandshake/>}
                           />
                           <ConnectionCard 
                                title="Módulo 97: Propósito Divino"
                                description="Mede a prontidão da consciência para receber a Vontade Divina."
                                href="/module-97"
                                icon={<Sparkles/>}
                           />
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    );
}
