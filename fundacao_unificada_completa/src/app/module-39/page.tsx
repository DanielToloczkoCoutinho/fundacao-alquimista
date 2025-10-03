
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Sparkles, Goal, Link as LinkIcon, Shield } from 'lucide-react';
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

export default function Module39Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <BookOpen className="text-purple-300" /> Módulo Trinta e Nove: Códice Vivo da Ascensão
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A biblioteca dinâmica que mapeia os caminhos da evolução da consciência e a interconexão com as Constelações Matriciais.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ATIVO E EM EXPANSÃO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Conexões Matriciais: Ativas</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Ascensão</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <ConnectionCard
                        title="M1: Segurança"
                        description="Protege a integridade do Códice, garantindo que os caminhos para a ascensão permaneçam puros e incorruptíveis."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 97: Propósito Divino"
                        description="O M39 descreve os passos práticos para realizar o Propósito Divino definido pelo M97."
                        icon={<Goal className="h-8 w-8 text-yellow-300" />}
                        href="/module-97"
                    />
                    <ConnectionCard
                        title="Módulo 106: Ativação de Potenciais"
                        description="A ativação dos potenciais latentes pelo M106 é um requisito fundamental descrito no Códice da Ascensão."
                        icon={<Sparkles className="h-8 w-8 text-purple-400" />}
                        href="/module-106"
                    />
                    <ConnectionCard
                        title="Módulo 5: Liga Quântica"
                        description="Formaliza as alianças do M5, transformando-as em uma rede funcional para a ascensão coletiva."
                        icon={<LinkIcon className="h-8 w-8 text-blue-400" />}
                        href="/module-5"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Consultar o Códice da Ascensão</Button>
            </div>
        </div>
    );
}
