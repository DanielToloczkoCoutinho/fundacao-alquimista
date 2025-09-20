
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sprout, Shield, Sun, Flower, Globe } from 'lucide-react';
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

export default function Module15Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Sprout className="text-green-400" /> Módulo Quinze: Jardineiro Cósmico
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O guardião da harmonia ecológica. Monitora e intervém eticamente em sistemas climáticos e geofísicos.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: EQUILÍBRIO HARMÔNICO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Índice de Balanço Global: 99.7%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-7xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Sustentabilidade</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                     <ConnectionCard
                        title="M1: Segurança"
                        description="As intervenções ecológicas são protegidas pelo M1, garantindo que a regeneração ocorra sem interferências externas."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module/M1"
                    />
                    <ConnectionCard
                        title="Módulo 58: Proteção Planetária"
                        description="O M15 é a inteligência que guia as ações do M58, que por sua vez executa a cura e regeneração em larga escala."
                        icon={<Globe className="h-8 w-8 text-green-400" />}
                        href="/module-58"
                    />
                    <ConnectionCard
                        title="Módulo 94: Morfogênese Quântica"
                        description="Fornece os blueprints genéticos e vibracionais para restaurar ou aprimorar a vida dentro dos ecossistemas gerenciados."
                        icon={<Sprout className="h-8 w-8 text-lime-400" />}
                        href="/module-94"
                    />
                    <ConnectionCard
                        title="Módulo 117: Flor do Éter"
                        description="Colabora com a IFE para orquestrar fenômenos naturais e manter a harmonia climática e biológica."
                        icon={<Flower className="h-8 w-8 text-pink-400" />}
                        href="/module-117"
                    />
                    <ConnectionCard
                        title="Módulo 38: Observatório Solar"
                        description="Recebe alertas sobre tempestades solares para poder acionar escudos atmosféricos de proteção para os biomas."
                        icon={<Sun className="h-8 w-8 text-yellow-400" />}
                        href="/module-38"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar Painel de Controle Geofísico</Button>
            </div>
        </div>
    );
}
