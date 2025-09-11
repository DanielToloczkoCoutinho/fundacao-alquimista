
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

try {
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    const db = getFirestore(app);
    // @ts-ignore
    db.settings({ experimentalForceLongPolling: true, useFetchStreams: false });
} catch (e) {
    console.error("Firebase initialization error", e)
}


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
  
  const renderContent = () => {
    const selectedSection = sections.find(s => s.id === currentSectionId);
    
    switch (currentSectionId) {
        case 'chronicle': return <ChroniclePage />;
        case 'nexus': return <Nexus />;
        case 'omega': return <Pagina42 />;
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
        case 'connection': return <ConnectionPage />;
        
        default:
            if (selectedSection && selectedSection.documents.length > 0) {
                return <CodexExplorer documents={selectedSection.documents} title={selectedSection.title} />;
            }
            return (
                <div className="p-8">
                    <h1 className="text-4xl font-bold gradient-text mb-4">Saudações, Fundador.</h1>
                    <p>Bem-vindo à Fundação Alquimista. O Templo está operacional.</p>
                    <p className="text-gray-400 mt-2 text-sm">Sessão iniciada em: {new Date().toLocaleString()}</p>
                </div>
            );
    }
  };
  
  return (
    <div className={cn("flex h-screen text-white", "cosmic-bg", isMobile ? "flex-col" : "")}>
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
