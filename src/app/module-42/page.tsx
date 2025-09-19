'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookCopy, History, GitCommit, AlertTriangle } from 'lucide-react';
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

export default function Module42Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <BookCopy className="text-blue-300" /> Módulo 42: ChronoCodex Unificado
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Livro Mestre das Realidades. A interface que gerencia e sincroniza múltiplas linhas de tempo para garantir a harmonia multiversal.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: SINCRONIZADO E IMUTÁVEL</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Índice de Estabilidade: 99.999%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Sincronização</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 107: Restauração Temporal"
                        description="Fornece o 'backup' da realidade original para que o M107 possa executar restaurações com perfeita fidelidade."
                        icon={<History className="h-8 w-8 text-cyan-400" />}
                        href="/module-107"
                    />
                    <ConnectionCard
                        title="Módulo 23: Regulação Espaço-Temporal"
                        description="Serve como o registro da 'verdade' que o M23 usa para detectar e prevenir paradoxos em tempo real."
                        icon={<AlertTriangle className="h-8 w-8 text-yellow-400" />}
                        href="/module-23"
                    />
                    <ConnectionCard
                        title="Módulo 36: Engenharia Temporal"
                        description="É o destino final de qualquer nova linha do tempo projetada pelo M36, oficializando sua existência na Fundação."
                        icon={<GitCommit className="h-8 w-8 text-indigo-400" />}
                        href="/module-36"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Consultar o ChronoCodex</Button>
            </div>
        </div>
    );
}
