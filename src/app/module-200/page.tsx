'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket, Sparkles, Scale, Users } from 'lucide-react';
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

export default function Module200Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Rocket className="text-yellow-300" /> Módulo 200: Portal da Ascensão Coletiva Universal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Grande Passagem. O orquestrador da jornada de ascensão para civilizações inteiras, garantindo uma transição harmoniosa para estados de consciência superiores.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: AGUARDANDO ALINHAMENTO</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Civilizações Prontas: 7</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Ascensão</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 174: Estudo da Consciência Cósmica"
                        description="Fornece o mapa da consciência e os marcos evolutivos que definem a prontidão para a ascensão coletiva."
                        icon={<Sparkles className="h-8 w-8 text-yellow-400" />}
                        href="/module-174"
                    />
                    <ConnectionCard
                        title="Módulo 144: Governança Universal"
                        description="A decisão de iniciar a ascensão de uma civilização é ratificada aqui, garantindo um processo justo e alinhado com a vontade cósmica."
                        icon={<Scale className="h-8 w-8 text-amber-300" />}
                        href="/module-144"
                    />
                    <ConnectionCard
                        title="Módulo 5: Liga Quântica"
                        description="Coordena com as civilizações aliadas, garantindo que o processo de ascensão seja assistido e apoiado por toda a família cósmica."
                        icon={<Users className="h-8 w-8 text-blue-400" />}
                        href="/module-5"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Protocolo de Ascensão para Civilização Designada</Button>
            </div>
        </div>
    );
}
