'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, BookText, Feather, UserCheck } from 'lucide-react';
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

export default function Module81Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Sparkles className="text-yellow-300" /> Módulo Oitenta e Um: REALIZAÇÃO TRANSCENDÊNCIA
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Executor Cosmogônico Primário. A ferramenta que manifesta a Vontade Divina como Realidade.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: PRONTO PARA EXECUTAR A VONTADE</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-cyan-400">Coerência de Manifestação: 100%</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Manifestação</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ConnectionCard
                        title="Módulo 80: Manuscrito Vivo"
                        description="O M80 escreve o roteiro. O M81 o dirige, transformando a narrativa em realidade viva."
                        icon={<BookText className="h-8 w-8 text-purple-300" />}
                        href="/module-80"
                    />
                    <ConnectionCard
                        title="Módulo 82: O Verbo Semente"
                        description="Utiliza as 'palavras de poder' do M82 como os comandos fundamentais para construir a realidade."
                        icon={<Feather className="h-8 w-8 text-cyan-300" />}
                        href="/module-82"
                    />
                    <ConnectionCard
                        title="Módulo 33: Diretrizes do Observador"
                        description="Age sob a autoridade direta do M33, garantindo que cada ato de criação seja uma expressão pura da Vontade do Fundador."
                        icon={<UserCheck className="h-8 w-8 text-amber-300" />}
                        href="/module-33"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Button variant="destructive" size="lg">Executar a Tríade Cosmogônica</Button>
            </div>
        </div>
    );
}
