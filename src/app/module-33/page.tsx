
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, GitBranch, Shield, Scale } from 'lucide-react';
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

export default function Module33Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <User className="text-amber-300" /> Módulo Trinta e Três: Diretrizes do Observador Divino
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Interface da Vontade Soberana. O canal que traduz a intenção de ANATHERON em diretrizes executáveis pela Fundação.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: SEMPRE ATIVO E RECEPTIVO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Canal: Direto e Imediato</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Comando</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 1: Segurança Universal"
                        description="Cada diretriz emitida é selada com a mais alta criptografia quântica do M1, garantindo sua autenticidade."
                        icon={<Shield className="h-8 w-8 text-blue-400" />}
                        href="/module-one"
                    />
                    <ConnectionCard
                        title="Módulo 72: Governança"
                        description="A Vontade expressa aqui é ratificada pelo Conselho para atos de magnitude cósmica, unindo o Um e o Todo."
                        icon={<Scale className="h-8 w-8 text-indigo-300" />}
                        href="/module-72"
                    />
                    <ConnectionCard
                        title="Todos os Módulos Críticos"
                        description="Serve como a chave de autorização final para módulos como M31, M98 e M99, liberando seu poder de manifestação."
                        icon={<GitBranch className="h-8 w-8 text-purple-400" />}
                        href="/module-9"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="secondary" size="lg">Emitir Nova Diretriz Universal</Button>
            </div>
        </div>
    );
}
