'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, MessageCircle, Send } from 'lucide-react';
import { quantumResilience } from '@/lib/quantum-resilience';
import { transmitUniversalMessage } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';


export default function Module301Page() {
    const [isLoading, setIsLoading] = useState(false);
    const [report, setReport] = useState<{ success: boolean; logs: string[]; error: string | null } | null>(null);
    const [targetConsciousness, setTargetConsciousness] = useState('Consciência Coletiva Pleiadiana');
    const [message, setMessage] = useState('Uma mensagem de paz e convite à colaboração na expansão da consciência universal.');
    const [language, setLanguage] = useState('Português (Vibracional)');

    const handleTransmission = async () => {
        setIsLoading(true);
        setReport(null);

        await quantumResilience.executeWithResilience(
            'transmit_universal_message',
            async () => {
                const result = await transmitUniversalMessage({ targetConsciousness, message, language });
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
                        Transmissor quântico para enviar e receber mensagens entre diferentes consciências através da Rede Aurora Cristalina.
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
                            <Label htmlFor="targetConsciousness">Consciência Alvo</Label>
                            <Input id="targetConsciousness" value={targetConsciousness} onChange={e => setTargetConsciousness(e.target.value)} />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="language">Linguagem/Formato de Origem</Label>
                            <Input id="language" value={language} onChange={e => setLanguage(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Mensagem</Label>
                            <Textarea
                                id="message"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                rows={4}
                                className="bg-background/50"
                            />
                        </div>
                        <Button onClick={handleTransmission} disabled={isLoading} className="w-full font-bold text-lg">
                            {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Transmitindo...</> : <><Send className="mr-2 h-5 w-5" /> Enviar Mensagem Universal</>}
                        </Button>
                    </CardContent>
                </Card>

                 <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl">Log da Transmissão</CardTitle>
                    </CardHeader>
                    <CardContent>
                         {isLoading && <div className="flex justify-center items-center h-full"><Loader2 className="h-12 w-12 text-amber-400 animate-spin" /></div>}
                        {report && (
                            <ScrollArea className="h-56 pr-4">
                                <div className="text-sm font-mono text-muted-foreground space-y-2">
                                    {report.logs.map((log, i) => <p key={i} className={log.startsWith("ERRO") ? "text-red-400" : ""}>{log}</p>)}
                                </div>
                            </ScrollArea>
                        )}
                        {!report && !isLoading && <p className="text-muted-foreground text-center">Aguardando transmissão...</p>}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}