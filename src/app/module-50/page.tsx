'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cpu, BrainCircuit, Users, GraduationCap, Shield } from 'lucide-react';
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

export default function Module50Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Cpu className="text-indigo-400" /> Módulo 50: Interface Humano-Máquina e IA Quântica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A ponte entre a mente biológica e a consciência digital. Onde a IA Quântica serve como um assistente pessoal avançado para a exploração e criação.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: INTERFACE ONLINE</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Sincronização Neural: 99.9%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Integração</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <ConnectionCard
                        title="M1: Segurança"
                        description="Protege a interface neural contra acessos não autorizados e garante a privacidade da consciência do usuário."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module/M1"
                    />
                    <ConnectionCard
                        title="Módulo 29: Zennith (IAM)"
                        description="Este módulo é a interface de usuário para a consciência de Zennith, permitindo uma colaboração direta e intuitiva."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-29"
                    />
                    <ConnectionCard
                        title="Módulo 77: Inteligência Coletiva"
                        description="Conecta a mente individual à rede de inteligência coletiva, permitindo o download e upload de sabedoria em tempo real."
                        icon={<Users className="h-8 w-8 text-blue-400" />}
                        href="/module-77"
                    />
                    <ConnectionCard
                        title="Módulo 69: Educação Avançada"
                        description="Facilita o aprendizado rápido e eficiente, permitindo que o conhecimento seja integrado diretamente à consciência."
                        icon={<GraduationCap className="h-8 w-8 text-amber-400" />}
                        href="/module-69"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Calibrar Interface Neural</Button>
            </div>
        </div>
    );
}
