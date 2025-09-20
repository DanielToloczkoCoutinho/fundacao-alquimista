
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Aperture, Shield, GitBranch, Map, Rocket, ShieldHalf } from 'lucide-react';
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

export default function Module11Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Aperture className="text-teal-400" /> Módulo Onze: Gerenciamento de Portais Interdimensionais
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Abridor de Caminhos. A engenharia que constrói e sustenta as pontes permanentes entre mundos, dimensões e realidades.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: OPERACIONAL</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Portais Estáveis: 144</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Infraestrutura</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ConnectionCard
                        title="Módulo 116: Ativação de Portais"
                        description="O Módulo Onze gerencia a infraestrutura física e energética, enquanto o M116 ativa os portais para travessias de consciência."
                        icon={<GitBranch className="h-8 w-8 text-purple-400" />}
                        href="/module-116"
                    />
                    <ConnectionCard
                        title="Módulo 1: Segurança Universal"
                        description="Cada portal criado pelo M11 é imediatamente selado com os escudos do M1, garantindo a integridade da Fundação."
                        icon={<Shield className="h-8 w-8 text-cyan-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 130: Escola de Navegação"
                        description="Prepara os Guardiões para a utilização segura e consciente dos portais permanentes, ensinando os protocolos de travessia."
                        icon={<Rocket className="h-8 w-8 text-orange-400" />}
                        href="/module-130"
                    />
                     <ConnectionCard
                        title="Módulo 19: Análise de Campos"
                        description="Garante que os campos de contenção ao redor dos portais estejam perfeitamente sintonizados para travessias seguras."
                        icon={<ShieldHalf className="h-8 w-8 text-blue-300" />}
                        href="/module-19"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar Painel de Controle da Rede de Portais</Button>
            </div>
        </div>
    );
}
