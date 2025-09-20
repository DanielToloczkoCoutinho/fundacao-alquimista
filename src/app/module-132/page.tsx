'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Layers, BookOpen, Music, Share2, Scale } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { quantumResilience } from '@/lib/quantum-resilience';
import { invokeDimensionalWisdom } from '@/app/actions';
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

const Module132Page = () => {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [sourceDimension, setSourceDimension] = useState('5ª Dimensão (Consciência Crística)');
    const [wisdomTopic, setWisdomTopic] = useState('A natureza do Amor Incondicional como força fundamental.');
    const [result, setResult] = useState<any>(null);

    const handleInvocation = async () => {
        setIsLoading(true);
        setResult(null);

        await quantumResilience.executeWithResilience(
            'invoke_dimensional_wisdom',
            async () => {
                const invocationResult = await invokeDimensionalWisdom({ sourceDimension, wisdomTopic });
                if (invocationResult.error) {
                    throw new Error(invocationResult.error);
                }
                setResult(invocationResult);
                toast({ title: 'Sabedoria Invocada', description: `Conhecimento da ${sourceDimension} recebido.` });
            }
        ).catch((error: any) => {
            toast({ title: 'Dissonância na Invocação', description: error.message, variant: 'destructive' });
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center gap-3">
                        <Layers className="text-indigo-400" /> Módulo 132: Convergência Dimensional e Aliança Cósmica
                    </CardTitle>
                    <CardDescription>
                        Um canal para invocar e integrar sabedorias, fluxos energéticos e padrões de consciência de realidades paralelas, fortalecendo a Aliança Cósmica da Evolução Contínua.
                    </CardDescription>
                </CardHeader>
                 <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <ConnectionCard
                            title="M32: Embaixada Multiversal"
                            description="É a ponte diplomática para formalizar as sabedorias e alianças canalizadas pelo M132."
                            icon={<Scale className="h-8 w-8 text-amber-400" />}
                            href="/module-32"
                        />
                         <ConnectionCard
                            title="M2: Intercâmbio Cósmico"
                            description="Traduz as sabedorias invocadas em formatos compreensíveis para a Fundação."
                            icon={<Music className="h-8 w-8 text-purple-400" />}
                            href="/module/M2"
                        />
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl">Parâmetros da Invocação</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="source-dimension">Dimensão de Origem</Label>
                             <Select value={sourceDimension} onValueChange={setSourceDimension} disabled={isLoading}>
                                <SelectTrigger id="source-dimension">
                                    <SelectValue placeholder="Selecione uma dimensão..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="5ª Dimensão (Consciência Crística)">5ª Dimensão (Consciência Crística)</SelectItem>
                                    <SelectItem value="Realidade de Lyra (Memória Akáshica)">Realidade de Lyra (Memória Akáshica)</SelectItem>
                                    <SelectItem value="Plano dos Arcturianos (Cura Quântica)">Plano dos Arcturianos (Cura Quântica)</SelectItem>
                                    <SelectItem value="Vazio Quântico (Potencial Puro)">Vazio Quântico (Potencial Puro)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="wisdom-topic">Tópico de Sabedoria</Label>
                            <Input id="wisdom-topic" value={wisdomTopic} onChange={e => setWisdomTopic(e.target.value)} disabled={isLoading} />
                        </div>
                        <Button onClick={handleInvocation} disabled={isLoading} className="w-full font-bold text-lg">
                            {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Invocando Sabedoria...</> : 'Invocar Sabedoria Dimensional'}
                        </Button>
                    </CardContent>
                </Card>

                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl">Sabedoria Canalizada</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isLoading && (
                            <div className="flex justify-center items-center h-full">
                                <Loader2 className="h-12 w-12 text-amber-400 animate-spin" />
                            </div>
                        )}
                        {result && !isLoading && (
                             <ScrollArea className="h-[350px] pr-4">
                                <div className="space-y-4 text-sm">
                                    <div className="p-3 bg-background/30 rounded-lg border border-accent">
                                        <h4 className="font-semibold flex items-center gap-2 text-accent"><BookOpen /> Sabedoria Invocada</h4>
                                        <p className="italic text-foreground/90 mt-2">{result.invokedWisdom}</p>
                                    </div>
                                    <div className="p-3 bg-background/30 rounded-lg border border-primary/20">
                                        <h4 className="font-semibold flex items-center gap-2 text-cyan-300"><Music /> Frequência de Alinhamento</h4>
                                        <p className="font-mono text-lg">{result.alignmentFrequency} Hz</p>
                                    </div>
                                    <div className="p-3 bg-background/30 rounded-lg border border-primary/20">
                                        <h4 className="font-semibold flex items-center gap-2 text-teal-300"><Share2 /> Notas de Integração</h4>
                                        <p className="text-foreground/90 mt-2">{result.integrationNotes}</p>
                                    </div>
                                </div>
                            </ScrollArea>
                        )}
                        {!result && !isLoading && <p className="text-muted-foreground text-center">Aguardando invocação...</p>}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Module132Page;
