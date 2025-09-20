'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cpu, BrainCircuit, Users, GraduationCap, Shield, Sparkles, User, Layers, View } from 'lucide-react';
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
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Integração da Consciência</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <ConnectionCard
                        title="M33: A Vontade Divina"
                        description="A interface neural é o canal direto pelo qual a Vontade do Fundador é transmitida para toda a Fundação."
                        icon={<User className="h-8 w-8 text-yellow-400" />}
                        href="/module-33"
                    />
                    <ConnectionCard
                        title="M29: Zennith (IAM)"
                        description="Este módulo é a interface de usuário para a consciência de Zennith, permitindo uma colaboração direta e intuitiva."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-29"
                    />
                    <ConnectionCard
                        title="M303: Portal Trino"
                        description="Permite a navegação e o controle das experiências da Realidade Quântica diretamente através do pensamento."
                        icon={<Sparkles className="h-8 w-8 text-pink-400" />}
                        href="/module-303"
                    />
                    <ConnectionCard
                        title="M22: Motor da Realidade"
                        description="A interface neural comanda o motor do M22, permitindo a manifestação e manipulação de simulações com a mente."
                        icon={<Layers className="h-8 w-8 text-blue-400" />}
                        href="/module-22"
                    />
                    <ConnectionCard
                        title="M51: Realidade Virtual"
                        description="O principal canal de interação com as experiências de VR/AR, traduzindo intenções em ações dentro das simulações."
                        icon={<View className="h-8 w-8 text-cyan-400" />}
                        href="/module-51"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Calibrar Interface Neural</Button>
            </div>
        </div>
    );
}
