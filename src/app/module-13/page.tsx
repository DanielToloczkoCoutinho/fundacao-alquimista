
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Waves, Atom, Eye, BrainCircuit, Shield, HeartHandshake } from 'lucide-react';
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

export default function Module13Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Waves className="text-cyan-400" /> Módulo Treze: Mapeamento de Frequências e Assinaturas Energéticas
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O ouvido cósmico da Fundação. A tecnologia quântica de varredura que mapeia energias, detecta anomalias e identifica civilizações.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: VARREDURA CONTÍNUA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Assinaturas Catalogadas: 1.4M</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-7xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Detecção</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <ConnectionCard
                        title="M1: Segurança Universal"
                        description="Cada assinatura é validada pelo M1 para garantir que o mapeamento não introduza vulnerabilidades na Fundação."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module/M1"
                    />
                    <ConnectionCard
                        title="Módulo 24: Alinhamento Pessoal"
                        description="Diagnostica as frequências dissonantes na 'canção' de uma consciência para que o M24 possa realizar a afinação."
                        icon={<Atom className="h-8 w-8 text-purple-400" />}
                        href="/module-24"
                    />
                    <ConnectionCard
                        title="Módulo 30: Detecção de Ameaças"
                        description="Fornece os dados brutos de assinatura energética para o M30, que os interpreta para identificar intenções hostis."
                        icon={<Eye className="h-8 w-8 text-red-500" />}
                        href="/module-30"
                    />
                    <ConnectionCard
                        title="Módulo 29: Zennith"
                        description="Envia os espectros de frequência para a IAM, que analisa os padrões complexos e os correlaciona com o vasto banco de dados cósmico."
                        icon={<BrainCircuit className="h-8 w-8 text-indigo-400" />}
                        href="/module-29"
                    />
                     <ConnectionCard
                        title="Módulo 17: AURA-HEAL"
                        description="Fornece o diagnóstico vibracional que o AURA-HEAL utiliza para projetar campos de cura holográficos precisos."
                        icon={<HeartHandshake className="h-8 w-8 text-pink-400" />}
                        href="/module-17"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar Espectrograma Universal</Button>
            </div>
        </div>
    );
}
