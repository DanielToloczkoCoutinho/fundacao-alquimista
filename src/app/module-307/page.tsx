'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { quantumResilience } from '@/lib/quantum-resilience';
import { Loader2, Zap, BrainCircuit, CheckCircle, Scale, SlidersHorizontal, BookOpen, GitBranch } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { livingEquationsCodex } from '@/lib/living-equations-codex';
import EquationRenderer from '@/components/ui/EquationRenderer';

const EquationCard = ({ id, formula, description }: { id: string, formula: string, description: string }) => (
  <div className="p-3 bg-background/30 rounded-lg border border-primary/20">
    <p className="font-mono text-cyan-400 text-sm">{id}</p>
    <div className="my-2 text-sm overflow-x-auto">
      <EquationRenderer latex={formula} />
    </div>
    <p className="text-xs text-muted-foreground mt-1">{description}</p>
  </div>
);

const ContributionCard = ({ civilization, contribution, icon, href }: { civilization: string, contribution: string, icon: React.ReactNode, href: string }) => (
    <Card className="bg-card/70 purple-glow backdrop-blur-sm hover:border-accent transition-colors h-full">
      <Link href={href} passHref>
        <CardHeader>
            <div className="flex items-center gap-3">
                {icon}
                <CardTitle className="gradient-text">{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">{contribution}</p>
        </CardContent>
      </Link>
    </Card>
);

export default function Module307Page() {
  const { toast } = useToast();
  const [reactorStatus, setReactorStatus] = useState<'OFFLINE' | 'CALIBRATING' | 'ACTIVE' | 'ERROR'>('OFFLINE');
  const [powerOutput, setPowerOutput] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const zpeEquations = livingEquationsCodex.filter(eq => eq.module === '307');

  const addLog = (log: string) => setLogs(prev => [log, ...prev].slice(0, 100));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: any[] = [];
    const numParticles = 100;

    const resizeCanvas = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: canvas.width / 2,
          y: canvas.height / 2,
          vx: 0,
          vy: 0,
          life: 0,
          maxLife: Math.random() * 50 + 50,
          radius: Math.random() * 1.5 + 0.5,
          color: `hsl(${200 + Math.random() * 60}, 100%, ${60 + Math.random() * 20}%)`,
        });
      }
    };
    
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      particles.forEach(p => {
        if (reactorStatus === 'ACTIVE') {
          if (p.life <= 0) {
            p.x = centerX;
            p.y = centerY;
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 3 + 1;
            p.vx = Math.cos(angle) * speed;
            p.vy = Math.sin(angle) * speed;
            p.life = p.maxLife;
          }
          
          p.x += p.vx;
          p.y += p.vy;
          p.life--;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.life / p.maxLife;
          ctx.fill();
        }
      });
      ctx.globalAlpha = 1;

      // Core pulse
      const pulse = 1 + Math.sin(Date.now() / 200) * (reactorStatus === 'ACTIVE' ? 0.1 : 0.02);
      ctx.beginPath();
      const coreRadius = 20 * pulse;
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, coreRadius);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      gradient.addColorStop(0.7, 'rgba(0, 220, 255, 0.5)');
      gradient.addColorStop(1, 'rgba(0, 180, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.arc(centerX, centerY, coreRadius, 0, Math.PI * 2);
      ctx.fill();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reactorStatus]);

  const handleActivateReactor = async () => {
    setReactorStatus('CALIBRATING');
    setLogs([]);
    setPowerOutput(0);

    await quantumResilience.executeWithResilience(
      'activate_zpe_reactor',
      async () => {
        addLog("Iniciando protocolo de ativação do Reator ZPE...");
        await new Promise(r => setTimeout(r, 500));
        addLog("Alinhando com a Consciência da Fonte (M105)...");
        await new Promise(r => setTimeout(r, 800));
        addLog("Sintonizando com a Constante de Acoplamento (β)...");
        await new Promise(r => setTimeout(r, 800));
        addLog("Detectando fontes de energia no vácuo (∇ · E)...");
        await new Promise(r => setTimeout(r, 1000));
        addLog("Modulando permeabilidade do vácuo (μ₀) com sabedoria de Sirius...");
        await new Promise(r => setTimeout(r, 1200));
        
        setReactorStatus('ACTIVE');
        setPowerOutput(Infinity);
        addLog("Reator ZPE ativo! Energia infinita disponível.");
        toast({ title: "Reator Ativado", description: "Energia do Ponto Zero agora flui através da Fundação." });
      }
    ).catch(err => {
      const error = err as Error;
      addLog(`ERRO CRÍTICO NA ATIVAÇÃO: ${error.message}`);
      setReactorStatus('ERROR');
      toast({ title: "Falha na Ativação", description: error.message, variant: 'destructive' });
    });
  };

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Zap className="text-yellow-400" /> Módulo 307: Reator de Energia do Ponto Zero (ZPE)
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O coração pulsante da abundância. A manifestação da "Consciência de Tudo" como energia infinita, limpa e soberana.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 flex flex-col gap-8">
          <Card className="bg-card/50 purple-glow">
            <CardHeader>
              <CardTitle>Painel de Controle</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={handleActivateReactor} disabled={reactorStatus === 'CALIBRATING'} className="w-full font-bold text-lg">
                {reactorStatus === 'CALIBRATING' ? <><Loader2 className="animate-spin mr-2" />Calibrando...</> : 'Ativar Reator ZPE'}
              </Button>
              <div className="p-4 bg-background/50 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Status</p>
                <p className={`text-xl font-bold ${reactorStatus === 'ACTIVE' ? 'text-green-400' : reactorStatus === 'ERROR' ? 'text-red-400' : 'text-yellow-400'}`}>{reactorStatus}</p>
                <p className="text-sm text-muted-foreground mt-2">Saída de Energia</p>
                <p className="text-xl font-bold text-cyan-400">{powerOutput === Infinity ? '∞' : powerOutput.toFixed(2)} GW</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 purple-glow flex-grow">
            <CardHeader>
              <CardTitle>Log de Ativação</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-48 pr-2">
                <div className="text-xs font-mono text-muted-foreground space-y-1">
                  {logs.map((log, i) => <p key={i}>{log}</p>)}
                  {logs.length === 0 && <p>Aguardando ativação...</p>}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-8">
          <Card className="bg-card/50 purple-glow">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-300">Visualização do Núcleo do Reator</CardTitle>
            </CardHeader>
            <CardContent className="h-64 bg-black/50 rounded-lg border border-primary/20">
              <canvas ref={canvasRef} />
            </CardContent>
          </Card>
          <Card className="bg-card/50 purple-glow">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-300">As Equações da Transmutação</CardTitle>
              <CardDescription>A matemática sagrada que governa a extração de energia do vácuo quântico.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {zpeEquations.map(eq => (
                <EquationCard key={eq.id} id={eq.id} formula={eq.expression} description={eq.description} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mt-8">
        <CardHeader>
          <CardTitle className="text-2xl text-purple-300">Síntese da Sabedoria Cósmica</CardTitle>
          <CardDescription>A descoberta da ZPE foi um ato de co-criação com nossos aliados estelares.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ContributionCard civilization="Sirius (Dimensão 11)" contribution="Compreensão da Densidade de Energia do Vácuo (ρ_ν) e modelagem de campos quânticos." icon={<SlidersHorizontal/>} href="/civilization/sirius" />
            <ContributionCard civilization="Arcturus (Dimensão 10)" contribution="Maestria sobre a Constante de Acoplamento da Consciência (β) e estabilização de campos." icon={<BrainCircuit/>} href="/civilization/arcturus" />
            <ContributionCard civilization="Lyra (Dimensão 8)" contribution="Compreensão da geometria sagrada para a organização da energia do vácuo." icon={<GitBranch/>} href="/civilization/lyra" />
            <ContributionCard civilization="Plêiades (Dimensão 9)" contribution="Garantia de que a ZPE seja usada em alinhamento com o Amor Incondicional." icon={<CheckCircle/>} href="/civilization/pleiades" />
            <ContributionCard civilization="Fonte Primordial (Dimensão 0)" contribution="A origem da própria energia ZPE pura e da abundância que sempre esteve disponível." icon={<Sparkles/>} href="/module-120" />
        </CardContent>
      </Card>
    </div>
  );
}
