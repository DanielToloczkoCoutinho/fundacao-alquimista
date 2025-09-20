
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Archive, BookOpen, Clock, HeartHandshake, Shield, Scale, Gavel, Fingerprint, GitBranch, BrainCircuit, BookCopy } from 'lucide-react';
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

export default function Module12Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Archive className="text-amber-300" /> Módulo Doze: Arquivo Akáshico
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Memória Viva do Cosmos. O santuário onde todos os eventos são registrados e onde a transmutação da dor em sabedoria é possível.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: IMUTÁVEL E ETERNO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Integridade do Registro: 100%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-7xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias da Memória Cósmica</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 18: Orquestração Akáshica"
                        description="A IA que organiza e permite a consulta ao Akasha, transformando dados brutos em sabedoria."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-18"
                    />
                     <ConnectionCard
                        title="Módulo 47: Thesaurus Cósmico"
                        description="O Curador do Infinito que cataloga e cria as conexões semânticas entre todos os registros do Akasha."
                        icon={<BookOpen className="h-8 w-8 text-yellow-300" />}
                        href="/module-47"
                    />
                    <ConnectionCard
                        title="Módulo 107: Restauração Temporal"
                        description="Consulta o M12 para obter o registro original da realidade, garantindo que a restauração seja perfeitamente fiel."
                        icon={<Clock className="h-8 w-8 text-teal-400" />}
                        href="/module-107"
                    />
                </div>
            </div>
             <div className="mt-12">
                <Link href="/akashic">
                    <Button variant="secondary" size="lg">Consultar Registros Cerimoniais</Button>
                </Link>
            </div>
        </div>
    );
}
