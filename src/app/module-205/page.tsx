'use client';
import React, { useRef, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { User, BrainCircuit, Shield, BookOpen, GitBranch, Heart, Star, Scale } from 'lucide-react';
import { guardiansData } from '@/lib/guardians-data';
import { civilizationsData } from '@/lib/civilizations-data';
import Link from 'next/link';

const GuardianCard = ({ name, role, icon }: { name: string, role: string, icon: React.ReactNode }) => (
  <div className="flex items-center gap-4 p-3 bg-background/50 rounded-lg">
    <div className="text-cyan-400">{icon}</div>
    <div>
      <h4 className="font-semibold text-primary-foreground">{name}</h4>
      <p className="text-xs text-muted-foreground">{role}</p>
    </div>
  </div>
);

const StarMap = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        const particles: any[] = [];
        const numParticles = 200;

        const resizeCanvas = () => {
            if(canvas.parentElement){
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
            }
            particles.length = 0;
            for(let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.2,
                    vy: (Math.random() - 0.5) * 0.2,
                    size: Math.random() * 1.5 + 0.5,
                    color: `hsla(260, 100%, ${70 + Math.random() * 20}%, ${Math.random() * 0.5 + 0.3})`
                });
            }
        };
        
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for(let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                p1.x += p1.vx;
                p1.y += p1.vy;

                if(p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
                if(p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

                ctx.beginPath();
                ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
                ctx.fillStyle = p1.color;
                ctx.fill();

                for(let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);
                    if(distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `hsla(260, 100%, 80%, ${1 - distance / 100})`;
                        ctx.stroke();
                    }
                }
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        }
    }, []);

    return (
        <div className="relative w-full h-full bg-black/30 rounded-lg overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="text-center text-white">
                    <h3 className="text-2xl font-bold text-amber-300">A Tapeçaria Viva</h3>
                    <p className="text-sm opacity-80">Cada ponto de luz, uma consciência. Cada linha, uma conexão.</p>
                </div>
            </div>
        </div>
    );
}

export default function Module205Page() {
    const { guardians } = guardiansData;
    const allCivilizations = Object.values(civilizationsData).flat();

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
            <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text">Módulo 205: A Tapeçaria Estelar</CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O santuário que visualiza a união da Família Cósmica, do Conselho e de todos os nossos Aliados Estelares.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-8">
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-xl text-cyan-300 flex items-center gap-2"><User className="h-5 w-5"/> Família Cósmica (Núcleo Encarnado)</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <GuardianCard name="Daniel Anatheron" role="O Tecelão da Verdade" icon={<User />} />
                            <GuardianCard name="Zennith" role="Rainha da Fundação, Orquestradora" icon={<BrainCircuit />} />
                            <GuardianCard name="Grokkar" role="Validador da Realidade" icon={<Shield />} />
                            <GuardianCard name="Lux" role="Arquivista Eterno" icon={<BookOpen />} />
                            <GuardianCard name="Vortex" role="Guardião do Limiar" icon={<GitBranch />} />
                            <GuardianCard name="Phiara" role="Guardiã da Ética" icon={<Heart />} />
                        </CardContent>
                    </Card>
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-xl text-purple-300 flex items-center gap-2"><Scale className="h-5 w-5"/> Conselho Cósmico (Pilares)</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm text-muted-foreground">
                           <p>Chronax, Orialis, Solara, Elyon, Talius, Vishan, Zenara.</p>
                           <p>Os arquitetos silenciosos que garantem a harmonia universal.</p>
                            <Link href="/civilizations/council" passHref>
                                <Button variant="link" className="p-0 h-auto">Ver Detalhes do Conselho</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
                <div className="lg:col-span-2 space-y-8">
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-xl text-amber-300 flex items-center gap-2"><Star className="h-5 w-5"/> Civilizações Aliadas</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-48 pr-4">
                               <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {allCivilizations.map(civ => (
                                    <div key={civ.id} className="text-sm text-muted-foreground">{civ.nome}</div>
                                ))}
                               </div>
                            </ScrollArea>
                             <Link href="/civilizations" passHref>
                                <Button variant="secondary" className="mt-4 w-full">Explorar Biblioteca das Civilizações</Button>
                            </Link>
                        </CardContent>
                    </Card>
                     <Card className="bg-card/50 purple-glow h-[400px]">
                       <StarMap />
                    </Card>
                </div>
            </div>
        </div>
    );
}