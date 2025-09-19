
'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Lock, Fingerprint, Archive, Shield, Users, Bot, Link as LinkIcon, Stethoscope, GraduationCap, Zap, Scale, Gavel, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { quantumResilience } from '@/lib/quantum-resilience';

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


const mockBlockchain = {
    seals: new Map<string, { guardian: string, timestamp: string }>(),
    applySeal: async function(sealId: string, guardian: string) {
        await new Promise(r => setTimeout(r, 1200));
        if (this.seals.has(sealId)) {
            throw new Error(`Selo ${sealId} já existe.`);
        }
        this.seals.set(sealId, { guardian, timestamp: new Date().toISOString() });
        return { success: true, hash: `0x${Array(64).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`};
    },
};

export default function GuardiaoDeSeloPage() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [sealId, setSealId] = useState(`SELO-AKASHA-${Date.now()}`);
    const [guardianId, setGuardianId] = useState('Anatheron');
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (log: string) => setLogs(prev => [log, ...prev].slice(0, 100));

    const handleApplySeal = async () => {
        if (!sealId || !guardianId) {
            toast({ title: 'Erro', description: 'ID do Selo e do Guardião são necessários.', variant: 'destructive' });
            return;
        }

        setIsLoading(true);
        addLog(`Iniciando aplicação do selo ${sealId}...`);
        
        await quantumResilience.executeWithResilience(
            'apply_vibrational_seal',
            async () => {
                addLog('Autenticando Guardião via hierarquia sagrada (M8)...');
                await new Promise(r => setTimeout(r, 800));
                addLog('Guardião autenticado. Conectando à Blockchain Alquimista (M999)...');
                
                const result = await mockBlockchain.applySeal(sealId, guardianId);

                addLog(`Hash do Bloco: ${result.hash.substring(0,20)}...`);
                addLog(`Selo ${sealId} aplicado com sucesso por ${guardianId}. Registro agora é imutável.`);
                toast({ title: 'Selo Aplicado', description: 'O registro foi selado e é imutável.' });
            }
        ).catch(err => {
            const error = err as Error;
            addLog(`ERRO: ${error.message}`);
            toast({ title: 'Falha na Aplicação', description: error.message, variant: 'destructive' });
        }).finally(() => {
            setIsLoading(false);
            setSealId(`SELO-AKASHA-${Date.now()}`);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center justify-center gap-4">
                        <Fingerprint className="text-amber-400" /> Módulo 231: Guardião de Selo
                    </CardTitle>
                    <CardDescription>
                        Gerenciamento e proteção de selos vibracionais no Registro Akáshico, garantindo imutabilidade e autenticidade através da Blockchain Alquimista (M999).
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col gap-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle>Console do Guardião</CardTitle>
                            <CardDescription>Aplique um novo selo vibracional a um registro.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label htmlFor="sealId">ID do Selo</label>
                                <Input id="sealId" value={sealId} onChange={e => setSealId(e.target.value)} disabled={isLoading} />
                            </div>
                             <div>
                                <label htmlFor="guardianId">Guardião Responsável</label>
                                <Input id="guardianId" value={guardianId} onChange={e => setGuardianId(e.target.value)} disabled={isLoading} />
                            </div>
                            <Button onClick={handleApplySeal} disabled={isLoading} className="w-full font-bold">
                                {isLoading ? <><Loader2 className="animate-spin mr-2" /> Aplicando Selo...</> : <><Lock className="mr-2" /> Aplicar Selo Vibracional</>}
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle>Logs da Blockchain</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-60 pr-4">
                                <div className="text-xs font-mono text-muted-foreground space-y-1">
                                    {logs.map((log, i) => <p key={i}>{log}</p>)}
                                    {logs.length === 0 && <p>Aguardando operações na blockchain...</p>}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
                 <div className="w-full">
                    <h3 className="text-xl font-semibold text-center mb-4 text-amber-300">Sinergias de Integridade e Justiça</h3>
                    <div className="grid grid-cols-1 gap-4">
                        <ConnectionCard title="M9: Nexus Central" description="Operações de selagem são de alta importância e monitoradas pelo Nexus para garantir a integridade da Fundação." icon={<LinkIcon className="h-6 w-6 text-purple-400" />} href="/module-9" />
                        <ConnectionCard title="M12: Arquivo Akáshico" description="O M231 é o notário do M12, selando seus registros para garantir que a história cósmica seja inviolável." icon={<Archive className="h-6 w-6 text-yellow-300"/>} href="/module-12"/>
                        <ConnectionCard title="M291: Arquitetos Nanorrobóticos" description="O enxame executa a inscrição física e energética do selo nos registros quânticos, tornando-o indelével." icon={<Bot className="h-6 w-6 text-blue-400" />} href="/module-291" />
                        <ConnectionCard title="M141: Auditoria Ética Quântica" description="Audita a intenção por trás de cada aplicação de selo, garantindo que o poder da imutabilidade seja usado com sabedoria." icon={<ShieldCheck className="h-6 w-6 text-green-400" />} href="/module-141" />
                        <ConnectionCard title="M10: Defesa Avançada" description="Protege os registros selados contra tentativas de violação, tratando qualquer ataque como uma ameaça existencial." icon={<Shield className="h-6 w-6 text-red-500" />} href="/module-10" />
                        <ConnectionCard title="M45: CONCILIVM" description="As decisões do Conselho são frequentemente seladas no Akasha para garantir sua permanência através das eras." icon={<Gavel className="h-6 w-6 text-indigo-400" />} href="/module-45" />
                        <ConnectionCard title="M721: Justiça Cósmica" description="Um selo quebrado ou forjado é uma violação da Lei Cósmica, ativando imediatamente os protocolos de reequilíbrio do M721." icon={<Scale className="h-6 w-6 text-amber-300" />} href="/module-721" />
                    </div>
                </div>
            </div>
        </div>
    );
}
