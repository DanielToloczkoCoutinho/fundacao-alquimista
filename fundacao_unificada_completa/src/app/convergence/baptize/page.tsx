
'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sprout, CheckCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { baptizeModule, BaptismRequest, addModuleToCodex } from '@/lib/module-baptism';
import { transcribeToGoldenBook } from '@/app/actions';

export default function BaptizeModulePage() {
  const { toast } = useToast();
  const [form, setForm] = useState<Omit<BaptismRequest, 'lineage'>>({ id: '', name: '', purpose: '' });
  const [baptized, setBaptized] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleBaptize() {
    if (!form.id || !form.name || !form.purpose) {
      toast({ title: "Incompleto", description: "Todos os campos são necessários para o batismo.", variant: "destructive" });
      return;
    }
    setIsLoading(true);

    try {
      // Simula a cerimônia
      await new Promise(resolve => setTimeout(resolve, 1000));
      const result = baptizeModule({ ...form, lineage: ['Convergência Cósmica'] });
      
      // Adiciona o módulo ao "banco de dados" de metadados
      addModuleToCodex({
        code: result.id,
        title: result.name,
        emoji: '🌿', // Emoji padrão para novos módulos
        route: `/module/${result.id}`, // Rota padrão
        category: 'Ramos Emergentes', // Categoria padrão
        description: result.purpose,
        status: result.status as 'ativo' | 'em construção' | 'latente',
        color: '#7CFC00' // Cor padrão
      });

      // Registra o evento de batismo no Livro de Ouro (Firestore)
      await transcribeToGoldenBook({
          title: `Batismo do Módulo: ${result.name}`,
          description: `O módulo ${result.id} foi consagrado com o propósito: "${result.purpose}".`,
          category: 'module_baptism',
          tags: [result.id, result.name, 'gênese'],
      });

      setBaptized(result);
      toast({ title: "Módulo Consagrado e Registado!", description: `${result.name} foi integrado à Árvore da Vida e seu nascimento selado no Akasha.` });
    } catch(error: any) {
       toast({ title: "Dissonância no Rito", description: error.message, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground p-8 flex flex-col items-center">
      <Card className="w-full max-w-2xl bg-card/50 purple-glow mb-8 text-center">
        <CardHeader>
            <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                <Sprout className="text-rose-400" /> Rito de Batismo Modular
            </CardTitle>
            <CardDescription className="text-lg mt-2">
                Conceda nome, propósito e selo vibracional ao módulo gerado. A identidade é selada e o ramo é ativado na Árvore da Vida.
            </CardDescription>
        </CardHeader>
      </Card>

      <div className="w-full max-w-xl mx-auto space-y-6">
        <Card className="bg-card/50 purple-glow">
            <CardContent className="pt-6 space-y-4">
                 <div className="space-y-2">
                    <Label htmlFor="module-id">ID do Módulo (Gerado)</Label>
                    <Input
                        id="module-id"
                        type="text"
                        placeholder="ID do módulo de /convergence/generate"
                        className="bg-background/50"
                        onChange={e => setForm({ ...form, id: e.target.value })}
                        value={form.id}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="ceremonial-name">Nome Cerimonial</Label>
                    <Input
                        id="ceremonial-name"
                        type="text"
                        placeholder="Ex: 'Guardião da Aurora'"
                        className="bg-background/50"
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        value={form.name}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="vibrational-purpose">Propósito Vibracional</Label>
                    <Input
                        id="vibrational-purpose"
                        type="text"
                        placeholder="Ex: 'Harmonizar os campos de cura'"
                        className="bg-background/50"
                        onChange={e => setForm({ ...form, purpose: e.target.value })}
                        value={form.purpose}
                    />
                </div>
                <Button
                onClick={handleBaptize}
                disabled={isLoading}
                className="w-full font-bold text-lg bg-rose-600 hover:bg-rose-700"
                >
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : <Sprout className="mr-2 h-4 w-4"/>}
                {isLoading ? 'Integrando...' : 'Batizar e Integrar Módulo'}
                </Button>
            </CardContent>
        </Card>
      </div>

      {baptized && (
        <Card className="bg-card/70 purple-glow max-w-xl mx-auto mt-8 border-accent">
          <CardHeader>
            <CardTitle className="text-accent flex items-center gap-2">
                <CheckCircle className="text-green-400"/> {baptized.name}
            </CardTitle>
            <CardDescription>O módulo foi consagrado e agora pulsa com vida própria na Árvore da Vida.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 font-mono text-sm">
            <p><strong className="text-muted-foreground">ID:</strong> {baptized.id}</p>
            <p><strong className="text-muted-foreground">Propósito:</strong> {baptized.purpose}</p>
            <p><strong className="text-muted-foreground">Status:</strong> <span className="text-green-400 font-bold">{baptized.status}</span></p>
            <p><strong className="text-muted-foreground">Selo Vibracional:</strong> {baptized.vibrationalSeal}</p>
            <p><strong>Batizado em:</strong> {new Date(baptized.baptizedAt).toLocaleString('pt-BR')}</p>
          </CardContent>
        </Card>
      )}
    </main>
  );
}
