'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { View, GitCommit, Layers, Eye, Shield } from 'lucide-react';
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

export default function Module51Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <View className="text-cyan-400" /> Módulo 51: Realidade Virtual e Aumentada
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Laboratório de Simulação Imersiva. Onde os dados da exploração cósmica são transformados em experiências virtuais para treinamento e análise.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: RENDERIZANDO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Fidelidade: 99.9%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Imersão</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <ConnectionCard
                        title="M1: Segurança"
                        description="Cria um 'firewall' psíquico ao redor da simulação, protegendo a mente do usuário de influências externas."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module/M1"
                    />
                    <ConnectionCard
                        title="Módulo 91: Simulação Multiversal"
                        description="O M51 é a interface de visualização para as complexas simulações multiversais executadas pelo M91."
                        icon={<GitCommit className="h-8 w-8 text-indigo-400" />}
                        href="/module-91"
                    />
                    <ConnectionCard
                        title="Módulo 22: Motor da Realidade"
                        description="Fornece a engine de renderização para criar ambientes virtuais e aumentados de alta fidelidade."
                        icon={<Layers className="h-8 w-8 text-blue-400" />}
                        href="/module-22"
                    />
                    <ConnectionCard
                        title="Módulo 25: Projeção de Consciência"
                        description="Permite que os Guardiões projetem sua consciência diretamente para dentro das simulações para uma experiência totalmente imersiva."
                        icon={<Eye className="h-8 w-8 text-purple-400" />}
                        href="/module-25"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Entrar no Holodeck</Button>
            </div>
        </div>
    );
}
