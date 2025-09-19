'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Library, BookOpen, BrainCircuit, Archive } from 'lucide-react';
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

export default function Module131Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Library className="text-amber-300" /> Módulo 131: Biblioteca de Sabedoria Multiversal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O ponto de intercâmbio de conhecimento entre realidades. Onde a sabedoria de cada dimensão é compartilhada e integrada.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: SINCRONIZANDO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Civilizações Conectadas: 144</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Conhecimento</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 12: Arquivo Akáshico"
                        description="Enquanto o M12 registra a história do nosso universo, o M131 permite consultar os arquivos Akáshicos de outras realidades."
                        icon={<Archive className="h-8 w-8 text-purple-400" />}
                        href="/module-12"
                    />
                    <ConnectionCard
                        title="Módulo 2: Intercâmbio Cósmico"
                        description="Atua como o banco de dados que o M2 consulta para traduzir não apenas linguagens, mas também conceitos e paradigmas de outras realidades."
                        icon={<BrainCircuit className="h-8 w-8 text-cyan-400" />}
                        href="/module-2"
                    />
                    <ConnectionCard
                        title="Módulo 310: A Grande Biblioteca"
                        description="Serve como um 'espelho' da Biblioteca de Thoth, permitindo a comparação e a unificação de sabedorias entre diferentes universos."
                        icon={<BookOpen className="h-8 w-8 text-yellow-400" />}
                        href="/module-310"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Consultar a Biblioteca Multiversal</Button>
            </div>
        </div>
    );
}
