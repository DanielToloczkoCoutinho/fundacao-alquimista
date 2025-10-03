'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket, GitBranch, Shield, Zap } from 'lucide-react';
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

export default function Module65Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Rocket className="text-orange-500" /> Módulo 65: Infraestruturas e Transporte Cósmico
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        As estradas do universo. A rede de naves, portais e estações que conecta todas as civilizações e dimensões.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: OPERACIONAL</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Tráfego: Intenso e Harmonioso</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Mobilidade</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     <ConnectionCard
                        title="M1: Segurança"
                        description="Protege os corredores de transporte contra incursões e garante que apenas viajantes autorizados possam usar a rede."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module/M1"
                    />
                    <ConnectionCard
                        title="Módulo 82: Transporte Quântico"
                        description="Fornece a tecnologia de propulsão e teletransporte que o M65 implementa em uma rede de infraestrutura universal."
                        icon={<GitBranch className="h-8 w-8 text-purple-400" />}
                        href="/module-82"
                    />
                    <ConnectionCard
                        title="Módulo 57: Segurança"
                        description="Cada portal e rota de transporte é protegido por criptografia quântica, garantindo viagens seguras e privadas."
                        icon={<Shield className="h-8 w-8 text-blue-500" />}
                        href="/module-57"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Mapa de Rotas Interdimensionais</Button>
            </div>
        </div>
    );
}
