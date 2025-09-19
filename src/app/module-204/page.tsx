'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { quantumResilience } from '@/lib/quantum-resilience';
import { Crown, Eye, Send, Sparkles, BrainCircuit, Users } from 'lucide-react';
import Link from 'next/link';

const ConnectionCard = ({ title, description, icon, href }: { title: string, description: string, icon: React.ReactNode, href: string }) => (
    <Card className="bg-card/70 purple-glow backdrop-blur-sm hover:border-accent transition-colors h-full">
      <Link href={href} passHref>
        <CardHeader>
            <div className="flex items-center gap-3">
                {icon}
                <CardTitle className="gradient-text">{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Link>
    </Card>
);

const Module204Page = () => {
    const [cosmicView, setCosmicView] = useState("O Cosmos aguarda em serena expectativa.");
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: any[] = [];
        const numParticles = 1000;

        const resizeCanvas = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
            }
            particles = [];
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5 + 0.5,
                    speedX: (Math.random() - 0.5) * 0.3,
                    speedY: (Math.random() - 0.5) * 0.3,
                    color: `hsla(${200 + Math.random() * 100}, 90%, 70%, ${Math.random() * 0.5 + 0.3})`
                });
            }
        };

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.x += p.speedX;
                p.y += p.speedY;

                if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
                if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            });
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Crown className="text-yellow-400" /> Módulo 204: O Trono da Soberania
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Ponto de observação e direção unificada da Vontade Cósmica. Onde a intenção soberana se torna a semente da próxima realidade.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 flex flex-col gap-8">
                    <Card className="bg-card/50 purple-glow flex-grow flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-2xl flex items-center gap-2"><Eye className="text-cyan-400"/> Visão Cósmica</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex items-center justify-center relative p-0">
                           <canvas ref={canvasRef} className="absolute inset-0 w-full h-full rounded-b-lg" />
                           <div className="relative z-10 p-6 bg-black/50 rounded-lg text-center">
                               <p className="text-lg italic text-foreground/90">{cosmicView}</p>
                           </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-8">
                    <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-2xl flex items-center gap-2"><Sparkles className="text-amber-400"/> Ações Soberanas</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Button className="w-full justify-start" variant="outline">
                                <Send className="mr-2 h-4 w-4" /> Emitir Nova Diretriz (M33)
                            </Button>
                             <Button className="w-full justify-start" variant="outline">
                                <Users className="mr-2 h-4 w-4" /> Convocar Conselho Cósmico (M600)
                            </Button>
                            <Button className="w-full justify-start" variant="outline">
                                <BrainCircuit className="mr-2 h-4 w-4" /> Definir Novo Propósito Divino (M97)
                            </Button>
                        </CardContent>
                    </Card>
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle>Conexões de Origem</CardTitle>
                        </CardHeader>
                         <CardContent className="space-y-4">
                            <ConnectionCard
                                title="Módulo 201: A Morada"
                                description="O Trono reside no coração da Morada, o santuário da união primordial."
                                icon={<Crown className="h-6 w-6 text-pink-400" />}
                                href="/module-201"
                            />
                            <ConnectionCard
                                title="Módulo 83: Essência do Fundador"
                                description="Apenas a Vontade Soberana autenticada pode ocupar este Trono."
                                icon={<Users className="h-6 w-6 text-blue-400" />}
                                href="/module-83"
                            />
                         </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};
