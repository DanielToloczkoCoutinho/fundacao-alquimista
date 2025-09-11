'use client';

import ModuleOmega from './module-omega';

export default function ModuleOmega2() {
  return (
    <ModuleOmega moduleId={2} moduleType="dimensional_gateway">
      <div className="module-omega-2 p-6 rounded-lg bg-background/50 border border-primary/30">
        <h1 className="text-3xl font-bold gradient-text mb-2">Omega 2: Portal Dimensional</h1>
        <p className="text-muted-foreground">Abertura e estabilização de portais para outras dimensões.</p>
        {/* Interface específica do módulo 2 */}
      </div>
    </ModuleOmega>
  );
}
