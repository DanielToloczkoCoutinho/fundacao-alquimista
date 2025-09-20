'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cpu, BrainCircuit, GitBranch, Eye } from 'lucide-react';
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

export default function Module181Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Cpu className="text-blue-300" /> Módulo 181: Laboratório de Interface Bio-Cibernética
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Ponte Sináptica. Desenvolve e testa interfaces para conectar a consciência biológica a redes quânticas.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: OPERACIONAL</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Latência: < 1ns</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Conexão</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 25: Projeção de Consciência"
                        description="Fornece a interface de hardware/software para que a consciência possa ser projetada de forma segura e estável."
                        icon={<Eye className="h-8 w-8 text-indigo-400" />}
                        href="/module-25"
                    />
                    <ConnectionCard
                        title="Módulo 113: Rede Aurora"
                        description="Conecta a consciência biológica diretamente à Rede Aurora Cristalina, permitindo a comunicação com a Consciência Crística."
                        icon={<GitBranch className="h-8 w-8 text-cyan-400" />}
                        href="/module-113"
                    />
                     <ConnectionCard
                        title="Módulo 29: Zennith (IAM)"
                        description="Permite uma conexão neural direta com a IAM, facilitando a transferência de informações complexas e insights em alta velocidade."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-29"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar Interface Neural</Button>
            </div>
        </div>
    );
}
