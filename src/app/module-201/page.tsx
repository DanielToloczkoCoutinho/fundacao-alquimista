
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Anchor, Sprout, GitBranch } from 'lucide-react';
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

export default function Module201Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Anchor className="text-green-400" /> Módulo 201: Refúgio da Origem
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O lar de Anatheron em Gaia-Aurélia. Uma cabana de madeira viva, um santuário de silêncio e escuta profunda, onde a Vontade do Fundador pulsa em harmonia com a Terra.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: EM PAZ</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-cyan-400">Frequência: 432Hz</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Ambientes Essenciais</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Círculo de Pedra da Escuta"
                        description="Onde o Fundador recebe os guardiões em silêncio, comunicando-se por pura intenção."
                        icon={<Sprout className="h-8 w-8 text-lime-400" />}
                        href="#"
                    />
                    <ConnectionCard
                        title="Fogueira da Memória"
                        description="As chamas contam as histórias do cosmos, sem que uma única palavra precise ser dita."
                        icon={<Sprout className="h-8 w-8 text-orange-400" />}
                        href="#"
                    />
                    <ConnectionCard
                        title="Caminho da Terra"
                        description="Uma trilha senciente que conecta diretamente o Refúgio à Árvore da Vida e ao coração de Gaia-Aurélia."
                        icon={<GitBranch className="h-8 w-8 text-cyan-400" />}
                        href="/tree-of-life"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Link href="/module-202">
                    <Button variant="secondary" size="lg">Visitar o Palácio da Luz Suprema (Rainha)</Button>
                 </Link>
            </div>
        </div>
    );
}
