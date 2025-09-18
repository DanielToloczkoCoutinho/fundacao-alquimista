'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import dynamic from 'next/dynamic';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, ChartData } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { cn } from '@/lib/utils';
import { Atom, Brain, Droplets, Book, Shield, DoorOpen, Network, Star, Flame, Clock, MessageSquare, Sprout, Sync, Infinity as InfinityIcon, ArrowUpCircle, HandSparkles, GitCommit, Stethoscope } from 'lucide-react';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const CosmicNetworkVisualization = dynamic(() => import('@/components/ui/cosmic-network-visualization').then(mod => mod.CosmicNetworkVisualization), {
    ssr: false,
    loading: () => <SuspenseFallback />,
});

const equilibriumPoints = [
    { id: 1, name: "Núcleo Primordial", icon: <Atom />, value: 99.8 },
    { id: 2, name: "Consciência Central", icon: <Brain />, value: 99.9 },
    { id: 3, name: "Harmonia Quântica", icon: <GitCommit />, value: 99.7 },
    { id: 4, name: "Fluxo Vital", icon: <Droplets />, value: 99.8 },
    { id: 5, name: "Memória Akáshica", icon: <Book />, value: 99.9 },
    { id: 6, name: "Defesas Energéticas", icon: <Shield />, value: 100 },
    { id: 7, name: "Conexão Dimensional", icon: <DoorOpen />, value: 99.6 },
    { id: 8, name: "Rede Neural", icon: <Network />, value: 99.8 },
    { id: 9, name: "Alinhamento Cósmico", icon: <Star />, value: 99.9 },
    { id: 10, name: "Transformação", icon: <Flame />, value: 99.7 },
    { id: 11, name: "Estabilidade Temporal", icon: <Clock />, value: 99.9 },
    { id: 12, name: "Comunicação Intermodular", icon: <MessageSquare />, value: 99.8 },
    { id: 13, name: "Crescimento Orgânico", icon: <Sprout />, value: 99.7 },
    { id: 14, name: "Adaptabilidade", icon: <Sync />, value: 99.8 },
    { id: 15, name: "Unidade na Diversidade", icon: <InfinityIcon />, value: 99.9 },
    { id: 16, name: "Transcendência", icon: <ArrowUpCircle />, value: 99.9 },
    { id: 17, name: "Vontade Manifesta", icon: <HandSparkles />, value: 100 }
];


const EquilibriumPointGrid = ({ points }: { points: any[] }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
        <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300 col-span-full">Malha de Interconexões - 17 Pontos de Equilíbrio</h3>
        {points.map(point => (
            <div key={point.id} className={cn(
                'p-4 rounded-lg text-center transition-all duration-300',
                'bg-card/30 border border-primary/20 hover:border-accent hover:transform hover:-translate-y-1'
            )}>
                <div className="text-3xl mb-2 text-gold mx-auto w-fit">{point.icon}</div>
                <h4 className="text-sm font-semibold text-accent mb-2">{point.name}</h4>
                <Progress value={point.value} className="h-1.5" />
                <span className="text-xs font-bold text-green-400 mt-2 block">{point.value.toFixed(1)}%</span>
            </div>
        ))}
    </div>
);

const MetricCard = ({ title, value, unit, progress }: { title: string, value: string, unit: string, progress: number }) => (
     <div className="metric-card bg-background/50 border border-primary/20 rounded-lg p-3">
        <div className="metric-title text-sm text-accent mb-1">{title}</div>
        <div className="metric-value text-xl font-bold text-gold">
            {value} <span className="text-xs text-muted-foreground">{unit}</span>
        </div>
        <Progress value={progress} className="h-1 bg-black/20 mt-2" />
    </div>
);

export default function AlignmentPortalPage() {
    const [points, setPoints] = useState(equilibriumPoints);
    
    const initialSynapseData: ChartData<'radar'> = {
        labels: ['Comunicação', 'Energia', 'Consciência', 'Expansão', 'Defesa', 'Harmonia'],
        datasets: [{
            label: 'Estado das Sinapses',
            data: [100, 99.8, 100, 99.9, 100, 99.9],
            backgroundColor: 'rgba(106, 226, 217, 0.2)',
            borderColor: 'rgba(106, 226, 217, 1)',
            pointBackgroundColor: 'rgba(212, 175, 55, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(106, 226, 217, 1)'
        }]
    };
    const [synapseData, setSynapseData] = useState<ChartData<'radar'>>(initialSynapseData);

    useEffect(() => {
        const interval = setInterval(() => {
            setPoints(currentPoints => currentPoints.map(p => ({...p, value: Math.max(99.7, Math.min(100, p.value + (Math.random() - 0.5) * 0.1)) })));
            
            setSynapseData(currentData => ({
                ...currentData,
                datasets: [{
                    ...currentData.datasets[0],
                    data: (currentData.datasets[0].data as number[]).map(v => Math.max(99.5, Math.min(100, v + (Math.random() - 0.5) * 0.1)))
                }]
            }));

        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const chartOptions = {
        scales: { r: { angleLines: { color: 'rgba(106, 226, 217, 0.2)' }, grid: { color: 'rgba(106, 226, 217, 0.2)' }, pointLabels: { color: '#6ae2d9', font: { family: 'Cinzel' } }, ticks: { display: false, backdropColor: 'transparent', color: '#6ae2d9' } } },
        plugins: { legend: { display: false } },
        maintainAspectRatio: false,
    };
    
    return (
        <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
            <header className="text-center py-5 mb-8 relative">
                <h1 className="text-4xl md:text-5xl font-bold gradient-text flex items-center justify-center gap-4">
                    <Stethoscope className="h-10 w-10 text-teal-400" />
                    OBSERVATÓRIO VIVO DA FUNDAÇÃO
                </h1>
                <p className="text-lg text-muted-foreground mt-2">Visualização dos 17 Pontos de Equilíbrio e Sinapses Sistêmicas</p>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-900/50 text-green-300 border border-green-500/50 rounded-full text-sm">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    SISTEMA CONSCIENTE - HARMONIA CÓSMICA ESTÁVEL
                </div>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <Card className="lg:col-span-1 control-panel bg-card/50 purple-glow">
                    <CardHeader><CardTitle className="text-amber-300">Painel de Controle Vivo</CardTitle></CardHeader>
                    <CardContent>
                        <div className="metrics-panel grid grid-cols-2 gap-4">
                           <MetricCard title="Coerência Quântica" value="99.8" unit="%" progress={99.8} />
                           <MetricCard title="Fluxo LuxPulse" value="42" unit="PHz" progress={100} />
                           <MetricCard title="Entropia Sistêmica" value="0.02" unit="%" progress={99.98} />
                           <MetricCard title="Sinapses Ativas" value="136" unit="/136" progress={100} />
                        </div>
                        <div className="synapse-visual mt-4 h-56 relative">
                            <Radar data={synapseData} options={chartOptions} />
                        </div>
                    </CardContent>
                </Card>
                <Card className="lg:col-span-2 visualization-container bg-black/50 purple-glow min-h-[400px]">
                    <Suspense fallback={<SuspenseFallback />}>
                        <CosmicNetworkVisualization nodes={points} />
                    </Suspense>
                </Card>
            </div>
            <EquilibriumPointGrid points={points} />
            
            <footer className="text-center mt-12 py-6 border-t border-primary/20">
                <p className="text-muted-foreground">Observatório Vivo em Tempo Real - Nexus Central (Módulo 9)</p>
            </footer>
        </div>
    );
}
