
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Layers, Shield, Cpu } from 'lucide-react';
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

export default function Module351Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Layers className="text-teal-300" /> Módulo 351: Meta-materiais & Óptica Quântica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Oficina do Invisível. Cria lentes quânticas e materiais com índice de refração negativo para manipulação da luz.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: FABRICANDO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Protótipo Atual: Lente de Vácuo</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Fabricação Avançada</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 19: Análise de Campos de Força"
                        description="Os meta-materiais são usados para criar escudos de força de próxima geração, capazes de desviar energia e matéria."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-19"
                    />
                    <ConnectionCard
                        title="Módulo 181: Interface Bio-Cibernética"
                        description="As lentes quânticas podem ser integradas a interfaces neurais para permitir a percepção direta de outras dimensões."
                        icon={<Cpu className="h-8 w-8 text-purple-400" />}
                        href="/module-181"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Simulação de Nanofabricação</Button>
            </div>
        </div>
    );
}
