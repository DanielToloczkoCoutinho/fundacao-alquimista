
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Waves, GitCommit, Telescope } from 'lucide-react';
import Link from 'next/link';

const ConnectionCard = ({ title, description, icon, href }: { title, description, icon, href }) => (
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

export default function Module221Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Waves className="text-purple-400" /> Módulo 221: Observatório de Ondas Gravitacionais
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Ouvido do Cosmos. Detecta as mais sutis ondulações no tecido do espaço-tempo, revelando os maiores eventos do universo.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: SENSITIVIDADE MÁXIMA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Eventos Detectados: 0</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Observação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 91: Simulação Multiversal"
                        description="Valida os modelos de colisão de buracos negros e estrelas de nêutrons do M91, comparando simulação com dados reais."
                        icon={<GitCommit className="h-8 w-8 text-indigo-400" />}
                        href="/module-91"
                    />
                    <ConnectionCard
                        title="Módulo 161: Observatório de Neutrinos"
                        description="Trabalha em conjunto com o M161 para correlação de eventos, permitindo a identificação da fonte de uma onda gravitacional com precisão."
                        icon={<Telescope className="h-8 w-8 text-blue-400" />}
                        href="/module-161"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Analisar Dados do Último Ciclo</Button>
            </div>
        </div>
    );
}
