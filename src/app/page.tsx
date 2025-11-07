"use client";
import React, { useState } from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Beaker, Binary, ScrollText } from 'lucide-react';
import Header from '@/app/components/header';
import CodeWeaverPage from '@/app/components/code-weaver-page';
import CosmicForgePage from '@/app/components/cosmic-forge-page';
import SystemCodexPage from '@/app/components/system-codex-page';
import { AppIcon } from '@/app/components/icons';

type LogEntry = {
  id: string;
  type: 'weaver' | 'forge';
  data: any;
  timestamp: Date;
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('weaver');
  const [log, setLog] = useState<LogEntry[]>([]);

  const addToLog = (entry: Omit<LogEntry, 'timestamp' | 'id'>) => {
    setLog(prev => [{ ...entry, timestamp: new Date(), id: crypto.randomUUID() }, ...prev]);
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'weaver':
        return <CodeWeaverPage logAction={addToLog} />;
      case 'forge':
        return <CosmicForgePage logAction={addToLog} />;
      case 'codex':
        return <SystemCodexPage log={log} />;
      default:
        return <CodeWeaverPage logAction={addToLog} />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-3 p-2">
              <AppIcon className="w-8 h-8 text-primary" />
              <h1 className="text-xl font-headline font-bold text-sidebar-foreground">
                VORTEXWEAVER
              </h1>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setActiveTab('weaver')}
                  isActive={activeTab === 'weaver'}
                  tooltip={{ children: 'Code Weaver' }}
                >
                  <Binary />
                  <span>Code Weaver</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setActiveTab('forge')}
                  isActive={activeTab === 'forge'}
                  tooltip={{ children: 'Cosmic Forge' }}
                >
                  <Beaker />
                  <span>Cosmic Forge</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setActiveTab('codex')}
                  isActive={activeTab === 'codex'}
                  tooltip={{ children: 'System Codex' }}
                >
                  <ScrollText />
                  <span>System Codex</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <main className="flex-1 flex flex-col p-4 md:p-6 lg:p-8">
            <Header activeTab={activeTab} />
            <div className="flex-1 mt-6">
              {renderActiveTab()}
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
