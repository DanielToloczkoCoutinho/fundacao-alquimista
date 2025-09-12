'use client';

import React, { useState, useCallback, Suspense, useEffect } from 'react';
import { Building, Globe, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import SuspenseFallback from './suspense-fallback';

// Lazy load building components
const ConsolePage = React.lazy(() => import('@/components/console-page'));
const ArchitectureReport = React.lazy(() => import('@/components/architecture-report'));
const PersonalBuilding = React.lazy(() => import('@/components/module-zero'));

type BuildingId = 'matrix' | 'civilizations' | 'personal';

const navItems: { id: BuildingId; label: string; icon: React.ElementType }[] = [
  { id: 'matrix', label: 'Matriz', icon: Building },
  { id: 'civilizations', label: 'Civilizações', icon: Globe },
  { id: 'personal', label: 'Pessoal', icon: User },
];

function Header({ activeBuilding, onNavigate }: { activeBuilding: BuildingId, onNavigate: (id: BuildingId) => void }) {
    return (
        <header className="main-header">
            <div className="logo">
                <div className="logo-icon">♾️</div>
                <div className="logo-text">Plataforma Trina</div>
            </div>
            
            <nav className="nav-buildings">
              {navItems.map(({ id, label, icon: Icon }) => (
                <div
                  key={id}
                  className={cn("nav-item", activeBuilding === id && "active")}
                  onClick={() => onNavigate(id)}
                >
                  <div className="nav-icon"><Icon /></div>
                  <div className="nav-text">{label}</div>
                   {activeBuilding === id && <motion.div className="active-indicator" layoutId="active-indicator" />}
                </div>
              ))}
            </nav>
        </header>
    );
}

export function QuantumOrchestrator() {
  const [activeBuilding, setActiveBuilding] = useState<BuildingId>('matrix');
  const [direction, setDirection] = useState(0);

  const handleNavigate = useCallback((buildingId: BuildingId) => {
    const currentIndex = navItems.findIndex(item => item.id === activeBuilding);
    const nextIndex = navItems.findIndex(item => item.id === buildingId);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActiveBuilding(buildingId);
  }, [activeBuilding]);
  
  const buildingComponents: Record<BuildingId, React.ReactNode> = {
    matrix: (
      <Suspense fallback={<SuspenseFallback />}>
        <ConsolePage />
      </Suspense>
    ),
    civilizations: (
        <Suspense fallback={<SuspenseFallback />}>
            <ArchitectureReport />
        </Suspense>
    ),
    personal: (
      <Suspense fallback={<SuspenseFallback />}>
        <PersonalBuilding />
      </Suspense>
    ),
  };

  return (
    <div className="platform-container">
      <Header activeBuilding={activeBuilding} onNavigate={handleNavigate} />
      <main className="main-content">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeBuilding}
            className="building-wrapper"
            custom={direction}
            variants={{
                enter: (direction: number) => ({
                    x: direction > 0 ? '100%' : '-100%',
                    opacity: 0,
                }),
                center: {
                    x: 0,
                    opacity: 1,
                },
                exit: (direction: number) => ({
                    x: direction < 0 ? '100%' : '-100%',
                    opacity: 0,
                }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }}
          >
            {buildingComponents[activeBuilding]}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
