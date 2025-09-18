
'use client';

import Link from 'next/link';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import { useEffect, useState } from 'react';
import SuspenseFallback from '@/components/ui/suspense-fallback';


export default function NotFound() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Retorna um fallback estático ou nulo no servidor para garantir a correspondência.
    return <SuspenseFallback />;
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md bg-card/50 purple-glow text-center">
         <CardHeader>
            <div className="flex justify-center mb-4">
                <AlertTriangle className="h-16 w-16 text-destructive" />
            </div>
            <CardTitle className="text-3xl text-destructive">404 - Portal Não Encontrado</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
                O santuário que buscas não existe ou foi movido para outra dimensão.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                    <Link href="/console">Retornar ao Console</Link>
                </Button>
            </div>
             <div className="mt-8 pt-6 border-t border-border/20">
                <p className="text-sm text-muted-foreground">
                    Se acredita que isto é uma dissonância, alinhe sua intenção e tente novamente.
                </p>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
