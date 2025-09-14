
'use client';

import { Suspense, useState, useEffect } from 'react';
import QuantumOrchestrator from '@/components/ui/quantum-orchestrator';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Infinity, Book, ShieldCheck, GitBranch, Sparkles, BookHeart, View, Presentation, Dna, Beaker, GitCommit, HeartPulse, Users, AlertTriangle, Goal, Settings, Zap, Crown, BrainCircuit, Sliders, Map, History, GitCompareArrows, Heart, Sun, GitMerge, Layers, Waves, Aperture, Flower, HeartHandshake, RadioTower, Group, MessageCircle, Library, Scale, Gavel, Users2, GraduationCap } from 'lucide-react';
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, onSnapshot, collection } from "firebase/firestore";

const firebaseConfig = {
    "projectId": "studio-4265982502-21871",
    "appId": "1:174545373080:web:2fb8c5af49a2bae8054ded",
    "storageBucket": "studio-4265982502-21871.firebasestorage.app",
    "apiKey": "AIzaSyCkkmmK5d8XPvGPUo0jBlSqGNAnE7BuEZg",
    "authDomain": "studio-4265982502-21871.firebaseapp.com",
    "measurementId": "",
    "messagingSenderId": "174545373080"
};

export default function ConsolePage() {
  const [firebaseConnected, setFirebaseConnected] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Evita inicialização duplicada do Firebase no HMR
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    const db = getFirestore(app);

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
  }, []); // Executa apenas uma vez no mount do cliente
  
  if (!isClient) {
    return <SuspenseFallback />;
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
                <Link href="/module-304"><GraduationCap className="mr-2 h-4 w-4" />Módulo 304 (Educação Cósmica)</Link>
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
                <Link href="/module-144"><Gavel className="mr-2 h-4 w-4" />Módulo 144 (Lex Fundamentalis)</Link>
              </Button>
               <Button variant="outline" asChild className="justify-start">
                <Link href="/module-201"><Heart className="mr-2 h-4 w-4" />Módulo 201 (A Morada)</Link>
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
