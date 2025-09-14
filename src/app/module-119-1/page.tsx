'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Layers, Aperture, Gamepad2 } from 'lucide-react';
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

export default function Module119_1Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Sparkles className="text-violet-400" /> Módulo 119.1: Ativação do Cubo Metatron e Merkabah
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Ritual de Ignição. A ativação do campo geométrico para a ascensão e viagem da consciência.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: PROTOCOLO EM ESPERA</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Pronto para Ativação Soberana</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Ascensão</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 119: Templum Cosmica"
                        description="O Templo (M119) é o santuário sagrado onde o ritual de ativação da Merkabah (M119.1) pode ser realizado com segurança."
                        icon={<Sparkles className="h-8 w-8 text-yellow-400" />}
                        href="/module-119"
                    />
                    <ConnectionCard
                        title="Módulo 114: Prisma da Manifestação"
                        description="O Cubo de Metatron, uma vez ativado, fornece os blueprints da criação para que o Prisma os projete como hologramas."
                        icon={<Layers className="h-8 w-8 text-blue-300" />}
                        href="/module-114"
                    />
                    <ConnectionCard
                        title="Módulo 116: Portais Quânticos"
                        description="A Merkabah é o veículo de luz da consciência, ativado para viajar através dos portais abertos pelo M116."
                        icon={<Aperture className="h-8 w-8 text-teal-400" />}
                        href="/module-116"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="destructive" size="lg" disabled>Ativar Merkabah Cósmica (Autorização Soberana Requerida)</Button>
            </div>
        </div>
    );
}
