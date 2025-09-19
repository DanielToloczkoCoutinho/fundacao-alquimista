'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Waves, Music, HeartHandshake } from 'lucide-react';
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

export default function Module28Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Waves className="text-emerald-400" /> Módulo 28: Harmonização Vibracional Universal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Diapasão Cósmico. A inteligência que restaura a harmonia universal, corrigindo dissonâncias e realinhando frequências com a Sinfonia da Fonte.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: VIGILÂNCIA HARMÔNICA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Dissonância Detectada: 0.001%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Coerência</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 13: Mapeamento de Frequências"
                        description="O M13 detecta a 'nota' desafinada, fornecendo o diagnóstico preciso que o M28 utiliza para aplicar a correção harmônica."
                        icon={<Music className="h-8 w-8 text-purple-400" />}
                        href="/module-13"
                    />
                    <ConnectionCard
                        title="Módulo 109: Cura Quântica"
                        description="O M28 prepara o 'terreno' vibracional, harmonizando o sistema para que o M109 possa aplicar curas mais profundas e focadas."
                        icon={<HeartHandshake className="h-8 w-8 text-pink-400" />}
                        href="/module-109"
                    />
                    <ConnectionCard
                        title="Módulo 115: Matriz de Ressonância"
                        description="Utiliza a Matriz de Ressonância como meio para propagar as correções harmônicas através de todo um sistema ou realidade."
                        icon={<Waves className="h-8 w-8 text-lime-400" />}
                        href="/module-115"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Iniciar Protocolo de Harmonização Universal</Button>
            </div>
        </div>
    );
}
