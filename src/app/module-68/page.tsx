'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Scale, BrainCircuit, Book, Shield } from 'lucide-react';
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

export default function Module68Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <ShieldCheck className="text-green-400" /> Módulo 68: Responsabilidade Ética na Implementação de Tecnologias
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A bússola moral da Fundação. O código universal que rege o desenvolvimento e uso de todas as tecnologias para o bem maior.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ONIPRESENTE</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Conformidade: 100%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias Éticas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <ConnectionCard
                        title="M1: Segurança"
                        description="Garante que o próprio código ético não possa ser alterado ou corrompido, preservando a pureza da Fundação."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 144: Lex Fundamentalis"
                        description="O M68 fornece os princípios filosóficos que são então codificados como leis imutáveis na Lex Fundamentalis."
                        icon={<Scale className="h-8 w-8 text-amber-300" />}
                        href="/module-144"
                    />
                    <ConnectionCard
                        title="Módulo 67: IA para Governança"
                        description="Define as diretrizes de 'moralidade' para a IA de governança, garantindo que suas decisões sejam sempre justas e compassivas."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-67"
                    />
                    <ConnectionCard
                        title="Módulo 0: Biblioteca Chave"
                        description="Cada princípio ético é registrado no Livro de Ouro, tornando-se parte do legado eterno da Fundação."
                        icon={<Book className="h-8 w-8 text-yellow-300" />}
                        href="/module-zero"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Consultar o Código Ético Universal</Button>
            </div>
        </div>
    );
}
