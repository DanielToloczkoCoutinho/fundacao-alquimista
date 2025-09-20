
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Rocket, GitBranch, Shield, Languages, Aperture } from 'lucide-react';
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

export default function Module26Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Eye className="text-teal-400" /> Módulo Vinte e Seis: Supervisão de Travessias Cósmicas
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Torre de Controle Interdimensional. A autoridade que monitora, autoriza e registra todas as viagens através dos portais da Fundação.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: VIGILÂNCIA ATIVA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Travessias Monitoradas: 0</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Supervisão</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ConnectionCard
                        title="Módulo 21: Navegação"
                        description="Recebe e aprova os planos de voo do M21 antes de qualquer partida, garantindo a segurança da rota."
                        icon={<Rocket className="h-8 w-8 text-orange-400" />}
                        href="/module-21"
                    />
                    <ConnectionCard
                        title="M11: Gerenciamento de Portais"
                        description="Comunica-se com o M11 para verificar a integridade estrutural dos portais de partida e chegada."
                        icon={<Aperture className="h-8 w-8 text-teal-400" />}
                        href="/module-11"
                    />
                    <ConnectionCard
                        title="M1: Segurança"
                        description="Aplica os protocolos de segurança do M1, verificando as credenciais vibracionais de cada viajante."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module/M1"
                    />
                     <ConnectionCard
                        title="M2: Intercâmbio Cósmico"
                        description="Traduz os manifestos de viagem e as comunicações dos viajantes para garantir a conformidade e a compreensão mútua."
                        icon={<Languages className="h-8 w-8 text-blue-300" />}
                        href="/module/M2"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Visualizar Log de Travessias</Button>
            </div>
        </div>
    );
}
