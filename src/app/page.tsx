'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { sections, type Section } from '@/lib/codex-data';
import MainSidebar from '@/components/main-sidebar';
import DocumentCard from '@/components/document-card';
import MainHeader from '@/components/main-header';
import KeyGenerator from '@/components/key-generator';
import Nexus from '@/components/nexus';
import ModuleZero from '@/components/module-zero';
import ConnectionPage from './connection/page';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

export default function Home() {
  const [selectedSectionId, setSelectedSectionId] = React.useState<string>(
    'nexus'
  );

  const selectedSection = sections.find((s) => s.id === selectedSectionId);

  const renderContent = () => {
    if (!selectedSectionId) {
      return (
        <div className="flex h-full items-center justify-center">
          <p className="text-muted-foreground">Section not found.</p>
        </div>
      );
    }
    
    switch (selectedSectionId) {
      case 'nexus':
        return <Nexus />;
      case 'module-zero':
        return <ModuleZero />;
      case 'tools':
        return <KeyGenerator />;
      case 'connection':
        return <ConnectionPage />;
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
            <p className="text-muted-foreground">No documents in this section.</p>
          </div>
        );
    }
  };
  
  const selectedTitle = sections.find(s => s.id === selectedSectionId)?.title;
  
  if (selectedSectionId === 'connection') {
    return <ConnectionPage />;
  }

  return (
    <SidebarProvider>
      <MainSidebar
        selectedSectionId={selectedSectionId}
        setSelectedSectionId={setSelectedSectionId}
      />
      <SidebarInset className="flex flex-col">
        <MainHeader />
        <main className="flex-1 overflow-y-auto p-6 bg-background">
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
