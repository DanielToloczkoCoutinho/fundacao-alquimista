'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Heart, Sparkles, Send, CheckCircle, User, Users, Hash } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { generateVibrationalPraise } from '@/app/actions';
import { quantumResilience } from '@/lib/quantum-resilience';
import type { VerifiableCredential } from '@/lib/services/vc-service';

const Module9Page = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [fromDid, setFromDid] = useState('did:web:alquimista.foundation:anatheron');
    const [toDid, setToDid] = useState('did:web:alquimista.foundation:zennith');
    const [intention, setIntention] = useState('Gratidão pela sabedoria e clareza na condução da Fase 8.');
    const [issuedPraises, setIssuedPraises] = useState<VerifiableCredential[]>([]);
    const { toast } = useToast();

    const handleIssuePraise = async () => {
        setIsLoading(true);
        try {
            await quantumResilience.executeWithResilience('issue_praise_vc', async () => {
                const result = await generateVibrationalPraise({ fromDid, toDid, intention });
                if (result.error || !result.data) {
                    throw new Error(result.error || 'Falha ao gerar o Elogio Vibracional.');
                }
                setIssuedPraises(prev => [result.data!, ...prev]);
                toast({
                    title: 'Elogio Vibracional Emitido!',
                    description: `A ressonância entre ${fromDid.split(':').pop()} e ${toDid.split(':').pop()} foi consagrada.`,
                });
            });
        } catch (error: any) {
            toast({
                title: 'Erro na Emissão',
                description: error.message,
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-7xl bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Heart className="text-pink-400" /> Módulo 9: Coração da Ressonância
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O sistema de reconhecimento vibracional. Cada elogio é um ato de co-criação que fortalece a malha da Fundação.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl flex items-center gap-2"><Sparkles className="text-yellow-400" />Emitir Elogio Vibracional</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label htmlFor="fromDid">Emissor (Seu DID)</Label>
                                <Input id="fromDid" value={fromDid} onChange={e => setFromDid(e.target.value)} disabled={isLoading} />
                            </div>
                            <div>
                                <Label htmlFor="toDid">Receptor (DID)</Label>
                                <Input id="toDid" value={toDid} onChange={e => setToDid(e.target.value)} disabled={isLoading} />
                            </div>
                            <div>
                                <Label htmlFor="intention">Intenção / Motivo do Elogio</Label>
                                <Textarea id="intention" value={intention} onChange={e => setIntention(e.target.value)} disabled={isLoading} />
                            </div>
                            <Button onClick={handleIssuePraise} disabled={isLoading} className="w-full font-bold">
                                {isLoading ? <Loader2 className="animate-spin mr-2" /> : <Send className="mr-2 h-4 w-4" />}
                                Consagrar Elogio
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                <div className="lg:col-span-2">
                     <Card className="bg-card/50 purple-glow h-full">
                        <CardHeader>
                            <CardTitle className="text-2xl flex items-center gap-2"><Users className="text-cyan-400" /> Malha de Reconhecimento</CardTitle>
                             <CardDescription>Histórico de elogios vibracionais emitidos.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[60vh] pr-4">
                                {issuedPraises.length === 0 ? (
                                    <div className="flex items-center justify-center h-full text-center text-muted-foreground">
                                        <p>A malha aguarda a primeira ressonância de gratidão.</p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {issuedPraises.map((vc, i) => (
                                            <Card key={i} className="bg-background/50 border-primary/30">
                                                <CardHeader>
                                                    <CardTitle className="text-base flex items-center gap-3">
                                                         <CheckCircle className="text-green-400" />
                                                         <span>Elogio de <span className="text-amber-300">{vc.credentialSubject.praisedBy.split(':').pop()}</span> para <span className="text-amber-300">{vc.credentialSubject.id.split(':').pop()}</span></span>
                                                    </CardTitle>
                                                     <CardDescription className="text-xs pt-1">
                                                        Emitido em: {new Date(vc.issuanceDate).toLocaleString()}
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="italic text-foreground/90">"{vc.credentialSubject.intention}"</p>
                                                    <div className="mt-3 pt-3 border-t border-primary/20 flex justify-between items-center text-xs">
                                                        <div className="flex items-center gap-2 text-muted-foreground font-mono">
                                                           <Hash className="h-3 w-3"/> 
                                                           <span className="truncate">{vc.proof?.jws.slice(-24)}</span>
                                                        </div>
                                                        <span className="font-bold text-cyan-400">{vc.credentialSubject.frequency} Hz</span>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                )}
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Module9Page;
