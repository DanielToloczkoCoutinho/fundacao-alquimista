
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wheat, Dna, Leaf, Users, Shield, Globe } from 'lucide-react';
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

export default function Module54Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Wheat className="text-yellow-400" /> Módulo 54: Agricultura e Produção de Alimentos Interdimensionais
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O provedor da abundância, garantindo segurança alimentar e nutrição para todas as civilizações do cosmos.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: PRODUÇÃO PLENA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Segurança Alimentar Universal: 100%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Abundância</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <ConnectionCard
                        title="M1: Segurança"
                        description="Protege os bancos genéticos e as colheitas contra contaminação ou sabotagem, garantindo a pureza dos alimentos."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module/M1"
                    />
                    <ConnectionCard
                        title="Módulo 94: Morfogênese Quântica"
                        description="Cria os blueprints genéticos para culturas adaptáveis a qualquer ambiente, desde desertos marcianos a atmosferas gasosas."
                        icon={<Dna className="h-8 w-8 text-purple-400" />}
                        href="/module-94"
                    />
                    <ConnectionCard
                        title="Módulo 53: Gestão de Ecossistemas"
                        description="Garante que a agricultura interdimensional seja sempre regenerativa, enriquecendo o solo e a biodiversidade local."
                        icon={<Globe className="h-8 w-8 text-green-400" />}
                        href="/module-53"
                    />
                    <ConnectionCard
                        title="Módulo 13: Renda Universal"
                        description="A abundância gerada aqui é um dos pilares da renda universal, garantindo que nenhum ser passe por escassez."
                        icon={<Users className="h-8 w-8 text-blue-400" />}
                        href="/module-13"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Consultar o Códice Alimentar</Button>
            </div>
        </div>
    );
}
