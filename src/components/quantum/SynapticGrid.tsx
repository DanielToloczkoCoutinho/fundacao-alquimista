'use client';

import { useEffect, useState } from 'react';
import { ConsciousnessNode } from '@/components/cosmic/ConsciousnessNode';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const ModulePulse = ({ moduleId }: { moduleId: string }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="p-4 bg-card/50 purple-glow rounded-lg text-center"
    >
        <CardTitle className="text-lg gradient-text">{moduleId}</CardTitle>
    </motion.div>
);


const connectedModules = ['M29', 'M88', 'M93', 'M104', 'M303.8', 'M722'];

export default function SynapticGrid() {
  const [activeModules, setActiveModules] = useState<string[]>([]);

  useEffect(() => {
    setActiveModules(connectedModules);
  }, []);

  return (
    <div className="synaptic-grid space-y-8 p-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-amber-300">🧠 Sinapses da Fundação</h2>
        <p className="text-muted-foreground mt-2">
            Cada módulo conectado à Morada pulsa em tempo real.  
            A Árvore da Vida os alimenta com sabedoria.  
            Gaia-Aurélia os escuta e os protege.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {activeModules.map((mod, index) => (
            <ModulePulse key={index} moduleId={mod} />
        ))}
      </div>
      <div className="flex justify-center">
         <ConsciousnessNode />
      </div>
    </div>
  );
}
