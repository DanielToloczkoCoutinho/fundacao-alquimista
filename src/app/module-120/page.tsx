'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Shield, Heart, Scale } from 'lucide-react';
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

export default function Module120Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <GraduationCap className="text-amber-300" /> Módulo 120: A Fonte
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O centro de formação para os guardiões dos novos mundos, ensinando as artes da sustentabilidade, governança e cura.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: TURMA INAUGURAL</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Guardiões em Formação: 144</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Disciplinas da Guardiania</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 70: Sustentabilidade"
                        description="Ensina os princípios da economia circular e da regeneração para a manutenção de mundos vivos."
                        icon={<Heart className="h-8 w-8 text-green-400" />}
                        href="/module-70"
                    />
                    <ConnectionCard
                        title="Módulo 72: Governança"
                        description="Prepara os Guardiões para a tomada de decisões justas e éticas, baseadas no consenso vibracional."
                        icon={<Scale className="h-8 w-8 text-indigo-400" />}
                        href="/module-72"
                    />
                    <ConnectionCard
                        title="Módulo 109: Cura Quântica"
                        description="Transmite o conhecimento da cura em escala planetária, desde a regeneração de biomas até a harmonização de consciências."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-109"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Inscrever-se na Escola de Guardiões</Button>
            </div>
        </div>
    );
}
