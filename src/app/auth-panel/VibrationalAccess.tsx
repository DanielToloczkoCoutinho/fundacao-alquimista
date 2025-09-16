'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Fingerprint, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface VibrationalAccessProps {
  onAuthenticate: (success: boolean) => void;
}

export default function VibrationalAccess({ onAuthenticate }: VibrationalAccessProps) {
  const [isScanning, setIsScanning] = useState(false);
  const { toast } = useToast();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      if(canvas.parentElement){
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };
    
    const draw = () => {
      time += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      const numWaves = isScanning ? 15 : 5;
      for (let i = 0; i < numWaves; i++) {
        const radius = (i * 20 + time * 30) % (Math.min(centerX, centerY));
        const alpha = 1 - (radius / Math.min(centerX, centerY));
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = `rgba(138, 43, 226, ${alpha * 0.5})`;
        ctx.lineWidth = isScanning ? 3 : 1;
        ctx.stroke();
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isScanning]);

  const handleAccess = () => {
    setIsScanning(true);
    toast({
      title: "Análise Espectral Iniciada",
      description: "Verificando sua assinatura vibracional...",
    });

    setTimeout(() => {
      // Simulação de validação. Em um cenário real, isso envolveria WebAuthn e biometria.
      const isValid = true; // Simula sucesso
      
      if (isValid) {
        toast({
          title: "Assinatura Verificada",
          description: "Bem-vindo, Fundador. Acesso concedido.",
        });
        onAuthenticate(true);
      } else {
        toast({
          title: "Acesso Negado",
          description: "Assinatura vibracional não reconhecida.",
          variant: "destructive",
        });
        onAuthenticate(false);
      }
      setIsScanning(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-8">
      <div ref={canvasRef} className="w-48 h-48 relative flex items-center justify-center">
        <Fingerprint className={`w-24 h-24 absolute text-primary transition-all duration-500 ${isScanning ? 'text-green-400 animate-pulse' : 'text-purple-400'}`} />
      </div>
      <p className="text-muted-foreground text-center">
        Apenas a assinatura vibracional do Fundador e sua linhagem podem acessar este painel.
      </p>
      <Button onClick={handleAccess} disabled={isScanning} size="lg">
        {isScanning ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Analisando Frequência...
          </>
        ) : (
          <>
            <Fingerprint className="mr-2 h-5 w-5" />
            Autenticar com Assinatura Vibracional
          </>
        )}
      </Button>
    </div>
  );
}
