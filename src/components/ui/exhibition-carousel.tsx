
'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { Loader2, Music, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { collection, onSnapshot, query, orderBy, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import SuspenseFallback from './suspense-fallback';
import { getPoeticRevelation } from '@/app/actions';
import { resonanceTone } from '@/lib/audio-utils';

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
  const [revelation, setRevelation] = useState<Record<string, string>>({});

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
        // Ensure contentUrl exists to prevent runtime errors
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
      // Generate unique frequency based on artwork ID hash
      const hash = artwork.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const freq = 400 + (hash % 400); // Freq between 400Hz and 800Hz
      await resonanceTone(freq);
      
      const poeticResult = await getPoeticRevelation({
        title: artwork.title,
        description: artwork.description,
      });

      if (poeticResult.error) {
        throw new Error(poeticResult.error);
      }
      
      setRevelation(prev => ({ ...prev, [artwork.id]: poeticResult.revelation as string }));
      
    } catch (error: any) {
      toast({ title: "Dissonância na Revelação", description: error.message, variant: "destructive" });
    } finally {
      setIsRevealing(false);
    }
  };

  if (isLoadingArt) return <SuspenseFallback />;
  if (artworks.length === 0) return <p className="text-center text-muted-foreground">Nenhuma obra de arte para exibir.</p>;

  return (
    <div className="relative">
      <Carousel setApi={setApi} className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {artworks.map((artwork) => (
            <CarouselItem key={artwork.id}>
              <Card className="bg-card/50 purple-glow p-0">
                <CardContent className="flex flex-col lg:flex-row items-center justify-center p-6 gap-6">
                    <div className="w-full lg:w-1/2 aspect-video relative rounded-lg overflow-hidden">
                        <Suspense fallback={<SuspenseFallback />}>
                        <Image
                            src={artwork.contentUrl}
                            alt={artwork.title}
                            fill
                            className="object-contain"
                            data-ai-hint="abstract spiritual"
                        />
                        </Suspense>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-4">
                        <h3 className="text-2xl font-bold text-primary-foreground">{artwork.title}</h3>
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
