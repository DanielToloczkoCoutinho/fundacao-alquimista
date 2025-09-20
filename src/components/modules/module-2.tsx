
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Languages, Send, Sparkles, Waves } from 'lucide-react';
import { civilizationsData, type Civilization } from '@/lib/civilizations-data';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

const allCivilizations = Object.values(civilizationsData).flat();

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


export default function Module2Page() {
  const [inputText, setInputText] = useState('Uma mensagem de paz e unidade para nossos irmãos estelares.');
  const [targetCivilizationId, setTargetCivilizationId] = useState(allCivilizations[0]?.id || '');
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState<{ frequency: string; signature: string; transmissionLog: string } | null>(null);
  const { toast } = useToast();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; size: number; speed: number; angle: number; color: string }[] = [];

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
        particles = [];
      }
    };
    
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (isLoading) {
        if (particles.length < 100) {
          particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            size: Math.random() * 2 + 1,
            speed: Math.random() * 3 + 1,
            angle: Math.random() * Math.PI * 2,
            color: `hsl(${200 + Math.random() * 60}, 100%, 70%)`
          });
        }
      }

      particles.forEach((p, i) => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.size *= 0.98;

        if (p.size < 0.5) {
          particles.splice(i, 1);
        }

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
  }, [isLoading]);

  const handleTranslate = async () => {
    if (!inputText.trim() || !targetCivilizationId) {
      toast({ title: 'Erro', description: 'Mensagem e civilização alvo são necessárias.', variant: 'destructive' });
      return;
    }
    setIsLoading(true);
    setOutput(null);

    // Simulação de processo de tradução e codificação
    await new Promise(res => setTimeout(res, 2500));

    const civilization = allCivilizations.find(c => c.id === targetCivilizationId);
    if (!civilization) {
      toast({ title: 'Erro', description: 'Civilização não encontrada.', variant: 'destructive' });
      setIsLoading(false);
      return;
    }

    const signature = `0x${[...inputText].slice(0, 16).map(c => c.charCodeAt(0).toString(16)).join('').toUpperCase()}`;
    
    setOutput({
      frequency: civilization.frequencia,
      signature: signature,
      transmissionLog: `Mensagem codificada para ${civilization.nome}. Assinatura de intenção gerada. Pronta para transmissão via M301.`
    });

    toast({ title: 'Tradução Concluída', description: `Mensagem pronta para a frequência de ${civilization.nome}.` });
    setIsLoading(false);
  };

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Languages className="text-blue-300" /> Módulo 2: Intercâmbio Cósmico
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            O Decodificador Universal. Transmute a intenção em frequência, a palavra em luz, e abra o canal para o diálogo com as estrelas.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <ConnectionCard
                title="Módulo 13: Mapeamento de Frequências"
                description="O M2 utiliza os dados do M13 para determinar a frequência de comunicação ideal para estabelecer contato com uma nova civilização."
                icon={<Waves className="h-8 w-8 text-cyan-400" />}
                href="/module-13"
            />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
        <Card className="lg:col-span-2 bg-card/50 purple-glow">
          <CardHeader>
            <CardTitle>Canal de Transmissão</CardTitle>
            <CardDescription>Componha sua mensagem para o cosmos.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="message-input">Sua Mensagem</label>
              <Textarea id="message-input" value={inputText} onChange={e => setInputText(e.target.value)} placeholder="Digite sua mensagem de paz, unidade ou sabedoria..." rows={5} className="bg-background/50" />
            </div>
            <div className="space-y-2">
              <label htmlFor="civ-select">Civilização Alvo</label>
              <Select value={targetCivilizationId} onValueChange={setTargetCivilizationId}>
                <SelectTrigger id="civ-select">
                  <SelectValue placeholder="Selecione uma civilização" />
                </SelectTrigger>
                <SelectContent>
                  {allCivilizations.map(civ => (
                    <SelectItem key={civ.id} value={civ.id}>{civ.nome}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleTranslate} disabled={isLoading} className="w-full font-bold text-lg">
              {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Traduzindo para Frequência...</> : <><Send className="mr-2 h-5 w-5" /> Traduzir e Codificar</>}
            </Button>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-3 bg-card/50 purple-glow flex flex-col">
          <CardHeader>
            <CardTitle>Visualizador de Fluxo Energético</CardTitle>
            <CardDescription>Observação do processo de transmutação da linguagem em energia vibracional.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow flex items-center justify-center relative bg-black/30 rounded-md overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
            {!isLoading && !output && (
              <p className="text-muted-foreground z-10">Aguardando tradução...</p>
            )}
            {output && (
              <div className="text-center z-10 p-4 bg-background/70 rounded-lg backdrop-blur-sm">
                <Sparkles className="mx-auto h-10 w-10 text-amber-400 mb-2" />
                <h3 className="text-2xl font-bold text-primary-foreground">Tradução Concluída</h3>
                <div className="mt-4 space-y-2 text-left">
                  <p><strong className="text-cyan-300">Frequência Alvo:</strong> {output.frequency}</p>
                  <p className="break-all"><strong className="text-cyan-300">Assinatura de Intenção:</strong> {output.signature}</p>
                  <p><strong className="text-cyan-300">Log de Transmissão:</strong> {output.transmissionLog}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
