
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sun, Shield, Sprout, Flower } from 'lucide-react';
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

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Sustentabilidade</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 8: Proteção Planetária"
                        description="O Módulo 8 fornece o escudo que protege os biomas que o M15 cultiva, defendendo-os de ameaças cósmicas."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-8"
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
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar Painel de Controle Geofísico</Button>
            </div>
        </div>
    );
}
