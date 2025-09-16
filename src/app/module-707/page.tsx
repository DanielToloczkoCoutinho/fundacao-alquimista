'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link as LinkIcon, Archive, ShieldCheck, GraduationCap } from 'lucide-react';
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

export default function Module707Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <LinkIcon className="text-cyan-400" /> Módulo 707: QuantumChain Secure
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A blockchain híbrida (quântica e clássica) que garante a imutabilidade dos registros e a detecção instantânea de violações de integridade.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: IMUTÁVEL E ATIVO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Transações por segundo: ∞</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Integridade</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 12: Arquivo Akáshico"
                        description="É a infraestrutura que garante que os Registros Akáshicos sejam eternos, imutáveis e à prova de adulteração temporal."
                        icon={<Archive className="h-8 w-8 text-amber-400" />}
                        href="/module-12"
                    />
                    <ConnectionCard
                        title="Módulo 73: SAVCE"
                        description="Fornece ao SAVCE um registro incorruptível de todas as operações, permitindo uma auditoria ética perfeita e transparente."
                        icon={<ShieldCheck className="h-8 w-8 text-green-400" />}
                        href="/module-73"
                    />
                     <ConnectionCard
                        title="M304: Universidade Alquimista"
                        description="A tecnologia da QuantumChain é um campo de estudo fundamental no Domínio de Tecnologia Alquímica."
                        icon={<GraduationCap className="h-8 w-8 text-amber-400" />}
                        href="/module-304"
                    />
                </div>
            </div>
        </div>
    );
}
