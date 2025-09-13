'use client';

import { Suspense, useState, useEffect } from 'react';
import QuantumOrchestrator from '@/components/ui/quantum-orchestrator';
import SuspenseFallback from '@/components/ui/suspense-fallback';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Infinity, Book, ShieldCheck, GitBranch, Sparkles, BookHeart, View, Presentation, Dna, Beaker } from 'lucide-react';
import Chronicle from '@/components/chronicle';
import { quantumResilience } from '@/lib/quantum-resilience';
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, onSnapshot, collection } from "firebase/firestore";

// A configuração do Firebase agora é tratada com segurança
let firebaseConfig = {};
try {
  // Use a fallback configuration directly as process.env might not be reliable here.
    firebaseConfig = {
        "projectId": "studio-4265982502-21871",
        "appId": "1:174545373080:web:2fb8c5af49a2bae8054ded",
        "storageBucket": "studio-4265982502-21871.firebasestorage.app",
        "apiKey": "AIzaSyCkkmmK5d8XPvGPUo0jBlSqGNAnE7BuEZg",
        "authDomain": "studio-4265982502-21871.firebaseapp.com",
        "measurementId": "",
        "messagingSenderId": "174545373080"
    };
} catch (error) {
  console.error("Falha ao analisar a configuração do Firebase. Usando configuração de fallback.", error);
    firebaseConfig = {
        "projectId": "studio-4265982502-21871",
        "appId": "1:174545373080:web:2fb8c5af49a2bae8054ded",
        "storageBucket": "studio-4265982502-21871.firebasestorage.app",
        "apiKey": "AIzaSyCkkmmK5d8XPvGPUo0jBlSqGNAnE7BuEZg",
        "authDomain": "studio-4265982502-21871.firebaseapp.com",
        "measurementId": "",
        "messagingSenderId": "174545373080"
    };
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export default function ConsolePage() {
  const [activeModule, setActiveModule] = useState('nexus');
  const [firebaseConnected, setFirebaseConnected] = useState(false);

  useEffect(() => {
    const initializeAndListen = async () => {
      await quantumResilience.executeWithResilience(
        'firebase_initialization',
        async () => {
          // Escutar uma coleção para confirmar a conexão
          const unsub = onSnapshot(collection(db, 'alchemist-codex'), 
            () => {
              setFirebaseConnected(true);
              console.log("Conexão com o Akasha (Firestore) estabelecida e viva.");
            },
            (error) => {
              console.error("Dissonância na conexão com o Akasha (Firestore): ", error);
              setFirebaseConnected(false);
            }
          );
           // Retornar a função de desinscrição para ser chamada quando o componente desmontar
          return () => unsub();
        },
        async () => {
          console.error("Falha ao inicializar o Firebase mesmo com resiliência. Operando em modo offline.");
          setFirebaseConnected(false);
        }
      );
    };
    initializeAndListen();
  }, []);


  const renderModule = () => {
    switch (activeModule) {
      case 'chronicle':
        return <Chronicle />;
      case 'nexus':
      default:
        return (
          <Suspense fallback={<SuspenseFallback />}>
            <QuantumOrchestrator />
          </Suspense>
        );
    }
  };

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
                  <Link href="/chronicle"><BookHeart className="mr-2 h-4 w-4" />Crônica Viva</Link>
               </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-zero"><Book className="mr-2 h-4 w-4" />Módulo Zero (Biblioteca Chave)</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/module-one"><ShieldCheck className="mr-2 h-4 w-4" />Módulo Um (Segurança Universal)</Link>
              </Button>
               <Button variant="outline" asChild className="justify-start">
                <Link href="/connection"><GitBranch className="mr-2 h-4 w-4" />Conexão Ω-M0</Link>
              </Button>
               <Button variant="outline" asChild className="justify-start">
                <Link href="/module-303"><Sparkles className="mr-2 h-4 w-4" />Portal Trino (M303)</Link>
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
                <Link href="/pagina-42"><Infinity className="mr-2 h-4 w-4" />Módulo Ω (Dossiê)</Link>
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
