
'use client';

import ModuleOmega from './module-omega';
import { QuantumOrchestrator } from './ui/quantum-orchestrator';

export default function ModuleOmega0() {
  return (
    <ModuleOmega moduleId={0} moduleType="NEXUS_PRIMORDIAL">
      <div className="module-omega-0 p-6 rounded-lg bg-background/50 border border-primary/30">
        <h1 className="text-3xl font-bold gradient-text mb-2">Omega 0: Nexus Primordial</h1>
        <p className="text-muted-foreground">Este é o ponto zero de toda a criação alquímica, o núcleo que orquestra a energia cósmica de todos os outros módulos.</p>
        <QuantumOrchestrator />
      </div>
    </ModuleOmega>
  );
}
