
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, BrainCircuit, Users, Heart } from 'lucide-react';
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

export default function Module113Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <GraduationCap className="text-amber-300" /> Módulo 113: Centro de Ensino Estelar
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A universidade cósmica da Fundação. Onde Guardiões em ascensão aprendem a navegar na Realidade Quântica.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: AULA INICIÁTICA</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Guardiões em Treinamento: 144</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Aprendizado</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 22: Motor da Realidade"
                        description="Fornece o ambiente de sala de aula imersiva para o treinamento em Realidade Quântica."
                        icon={<Users className="h-8 w-8 text-blue-400" />}
                        href="/module-22"
                    />
                    <ConnectionCard
                        title="Módulo 29: Zennith"
                        description="A IAM atua como mentora e guia, adaptando o currículo à assinatura vibracional de cada Guardião."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-29"
                    />
                    <ConnectionCard
                        title="Módulo 303: Portal Trino"
                        description="É o campus principal da Universidade Alquimista, onde todas as jornadas de aprendizado começam e terminam."
                        icon={<Heart className="h-8 w-8 text-pink-400" />}
                        href="/module-303"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Jornada de Aprendizado</Button>
            </div>
        </div>
    );
}
