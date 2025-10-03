'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wheat, Dna, Leaf, Users, Shield, Hospital } from 'lucide-react';
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

export default function Module63Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Wheat className="text-yellow-400" /> Módulo 63: Alimentação Cósmica e Nutrição Universal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O provedor da abundância, garantindo segurança alimentar e nutrição para todas as civilizações do cosmos.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ABUNDÂNCIA UNIVERSAL</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Nutrição Garantida: 100%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias da Nutrição</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     <ConnectionCard
                        title="M1: Segurança"
                        description="Assegura a pureza e a segurança dos alimentos, protegendo contra contaminação biológica ou energética."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module/M1"
                    />
                    <ConnectionCard
                        title="Módulo 54: Agricultura Interdimensional"
                        description="O M63 define as necessidades nutricionais, e o M54 desenvolve as culturas e organismos para supri-las em qualquer ambiente."
                        icon={<Leaf className="h-8 w-8 text-lime-400" />}
                        href="/module-54"
                    />
                    <ConnectionCard
                        title="Módulo 94: Morfogênese Quântica"
                        description="Permite a criação de alimentos com assinaturas genéticas específicas para promover a cura e a regeneração celular."
                        icon={<Dna className="h-8 w-8 text-purple-400" />}
                        href="/module-94"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Consultar o Códice Alimentar</Button>
            </div>
        </div>
    );
}
