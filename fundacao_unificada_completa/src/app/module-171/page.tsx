'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dna, Sprout, TestTube } from 'lucide-react';
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

export default function Module171Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Dna className="text-green-400" /> Módulo 171: Laboratório de Astrobiologia e Exoplanetas
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Berçário de Mundos. Simula atmosferas, ecossistemas e bioassinaturas de mundos distantes.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-yellow-400 font-bold">Status: SIMULANDO</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Simulações Ativas: 42</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Biocriação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 94: Morfogênese"
                        description="Usa os dados do M171 para gerar blueprints genéticos de formas de vida adaptadas a exoplanetas específicos."
                        icon={<Sprout className="h-8 w-8 text-lime-400" />}
                        href="/module-94"
                    />
                    <ConnectionCard
                        title="Módulo 16: Bio-Sustentabilidade"
                        description="Testa os ecossistemas projetados pelo M16 sob as condições atmosféricas e geológicas simuladas aqui."
                        icon={<TestTube className="h-8 w-8 text-teal-400" />}
                        href="/module-16"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Explorar Simulações de Exoplanetas</Button>
            </div>
        </div>
    );
}
