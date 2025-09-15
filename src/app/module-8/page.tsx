'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Fingerprint, UserCheck, PlusCircle } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { didManager } from '@/lib/services/did-service';

// Mocked issueVerifiableCredential since the original is a server action
// and we need to simulate the client-side flow.
async function issueCredentialClient(subjectDid: string, type: string[], claims: any) {
    const response = await fetch('/api/did/issue/credential', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            subjectDid,
            credentialType: type,
            claims
        })
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Falha na emissão da credencial');
    }
    return await response.json();
}

const IdentityCard = ({ did, vc }: { did: any, vc: any }) => (
    <Card className="bg-background/40">
        <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 truncate">
                <UserCheck className="text-cyan-400 shrink-0" />
                <span className="truncate" title={did.id}>{did.id}</span>
            </CardTitle>
            <CardDescription>Credencial: {vc.type.find((t: string) => t !== 'VerifiableCredential')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
            <p><span className="font-semibold">Emitido em:</span> {new Date(vc.issuanceDate).toLocaleString()}</p>
            <p><span className="font-semibold">Permissões:</span> {vc.credentialSubject.permissions.join(', ')}</p>
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
            // Em uma implementação real, o userID viria de uma sessão autenticada
            // e a assinatura do desafio WebAuthn ocorreria aqui.
            const userID = `guardian:${Date.now()}`;
            const didDocument = await didManager.create('web', `alquimista.foundation:${userID}`);

            const vc = await issueCredentialClient(
              didDocument.id, 
              ['GuardianCredential'], 
              {
                permissions: ['access_core_modules', 'execute_rituals'],
                level: 'Archon'
              }
            );

            setIdentities(prev => [{ did: didDocument, vc }, ...prev]);
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
                <h1 className="text-5xl font-bold gradient-text">Módulo Oito — Identidade Fractal</h1>
                <p className="mt-2 text-lg text-muted-foreground">O Santuário da Alma Soberana e o registro de Credenciais Verificáveis.</p>
            </header>

            <div className="max-w-7xl mx-auto">
                 <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <CardTitle className="text-2xl text-amber-300">Registro de Identidades Soberanas</CardTitle>
                            <Button onClick={handleIssueCredential} disabled={isLoading}>
                                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : <PlusCircle className="mr-2 h-4 w-4" />}
                                Emitir Nova Credencial de Guardião
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                         <ScrollArea className="h-[60vh] pr-4">
                            {identities.length === 0 && !isLoading ? (
                                <div className="flex items-center justify-center h-full text-center text-muted-foreground">
                                    <p>Nenhuma identidade emitida ainda.<br/>Clique em "Emitir Nova Credencial" para consagrar a primeira alma soberana.</p>
                                </div>
                            ) : (
                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {identities.map((id, index) => (
                                        <IdentityCard key={index} did={id.did} vc={id.vc} />
                                    ))}
                                    {isLoading && <div className="flex items-center justify-center h-48 col-span-full"><Loader2 className="h-12 w-12 text-amber-400 animate-spin"/></div>}
                                </div>
                            )}
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
