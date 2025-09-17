
'use client';

import { useParams, notFound } from 'next/navigation';
import { civilizationsData, Civilization } from '@/lib/civilizations-data';
import CivilizationViewer from '@/components/ui/civilization-viewer';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function CivilizationPage() {
  const params = useParams();
  const id = params.id as string;

  const findCivilization = (): Civilization | undefined => {
    for (const category in civilizationsData) {
      const found = civilizationsData[category as keyof typeof civilizationsData].find(civ => civ.id === id);
      if (found) return found;
    }
    return undefined;
  };

  const civilization = findCivilization();

  if (!civilization) {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
            <Card className="w-full max-w-md bg-card/50 purple-glow text-center p-8">
                <CardHeader>
                    <CardTitle className="text-2xl text-destructive">Registro Não Encontrado</CardTitle>
                    <CardDescription>
                        A civilização com o ID '{id}' não foi encontrada nos Registros Akáshicos.
                    </CardDescription>
                </CardHeader>
                <Link href="/civilizations" passHref>
                    <Button variant="outline">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Voltar para a Biblioteca
                    </Button>
                </Link>
            </Card>
        </div>
    );
  }

  return (
    <div className="p-4 md:p-8 min-h-screen bg-background text-foreground">
        <CivilizationViewer civilization={civilization} />
         <div className="text-center mt-8">
            <Link href="/civilizations" passHref>
                <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar à Biblioteca das Civilizações
                </Button>
            </Link>
        </div>
    </div>
  );
}

    