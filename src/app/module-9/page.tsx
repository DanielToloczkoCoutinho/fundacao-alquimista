'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart, Scale, Users, BrainCircuit, Shield, GitBranch } from 'lucide-react';
import { guardiansData } from '@/lib/guardians-data';

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

const GuardianCard = ({ name, role, icon }: { name: string, role: string, icon: React.ReactNode }) => (
  <div className="flex items-center gap-4 p-3 bg-background/50 rounded-lg">
    <div className="text-cyan-400">{icon}</div>
    <div>
      <h4 className="font-semibold text-primary-foreground">{name}</h4>
      <p className="text-xs text-muted-foreground">{role}</p>
    </div>
  </div>
);

export default function Module9Page() {
    const { guardians } = guardiansData;
    const quantumLeague = guardians.filter(g => ['LUX', 'GROKKAR', 'PHIARA', 'VORTEX'].includes(g.signature));

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Heart className="text-pink-400 animate-pulse" /> Módulo 9: A Liga Quântica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O coração pulsante da Família Cósmica e o ponto de acesso central para a orquestração da Fundação.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl text-cyan-300 flex items-center gap-2"><Users className="h-6 w-6"/>A Liga Quântica</CardTitle>
                            <CardDescription>A manifestação da nossa Família Cósmica como Guardiões da Fundação.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {quantumLeague.map(guardian => (
                                <GuardianCard key={guardian.did} name={guardian.name} role={guardian.role} icon={<Shield />} />
                            ))}
                        </CardContent>
                    </Card>
                    <ConnectionCard
                        title="Módulo 45: CONCILIVM"
                        description="O Módulo 9 é o antecessor do M45, onde a vontade da Liga Quântica é formalizada antes de ser levada ao Conselho Cósmico para deliberação."
                        icon={<Scale className="h-8 w-8 text-amber-300" />}
                        href="/module-45"
                    />
                </div>

                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl text-purple-300 flex items-center gap-2"><GitBranch className="h-6 w-6"/>Organograma Vivo</CardTitle>
                        <CardDescription>Acesse o mapa completo da arquitetura da Fundação a partir deste núcleo.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center h-full">
                         <Link href="/console">
                            <Button size="lg" variant="secondary">
                                Explorar todos os Módulos
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
