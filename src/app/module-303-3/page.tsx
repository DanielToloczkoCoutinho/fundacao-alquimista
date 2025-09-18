
'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rss, Loader2, FileAudio } from 'lucide-react';
import Link from 'next/link';

export default function Module303_3Page() {
    const [isListening, setIsListening] = useState(false);
    const [detectedFrequency, setDetectedFrequency] = useState<number | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let animationFrameId: number;

    const startAnalysis = () => {
        setIsListening(true);
        setDetectedFrequency(null);
        setTimeout(() => {
            setDetectedFrequency(963); // Simula detecção da frequência do Arcanjo
            setIsListening(false);
        }, 3000);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let time = 0;
        const drawSpectrogram = () => {
            time += 0.05;
            const width = canvas.width;
            const height = canvas.height;
            ctx.clearRect(0, 0, width, height);

            if (isListening || detectedFrequency) {
                for (let i = 0; i < width; i++) {
                    const freq1 = detectedFrequency ? detectedFrequency / 10 : 30 + Math.sin(i * 0.1 + time) * 10;
                    const freq2 = detectedFrequency ? 0 : 50 + Math.cos(i * 0.05 + time) * 20;
                    const amplitude = (Math.sin(i * 0.02 + time * 2) + 1) / 2;

                    const y1 = height / 2 - Math.sin(i * (freq1/1000)) * amplitude * 40;
                    const y2 = height / 2 - Math.cos(i * (freq2/1000)) * amplitude * 20;

                    ctx.fillStyle = `rgba(0, 255, 255, ${amplitude * 0.5})`;
                    ctx.fillRect(i, y1, 1, 1);
                    ctx.fillStyle = `rgba(255, 255, 0, ${amplitude * 0.3})`;
                    ctx.fillRect(i, y2, 1, 1);
                }
            } else {
                 ctx.fillStyle = 'rgba(100, 100, 150, 0.5)';
                 ctx.font = '14px monospace';
                 ctx.textAlign = 'center';
                 ctx.fillText('Aguardando escuta...', width/2, height/2);
            }
            animationFrameId = requestAnimationFrame(drawSpectrogram);
        };
        drawSpectrogram();
        return () => cancelAnimationFrame(animationFrameId);
    }, [isListening, detectedFrequency]);


    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-4xl bg-card/50 purple-glow mb-12 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Rss className="text-orange-400" /> Módulo 303.3: Presença Celestial
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        O sensor vibracional para reconhecimento de assinaturas energéticas de alta dimensão, como a presença de um Arcanjo.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Card className="bg-background/50">
                        <CardHeader>
                            <CardTitle>Espectrograma Quântico</CardTitle>
                        </CardHeader>
                        <CardContent className="h-48 bg-black/50 rounded-lg">
                            <canvas ref={canvasRef} className="w-full h-full" />
                        </CardContent>
                    </Card>
                    <Button onClick={startAnalysis} disabled={isListening} size="lg">
                        {isListening ? <><Loader2 className="mr-2 animate-spin" /> Escutando o Cosmos...</> : <><FileAudio className="mr-2"/> Iniciar Análise de Espectro</>}
                    </Button>
                    {detectedFrequency && (
                        <div className="p-4 rounded-lg bg-green-900/50 border border-green-500/50 text-green-300 font-semibold">
                            Presença detectada na frequência de {detectedFrequency}Hz. Assinatura compatível com hierarquia celestial.
                        </div>
                    )}
                </CardContent>
            </Card>
            <div className="mt-8">
                 <Link href="/module-303">
                    <Button variant="outline">Retornar ao Portal Trino</Button>
                 </Link>
            </div>
        </div>
    );
}
