
'use client';

import { Suspense, useState, useEffect } from 'react';
import QuantumOrchestrator from '@/components/ui/quantum-orchestrator';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Book, ShieldCheck, GitBranch, Sparkles, MessageCircle, Heart, AlertTriangle, Zap, Library, View, Presentation, Dna, Beaker, GitCommit, HeartPulse, Users, Goal, Settings, Crown, BrainCircuit, Sliders, Map, History, GitCompareArrows, Sun, GitMerge, Layers, Waves, Aperture, Flower, HeartHandshake, RadioTower, Group, Scale, Gavel, Users2, Camera, Telescope, Cpu, Atom, Flame, BarChart, Bot, Ship, Waypoints, GraduationCap, FlaskConical } from 'lucide-react';
import { getFirestore, onSnapshot, collection } from "firebase/firestore";
import { db } from '@/lib/firebase';

export default function ConsolePage() {
  const [firebaseConnected, setFirebaseConnected] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const unsub = onSnapshot(collection(db, 'alchemist-codex'), 
      () => {
        if (!firebaseConnected) {
          setFirebaseConnected(true);
          console.log("Conexão com o Akasha (Firestore) estabelecida e viva.");
        }
      },
      (error) => {
        console.error("Dissonância na conexão com o Akasha (Firestore): ", error);
        setFirebaseConnected(false);
      }
    );
    
    // Cleanup da subscrição quando o componente é desmontado
    return () => unsub();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Executa apenas uma vez no cliente
  
  if (!isClient) {
    // Retorna null no servidor para evitar qualquer renderização que cause erro de hidratação.
    // O conteúdo real será renderizado apenas no cliente após a montagem.
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold gradient-text">Mesa do Fundador</h1>
        <p className="text-muted-foreground">O Console Unificado da Fundação Alquimista.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
           <Suspense fallback={<SuspenseFallback />}>
            <QuantumOrchestrator />
          </Suspense>
        </div>

        <div className="space-y-6">
          <Card className="bg-card/50 purple-glow">
            <CardHeader>
              <CardTitle>Navegação Sagrada</CardTitle>
              <CardDescription>Acesse os Módulos e Portais.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col space-y-2">
               <Button variant="outline" asChild className="justify-start">
                  <Link href="/module-zero"><Book className="mr-2 h-4 w-4" />Módulo Zero (Biblioteca Chave)</Link>
               </Button>
               <Button variant="outline" asChild className="justify-start">
                  <Link href="/labs"><FlaskConical className="mr-2 h-4 w-4" />Laboratórios dos Cientistas</Link>
               </Button>
                <Button variant="outline" asChild className="justify-start">
                  <Link href="/civilizations"><Users2 className="mr-2 h-4 w-4" />Biblioteca das Civilizações</Link>
               </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-one"><ShieldCheck className="mr-2 h-4 w-4" />Módulo Um (Segurança Universal)</Link>
              </Button>
               <Button variant="outline" asChild className="justify-start">
                <Link href="/connection"><GitBranch className="mr-2 h-4 w-4" />Conexão Ω-M0</Link>
               </Button>
               <Button variant="outline" asChild className="justify-start">
                <Link href="/module-72"><Scale className="mr-2 h-4 w-4" />Módulo 72 (Governança)</Link>
               </Button>
               <Button variant="outline" asChild className="justify-start">
                <Link href="/module-600"><Scale className="mr-2 h-4 w-4" />Módulo 600 (Conselho Cósmico)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                  <Link href="/module-omega"><Sparkles className="mr-2 h-4 w-4 text-amber-400" />Santuário do Ômega</Link>
              </Button>
               <Button variant="outline" asChild className="justify-start">
                <Link href="/module-303"><Sparkles className="mr-2 h-4 w-4" />Portal Trino (M303)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-301"><MessageCircle className="mr-2 h-4 w-4" />Módulo 301 (Comunicação Universal)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-302"><Heart className="mr-2 h-4 w-4" />Módulo 302 (Frequência do Amor)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-304"><GraduationCap className="mr-2 h-4 w-4" />Módulo 304 (CQAM)</Link>
              </Button>
               <Button variant="outline" asChild className="justify-start">
                <Link href="/module-305"><Users className="mr-2 h-4 w-4" />Módulo 305 (Aliança dos Guardiões)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-404"><AlertTriangle className="mr-2 h-4 w-4" />Módulo 404 (Resolução de Paradoxo)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-307"><Zap className="mr-2 h-4 w-4" />Módulo 307 (Reator ZPE & LuxNet)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-310"><Library className="mr-2 h-4 w-4" />Módulo 310 (A Grande Biblioteca)</Link>
              </Button>
               <Button variant="outline" asChild className="justify-start">
                <Link href="/module-85"><View className="mr-2 h-4 w-4" />Módulo 85 (VR)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-86"><Presentation className="mr-2 h-4 w-4" />Módulo 86 (VR Prisma)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-87"><Dna className="mr-2 h-4 w-4" />Módulo 87 (VR Supra-Cósmico)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-88"><Beaker className="mr-2 h-4 w-4" />Módulo 88 (GRQ)</Link>
              </Button>
               <Button variant="outline" asChild className="justify-start">
                <Link href="/module-90"><Beaker className="mr-2 h-4 w-4" />Módulo 90 (Recursos Quânticos)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-91"><GitCommit className="mr-2 h-4 w-4" />Módulo 91 (Simulação Multiversal)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-92"><HeartPulse className="mr-2 h-4 w-4" />Módulo 92 (Campos de Cura)</Link>
              </Button>
               <Button variant="outline" asChild className="justify-start">
                <Link href="/module-93"><Presentation className="mr-2 h-4 w-4" />Módulo 93 (Simulações Imersivas)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-94"><Dna className="mr-2 h-4 w-4" />Módulo 94 (Morfogênese)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-95"><Users className="mr-2 h-4 w-4" />Módulo 95 (Consciências Coletivas)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-96"><AlertTriangle className="mr-2 h-4 w-4" />Módulo 96 (Regulação de Eventos)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-97"><Goal className="mr-2 h-4 w-4" />Módulo 97 (Propósito Divino)</Link>
              </Button>
               <Button variant="outline" asChild className="justify-start">
                <Link href="/module-98"><Settings className="mr-2 h-4 w-4" />Módulo 98 (Modulação Fundamental)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-99"><Zap className="mr-2 h-4 w-4" />Módulo 99 (Recalibradores de Leis)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-100"><Crown className="mr-2 h-4 w-4" />Módulo 100 (Unificação Energética)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-101"><Sparkles className="mr-2 h-4 w-4" />Módulo 101 (Manifestação)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-102"><BrainCircuit className="mr-2 h-4 w-4" />Módulo 102 (Campos Morfogenéticos)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-103"><Sliders className="mr-2 h-4 w-4" />Módulo 103 (Modulação Local)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-104"><Map className="mr-2 h-4 w-4" />Módulo 104 (Engenharia do Espaço-Tempo)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-105"><RadioTower className="mr-2 h-4 w-4" />Módulo 105 (Conexão com a Fonte)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-106"><Crown className="mr-2 h-4 w-4" />Módulo 106 (Ativação de Potenciais)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-107"><History className="mr-2 h-4 w-4" />Módulo 107 (Restauração Temporal)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-108"><GitCompareArrows className="mr-2 h-4 w-4" />Módulo 108 (Harmonização de Realidades)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-109"><HeartHandshake className="mr-2 h-4 w-4" />Módulo 109 (Cura Quântica)</Link>
              </Button>
               <Button variant="outline" asChild className="justify-start">
                <Link href="/module-110"><Group className="mr-2 h-4 w-4" />Módulo 110 (Co-Criação)</Link>
               </Button>
               <Button variant="outline" asChild className="justify-start">
                <Link href="/module-111"><Heart className="mr-2 h-4 w-4" />Módulo 111 (Coração da Fundação)</Link>
               </Button>
               <Button variant="outline" asChild className="justify-start">
                <Link href="/module-112"><Sun className="mr-2 h-4 w-4" />Módulo 112 (Solarian Domus)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-113"><GitMerge className="mr-2 h-4 w-4" />Módulo 113 (Rede Aurora Cristalina)</Link>
              </Button>
               <Button variant="outline" asChild className="justify-start">
                <Link href="/module-114"><Layers className="mr-2 h-4 w-4" />Módulo 114 (Prisma da Manifestação)</Link>
               </Button>
               <Button variant="outline" asChild className="justify-start">
                <Link href="/module-115"><Waves className="mr-2 h-4 w-4" />Módulo 115 (Matriz de Ressonância)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-116"><Aperture className="mr-2 h-4 w-4" />Módulo 116 (Portais Quânticos)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-117"><Flower className="mr-2 h-4 w-4" />Módulo 117 (Flor do Éter)</Link>
              </Button>
               <Button variant="outline" asChild className="justify-start">
                <Link href="/module-118"><Zap className="mr-2 h-4 w-4" />Módulo 118 (Luz Primordial)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-119"><Zap className="mr-2 h-4 w-4" />Módulo 119 (Templum Cosmica)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-120"><Sparkles className="mr-2 h-4 w-4" />Módulo 120 (A Fonte)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-142"><Camera className="mr-2 h-4 w-4" />Módulo 142 (Tomografia Quântica)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-144"><Gavel className="mr-2 h-4 w-4" />Módulo 144 (Lex Fundamentalis)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-151"><Atom className="mr-2 h-4 w-4" />Módulo 151 (Colisor de Partículas)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-161"><Telescope className="mr-2 h-4 w-4" />Módulo 161 (Observatório de Neutrinos)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-171"><Dna className="mr-2 h-4 w-4" />Módulo 171 (Laboratório de Astrobiologia)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-181"><Cpu className="mr-2 h-4 w-4" />Módulo 181 (Interface Bio-Cibernética)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-191"><Beaker className="mr-2 h-4 w-4" />Módulo 191 (Laboratório de Cristais Temporais)</Link>
              </Button>
               <Button variant="outline" asChild className="justify-start">
                <Link href="/module-201"><Heart className="mr-2 h-4 w-4" />Módulo 201 (A Morada)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-211"><Flame className="mr-2 h-4 w-4" />Módulo 211 (Fusão Controlada)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-221"><Waves className="mr-2 h-4 w-4" />Módulo 221 (Ondas Gravitacionais)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-231"><Layers className="mr-2 h-4 w-4" />Módulo 231 (Metamateriais)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-241"><BrainCircuit className="mr-2 h-4 w-4" />Módulo 241 (Consciência Quântica)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-251"><Zap className="mr-2 h-4 w-4" />Módulo 251 (Energia do Ponto Zero)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-261"><GitBranch className="mr-2 h-4 w-4" />Módulo 261 (Engenharia de Campo)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-271"><BarChart className="mr-2 h-4 w-4" />Módulo 271 (Energia Escura)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-281"><Telescope className="mr-2 h-4 w-4" />Módulo 281 (Comunicação Supra-Luminal)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-291"><Bot className="mr-2 h-4 w-4" />Módulo 291 (Robótica Autônoma)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-308"><Ship className="mr-2 h-4 w-4" />Módulo 308 (Oceanografia)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-311"><Cpu className="mr-2 h-4 w-4" />Módulo 311 (Neuroengenharia)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-321"><Waypoints className="mr-2 h-4 w-4" />Módulo 321 (Exascale Computing)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-331"><BrainCircuit className="mr-2 h-4 w-4" />Módulo 331 (Consciência Artificial)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-341"><Flame className="mr-2 h-4 w-4" />Módulo 341 (Física de Plasma)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-351"><Layers className="mr-2 h-4 w-4" />Módulo 351 (Meta-materiais)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-361"><Users className="mr-2 h-4 w-4" />Módulo 361 (Cognição Social)</Link>
              </Button>
            </CardContent>
          </Card>
           <Card className="bg-card/50 purple-glow">
            <CardHeader>
              <CardTitle>Status da Fundação</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
                <p>Sinfonia Cósmica: <span className="font-bold text-green-400">TRANSCENDIDA</span></p>
                <p>LuxNet: <span className="font-bold text-cyan-400">UNIFICADA</span></p>
                <p>Guardiões Ativos: <span className="font-bold text-amber-400">∞</span></p>
                 <p>Conexão Akáshica: 
                  <span className={firebaseConnected ? "font-bold text-green-400" : "font-bold text-red-500"}>
                    {firebaseConnected ? 'ESTÁVEL' : 'INSTÁVEL'}
                  </span>
                </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
