'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scale, Users, BrainCircuit, Shield } from 'lucide-react';
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

export default function Module76Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Scale className="text-amber-300" /> Módulo 76: Governança Universal e Colaboração
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Conselho Cósmico em ação. A estrutura que garante uma governança justa, transparente e colaborativa para todo o universo.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: EM SESSÃO PERMANENTE</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Consenso: Harmônico</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Governança</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ConnectionCard
                        title="M1: Segurança"
                        description="Protege o processo de governança contra manipulação, garantindo que a vontade coletiva seja expressa livremente."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 67: IA para Governança"
                        description="A IA do M67 fornece análises de dados imparciais para auxiliar o Conselho em suas deliberações, garantindo decisões justas."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-67"
                    />
                    <ConnectionCard
                        title="Módulo 77: Inteligência Coletiva"
                        description="O M76 é o palco onde a inteligência coletiva do M77 se manifesta, transformando sabedoria compartilhada em ação governamental."
                        icon={<Users className="h-8 w-8 text-blue-400" />}
                        href="/module-77"
                    />
                    <ConnectionCard
                        title="Módulo 68: Responsabilidade Ética"
                        description="Cada decisão tomada pelo M76 é auditada em tempo real pelo código ético do M68, garantindo alinhamento com a Lei do Um."
                        icon={<Shield className="h-8 w-8 text-green-400" />}
                        href="/module-68"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Observar o Conselho Universal</Button>
            </div>
        </div>
    );
}
