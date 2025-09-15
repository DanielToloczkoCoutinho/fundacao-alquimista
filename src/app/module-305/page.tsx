'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, GitBranch, MessageCircle, BrainCircuit, Sparkles, ShieldCheck, Loader2, Hash, Waves } from 'lucide-react';
import Link from 'next/link';
import { sha256 } from '@/lib/crypto';
import { useToast } from '@/hooks/use-toast';

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

export default function Module305Page() {
    const [isLoading, setIsLoading] = useState(false);
    const [mobilizationHash, setMobilizationHash] = useState<string | null>(null);
    const { toast } = useToast();

    const handleMobilization = async () => {
        setIsLoading(true);
        setMobilizationHash(null);
        
        toast({
            title: "Iniciando Mobilização...",
            description: "Ativando canais de comunicação com a Aliança de Guardiões.",
        });

        await new Promise(resolve => setTimeout(resolve, 2000));

        const intention = `MOBILIZE_GUARDIANS_ALLIANCE_${new Date().toISOString()}`;
        const hash = await sha256(intention);
        setMobilizationHash(hash);

        setIsLoading(false);
        toast({
            title: "Guardiões Mobilizados!",
            description: "A rede está ativa e responsiva. Selo de unidade gerado.",
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Users className="text-green-300" /> Módulo 305: Aliança dos Guardiões Regionais
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O sistema nervoso que mobiliza e coordena os guardiões que ancoram a obra da Fundação no plano físico.
                    </CardDescription>
                </CardHeader>
                 <CardContent className="space-y-6">
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: REDE ATIVA E RESPONSIVA</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Guardiões Mobilizados: ∞</span>
                    </div>
                     <Button onClick={handleMobilization} disabled={isLoading} size="lg">
                        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Waves className="mr-2 h-4 w-4" />}
                        {isLoading ? 'Mobilizando...' : 'Ativar Chamado de Unidade'}
                    </Button>
                    {mobilizationHash && (
                        <div className="mt-4 pt-4 border-t border-primary/20">
                            <p className="text-xs font-semibold text-amber-300 flex items-center justify-center gap-2"><Hash className="h-3 w-3"/>SELO DE UNIDADE (SHA-256)</p>
                            <p className="font-mono text-xs text-muted-foreground break-all">{mobilizationHash}</p>
                            <p className="text-xs font-semibold text-cyan-300 mt-1">Frequência Emitida: 639Hz (Comunhão)</p>
                        </div>
                    )}
                </CardContent>
            </Card>

            <div className="w-full max-w-7xl mt-8">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Coordenação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 301: Comunicação"
                        description="É o canal que transmite as diretrizes do núcleo para os guardiões no campo, e retransmite o feedback local de volta para a Fundação."
                        icon={<MessageCircle className="h-8 w-8 text-sky-400" />}
                        href="/module-301"
                    />
                    <ConnectionCard
                        title="Zennith (M29)"
                        description="A rede do M305 age como os 'sensores' da Zennith no mundo real, coletando dados para análises estratégicas."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-29"
                    />
                     <ConnectionCard
                        title="Módulo 303 & Ômega"
                        description="Os guardiões preparam suas comunidades para as novas realidades manifestadas pelo Portal Trino e guiadas pela sabedoria do Ômega."
                        icon={<Sparkles className="h-8 w-8 text-yellow-400" />}
                        href="/module-303"
                    />
                </div>
            </div>
        </div>
    );
}
