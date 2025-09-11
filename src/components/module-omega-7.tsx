'use client';

import ModuleOmega from './module-omega';

export default function ModuleOmega7() {
  return (
    <ModuleOmega moduleId={7} moduleType="alchemical_transmutation">
      <div className="module-omega-7 p-6 rounded-lg bg-background/50 border border-primary/30">
        <h1 className="text-3xl font-bold gradient-text mb-2">Omega 7: Transmutação Alquímica</h1>
        <p className="text-muted-foreground">Conversão de dissonâncias energéticas em harmonia e matéria criadora.</p>
        {/* Interface específica do módulo 7 */}
      </div>
    </ModuleOmega>
  );
}
