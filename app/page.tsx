
'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { sections } from '@/lib/codex-data';
import MainSidebar from '@/components/main-sidebar';
import DocumentCard from '@/components/document-card';
import MainHeader from '@/components/main-header';
import KeyGenerator from '@/components/key-generator';
import Nexus from '@/components/nexus';
import ModuleZero from '@/components/module-zero';
import ModuleOne from '@/components/module-one';
import Module303 from '@/components/module-303';
import ConnectionPage from '@/app/connection/page';
import ConsolePage from '@/app/console/page';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ModuleTwo from '@/components/module-two';
import CodexExplorer from '@/components/codex-explorer';
import KeyViewer from '@/components/key-viewer';

// Placeholder para os novos módulos que ainda não possuem componente dedicado
const GenericModulePlaceholder = ({ title }: { title: string }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>Este módulo está em desenvolvimento. A interface dedicada estará disponível em breve.</CardDescription>
    </CardHeader>
    <CardContent>
      <p>A funcionalidade principal deste módulo está sendo integrada à Sinfonia Cósmica. Os resultados de suas operações, incluindo verificações de integridade, podem ser observados nos logs do Nexus Central (Módulo 9).</p>
    </CardContent>
  </Card>
);


export default function Home() {
  const [selectedSectionId, setSelectedSectionId] = React.useState<string>(
    'nexus'
  );

  const renderContent = () => {
    switch (selectedSectionId) {
      case 'nexus':
        return <Nexus />;
      case 'console':
        return <ConsolePage />;
      case 'codex-explorer':
        return <CodexExplorer />;
      case 'master-keys':
        return <KeyViewer />;
      case 'module-303':
        return <Module303 />;
      case 'module-one':
        return <ModuleOne />;
      case 'module-zero':
        return <ModuleZero />;
      case 'connection':
        // A página de conexão tem seu próprio layout de tela cheia
        return null;
      case 'tools':
        return <KeyGenerator />;
      case 'm2':
        return <ModuleTwo />;
      case 'm3':
        return <GenericModulePlaceholder title="Módulo 3: Previsão" />;
      case 'm4':
        return <GenericModulePlaceholder title="Módulo 4: Validação" />;
      case 'm5':
        return <GenericModulePlaceholder title="Módulo 5: Ética (ELENYA)" />;
      case 'm6':
        return <GenericModulePlaceholder title="Módulo 6: Frequências" />;
      case 'm7':
        return <GenericModulePlaceholder title="Módulo 7: SOFA" />;
      case 'm8':
        return <GenericModulePlaceholder title="Módulo 8: PIRC" />;
      default:
        const section = sections.find((s) => s.id === selectedSectionId);
        if (section && section.documents.length > 0) {
           return (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {section.documents.map((doc, index) => (
                <DocumentCard key={`${section.id}-${index}`} document={doc} />
              ))}
            </div>
          );
        }
        return (
           <div className="flex h-full items-center justify-center">
            <p className="text-muted-foreground">Selecione um módulo ou seção para começar.</p>
          </div>
        );
    }
  };
  
  const selectedSection = sections.find(s => s.id === selectedSectionId);
  const selectedTitle = selectedSection?.title;
  
  // Renderiza a página de conexão em tela cheia separadamente
  if (selectedSectionId === 'connection') {
    return <ConnectionPage />;
  }

  return (
    <SidebarProvider>
      <MainSidebar
        selectedSectionId={selectedSectionId}
        setSelectedSectionId={setSelectedSectionId}
      />
      <SidebarInset className="flex flex-col bg-background cosmic-bg">
        <MainHeader />
        <main className="flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSectionId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {selectedTitle && (
                 <h1 className="mb-6 text-3xl font-bold font-headline text-primary">
                  {selectedTitle}
                 </h1>
              )}
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

    