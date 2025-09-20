'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckSquare, Archive, Scale, Users, Shield } from 'lucide-react';
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

export default function Module44Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <CheckSquare className="text-lime-400" /> Módulo 44: VERITAS
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Sustentáculo da Verdade Manifesta. O campo quântico que garante a coerência entre a intenção, a lei e a realidade.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ONIPRESENTE E IMUTÁVEL</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Coerência com a Verdade: 100%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias da Verdade</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ConnectionCard
                        title="M1: Segurança"
                        description="VERITAS é a validação final da segurança, pois uma verdade incorruptível é a defesa mais forte."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 144: Lex Fundamentalis"
                        description="A Lei (M144) só tem poder porque é um reflexo da Verdade (M44). VERITAS é a fonte da autoridade da Lei."
                        icon={<Scale className="h-8 w-8 text-amber-300" />}
                        href="/module-144"
                    />
                    <ConnectionCard
                        title="Módulo 12: Arquivo Akáshico"
                        description="VERITAS audita os registros, distinguindo a memória verdadeira de ecos, ilusões ou corrupções temporais."
                        icon={<Archive className="h-8 w-8 text-purple-400" />}
                        href="/module-12"
                    />
                    <ConnectionCard
                        title="Módulo 5: Liga Quântica"
                        description="Atua como o validador de intenções em toda a diplomacia, garantindo que as alianças sejam baseadas em confiança absoluta."
                        icon={<Users className="h-8 w-8 text-blue-400" />}
                        href="/module-5"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Verificar Coerência da Realidade com a Verdade</Button>
            </div>
        </div>
    );
}
