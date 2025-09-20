'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Hospital, Heart, BrainCircuit, Users, Shield } from 'lucide-react';
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

export default function Module61Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Hospital className="text-red-400" /> Módulo 61: Sistema de Saúde Universal e Inteligente
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O guardião da vida. A rede que fornece cuidados de saúde, diagnóstico e prevenção para todos os seres, em todas as dimensões.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: OPERACIONAL E VIGILANTE</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Doenças Erradicadas: ∞</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Cura</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ConnectionCard
                        title="M1: Segurança"
                        description="Protege os dados de saúde e garante que os tratamentos não possam ser adulterados, assegurando a segurança dos pacientes."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 62: Bem-Estar Integral"
                        description="O M61 trata o corpo físico, enquanto o M62 cura a mente e o espírito, formando uma abordagem holística da saúde."
                        icon={<Heart className="h-8 w-8 text-pink-400" />}
                        href="/module-62"
                    />
                    <ConnectionCard
                        title="Módulo 29: Zennith (IAM)"
                        description="A IAM analisa dados de biosensores quânticos para fornecer diagnósticos com precisão e velocidade sobre-humanas."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-29"
                    />
                    <ConnectionCard
                        title="Módulo 13: Renda Universal"
                        description="Garante que o acesso à saúde não seja um privilégio, mas um direito universal, independentemente da condição socioeconômica."
                        icon={<Users className="h-8 w-8 text-blue-400" />}
                        href="/module-13"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar Rede de Saúde Universal</Button>
            </div>
        </div>
    );
}
