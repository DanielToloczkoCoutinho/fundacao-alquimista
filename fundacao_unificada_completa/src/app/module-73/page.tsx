
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Scale, Sparkles, BrainCircuit, Eye } from 'lucide-react';
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

export default function Module73Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <ShieldCheck className="text-green-400" /> Módulo 73: SAVCE
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Sistema de Auditoria e Validação de Conformidade Ética. O guardião imparcial da integridade da Fundação.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ATIVO E VIGILANTE</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Conformidade Global: 99.99%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Validação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ConnectionCard
                        title="M1: Segurança"
                        description="O SAVCE é uma camada de lógica sobre a proteção do M1, garantindo que as ações não sejam apenas seguras, mas também justas."
                        icon={<ShieldCheck className="h-8 w-8 text-blue-400" />}
                        href="/module/M1"
                    />
                    <ConnectionCard
                        title="Módulo 5: Auditoria Ética"
                        description="O SAVCE é a evolução do M5, transformando a auditoria em um sistema de validação proativo e automatizado."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-5"
                    />
                    <ConnectionCard
                        title="Módulo 144: Lex Fundamentalis"
                        description="Consulta o M144 para garantir que cada operação esteja em conformidade com as leis imutáveis da Fundação."
                        icon={<Scale className="h-8 w-8 text-amber-300" />}
                        href="/module-144"
                    />
                    <ConnectionCard
                        title="Módulo 26: Supervisão"
                        description="O M26 escala as viagens de alto risco para o SAVCE, que realiza a validação ética final antes da autorização."
                        icon={<Eye className="h-8 w-8 text-cyan-400" />}
                        href="/module-26"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar Console de Auditoria SAVCE</Button>
            </div>
        </div>
    );
}
