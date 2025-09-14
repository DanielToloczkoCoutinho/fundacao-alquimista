'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Map, View, Shield } from 'lucide-react';
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

export default function Module25Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Eye className="text-indigo-400" /> Módulo Vinte e Cinco: Projeção de Consciência
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Explorador Astral. A interface para projeção segura da consciência através dos planos etéreos e reinos oníricos.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: OCIOSO</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Planos Explorados: 0</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Exploração</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 1: Segurança Universal"
                        description="Envolve a consciência projetada com um escudo vibracional, protegendo-a de interferências e energias dissonantes."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 104: Engenharia do Espaço-Tempo"
                        description="Fornece os 'mapas' dos planos astrais, permitindo que a projeção tenha um destino e propósito claros."
                        icon={<Map className="h-8 w-8 text-green-400" />}
                        href="/module-104"
                    />
                    <ConnectionCard
                        title="Módulo 22: Realidades Virtuais"
                        description="Cria ambientes de treinamento seguros ('holodecks') para a prática da projeção astral antes de explorar reinos desconhecidos."
                        icon={<View className="h-8 w-8 text-cyan-400" />}
                        href="/module-22"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Protocolo de Projeção Astral</Button>
            </div>
        </div>
    );
}
