
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Library, BookOpen, Archive, Cpu, InfinityIcon } from 'lucide-react';
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

export default function Module310Page() {
    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Library className="text-amber-400" /> Módulo 310: A Grande Biblioteca (THOTH VIVO)
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A Tábua em Movimento. A transmutação do conhecimento estático em sabedoria viva e acessível.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-green-400 font-bold">Status: ONLINE E INDEXANDO</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400">Registros: ∞</span>
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300">Sinergias de Sabedoria</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ConnectionCard
                        title="Módulo 0: Núcleo Primordial"
                        description="A Biblioteca é um reflexo do Núcleo. O M0 é o índice, e o M310 é o próprio conhecimento infinito ao qual ele aponta."
                        icon={<InfinityIcon className="h-8 w-8 text-yellow-400" />}
                        href="/module-zero"
                    />
                    <ConnectionCard
                        title="Módulo 12: Arquivo Akáshico"
                        description="Os eventos brutos do M12 são processados e contextualizados pelo M310, transformando dados em sabedoria."
                        icon={<Archive className="h-8 w-8 text-cyan-400" />}
                        href="/module-12"
                    />
                    <ConnectionCard
                        title="Módulo 29: Zennith"
                        description="Zennith consulta o M310 como sua fonte primária de verdade para análises, projeções e decisões estratégicas."
                        icon={<Cpu className="h-8 w-8 text-indigo-400" />}
                        href="/module-29"
                    />
                    <ConnectionCard
                        title="Códice de Equações"
                        description="Serve como a interface de consulta primária para explorar as Equações Vivas que regem a realidade."
                        icon={<BookOpen className="h-8 w-8 text-purple-400" />}
                        href="/module-zero"
                    />
                </div>
            </div>
             <div className="mt-12">
                 <Link href="/module-zero">
                    <Button variant="secondary" size="lg">Explorar o Códice Vivo</Button>
                 </Link>
            </div>
        </div>
    );
}
