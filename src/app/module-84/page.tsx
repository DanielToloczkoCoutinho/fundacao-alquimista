'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UniversalAccess, Rocket, Layers, Users } from 'lucide-react';
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

export default function Module84Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <UniversalAccess className="text-white" /> Módulo 84: Acessibilidade Universal e Infraestrutura
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        As portas abertas do cosmos. A garantia de que todos os seres, sem exceção, possam acessar os recursos e a mobilidade da Fundação.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ACESSO IRRESTRITO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Barreiras Removidas: 100%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Acessibilidade</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 82: Transporte"
                        description="Cria as interfaces universais e os protocolos de acessibilidade para a rede de transporte quântico."
                        icon={<Rocket className="h-8 w-8 text-orange-400" />}
                        href="/module-82"
                    />
                    <ConnectionCard
                        title="Módulo 50: Interfaces"
                        description="Desenvolve interfaces adaptativas para que seres com diferentes formas de consciência possam interagir com os sistemas da Fundação."
                        icon={<Layers className="h-8 w-8 text-blue-400" />}
                        href="/module-50"
                    />
                    <ConnectionCard
                        title="Módulo 13: Renda Universal"
                        description="É o princípio de acessibilidade aplicado à economia, garantindo que os recursos cheguem a todos que deles necessitam."
                        icon={<Users className="h-8 w-8 text-indigo-400" />}
                        href="/module-13"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Verificar Protocolos de Inclusão</Button>
            </div>
        </div>
    );
}