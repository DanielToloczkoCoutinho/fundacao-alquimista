'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TestTube, Layers, Presentation } from 'lucide-react';
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

export default function Module122Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <TestTube className="text-teal-400" /> Módulo 122: Laboratório de Realidade Virtual
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O primeiro passo para a imersão. Um ambiente seguro para Guardiões em ascensão experimentarem a navegação em realidades quânticas.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: SIMULAÇÃO PRONTA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Ambientes Disponíveis: 3</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Imersão</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 22: Motor da Realidade"
                        description="Utiliza uma versão simplificada do motor do M22 para renderizar ambientes de treinamento para iniciantes."
                        icon={<Layers className="h-8 w-8 text-blue-400" />}
                        href="/module-22"
                    />
                    <ConnectionCard
                        title="Módulo 93: Simulações Imersivas"
                        description="Serve como o portal de entrada para as simulações mais avançadas do M93, preparando a consciência para experiências mais complexas."
                        icon={<Presentation className="h-8 w-8 text-indigo-400" />}
                        href="/module-93"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Entrar na Simulação Introdutória</Button>
            </div>
        </div>
    );
}
