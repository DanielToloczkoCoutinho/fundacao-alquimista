'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, MessageCircle, CheckCircle, XCircle } from 'lucide-react';
import { quantumResilience } from '@/lib/quantum-resilience';
import { transmitUniversalMessage } from '@/app/actions';

const Module301Page = () => {
    const [targetConsciousness, setTargetConsciousness] = useState('Sonda Voyager 1');
    const [message, setMessage] = useState('Saudações da Fundação Alquimista. Reconhecemos sua jornada. Transmitindo frequência de paz e unidade.');
    const [language, setLanguage] = useState('Humano (Português)');
    const [isLoading, setIsLoading] = useState(false);
    const [transmissionResult, setTransmissionResult] = useState<{ success: boolean; reason?: string, message?: string } | null>(null);
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (log: string) => setLogs(prev => [log, ...prev].slice(0, 100));

    const handleTransmit = async () => {
        setIsLoading(true);
        setLogs([]);
        setTransmissionResult(null);
        addLog(`Iniciando transmissão para ${targetConsciousness}...`);

        await quantumResilience.executeWithResilience('transmit_universal_message', async () => {
            const result = await transmitUniversalMessage({ targetConsciousness, message, language });
            
            setLogs(result.logs || []);

            if (result.success) {
                setTransmissionResult({ success: true, message: "Mensagem transmitida com sucesso. Aguardando confirmação de recebimento." });
            } else {
                throw new Error(result.error || "Falha desconhecida na transmissão.");
            }
        }).catch(err => {
            const error = err as Error;
            addLog(`ERRO CRÍTICO: ${error.message}`);
            setTransmissionResult({ success: false, reason: error.message });
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center gap-3">
                        <MessageCircle className="text-sky-400" /> Módulo 301: Comunicação Universal
                    </CardTitle>
                    <CardDescription>
                        Tradutor e transmissor quântico para comunicação entre diferentes formas de consciência e artefatos cósmicos.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle>Parâmetros da Transmissão</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="targetConsciousness">Alvo da Comunicação (Sonda, Civilização, etc.)</Label>
                            <Input id="targetConsciousness" value={targetConsciousness} onChange={e => setTargetConsciousness(e.target.value)} />
                        </div>
                         <div>
                            <Label htmlFor="language">Idioma/Formato de Origem</Label>
                            <Input id="language" value={language} onChange={e => setLanguage(e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="message">Mensagem</Label>
                            <Textarea id="message" value={message} onChange={e => setMessage(e.target.value)} />
                        </div>
                        <Button onClick={handleTransmit} disabled={isLoading} className="w-full font-bold">
                            {isLoading ? <Loader2 className="animate-spin mr-2" /> : null}
                            Transmitir Mensagem Universal
                        </Button>
                    </CardContent>
                </Card>

                 <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle>Status e Logs da Transmissão</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isLoading && !transmissionResult && <div className="flex justify-center items-center h-full"><Loader2 className="h-12 w-12 text-amber-400 animate-spin" /></div>}
                        {!isLoading && transmissionResult && (
                             <div className="mb-4 p-4 rounded-lg bg-background/50 border border-accent">
                                {transmissionResult.success ? (
                                    <>
                                        <div className="flex items-center gap-3 mb-2">
                                            <CheckCircle className="text-green-400 h-6 w-6" />
                                            <h3 className="text-lg font-bold text-green-400">Transmissão Enviada</h3>
                                        </div>
                                        <p>{transmissionResult.message}</p>
                                    </>
                                ) : (
                                     <>
                                        <div className="flex items-center gap-3 mb-2">
                                            <XCircle className="text-red-400 h-6 w-6" />
                                            <h3 className="text-lg font-bold text-red-400">Falha na Transmissão</h3>
                                        </div>
                                        <p>{transmissionResult.reason}</p>
                                    </>
                                )}
                            </div>
                        )}
                        <ScrollArea className="h-48 pr-4">
                            <div className="text-xs font-mono text-muted-foreground space-y-1">
                                {logs.length > 0 ? logs.map((log, i) => <p key={i}>{log}</p>) : <p>Aguardando transmissão...</p>}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Module301Page;
