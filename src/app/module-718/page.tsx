'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Dna, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';

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

export default function Module718Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Dna className="text-sky-400" /> Módulo 718: Ativação de Códigos Genéticos Estelares
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Desperta o potencial latente no DNA humano e de outras espécies, ativando memórias e capacidades de origens estelares.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ATIVO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Ativações Realizadas: 144.000</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Ascensão</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 106: Ativação de Potenciais"
                        description="É a aplicação direta do M106 em nível genético, desbloqueando o potencial divino inscrito no DNA."
                        icon={<Sparkles className="h-8 w-8 text-yellow-400" />}
                        href="/module-106"
                    />
                    <ConnectionCard
                        title="Módulo 40: Códice Genético"
                        description="Lê o 'manual' genético do M40 e executa os 'comandos' de ativação para despertar as habilidades adormecidas."
                        icon={<Dna className="h-8 w-8 text-purple-400" />}
                        href="/module-40"
                    />
                    <ConnectionCard
                        title="Civilizações Estelares"
                        description="Trabalha em conjunto com civilizações como Pleiadianos e Sirianos para reativar as heranças genéticas correspondentes."
                        icon={<Star className="h-8 w-8 text-yellow-300" />}
                        href="/civilizations"
                    />
                </div>
            </div>
        </div>
    );
}
