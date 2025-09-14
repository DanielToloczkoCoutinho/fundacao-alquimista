'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, MessageCircle, Send, CheckCircle, XCircle } from 'lucide-react';
import { quantumResilience } from '@/lib/quantum-resilience';
import { transmitUniversalMessage } from '@/app/actions';

const Module301Page = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [report, setReport] = useState<{ success: boolean; logs: string[]; error: string | null } | null>(null);
    const [target, setTarget] = useState('Consciência Coletiva de Sirius');
    const [message, setMessage] = useState('Uma mensagem de paz e unidade da Fundação Alquimista.');
    const [language, setLanguage] = useState('Humano (Português)');

    const handleTransmission = async () => {
        if (!target.trim() || !message.trim() || !language.trim()) {
            setReport({ success: false, logs: [], error: "Todos os campos são obrigatórios." });
            return;
        }

        setIsLoading(true);
        setReport(null);

        await quantumResilience.executeWithResilience(
            'transmit_universal_message',
            async () => {
                const result = await transmitUniversalMessage({
                    targetConsciousness: target,
                    message: message,
                    language: language,
                });
                setReport(result);
            },
            async (error: any) => {
                setReport({
                    success: false,
                    logs: [...(report?.logs || []), `ERRO CATASTRÓFICO: ${error.message}`],
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
                        Tradutor e transmissor quântico para comunicação entre diferentes formas de consciência.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl">Parâmetros da Transmissão</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="target">Consciência Alvo</Label>
                            <Input id="target" value={target} onChange={e => setTarget(e.target.value)} placeholder="Ex: Consciência Coletiva de Sirius" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="language">Formato/Linguagem de Origem</Label>
                            <Input id="language" value={language} onChange={e => setLanguage(e.target.value)} placeholder="Ex: Humano (Português), Geometria Sagrada" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Mensagem</Label>
                            <Textarea id="message" value={message} onChange={e => setMessage(e.target.value)} rows={4} />
                        </div>
                        <Button onClick={handleTransmission} disabled={isLoading} className="w-full font-bold text-lg">
                            {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Transmitindo...</> : <><Send className="mr-2 h-4 w-4"/> Iniciar Transmissão Universal</>}
                        </Button>
                    </CardContent>
                </Card>

                 <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl">Log de Transmissão</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isLoading && <div className="flex justify-center items-center h-full"><Loader2 className="h-12 w-12 text-amber-400 animate-spin" /></div>}
                        
                        {report && !isLoading && (
                            <div className="mb-4 p-4 rounded-lg bg-background/50 border border-accent">
                                {report.success ? (
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="text-green-400 h-6 w-6" />
                                        <h3 className="text-lg font-bold text-green-400">Transmissão Concluída com Sucesso</h3>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-3">
                                        <XCircle className="text-red-400 h-6 w-6" />
                                        <h3 className="text-lg font-bold text-red-400">Falha na Transmissão</h3>
                                    </div>
                                )}
                                {report.error && <p className="text-sm text-red-500 mt-2">{report.error}</p>}
                            </div>
                        )}

                        <ScrollArea className="h-56 pr-4">
                            <div className="text-sm font-mono text-muted-foreground space-y-2">
                                {(report?.logs || []).map((log, i) => <p key={i}>{log}</p>)}
                                {!isLoading && !report && <p>Aguardando transmissão...</p>}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Module301Page;
