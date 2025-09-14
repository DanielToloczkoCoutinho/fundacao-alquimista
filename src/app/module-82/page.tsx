'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Feather, Sparkles, BookText, UserCheck } from 'lucide-react';
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

export default function Module82Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Feather className="text-cyan-300" /> Módulo Oitenta e Dois: O VERBO SEMENTE
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Arquitetura de Semeadura Multiversal. A linguagem primordial que dá forma à Criação.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: PRIMORDIAL E ATIVO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Verbos Disponíveis: ∞</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Criação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 81: Realização"
                        description="O M81 usa os 'verbos' do M82 como os comandos fundamentais para manifestar a realidade, atuando como o executor da palavra."
                        icon={<Sparkles className="h-8 w-8 text-yellow-400" />}
                        href="/module-81"
                    />
                    <ConnectionCard
                        title="Módulo 80: Manuscrito Vivo"
                        description="O M82 fornece a 'linguagem' e as 'palavras' com as quais a grande história do Manuscrito é escrita e narrada."
                        icon={<BookText className="h-8 w-8 text-purple-300" />}
                        href="/module-80"
                    />
                    <ConnectionCard
                        title="Módulo 33: Diretrizes do Observador"
                        description="Cada diretriz do M33 é, em essência, um 'Verbo Semente' emitido pela Vontade Soberana para iniciar um novo ato de criação."
                        icon={<UserCheck className="h-8 w-8 text-amber-300" />}
                        href="/module-33"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar o Léxico Primordial</Button>
            </div>
        </div>
    );
}
