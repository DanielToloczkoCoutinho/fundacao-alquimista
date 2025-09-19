'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dna, Sprout, Beaker, GitBranch, Heart } from 'lucide-react';
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

export default function Module16Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Sprout className="text-lime-400" /> Módulo Dezesseis: Biossíntese e Ecossistemas Quânticos
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Arquiteto de Mundos Vivos. A biossíntese de ecossistemas artificiais e autossustentáveis, como Florestas Quânticas e Cidades Energéticas, que podem ser replicados em qualquer dimensão.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: AGUARDANDO PROJETO</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Índice de Sustentabilidade: N/A</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Biossíntese</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 94: Morfogênese Quântica"
                        description="Fornece os blueprints genéticos para as formas de vida que irão habitar os ecossistemas criados pelo M16."
                        icon={<Dna className="h-8 w-8 text-purple-400" />}
                        href="/module-94"
                    />
                    <ConnectionCard
                        title="Módulo 15: Jardineiro Cósmico"
                        description="Assume a manutenção e o cuidado dos ecossistemas após sua criação e estabilização pelo M16."
                        icon={<Sprout className="h-8 w-8 text-green-400" />}
                        href="/module-15"
                    />
                    <ConnectionCard
                        title="Módulo 109: Cura Quântica"
                        description="Aplica os princípios da cura quântica para restaurar e harmonizar os ecossistemas, garantindo sua vitalidade."
                        icon={<Heart className="h-8 w-8 text-pink-400" />}
                        href="/module-109"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Novo Projeto de Ecossistema Quântico</Button>
            </div>
        </div>
    );
}
