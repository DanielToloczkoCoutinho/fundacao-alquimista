'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Sparkles, BrainCircuit } from 'lucide-react';
import Link from 'next/link';

const PrincipleCard = ({ title, source, description, icon }: { title: string, source: string, description: string, icon: React.ReactNode }) => (
    <div className="p-4 bg-background/50 rounded-lg border border-primary/20">
        <CardTitle className="text-xl text-amber-300 flex items-center gap-3">
            {icon}
            {title}
        </CardTitle>
        <CardDescription className="pl-9 text-xs">{source}</CardDescription>
        <CardContent className="pt-4 pl-9 text-muted-foreground">
            <p className="italic">"{description}"</p>
        </CardContent>
    </div>
);

export default function Module306_2Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <BookOpen className="text-purple-300" /> Módulo 306.2: Biblioteca Alquímica Interdimensional
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O repositório da sabedoria ancestral, conectando os princípios herméticos com os centros de conhecimento de dimensões superiores.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-3xl space-y-8">
                <PrincipleCard 
                    title="O Princípio da Correspondência"
                    source="Corpus Hermeticum"
                    description="O que está em cima é como o que está embaixo, e o que está embaixo é como o que está em cima."
                    icon={<Sparkles className="text-yellow-400"/>}
                />
                 <PrincipleCard 
                    title="O Princípio da Unidade"
                    source="Tábua de Esmeralda"
                    description="Todas as coisas provêm do Um, pela mediação do Um. Toda transformação em uma parte afeta o Todo."
                    icon={<Sparkles className="text-green-400"/>}
                />
                 <PrincipleCard 
                    title="O Princípio da Experiência Direta"
                    source="Centros Cósmicos (Dimensões Superiores)"
                    description="O verdadeiro conhecimento não é lido, mas experienciado. A sabedoria é transmitida por ressonância vibracional direta, não por texto."
                    icon={<BrainCircuit className="text-cyan-400"/>}
                />
            </div>
             <div className="mt-12">
                 <Link href="/module-306">
                    <Button variant="outline">Retornar ao Laboratório de Ressonância</Button>
                 </Link>
            </div>
        </div>
    );
}
