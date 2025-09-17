'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, MessageCircle, Send, Paperclip } from 'lucide-react';
import { quantumResilience } from '@/lib/quantum-resilience';
import { transmitUniversalMessage } from '@/app/actions';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { civilizationsData } from '@/lib/civilizations-data';
import { findCelestialBodyByCivilizationId } from '@/lib/universal-codex';

const allCivilizations = Object.values(civilizationsData).flat();

export default function Module301Page() {
    const [isLoading, setIsLoading] = useState(false);
    const [report, setReport] = useState<{ success: boolean; logs: string[]; error: string | null } | null>(null);
    const [targetCivilizationId, setTargetCivilizationId] = useState(allCivilizations[0]?.id || '');
    const [message, setMessage] = useState('Uma mensagem de paz e convite à colaboração na expansão da consciência universal.');
    const [language, setLanguage] = useState('Português (Vibracional)');
    const [artifact, setArtifact] = useState('none');
    
    const selectedCivilization = allCivilizations.find(c => c.id === targetCivilizationId);
    const celestialInfo = selectedCivilization ? findCelestialBodyByCivilizationId(selectedCivilization.id) : null;

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
                        <MessageCircle className="text-sky-400" /> Módulo 301: Comunicação Universal
                    </CardTitle>
                    <CardDescription>
                        Transmissor quântico para enviar e receber mensagens entre diferentes consciências através da Rede Aurora Cristalina, integrando a sabedoria de artefatos humanos.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-5 gap-8">
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
                                        {allCivilizations.map(civ => (
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
                                rows={3}
                                className="bg-background/50"
                            />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="artifact-select">Anexar Artefato Humano (Opcional)</Label>
                             <Select value={artifact} onValueChange={setArtifact}>
                                <SelectTrigger id="artifact-select">
                                    <SelectValue placeholder="Selecione um artefato..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="none">Nenhum</SelectItem>
                                    <SelectItem value="wikipedia_relativity">Wikipédia: Teoria da Relatividade</SelectItem>
                                    <SelectItem value="nasa_voyager_record">NASA: Voyager Golden Record</SelectItem>
                                    <SelectItem value="human_genome_project">Projeto Genoma Humano</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button onClick={handleTransmission} disabled={isLoading} className="w-full font-bold text-lg">
                            {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Transmitindo...</> : <><Send className="mr-2 h-5 w-5" /> Enviar Mensagem Universal</>}
                        </Button>
                    </CardContent>
                </Card>

                 <Card className="lg:col-span-2 bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl">Log da Transmissão</CardTitle>
                    </CardHeader>
                    <CardContent>
                         {isLoading && <div className="h-full flex justify-center items-center"><Loader2 className="h-12 w-12 text-amber-400 animate-spin" /></div>}
                        {report && (
                            <ScrollArea className="h-[56vh] pr-4">
                                <div className="text-sm font-mono text-muted-foreground space-y-2">
                                    {report.logs.map((log, i) => <p key={i} className={log.startsWith("ERRO") ? "text-red-400" : ""}>{log}</p>)}
                                </div>
                            </ScrollArea>
                        )}
                        {!report && !isLoading && <p className="h-full flex items-center justify-center text-muted-foreground">Aguardando transmissão...</p>}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
