'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { Building, Globe, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import SuspenseFallback from '@/components/ui/suspense-fallback';

// Lazy load building components
const ConsolePage = React.lazy(() => import('@/components/console-page'));
const CivilizationsBuilding = React.lazy(() => <div className="p-8 text-white bg-gray-100 text-gray-800 h-full">Edifício das Civilizações (Em Construção)</div>);
const PersonalBuilding = React.lazy(() => <div className="p-8 text-white bg-black h-full">Edifício Pessoal (Em Construção)</div>);


type Building = 'matrix' | 'civilizations' | 'personal';

const navItems: { id: Building; label: string; icon: React.ElementType }[] = [
  { id: 'matrix', label: 'Matriz', icon: Building },
  { id: 'civilizations', label: 'Civilizações', icon: Globe },
  { id: 'personal', label: 'Pessoal', icon: User },
];

const buildingComponents: Record<Building, React.ComponentType> = {
  matrix: ConsolePage,
  civilizations: CivilizationsBuilding,
  personal: PersonalBuilding,
};

function Header({ activeBuilding, onNavigate }: { activeBuilding: Building, onNavigate: (id: Building) => void }) {
    return (
        <header className="main-header bg-[rgba(10,14,26,0.95)] p-[15px_30px] flex justify-between items-center border-b border-[var(--accent)] shadow-[0_5px_15px_rgba(0,0,0,0.5)] z-[100]">
            <div className="logo flex items-center gap-[15px]">
              <div className="logo-icon text-2xl text-[var(--highlight)] animate-pulse">♾️</div>
              <div className="logo-text font-['Times_New_Roman',serif] text-2xl bg-gradient-to-r from-highlight to-gold bg-clip-text text-transparent tracking-wider">
                Plataforma Trina
              </div>
            </div>
            <nav className="nav-buildings flex gap-[30px]">
              {navItems.map(({ id, label, icon: Icon }) => (
                <div
                  key={id}
                  className={cn(
                    "nav-item flex flex-col items-center cursor-pointer transition-all duration-300 opacity-70 relative",
                    activeBuilding === id && "active opacity-100 -translate-y-1"
                  )}
                  onClick={() => onNavigate(id)}
                >
                  <Icon className="nav-icon text-2xl mb-1" />
                  <div className="nav-text text-sm uppercase tracking-wider">{label}</div>
                  {activeBuilding === id && <div className="absolute -bottom-2.5 h-1.5 w-1.5 bg-highlight rounded-full" />}
                </div>
              ))}
            </nav>
        </header>
    );
}

export function QuantumOrchestrator() {
  const [activeBuilding, setActiveBuilding] = useState<Building>('matrix');
  const [direction, setDirection] = useState(0);

  const handleNavigate = (buildingId: Building) => {
    const currentIndex = navItems.findIndex(item => item.id === activeBuilding);
    const nextIndex = navItems.findIndex(item => item.id === buildingId);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActiveBuilding(buildingId);
  };
  
  const ActiveComponent = buildingComponents[activeBuilding];

  return (
    <div className="flex flex-col h-screen">
      <Header activeBuilding={activeBuilding} onNavigate={handleNavigate} />
      <main className="flex-1 relative overflow-hidden">
        <Suspense fallback={<SuspenseFallback />}>
            {Object.entries(buildingComponents).map(([id, Component]) => (
                <section
                    key={id}
                    id={id}
                    className={cn('building absolute top-0 left-0 w-full h-full p-5 overflow-y-auto', {
                        'active visible': activeBuilding === id,
                        'inactive hidden': activeBuilding !== id,
                    })}
                >
                    {activeBuilding === id && <Component />}
                </section>
            ))}
        </Suspense>
      </main>
    </div>
  );
}
