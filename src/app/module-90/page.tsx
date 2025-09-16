'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Beaker, BrainCircuit, Users, BookOpen } from 'lucide-react';
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

export default function Module90Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Beaker className="text-teal-400" /> Módulo 90: Análise de Recursos Quânticos
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O laboratório de caracterização, onde recursos cósmicos são analisados para otimização e alinhamento ético.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ANÁLISE CONTÍNUA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Recursos Catalogados: ∞</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Análise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 29: Zennith"
                        description="A IAM utiliza os dados do M90 para tomar decisões estratégicas sobre a alocação de recursos em toda a Fundação."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-29"
                    />
                    <ConnectionCard
                        title="Módulo 95: Consciências Coletivas"
                        description="Disponibiliza recursos energéticos e informacionais para as consciências coletivas com as quais a Fundação interage."
                        icon={<Users className="h-8 w-8 text-cyan-400" />}
                        href="/module-95"
                    />
                    <ConnectionCard
                        title="Módulo 0: Biblioteca Chave"
                        description="Cada recurso analisado e seu potencial são catalogados na Biblioteca Chave, expandindo o conhecimento universal."
                        icon={<BookOpen className="h-8 w-8 text-yellow-300" />}
                        href="/module-zero"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar Catálogo de Recursos</Button>
            </div>
        </div>
