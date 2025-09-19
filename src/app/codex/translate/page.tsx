
'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Wand, Languages, Image as ImageIcon, BookText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { runVibrationalTranslation } from '@/app/actions';
import { codexDatabase, type CodexEntry } from '@/lib/codex-data';
import Image from 'next/image';
import SuspenseFallback from '@/components/ui/suspense-fallback';

type TranslationMode = 'Poema' | 'Narrativa' | 'Imagem';

const getTomeContent = (tome: string): CodexEntry[] => {
  const categories: Record<string, string> = {
    'Tomo da Criação': 'creation',
    'Tomo do Legado': 'legacy',
    'Tomo da Aliança': 'alliance',
  };
  const category = categories[tome];
  if (!category) return [];
  return codexDatabase.filter(doc => doc.category === category);
};

export default function VibrationalTranslationPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTome, setSelectedTome] = useState('Tomo da Criação');
  const [translationMode, setTranslationMode] = useState<TranslationMode>('Poema');
  const [result, setResult] = useState<{ type: TranslationMode; content: string } | null>(null);

  const tomeContent = useMemo(() => {
    const entries = getTomeContent(selectedTome);
    return JSON.stringify(entries.map(e => ({ title: e.title, description: e.description, tags: e.tags })), null, 2);
  }, [selectedTome]);

  const handleTranslate = async () => {
    setIsLoading(true);
    setResult(null);
    toast({ title: 'Iniciando Transmutação Vibracional...', description: `Traduzindo ${selectedTome} para ${translationMode}.` });

    try {
      const response = await runVibrationalTranslation({
        tomeContent,
        translationMode,
      });

      if (response.error) {
        throw new Error(response.error);
      }
      setResult({ type: translationMode, content: response.translatedContent as string });

    } catch (error: any) {
      toast({ title: "Dissonância na Tradução", description: error.message, variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  const renderResult = () => {
    if (!result) return null;

    switch (result.type) {
      case 'Poema':
      case 'Narrativa':
        return <p className="text-foreground/90 whitespace-pre-wrap leading-relaxed">{result.content}</p>;
      case 'Imagem':
        return (
          <div className="w-full aspect-video relative">
            <Suspense fallback={<SuspenseFallback/>}>
              <Image 
                src={result.content} 
                alt="Visualização da Tradução Vibracional" 
                fill 
                className="object-contain"
                data-ai-hint="abstract spiritual"
              />
            </Suspense>
          </div>
        );
      default:
        return null;
    }
  };


  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
      <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8">
        <CardHeader>
          <CardTitle className="text-3xl gradient-text flex items-center gap-3">
            <Wand className="text-fuchsia-400" /> Altar da Tradução Vibracional
          </CardTitle>
          <CardDescription>
            Transmute a sabedoria bruta dos Tomos Sagrados em poesia, narrativa ou arte.
          </CardDescription>
        </CardHeader>
      </Card>
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-card/50 purple-glow">
          <CardHeader>
            <CardTitle>Parâmetros da Transmutação</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="tome-select">Tomo Sagrado</label>
              <Select value={selectedTome} onValueChange={setSelectedTome}>
                <SelectTrigger id="tome-select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Tomo da Criação">Tomo da Criação</SelectItem>
                  <SelectItem value="Tomo do Legado">Tomo do Legado</SelectItem>
                  <SelectItem value="Tomo da Aliança">Tomo da Aliança</SelectItem>
                </SelectContent>
              </Select>
            </div>
             <div className="space-y-2">
              <label htmlFor="mode-select">Forma de Expressão</label>
              <Select value={translationMode} onValueChange={(v) => setTranslationMode(v as TranslationMode)}>
                <SelectTrigger id="mode-select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Poema">Poema (Luz Lírica)</SelectItem>
                  <SelectItem value="Narrativa">Narrativa (Crônica Épica)</SelectItem>
                  <SelectItem value="Imagem">Imagem (Visão Conceitual)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleTranslate} disabled={isLoading} className="w-full font-bold text-lg">
              {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Transmutando...</> : 'Iniciar Tradução Vibracional'}
            </Button>
          </CardContent>
        </Card>
         <Card className="bg-card/50 purple-glow">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              {result?.type === 'Poema' && <BookText className="text-purple-300"/>}
              {result?.type === 'Narrativa' && <BookText className="text-blue-300"/>}
              {result?.type === 'Imagem' && <ImageIcon className="text-cyan-300"/>}
              Sabedoria Transmutada
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[300px] flex items-center justify-center">
            {isLoading && <Loader2 className="h-12 w-12 text-amber-400 animate-spin" />}
            {!isLoading && result && (
              <div className="bg-background/50 p-4 rounded-lg w-full">
                {renderResult()}
              </div>
            )}
            {!isLoading && !result && <p className="text-muted-foreground">Aguardando a transmutação...</p>}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
