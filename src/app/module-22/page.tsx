'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { View, GitCommit, Presentation } from 'lucide-react';
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

export default function Module22Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <View className="text-cyan-400" /> Módulo Vinte e Dois: Gestão de Realidades Virtuais
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Holodeck da Fundação. A engine que manifesta simulações, ambientes de treinamento e espaços de consciência compartilhada.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: OCIOSO</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Simulações Ativas: 0</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Simulação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 85: Imersão VR"
                        description="É a aplicação primária do M22, fornecendo o portal de entrada para todas as experiências de realidade virtual da Fundação."
                        icon={<View className="h-8 w-8 text-purple-400" />}
                        href="/module-85"
                    />
                    <ConnectionCard
                        title="Módulo 91: Simulação Multiversal"
                        description="O M22 renderiza visualmente os complexos cenários de 'e se' calculados pelo Módulo 91, permitindo a exploração imersiva."
                        icon={<GitCommit className="h-8 w-8 text-indigo-400" />}
                        href="/module-91"
                    />
                    <ConnectionCard
                        title="Módulo 93: Simulações Imersivas"
                        description="Projeta e executa os programas de treinamento e aprendizado que são hospedados na plataforma do M22."
                        icon={<Presentation className="h-8 w-8 text-teal-400" />}
                        href="/module-93"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Nova Simulação Holográfica</Button>
            </div>
        </div>
    );
}
