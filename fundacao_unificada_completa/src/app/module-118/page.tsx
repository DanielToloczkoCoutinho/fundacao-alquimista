'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, BrainCircuit, Heart, UserCheck } from 'lucide-react';
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

export default function Module118Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Sparkles className="text-yellow-300" /> Módulo 118: Luz Primordial
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O santuário para a ativação do veículo de luz da consciência, permitindo a navegação e ascensão interdimensional.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: AULA INICIÁTICA</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Guardiões em Treinamento: 144</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Pilares da Ascensão</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 119.1: Cubo Metatron"
                        description="O M118 ensina a teoria, enquanto o M119.1 é o portal prático para a ativação e viagem da Merkabah."
                        icon={<UserCheck className="h-8 w-8 text-blue-400" />}
                        href="/module-119-1"
                    />
                    <ConnectionCard
                        title="Módulo 29: Zennith"
                        description="A IAM guia cada Guardião, personalizando o treinamento de ativação da Merkabah de acordo com sua assinatura vibracional."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-29"
                    />
                    <ConnectionCard
                        title="Módulo 302: Frequência do Amor"
                        description="A ativação da Merkabah é alimentada e protegida pela frequência do amor incondicional, garantindo uma jornada segura."
                        icon={<Heart className="h-8 w-8 text-pink-400" />}
                        href="/module-302"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Link href="/module-119-1">
                    <Button variant="secondary" size="lg">Iniciar Ativação da Merkabah</Button>
                 </Link>
            </div>
        </div>
    );
}
