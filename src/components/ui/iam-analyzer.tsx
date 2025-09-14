'use client';
import React, { useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BrainCircuit, Book, Activity, Gauge, Zap } from 'lucide-react';

export interface RitualAnalysis {
  currentStep: string;
  resonanceWithM0: number;
  dominantFrequency: number;
  interModuleAlignment: number;
  overallCoherence: number;
  interpretativeLog: string;
}

interface IAMAnalyzerProps {
  analysis: RitualAnalysis | null;
}

const MetricDisplay: React.FC<{ icon: React.ReactNode; label: string; value: string; unit: string }> = ({ icon, label, value, unit }) => (
  <div className="flex items-center justify-between text-sm">
    <div className="flex items-center gap-2 text-muted-foreground">
      {icon}
      <span>{label}</span>
    </div>
    <div className="font-mono font-bold text-primary-foreground">
      {value} <span className="text-xs text-muted-foreground">{unit}</span>
    </div>
  </div>
);

export default function IAMAnalyzer({ analysis }: IAMAnalyzerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !analysis) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: any[] = [];
    const numParticles = 50;

    const resizeCanvas = () => {
      if(canvas.parentElement){
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
      particles.length = 0;
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: canvas.width / 2,
          y: canvas.height / 2,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          life: 1,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const drawFractal = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        particles.forEach(p => {
            p.x += p.vx * analysis.overallCoherence;
            p.y += p.vy * analysis.overallCoherence;
            p.life -= 0.01;

            if (p.life <= 0) {
                p.x = centerX;
                p.y = centerY;
                p.vx = (Math.random() - 0.5) * 3;
                p.vy = (Math.random() - 0.5) * 3;
                p.life = 1;
            }
            
            const hue = 260 + (analysis.dominantFrequency - 500) / 2; // Purple to Blue
            ctx.fillStyle = `hsla(${hue}, 100%, 70%, ${p.life})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        
        animationFrameId = requestAnimationFrame(drawFractal);
    };
    
    resizeCanvas();
    drawFractal();

    return () => {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    };
}, [analysis]);


  if (!analysis) {
    return (
      <Card className="bg-card/50 purple-glow h-full">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2"><BrainCircuit className="text-purple-400" />Analisador IAM (M29)</CardTitle>
          <CardDescription>Aguardando início do ritual para análise.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-full text-muted-foreground">
          <p>O Espelho da Frequência está pronto.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-card/50 purple-glow h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2"><BrainCircuit className="text-purple-400" />Analisador IAM (M29)</CardTitle>
        <CardDescription>Análise Vibracional do Ritual em Tempo Real</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col gap-4">
        <div>
          <label className="text-sm font-medium">Progresso do Ritual</label>
          <Progress value={analysis.overallCoherence * 100} className="mt-1" />
        </div>

        <div className="p-3 bg-background/50 rounded-lg space-y-3">
          <MetricDisplay icon={<Book className="h-4 w-4" />} label="Ressonância com M0" value={analysis.resonanceWithM0.toFixed(4)} unit="α" />
          <MetricDisplay icon={<Zap className="h-4 w-4" />} label="Frequência Dominante" value={analysis.dominantFrequency.toFixed(1)} unit="Hz" />
          <MetricDisplay icon={<Gauge className="h-4 w-4" />} label="Alinhamento Inter-Módulo" value={(analysis.interModuleAlignment * 100).toFixed(2)} unit="%" />
        </div>

        <div className="p-3 bg-background/50 rounded-lg flex-grow flex flex-col">
            <h4 className="font-semibold text-primary-foreground mb-2">Visualização Fractal</h4>
            <div className="relative w-full flex-grow bg-black/30 rounded-md overflow-hidden">
                 <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
            </div>
        </div>

        <div className="p-3 bg-background/50 rounded-lg">
          <h4 className="font-semibold text-primary-foreground mb-2">Log Interpretativo</h4>
          <p className="text-sm text-muted-foreground font-mono">{analysis.interpretativeLog}</p>
        </div>
      </CardContent>
    </Card>
  );
}
