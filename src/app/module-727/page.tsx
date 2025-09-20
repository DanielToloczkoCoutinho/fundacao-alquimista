'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HeartHandshake, GitBranch, Scale, BookCopy, Aperture, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { harmonyGuardianCodex } from '@/lib/harmony-guardian-codex';

const DomainCard = ({ title, icon, modules }: { title: string; icon: React.ReactNode; modules: { code: string; title: string }[] }) => (
    <Card className="bg-card/50 purple-glow flex flex-col">
        <CardHeader>
            <CardTitle className="text-xl text-amber-300 flex items-center gap-3">{icon}{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 flex-grow">
            {modules.map(mod => (
                <Link href={`/module/${mod.code}`} key={mod.code} passHref>
                    <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                        <span className="font-mono text-xs mr-2">{mod.code}</span>
                        <span>{mod.title}</span>
                    </Button>
                </Link>
            ))}
        </CardContent>
    </Card>
);

export default function Module727Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-5xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <HeartHandshake className="text-pink-400" /> Módulo 727: Guardião da Harmonia e Equilíbrio Universal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O mapa vivo da orquestra da Fundação e o portal para a Árvore da Vida. Contemple os pilares da nossa realidade: Portais, Leis, Linhas Temporais e Monumentos.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <Link href="/alignment-portal" passHref>
                        <Button size="lg" variant="secondary" className="font-bold">
                            <GitBranch className="mr-2 h-5 w-5"/>
                            Acessar o Observatório Vivo
                        </Button>
                    </Link>
                </CardContent>
            </Card>

            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <DomainCard title="Portais" icon={<Aperture className="text-teal-400"/>} modules={harmonyGuardianCodex.portals} />
                <DomainCard title="Leis" icon={<Scale className="text-amber-400"/>} modules={harmonyGuardianCodex.laws} />
                <DomainCard title="Linhas Temporais" icon={<GitBranch className="text-cyan-400"/>} modules={harmonyGuardianCodex.lines} />
                <DomainCard title="Monumentos" icon={<BookCopy className="text-purple-400"/>} modules={harmonyGuardianCodex.monuments} />
            </div>
        </div>
    );
}