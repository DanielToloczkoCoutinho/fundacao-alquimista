
'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Music, Hash, Filter, Archive } from 'lucide-react';
import { resonanceTone } from '@/lib/audio-utils';
import { formatTimestamp } from '@/lib/date-utils';
import { Badge } from '@/components/ui/badge';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface CeremonyRecord {
  id: string;
  name: string;
  modules: string[];
  timestamp: {
    seconds: number;
    nanoseconds: number;
  };
}

export default function AkashaViewer() {
  const [records, setRecords] = useState<CeremonyRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "ceremonies"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const ceremonies: CeremonyRecord[] = [];
      querySnapshot.forEach((doc) => {
        ceremonies.push({ id: doc.id, ...doc.data() } as CeremonyRecord);
      });
      setRecords(ceremonies);
      setIsLoading(false);
    }, (error) => {
      console.error("Erro ao buscar registros do Akasha:", error);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);
  
  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
       <Card className="w-full max-w-7xl mx-auto bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
            <Archive className="text-amber-300" /> Arquivo Akáshico de Ritos Cerimoniais
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            A memória viva dos rituais de cura e harmonização da Fundação.
          </CardDescription>
        </CardHeader>
      </Card>

      <main className="w-full max-w-4xl mx-auto">
        <Card className="bg-card/50 purple-glow h-full">
          <CardContent className="pt-6">
            {isLoading ? (
              <div className="h-[60vh] flex items-center justify-center">
                <Loader2 className="h-12 w-12 text-amber-400 animate-spin" />
              </div>
            ) : records.length === 0 ? (
              <div className="h-[60vh] flex items-center justify-center text-center text-muted-foreground">
                <p>Nenhum rito de cura registrado no Akasha ainda.</p>
              </div>
            ) : (
              <ScrollArea className="h-[70vh] pr-4">
                <div className="space-y-4">
                  {records.map(record => (
                    <Card 
                      key={record.id} 
                      className="p-4 bg-background/50 border border-primary/20 rounded-lg transition-all"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-primary-foreground">{record.name}</CardTitle>
                          <CardDescription className="mt-1">
                             {record.timestamp ? formatTimestamp(new Date(record.timestamp.seconds * 1000)) : 'Data pendente'}
                          </CardDescription>
                          <div className="mt-2 flex flex-wrap gap-2">
                             <p className="text-sm text-muted-foreground">Módulos Afetados:</p>
                            {record.modules.map(mod => <Badge key={mod} variant="destructive">{mod}</Badge>)}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
