import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
      <Card className="w-full max-w-md bg-card/50 purple-glow text-center">
         <CardHeader>
            <div className="flex justify-center mb-4">
                <AlertTriangle className="h-16 w-16 text-destructive" />
            </div>
            <CardTitle className="text-3xl text-destructive">404 - Portal Não Encontrado</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
                O santuário que buscas ainda não foi consagrado ou está em transição vibracional.
            </CardDescription>
        </CardHeader>
        <CardContent>
             <Button asChild>
                <Link href="/console">
                    Retornar à Mesa do Fundador
                </Link>
            </Button>
        </CardContent>
      </Card>
    </div>
  );
}
