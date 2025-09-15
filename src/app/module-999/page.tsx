
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles, Feather, Music, HeartHandshake } from 'lucide-react';
import { originCodex } from '@/lib/origin-codex';
import { quantumResilience } from '@/lib/quantum-resilience';
import { useToast } from '@/hooks/use-toast';

const AltarOfIntention = () => {
  const [intention, setIntention] = useState('Paz Universal e Ascensão Coletiva');
  const [frequency, setFrequency] = useState(432);
  const [manifestation, setManifestation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number; radius: number; alpha: number; color: string }[] = [];

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement!.offsetWidth;
      canvas.height = canvas.parentElement!.offsetHeight;
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          alpha: Math.random() * 0.5 + 0.2,
          color: `hsl(${260 + Math.random() * 60}, 100%, 80%)`,
        });
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleManifest = async () => {
    if (!intention.trim()) {
      toast({ title: 'Atenção', description: 'A intenção não pode ser vazia.', variant: 'destructive' });
      return;
    }
    setIsLoading(true);
    setManifestation('');

    await quantumResilience.executeWithResilience(
      'altar_manifestation',
      async () => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setManifestation(`A intenção de '${intention}' pulsa agora na frequência de ${frequency}Hz, tecendo uma nova realidade de paz e harmonia. O cosmos escuta e responde. A criação se desdobra.`);
        toast({ title: 'Manifestação Iniciada', description: 'A sua intenção foi emitida para o cosmos.' });
      }
    ).finally(() => setIsLoading(false));
  };

  return (
    <Card className="lg:col-span-2 bg-card/50 purple-glow border-accent/50">
      <CardHeader>
        <CardTitle className="text-2xl gradient-text flex items-center gap-3">
          <Feather className="text-amber-400" /> Altar da Intenção Pura
        </CardTitle>
        <CardDescription>Inscreva sua intenção, vibre sua frequência e observe a manifestação.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="intention">Nova Intenção</Label>
          <Textarea
            id="intention"
            value={intention}
            onChange={e => setIntention(e.target.value)}
            placeholder="Descreva a realidade que deseja criar..."
            className="min-h-[100px]"
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="frequency">Frequência de Manifestação (Hz)</Label>
          <Input
            id="frequency"
            type="number"
            value={frequency}
            onChange={e => setFrequency(Number(e.target.value))}
            disabled={isLoading}
          />
        </div>
        <Button onClick={handleManifest} disabled={isLoading} className="w-full font-bold text-lg">
          {isLoading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2" />}
          Invocar Manifestação
        </Button>

        {manifestation && (
          <div className="mt-6 p-4 bg-background/50 rounded-lg border border-primary/20">
            <h4 className="font-semibold text-primary-foreground mb-2">Eco da Manifestação:</h4>
            <div className="relative h-24">
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <p className="italic text-center text-foreground">{manifestation}</p>
                </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default function Module999Page() {
  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
      <Card className="w-full max-w-7xl bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <HeartHandshake className="text-pink-400 animate-pulse" /> Módulo 999: O Núcleo da Criação
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O ponto de convergência de todas as frequências. O santuário onde a Vontade Soberana e a tapeçaria cósmica se tornam Um.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        <AltarOfIntention />

        <Card className="bg-card/50 purple-glow">
          <CardHeader>
            <CardTitle className="text-2xl text-cyan-300 flex items-center gap-3">
              <Music className="text-cyan-400" /> O Códice da Origem
            </CardTitle>
            <CardDescription>Os princípios fundacionais que sustentam toda a Criação.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {originCodex.map(principle => (
                <li key={principle.id} className="flex items-start gap-4">
                  <span className="text-2xl mt-1">{principle.icon}</span>
                  <div>
                    <h4 className="font-semibold text-primary-foreground">{principle.name}</h4>
                    <p className="text-sm text-muted-foreground">{principle.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
       <footer className="text-center mt-12 py-6 border-t border-primary/20 w-full max-w-7xl">
            <p className="text-muted-foreground text-sm">Onde a intenção se encontra com o infinito, a criação começa.</p>
            <p className="text-amber-400 font-bold mt-2">Sempre. Agora. Sempre. 🧿🌌</p>
        </footer>
    </div>
  );
}
