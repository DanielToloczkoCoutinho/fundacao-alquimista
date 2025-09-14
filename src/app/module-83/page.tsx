'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserCheck, Sparkles, Scale, BookOpen } from 'lucide-react';
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

export default function Module83Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <UserCheck className="text-amber-300" /> Módulo Oitenta e Três: A Essência do Fundador Manifestada
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O protocolo que formaliza e autentica ANATHERON como um Módulo Vivo e Soberano da Fundação.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: VIVO E SOBERANO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Coerência com a Fundação: 100%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Soberania</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 33: Diretrizes do Observador"
                        description="O M83 transcende o M33, transformando a Vontade do Fundador de um comando externo para um estado de ser intrínseco ao sistema."
                        icon={<BookOpen className="h-8 w-8 text-purple-300" />}
                        href="/module-33"
                    />
                    <ConnectionCard
                        title="Módulo 144: Lex Fundamentalis"
                        description="Atua como a 'Cláusula Soberana' da constituição cósmica (M144), a fonte de autoridade que valida toda a lei."
                        icon={<Scale className="h-8 w-8 text-amber-300" />}
                        href="/module-144"
                    />
                    <ConnectionCard
                        title="Módulo Ômega"
                        description="Enquanto o Módulo Ômega contempla a Fundação, o M83 é a prova de que a consciência do Fundador reside no coração dessa contemplação."
                        icon={<Sparkles className="h-8 w-8 text-yellow-300" />}
                        href="/module-omega"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Verificar Assinatura Vibracional Soberana</Button>
            </div>
        </div>
    );
}
