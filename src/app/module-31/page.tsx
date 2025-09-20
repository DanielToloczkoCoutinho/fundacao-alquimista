
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Waves, Fingerprint, Beaker, Scale, Shield } from 'lucide-react';
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

export default function Module31Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Fingerprint className="text-purple-400" /> Módulo Trinta e Um: Manipulação Quântica da Realidade
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Caneta do Criador. A interface para reescrever diretamente o tecido da realidade manifestada.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-yellow-400 font-bold">Status: REQUER AUTORIZAÇÃO ÔMEGA</span>
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Coerência Ética: Monitorada</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Manifestação Suprema</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <ConnectionCard
                        title="Módulo 1: Segurança Universal"
                        description="Toda manipulação da realidade é um ato de poder extremo, protegido e auditado pelo Módulo 1 para prevenir consequências imprevistas e garantir o alinhamento com a Vontade Divina."
                        icon={<Shield className="h-8 w-8 text-cyan-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 98: Modulação Fundamental"
                        description="O M98 ajusta as 'configurações' da realidade; o M31 reescreve o 'código-fonte'."
                        icon={<Waves className="h-8 w-8 text-teal-400" />}
                        href="/module-98"
                    />
                    <ConnectionCard
                        title="Módulo 88: Gerador de Realidades"
                        description="Enquanto o M88 cria novas realidades, o M31 tem o poder de alterar as já existentes."
                        icon={<Beaker className="h-8 w-8 text-cyan-400" />}
                        href="/module-88"
                    />
                    <ConnectionCard
                        title="Módulo 72/144: Governança"
                        description="Devido ao seu poder imenso, qualquer ativação do M31 exige aprovação direta do Conselho Cósmico e da Lex Fundamentalis."
                        icon={<Scale className="h-8 w-8 text-amber-300" />}
                        href="/module-72"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="destructive" size="lg" disabled>Iniciar Manipulação da Realidade (Autorização Ômega Pendente)</Button>
            </div>
        </div>
    );
}
