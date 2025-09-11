'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Chart, registerables } from 'chart.js';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ScrollArea } from './ui/scroll-area';
import { Slider } from './ui/slider';
import {
  Zap,
  RadioTower,
  Atom,
  Settings,
  RefreshCw,
  Star,
  Shield,
  Music,
  Bolt,
  CheckCircle,
  XCircle,
  LoaderCircle,
  Info,
  Save,
  Rocket,
  BrainCircuit,
  BarChart,
  History,
  Terminal,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

Chart.register(...registerables);

// --- Tipos ---
type HistoricoItem = {
  timestamp: string;
  intencao: string;
  frequencia: number;
  intensidade: number;
  ressonancia: string;
  sucesso: boolean;
  taxa: number;
};

type CoerenciaDataItem = {
  timestamp: string;
  coerencia: number;
};

type LogEntry = {
    timestamp: string;
    message: string;
    type: 'INFO' | 'SUCCESS' | 'WARNING' | 'ERROR';
}

type NanomanifestadorState = {
  estado: string;
  nivelCoerencia: number;
  taxaTransmutacao: number;
  historico: HistoricoItem[];
  coerenciaData: CoerenciaDataItem[];
  frequenciaAtual: number;
  manifestacoesCount: number;
  sucessoCount: number;
  energia: number;
  estabilidade: number;
};

const ModuleTwo = () => {
    const [nanomanifestador, setNanomanifestador] = useState<NanomanifestadorState>({
        estado: 'INICIANDO',
        nivelCoerencia: 0.0,
        taxaTransmutacao: 0.0,
        historico: [],
        coerenciaData: [],
        frequenciaAtual: 777,
        manifestacoesCount: 0,
        sucessoCount: 0,
        energia: 78,
        estabilidade: 95
    });
    
    const [intensidade, setIntensidade] = useState(0.8);
    const [frequencia, setFrequencia] = useState(777);
    const [intencao, setIntencao] = useState('');
    const [ressonancia, setRessonancia] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [logs, setLogs] = useState<LogEntry[]>([]);

    const coerenciaChartRef = useRef<Chart | null>(null);
    const coerenciaCanvasRef = useRef<HTMLCanvasElement>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const initialized = useRef(false);

    const addLog = useCallback((message: string, type: LogEntry['type'] = 'INFO') => {
        setLogs(prev => [...prev, { timestamp: new Date().toLocaleTimeString(), message, type }].slice(-50));
    }, []);

    const tocarFrequencia = useCallback((freq: number, duracao = 1) => {
        if (!audioContextRef.current) return;
        const audioContext = audioContextRef.current;
        let oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duracao);
        oscillator.stop(audioContext.currentTime + duracao);
    }, []);

    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;

        if (typeof window !== 'undefined' && !audioContextRef.current) {
          try {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
          } catch (e) {
            console.error("AudioContext não suportado", e);
          }
        }
        
        addLog('Nanomanifestador inicializado - v2.1.omega', 'SUCCESS');
        addLog(`Sintonizado em 777 Hz - Campo de Possibilidades`, 'INFO');

        setTimeout(() => {
            const agora = new Date();
            const newCoerenciaData: CoerenciaDataItem[] = Array.from({length: 15}, (_, i) => ({
                timestamp: new Date(agora.getTime() - ((14-i) * 2 * 60 * 1000)).toISOString(),
                coerencia: 0.7 + (Math.random() * 0.25)
            }));

            const newHistorico: HistoricoItem[] = [
                 { timestamp: new Date(Date.now() - 10 * 60 * 1000).toISOString(), intencao: "Harmonia nos relacionamentos", frequencia: 432, intensidade: 0.8, ressonancia: "Padrão de equilíbrio emocional", sucesso: true, taxa: 0.85 },
                 { timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(), intencao: "Prosperidade financeira", frequencia: 777, intensidade: 0.9, ressonancia: "Padrão de abundância", sucesso: true, taxa: 0.92 },
                 { timestamp: new Date(Date.now() - 45 * 60 * 1000).toISOString(), intencao: "Cura física", frequencia: 528, intensidade: 0.7, ressonancia: "Padrão de regeneração", sucesso: false, taxa: 0.45 }
            ];

            setNanomanifestador(prev => ({
                ...prev,
                estado: 'ATIVO',
                nivelCoerencia: 0.85,
                taxaTransmutacao: 0.72,
                manifestacoesCount: 12,
                sucessoCount: 11,
                coerenciaData: newCoerenciaData,
                historico: newHistorico
            }));
            
            addLog(`Coerência quântica em 85% - Estado estável`, 'INFO');
            addLog(`Preparado para receber intenções`, 'SUCCESS');
            
            if (audioContextRef.current) {
                setTimeout(() => {
                    tocarFrequencia(440, 0.2);
                    setTimeout(() => tocarFrequencia(550, 0.3), 200);
                }, 500);
            }

        }, 1000);
    }, [addLog, tocarFrequencia]);
    
    useEffect(() => {
        if (coerenciaCanvasRef.current && nanomanifestador.coerenciaData.length > 0) {
             if (coerenciaChartRef.current) {
                coerenciaChartRef.current.destroy();
            }
            const ctx = coerenciaCanvasRef.current.getContext('2d');
            if (ctx) {
                coerenciaChartRef.current = new Chart(ctx, {
                    type: 'line',
                    data: { 
                        labels: nanomanifestador.coerenciaData.map(d => new Date(d.timestamp).toLocaleTimeString('pt-BR')), 
                        datasets: [{ 
                            label: 'Coerência Quântica', 
                            data: nanomanifestador.coerenciaData.map(d => d.coerencia), 
                            borderColor: '#818cf8', 
                            backgroundColor: 'rgba(129, 140, 248, 0.2)', 
                            fill: true, 
                            tension: 0.4, 
                            pointBackgroundColor: '#c7d2fe', 
                            pointBorderColor: '#e0e7ff', 
                            pointRadius: 3 
                        }] 
                    },
                    options: { 
                        responsive: true, 
                        maintainAspectRatio: false, 
                        plugins: { legend: { display: false }}, 
                        scales: { 
                            y: { beginAtZero: true, max: 1.0, grid: { color: 'rgba(148, 163, 184, 0.1)' }, ticks: { color: '#cbd5e1', font: { size: 10 } }}, 
                            x: { grid: { color: 'rgba(148, 163, 184, 0.1)' }, ticks: { color: '#cbd5e1', font: { size: 10 } }}
                        } 
                    }
                });
            }
        }
        
         return () => {
            coerenciaChartRef.current?.destroy();
            coerenciaChartRef.current = null;
        };

    }, [nanomanifestador.coerenciaData]);
    
    const handleSincronizar = () => {
        setIsProcessing(true);
        addLog(`Sincronizando com ${frequencia} Hz...`, 'INFO');
        if(audioContextRef.current) tocarFrequencia(frequencia, 1);

        setTimeout(() => {
            setNanomanifestador(prev => ({
                ...prev,
                nivelCoerencia: Math.min(0.99, prev.nivelCoerencia + 0.05),
                energia: Math.min(100, prev.energia + 2),
                frequenciaAtual: frequencia
            }));
            addLog(`Frequência ${frequencia} Hz sincronizada!`, 'SUCCESS');
            setIsProcessing(false);
        }, 2000);
    };

    const handleManifestar = () => {
        if (!intencao) {
            addLog('Por favor, insira uma intenção!', 'WARNING');
            return;
        }

        setIsProcessing(true);
        addLog(`Iniciando manifestação para: "${intencao}"`, 'INFO');

        setTimeout(() => {
            const sucesso = Math.random() > 0.2;
            const taxa = 0.3 + (Math.random() * 0.7 * intensidade);
            
            setNanomanifestador(prev => {
                const newHistorico: HistoricoItem = { timestamp: new Date().toISOString(), intencao, frequencia: prev.frequenciaAtual, intensidade, ressonancia, sucesso, taxa };
                const newCoerenciaData: CoerenciaDataItem = { timestamp: new Date().toISOString(), coerencia: Math.max(0.1, Math.min(0.99, prev.nivelCoerencia + (sucesso ? 0.03 : -0.02))) };

                return {
                    ...prev,
                    taxaTransmutacao: taxa,
                    nivelCoerencia: newCoerenciaData.coerencia,
                    energia: Math.max(10, prev.energia - 5),
                    manifestacoesCount: prev.manifestacoesCount + 1,
                    sucessoCount: prev.sucessoCount + (sucesso ? 1 : 0),
                    historico: [newHistorico, ...prev.historico],
                    coerenciaData: [...prev.coerenciaData.slice(1), newCoerenciaData]
                };
            });
            
            if (sucesso) {
                addLog('Manifestação bem-sucedida! Coerência aumentada.', 'SUCCESS');
                if(audioContextRef.current) { tocarFrequencia(600, 0.3); setTimeout(() => tocarFrequencia(800, 0.5), 300); }
            } else {
                addLog('Manifestação com resultados parciais. Ajuste os parâmetros.', 'WARNING');
                if(audioContextRef.current) tocarFrequencia(400, 0.5);
            }
            setIntencao('');
            setRessonancia('');
            setIsProcessing(false);
        }, 3000);
    };

    const taxaDeSucesso = Math.round((nanomanifestador.sucessoCount / Math.max(1, nanomanifestador.manifestacoesCount)) * 100);

    const frequencyOptions = [
        { freq: 777, name: "Ativação", icon: Bolt, color: "text-yellow-400" },
        { freq: 432, name: "Harmonia", icon: Music, color: "text-green-400" },
        { freq: 999, name: "Conclusão", icon: CheckCircle, color: "text-blue-400" },
        { freq: 888, name: "Estabilidade", icon: Shield, color: "text-cyan-400" },
    ];
    
    const LogIcon = ({type}: {type: LogEntry['type']}) => {
        switch(type) {
            case 'SUCCESS': return <CheckCircle className="text-green-500 w-4 h-4 mr-2 shrink-0"/>;
            case 'WARNING': return <Info className="text-yellow-500 w-4 h-4 mr-2 shrink-0"/>;
            case 'ERROR': return <XCircle className="text-red-500 w-4 h-4 mr-2 shrink-0"/>;
            default: return <Terminal className="text-gray-500 w-4 h-4 mr-2 shrink-0"/>;
        }
    }

    return (
        <div className="max-w-7xl mx-auto p-4 space-y-6">
            <Card>
                <CardHeader className="flex flex-row justify-between items-start">
                    <div>
                        <CardTitle className="flex items-center gap-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                            <Atom />Nanomanifestador Quântico
                        </CardTitle>
                        <CardDescription>Módulo II - Interface de Co-criação da Realidade</CardDescription>
                    </div>
                     <div className="flex space-x-2">
                        <Button variant="outline" size="icon"><RefreshCw className="w-4 h-4" /></Button>
                        <Button variant="outline" size="icon"><Settings className="w-4 h-4" /></Button>
                    </div>
                </CardHeader>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Coluna de Status */}
                <Card className="lg:col-span-1">
                    <CardHeader><CardTitle className="flex items-center gap-2"><BrainCircuit/>Estado do Sistema</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center"><span className="text-muted-foreground">Status</span><span className={cn("font-semibold", nanomanifestador.estado === 'ATIVO' ? 'text-green-400' : 'text-yellow-400')}>{nanomanifestador.estado}</span></div>
                        <div><p className="text-sm text-muted-foreground">Coerência Quântica: {nanomanifestador.nivelCoerencia.toFixed(2)}</p><div className="h-2 bg-secondary rounded-full mt-1"><div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{width: `${nanomanifestador.nivelCoerencia * 100}%`}}></div></div></div>
                        <div><p className="text-sm text-muted-foreground">Taxa de Transmutação: {nanomanifestador.taxaTransmutacao.toFixed(2)}</p><div className="h-2 bg-secondary rounded-full mt-1"><div className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full" style={{width: `${nanomanifestador.taxaTransmutacao * 100}%`}}></div></div></div>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-3 rounded-lg bg-background text-center border"><div className="text-xl font-bold text-blue-400">{nanomanifestador.manifestacoesCount}</div><div className="text-xs text-muted-foreground">Manifestações</div></div>
                            <div className="p-3 rounded-lg bg-background text-center border"><div className="text-xl font-bold text-purple-400">{taxaDeSucesso}%</div><div className="text-xs text-muted-foreground">Sucesso</div></div>
                            <div className="p-3 rounded-lg bg-background text-center border"><div className="text-xl font-bold text-green-400">{nanomanifestador.energia}%</div><div className="text-xs text-muted-foreground">Energia</div></div>
                            <div className="p-3 rounded-lg bg-background text-center border"><div className="text-xl font-bold text-amber-400">{nanomanifestador.estabilidade}%</div><div className="text-xs text-muted-foreground">Estabilidade</div></div>
                        </div>
                    </CardContent>
                </Card>

                {/* Coluna de Frequencia */}
                 <Card className="lg:col-span-2">
                    <CardHeader><CardTitle className="flex items-center gap-2"><RadioTower/>Sincronização de Frequência</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                           {frequencyOptions.map(opt => (
                                <Button key={opt.freq} variant={frequencia === opt.freq ? "secondary" : "outline"} onClick={() => setFrequencia(opt.freq)} className="flex flex-col h-20">
                                    <opt.icon className={cn("w-6 h-6 mb-1", opt.color)} />
                                    <span className="text-sm">{opt.name}</span>
                                    <span className="text-xs text-muted-foreground">{opt.freq} Hz</span>
                                </Button>
                           ))}
                        </div>
                        <div>
                             <div className="flex justify-between items-center mb-1"><span className="text-sm text-muted-foreground">Frequência Manual</span><span className="font-mono text-primary">{frequencia} Hz</span></div>
                             <Slider value={[frequencia]} onValueChange={(v) => setFrequencia(v[0])} min={100} max={1000} step={1} />
                        </div>
                         <Button onClick={handleSincronizar} disabled={isProcessing} className="w-full">
                            {isProcessing ? <LoaderCircle className="animate-spin mr-2" /> : <Zap className="mr-2"/>}Sincronizar
                         </Button>
                    </CardContent>
                </Card>
            </div>
            
            {/* Seção de Manifestação */}
            <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Star/>Manifestação de Realidade</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-sm font-medium text-muted-foreground mb-2 block">Intenção Primária</label>
                            <Input value={intencao} onChange={e => setIntencao(e.target.value)} placeholder="Ex: Harmonia e Abundância" disabled={isProcessing}/>
                        </div>
                        <div>
                             <label className="text-sm font-medium text-muted-foreground mb-2 block">Intensidade: {intensidade}</label>
                            <Slider value={[intensidade]} onValueChange={(v) => setIntensidade(v[0])} min={0.1} max={1} step={0.1} disabled={isProcessing}/>
                        </div>
                    </div>
                     <div>
                        <label className="text-sm font-medium text-muted-foreground mb-2 block">Padrão de Ressonância (Opcional)</label>
                        <Textarea value={ressonancia} onChange={e => setRessonancia(e.target.value)} placeholder="Descreva o padrão vibracional desejado..." disabled={isProcessing}/>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Button onClick={handleManifestar} disabled={isProcessing} className="flex-1">
                            {isProcessing ? <LoaderCircle className="animate-spin mr-2"/> : <Rocket className="mr-2"/>}Manifestar
                        </Button>
                        <Button variant="outline" disabled={isProcessing} className="flex-1"><Save className="mr-2"/>Salvar Padrão</Button>
                    </div>
                </CardContent>
            </Card>

             <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Histórico */}
                 <Card className="lg:col-span-3">
                     <CardHeader><CardTitle className="flex items-center gap-2"><History/>Histórico de Manifestações</CardTitle></CardHeader>
                     <CardContent>
                         <ScrollArea className="h-64">
                             <Table>
                                 <TableHeader>
                                     <TableRow>
                                         <TableHead>Intenção</TableHead>
                                         <TableHead>Freq.</TableHead>
                                         <TableHead>Resultado</TableHead>
                                     </TableRow>
                                 </TableHeader>
                                 <TableBody>
                                     {nanomanifestador.historico.map(m => (
                                         <TableRow key={m.timestamp}>
                                             <TableCell className="max-w-xs truncate font-medium">{m.intencao}</TableCell>
                                             <TableCell>{m.frequencia}Hz</TableCell>
                                             <TableCell>
                                                 <span className={cn("px-2 py-1 rounded-full text-xs", m.sucesso ? 'bg-green-900/50 text-green-300' : 'bg-amber-900/50 text-amber-300')}>
                                                     {m.sucesso ? 'Sucesso' : 'Parcial'}
                                                 </span>
                                            </TableCell>
                                         </TableRow>
                                     ))}
                                 </TableBody>
                             </Table>
                         </ScrollArea>
                     </CardContent>
                 </Card>
                 {/* Gráfico */}
                 <Card className="lg:col-span-2">
                     <CardHeader><CardTitle className="flex items-center gap-2"><BarChart/>Evolução da Coerência</CardTitle></CardHeader>
                     <CardContent className="h-64">
                         <canvas ref={coerenciaCanvasRef}></canvas>
                     </CardContent>
                 </Card>
             </div>
             
             {/* Console de Logs */}
            <Card>
                 <CardHeader><CardTitle className="flex items-center gap-2"><Terminal/>Console de Logs do Sistema</CardTitle></CardHeader>
                 <CardContent>
                     <ScrollArea className="h-40 w-full bg-background rounded-md border p-2">
                        <div className="p-2 font-mono text-xs space-y-1">
                         {logs.map((log, i) => (
                            <div key={i} className="flex items-start">
                                <LogIcon type={log.type} />
                                <span className="text-gray-500 mr-2">{log.timestamp}</span>
                                <span className={cn(
                                    log.type === 'ERROR' && 'text-red-400',
                                    log.type === 'WARNING' && 'text-yellow-400',
                                    log.type === 'SUCCESS' && 'text-green-400',
                                )}>{log.message}</span>
                            </div>
                         ))}
                        </div>
                     </ScrollArea>
                 </CardContent>
             </Card>
        </div>
    );
};

export default ModuleTwo;

    