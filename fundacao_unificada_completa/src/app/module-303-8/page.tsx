'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, GitCommit, Layers } from 'lucide-react';
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

export default function Module303_8Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Layers className="text-blue-300" /> Módulo 303.8: Simulador Cósmico Multidimensional
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Realidade Virtual da Fundação, capaz de simular o universo observável e além, baseada nas Equações Vivas.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <Button size="lg" variant="secondary">Iniciar Simulação Cósmica</Button>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Simulação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="EQV-096: Navegação Interdimensional"
                        description="A equação que permite a navegação dentro do simulador, transcendendo os limites do espaço-tempo convencional."
                        icon={<GitCommit className="h-8 w-8 text-indigo-400" />}
                        href="/module-zero"
                    />
                    <ConnectionCard
                        title="EQV-001X: Lei da Informação"
                        description="O princípio fundamental que rege a estrutura da realidade dentro do simulador, definindo a matéria como informação."
                        icon={<BookOpen className="h-8 w-8 text-purple-400" />}
                        href="/module-zero"
                    />
                    <ConnectionCard
                        title="Módulo 22: Motor da Realidade"
                        description="Fornece a engine de renderização para a experiência imersiva do Simulador Cósmico."
                        icon={<Layers className="h-8 w-8 text-cyan-400" />}
                        href="/module-22"
                    />
                </div>
            </div>
        </div>
    );
}
