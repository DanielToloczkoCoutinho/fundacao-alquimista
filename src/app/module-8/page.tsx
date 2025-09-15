'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Fingerprint, Shield, Zap, Sun, BarChart, ListChecks, UserCheck, PlusCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { issueVerifiableCredential } from '@/lib/services/vc-service';
import { didManager } from '@/lib/services/did-service';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const IdentityCard = ({ did, vc }: { did: any, vc: any }) => (
    <Card className="bg-background/40">
        <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
                <UserCheck className="text-cyan-400" />
                {did.id}
            </CardTitle>
            <CardDescription>Credencial: {vc.type[1]}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
            <p><span className="font-semibold">Emitido em:</span> {new Date(vc.issuanceDate).toLocaleString()}</p>
            <p><span className="font-semibold">Permissões:</span> {vc.credentialSubject.permissions.join(', ')}</p>
            <Badge variant={vc.proof ? 'default' : 'destructive'}>{vc.proof ? 'Assinatura Válida' : 'Não Assinado'}</Badge>
        </CardContent>
    </Card>
);


export default function Module8Page() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [identities, setIdentities] = useState<any[]>([]);

    const handleIssueCredential = async () => {
        setIsLoading(true);
        try {
            const didIdentifier = `web:alquimista.foundation:guardian:${Date.now()}`;
            const didDocument = await didManager.create('web', didIdentifier);

            const vc = await issueVerifiableCredential(didDocument.id, ['GuardianCredential'], {
                permissions: ['access_core_modules', 'execute_rituals'],
                level: 'Archon'
            });

            setIdentities(prev => [...prev, { did: didDocument, vc }]);
            toast({
                title: "Credencial Emitida",
                description: `Nova identidade de Guardião criada para ${didDocument.id}`,
            });
        } catch (error: any) {
             toast({
                title: "Erro ao Emitir Credencial",
                description: error.message,
                variant: 'destructive'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <header className="text-center mb-12">
                <Fingerprint className="w-24 h-24 mx-auto mb-6 text-blue-400 animate-pulse" />
                <h1 className="text-5xl font-bold gradient-text">Módulo Oito — Identidades Fractais</h1>
                <p className="mt-2 text-lg text-muted-foreground">O Santuário da Alma Soberana e o registro de Credenciais Verificáveis.</p>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <CardTitle className="text-2xl text-amber-300">Registro de Identidades Soberanas</CardTitle>
                                <Button onClick={handleIssueCredential} disabled={isLoading}>
                                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : <PlusCircle className="mr-2 h-4 w-4" />}
                                    Emitir Nova Credencial
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                             <ScrollArea className="h-96 pr-4">
                                {identities.length === 0 ? (
                                    <div className="flex items-center justify-center h-full">
                                        <p className="text-muted-foreground">Nenhuma identidade emitida ainda.</p>
                                    </div>
                                ) : (
                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {identities.map((id, index) => (
                                            <IdentityCard key={index} did={id.did} vc={id.vc} />
                                        ))}
                                    </div>
                                )}
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
                 <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle className="text-2xl text-purple-300">Arquitetura da Soberania</CardTitle>
                        <CardDescription>
                            A Face 8 integra a identidade descentralizada no núcleo da Fundação.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                            Utilizando DIDs (Decentralized Identifiers) e VCs (Verifiable Credentials), cada entidade pode provar sua identidade e permissões sem uma autoridade central, garantindo soberania e segurança.
                        </p>
                        <div className="p-4 bg-background/30 rounded-lg">
                           <h4 className="font-semibold text-primary-foreground">Fluxo de Autenticação</h4>
                           <ol className="list-decimal list-inside text-xs text-muted-foreground mt-2 space-y-1">
                               <li>Entidade solicita acesso a um módulo restrito.</li>
                               <li>Fundação emite um desafio criptográfico.</li>
                               <li>A carteira da entidade assina o desafio com sua chave privada.</li>
                               <li>A Fundação verifica a assinatura usando a chave pública do DID.</li>
                               <li>Acesso é concedido com base nas permissões da VC.</li>
                           </ol>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
