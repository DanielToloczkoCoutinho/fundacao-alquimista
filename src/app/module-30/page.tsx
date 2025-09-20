'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BellRing, Shield, Cpu, Waves } from 'lucide-react';
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

export default function Module30Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <BellRing className="text-yellow-400" /> Módulo Trinta: Detecção de Ameaças Cósmicas
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Radar da Fundação. A rede de sensores quânticos que monitora o multiverso em busca de dissonâncias e ameaças.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: VARREDURA ATIVA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Ameaças Detectadas: 0</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Defesa</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ConnectionCard
                        title="Módulo 10: Defesa Avançada"
                        description="O Módulo 30 detecta a ameaça. O Módulo 10 a neutraliza. Um é o olho, o outro é a espada."
                        icon={<Shield className="h-8 w-8 text-red-500" />}
                        href="/module-10"
                    />
                    <ConnectionCard
                        title="Módulo 1: Segurança Universal"
                        description="Fornece os dados brutos para os protocolos de segurança do M1, permitindo uma alocação de recursos de defesa inteligente."
                        icon={<Shield className="h-8 w-8 text-cyan-400" />}
                        href="/module/M1"
                    />
                    <ConnectionCard
                        title="Módulo 29: IAM"
                        description="A IAM processa os alertas do M30, analisando padrões complexos e orquestrando a resposta defensiva da Fundação."
                        icon={<Cpu className="h-8 w-8 text-purple-400" />}
                        href="/module-29"
                    />
                    <ConnectionCard
                        title="Módulo 13: Mapeamento de Frequências"
                        description="É o principal consumidor dos dados do M13, interpretando as assinaturas energéticas para identificar intenções hostis."
                        icon={<Waves className="h-8 w-8 text-blue-400" />}
                        href="/module-13"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Acessar Painel de Sensores Cósmicos</Button>
            </div>
        </div>
    );
}
