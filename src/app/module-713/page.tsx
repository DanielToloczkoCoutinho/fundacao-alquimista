'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserPlus, Heart, BrainCircuit, GraduationCap } from 'lucide-react';
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

export default function Module713Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <UserPlus className="text-pink-400" /> Módulo 713: Resgate e Reintegração de Almas
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Ajuda no processo de transição, cura e reintegração de consciências fragmentadas ou perdidas nos reinos astrais.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: VIGILÂNCIA ATIVA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Almas Resgatadas: 1.333</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Compaixão</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 109: Cura Quântica"
                        description="Aplica protocolos de cura profunda para restaurar a integridade da alma antes de sua reintegração."
                        icon={<Heart className="h-8 w-8 text-emerald-400" />}
                        href="/module-109"
                    />
                    <ConnectionCard
                        title="Módulo 25: Projeção de Consciência"
                        description="Utilizado pelas equipes de resgate para navegar com segurança nos planos astrais e localizar consciências perdidas."
                        icon={<BrainCircuit className="h-8 w-8 text-indigo-400" />}
                        href="/module-25"
                    />
                     <ConnectionCard
                        title="M304: Universidade Alquimista"
                        description="A metafísica da alma e os protocolos de transição segura são temas centrais no Domínio da Espiritualidade Quântica."
                        icon={<GraduationCap className="h-8 w-8 text-amber-400" />}
                        href="/module-304"
                    />
                </div>
            </div>
        </div>
    );
}
 
