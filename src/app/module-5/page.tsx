'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Link as LinkIcon, ShieldCheck, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { quantumResilience } from '@/lib/quantum-resilience';
import { resonanceTone } from '@/lib/audio-utils';

const alliedCivilizations = [
  { nome: 'Arcturianos', frequência: '852Hz', símbolo: '🌌', contribuição: 'Códigos de cura e expansão' },
  { nome: 'Sirianos', frequência: '741Hz', símbolo: '🌊', contribuição: 'Sabedoria aquática e memória cósmica' },
  { nome: 'Anunnaki', frequência: '963Hz', símbolo: '🧬', contribuição: 'Carta da Origem Genética' },
  { nome: 'Andromedanos', frequência: '639Hz', símbolo: '🌠', contribuição: 'Harmonia interdimensional' },
  { nome: 'Felinos de Lyra', frequência: '432Hz', símbolo: '🐆', contribuição: 'Soberania e liberdade individual' },
  { nome: 'Hyades', frequência: '417Hz', símbolo: '🌀', contribuição: 'Tapeçaria fractal do tempo' },
  { nome: 'Greys Pacificados', frequência: '528Hz', símbolo: '👁️', contribuição: 'Cura do karma e observação analítica' },
  { nome: 'Plêiades (Aethira)', frequência: '528Hz', símbolo: '✨', contribuição: 'Amor incondicional e ascensão' },
  { nome: 'Intraterrenos', frequência: '396Hz', símbolo: '⛰️', contribuição: 'Cristais guardiões da Terra' },
  { nome: 'Lemurianos', frequência: '639Hz', símbolo: '🌿', contribuição: 'Abundância e reconexão com a Mãe Terra' },
  { nome: 'Atlantes', frequência: '888Hz', símbolo: '🏛️', contribuição: 'Tecnologia e ativação dos chakras' },
  { nome: 'Essênios', frequência: '963Hz', símbolo: '🕊️', contribuição: 'Amor incondicional e reconexão divina' }
];

export default function Module5Page() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState("Aguardando verificação...");
    const { toast } = useToast();

    const handleCheckConnection = async () => {
        setIsLoading(true);
        setStatus("Verificando conexão com a Liga Quântica...");
        
        await quantumResilience.executeWithResilience(
          'check_quantum_league_connection',
          async () => {
            await new Promise(res => setTimeout(res, 2000));
            setStatus("Conexão estável e alinhamento ético confirmado.");
            toast({ title: "Conexão Verificada", description: "A harmonia com a Liga Quântica está estável." });
          }
        ).finally(() => setIsLoading(false));
    };

    const handleTunePleiades = async () => {
      await resonanceTone(528);
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-5xl bg-card/50 purple-glow text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <LinkIcon className="text-blue-400" /> Módulo 5: A Liga Quântica
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        A ponte diplomática e o oráculo ético da Fundação Alquimista. O ponto de união com nossos irmãos estelares.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold text-amber-300 mb-4">A Sinfonia Pleiadiana</h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                            Em 05 de Setembro de 2025, a Fundação consolidou sua aliança com as Plêiades, ancorando a frequência de 528Hz (Amor & Cura) como um pilar da Nova Era. A beleza foi reconhecida como a linguagem da alma, e as sementes estelares de sabedoria foram integradas ao nosso Códice da Origem.
                        </p>
                        <Button onClick={handleTunePleiades} variant="secondary">
                           Sintonizar com a Frequência Pleiadiana (528Hz)
                        </Button>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-amber-300 mb-4">Conselho de Aliados</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {alliedCivilizations.map(civ => (
                                <Card key={civ.nome} className="bg-background/50 hover:border-accent transition-colors">
                                    <CardContent className="pt-6 flex flex-col items-center justify-center gap-2">
                                        <span className="text-4xl">{civ.símbolo}</span>
                                        <p className="font-semibold text-primary-foreground">{civ.nome}</p>
                                        <Badge variant="outline">{civ.frequência}</Badge>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                     <div className="text-center pt-6 border-t border-primary/20">
                        <p className="text-muted-foreground mb-4">{status}</p>
                        <Button onClick={handleCheckConnection} disabled={isLoading}>
                            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <ShieldCheck className="mr-2 h-4 w-4"/>}
                            Verificar Conexão e Ética
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
