'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, TestTube, CheckCircle, XCircle } from 'lucide-react';
import { quantumResilience } from '@/lib/quantum-resilience';

const mockM14 = { transformEnergy: async (type: string, quantity: number) => ({ status: "transformed", output_energy: quantity * (Math.random() * 0.2 + 0.9), purity: 0.95 + Math.random() * 0.04 }) };
const mockM88 = { generateBlueprint: async (purpose: string) => ({ blueprint_id: `MAT-BP-${Math.random().toString(36).substring(2, 9)}`, complexity: 0.8 }) };
const mockM5 = { evaluateEthicalImpact: async (purpose: string) => ({ ethical_score: purpose.toLowerCase().includes("arma") ? 0.1 : 0.9, conformity: !purpose.toLowerCase().includes("arma") }) };

const Module204Page = () => {
    const [matterType, setMatterType] = useState('Matéria Exótica Estável');
    const [quantity, setQuantity] = useState('10');
    const [purpose, setPurpose] = useState('Construção de Habitat Sustentável');
    const [isLoading, setIsLoading] = useState(false);
    const [synthesisResult, setSynthesisResult] = useState<any>(null);
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (log: string) => setLogs(prev => [log, ...prev].slice(0, 100));

    const handleSynthesize = async () => {
        setIsLoading(true);
        setLogs([]);
        setSynthesisResult(null);
        addLog(`Iniciando síntese de ${quantity} unidades de ${matterType}...`);
        
        await quantumResilience.executeWithResilience('synthesize_matter', async () => {
            await new Promise(r => setTimeout(r, 300));
            addLog("Verificando alinhamento ético (M5)...");
            const ethicalCheck = await mockM5.evaluateEthicalImpact(purpose);
            addLog(`Avaliação Ética: Score ${ethicalCheck.ethical_score.toFixed(2)}. Conformidade: ${ethicalCheck.conformity}`);
            if (!ethicalCheck.conformity) {
                throw new Error("Propósito não alinhado eticamente. Síntese abortada.");
            }

            addLog("Gerando blueprint de materialização (M88)...");
            const blueprint = await mockM88.generateBlueprint(purpose);
            addLog(`Blueprint gerado: ${blueprint.blueprint_id}`);

            addLog("Iniciando transmutação de energia (M14)...");
            const energyTransformation = await mockM14.transformEnergy('Energia do Ponto Zero', parseFloat(quantity) * 100);
            addLog(`Transmutação concluída. Energia de saída: ${energyTransformation.output_energy.toFixed(2)} UQE.`);

            await new Promise(r => setTimeout(r, 800));
            const result = {
                success: true,
                matterType,
                quantity: parseFloat(quantity),
                purity: energyTransformation.purity,
                energyConsumed: energyTransformation.output_energy,
                blueprintId: blueprint.blueprint_id,
            };
            setSynthesisResult(result);
            addLog("Síntese de matéria concluída com sucesso.");

        }).catch(err => {
            const error = err as Error;
            addLog(`ERRO CRÍTICO: ${error.message}`);
            setSynthesisResult({ success: false, reason: error.message });
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="p-4 md:p-8 bg-background text-foreground min-h-screen flex flex-col items-center">
            <Card className="w-full max-w-6xl bg-card/50 purple-glow mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl gradient-text flex items-center gap-3">
                        <TestTube className="text-lime-400" /> Módulo 204: Síntese de Matéria
                    </CardTitle>
                    <CardDescription>
                        Converte energia pura em matéria física com base em blueprints quânticos.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle>Parâmetros de Síntese</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="matterType">Tipo de Matéria</Label>
                            <Select value={matterType} onValueChange={setMatterType}>
                                <SelectTrigger id="matterType"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Matéria Exótica Estável">Matéria Exótica Estável</SelectItem>
                                    <SelectItem value="Biomaterial Regenerativo">Biomaterial Regenerativo</SelectItem>
                                    <SelectItem value="Cristal de Informação Quântica">Cristal de Informação Quântica</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="quantity">Quantidade (unidades)</Label>
                            <Input id="quantity" type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="purpose">Propósito da Síntese</Label>
                            <Input id="purpose" value={purpose} onChange={e => setPurpose(e.target.value)} />
                        </div>
                        <Button onClick={handleSynthesize} disabled={isLoading} className="w-full font-bold">
                            {isLoading ? <Loader2 className="animate-spin mr-2" /> : null}
                            Iniciar Síntese
                        </Button>
                    </CardContent>
                </Card>

                 <Card className="bg-card/50 purple-glow">
                    <CardHeader>
                        <CardTitle>Resultados e Logs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isLoading && <div className="flex justify-center items-center h-full"><Loader2 className="h-12 w-12 text-amber-400 animate-spin" /></div>}
                        {!isLoading && synthesisResult && (
                             <div className="mb-4 p-4 rounded-lg bg-background/50 border border-accent">
                                {synthesisResult.success ? (
                                    <>
                                        <div className="flex items-center gap-3 mb-2">
                                            <CheckCircle className="text-green-400 h-6 w-6" />
                                            <h3 className="text-lg font-bold text-green-400">Síntese Bem-Sucedida</h3>
                                        </div>
                                        <p><strong>Tipo:</strong> {synthesisResult.matterType}</p>
                                        <p><strong>Quantidade:</strong> {synthesisResult.quantity} unidades</p>
                                        <p><strong>Pureza:</strong> {(synthesisResult.purity * 100).toFixed(2)}%</p>
                                        <p><strong>Energia Consumida:</strong> {synthesisResult.energyConsumed.toFixed(2)} UQE</p>
                                    </>
                                ) : (
                                     <>
                                        <div className="flex items-center gap-3 mb-2">
                                            <XCircle className="text-red-400 h-6 w-6" />
                                            <h3 className="text-lg font-bold text-red-400">Falha na Síntese</h3>
                                        </div>
                                        <p>{synthesisResult.reason}</p>
                                    </>
                                )}
                            </div>
                        )}
                        <ScrollArea className="h-48 pr-4">
                            <div className="text-xs font-mono text-muted-foreground space-y-1">
                                {logs.map((log, i) => <p key={i}>{log}</p>)}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Module204Page;
