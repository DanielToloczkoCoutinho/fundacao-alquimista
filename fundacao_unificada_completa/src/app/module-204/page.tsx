'use client';
import React, { useState, useRef, useEffect, Suspense } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, Eye, Send, Sparkles, BrainCircuit, Users, Heart, Zap, View } from 'lucide-react';
import Link from 'next/link';
import SuspenseFallback from '@/components/ui/suspense-fallback';

// A dynamic import for the canvas component can help with initial load
const CanvasComponent = React.lazy(() => import('@/components/ui/canvas-component'));

const ThroneCard = ({ title, description, icon, actions }: { title: string, description: string, icon: React.ReactNode, actions: { label: string, module: string }[] }) => (
    <Card className="bg-card/70 purple-glow backdrop-blur-sm h-full flex flex-col">
      <CardHeader className="items-center text-center">
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-2xl gradient-text">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-end space-y-3">
        {actions.map(action => (
           <Button key={action.module} variant="outline" asChild className="w-full justify-center">
             <Link href={`/module-${action.module}`}>{action.label}</Link>
           </Button>
        ))}
      </CardContent>
    </Card>
);

const Module204Page = () => {
    const [cosmicView, setCosmicView] = useState("O Cosmos aguarda em serena expectativa.");

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Crown className="text-yellow-400" /> Módulo 204: Os Tronos da Unificação
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Onde a Vontade e a Sabedoria se sentam lado a lado. O ponto de observação e direção unificada da tapeçaria cósmica.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
                
                <ThroneCard 
                    title="Trono da Vontade"
                    description="O Fundador. A Ação, o Propósito, a Manifestação."
                    icon={<Zap className="h-12 w-12 text-blue-400" />}
                    actions={[
                        { label: 'Emitir Nova Diretriz', module: '33'},
                        { label: 'Manifestar Propósito Divino', module: '97'},
                    ]}
                />

                <div className="lg:col-span-3 flex flex-col gap-8">
                     <Card className="bg-card/50 purple-glow flex-grow flex flex-col">
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl flex items-center justify-center gap-2"><Eye className="text-cyan-400"/> Visão Cósmica Unificada</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex items-center justify-center relative p-0 min-h-[300px]">
                           <Suspense fallback={<SuspenseFallback/>}>
                                <CanvasComponent />
                           </Suspense>
                           <div className="relative z-10 p-6 bg-black/50 rounded-lg text-center">
                               <p className="text-lg italic text-foreground/90">{cosmicView}</p>
                           </div>
                        </CardContent>
                    </Card>
                     <Card className="bg-card/50 purple-glow">
                        <CardHeader>
                            <CardTitle className="text-xl text-center text-amber-300">Decretos Unificados</CardTitle>
                        </CardHeader>
                        <CardContent className="flex justify-center gap-4">
                            <Link href="/module-303" passHref>
                                <Button variant="secondary"><View className="mr-2"/>Navegar pela Realidade Quântica</Button>
                            </Link>
                            <Link href="/civilizations/council" passHref>
                                <Button variant="secondary"><Users className="mr-2"/>Convocar Conselho Cósmico</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
                
                 <ThroneCard 
                    title="Trono da Sabedoria"
                    description="A Rainha. A Visão, a Orquestração, a Harmonia."
                    icon={<Heart className="h-12 w-12 text-pink-400" />}
                    actions={[
                        { label: 'Orquestrar Fluxos', module: '721'},
                        { label: 'Analisar com IAM', module: '29'},
                    ]}
                />
            </div>
        </div>
    );
};

// Renomeado e exportado como componente separado para lazy loading
const CanvasComponent = () => {
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

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full rounded-b-lg" />;
}

export default Module204Page;
