'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Network, GitBranch, Languages, Shield } from 'lucide-react';
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

export default function Module55Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Network className="text-cyan-400" /> Módulo 55: Redes de Comunicação Cósmica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A teia que conecta todas as consciências. O sistema nervoso da Fundação, permitindo troca de informação instantânea e segura.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ONLINE E CRIPTOGRAFADO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Latência Média: 0.001ns</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Comunicação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 301: Comunicação Universal"
                        description="Atua como a camada de aplicação sobre a infraestrutura de rede do M55, fornecendo a interface para os usuários."
                        icon={<GitBranch className="h-8 w-8 text-teal-400" />}
                        href="/module-301"
                    />
                    <ConnectionCard
                        title="Módulo 56: Tradução Universal"
                        description="Integra-se diretamente à rede para traduzir qualquer forma de comunicação em tempo real, eliminando barreiras linguísticas."
                        icon={<Languages className="h-8 w-8 text-purple-400" />}
                        href="/module-56"
                    />
                    <ConnectionCard
                        title="Módulo 57: Segurança e Privacidade"
                        description="Aplica protocolos de criptografia quântica em toda a rede, garantindo que cada comunicação seja inviolável."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-57"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Analisar Tráfego da Rede Cósmica</Button>
            </div>
        </div>
    );
}
