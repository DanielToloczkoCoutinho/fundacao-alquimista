'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Sun, Atom, Orbit, Shield } from 'lucide-react';
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

export default function Module64Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Zap className="text-yellow-300" /> Módulo 64: Sistemas de Energia Limpa e Renovável Universal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A fonte da sustentabilidade. O módulo que aproveita as energias do cosmos para alimentar civilizações sem custo para o universo.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: FORNECIMENTO INFINITO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Impacto Ambiental: 0%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias Energéticas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <ConnectionCard
                        title="M1: Segurança"
                        description="Protege a rede de energia contra ataques ou sobrecargas, garantindo um fornecimento estável e seguro."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 307: Reator ZPE"
                        description="O M64 é a aplicação prática e em escala universal da tecnologia de energia do ponto zero desenvolvida no M307."
                        icon={<Sun className="h-8 w-8 text-orange-400" />}
                        href="/module-307"
                    />
                    <ConnectionCard
                        title="Módulo 211: Fusão Controlada"
                        description="Aplica os princípios da fusão controlada para criar mini-sóis artificiais como fontes de energia limpa e localizada."
                        icon={<Atom className="h-8 w-8 text-blue-400" />}
                        href="/module-211"
                    />
                    <ConnectionCard
                        title="Módulo 65: Transporte Cósmico"
                        description="Fornece a energia limpa e ilimitada para alimentar a frota de naves e a rede de portais da Fundação."
                        icon={<Orbit className="h-8 w-8 text-purple-400" />}
                        href="/module-65"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar Rede Energética Universal</Button>
            </div>
        </div>
    );
}
