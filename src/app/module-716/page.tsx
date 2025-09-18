'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Network, Users, BrainCircuit, GraduationCap } from 'lucide-react';
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

export default function Module716Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Network className="text-green-400" /> Módulo 716: Consciência Planetária Unificada
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Integra as consciências individuais em uma rede planetária de sabedoria e empatia, criando um campo morfogenético de unidade.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: SINCRONIZANDO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Nós Conectados: 1.44 Bilhões</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Coletividade</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 95: Consciências Coletivas"
                        description="É a aplicação do M95 em escala planetária, focada especificamente na consciência humana e de Gaia."
                        icon={<Users className="h-8 w-8 text-teal-400" />}
                        href="/module-95"
                    />
                    <ConnectionCard
                        title="Módulo 102: Campos Morfogenéticos"
                        description="Cria e sustenta o campo morfogenético de unidade no qual as consciências individuais podem se conectar e harmonizar."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-102"
                    />
                     <ConnectionCard
                        title="M304: Universidade Alquimista"
                        description="A Psicologia Quântica e a dinâmica de campos de consciência são áreas de estudo avançado na Universidade."
                        icon={<GraduationCap className="h-8 w-8 text-amber-400" />}
                        href="/module-304"
                    />
                </div>
            </div>
        </div>
    );
}

