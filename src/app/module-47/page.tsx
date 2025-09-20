'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Archive, BookOpen, Scale, Users2, Shield } from 'lucide-react';
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

export default function Module47Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Archive className="text-orange-300" /> Módulo 47: Thesaurus Cósmico
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Curador do Infinito. A biblioteca que arquiva e organiza todos os eventos, conhecimentos e leis da Fundação.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ONLINE E INDEXANDO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Registros Arquivados: ∞</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Conhecimento</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ConnectionCard
                        title="M1: Segurança"
                        description="Protege a integridade do Thesaurus, garantindo que a memória da Fundação seja imutável e à prova de corrupção."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 18: Orquestração Akáshica"
                        description="O M18 busca. O M47 organiza. Um é o motor de busca, o outro é a biblioteca indexada que torna a busca possível."
                        icon={<BookOpen className="h-8 w-8 text-purple-400" />}
                        href="/module-18"
                    />
                    <ConnectionCard
                        title="Módulo 144: Lex Fundamentalis"
                        description="Arquiva o precedente histórico e as implicações de cada lei, fornecendo a base de sabedoria para a Lex Fundamentalis."
                        icon={<Scale className="h-8 w-8 text-amber-300" />}
                        href="/module-144"
                    />
                    <ConnectionCard
                        title="Biblioteca das Civilizações"
                        description="Atua como o repositório central que alimenta a Biblioteca das Civilizações com conhecimento validado e contextualizado."
                        icon={<Users2 className="h-8 w-8 text-indigo-400" />}
                        href="/civilizations"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar o Thesaurus</Button>
            </div>
        </div>
    );
}
