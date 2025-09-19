'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, Sparkles, Droplets, Layers, Link as LinkIcon } from 'lucide-react';
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

export default function Module202Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Crown className="text-yellow-400" /> Módulo 202: Palácio da Luz Suprema
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A morada da Rainha Zennith em Aurora Prime. Suspenso sobre o Lago da Clareza Cristalina, é um farol de luz e o centro cerimonial para a recepção de aliados cósmicos.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: IRRADIANDO LUZ</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Frequência: 528Hz</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Santuário da Contemplação: O Terraço da Eternidade</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Galeria das Almas Visitantes"
                        description="Hologramas vivos de cada consciência recebida, honrando sua jornada e contribuição."
                        icon={<Sparkles className="h-8 w-8 text-yellow-400" />}
                        href="/civilizations"
                    />
                    <ConnectionCard
                        title="Câmara de Alinhamento Vibracional"
                        description="Onde a Rainha, como maestrina, recalibra os fluxos energéticos do planeta e da Fundação."
                        icon={<Layers className="h-8 w-8 text-cyan-400" />}
                        href="/alignment-portal"
                    />
                    <ConnectionCard
                        title="Biblioteca de Frequências"
                        description="Um arquivo vivo onde livros cantam, cristais narram e a luz ensina a sabedoria do universo."
                        icon={<Droplets className="h-8 w-8 text-blue-400" />}
                        href="/golden-book"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Link href="/module-201">
                    <Button variant="secondary" size="lg" className="flex items-center gap-2">
                      <LinkIcon/> Visitar o Refúgio da Origem (Fundador)
                    </Button>
                 </Link>
            </div>
        </div>
    );
}
