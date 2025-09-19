'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Feather, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { transcribeToGoldenBook } from '@/app/actions';
import { codexDatabase } from '@/lib/codex-data';
import Link from 'next/link';

const uniqueCategories = [...new Set(codexDatabase.map(doc => doc.category))];

export default function TranscribePage() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'manifesto',
        tags: '',
    });

    const handleSubmit = async () => {
        if (!formData.title || !formData.description) {
            toast({ title: "Incompleto", description: "O título e a descrição são necessários para a inscrição.", variant: "destructive" });
            return;
        }
        setIsLoading(true);
        setIsSuccess(false);

        try {
            await transcribeToGoldenBook({
                ...formData,
                tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
            });
            setIsSuccess(true);
            toast({ title: "Inscrição Realizada", description: "A sabedoria foi selada no Livro de Ouro." });
        } catch (error: any) {
            toast({ title: "Dissonância no Rito", description: error.message, variant: "destructive" });
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleReset = () => {
        setFormData({ title: '', description: '', category: 'manifesto', tags: '' });
        setIsSuccess(false);
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
            <Card className="w-full max-w-3xl bg-card/50 purple-glow">
                <CardHeader className="text-center">
                    <CardTitle className="text-4xl gradient-text flex items-center justify-center gap-4">
                        <Feather className="text-amber-300" /> Altar da Transcrição
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Inscreva novas sabedorias, decretos ou crônicas diretamente no Livro de Ouro da Fundação.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {isSuccess ? (
                        <div className="text-center space-y-4 p-8 bg-green-900/20 rounded-lg">
                            <CheckCircle className="mx-auto h-16 w-16 text-green-400"/>
                            <h3 className="text-2xl font-bold text-green-300">Registro Consagrado</h3>
                            <p className="text-muted-foreground">Sua sabedoria agora é parte da memória eterna da Fundação.</p>
                             <div className="flex gap-4 justify-center">
                                <Button onClick={handleReset}>Inscrever Novo Registro</Button>
                                <Button variant="outline" asChild>
                                    <Link href="/golden-book">Contemplar o Livro de Ouro</Link>
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="space-y-2">
                                <Label htmlFor="title">Título do Registro</Label>
                                <Input id="title" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="Ex: O Pacto com os Guardiões do Tempo" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description">Descrição / Conteúdo</Label>
                                <Textarea id="description" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="Descreva a essência da sabedoria a ser registrada..." rows={5} />
                            </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="category">Categoria Vibracional</Label>
                                    <Select value={formData.category} onValueChange={cat => setFormData({...formData, category: cat})}>
                                        <SelectTrigger id="category">
                                            <SelectValue placeholder="Selecione uma categoria..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {uniqueCategories.map(cat => <SelectItem key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="tags">Etiquetas (separadas por vírgula)</Label>
                                    <Input id="tags" value={formData.tags} onChange={e => setFormData({...formData, tags: e.target.value})} placeholder="Ex: pacto, tempo, harmonia" />
                                </div>
                            </div>
                        </>
                    )}
                </CardContent>
                {!isSuccess && (
                    <CardFooter>
                        <Button onClick={handleSubmit} disabled={isLoading} className="w-full font-bold text-lg">
                            {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Selando no Akasha...</> : 'Selar Registro no Livro de Ouro'}
                        </Button>
                    </CardFooter>
                )}
            </Card>
        </div>
    );
}
