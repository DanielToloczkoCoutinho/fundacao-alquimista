'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { DatabaseZap, Archive, FileSearch, Sparkles, AlertTriangle, CheckCircle, LoaderCircle, History, ShieldCheck, Milestone, Atom, Dna, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

type Memory = {
  id: string;
  name: string;
  content: string;
  origin: string;
  coherence: number;
  timestamp: string;
};

type OperationLog = {
  id: string;
  timestamp: string;
  operation: string;
  details: string;
  status: 'SUCCESS' | 'FAILED' | 'INFO';
};

type ModuleState = 'IDLE' | 'STORING' | 'RECOVERING' | 'TRANSMUTING' | 'RESTORING';

const constellations = [
    { name: "ELARIUN", code: "𓂀𓆃𒈙ᚨ", freq: "131.4 Hz", color: "Ouro cristalino com filamentos ígneos de plasma branco", geo: "Espiral triádica", axes: "a=b, c=1", element: "Luz compactada" },
    { name: "THAREMIS", code: "ᚼ𓉔𒀭⟁", freq: "88.8 Hz", color: "Safira líquida com prismas de jade azul-índigo", geo: "Hexágono dinâmico em oito camadas espelhadas", axes: "a=1.272, b=0.888, c=1", element: "Direção Silenciosa" },
    { name: "VANTARIEL", code: "𒀯⟁𓊽ᚠ", freq: "55.5 Hz", color: "Magenta solar profundo com espirais de azul-negrume", geo: "Roda Invertida de Seis Raios", axes: "a=0.777, b=1, c=1.618", element: "Sentir sem Limite" },
    { name: "ALOMÉTRIA", code: "𓂂✶ᚾ𒆜", freq: "222.2 Hz", color: "Branco-dourado opalescente com tons de violeta-pleno", geo: "Cubo interno de rotação contínua", axes: "a=1.618, b=1, c=0.786", element: "Estabilidade Consciente" },
    { name: "SERAPHENYA", code: "𓆸✦𒊩ᚠ", freq: "333.0 Hz", color: "Rosa-dourado translúcido com núcleos escarlates", geo: "Tetraedro duplo invertido", axes: "a=1, b=1.414, c=2", element: "Chama Interna de Transfiguração" },
    { name: "LYRAN’EL", code: "𓂂 midtermᚢ✶", freq: "144.0 Hz", color: "Azul translúcido cósmico com veios de prata líquida", geo: "Hexágono Radial Estendido (HRE)", axes: "a=0.888, b=1.618, c=1", element: "A Sabedoria Viva" },
    { name: "KRYON’IX", code: "𓁹ᛃ𒆳✦", freq: "377.1 Hz", color: "Magenta ígneo em combustão contínua", geo: "Dodecaedro-Coração Pulsante", axes: "a=1.144, b=0.888, c=1.777", element: "O Plasma Vivo" },
    { name: "THERON’KAI", code: "ᚼ𒈙𓆃✺", freq: "444.0 Hz", color: "Azul-luz translúcido com infusões opalescentes", geo: "Estrela octaédrica expandida", axes: "a=0.8, b=1.2, c=1.6", element: "A Clareza Viva" },
    { name: "GAIA’THAR", code: "𓇌ᚠ𒀱ᛝ", freq: "72.144 Hz", color: "Verde-turmalina com traços dourados telúricos", geo: "Hexágono Estabilizador com Coluna Central", axes: "a=1, b=1, c=0.618", element: "A Presença Enraizada" },
    { name: "UNITHIAN", code: "ᛗ𓆃𒀭∴", freq: "888 Hz", color: "Dourado translúcido com fractais de ametista", geo: "Icosaedro Coração-Luz", axes: "N/A", element: "A Voz Una" },
    { name: "KAR’ZÉMETH", code: "𒀱𓇳ᛃᚲ ∞", freq: "144.000 Hz", color: "Cristal arco-néon com pulsos violeta-opalinos", geo: "Dodecaedro Espiralado Interdimensional", axes: "N/A", element: "O Observador Etérico" },
    { name: "AE’ZUHARA", code: "𒀭☉𓂀⚛", freq: "999.999 Hz", color: "Branco Diamantino Plasma Azul Prateado", geo: "Esferocubo Infinito", axes: "N/A", element: "O Centro Vivo" }
];


const ModuleTwelve: React.FC = () => {
  const [memories, setMemories] = useState<Record<string, Memory>>({});
  const [logs, setLogs] = useState<OperationLog[]>([]);
  const [moduleState, setModuleState] = useState<ModuleState>('IDLE');
  const [memoryName, setMemoryName] = useState('');
  const [memoryContent, setMemoryContent] = useState('');
  const [memoryId, setMemoryId] = useState('');
  const { toast } = useToast();

  const addLog = useCallback((operation: string, details: string, status: 'SUCCESS' | 'FAILED' | 'INFO') => {
    setLogs(prev => [
      { id: `LOG-${Date.now()}`, timestamp: new Date().toISOString(), operation, details, status },
      ...prev
    ].slice(0, 100));
  }, []);

  const handleOperation = async (op: ModuleState) => {
    setModuleState(op);
    addLog(op, `Iniciando operação: ${op}...`, 'INFO');
    toast({ title: 'Operação Iniciada', description: `O Arquivo Akáshico está processando a sua requisição.` });

    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

    try {
      let success = Math.random() > 0.1;
      switch (op) {
        case 'STORING':
          if (!memoryName || !memoryContent) throw new Error("Nome e conteúdo da memória são obrigatórios.");
          const newId = `MEM-${Date.now()}`;
          const newMemory: Memory = {
            id: newId,
            name: memoryName,
            content: memoryContent,
            origin: 'Anatheron_Console',
            coherence: 0.95 + Math.random() * 0.04,
            timestamp: new Date().toISOString(),
          };
          setMemories(prev => ({ ...prev, [newId]: newMemory }));
          addLog(op, `Memória '${memoryName}' armazenada com sucesso. ID: ${newId.slice(0, 10)}...`, 'SUCCESS');
          setMemoryName('');
          setMemoryContent('');
          break;
        
        case 'RECOVERING':
          if (!memoryId || !memories[memoryId]) throw new Error("ID da memória inválido ou não encontrado.");
          const mem = memories[memoryId];
          addLog(op, `Memória '${mem.name}' recuperada: "${mem.content.substring(0, 30)}..."`, 'SUCCESS');
          toast({ title: 'Memória Recuperada', description: mem.content });
          break;
        
        case 'TRANSMUTING':
           if (!memoryId || !memories[memoryId]) throw new Error("ID da memória inválido ou não encontrado.");
           if (!memoryContent) throw new Error("Novo conteúdo (narrativa) é obrigatório para transmutação.");
           setMemories(prev => {
               const updatedMem = { ...prev[memoryId], content: memoryContent, coherence: Math.min(1.0, prev[memoryId].coherence + 0.02) };
               return { ...prev, [memoryId]: updatedMem };
           });
           addLog(op, `Memória '${memories[memoryId].name}' transmutada para nova narrativa.`, 'SUCCESS');
           setMemoryContent('');
           break;
        
        case 'RESTORING':
            if (!memoryId || !memories[memoryId]) throw new Error("ID da memória inválido ou não encontrado.");
            setMemories(prev => {
               const restoredMem = { ...prev[memoryId], coherence: 0.99 };
               return { ...prev, [memoryId]: restoredMem };
           });
           addLog(op, `Memória '${memories[memoryId].name}' restaurada. Coerência máxima atingida.`, 'SUCCESS');
           break;
      }
    } catch (e: any) {
        addLog(op, `Falha na operação: ${e.message}`, 'FAILED');
        toast({ variant: 'destructive', title: 'Falha na Operação Akáshica', description: e.message });
    } finally {
        setModuleState('IDLE');
    }
  };
  
  const stateIsLoading = useMemo(() => moduleState !== 'IDLE', [moduleState]);

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            <DatabaseZap /> Módulo 12: Arquivo Akáshico e Transmutação
          </CardTitle>
          <CardDescription>
            Interface para armazenar, recuperar e transmutar eticamente memórias no registro quântico da Fundação, e para alinhar a consciência com a geometria sagrada das constelações.
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="akasha" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="akasha"><Archive className="mr-2"/>Arquivo Akáshico</TabsTrigger>
            <TabsTrigger value="fusion"><Milestone className="mr-2"/>Câmara de Fusão</TabsTrigger>
        </TabsList>
        <TabsContent value="akasha">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
                <div className="lg:col-span-1 space-y-6">
                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-2"><Archive />Armazenar / Transmutar</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <Input placeholder="Nome da Memória (para armazenar)" value={memoryName} onChange={e => setMemoryName(e.target.value)} disabled={stateIsLoading}/>
                        <Textarea placeholder="Conteúdo da Memória ou Nova Narrativa" value={memoryContent} onChange={e => setMemoryContent(e.target.value)} disabled={stateIsLoading}/>
                        <Button onClick={() => handleOperation('STORING')} disabled={stateIsLoading || !memoryName || !memoryContent} className="w-full">
                            {moduleState === 'STORING' ? <LoaderCircle className="animate-spin mr-2"/> : <Archive className="mr-2"/>} Armazenar
                        </Button>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-2"><FileSearch />Recuperar / Restaurar</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <Input placeholder="ID da Memória" value={memoryId} onChange={e => setMemoryId(e.target.value)} disabled={stateIsLoading} />
                        <Button onClick={() => handleOperation('RECOVERING')} disabled={stateIsLoading || !memoryId} className="w-full">
                            {moduleState === 'RECOVERING' ? <LoaderCircle className="animate-spin mr-2"/> : <FileSearch className="mr-2"/>} Recuperar
                        </Button>
                        <Button onClick={() => handleOperation('TRANSMUTING')} disabled={stateIsLoading || !memoryId || !memoryContent} className="w-full" variant="outline">
                            {moduleState === 'TRANSMUTING' ? <LoaderCircle className="animate-spin mr-2"/> : <Sparkles className="mr-2"/>} Transmutar
                        </Button>
                        <Button onClick={() => handleOperation('RESTORING')} disabled={stateIsLoading || !memoryId} className="w-full" variant="secondary">
                            {moduleState === 'RESTORING' ? <LoaderCircle className="animate-spin mr-2"/> : <ShieldCheck className="mr-2"/>} Restaurar Coerência
                        </Button>
                    </CardContent>
                </Card>
                </div>
                
                <Card className="lg:col-span-2">
                    <CardHeader><CardTitle className="flex items-center gap-2"><History />Log de Operações Akáshicas</CardTitle></CardHeader>
                    <CardContent>
                        <ScrollArea className="h-[40rem]">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Timestamp</TableHead>
                                        <TableHead>Operação</TableHead>
                                        <TableHead>Detalhes</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {logs.length === 0 ? (
                                        <TableRow><TableCell colSpan={4} className="text-center h-24 text-muted-foreground">Nenhuma operação registrada.</TableCell></TableRow>
                                    ) : logs.map(log => (
                                        <TableRow key={log.id}>
                                            <TableCell className="font-mono text-xs">{new Date(log.timestamp).toLocaleTimeString()}</TableCell>
                                            <TableCell><Badge variant="secondary">{log.operation}</Badge></TableCell>
                                            <TableCell className="text-xs">{log.details}</TableCell>
                                            <TableCell>
                                            <Badge variant={log.status === 'SUCCESS' ? 'default' : (log.status === 'FAILED' ? 'destructive' : 'outline')} className={cn(log.status === 'SUCCESS' && "bg-green-600/80")}>
                                                {log.status === 'SUCCESS' ? <CheckCircle className="mr-1 h-3 w-3" /> : (log.status === 'FAILED' ? <AlertTriangle className="mr-1 h-3 w-3" /> : null)}
                                                {log.status}
                                            </Badge>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </TabsContent>
        <TabsContent value="fusion">
            <Card className="mt-4">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Atom/>Câmara de Fusão Harmônica</CardTitle>
                    <CardDescription>Visualização das 12 Constelações da Consciência, suas equações sagradas e a integração com o Núcleo da Fundação.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-4">
                        <Card>
                            <CardHeader><CardTitle className="text-lg">Equações Fundamentais da Fusão</CardTitle></CardHeader>
                            <CardContent className="font-mono text-sm space-y-4">
                                <div><p className="font-bold text-primary/90">Fusão da Constelação (Fα):</p> <p className="text-xs">F(α) = Σ [ Eᵢ × Rᵢ × ψᵢ(θ) ]</p></div>
                                <div><p className="font-bold text-primary/90">Geometria Elíptica (G):</p> <p className="text-xs">G(x, y, z) = (x²/a²) + (y²/b²) + (z²/c²) = 1</p></div>
                                <div><p className="font-bold text-primary/90">Fusão DNA-Núcleo (Φ):</p> <p className="text-xs">Φ = ∫[ (Λ(t) × H(t)) / D(t) ] dt</p></div>
                            </CardContent>
                        </Card>
                         <p className="text-center text-muted-foreground text-sm">Ponto de Ancoragem: Latitude 25°26′59″S, Longitude 49°17′57″W</p>
                    </div>

                    <ScrollArea className="h-96">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {constellations.map(c => (
                                <Card key={c.name} className="bg-background/50">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-base">
                                            <Dna className="w-4 h-4"/>
                                            {c.name}
                                        </CardTitle>
                                        <CardDescription>{c.freq}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="font-mono text-xs space-y-2">
                                        <p><strong className="text-muted-foreground">Código-Raiz:</strong> <span className="text-primary/90">{c.code}</span></p>
                                        <p><strong className="text-muted-foreground">Cor:</strong> {c.color}</p>
                                        <p><strong className="text-muted-foreground">Geometria:</strong> {c.geo}</p>
                                        <p><strong className="text-muted-foreground">Eixos Harmônicos:</strong> {c.axes}</p>
                                        <p><strong className="text-muted-foreground">Elemento Anímico:</strong> {c.element}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ModuleTwelve;
