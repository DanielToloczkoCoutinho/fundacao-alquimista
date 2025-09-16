'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { TestTube, Dna, BrainCircuit, GraduationCap } from 'lucide-react';
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

export default function Module711Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <TestTube className="text-green-400" /> Módulo 711: Rejuvenescimento Celular Quântico
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Reverte o envelhecimento e promove a regeneração celular através da reprogramação do relógio quântico biológico.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: PROTOCOLO ATIVO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Eficiência de Reversão: 99.1%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Regeneração</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 94: Morfogênese Quântica"
                        description="Utiliza os blueprints do M94 para restaurar o padrão genético original e perfeito durante o rejuvenescimento."
                        icon={<Dna className="h-8 w-8 text-purple-400" />}
                        href="/module-94"
                    />
                    <ConnectionCard
                        title="Módulo 710: Biofeedback Quântico"
                        description="Monitora a resposta celular em tempo real, permitindo ajustes precisos no processo de rejuvenescimento."
                        icon={<BrainCircuit className="h-8 w-8 text-pink-400" />}
                        href="/module-710"
                    />
                     <ConnectionCard
                        title="M304: Universidade Alquimista"
                        description="O rejuvenescimento celular é um dos campos de pesquisa mais avançados, unindo biologia quântica e ética."
                        icon={<GraduationCap className="h-8 w-8 text-amber-400" />}
                        href="/module-304"
                    />
                </div>
            </div>
        </div>
    );
}
