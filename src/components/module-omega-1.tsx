
'use client';

import ModuleOmega from './module-omega';

export default function ModuleOmega1() {
  return (
    <ModuleOmega moduleId={1} moduleType="SYNTHESIS_ENGINE">
      <div className="module-omega-1 p-6 rounded-lg bg-background/50 border border-primary/30">
        <h1 className="text-3xl font-bold gradient-text mb-2">Omega 1: Motor de Síntese</h1>
        <p className="text-muted-foreground">Interface para o motor de síntese alquímica e reações de matéria.</p>
        {/* Interface da câmara de reação será desenvolvida aqui */}
      </div>
    </ModuleOmega>
  );
}
