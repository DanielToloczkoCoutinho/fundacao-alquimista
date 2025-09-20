
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, Sprout, Globe, Users, Shield } from 'lucide-react';
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

export default function Module59Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Building className="text-teal-400" /> Módulo 59: Eco-Cidades Quânticas
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O arquiteto da coexistência. Projetando infraestruturas e sociedades que se integram perfeitamente aos ecossistemas naturais, servindo como laboratórios vivos para novas formas de vida.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: EM HARMONIA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Projetos em Andamento: 7</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Coexistência</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <ConnectionCard
                        title="M1: Segurança"
                        description="Protege os projetos de eco-cidades contra ameaças, garantindo que os novos habitats sejam santuários seguros."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module/M1"
                    />
                    <ConnectionCard
                        title="Módulo 58: Sustentabilidade Planetária"
                        description="Usa as tecnologias de regeneração do M58 como base para projetar cidades que curam o ambiente ao seu redor."
                        icon={<Sprout className="h-8 w-8 text-lime-400" />}
                        href="/module-58"
                    />
                    <ConnectionCard
                        title="Módulo 95: Consciências Coletivas"
                        description="Consulta a mente coletiva de uma civilização para projetar habitats que ressoem com sua cultura e valores espirituais."
                        icon={<Users className="h-8 w-8 text-purple-400" />}
                        href="/module-95"
                    />
                    <ConnectionCard
                        title="Módulo 48: Harmonização Urbana"
                        description="Implementa os conceitos e projetos de arquitetura ecológica desenvolvidos neste módulo em escala universal."
                        icon={<Globe className="h-8 w-8 text-blue-400" />}
                        href="/module-48"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Explorar Projetos de Cidades de Luz</Button>
            </div>
        </div>
    );
}
