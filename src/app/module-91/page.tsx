'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GitCommit, Layers, AlertTriangle, Cpu } from 'lucide-react';
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

export default function Module91Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <GitCommit className="text-indigo-400" /> Módulo 91: Sustentabilidade Universal e Integridade Ecológica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O guardião dos ecossistemas cósmicos, garantindo a preservação, regeneração e equilíbrio de todos os mundos.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: PRESERVAÇÃO ATIVA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Equilíbrio Ecológico: 99.8%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Sustentabilidade</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 70: Sustentabilidade Interdimensional"
                        description="Implementa os princípios de sustentabilidade do M70, aplicando-os em todos os ecossistemas monitorados pela Fundação."
                        icon={<Layers className="h-8 w-8 text-cyan-400" />}
                        href="/module-70"
                    />
                    <ConnectionCard
                        title="Módulo 60: Resposta a Desastres"
                        description="Fornece as ferramentas de regeneração para o M60, permitindo a cura rápida de ecossistemas após eventos catastróficos."
                        icon={<AlertTriangle className="h-8 w-8 text-red-500" />}
                        href="/module-60"
                    />
                    <ConnectionCard
                        title="Módulo 67: IA para Governança"
                        description="A IA utiliza os dados do M91 para tomar decisões que promovam a saúde e a resiliência dos ecossistemas universais."
                        icon={<Cpu className="h-8 w-8 text-purple-400" />}
                        href="/module-67"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Relatório de Saúde Ecológica Universal</Button