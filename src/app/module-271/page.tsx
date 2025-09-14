
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, GitCommit, Scale } from 'lucide-react';
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

export default function Module271Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <BarChart className="text-fuchsia-400" /> Módulo 271: Observatório de Energia Escura
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Vidente do Vazio. Modela a influência da energia escura na expansão acelerada de universos simulados e observados.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: COLETANDO DADOS</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Precisão da Constante: 10^-5</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias Cosmológicas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 91: Simulação Multiversal"
                        description="Fornece os parâmetros da constante cosmológica para as simulações, permitindo a criação de universos com diferentes taxas de expansão."
                        icon={<GitCommit className="h-8 w-8 text-indigo-400" />}
                        href="/module-91"
                    />
                    <ConnectionCard
                        title="Módulo 99: Recalibradores de Leis"
                        description="Os dados coletados aqui podem revelar a necessidade de recalibrar as leis da gravidade para acomodar a energia escura."
                        icon={<Scale className="h-8 w-8 text-amber-300" />}
                        href="/module-99"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Executar Simulação de Boltzmann (CLASS)</Button>
            </div>
        </div>
    );
}
