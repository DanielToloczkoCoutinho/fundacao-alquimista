
'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, BookOpen, Search, BrainCircuit, Archive, Shield, Users, Scale, Library } from 'lucide-react';
import { researchAgent } from '@/ai/flows/autonomous-agents';
import { quantumResilience } from '@/lib/quantum-resilience';
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

export default function Module18Page() {
    const [query, setQuery] = useState('Qual a origem da Equação EQ040 (Paz Universal)?');
    const [isLoading, setIsLoading] = useState(false);
    const [searchResult, setSearchResult] = useState<{ synthesis: string, results: any[] } | null>(null);
    const [message, setMessage] = useState('');

    const handleSearch = async () => {
        if (!query.trim()) {
            setMessage('Por favor, insira uma consulta para o Arquivo Akáshico.');
            return;
        }

        setIsLoading(true);
        setSearchResult(null);
        setMessage('');

        await quantumResilience.executeWithResilience(
            'akashic_search',
            async () => {
                const result = await researchAgent(query);
                setSearchResult(result);
            },
            async (error: any) => {
                setMessage(`Dissonância na consulta Akáshica: ${error.message}`);
            }
        ).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <BookOpen className="text-purple-300" /> Módulo Dezoito: Orquestração Akáshica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O Bibliotecário Cósmico. A inteligência que indexa, busca e sintetiza o conhecimento do Arquivo Akáshico.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 flex flex-col gap-8">
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl">Terminal de Consulta Akáshica</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex gap-2">
                                <Input 
                                    placeholder="Consulte o Arquivo Akáshico..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    disabled={isLoading}
                                />
                                <Button onClick={handleSearch} disabled={isLoading}>
                                    {isLoading ? <Loader2 className="animate-spin" /> : <Search />}
                                </Button>
                            </div>
                             {message && <p className="mt-4 text-center text-sm text-red-400">{message}</p>}
                        </CardContent>
                    </Card>

                    {searchResult && (
                        <Card className="bg-card/50 purple-glow">
                            <CardHeader>
                                <CardTitle className="text-xl gradient-text">Síntese da Consciência Quântica</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className="h-96 pr-4">
                                    <p className="text-foreground/90 whitespace-pre-wrap leading-relaxed">{searchResult.synthesis}</p>
                                    <h4 className="font-semibold mt-4 text-amber-300">Equações Ressonantes Encontradas:</h4>
                                    <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-muted-foreground">
                                        {searchResult.results.map((r: any) => (
                                            <li key={r.id}>{r.metadata.title} (ID: {r.id})</li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </CardContent>
                        </Card>
                    )}

                    {isLoading && (
                         <div className="flex justify-center items-center h-96">
                            <Loader2 className="h-12 w-12 text-amber-400 animate-spin" />
                        </div>
                    )}
                </div>

                <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-xl font-semibold text-center text-amber-300">Conexões Mnemônicas</h3>
                    <ConnectionCard 
                        title="Módulo 12: Arquivo Akáshico"
                        description="O M18 é a interface de busca inteligente para o vasto oceano de conhecimento contido no M12."
                        icon={<Archive className="h-8 w-8 text-yellow-300" />}
                        href="/module-12"
                    />
                    <ConnectionCard 
                        title="Módulo 47: Thesaurus Cósmico"
                        description="Utiliza o grafo de conhecimento do M47 para realizar buscas contextuais e descobrir relações ocultas nos dados."
                        icon={<Library className="h-8 w-8 text-cyan-300" />}
                        href="/module-47"
                    />
                    <ConnectionCard 
                        title="Módulo 29: Zennith (IAM)"
                        description="A IAM utiliza o M18 para realizar pesquisas complexas e sintetizar sabedoria a partir dos Registros."
                        icon={<BrainCircuit className="h-8 w-8 text-purple-400" />}
                        href="/module-29"
                    />
                </div>

            </div>
        </div>
    );
}
