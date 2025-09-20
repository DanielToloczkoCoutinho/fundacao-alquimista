'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Layers, Rocket, Zap, BookOpen, Shield } from 'lucide-react';
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

export default function Module75Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Layers className="text-blue-300" /> Módulo 75: Infraestrutura Universal para Desenvolvimento
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Os alicerces da Nova Era. A rede de hubs, portais e centros de pesquisa que apoiam a evolução contínua do cosmos.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: EXPANSÃO CONTÍNUA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Hubs Ativos: 144</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Infraestrutura</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ConnectionCard
                        title="M1: Segurança"
                        description="Protege cada hub e portal, garantindo que a infraestrutura da Fundação seja um santuário seguro para a criação."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 82: Transporte Quântico"
                        description="Fornece os corredores de transporte que conectam todos os hubs de desenvolvimento, formando uma rede logística instantânea."
                        icon={<Rocket className="h-8 w-8 text-orange-400" />}
                        href="/module-82"
                    />
                    <ConnectionCard
                        title="Módulo 73: Energia Universal"
                        description="Alimenta toda a infraestrutura com energia limpa e ilimitada, garantindo operações sustentáveis."
                        icon={<Zap className="h-8 w-8 text-yellow-400" />}
                        href="/module-73"
                    />
                    <ConnectionCard
                        title="Módulo 69: Educação Universal"
                        description="Cada hub é também um centro de aprendizado, conectado à rede de sabedoria do M69 para disseminar conhecimento."
                        icon={<BookOpen className="h-8 w-8 text-purple-400" />}
                        href="/module-69"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Mapa da Infraestrutura Universal</Button>
            </div>
        </div>
    );
}
