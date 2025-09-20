'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket, Map, GitBranch, Eye, Languages, Aperture, Shield } from 'lucide-react';
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

export default function Module21Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Rocket className="text-orange-400" /> Módulo Vinte e Um: Navegação Interdimensional
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Piloto Cósmico. Planeja e executa viagens seguras através de múltiplas dimensões e realidades.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: OCIOSO</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Trajetórias Calculadas: 0</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Navegação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <ConnectionCard
                        title="M1: Segurança"
                        description="Cada viagem é protegida por escudos do M1, garantindo a segurança do viajante e a integridade do destino."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="M11: Gerenciamento de Portais"
                        description="Utiliza os portais criados pelo M11 como pontos de partida e chegada para as viagens interdimensionais."
                        icon={<Aperture className="h-8 w-8 text-teal-400" />}
                        href="/module-11"
                    />
                    <ConnectionCard
                        title="M26: Supervisão"
                        description="Envia os planos de voo para o M26, que autoriza e monitora a segurança e a ética de cada travessia."
                        icon={<Eye className="h-8 w-8 text-cyan-400" />}
                        href="/module-26"
                    />
                    <ConnectionCard
                        title="M104: Engenharia"
                        description="Consulta os mapas e atalhos dimensionais projetados pelo M104 para calcular as rotas mais eficientes."
                        icon={<Map className="h-8 w-8 text-green-400" />}
                        href="/module-104"
                    />
                     <ConnectionCard
                        title="M2: Intercâmbio Cósmico"
                        description="Interpreta mapas estelares e coordenadas de outras realidades, traduzindo-as para que o motor de navegação possa traçar a rota."
                        icon={<Languages className="h-8 w-8 text-blue-300" />}
                        href="/module/M2"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Calcular Nova Rota Cósmica</Button>
            </div>
        </div>
    );
}
