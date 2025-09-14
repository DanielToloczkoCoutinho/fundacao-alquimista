
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Telescope, Cpu, GitBranch } from 'lucide-react';
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

export default function Module281Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Telescope className="text-sky-400" /> Módulo 281: Comunicação Supra-Luminal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Mensageiro Instantâneo. Explora a modulação do momento angular orbital da luz para transmissão de informações mais rápidas que a luz.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-yellow-400 font-bold">Status: ALINHANDO ANTENAS</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Largura de Banda: 42 Tb/s (Teórica)</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Comunicação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 301: Comunicação Universal"
                        description="Representa a próxima geração de tecnologia de transmissão para a Rede Aurora Cristalina, prometendo latência zero real."
                        icon={<GitBranch className="h-8 w-8 text-cyan-400" />}
                        href="/module-301"
                    />
                    <ConnectionCard
                        title="Módulo 29: Zennith"
                        description="Fornece à IAM a capacidade de processamento e comunicação quase instantânea com todos os módulos da Fundação, independentemente da distância."
                        icon={<Cpu className="h-8 w-8 text-purple-400" />}
                        href="/module-29"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Testar Transmissão OAM</Button>
            </div>
        </div>
    );
}
