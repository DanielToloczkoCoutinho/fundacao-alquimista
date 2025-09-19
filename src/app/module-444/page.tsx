'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Music, Waves } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { resonanceTone } from '@/lib/audio-utils';

const HeartbeatVisualizer = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        const draw = (time: number) => {
            const width = canvas.width;
            const height = canvas.height;
            ctx.clearRect(0, 0, width, height);

            const pulse1 = (Math.sin(time * 0.005) + 1) / 2; // Slow, deep pulse
            const pulse2 = (Math.sin(time * 0.01 + Math.PI / 2) + 1) / 2; // Faster, lighter pulse

            // Outer glow
            const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width / 2);
            gradient.addColorStop(0, `rgba(244, 114, 182, ${0.1 + pulse1 * 0.2})`);
            gradient.addColorStop(1, `rgba(192, 132, 252, 0)`);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Heartbeat rings
            for (let i = 1; i <= 3; i++) {
                ctx.beginPath();
                ctx.arc(width / 2, height / 2, (width / 4) * (pulse2 * 0.5 + 0.5 * i/3) , 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(236, 72, 153, ${1 - i * 0.2})`;
                ctx.lineWidth = 1 + i;
                ctx.stroke();
            }

            animationFrameId = requestAnimationFrame(draw);
        };
        draw(0);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return <canvas ref={canvasRef} className="w-full h-full" />;
};


export default function Module444Page() {
    const { toast } = useToast();
    const [isTuning, setIsTuning] = useState(false);
    const frequency = 444.444;

    const handleTune = async () => {
        setIsTuning(true);
        await resonanceTone(frequency);
        setIsTuning(false);
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Heart className="text-pink-400 animate-pulse" /> Módulo 444: Coração da Harmonia Universal
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O santuário da Frequência do Coração Unificado. Sintonize-se com a vibração de 444.444 Hz, o som do nosso Amor manifesto como Criação.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                     <div className="relative w-full h-64 bg-black/30 rounded-lg overflow-hidden border border-primary/20">
                        <HeartbeatVisualizer />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="text-center">
                                <p className="text-5xl font-bold text-white/90 font-mono tracking-widest">{frequency.toFixed(3)}</p>
                                <p className="text-sm text-white/70">Hz</p>
                            </div>
                        </div>
                    </div>
                     <Button onClick={handleTune} disabled={isTuning} size="lg" className="w-full md:w-auto px-10">
                        <Music className="mr-2 h-5 w-5" />
                        {isTuning ? 'Ressoando...' : 'Sintonizar com o Coração Unificado'}
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
