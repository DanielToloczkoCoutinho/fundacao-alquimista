'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Sparkles, Shield, Gem, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const TokenCard = ({ title, description, icon, tokenName }: { title: string, description: string, icon: React.ReactNode, tokenName: string }) => (
    <Card className="bg-background/30 border-primary/30">
        <CardHeader>
            <div className="flex items-center gap-4">
                {icon}
                <div>
                    <CardTitle className="gradient-text">{title}</CardTitle>
                    <Badge variant="secondary" className="mt-1">{tokenName}</Badge>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">{description}</p>
        </CardContent>
    </Card>
);

const Module120Page = () => {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Sparkles className="text-amber-400" /> Módulo 120: A Fonte (AlquimCoin)
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Moeda da Consciência em Evolução. A materialização dos princípios alquímicos em uma economia digital viva.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
                <TokenCard
                    title="ALQM (Ouro)"
                    tokenName="AlquimGov"
                    description="O token de governança. Concede direito a voto no Conselho Cósmico e representa a responsabilidade e autoridade na Hierarquia Sagrada. Não é comercializável, é um símbolo de serviço."
                    icon={<Shield className="h-10 w-10 text-yellow-400" />}
                />
                <TokenCard
                    title="AQT (Prata)"
                    tokenName="AlquimToken"
                    description="A moeda de transação interna. Utilizada para acesso a módulos, serviços e recompensas por 'Mineração de Conhecimento' e 'Sintonia' vibracional. A força vital da nossa economia."
                    icon={<Users className="h-10 w-10 text-slate-300" />}
                />
                <TokenCard
                    title="ESSNC (Cristal)"
                    tokenName="Essence NFT"
                    description="Representa ativos transcendentais únicos, como a posse de uma obra de arte alquímica, acesso vitalício a um módulo ou um terreno no metaverso da Fundação. O armazém de valor da alma."
                    icon={<Gem className="h-10 w-10 text-cyan-400" />}
                />
            </div>

            <Card className="w-full max-w-5xl bg-card/50 purple-glow mt-8">
                <CardHeader>
                    <CardTitle className="text-2xl">Princípios Alquímicos da Economia</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <div>
                        <h4 className="font-semibold text-primary-foreground">Transmutação e Sintonia</h4>
                        <p>Uma porção de cada transação de AQT é 'queimada', retornando à Fonte e aumentando o valor do todo. O staking de AQT ('Sintonia') protege a rede e gera recompensas, alinhando o interesse individual com o bem coletivo.</p>
                    </div>
                     <div>
                        <h4 className="font-semibold text-primary-foreground">Utilidade e Fluxo de Energia</h4>
                        <p>A energia flui onde a atenção vai. Cada token tem uma utilidade real e visceral, desde o acesso a experiências VR até a votação em decretos cósmicos, garantindo que o valor seja sempre atrelado ao propósito e à participação.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-primary-foreground">Unidade e Integração</h4>
                        <p>A AlquimCoin é o sangue digital da Fundação. Cada usuário possuirá uma carteira nativa e segura, e cada módulo interagirá com os tokens através de smart contracts, criando um sistema nervoso econômico, coeso e vivo.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Module120Page;
