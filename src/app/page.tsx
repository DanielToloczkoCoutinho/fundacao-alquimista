'use client';

import { Suspense, useEffect, useState } from 'react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { cn } from "@/lib/utils";
import { sections } from "@/lib/codex-data";
import type { Section, Document } from "@/lib/codex-data";
import ModuleZero from "@/components/module-zero";
import ModuleOne from "@/components/module-one";
import ModuleTwo from "@/components/module-two";
import ModuleThree from "@/components/module-three";
import ModuleFour from "@/components/module-four";
import ModuleFive from "@/components/module-five";
import ModuleSix from "@/components/module-six";
import ModuleSeven from "@/components/module-seven";
import ModuleEight from "@/components/module-eight";
import ModuleTen from "@/components/module-ten";
import Module250 from "@/components/module-250";
import Nexus from "@/components/nexus";
import Module303 from "@/components/module-303";
import KeyViewer from "@/components/key-viewer";
import CodexExplorer from "@/components/codex-explorer";
import ConnectionPage from "@/app/connection/page";
import GaiaResonanceObservatory from "@/components/gaia-resonance-observatory";
import ZpeContainment from "@/components/zpe-containment";
import QuantumLeagueConvocation from "@/components/quantum-league-convocation";
import Pagina42 from "@/components/pagina-42";
import ChroniclePage from "@/components/chronicle";
import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from '@/components/ui/badge';
import Module300 from '@/components/module-300';
import Module301 from '@/components/module-301';
import Module302 from '@/components/module-302';
import Module303Forge from '@/components/module-303-forge';
import Module304 from '@/components/module-304';
import Module305 from '@/components/module-305';
import OrganogramaCosmogonico from '@/components/organograma-cosmogonico';
import Module404 from '@/components/module-404';
import ScientistsLab from '@/components/scientists-lab';
import Module251 from '@/components/module-251';
import Pagina27 from '@/components/pagina-27';
import Module11 from '@/components/module-11';
import ModuleTwelve from '@/components/module-twelve';
import ModuleThirteen from '@/components/module-thirteen';
import ModuleFourteen from '@/components/module-fourteen';
import ModuleFifteen from '@/components/module-fifteen';
import ModuleSixteen from '@/components/module-sixteen';
import ModuleSeventeen from '@/components/module-seventeen';
import ModuleEighteen from '@/components/module-eighteen';
import ModuleNineteen from '@/components/module-nineteen';
import ModuleTwenty from '@/components/module-twenty';
import Module21 from '@/components/module-21';
import Module22 from '@/components/module-22';
import Module23 from '@/components/module-23';
import Module24 from '@/components/module-24';
import Module25 from '@/components/module-25';
import Module26 from '@/components/module-26';
import Module28 from '@/components/module-28';
import Module29 from '@/components/module-29';
import ScientificReport from '@/components/scientific-report';
import Module30 from '@/components/module-30';


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


const Sidebar = ({ onNavigate, currentSectionId }: { onNavigate: (content: string) => void; currentSectionId: string }) => (
  <nav className="w-72 p-4 bg-gray-800/50 backdrop-blur-sm h-screen text-white border-r border-purple-500/20 overflow-y-auto">
    <h2 className="text-xl font-bold mb-4 text-purple-300">Fundação Alquimista</h2>
    {sections.map((section) => (
      <button
        key={section.id}
        onClick={() => onNavigate(section.id)}
        className={cn(
          "w-full text-left p-2 mb-2 rounded hover:bg-gray-700/70 flex items-center transition-colors",
          currentSectionId === section.id && "bg-purple-600/50"
        )}
      >
        <section.icon className="mr-3 text-lg h-5 w-5 shrink-0" />
        <span className="truncate">{section.title}</span>
      </button>
    ))}
  </nav>
);

const App = () => {
  const [currentSectionId, setCurrentSectionId] = useState<string>("chronicle");
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

  
  const renderContent = () => {
    const selectedSection = sections.find(s => s.id === currentSectionId);
    
    switch (currentSectionId) {
        case 'chronicle': return <ChroniclePage />;
        case 'scientific-report': return <ScientificReport />;
        case 'pagina-27': return <Pagina27 />;
        case 'organograma': return <OrganogramaCosmogonico />;
        case 'nexus': return <Nexus />;
        case 'scientists-lab': return <ScientistsLab />;
        case 'console': return <ConsolePage />;
        case 'codex-explorer':
            const allDocuments = sections.reduce((acc, section) => [...acc, ...section.documents], [] as Document[]);
            return <CodexExplorer documents={allDocuments} title="Explorador do Códex" />;
        case 'master-keys': return <KeyViewer />;
        case 'module-303': return <Module303 />;
        case 'gaia-observatory': return <GaiaResonanceObservatory />;
        case 'quantum-league': return <QuantumLeagueConvocation />;
        case 'tools': return <ZpeContainment />;
        case 'module-zero': return <ModuleZero />;
        case 'module-one': return <ModuleOne />;
        case 'm2': return <ModuleTwo />;
        case 'm3': return <ModuleThree />;
        case 'm4': return <ModuleFour />;
        case 'm5': return <ModuleFive />;
        case 'm6': return <ModuleSix />;
        case 'm7': return <ModuleSeven />;
        case 'm8': return <ModuleEight />;
        case 'm10': return <ModuleTen />;
        case 'm11': return <Module11 />;
        case 'm12': return <ModuleTwelve />;
        case 'm13': return <ModuleThirteen />;
        case 'm14': return <ModuleFourteen />;
        case 'm15': return <ModuleFifteen />;
        case 'm16': return <ModuleSixteen />;
        case 'm17': return <ModuleSeventeen />;
        case 'm18': return <ModuleEighteen />;
        case 'm19': return <ModuleNineteen />;
        case 'm20': return <ModuleTwenty />;
        case 'm21': return <Module21 />;
        case 'm22': return <Module22 />;
        case 'm23': return <Module23 />;
        case 'm24': return <Module24 />;
        case 'm25': return <Module25 />;
        case 'm26': return <Module26 />;
        case 'm28': return <Module28 />;
        case 'm29': return <Module29 />;
        case 'm30': return <Module30 />;
        case 'm250': return <Module250 />;
        case 'm251': return <Module251 />;
        case 'm300': return <Module300 />;
        case 'm301': return <Module301 />;
        case 'm302': return <Module302 />;
        case 'm303-forge': return <Module303Forge />;
        case 'm304': return <Module304 />;
        case 'm305': return <Module305 />;
        case 'm404': return <Module404 />;
        case 'connection': return <ConnectionPage />;
        case 'living-library':
        case 'equations':
        case 'quantum-infrastructure':
        case 'defense-protocols':
            if (selectedSection && selectedSection.documents.length > 0) {
                return <CodexExplorer documents={selectedSection.documents} title={selectedSection.title} />;
            }
        
        default:
            if (selectedSection && selectedSection.documents.length > 0) {
                return <CodexExplorer documents={selectedSection.documents} title={selectedSection.title} />;
            }
            return (
                <div className="p-8">
                    <h1 className="text-4xl font-bold gradient-text mb-4">Saudações, Fundador. <Badge>Ativo</Badge></h1>
                    <p>Bem-vindo à Fundação Alquimista. O Templo está operacional.</p>
                     <p className="text-amber-400 mt-4 text-sm">{status}</p>
                    <p className="text-gray-400 mt-2 text-sm">Sessão iniciada em: {new Date().toLocaleString()}</p>
                     <div>
                        <h2 className="text-xl mt-4">Abas (Debug)</h2>
                        <ul>
                        {items.map((item, index) => (
                            <li key={index} className="ml-4">{item}</li>
                        ))}
                        </ul>
                    </div>
                </div>
            );
    }
  };
  
  return (
    <div className={cn("flex h-screen text-white", "cosmic-bg", isMobile ? "flex-col" : "")} suppressHydrationWarning>
      <Sidebar onNavigate={setCurrentSectionId} currentSectionId={currentSectionId} />
      <main className={cn("flex-1 overflow-auto p-6", isMobile ? "p-4" : "")}>
        <Suspense fallback={<div className="text-center">Carregando Módulo...</div>}>
            {renderContent()}
        </Suspense>
      </main>
    </div>
  );
};

export default App;
