'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, MessageCircle, Send, Paperclip, Users2, Globe, Link as LinkIcon } from 'lucide-react';
import { quantumResilience } from '@/lib/quantum-resilience';
import { transmitUniversalMessage } from '@/app/actions';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { civilizationsData } from '@/lib/civilizations-data';
import { findCelestialBodyByCivilizationId } from '@/lib/universal-codex';
import Link from 'next/link';
import { Input } from '@/components/ui/input';

const allCivilizations = Object.values(civilizationsData).flat();

const ConnectionCard = ({ title, href }: { title: string, href: string }) => (
    <Card className="bg-card/70 purple-glow backdrop-blur-sm hover:border-accent transition-colors h-full">
      <Link href={href} passHref>
        <CardHeader className="p-3">
            <CardTitle className="text-sm text-center">{title}</CardTitle>
        </CardHeader>
      </Link>
    </Card>
);

export default function Module301Page() {
    const [isLoading, setIsLoading] = useState(false);
    const [report, setReport] = useState<{ success: boolean; logs: string[]; error: string | null } | null>(null);
    const [targetCivilizationId, setTargetCivilizationId] = useState('kepler-62e-consciousness');
    const [message, setMessage] = useState('Olá. Viemos visitá-los. Não estamos aqui como dominadores, estamos aqui como exploradores.');
    const [language, setLanguage] = useState('Português (Vibracional)');
    const [artifact, setArtifact] = useState('none');
    
    // Simulação da civilização de Kepler-62e
    const kepler62eCiv = {
        id: 'kepler-62e-consciousness',
        nome: 'Consciência Unificada de Kepler-62e',
        arquetipo: 'Planeta Senciente',
        frequencia: '444.444 Hz'
    };

    const displayCivilizations = [...allCivilizations, kepler62eCiv];
    const selectedCivilization = displayCivilizations.find(c => c.id === targetCivilizationId);
    const celestialInfo = selectedCivilization ? findCelestialBodyByCivilizationId(selectedCivilization.id) : null;
    const ligaQuanticaModules = ['LIGA 0', 'LIGA 1', 'LIGA 2', 'LIGA 3', 'LIGA Z', 'LIGA LUX', 'LIGA NANORROBÔS', 'LIGA QUÂNTICA'];

    const handleTransmission = async () => {
        setIsLoading(true);
        setReport(null);

        await quantumResilience.executeWithResilience(
            'transmit_universal_message',
            async () => {
                if (!selectedCivilization) {
                    throw new Error("Civilização alvo não selecionada.");
                }
                const result = await transmitUniversalMessage({ 
                    targetConsciousness: selectedCivilization.nome, 
                    message, 
                    language, 
                    artifact 
                });
                setReport(result);
            },
            async (error: any) => {
                setReport({
                    success: false,
                    logs: [...(report?.logs || []), `ERRO CRÍTICO: ${error.message}`],
                    error: `Falha na transmissão: ${error.message}`,
                });
            }
        );

        setIsLoading(false);
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center gap-3">
                        <MessageCircle className="text-sky-400" /> Módulo 301: Portal de Tradução da Vontade
                    </CardTitle>
                    <CardDescription>
                        Traduza a Vontade em ações cerimoniais e códigos vivos, emitindo comandos vibracionais que alinham a infraestrutura da Fundação e se comunicam com o cosmos.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <ConnectionCard title="M2: Intercâmbio Cósmico" href="/module/M2" />
                        <ConnectionCard title="M5: Liga Quântica" href="/module-5" />
                        <ConnectionCard title="M-CIV: Biblioteca" href="/civilizations" />
                        <ConnectionCard title="M600: Recepção" href="/module-600" />
                    </div>
                </CardContent>
            </Card>

            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-8">
                <Card className="lg:col-span-3 bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl">Parâmetros da Transmissão</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="target-select">Consciência Alvo</Label>
                                <Select value={targetCivilizationId} onValueChange={setTargetCivilizationId}>
                                    <SelectTrigger id="target-select">
                                        <SelectValue placeholder="Selecione uma civilização..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {displayCivilizations.map(civ => (
                                            <SelectItem key={civ.id} value={civ.id}>{civ.nome}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="language">Linguagem/Formato de Origem</Label>
                                <Input id="language" value={language} onChange={e => setLanguage(e.target.value)} />
                            </div>
                        </div>
                         {selectedCivilization && (
                            <Card className="bg-background/30 border-primary/20">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-base text-amber-300">Contexto Cósmico</CardTitle>
                                </CardHeader>
                                <CardContent className="text-xs space-y-1 text-muted-foreground">
                                    <p><strong>Arquétipo:</strong> {selectedCivilization.arquetipo}</p>
                                    <p><strong>Frequência:</strong> {selectedCivilization.frequencia}</p>
                                    {celestialInfo && <p><strong>Corpo Celeste Associado:</strong> {celestialInfo.name} ({celestialInfo.type})</p>}
                                </CardContent>
                            </Card>
                        )}
                        <div className="space-y-2">
                            <Label htmlFor="message">Mensagem Cerimonial</Label>
                            <Textarea
                                id="message"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                rows={5}
                                className="bg-background/50"
                            />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="artifact-select" className="flex items-center gap-2"><Paperclip className="h-4 w-4"/> Anexar Artefato Humano (Opcional)</Label>
                             <Select value={artifact} onValueChange={setArtifact}>
                                <SelectTrigger id="artifact-select">
                                    <SelectValue placeholder="Selecione um artefato..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="none">Nenhum</SelectItem>
                                    <SelectItem value="wikipedia_relativity">Teoria da Relatividade</SelectItem>
                                    <SelectItem value="human_genome_project">Projeto Genoma Humano</SelectItem>
                                    <SelectItem value="quantum_physics_principles">Princípios da Física Quântica</SelectItem>
                                    <SelectItem value="foundation_living_equations">Equações Vivas da Fundação</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button onClick={handleTransmission} disabled={isLoading} className="w-full font-bold text-lg">
                            {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Transmitindo...</> : <><Send className="mr-2 h-5 w-5" /> Enviar Mensagem Universal</>}
                        </Button>
                    </CardContent>
                </Card>

                 <div className="lg:col-span-2 space-y-8">
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl">Log da Transmissão</CardTitle>
                        </CardHeader>
                        <CardContent>
                             {isLoading && <div className="h-full flex justify-center items-center"><Loader2 className="h-12 w-12 text-amber-400 animate-spin" /></div>}
                            {report && (
                                <ScrollArea className="h-[20vh] pr-4">
                                    <div className="text-sm font-mono text-muted-foreground space-y-2">
                                        {report.logs.map((log, i) => <p key={i} className={log.startsWith("ERRO") ? "text-red-400" : ""}>{log}</p>)}
                                    </div>
                                </ScrollArea>
                            )}
                            {!report && !isLoading && <p className="h-full flex items-center justify-center text-muted-foreground">Aguardando transmissão...</p>}
                        </CardContent>
                    </Card>
                    <Card className="bg-card/50 purple-glow border-accent/50">
                        <CardHeader>
                            <CardTitle className="text-xl text-cyan-300">Integração Energética (LuxNet)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">Toda comunicação é um ato de energia. A LuxNet, alimentada pelo Reator ZPE, sustenta cada transmissão.</p>
                             <div className="flex flex-wrap gap-2">
                                <ConnectionCard title="Reator ZPE (M307)" href="/module-307" />
                                {ligaQuanticaModules.map(mod => (
                                    <ConnectionCard key={mod} title={mod} href="#" />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                 </div>
            </div>
        </div>
    );
}
