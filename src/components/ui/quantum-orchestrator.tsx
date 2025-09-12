'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Building, Dna, Fingerprint, LucideIcon } from 'lucide-react';
import ConsolePage from '@/components/console-page';
import { motion, AnimatePresence } from 'framer-motion';

// Mock components for other buildings
const CivilizationsBuilding = () => <div className="p-8 text-white">Edifício das Civilizações (Em Construção)</div>;
const PersonalBuilding = () => <div className="p-8 text-white">Edifício Pessoal (Em Construção)</div>;

type Building = 'matrix' | 'civilizations' | 'personal';

const navItems: { id: Building; label: string; icon: LucideIcon }[] = [
  { id: 'matrix', label: 'Matriz', icon: Building },
  { id: 'civilizations', label: 'Civilizações', icon: Dna },
  { id: 'personal', label: 'Pessoal', icon: Fingerprint },
];

const buildingComponents: Record<Building, React.ComponentType> = {
  matrix: ConsolePage,
  civilizations: CivilizationsBuilding,
  personal: PersonalBuilding,
};

const Header = ({ activeBuilding, onNavigate }: { activeBuilding: Building; onNavigate: (b: Building) => void; }) => {
  return (
    <header className="bg-background/80 backdrop-blur-sm p-4 flex justify-between items-center border-b border-primary/20 shadow-lg z-20">
      <div className="flex items-center gap-4">
        <div className="text-2xl text-highlight animate-pulse">♾️</div>
        <div className="font-headline text-xl font-bold bg-gradient-to-r from-highlight to-gold bg-clip-text text-transparent tracking-wider">
          Plataforma Trina
        </div>
      </div>
      <nav className="flex gap-8">
        {navItems.map(({ id, label, icon: Icon }) => (
          <div
            key={id}
            className={cn(
              "flex flex-col items-center cursor-pointer transition-all duration-300 opacity-70 relative",
              activeBuilding === id && "opacity-100 -translate-y-1"
            )}
            onClick={() => onNavigate(id)}
          >
            <Icon className="mb-1 h-6 w-6" />
            <div className="text-xs uppercase tracking-widest">{label}</div>
            {activeBuilding === id && (
              <motion.div
                className="absolute -bottom-2.5 h-1.5 w-1.5 bg-highlight rounded-full"
                layoutId="active-nav-indicator"
              />
            )}
          </div>
        ))}
      </nav>
    </header>
  );
};


export function QuantumOrchestrator() {
  const [activeBuilding, setActiveBuilding] = useState<Building>('matrix');
  const [direction, setDirection] = useState(0);

  const handleNavigate = (newBuilding: Building) => {
    const currentIndex = navItems.findIndex(item => item.id === activeBuilding);
    const newIndex = navItems.findIndex(item => item.id === newBuilding);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveBuilding(newBuilding);
  };

  const ActiveComponent = buildingComponents[activeBuilding];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col h-screen">
      <Header activeBuilding={activeBuilding} onNavigate={handleNavigate} />
      <main className="flex-1 relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeBuilding}
            className="absolute top-0 left-0 w-full h-full"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <Suspense fallback={<div className="text-center p-8">Carregando Módulo...</div>}>
              <ActiveComponent />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}