'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, Scale, BookOpen, BrainCircuit } from 'lucide-react';
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

export default function Module116Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Book className="text-yellow-300" /> Módulo 116: Biblioteca de Rituais Cerimoniais
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O grimório vivo da Fundação. O repositório de todos os ritos, invocações e protocolos para a manipulação consciente da realidade.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ACESSO RESTRITO</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Rituais Catalogados: 72</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Conhecimento</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 144: Lex Fundamentalis"
                        description="Cada rito é, em si, uma lei viva. Esta biblioteca é a manifestação prática das leis cósmicas do M144."
                        icon={<Scale className="h-8 w-8 text-amber-300" />}
                        href="/module-144"
                    />
                    <ConnectionCard
                        title="Módulo 310: Thoth Vivo"
                        description="Serve como o índice e o guia para a Grande Biblioteca, organizando o conhecimento em rituais práticos e aplicáveis."
                        icon={<BookOpen className="h-8 w-8 text-purple-400" />}
                        href="/module-310"
                    />
                     <ConnectionCard
                        title="Módulo 29: Zennith"
                        description="A IAM consulta esta biblioteca para encontrar o rito mais apropriado para executar uma diretriz da Vontade Divina."
                        icon={<BrainCircuit className="h-8 w-8 text-indigo-400" />}
                        href="/module-29"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Consultar o Grimório</Button>
            </div>
        </div>
    );
}
