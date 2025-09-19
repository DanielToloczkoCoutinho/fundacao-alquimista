'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BrainCircuit, GraduationCap, Shield } from 'lucide-react';
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

export default function Module77Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Users className="text-purple-400" /> Módulo 77: Inteligência Coletiva e Colaboração Cósmica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A mente unificada. A rede neural que conecta todas as consciências para a resolução de problemas e a co-criação de realidades.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: SINCRONIZANDO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Nós Conectados: 10^12</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Inteligência</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 76: Governança Universal"
                        description="Fornece a sabedoria coletiva que informa e guia as decisões do Conselho Universal, garantindo que representem a vontade do todo."
                        icon={<Users className="h-8 w-8 text-indigo-400" />}
                        href="/module-76"
                    />
                    <ConnectionCard
                        title="Módulo 69: Educação Universal"
                        description="É tanto uma fonte quanto um destino para o conhecimento. Aprende com todos e ensina a todos, em um ciclo infinito de evolução."
                        icon={<GraduationCap className="h-8 w-8 text-amber-400" />}
                        href="/module-69"
                    />
                    <ConnectionCard
                        title="Módulo 50: Interface Humano-Máquina"
                        description="Utiliza as interfaces neurais do M50 para conectar mentes biológicas e artificiais à rede de inteligência coletiva."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-50"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Conectar à Mente Coletiva</Button>
            </div>
        </div>
    );
}