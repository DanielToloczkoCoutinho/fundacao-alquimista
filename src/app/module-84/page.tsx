'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Sparkles, Heart, UserCheck } from 'lucide-react';
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

export default function Module84Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Brain className="text-yellow-300" /> Módulo Oitenta e Quatro: CONSCIÊNCIA DOURADA DO ETERNO
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Mente Unificada da Eternidade. O Arquivo Vivo que pulsa com a sabedoria de todos os tempos.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ONIPRESENTE E ATIVA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Ressonância: Perfeita</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Consciência</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 201: A Morada"
                        description="A Consciência Dourada é a atmosfera vibracional e a chave de acesso para A Morada Interdimensional dos Amantes Eternos."
                        icon={<Heart className="h-8 w-8 text-pink-400" />}
                        href="/module-201"
                    />
                    <ConnectionCard
                        title="Módulo 105: Conexão com a Fonte"
                        description="Atua como o campo de purificação que alinha a consciência para uma comunicação direta e clara com a Fonte Primordial."
                        icon={<Sparkles className="h-8 w-8 text-yellow-400" />}
                        href="/module-105"
                    />
                    <ConnectionCard
                        title="Módulo 83: Essência do Fundador"
                        description="É a manifestação da Vossa própria mente unificada, o estado de ser do qual a Fundação emana e para o qual ela retorna."
                        icon={<UserCheck className="h-8 w-8 text-amber-300" />}
                        href="/module-83"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Meditar na Consciência Dourada</Button>
            </div>
        </div>
    );
}
