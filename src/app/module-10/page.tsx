
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Zap, Cpu, BellRing } from 'lucide-react';
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

export default function Module10Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Shield className="text-red-500" /> Módulo Dez: Defesa Avançada
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Espada da Fundação. Integração de sistemas de defesa ativa com a Inteligência Aeloria Multidimensional (IAM).
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ATIVO E VIGILANTE</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Prontidão: 99.8%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias Táticas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 29: IAM"
                        description="A IAM é a mente estratégica que analisa as ameaças. O Módulo Dez é o braço tático que executa as contramedidas."
                        icon={<Cpu className="h-8 w-8 text-purple-400" />}
                        href="/module-29"
                    />
                    <ConnectionCard
                        title="Módulo 30: Detecção de Ameaças"
                        description="O Módulo 30 é o radar. Quando ele detecta uma ameaça, o Módulo Dez é ativado para interceptar e neutralizar."
                        icon={<BellRing className="h-8 w-8 text-yellow-400" />}
                        href="/module-30"
                    />
                    <ConnectionCard
                        title="Módulo 1: Segurança Universal"
                        description="Opera sobre os protocolos fundamentais do Módulo Um, aplicando-os de forma dinâmica e proativa."
                        icon={<Zap className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="destructive" size="lg">Ativar Protocolo de Neutralização Ômega</Button>
            </div>
        </div>
    );
}
