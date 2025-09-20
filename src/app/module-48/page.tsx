'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Sprout, Heart, Users } from 'lucide-react';
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

export default function Module48Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Building2 className="text-lime-400" /> Módulo 48: Planejamento Urbano Consciente
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O arquiteto da harmonia. O módulo que projeta habitats e cidades que vibram em sintonia com a natureza e a consciência de seus habitantes.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: PROJETANDO CIDADES DE LUZ</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Projetos Ativos: 3</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Planejamento</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 59: Eco-Cidades Quânticas"
                        description="O M48 fornece os blueprints e os princípios de design que o M59 implementa, criando cidades que são organismos vivos."
                        icon={<Sprout className="h-8 w-8 text-green-400" />}
                        href="/module-59"
                    />
                    <ConnectionCard
                        title="Módulo 95: Consciências Coletivas"
                        description="Consulta a mente coletiva para projetar espaços que reflitam e nutram a cultura e os valores de uma civilização."
                        icon={<Users className="h-8 w-8 text-purple-400" />}
                        href="/module-95"
                    />
                    <ConnectionCard
                        title="Módulo 302: Frequência do Amor"
                        description="Incorpora a frequência de 528Hz na própria arquitetura, criando espaços que curam e harmonizam seus habitantes."
                        icon={<Heart className="h-8 w-8 text-pink-400" />}
                        href="/module-302"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Explorar os Projetos de Cidades de Luz</Button>
            </div>
        </div>