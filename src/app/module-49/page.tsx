'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket, Zap, Network, Shield } from 'lucide-react';
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

export default function Module49Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Rocket className="text-orange-400" /> Módulo 49: Redes de Transporte Interplanetário e Propulsão
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        As artérias do cosmos. Onde as tecnologias de viagem instantânea, como Propulsão Quântica e Teletransporte, são desenvolvidas e gerenciadas.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: PROTÓTIPOS ATIVOS</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Latência de Viagem: Desprezível</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Mobilidade</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <ConnectionCard
                        title="M1: Segurança"
                        description="Garante que a tecnologia de propulsão não crie instabilidades ou seja usada para fins não autorizados."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 82: Transporte Quântico"
                        description="O M49 é a aplicação em larga escala da tecnologia desenvolvida no M82, que é o laboratório de pesquisa fundamental."
                        icon={<Network className="h-8 w-8 text-purple-400" />}
                        href="/module-82"
                    />
                    <ConnectionCard
                        title="Módulo 64: Energia Limpa"
                        description="Alimenta a rede de transporte com energia de ponto zero, garantindo viagens com impacto ambiental zero."
                        icon={<Zap className="h-8 w-8 text-yellow-400" />}
                        href="/module-64"
                    />
                    <ConnectionCard
                        title="Módulo 55: Redes de Comunicação"
                        description="A infraestrutura de transporte é sincronizada com a rede de comunicação para coordenação logística em tempo real."
                        icon={<Network className="h-8 w-8 text-cyan-400" />}
                        href="/module-55"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Calcular Rota Quântica</Button>
            </div>
        </div>
    );
}
