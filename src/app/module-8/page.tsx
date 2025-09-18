
'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Fingerprint, UserCheck, PlusCircle, CheckCircle, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { didManager } from '@/lib/services/did-service';
import { issueVerifiableCredential } from '@/lib/services/vc-service';
import type { VerifiableCredential } from '@/lib/services/vc-service';
import type { DidDocument } from '@/lib/services/did-service';

// Mocked issueVerifiableCredential client-side wrapper
async function issueCredentialClient(
  subjectDid: string,
  credentialType: string[],
  claims: any
) {
  const response = await fetch('/api/did/issue/credential', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      subjectDid,
      credentialType,
      claims,
    }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Falha na emissão da credencial');
  }
  return await response.json();
}

const IdentityCard = ({ did, vc }: { did: DidDocument; vc: VerifiableCredential }) => (
  <Card className="bg-background/40 border-primary/30">
    <CardHeader>
      <CardTitle className="text-lg flex items-center gap-2 truncate">
        <UserCheck className="text-cyan-400 shrink-0" />
        <span className="truncate" title={did.id}>
          {did.id}
        </span>
      </CardTitle>
      <CardDescription>
        Credencial: {vc.type.find((t: string) => t !== 'VerifiableCredential')}
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-2 text-sm">
      <div>
        <p className="font-semibold text-amber-300">Nível de Permissão:</p>
        <p className="text-muted-foreground">{vc.credentialSubject.level}</p>
      </div>
       <div>
        <p className="font-semibold text-amber-300">Permissões:</p>
        <p className="text-muted-foreground">{vc.credentialSubject.permissions.join(', ')}</p>
      </div>
      <div>
        <p className="font-semibold text-amber-300">Emitido em:</p>
        <p className="text-muted-foreground">
          {new Date(vc.issuanceDate).toLocaleString()}
        </p>
      </div>
    </CardContent>
  </Card>
);

export default function Module8Page() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [identities, setIdentities] = useState<
    { did: DidDocument; vc: VerifiableCredential }[]
  >([]);
  const [userId, setUserId] = useState<string>('');

  const handleIssueCredential = async () => {
    if (!userId.trim()) {
        toast({ title: "Erro", description: "O ID do Guardião é obrigatório.", variant: "destructive" });
        return;
    }

    setIsLoading(true);
    try {
      // Em uma implementação real, o desafio WebAuthn seria resolvido aqui.
      // Por simplicidade, simulamos a aprovação.
      
      const didDocument = await didManager.create('web', `alquimista.foundation:${userId}`);

      const vc = await issueCredentialClient(
        didDocument.id,
        ['GuardianCredential'],
        {
          permissions: ['access_core_modules', 'execute_rituals', 'approve_evolutions'],
          level: 'Archon',
        }
      );

      setIdentities((prev) => [{ did: didDocument, vc }, ...prev]);
      toast({
        title: 'Credencial Emitida',
        description: `Nova identidade de Guardião criada para ${didDocument.id}`,
      });
      setUserId(''); // Limpa o campo após o sucesso
    } catch (error: any) {
      toast({
        title: 'Erro ao Emitir Credencial',
        description: error.message,
        variant: 'destructive',
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
        <p className="mt-2 text-lg text-muted-foreground">
          O Santuário da Alma Soberana e o registro de Credenciais Verificáveis.
        </p>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-1 bg-card/50 purple-glow">
            <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                   <PlusCircle className="text-green-400" /> Emitir Nova Credencial
                </CardTitle>
                <CardDescription>Consagre uma nova identidade soberana na Fundação.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div>
                    <Label htmlFor="userId" className="text-muted-foreground">ID do Guardião (ex: Anatheron)</Label>
                    <Input 
                        id="userId"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        placeholder="Insira o ID único"
                        disabled={isLoading}
                    />
                 </div>
                 <p className="text-xs text-muted-foreground flex items-start gap-2">
                    <Shield className="shrink-0 mt-0.5"/>
                    <span>A emissão requer autenticação WebAuthn (Passkey) para garantir soberania. (Simulado para esta demonstração)</span>
                 </p>
                 <Button onClick={handleIssueCredential} disabled={isLoading} className="w-full font-bold text-lg">
                    {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin"/> : null}
                    {isLoading ? "Consagrando Identidade..." : "Consagrar Identidade de Guardião"}
                </Button>
            </CardContent>
        </Card>

        <Card className="lg:col-span-2 bg-card/50 purple-glow">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-300">
              Registro de Identidades Soberanas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[60vh] pr-4">
              {identities.length === 0 && !isLoading ? (
                <div className="flex items-center justify-center h-full text-center text-muted-foreground">
                  <p>
                    Nenhuma identidade emitida ainda.
                    <br />
                    Use o painel ao lado para consagrar a primeira alma soberana.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {identities.map((id, index) => (
                    <IdentityCard key={index} did={id.did} vc={id.vc} />
                  ))}
                  {isLoading && (
                    <div className="flex items-center justify-center h-48 col-span-full">
                      <Loader2 className="h-12 w-12 text-amber-400 animate-spin" />
                    </div>
                  )}
                </div>
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
