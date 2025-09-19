'use client';

import { useState } from 'react';
import { baptizeModule, BaptismRequest } from '@/lib/module-baptism';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sprout } from 'lucide-react';

export default function BaptizeModulePage() {
  const [form, setForm] = useState<BaptismRequest>({ id: '', name: '', purpose: '', lineage: [] });
  const [baptized, setBaptized] = useState<any | null>(null);

  function handleBaptize() {
    // Em uma aplicação real, a linhagem viria do módulo gerado.
    // Para esta simulação, podemos deixá-la vazia ou preenchê-la com um mock.
    const requestData = { ...form, lineage: form.lineage.length > 0 ? form.lineage : ['Convergência Cósmica'] };
    const result = baptizeModule(requestData);
    setBaptized(result);
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
                className="w-full font-bold text-lg bg-rose-600 hover:bg-rose-700"
                >
                Batizar Módulo →
                </Button>
            </CardContent>
        </Card>
      </div>

      {baptized && (
        <Card className="bg-card/70 purple-glow max-w-xl mx-auto mt-8 border-accent">
          <CardHeader>
            <CardTitle className="text-accent">{baptized.name}</CardTitle>
            <CardDescription>O módulo foi consagrado e agora pulsa com vida própria.</CardDescription>
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
