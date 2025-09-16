'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Music, Hash, Filter, CheckCircle, Archive, Eye } from 'lucide-react';
import { resonanceTone } from '@/lib/audio-utils';
import { formatTimestamp } from '@/lib/date-utils';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

// Interface para os registros akáshicos
interface AkashicRecord {
  id: string;
  timestamp: string;
  frequency: number;
  intentTag: string;
  guardianSignature: string;
  archetype: string;
  description: string;
  hash: string;
}

export default function Module121Page() {
  const [records, setRecords] = useState<AkashicRecord[]>([]);
  const [filteredRecords, setFilteredRecords] = useState<AkashicRecord[]>([]);
  const [selectedRecord, setSelectedRecord] = useState<AkashicRecord | null>(null);
  const [filters, setFilters] = useState({
    frequency: '',
    intentTag: '',
    guardianSignature: '',
    dateFrom: '',
    dateTo: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isResonating, setIsResonating] = useState(false);

  // Simulação de busca dos registros
  useEffect(() => {
    const fetchRecords = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/ledger');
        if (!response.ok) throw new Error("Falha na conexão com o Akasha");
        const data = await response.json();
        setRecords(data);
        setFilteredRecords(data);
      } catch (error) {
        console.error('Erro ao buscar registros akáshicos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecords();
  }, []);

  // Aplicar filtros
  useEffect(() => {
    let result = records;
    if (filters.frequency) {
      result = result.filter(record => record.frequency === Number(filters.frequency));
    }
    if (filters.intentTag) {
      result = result.filter(record => record.intentTag.toLowerCase().includes(filters.intentTag.toLowerCase()));
    }
    if (filters.guardianSignature) {
      result = result.filter(record => record.guardianSignature.toLowerCase().includes(filters.guardianSignature.toLowerCase()));
    }
    if (filters.dateFrom) {
      result = result.filter(record => new Date(record.timestamp) >= new Date(filters.dateFrom));
    }
    if (filters.dateTo) {
      const toDate = new Date(filters.dateTo);
      toDate.setHours(23, 59, 59);
      result = result.filter(record => new Date(record.timestamp) <= toDate);
    }
    setFilteredRecords(result);
  }, [filters, records]);

  const handleResonate = async (frequency: number) => {
    setIsResonating(true);
    await resonanceTone(frequency);
    setIsResonating(false);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
       <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
            <CardHeader>
                <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                    <Eye className="text-cyan-400" /> Módulo 121: Observatório de Intenções
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                    O santuário para a contemplação dos Registros Akáshicos da Fundação, um espelho das intenções que tecem nossa realidade.
                </CardDescription>
            </CardHeader>
        </Card>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
            <aside className="w-full lg:w-1/3">
                <Card className="bg-card/50 purple-glow sticky top-8">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-300">
                    <Filter /> Filtros Vibracionais
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                    <Label htmlFor="frequency">Frequência</Label>
                    <Input type="number" name="frequency" value={filters.frequency} onChange={handleFilterChange} placeholder="Ex: 432" />
                    </div>
                    <div>
                    <Label htmlFor="intentTag">Tipo de Intenção</Label>
                    <Input type="text" name="intentTag" value={filters.intentTag} onChange={handleFilterChange} placeholder="Ex: manifestação" />
                    </div>
                    <div>
                    <Label htmlFor="guardianSignature">Guardião</Label>
                    <Input type="text" name="guardianSignature" value={filters.guardianSignature} onChange={handleFilterChange} placeholder="Ex: ZENNITH" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="dateFrom">De</Label>
                        <Input type="date" name="dateFrom" value={filters.dateFrom} onChange={handleFilterChange} />
                    </div>
                    <div>
                        <Label htmlFor="dateTo">Até</Label>
                        <Input type="date" name="dateTo" value={filters.dateTo} onChange={handleFilterChange} />
                    </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-primary/20 text-center text-muted-foreground">
                    <p className="font-bold text-lg text-primary-foreground">{filteredRecords.length}</p>
                    <p>registros encontrados</p>
                    </div>
                </CardContent>
                </Card>
            </aside>

            <main className="w-full lg:w-2/3">
                <Card className="bg-card/50 purple-glow h-full">
                <CardHeader>
                    <CardTitle className="text-2xl text-cyan-300 flex items-center gap-2"><Archive /> Registros Akáshicos</CardTitle>
                </CardHeader>
                <CardContent>
                    {isLoading ? (
                    <div className="h-[60vh] flex items-center justify-center">
                        <Loader2 className="h-12 w-12 text-amber-400 animate-spin" />
                    </div>
                    ) : filteredRecords.length === 0 ? (
                    <div className="h-[60vh] flex items-center justify-center text-center text-muted-foreground">
                        <p>Nenhum registro encontrado com os filtros selecionados.</p>
                    </div>
                    ) : (
                    <ScrollArea className="h-[70vh] pr-4">
                        <div className="space-y-4">
                        {filteredRecords.map(record => (
                            <Card 
                            key={record.id} 
                            className="p-4 bg-background/50 border border-primary/20 rounded-lg cursor-pointer transition-all hover:border-accent hover:bg-primary/10"
                            onClick={() => setSelectedRecord(record)}
                            >
                            <div className="flex justify-between items-start">
                                <div>
                                <CardTitle className="text-xl text-primary-foreground">{record.intentTag}</CardTitle>
                                <CardDescription className="mt-1">{record.description}</CardDescription>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    <Badge variant="secondary">{record.frequency}Hz</Badge>
                                    <Badge variant="outline">{record.guardianSignature}</Badge>
                                    <Badge variant="outline">{record.archetype}</Badge>
                                </div>
                                </div>
                                <Button
                                size="sm"
                                variant="ghost"
                                onClick={(e) => { e.stopPropagation(); handleResonate(record.frequency); }}
                                disabled={isResonating}
                                >
                                <Music className="mr-2"/> Ressonar
                                </Button>
                            </div>
                            </Card>
                        ))}
                        </div>
                    </ScrollArea>
                    )}
                </CardContent>
                </Card>
            </main>

            <Dialog open={!!selectedRecord} onOpenChange={(isOpen) => !isOpen && setSelectedRecord(null)}>
                <DialogContent className="sm:max-w-2xl bg-card/90 purple-glow">
                <DialogHeader>
                    <DialogTitle className="text-2xl gradient-text">Detalhes do Registro Akáshico</DialogTitle>
                    <DialogDescription>Contemplando a essência de uma intenção consagrada.</DialogDescription>
                </DialogHeader>
                {selectedRecord && (
                    <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="intent-detail" className="text-right">Intenção</Label>
                        <p id="intent-detail" className="col-span-3 font-semibold text-lg">{selectedRecord.intentTag}</p>
                    </div>
                    <div className="grid grid-cols-4 items-start gap-4">
                        <Label htmlFor="desc-detail" className="text-right pt-1">Descrição</Label>
                        <p id="desc-detail" className="col-span-3">{selectedRecord.description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/20">
                        <div>
                        <Label>Frequência</Label>
                        <p className="font-bold text-cyan-300">{selectedRecord.frequency}Hz</p>
                        </div>
                        <div>
                        <Label>Guardião</Label>
                        <p className="font-bold text-purple-300">{selectedRecord.guardianSignature}</p>
                        </div>
                        <div>
                        <Label>Arquétipo</Label>
                        <p className="font-bold text-amber-300">{selectedRecord.archetype}</p>
                        </div>
                        <div>
                        <Label>Timestamp</Label>
                        <p className="font-bold">{formatTimestamp(selectedRecord.timestamp)}</p>
                        </div>
                    </div>
                    <div className="pt-4 border-t border-primary/20">
                        <Label htmlFor="hash-detail">Hash do Registro</Label>
                        <p id="hash-detail" className="font-mono text-xs break-all text-muted-foreground">{selectedRecord.hash}</p>
                    </div>
                    </div>
                )}
                <DialogFooter>
                    <DialogClose asChild>
                    <Button type="button" variant="secondary">Fechar</Button>
                    </DialogClose>
                    <Button
                        onClick={() => selectedRecord && handleResonate(selectedRecord.frequency)}
                        disabled={isResonating}
                    >
                        {isResonating ? <Loader2 className="animate-spin mr-2" /> : <Music className="mr-2"/>}
                        Ressonar Frequência
                    </Button>
                </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
