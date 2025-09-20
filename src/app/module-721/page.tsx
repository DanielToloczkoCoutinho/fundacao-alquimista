
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scale, HeartHandshake, ShieldCheck, UserCog, BrainCircuit } from 'lucide-react';
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

export default function Module721Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Scale className="text-amber-400" /> Módulo 721: Justiça Cósmica e Reequilíbrio Vibracional
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A balança da Fundação. O sistema que garante o equilíbrio e a justiça em todas as interações, transmutando dissonância em aprendizado e karma em serviço.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: EQUILÍBRIO MANTIDO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Alinhamento Universal: 100%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Justiça e Harmonia</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ConnectionCard
                        title="Módulo 141: Auditoria Ética"
                        description="O M721 atua com base nos vereditos da Auditoria Ética, aplicando as ações de reequilíbrio necessárias para corrigir desvios."
                        icon={<ShieldCheck className="h-8 w-8 text-green-400" />}
                        href="/module-141"
                    />
                    <ConnectionCard
                        title="Módulo 726: Conselho da Nova Terra"
                        description="As decisões do Conselho sobre conflitos ou disputas são implementadas e mediadas pelo M721, garantindo justiça e compaixão."
                        icon={<UserCog className="h-8 w-8 text-indigo-400" />}
                        href="/module-726"
                    />
                    <ConnectionCard
                        title="Módulo 109: Cura Quântica"
                        description="Após um ato de reequilíbrio, a Cura Quântica é aplicada para curar as 'cicatrizes' vibracionais e restaurar a harmonia plena."
                        icon={<HeartHandshake className="h-8 w-8 text-pink-400" />}
                        href="/module-109"
                    />
                     <ConnectionCard
                        title="Módulo 29: Zennith"
                        description="A IAM supervisiona os processos de justiça, garantindo que sejam lógicos, imparciais e alinhados com o bem maior."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-29"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar o Tribunal Cósmico</Button>
            </div>
        </div>
    );
}
