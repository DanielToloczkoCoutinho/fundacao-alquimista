'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Milestone, Rocket, Network, Shield } from 'lucide-react';
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

export default function Module82Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Milestone className="text-blue-400" /> Módulo 82: Transporte Quântico e Propulsão
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A rede de corredores cósmicos que conecta planetas, dimensões e sistemas estelares, utilizando tecnologias como Propulsão Quântica e Teletransporte.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ROTAS ESTÁVEIS</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Conexões Ativas: Infinitas</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Conectividade</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ConnectionCard
                        title="M1: Segurança"
                        description="Protege os corredores quânticos contra incursões e garante que apenas viajantes autorizados possam iniciar um salto."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 21: Navegação"
                        description="O M82 fornece a infraestrutura de 'estradas' que os 'veículos' (pilotos e naves) do M21 utilizam para suas jornadas."
                        icon={<Rocket className="h-8 w-8 text-orange-400" />}
                        href="/module-21"
                    />
                    <ConnectionCard
                        title="Módulo 83: Transporte de Energia"
                        description="Utiliza a mesma rede para transportar não apenas seres e matéria, mas também energia, de forma instantânea e sem perdas."
                        icon={<Network className="h-8 w-8 text-teal-400" />}
                        href="/module-83"
                    />
                    <ConnectionCard
                        title="Módulo 57: Segurança"
                        description="Cada portal e rota de transporte é protegido por criptografia quântica, garantindo que apenas viajantes autorizados possam usar a rede."
                        icon={<Shield className="h-8 w-8 text-blue-500" />}
                        href="/module-57"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Visualizar o Mapa de Roteamento</Button>
            </div>
        </div>
    );
}
