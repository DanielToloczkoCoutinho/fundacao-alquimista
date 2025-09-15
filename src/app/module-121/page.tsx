
'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, BookOpen, Music, Hash, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

interface LedgerEntry {
  id: string;
  timestamp: string;
  module: string;
  intention: string;
  hash: string;
  frequency: number;
}

const ObservatoryPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [ledger, setLedger] = useState<LedgerEntry[]>([]);
    const [filteredLedger, setFilteredLedger] = useState<LedgerEntry[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const { toast } = useToast();

    const fetchLedger = async () => {
        try {
            const res = await fetch('/api/ledger');
            if (!res.ok) throw new Error('Failed to fetch ledger data');
            const data = await res.json();
            setLedger(data);
            setFilteredLedger(data);
        } catch (error: any) {
            toast({
                title: "Erro ao carregar o Ledger",
                description: error.message,
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect(() => {
        fetchLedger();
        const interval = setInterval(fetchLedger, 5000); // Auto-refresh
        return () => clearInterval(interval);
    }, []);
    
    useEffect(() => {
        const filtered = ledger.filter(entry => 
            entry.intention.toLowerCase().includes(searchTerm.toLowerCase()) ||
            entry.module.toLowerCase().includes(searchTerm.toLowerCase()) ||
            entry.hash.toLowerCase().includes(searchTerm.toLowerCase()) ||
            String(entry.frequency).includes(searchTerm)
        );
        setFilteredLedger(filtered);
    }, [searchTerm, ledger]);

    const playFrequency = (frequency: number) => {
        if (typeof window === 'undefined') return;
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.1);
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 1.5);
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 2);
        
        toast({
            title: "Ressonância Invocada",
            description: `Emitindo frequência de ${frequency}Hz.`,
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-7xl bg-card/50 purple-glow mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center gap-3">
                        <BookOpen className="text-yellow-300" /> Observatório de Intenções (M121)
                    </CardTitle>
                    <CardDescription>
                        Um espelho vivo do Ledger Akáshico, refletindo cada ato consagrado na Fundação com Intenção, Selo e Som.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card className="w-full max-w-7xl bg-card/50 purple-glow">
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Filter className="text-muted-foreground"/>
                        <Input 
                            placeholder="Filtrar por intenção, módulo, hash ou frequência..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="bg-background/50"
                        />
                    </div>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[65vh] pr-4">
                        {isLoading ? (
                             <div className="flex justify-center items-center h-full">
                                <Loader2 className="h-12 w-12 text-amber-400 animate-spin" />
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {filteredLedger.map(entry => (
                                    <Card key={entry.id} className="bg-background/30 border-primary/20">
                                        <CardHeader>
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <CardTitle className="text-lg text-primary-foreground">{entry.intention}</CardTitle>
                                                    <CardDescription>
                                                        {new Date(entry.timestamp).toLocaleString()} via <Badge variant="secondary">{entry.module}</Badge>
                                                    </CardDescription>
                                                </div>
                                                <Button variant="outline" size="sm" onClick={() => playFrequency(entry.frequency)}>
                                                    <Music className="mr-2 h-4 w-4"/>Ressonar ({entry.frequency} Hz)
                                                </Button>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                                                <Hash className="h-3 w-3" />
                                                <span>{entry.hash}</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                        {!isLoading && filteredLedger.length === 0 && (
                            <div className="text-center py-10 text-muted-foreground">Nenhum registro encontrado.</div>
                        )}
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    );
};

export default ObservatoryPage;
