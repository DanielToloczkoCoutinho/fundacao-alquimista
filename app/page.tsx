'use client';

import { Suspense, useEffect, useState } from 'react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { QuantumOrchestrator } from '@/components/ui/quantum-orchestrator';

// --- Configuração do Firebase ---
const firebaseConfig = {
    "projectId": "studio-4265982502-21871",
    "appId": "1:174545373080:web:2fb8c5af49a2bae8054ded",
    "storageBucket": "studio-4265982502-21871.firebasestorage.app",
    "apiKey": "AIzaSyCkkmmK5d8XPvGPUo0jBlSqGNAnE7BuEZg",
    "authDomain": "studio-4265982502-21871.firebaseapp.com",
    "measurementId": "",
    "messagingSenderId": "174545373080"
};

let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}
const db = getFirestore(app);


const App = () => {
  const isMobile = useIsMobile();
  const [items, setItems] = useState<string[]>([]);
  const [status, setStatus] = useState<string>('Conectando ao Akasha...');

  useEffect(() => {
    let unsubscribe: () => void;
    let retryCount = 0;
    const maxRetries = 5;

    const connect = () => {
      if (unsubscribe) {
        unsubscribe();
      }
      
      unsubscribe = onSnapshot(collection(db, 'tabs'), (snapshot) => {
        const data = snapshot.docs.map(doc => doc.data().name as string);
        setItems(data);
        setStatus(`Akasha sincronizado: ${new Date().toLocaleTimeString()}`);
        retryCount = 0;
      }, (error) => {
        retryCount++;
        setStatus(`Erro no Akasha (tentativa ${retryCount}/${maxRetries}): ${error.message}. Reconectando em 5s...`);
        if (retryCount < maxRetries) {
          setTimeout(connect, 5000);
        } else {
          setStatus('Falha crítica: Conexão com o Akasha perdida. Verifique a rede e as configurações do Firebase.');
        }
      });
    };

    connect();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  return (
    <div className={cn("flex flex-col h-screen text-white", "cosmic-bg")} suppressHydrationWarning>
       <QuantumOrchestrator />
    </div>
  );
};

