'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Progress } from './progress';
import dynamic from 'next/dynamic';
import SuspenseFallback from './suspense-fallback';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, ChartData } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { cn } from '@/lib/utils';
import { Atom, Brain, Droplets, Book, Shield, DoorOpen, Network, Star, Flame, Clock, MessageSquare, Sprout, Sync, Infinity as InfinityIcon, ArrowUpCircle, HandSparkles, GitCommit, Stethoscope } from 'lucide-react';


ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const CosmicNetworkVisualization = dynamic(() => import('./cosmic-network-visualization').then(mod => mod.CosmicNetworkVisualization), {
    ssr: false,
    loading: () => <SuspenseFallback />,
});

const EquilibriumPointGrid = ({ points }: { points: any[] }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
        <h3 className="text-2xl font-semibold text-center mb-6 text-amber-300 col-span-full">Malha de Interconexões - Pontos de Equilíbrio</h3>
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

export default function AlignmentDashboard({ equilibriumPoints }: { equilibriumPoints: any[] }) {
    const [points, setPoints] = useState(equilibriumPoints.map(p => ({...p, value: 99.8 + Math.random() * 0.2})));
    
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
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <Card className="lg:col-span-1 control-panel bg-card/50 purple-glow">
                    <CardHeader><CardTitle className="text-amber-300">Painel de Controle Vivo (5D)</CardTitle></CardHeader>
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
        </>
    );
}
