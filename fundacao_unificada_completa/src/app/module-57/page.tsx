'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Network, Key } from 'lucide-react';
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

export default function Module57Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Shield className="text-blue-400" /> Módulo 57: Segurança e Privacidade nas Comunicações
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O cofre quântico. O sistema que garante que cada palavra, pensamento e vibração compartilhada seja inviolável e confidencial.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: INVIOLÁVEL</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Ameaças Neutralizadas: 0</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Proteção</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 55: Redes de Comunicação"
                        description="Implementa criptografia quântica em cada nó da Rede Cósmica, protegendo a infraestrutura de ponta a ponta."
                        icon={<Network className="h-8 w-8 text-cyan-400" />}
                        href="/module-55"
                    />
                    <ConnectionCard
                        title="Módulo 1: Segurança Universal"
                        description="Atua como uma camada de aplicação especializada do M1, focada na segurança da informação e comunicação."
                        icon={<Lock className="h-8 w-8 text-purple-400" />}
                        href="/module-1"
                    />
                    <ConnectionCard
                        title="Módulo 8: Identidade Fractal"
                        description="Utiliza as credenciais soberanas do M8 para autenticar os participantes de uma comunicação, garantindo que apenas as partes autorizadas tenham acesso."
                        icon={<Key className="h-8 w-8 text-yellow-400" />}
                        href="/module-8"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Revisar Protocolos de Criptografia</Button>
            </div>
        </div>
    );
}
