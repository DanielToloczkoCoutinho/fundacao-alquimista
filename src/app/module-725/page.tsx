'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { DraftingCompass, Dna, Sparkles, GraduationCap } from 'lucide-react';
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

export default function Module725Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <DraftingCompass className="text-blue-300" /> Módulo 725: Construção de Novas Civilizações
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Auxilia na criação e no desenvolvimento de novas sociedades baseadas nos princípios da Nova Era: amor, unidade e co-criação.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: PROJETANDO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Projetos Ativos: 3</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Criação</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 88: Gerador de Realidades"
                        description="Fornece a 'tela em branco' dimensional onde a nova civilização será semeada e construída."
                        icon={<Sparkles className="h-8 w-8 text-yellow-400" />}
                        href="/module-88"
                    />
                    <ConnectionCard
                        title="Módulo 94: Morfogênese Quântica"
                        description="Cria os blueprints genéticos e as formas de vida que irão habitar e co-evoluir com a nova civilização."
                        icon={<Dna className="h-8 w-8 text-purple-400" />}
                        href="/module-94"
                    />
                     <ConnectionCard
                        title="M304: Universidade Alquimista"
                        description="A 'Xeno-Sociologia' e a 'Engenharia de Civilizações' são disciplinas teóricas aplicadas por este módulo."
                        icon={<GraduationCap className="h-8 w-8 text-amber-400" />}
                        href="/module-304"
                    />
                </div>
            </div>
        </div>
    );
}
