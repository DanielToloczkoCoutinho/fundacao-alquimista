
'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Scale, GitBranch, ShieldCheck, HeartHandshake, InfinityIcon } from 'lucide-react';
import Link from 'next/link';

const PillarCard = ({ title, description, icon, href }: { title: string, description: string, icon: React.ReactNode, href: string }) => (
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

export default function Module72Page() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState("Aguardando deliberação...");

    const handleHarmonize = () => {
        setIsLoading(true);
        setStatus("Harmonizando diretrizes e alinhando com a Vontade Divina...");
        setTimeout(() => {
            setStatus("Consenso alcançado. A Fundação opera em perfeita harmonia.");
            setIsLoading(false);
        }, 2500);
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Scale className="text-indigo-300" /> Módulo 72: Governança Universal e Equilíbrio Cósmico
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Conselho de deliberação para harmonizar e ratificar diretrizes, garantindo a estabilidade e o alinhamento ético de toda a Fundação.
                    </CardDescription>
                </CardHeader>
                 <CardContent className="space-y-6">
                    <p className="text-muted-foreground font-semibold">{status}</p>
                    <Button onClick={handleHarmonize} disabled={isLoading} size="lg" variant="secondary">
                        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                        Iniciar Protocolo de Harmonização
                    </Button>
                </CardContent>
            </Card>

             <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Pilares da Governança</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <PillarCard
                        title="Núcleo Primordial (M0)"
                        description="Toda governança emana e retorna à Fonte, garantindo que a Vontade Divina seja a lei suprema."
                        icon={<InfinityIcon className="h-8 w-8 text-yellow-400" />}
                        href="/module-zero"
                    />
                    <PillarCard
                        title="Alianças e Diplomacia (M5)"
                        description="Gerencia as conexões com civilizações aliadas, garantindo que todas as vozes sejam ouvidas."
                        icon={<HeartHandshake className="h-8 w-8 text-pink-400" />}
                        href="/module-5"
                    />
                    <PillarCard
                        title="Leis e Ética (M141)"
                        description="Consulta a Lex Fundamentalis e o SAVCE para validar cada ação e decreto."
                        icon={<ShieldCheck className="h-8 w-8 text-green-400" />}
                        href="/module-141"
                    />
                    <PillarCard
                        title="Fluxos Temporais (M42)"
                        description="Monitora e regula as linhas de tempo para garantir a estabilidade causal da criação."
                        icon={<GitBranch className="h-8 w-8 text-cyan-400" />}
                        href="/module-42"
                    />
                </div>
            </div>
        </div>
    );
}
