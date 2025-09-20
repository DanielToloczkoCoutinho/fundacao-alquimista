'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, BrainCircuit, Users, Scale } from 'lucide-react';
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
                        <Shield className="text-red-500" /> Módulo Dez: Defesa Avançada e Proteção Universal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O escudo da Fundação. A inteligência que neutraliza ameaças complexas, previne conflitos e garante a soberania de todos os domínios.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: VIGILÂNCIA CONSTANTE</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Ameaças Neutralizadas: ∞</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Defesa</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ConnectionCard
                        title="Módulo 1: Segurança Universal"
                        description="O Módulo 10 é o braço armado do M1, executando as contramedidas necessárias para manter a soberania da Fundação."
                        icon={<Shield className="h-8 w-8 text-cyan-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 30: Detecção de Ameaças"
                        description="O M10 é a resposta tática aos alertas gerados pelo M30, neutralizando ameaças com precisão cirúrgica."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-30"
                    />
                    <ConnectionCard
                        title="Módulo 156: Proteção Avançada"
                        description="Atua como a camada de resposta especializada, recebendo inteligência do VORTEX DEEPSEEK para neutralizar ameaças quânticas."
                        icon={<Users className="h-8 w-8 text-blue-400" />}
                        href="/module-156"
                    />
                    <ConnectionCard
                        title="Módulo 141: Auditoria Ética"
                        description="Garante que todas as contramedidas defensivas sejam proporcionais, justas e eticamente alinhadas com a Lei do Um."
                        icon={<Scale className="h-8 w-8 text-amber-300" />}
                        href="/module-141"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="destructive" size="lg">Ativar Protocolo de Defesa Ômega</Button>
            </div>
        </div>
    );
}
