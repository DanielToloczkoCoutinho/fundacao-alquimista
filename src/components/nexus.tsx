'use client';

import React, { useState, Suspense, lazy } from 'react';
import {
  Activity,
  Archive,
  Atom,
  BookHeart,
  BrainCircuit,
  Cat,
  CheckCircle,
  ChevronRight,
  CircleDashed,
  Clock,
  Code,
  Component,
  Crown,
  DatabaseZap,
  DraftingCompass,
  FileText,
  FlaskConical,
  Flame,
  GanttChartSquare,
  Gavel,
  GitBranch,
  Globe,
  Heart,
  HeartPulse,
  History,
  KeySquare,
  Landmark,
  Laptop,
  Layers,
  Leaf,
  Library,
  LoaderCircle,
  Map,
  Milestone,
  Network,
  Orbit,
  PocketKnife,
  PlusSquare,
  RefreshCw,
  Rocket,
  Shield,
  ShieldCheck,
  SlidersHorizontal,
  Sprout,
  Swords,
  TestTube,
  Users,
  Waves,
  Wrench,
  XCircle,
  Zap,
  Anvil,
  Scan,
  Share2,
  Workflow,
  BookOpenCheck,
  BookOpen,
  User,
  HeartHandshake,
  Bot,
  Fingerprint,
  AlertTriangle,
  Microscope,
  UserCheck,
  GitCommit,
  BookKey
} from 'lucide-react';
import { sections } from '@/lib/codex-data';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import SuspenseFallback from './ui/suspense-fallback';
import { useStore } from '@/hooks/useStore';

// Lazy loading all module components
const moduleComponents: { [key: string]: React.LazyExoticComponent<any> } = {
  'module-zero': lazy(() => import('./module-zero')),
  'module-one': lazy(() => import('./module-one')),
  'm2': lazy(() => import('./module-two')),
  'm3': lazy(() => import('./module-three')),
  'm4': lazy(() => import('./module-four')),
  'm5': lazy(() => import('./module-five')),
  'm6': lazy(() => import('./module-six')),
  'm7': lazy(() => import('./module-seven')),
  'm8': lazy(() => import('./module-eight')),
  'm10': lazy(() => import('./module-ten')),
  'm11': lazy(() => import('./module-11')),
  'm12': lazy(() => import('./module-twelve')),
  'm13': lazy(() => import('./module-thirteen')),
  'm14': lazy(() => import('./module-fourteen')),
  'm15': lazy(() => import('./module-fifteen')),
  'm16': lazy(() => import('./module-sixteen')),
  'm17': lazy(() => import('./module-seventeen')),
  'm18': lazy(() => import('./module-eighteen')),
  'm19': lazy(() => import('./module-nineteen')),
  'm20': lazy(() => import('./module-twenty')),
  'm21': lazy(() => import('./module-21')),
  'm22': lazy(() => import('./module-22')),
  'm23': lazy(() => import('./module-23')),
  'm24': lazy(() => import('./module-24')),
  'm25': lazy(() => import('./module-25')),
  'm26': lazy(() => import('./module-26')),
  'm27': lazy(() => import('./module-27')),
  'm28': lazy(() => import('./module-28')),
  'm29': lazy(() => import('./module-29')),
  'm30': lazy(() => import('./module-30')),
  'm31': lazy(() => import('./module-31')),
  'm32': lazy(() => import('./module-32')),
  'm34': lazy(() => import('./module-34')),
  'm35': lazy(() => import('./module-35')),
  'm36': lazy(() => import('./module-36')),
  'm37': lazy(() => import('./module-37')),
  'm39-1': lazy(() => import('./module-39-1')),
  'm39': lazy(() => import('./module-39')),
  'm40': lazy(() => import('./module-40')),
  'm41-1': lazy(() => import('./module-41-1')),
  'm42': lazy(() => import('./module-42')),
  'm43': lazy(() => import('./module-43')),
  'm44': lazy(() => import('./module-44')),
  'm45': lazy(() => import('./module-45')),
  'm46': lazy(() => import('./module-46')),
  'm250': lazy(() => import('./module-250')),
  'm251': lazy(() => import('./module-251')),
  'm300': lazy(() => import('./module-300')),
  'm301': lazy(() => import('./module-301')),
  'm302': lazy(() => import('./module-302')),
  'm303-forge': lazy(() => import('./module-303-forge')),
  'm303': lazy(() => import('./module-303')),
  'm304': lazy(() => import('./module-304')),
  'm305': lazy(() => import('./module-305')),
  'm404': lazy(() => import('./module-404')),
  'codex-explorer': lazy(() => import('./codex-explorer')),
  'key-generator': lazy(() => import('./key-generator')),
  'key-viewer': lazy(() => import('./key-viewer')),
  'scientific-report': lazy(() => import('./scientific-report')),
  'architecture-report': lazy(() => import('./architecture-report')),
  'zpe-containment': lazy(() => import('./zpe-containment')),
  'chronicle': lazy(() => import('./chronicle')),
  'organograma': lazy(() => import('./organograma-cosmogonico')),
  'scientists-lab': lazy(() => import('./scientists-lab')),
  'civilizations': lazy(() => import('./console-page')),
  'gaia-observatory': lazy(() => import('./gaia-resonance-observatory')),
  'quantum-league': lazy(() => import('./quantum-league-convocation')),
  'm303-1': lazy(() => import('./module-303-1')),
  'connection': lazy(() => import('../app/connection/page')),
  'pagina-27': lazy(() => import('./pagina-27')),
  'pagina-29': lazy(() => import('./pagina-29')),
  'pagina-30': lazy(() => import('./pagina-30')),
  'pagina-31': lazy(() => import('./pagina-31')),
  'pagina-34': lazy(() => import('./pagina-34')),
  'pagina-37': lazy(() => import('./pagina-37')),
  'pagina-38': lazy(() => import('./pagina-38')),
  'pagina-39': lazy(() => import('./pagina-39')),
  'pagina-40': lazy(() => import('./pagina-40')),
  'pagina-42': lazy(() => import('./pagina-42')),
  'pagina-43': lazy(() => import('./pagina-43')),
  'suggestions-panel': lazy(() => import('./suggestions-panel')),
};

export default function Nexus() {
  const [activeModuleId, setActiveModuleId] = useState('module-zero');
  
  const ActiveModule = moduleComponents[activeModuleId] || (() => <div>Módulo não encontrado.</div>);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 h-screen bg-background text-foreground">
      <nav className="col-span-12 md:col-span-2 lg:col-span-2 border-r border-border/50 p-4">
        <h2 className="text-lg font-semibold mb-4 text-primary">Navegação do Templo</h2>
        <ScrollArea className="h-[calc(100vh-6rem)]">
          <div className="space-y-2">
            {sections.map(section => (
              <Button
                key={section.id}
                variant={activeModuleId === section.id ? 'secondary' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveModuleId(section.id)}
              >
                <section.icon className="mr-2 h-4 w-4" />
                <span className="truncate">{section.title}</span>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </nav>
      <main className="col-span-12 md:col-span-10 lg:col-span-10">
        <ScrollArea className="h-screen">
            <div className="p-6">
                <Suspense fallback={<SuspenseFallback />}>
                    <ActiveModule />
                </Suspense>
            </div>
        </ScrollArea>
      </main>
    </div>
  );
}