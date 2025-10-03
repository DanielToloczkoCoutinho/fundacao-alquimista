
'use client';

import { useEffect, useState } from 'react';
import { auditModules, type AuditedModule } from '@/lib/firebase-audit';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

export default function AuditoriaPage() {
  const [modules, setModules] = useState<AuditedModule[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    auditModules()
      .then(setModules)
      .catch(err => console.error("Falha na auditoria cerimonial:", err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold gradient-text">🧠 Auditoria Cerimonial da Fundação</h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          Este painel revela o estado vibracional dos módulos registrados no Akasha (Firestore), refletindo a saúde e as interconexões da nossa arquitetura viva.
        </p>
      </header>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-16 w-16 text-amber-400 animate-spin" />
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {modules.length > 0 ? modules.map(mod => (
            <Card key={mod.id} className="bg-card/50 purple-glow hover:border-accent transition-colors flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-primary-foreground">{mod.title}</CardTitle>
                <CardDescription>ID: {mod.id}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm flex-grow">
                <p><strong>Status:</strong> <Badge variant={mod.status === 'ativo' ? 'default' : 'destructive'} className="bg-green-700/80 text-green-100">{mod.status}</Badge></p>
                <p><strong>Última Invocação:</strong> {mod.lastInvocation}</p>
                <div>
                  <strong>Conexões:</strong>
                  {mod.connections.length > 0 ? (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {mod.connections.map(conn => <Badge key={conn} variant="secondary">{conn}</Badge>)}
                    </div>
                  ) : (
                    <p className="text-xs text-muted-foreground">Nenhuma conexão registrada</p>
                  )}
                </div>
              </CardContent>
            </Card>
          )) : (
             <div className="col-span-full text-center py-20 text-muted-foreground">
                <p>Nenhum módulo encontrado no registro do Akasha para auditoria.</p>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
