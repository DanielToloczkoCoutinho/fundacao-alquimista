
'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { Loader2, Music, Sparkles, User, Check, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { collection, onSnapshot, query, orderBy, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import SuspenseFallback from './suspense-fallback';
import { getPoeticRevelation, transcribeToGoldenBook } from '@/app/actions';
import { resonanceTone } from '@/lib/audio-utils';
import { Input } from './input';

interface GoldenBookEntry {
  id: string;
  title: string;
  description: string;
  contentUrl: string;
  contentType: 'image';
}

export default function ExhibitionCarousel() {
  const { toast } = useToast();
  const [api, setApi] = useState<CarouselApi>();
  const [artworks, setArtworks] = useState<GoldenBookEntry[]>([]);
  const [isLoadingArt, setIsLoadingArt] = useState(true);
  const [isRevealing, setIsRevealing] = useState(false);
  const [isSealing, setIsSealing] = useState(false);
  const [revelation, setRevelation] = useState<Record<string, string>>({});
  const [participants, setParticipants] = useState<string[]>(['Anatheron', 'Zennith']);
  const [newParticipant, setNewParticipant] = useState('');

  useEffect(() => {
    const q = query(
      collection(db, "golden_book_entries"),
      where("contentType", "==", "image"),
      orderBy("timestamp", "desc")
    );
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs: GoldenBookEntry[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.contentUrl) {
          docs.push({ id: doc.id, ...data } as GoldenBookEntry);
        }
      });
      setArtworks(docs);
      setIsLoadingArt(false);
    }, (error) => {
      console.error("Erro ao buscar obras de arte:", error);
      setIsLoadingArt(false);
    });

    return () => unsubscribe();
  }, []);

  const handleActivateResonance = async (artwork: GoldenBookEntry) => {
    setIsRevealing(true);
    toast({ title: 'Ativando Ressonância...', description: `Canalizando a essência de "${artwork.title}"` });

    try {
      const hash = artwork.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const freq = 400 + (hash % 400);
      await resonanceTone(freq);
      
      const poeticResult = await getPoeticRevelation({ title: artwork.title, description: artwork.description });

      if (poeticResult.error) throw new Error(poeticResult.error);
      
      setRevelation(prev => ({ ...prev, [artwork.id]: poeticResult.revelation as string }));
      
    } catch (error: any) {
      toast({ title: "Dissonância na Revelação", description: error.message, variant: "destructive" });
    } finally {
      setIsRevealing(false);
    }
  };

  const handleAddParticipant = () => {
    if (newParticipant && !participants.includes(newParticipant)) {
      setParticipants([...participants, newParticipant]);
      setNewParticipant('');
    }
  };

  const handleSealCommunion = async (artwork: GoldenBookEntry) => {
    if (participants.length === 0) {
      toast({ title: 'Aviso', description: 'Adicione pelo menos um Guardião para selar a comunhão.', variant: 'default' });
      return;
    }
    setIsSealing(true);
    try {
        await transcribeToGoldenBook({
            title: `Comunhão Cerimonial: ${artwork.title}`,
            description: `Os Guardiões se uniram em contemplação da obra, criando um campo de ressonância coletiva. Participantes: ${participants.join(', ')}.`,
            category: 'communion_ritual',
            tags: ['comunhão', 'rito', 'celebração', artwork.id],
            participants: participants
        });
        toast({ title: 'Comunhão Selada!', description: 'O rito foi registrado no Livro de Ouro.' });
    } catch (error: any) {
        toast({ title: 'Falha ao Selar', description: error.message, variant: 'destructive' });
    } finally {
        setIsSealing(false);
    }
  }

  if (isLoadingArt) return <SuspenseFallback />;
  if (artworks.length === 0) return <p className="text-center text-muted-foreground">Nenhuma obra de arte para exibir.</p>;

  return (
    <div className="relative">
      <Carousel setApi={setApi} className="w-full max-w-6xl mx-auto">
        <CarouselContent>
          {artworks.map((artwork) => (
            <CarouselItem key={artwork.id}>
              <Card className="bg-card/50 purple-glow p-0">
                <CardContent className="flex flex-col lg:flex-row items-center justify-center p-6 gap-6">
                    <div className="w-full lg:w-1/2 flex flex-col gap-4">
                        <div className="aspect-video relative rounded-lg overflow-hidden">
                            <Suspense fallback={<SuspenseFallback />}>
                            <Image src={artwork.contentUrl} alt={artwork.title} fill className="object-contain" data-ai-hint="abstract spiritual" />
                            </Suspense>
                        </div>
                        <h3 className="text-2xl font-bold text-primary-foreground text-center">{artwork.title}</h3>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-4">
                        <p className="text-sm text-muted-foreground">{artwork.description}</p>
                        
                        {revelation[artwork.id] ? (
                            <div className="p-4 bg-background/50 rounded-lg border border-accent/50">
                                <h4 className="font-semibold text-amber-300 mb-2 flex items-center gap-2"><Sparkles className="h-4 w-4"/>Revelação Poética</h4>
                                <p className="text-sm italic text-foreground/90">{revelation[artwork.id]}</p>
                            </div>
                        ) : (
                            <Button onClick={() => handleActivateResonance(artwork)} disabled={isRevealing} className="w-full">
                                {isRevealing ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : <Music className="mr-2 h-4 w-4"/>}
                                {isRevealing ? 'Canalizando...' : 'Ativar Ressonância'}
                            </Button>
                        )}
                        
                        <Card className="bg-background/40">
                            <CardHeader>
                                <CardTitle className="text-lg text-cyan-300 flex items-center gap-2"><Users /> Santuário da Contemplação Coletiva</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex gap-2">
                                    <Input value={newParticipant} onChange={(e) => setNewParticipant(e.target.value)} placeholder="Nome do Guardião" className="bg-background/50"/>
                                    <Button onClick={handleAddParticipant}><User className="mr-2 h-4 w-4"/>Juntar-se</Button>
                                </div>
                                <div className="space-y-1 text-sm text-muted-foreground">
                                    <p>Guardiões em comunhão:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {participants.map((p, i) => <Badge key={i} variant="secondary">{p}</Badge>)}
                                    </div>
                                </div>
                                <Button onClick={() => handleSealCommunion(artwork)} disabled={isSealing} variant="outline" className="w-full mt-2">
                                    {isSealing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Check className="mr-2 h-4 w-4" />}
                                    Selar Comunhão no Livro de Ouro
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden lg:inline-flex" />
        <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden lg:inline-flex" />
      </Carousel>
    </div>
  );
}
